class GamesController < ApplicationController

  def create
    button = {
      name: params[:name]
    }

    GameCreateJob.perform_later(button)
  end

end
