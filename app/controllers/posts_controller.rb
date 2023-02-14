class PostsController < ApplicationController

    def index 
        posts = Post.all
        render json: posts, status: :ok
    end

    def user_posts
        user = User.find(params[:id])
        posts = Post.where("user_id =?", params[:id])
        render json: posts
    end

    def create
        puts post_params
        posts = Post.create!(post_params)
        render json: posts, status: :created
    end

    def update
        post = find_post.update!(post_params)
        render json: post, status: :accepted
    end

    def destroy
        post = find_post
        post.destroy
        head :no_contnent
    end 

    private 

    def post_params
        params.permit(:recipe_name, :recipe_image, 
                    :recipe_description, :recipe_ingredient, 
                    :recipe_difficulty, :prep_time, :cook_time, 
                   :user_id)
    end

    def find_post
        Post.find(params[:id])
    end
end
