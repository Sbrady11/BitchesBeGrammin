class User < ApplicationRecord
  has_many :posts
  has_many :comments
  has_many :likes

  validates :username, :bio, :password, presence: true
end
