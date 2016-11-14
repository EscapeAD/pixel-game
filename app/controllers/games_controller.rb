class GamesController < ApplicationController
  def index
    @games = Game.all
  end

  def create
    button = {
      name: params[:name]
    }
    # ActionCable.server.broadcast 'GamesChannel'
    GameCreateJob.perform_later(button)
  end

end
