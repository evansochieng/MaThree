class SessionsController < ApplicationController
    # add action for logging in commuter
    def create
        commuter = Commuter.find_by(username: params[:username])
        if commuter&.authenticate(params[:password])
            session[:user_id] = commuter.id
            render json: commuter
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
