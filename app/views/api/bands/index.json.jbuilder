# Returns an object with band IDs as keys and their corresponding
# band objects as values
@bands.each do |band|
  json.set! band.id do
    json.extract! band, :id, :username, :email, :band_name
  end
end

# TODO: DRY out with partial
# TODO: replicate index structure (key of id : value of object)
