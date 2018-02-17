# Returns an object with band IDs as keys and their corresponding
# band objects as values
# @bands.each do |band|
#   json.set! band.id do
#     json.extract! band, :id, :band_name, :mini_bio,
#     :image_location, :genres_by_id
#   end
# end

@bands.each do |band|
  json.set! band.id do
    json.partial! 'api/bands/band', band: band
  end
end
