class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
      users = User.all
      render json: users, status: :ok 
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
      end
  
      def show 
          render json: current_user
      end

      def update
        user = logged_on_user.find(params[:id])
        user.update!(user_params)
        render json: user, status: :accepted
    end 
  
      private
      def user_params
        params.permit(:first_name, :last_name, :email, :username, :image, :background_image, :password)
      end

      def logged_on_user
        User.where(:id => current_user.id)
      end
end
