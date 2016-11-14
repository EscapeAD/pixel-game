class GameCreateJob < ApplicationJob
  queue_as :default

  def perform(button)
    puts button
    puts button.name
    # Do something later
    ActionCable.server.broadcast "GamesChannel", {
      name: button.name,
      button: 1
    }
  end
end
