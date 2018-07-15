# README

An application should allow registration and login of users. After login, users see a list of contacts with
the metadata: name , phone number (international format) and age.

Setups:

* Ruby version
ruby 2.4.4
rails 5.2.0

* System dependencies

* Configuration

* Database creation
rails db:setup
rails db:migrate

* Database initialization
rails db:reset

* How to run the test suite
rails generate rspec:install

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions
heroku apps:create
heroku buildpacks:add heroku/nodejs --index 1
heroku buildpacks:add heroku/ruby --index 2
git add .
git commit -vam "Initial commit"
git push heroku master
 - set heroku master key(as we are using rails 5.2):
 heroku config:set RAILS_MASTER_KEY=<your-master-key-here>

* References:
jwt::https://www.codementor.io/omedale/simple-approach-to-rails-5-api-authentication-with-json-web-token-cpqbgrdo6
credentials::
 -https://www.engineyard.com/blog/rails-encrypted-credentials-on-rails-5.2
 -https://medium.com/cedarcode/rails-5-2-credentials-9b3324851336
             
