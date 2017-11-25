json.extract! @album, :id, :band_id, :name, :description
json.extract! @album.band, :band_name


# TODO: DRY out with partial
# TODO: replicate index structure (key of id : value of object)
