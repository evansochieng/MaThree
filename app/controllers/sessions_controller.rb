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

    # add action for logging in admin
    def createadmin
        admin = Admin.find_by(username: params[:username])
        if admin&.authenticate(params[:password])
            session[:user_id] = admin.id
            render json: admin
        else
            render json: {error: ["Invalid Username or Password"] }, status: :unauthorized
        end
    end

    # # add action for logging in commuter or admin
    # def create
    #     if Commuter.find_by(username: params[:username])
    #         commuter = Commuter.find_by(username: params[:username])
    #         if commuter&.authenticate(params[:password])
    #             session[:user_id] = commuter.id
    #             render json: commuter
    #         else
    #             render json: {error: ["Invalid Username or Password"] }, status: :unauthorized
    #         end
    #     elsif Admin.find_by(username: params[:username])
    #         admin = Admin.find_by(username: params[:username])
    #         if admin&.authenticate(params[:password])
    #             session[:user_id] = admin.id
    #             render json: admin
    #         else
    #             render json: {error: ["Invalid Username or Password"] }, status: :unauthorized
    #         end
    #     end
    # end

    # define route for logging out commuter
    def destroy
        session.delete :user_id
        head :no_content
    end
end
