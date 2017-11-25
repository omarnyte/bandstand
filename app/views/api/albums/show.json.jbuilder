json.extract! @album, :id, :band_id, :name, :description
json.extract! @album.band, :band_name
json.set! :songs do
  @album.songs.each do |song|
    json.extract! song, :title, :track_index 
  end
end


# TODO: DRY out with partial
# TODO: replicate index structure (key of id : value of object)
