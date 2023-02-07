class PostsController < ApplicationController

    def index 
        posts = Post.all
        render json: posts, status: :ok
    end

    # def create
    #     post = @current_user.posts.create!(post_params)
    #     render json: post, status: :created
    #   end

    # def create 
    #     post = Post.create(post_params)
    #     posts = @current_user.post
    #     render json: posts, status: :created

    # end

    def create
        puts post_params
        posts = Post.create!(post_params)
        render json: posts, status: :created
    end

    private 

    def post_params
        params.permit(:recipe_name, :recipe_image, 
                    :recipe_description, :recipe_ingredient, 
                    :recipe_difficulty, :prep_time, :cook_time, 
                   :user_id)
    end
end
