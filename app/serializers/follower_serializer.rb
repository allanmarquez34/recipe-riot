class FollowerSerializer < ActiveModel::Serializer
  attributes :id, :follower_id
  has_one :user
end
