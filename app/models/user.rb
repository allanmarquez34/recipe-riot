class User < ApplicationRecord
    has_many :comments
    has_many :bookmarks
    has_many :likes
    has_many :follows

    has_many :liked_posts, through: :likes, source: :post
    has_many :commented_posts, through: :comments, source: :post
    has_many :bookmarked_posts, through: :bookmarks, source: :post
   
end
