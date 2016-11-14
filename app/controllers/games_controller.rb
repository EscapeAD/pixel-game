class GamesController < ApplicationController
  def index
    @games = Game.all
  end

  def create
    button = {
      name: params[:name]
    }

    GameCreateJob.perform_later(button)
  end

end
