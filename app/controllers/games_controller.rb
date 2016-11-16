class GamesController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @games = Game.all

    render json: @games
  end

  # GET /users/1
  def show
    render json: @game
  end

  # POST /users
  def create
    @game = Game.new(user_params)

    if @game.save
      render json: @game, status: :created, location: @game
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @game.update(user_params)
      render json: @game
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @game.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_game
      @game = Game.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def game_params
      params.require(:game).permit(:name)
    end
end
