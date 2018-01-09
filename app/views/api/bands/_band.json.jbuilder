json.extract! band, :id, :band_name, :location, :mini_bio, :image_location,
  :follower_ids, :genre_names, :genres_by_id

if logged_in?
  json.followed_by_current_user !!band.followers.find_by(id: current_user.id)
else
  json.followed_by_current_user false
end

# json.array! band.followers.each do |follower|
#   json.extract! follower, :id
# end
#   json.array! band.followers, :id
# end


# json.albums do
#   json.array! @band.albums, partial: 'api/albums/album', as: :album
# end
