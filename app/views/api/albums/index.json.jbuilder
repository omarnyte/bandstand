@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :band_id, :name, :description
  end
end

# TODO: DRY out with partial
# TODO: replicate index structure (key of id : value of object)
