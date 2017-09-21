class Post < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :likes

  validates :pic, presence: true
end
