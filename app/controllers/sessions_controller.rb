class SessionsController < ApplicationController
    # add action for logging in commuter
    def create
        user = Commuter.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: {error: ["Invalid Username or Password"] }, status: :unauthorized
        end
    end

    # define route for logging out commuter
    def destroy
        session.delete :user_id
        head :no_content
    end
end
