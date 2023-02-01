puts "seeding users"

a1 = User.create(first_name: "Alex", 
                last_name: "Martinez",
                email: "alex@email.com",
                username: "alexm",
                password_digest: "123",
                birthday: 2000/20/3,
                image:"image",
                background_image: "image")

puts "done seeding users"
puts "seeding posts "

b1 = Post.create(recipe_name:"Chicken Alfredo",
                recipe_image:"image",
                recipe_ingredient:"pasta, chicken breast, parmesano, butter, salt, pepper",
                recipe_description:"cook pasta, grill chicken breast, once pasta is cooked add into another pan and add parmesano and butter",
                recipe_difficulty: 3,
                prep_time:5,
                cook_time: 25,
                user_id: a1.id)

puts "done seeding posts"

puts "seeding comments"

c1 = Comment.create(content: "this recipe is really good",
                    user_id: a1.id,
                    post_id: b1.id)

puts "done seeding comments "

puts "seeding likes"

d1 = Like.create(user_id: a1.id,
                post_id: b1.id)

puts "done seeding likes"

