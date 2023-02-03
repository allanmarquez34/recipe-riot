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
  
      private
      def User_params
        params.permit(:first_name, :last_name, :email, :username, :birthday, :image, :background_image, :password)
      end

      def logged_on_user
        User.where(:id => current_user.id)
      end
end
