class Post < ApplicationRecord
  has_many :comments
  has_many :bookmarsk
  has_many :likes

  has_many :users trough: :likes
  has_many :users trough: :comments
  has_many :users trough: :bookmarks
  
  belongs_to :Users

end
