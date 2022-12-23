class RoutesController < ApplicationController
  before_action :set_route, only: [:show, :update, :destroy]

    # handle errors
rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_response
rescue_from ActiveRecord::RecordNotFound, with: :handle_not_found_response

  # GET /routes
  def index
    @routes = Route.all

    render json: @routes
  end

  # GET /routes/1
  def show
    render json: @route
  end

  # POST /routes
  def create
    # create a new user
    @route = Route.create!(route_params)

    render json: @route, status: :created
  end

  # PATCH/PUT /routes/1
  def update
    if @route.update(route_params)
      render json: @route
    else
      render json: @route.errors, status: :unprocessable_entity
    end
  end

  # DELETE /routes/1
  def destroy
    @route.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_route
      @route = Route.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def route_params
      params.permit(:name, :from, :to, :description, :fare)
    end

    # Not Found Error
    def handle_not_found_response
      render json: {error: "Route not found"}, status: :not_found
    end

    # Invalid Error
    def handle_invalid_response(e)
      render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end
end
