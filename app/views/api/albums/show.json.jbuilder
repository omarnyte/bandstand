json.album do
  json.extract! @album, :id, :band_id, :name, :description
  json.band_name @album.band.band_name
end

# json.bands do 
#
# end

json.songs do
  json.array! @album.songs, partial: 'api/songs/song', as: :song
end


# json.extract! @album.band, :band_name
# json.songs do
#   json.array! @album.songs
#
# end


# TODO: DRY out with partial
# TODO: replicate index structure (key of id : value of object)
