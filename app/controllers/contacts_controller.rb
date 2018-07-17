class ContactsController < ApplicationController
	before_action :set_business, only: [:show, :update, :destroy]
	#skip_before_action :authorize_request, only: :create

	# POST /users/:user_id/contacts
	def create
		@contact = Contact.create!(contact_params)
			
		response = { status: 200, message: 'contact created' }
		json_response(response, :created)
  end
  
  private

		def contact_params
			params.permit(:user_id, :phone, :age)
		end
    
    def set_user
      @user = User.find(params[:user_id])
    end
end