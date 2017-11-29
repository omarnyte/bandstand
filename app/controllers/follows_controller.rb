class FollowsController < ApplicationController

  def create
    # TODO ensure that a user cannot create likes for anyone else
    @follow = Follow.new(params[:follower_id], params[:followee_id])
    if @follow.save
    else
      # TODO figure out which error status to use
      render json: @band.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find(params[:id])
    if @follow.destroy
    else
    end
  end
end
