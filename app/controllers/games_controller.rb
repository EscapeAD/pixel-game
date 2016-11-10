class GamesController < ApplicationController
  def index

  end

  def create
    ActionCable.server.broadcast 'GamesChannel'
  end
end
