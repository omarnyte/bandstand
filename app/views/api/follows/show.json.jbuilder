# json.user do
#   json.partial! '/api/users/user', user: @user
# end

json.band do
  json.partial! '/api/bands/band', band: @band
end

json.albums do
  json.array! @band.albums, partial: 'api/albums/album', as: :album
end
