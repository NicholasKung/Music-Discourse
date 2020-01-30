class Album < ApplicationRecord
  belongs_to :user

  validates :album, presence: true
  validates :art, presence: true
  validates :artist, presence: true
  validates :year, numericality: true
  validates :genre, presence: true
end
