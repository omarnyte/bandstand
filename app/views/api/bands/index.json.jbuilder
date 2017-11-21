@bands.each do |band|
  json.set! band.id do
    json.extract! band, :id, :username, :email, :band_name
  end
end
