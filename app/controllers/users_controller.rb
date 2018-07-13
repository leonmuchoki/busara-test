class UsersController < ApplicationController
  # when signing up and authenticating a user we won't need a token. We'll only require user credentials.
	skip_before_action :authorize_request, only: :create

	# POST /signup
	# return authenticated token upon signup
	def create
			user = User.create!(user_params)
			auth_token = AuthenticateUser.new(user.email, user.password).call
			#businesses = Business.all
			response = { status: 200, message: Message.account_created, auth_token: auth_token, user_id: user.id }
			json_response(response, :created)
	end

	private
		def user_params
			params.permit(:name, :email, :password, :password_confirmation)
		end
end
