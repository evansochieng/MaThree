class CommutersController < ApplicationController
  before_action :set_commuter, only: [:show, :update, :destroy]

  # GET /commuters
  def index
    @commuters = Commuter.all

    render json: @commuters
  end

  # GET /commuters/1
  def show
    render json: @commuter
  end

  # POST /commuters
  def create
    @commuter = Commuter.new(commuter_params)

    if @commuter.save
      render json: @commuter, status: :created, location: @commuter
    else
      render json: @commuter.errors, status: :unprocessable_entity
    end
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
      params.permit(:name, :phone_number, :address)
    end
end
