class GameCreateJob < ApplicationJob
  queue_as :default

  def perform(button)
    # Do something later
    ActionCable.server.broadcast "global", {}
  end

  def self.push( room, object )
    ActionCable.server.broadcast( room, object )
  end 

end
