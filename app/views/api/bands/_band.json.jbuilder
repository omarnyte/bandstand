json.extract! band, :id, :band_name, :location, :mini_bio, :image_location,
  :follower_ids, :followed_by_current_user


  # json.array! band.followers.each do |follower|
  #   json.extract! follower, :id
  # end
#   json.array! band.followers, :id
# end


# json.albums do
#   json.array! @band.albums, partial: 'api/albums/album', as: :album
# end
