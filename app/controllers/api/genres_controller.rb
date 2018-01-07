class Api::GenresController < ApplicationController
  def index

  end

  def show
    @bands = Genre.bands_by_genre(param.name)
  end
end
