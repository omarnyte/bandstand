json.band do
  json.partial! 'api/bands/band', band: @band
end

# json.genres do
#   json.array! @band.genres
# end

json.albums do
  json.array! @band.albums, partial: 'api/albums/album', as: :album
end
