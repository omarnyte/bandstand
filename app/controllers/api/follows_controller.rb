class Api::FollowsController < ApplicationController

  def create
    # TODO ensure that a user cannot create likes for anyone else
    @follow = Follow.new()
    @user = User.find(params[:follower_id])
    @band = User.find(params[:followee_id])

    if @follow.save
      render :show
    else
      # TODO figure out which error status to use
      render json: @band.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find(params[:id])
    # @user = User.find(paraFolms[:follower_id])
    # @band = User.find(params[:followee_id])

    # TODO conditionally destroy follow only if current_user.id matches
    # params[follower_id]
    if @follow.destroy
      render :show
    else
    end
  end
end
