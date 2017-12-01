json.album do
  json.partial! 'api/albums/album', album: @album
end

json.songs do
  json.array! @album.songs, partial: 'api/songs/song', as: :song
end

json.band do
  # json.extract! @album.band, :id, :band_name, :location, :mini_bio, :image_location,
  #   :follower_ids
  json.partial! 'api/bands/band', band: @album.band
end
