class PostsController < ApplicationController

    def index 
        posts = Post.all
        render json: users, status: :ok
    end
end
