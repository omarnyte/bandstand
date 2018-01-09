class Api::GenresController < ApplicationController
  def index
    @genres = [
      grunge = Genre.find_by('genre': 'grunge'),
      hip_hop = Genre.find_by('genre': 'hip hop'),
      house = Genre.find_by('genre': 'house'),
      indie = Genre.find_by('genre': 'indie'),
      metal = Genre.find_by('genre': 'metal'),
      pop = Genre.find_by('genre': 'pop'),
      rap = Genre.find_by('genre': 'rap'),
      rb = Genre.find_by('genre': 'R&B'),
      rock = Genre.find_by('genre': 'rock')
    ]
    render 'api/genres/index'
  end

  def show
    @bands = Genre.bands_by_genreId(params[:id])
    render 'api/genres/show'
  end

  def create
    @bands = Genre.bands_by_genre(params[:genre])
    render 'api/bands/index'
  end
end
