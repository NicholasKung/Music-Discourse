class Api::V1::VotesController < ApplicationController
  def show
    render json: Vote.all
  end

  def create
  end
end
