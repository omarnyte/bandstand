# Returns an object with band IDs as keys and their corresponding
# band object as values
@bands.each do |band|
  json.set! band.id do
    json.partial! 'api/bands/band', band: band
  end
end
