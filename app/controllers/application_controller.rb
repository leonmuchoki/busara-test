class ApplicationController < ActionController::API
  include Response
	include ExceptionHandler

	# make sure that on every request (except authentication) our API checks 
	# for a valid token. 
	# called b4 every action on controllers
	before_action :authorize_request
	attr_reader :current_user

	private
		#check for valid request token and return user
		def authorize_request
			@current_user = (AuthorizeApiRequest.new(request.headers).call)[:user]
		end
end
