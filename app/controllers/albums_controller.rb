class Api::AlbumsController < ApplicationController
  def new

  end

  def create

  end

  def index

  end

  def show

  end

  def update

  end

  def destroy

  end

  private
  def album_params
    params.require(:album).permit(:name, :description)
  end
end
