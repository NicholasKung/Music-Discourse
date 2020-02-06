class Api::V1::AlbumsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :authorize_user, except: [:index, :show]

  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Album.all
  end

  def show
    render json: Album.find(params[:id])
  end

  def create
    if user_signed_in?
      album = Album.new(album_params)
      album.user = current_user
      if album.save
        render json: { album: album }
      else
        render json: { error: album.errors.full_messages }, status: :unprocessable_entity
      end
    end
  end

  private

  def album_params
    params.permit(:album, :artist, :genre, :year, :art)
  end

  def authorize_user
    if !user_signed_in?
      raise ActionController::RoutingError.new("Sign In Please")
    end
  end
end
