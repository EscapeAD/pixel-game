# Be sure to restart your server when you modify this file. Action Cable runs in a loop that does not support auto reloading.
class GamesChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from 'GamesChannel'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    stop_all_streams
  end
end
