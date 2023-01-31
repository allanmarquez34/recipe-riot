class User < ApplicationRecord
    has_many :comments
    has_many :bookmarks
    has_many :likes
    has many :follows

    has_many :liked_posts trough: :likes, source: :posts
    has_many :commented_posts trough: :comments, source: :posts
    has_many :bookmarked_posts trough: :bookmarks, source: :posts
   

end
