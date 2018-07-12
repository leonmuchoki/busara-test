# responds with JSON and an HTTP status code (200 by default). 
# We can define this method in concerns folder.
module Response
	def json_response(object, status = :ok)
		#data = ActiveModelSerializers::SerializableResource.new(object).as_json
		render json: object, status: status
	end
end