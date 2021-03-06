class Api::BandsController < ApplicationController
  def create
    @band = Band.new(band_params)

    if @band.save
      login(@band)
      render 'api/bands/show'
    else
      render json: @band.errors.full_messages, status: 422
    end
  end

  def show
    @band = Band.find(params[:id])
    # TODO handle errors
    render 'api/bands/show'
  end

  def index
    @bands = Band.all
    render 'api/bands/index'
  end

  private
  def band_params
    params.require(:band).permit(:band_name, :location, :mini_bio, :image_location)
  end

end
