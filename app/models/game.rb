class Game < ApplicationRecord
  validates_presence_of :name
  after_create_commit { GameCreateJob.perform_later(self) }
end
