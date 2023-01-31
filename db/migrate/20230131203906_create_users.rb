class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :username
      t.string :password_digest
      t.integer :birthday
      t.string :image
      t.string :background_image

      t.timestamps
    end
  end
end