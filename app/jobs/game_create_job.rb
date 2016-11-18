class GameCreateJob < ApplicationJob
  queue_as :default

  def perform(data)
    # Do something later
    ActionCable.server.broadcast "global", {}
  end
end
