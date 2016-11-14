class GameCreateJob < ApplicationJob
  queue_as :default

  def perform(button)
    # Do something later
    puts "^^^^^^^^^^^^^^^^^^^^^^"
    puts button
    puts "^^^^^^^^^^^^^^^^^^^^^^"
    ActionCable.server.broadcast "global", {
      name: button.name
    }
  end
end
