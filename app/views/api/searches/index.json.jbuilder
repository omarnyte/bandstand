@bands.each do |band|
  json.set! band.id do
    json.set! :type, 'band'
    json.partial! 'api/bands/band', band: band
  end
end

@albums.each do |album|
  json.set! album.id do
    json.set! :type, 'album'
    json.partial! 'api/albums/album', album: album
  end
end

@songs.each do |song|
  json.set! song.id do
    json.set! :type, 'song'
    json.partial! 'api/songs/song', song: song
  end
end
