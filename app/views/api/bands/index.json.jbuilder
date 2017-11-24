@bands.each do |band|
  json.set! band.id do
    json.extract! band, :id, :username, :email, :band_name
  end
end

# TODO: DRY out with partial
# TODO: replicate index structure (key of id : value of object)
