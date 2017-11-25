json.album do
  json.extract! @album, :id, :band_id, :name, :description
end

json.songs do
  json.array! @album.songs, partial: 'api/songs/song', as: :song
end

json.band do
  json.extract! @album.band, :id, :band_name 
end


# json.extract! @album.band, :band_name
# json.songs do
#   json.array! @album.songs
#
# end


# TODO: DRY out with partial
# TODO: replicate index structure (key of id : value of object)
