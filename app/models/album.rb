class Album < ApplicationRecord
  belongs_to :user
  has_many :reviews, dependent: :delete_all

  validates :album, presence: true
  validates :art, presence: true
  validates :artist, presence: true
  validates :year, numericality: true, length: { is: 4 }
  validates :genre, presence: true
end
