class CommentsController < ApplicationController

    def post_comments
        post = Post.find(params[:id])
        comments = Comment.where("post_id =?", params[:id])
        render json: comments
    end 

    def create
        comments = Comment.create!(comment_params)
        render json: comments, status: :created
    end

    private

    def comment_params
        params.permit(:content, :user_id, :post_id)
    end

end
