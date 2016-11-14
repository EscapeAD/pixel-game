class GameCreateJob < ApplicationJob
  queue_as :default

  def perform(output)
    # Do something later
    ActionCable.server.broadcast "GamesChannel", {
      # GameController.renderer.render(partial: 'games/games', locals: { game: output })
      button: output.name
    }
  end
end
