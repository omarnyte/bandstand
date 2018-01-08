@bands.each do |band|
  json.set! band.id do
    json.extract! band, :id, :band_name, :image_location 
  end
end
