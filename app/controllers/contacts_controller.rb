class ContactsController < ApplicationController
	before_action :set_user

	def index
		@contacts = @user.contacts
		response = { status: 200, contacts: @contacts }
		json_response(response)
	end

	# POST /users/:user_id/contacts
	def create
		@contact = @user.contacts.create!(contact_params)
			
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