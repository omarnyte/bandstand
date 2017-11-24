# Returns a single object with :id, :username, :email, and :band_name
json.extract! @band, :id, :username, :email, :band_name

 # TODO: DRY out with partial
 # TODO: replicate index structure (key of id : value of object)
