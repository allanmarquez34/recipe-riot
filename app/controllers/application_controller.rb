class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    # before_action :authorize
    
    private
  
    def current_user
      @current_user = User.find_by(id: session[:user_id])
    end
    
    def authorize

      render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
    end
  
    def render_not_found_response(exception)
      render json: { error: "#{exception.model} not found" }, status: :not_found 
    end
    
    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end
