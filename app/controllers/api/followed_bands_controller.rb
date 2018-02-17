class Api::FollowedBandsController < ApplicationController
  def show
    @bands = User.find(params[:id]).followed_bands

    render 'api/bands/index'
  end
end
