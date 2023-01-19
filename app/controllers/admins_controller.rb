class AdminsController < ApplicationController
    before_action :set_admin, only: [:show, :update, :destroy]

  # handle errors
rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_response
rescue_from ActiveRecord::RecordNotFound, with: :handle_not_found_response

  # GET /admins
  def index
    # get the list of all admins
    @admins = Admin.all

    # return the admins
    render json: @admins
  end

  # GET /admins/1
  def show
    @admin = Admin.find_by(id: session[:user_id])
    if @admin
      render json: @admin
    else
      render json: {error: "Not authorized"}, status: :unauthorized
    end
  end

  #Autologin / Stay logged in
  def autologin
    # find the admin who is currently logged in
     @admin = Admin.find_by(id: session[:user_id])
     if @admin
      render json: @admin, status: :ok
    else
      render json: { errors: ["Not authorized"] }, status: :unauthorized
    end
  end

  # POST /admins
  def create
    # create a new user
    @admin = Admin.create!(admin_params)

    render json: @admin, status: :created
  end

  # PATCH/PUT /admins/1
  def update
    if @admin.update(admin_params)
      render json: @admin
    else
      render json: @admin.errors, status: :unprocessable_entity
    end
  end

  # DELETE /admins/1
  def destroy
    @admin.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin
      @admin = Admin.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def admin_params
      params.permit(:username, :email, :password,:password_confirmation)
    end

    # Not Found Error
    def handle_not_found_response
      render json: {error: "admin not found"}, status: :not_found
    end

    # Invalid Error
    def handle_invalid_response(e)
      render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end
end
