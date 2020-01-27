class Api::V1::AlbumsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  def index
    render json: Album.all 
  end
end
