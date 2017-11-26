# Returns a single object with :id, :username, :email, and :band_name
json.extract! @band, :id, :band_name, :location, :mini_bio, :image_location

 # TODO: DRY out with partial
 # TODO: replicate index structure (key of id : value of object)
