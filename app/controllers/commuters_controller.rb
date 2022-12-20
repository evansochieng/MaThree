class CommutersController < ApplicationController
  before_action :set_commuter, only: [:show, :update, :destroy]

  # handle errors
rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_response
rescue_from ActiveRecord::RecordNotFound, with: :handle_not_found_response

  # GET /commuters
  def index
    # get the list of all commuters
    @commuters = Commuter.all

    # return the commuters
    render json: @commuters
  end

  # GET /commuters/1
  def show
    render json: @commuter
  end

  #Autologin / Stay logged in
  def autologin
     @commuter = Commuter.find_by(id: session[:user_id])
     if @commuter
      render json: @commuter, status: :ok
    else
      render json: { errors: ["Not authorized"] }, status: :unauthorized
    end
  end

  # POST /commuters
  def create
    # create a new user
    @commuter = Commuter.create!(commuter_params)

    render json: @commuter, status: :created
  end

  # PATCH/PUT /commuters/1
  def update
    if @commuter.update(commuter_params)
      render json: @commuter
    else
      render json: @commuter.errors, status: :unprocessable_entity
    end
  end

  # DELETE /commuters/1
  def destroy
    @commuter.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_commuter
      @commuter = Commuter.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def commuter_params
      params.permit(:name, :username, :id_number, :phone_number, :address, :password,:password_confirmation)
    end

    # Not Found Error
    def handle_not_found_response
      return json: {error: "Commuter not found"}, status: :not_found
    end

    # Invalid Error
    def handle_invalid_response(e)
      return json: {error: e.record.errors.full_messages}, status: unprocessable_entity
    end
end
