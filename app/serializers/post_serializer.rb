class PostSerializer < ActiveModel::Serializer
  attributes :id, :recipe_name, :recipe_image, :recipe_description, :recipe_ingredient, :recipe_difficulty, :prep_time, :cook_time
  has_one :user
end
