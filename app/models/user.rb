class User < ApplicationRecord
    has_many :comments
    has_many :bookmarks
    has_many :likes
    has many :follows

    has_many :liked_posts, through: :likes, source: :posts
    has_many :commented_posts, through: :comments, source: :posts
    has_many :bookmarked_posts, through: :bookmarks, source: :posts
   

end
