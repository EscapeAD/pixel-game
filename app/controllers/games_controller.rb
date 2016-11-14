class GamesController < ApplicationController
  def index

  end

  def create
    # ActionCable.server.broadcast 'GamesChannel'
    GameCreateJob.perform_later(button)

  end

end
