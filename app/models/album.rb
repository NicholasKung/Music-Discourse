class Album < ApplicationRecord
  belongs_to :user

  validates :album, presence: true
  validates :art, presence: true
  validates :artist, presence: true
  validates :year, numericality: true, length: { is: 4 }
  validates :genre, presence: true
<<<<<<< HEAD

  has_many :reviews
=======
>>>>>>> 1bce08e95d9db4ce57f9f7e0038ffd0dcfee98ef
end
