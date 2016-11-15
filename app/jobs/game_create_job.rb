class GameCreateJob < ApplicationJob
  queue_as :default

  def perform(button)
    # Do something later
    ActionCable.server.broadcast "global", { data:1 }
  end
end
