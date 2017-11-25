# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# BANDS
band1 = Band.create(
  username: 'lanadellrey',
  password: 'password',
  email: 'lanadellrey@email.com',
  band_name: 'Lana Dell Rey'
  )

band2 = Band.create(
  username: 'perljam',
  password: 'password',
  email: 'perljam@email.com',
  band_name: 'Perl Jam'
  )

band3 = Band.create(
  username: 'foobarfighters',
  password: 'password',
  email: 'foobarfighters@email.com',
  band_name: 'Foo Bar Fighters'
  )

band4 = Band.create(
  username: 'ajaxonfive',
  password: 'password',
  email: 'ajaxonfive@email.com',
  band_name: 'Ajaxon Five'
  )

band5 = Band.create(
  username: 'dc4qt',
  password: 'password',
  email: 'dc4qt@email.com',
  band_name: 'Death Cab for Queuetie'
)

band6 = Band.create(
  username: 'nodeout',
  password: 'password',
  email: 'nodeout@email.com',
  band_name: 'Node Out'

)

band7 = Band.create(
  username: 'link182',
  password: 'password',
  email: 'link182@email.com',
  band_name: 'Link 182'
)

band7 = Band.create(
  username: 'maclemore',
  password: 'password',
  email: 'maclemore@email.com',
  band_name: 'Maclemore'
)

band8 = Band.create(
  username: 'link182',
  password: 'password',
  email: 'link182@email.com',
  band_name: 'Link 182'
)

band9 = Band.create(
  username: 'u2ube',
  password: 'password',
  email: 'u2ube@email.com',
  band_name: 'U2ube'
)
band10 = Band.create(
  username: 'async',
  password: 'password',
  email: 'nsync@email.com',
  band_name: 'ASYNC'
)


# ALBUMS
album1 = Album.create(
  band_id: band5.id,
  name: 'Nodes and Keys',
  description: 'lorem ipsum'
)

album2 = Album.create(
  band_id: band6.id,
  name: 'Push and Pop',
  description: 'lorem'
)

# SONGS
song1 = Song.create(
  album_id: album1.id,
  title: 'song1',
  track_index: 1
)
song2 = Song.create(
  album_id: album1.id,
  title: 'song2',
  track_index: 2
)
song3 = Song.create(
  album_id: album1.id,
  title: 'song3',
  track_index: 3
)
song4 = Song.create(
  album_id: album1.id,
  title: 'song4',
  track_index: 4
)
song5 = Song.create(
  album_id: album1.id,
  title: 'song5',
  track_index: 5
)
