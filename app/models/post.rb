class Post < ApplicationRecord
  has_many :comments
  has_many :bookmarks
  has_many :likes

  has_many :users, through: :likes
  has_many :users, through: :comments
  has_many :users, through: :bookmarks

  belongs_to :user

end
