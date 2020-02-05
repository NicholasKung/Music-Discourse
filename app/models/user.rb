class User < ApplicationRecord
  has_many :albums
  has_many :reviews

  validates :email, presence: true
  validates :encrypted_password, presence: true, length: { minimum: 6 }

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  mount_uploader :profile_photo, ProfilePhotoUploader

end
