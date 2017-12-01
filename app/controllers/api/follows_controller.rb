class Api::FollowsController < ApplicationController

  def create
    @user = current_user
    @band = Band.find(params[:followee_id])
    @follow = Follow.new(
      follower_id: @current_user.id,
      followee_id: params[:followee_id]
    )

    if @follow.save
      render :show
    else
      # TODO figure out which error status to use
      render json: @band.errors.full_messages, status: 422
    end
  end

  def destroy
    @current_user = current_user
    @band = Band.find(params[:id])
    @follow = Follow.find_by(
      follower_id: @current_user.id,
      followee_id: @band.id
    )

    if @follow
      @follow.destroy
      render :show
    else
      # TODO figure out which error status to use
      render json: @band.errors.full_messages, status: 422
    end
  end
end
