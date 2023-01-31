class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :recipe_name
      t.string :recipe_image
      t.string :recipe_description
      t.string :recipe_ingredient
      t.integer :recipe_difficulty
      t.integer :prep_time
      t.integer :cook_time
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
