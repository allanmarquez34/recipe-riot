class CommentsController < ApplicationController

    def post_comments
        post = Post.find(params[:id])
        comments = Comment.where("post_id =?", params[:id])
        render json: comments
    end 

end
