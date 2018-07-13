class User < ApplicationRecord
  # encrypt password
  has_secure_password
  
  has_many :contacts

  validates :email, uniqueness: true
end
