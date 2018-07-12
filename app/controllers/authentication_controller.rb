class AuthenticationController < ApplicationController
	# when signing up and authenticating a user we won't need a token. We'll only require user credentials.
	skip_before_action :authorize_request, only: :authenticate

	# return auth token once user is authenticated
	def authenticate
		auth_token = AuthenticateUser.new(auth_params[:email], auth_params[:password]).call
		user = User.find_by(email: auth_params[:email])
		#contacts = user.contacts
		json_response(return_status: 'success',auth_token: auth_token, user: user)
	end

	private
		def auth_params
			params.permit(:email, :password)
		end
end
