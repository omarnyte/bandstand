require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# USERS
user1 = User.create(
  username: 'username1',
  password: 'password',
  email: 'email1@email.com'
)

user2 = User.create(
  username: 'username2',
  password: 'password',
  email: 'email2@email.com'
)

user3 = User.create(
  username: 'username3',
  password: 'password',
  email: 'email3@email.com'
)

user4 = User.create(
  username: 'username4',
  password: 'password',
  email: 'email4@email.com'
)
user5 = User.create(
  username: 'username5',
  password: 'password',
  email: 'email5@email.com'
)

# BANDS
mini_bio_rand = rand(1) + 1

band1 = Band.create(
  band_name: 'Lana Dell Rey',
  location: 'New York, NY',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://upload.wikimedia.org/wikipedia/en/1/14/Coachella_-_Woodstock_In_My_Mind_-_Lana_Del_Rey.jpg'
)

band2 = Band.create(
  band_name: 'Perl Jam',
  location: 'Seattle, Washington',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Pearl_Jam_at_O2_World_Berlin.jpg'
)

band3 = Band.create(
  band_name: 'Foo Bar Fighters',
  location: 'Seattle, Washington',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Foofighters-band2009.jpg'
)

band4 = Band.create(
  band_name: 'Ajaxon Five',
  location: 'Gary, Indiana',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://c1.staticflickr.com/3/2471/4031639468_d83eda78e0_b.jpg'
  )

band5 = Band.create(
  band_name: 'Death Cab for Queuetie',
  location: 'Bellingham, Washington',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Death_cab_for_cutie_münchen_21.11.2008._6_%28B%26W%29.jpg'
)

band6 = Band.create(
  band_name: 'Node Out',
  location: 'Anaheim, California',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/No_Doubt_at_Summer_Tour_7.jpg'
)

band7 = Band.create(
  band_name: 'Link 182',
  location: 'Poway, California',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Blink182.jpg'
)

band7 = Band.create(
  band_name: 'Maclemore',
  location: 'Seattle, Washington',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Macklemore_Ryan_Lewis_Live_2016_%284_von_20%29.jpg'
)

band9 = Band.create(
  band_name: 'U2ube',
  location: 'Dublin, Ireland',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/U2_360-UTEOTW-Toronto.JPG'
)
band10 = Band.create(
  band_name: 'ASYNC',
  location: 'Orlando, Florida',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'http://3.bp.blogspot.com/-3iyDsJqXzeQ/UUx52FxLFiI/AAAAAAAANZQ/mwdTFG82eLU/s1600/nsync+1998+justin+timberlake+jc+chasez+joey+fatone+lance+bass+chris+kirkpatrick.jpg'
)
band11 = Band.create(
  band_name: 'Linkedin Park',
  location: 'Agoura Hilla, California',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/LPLogo-black.svg/2000px-LPLogo-black.svg.png'
)

band12 = Band.create(
  band_name: 'Alice in Blockchains',
  location: 'Seattle, Washington',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Alice_In_Chains_-_Jimmy_Kimmel_Live.jpg'
)

band12 = Band.create(
  band_name: 'Popup Roach',
  location: 'Vacaville, California',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Papa_roach_sziget2010_erdoedy.jpg'
)

band13 = Band.create(
  band_name: 'JSON Derulo',
  location: 'Miramar, Florida',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Jason-Derulo.jpg'
)

band14 = Band.create(
  band_name: 'Hashlee Simpson',
  location: 'Waco, Texas',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://images-production.global.ssl.fastly.net/uploads/photos/file/166672/ashlee-simpson-jan-2003.jpg'
)


# ALBUMS
album_description_rand = rand(10) + 10

album1 = Album.create(
  band_id: band5.id,
  name: 'Nodes and Keys',
  description: Faker::Hipster.paragraph(album_description_rand),
  image_location: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Codes_And_Keys_Death_Cab_For_Cutie.jpg'
)

album2 = Album.create(
  band_id: band5.id,
  name: 'Narrow Stairs',
  description: Faker::Hipster.paragraph(album_description_rand),
  image_location: 'https://en.wikipedia.org/wiki/Narrow_Stairs#/media/File:Narrow_stairs.jpg'
)

album3 = Album.create(
  band_id: band5.id,
  name: 'The Photo Album',
  description: Faker::Hipster.paragraph(album_description_rand),
  image_location: 'https://en.wikipedia.org/wiki/The_Photo_Album#/media/File:DeathCabPhotoAlbum.jpg'
)

album4 = Album.create(
  band_id: band5.id,
  name: "We Have the Facts and We're Voting Yes",
  description: Faker::Hipster.paragraph(album_description_rand),
  image_location: 'https://en.wikipedia.org/wiki/We_Have_the_Facts_and_We%27re_Voting_Yes'
)

album5 = Album.create(
  band_id: band6.id,
  name: 'Push and Pop',
  description: Faker::Hipster.paragraph(album_description_rand),
  image_location: 'https://upload.wikimedia.org/wikipedia/en/7/79/Push_and_Shove_-_No_Doubt_album_cover.jpg'
)

# SONGS
song1 = Song.create(
  album_id: album1.id,
  title: 'Home is a Fire',
  track_index: 1,
  song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Music/01+Home+Is+a+Fire.mp3'
)
song2 = Song.create(
  album_id: album1.id,
  title: 'Codes and Keys',
  track_index: 2,
  song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Music/02+Codes+and+Keys.mp3'
)
song3 = Song.create(
  album_id: album1.id,
  title: 'Some Boys',
  track_index: 3,
  song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Music/03+Some+Boys.mp3'
)
song4 = Song.create(
  album_id: album1.id,
  title: 'Doors Unlocked and Open',
  track_index: 4,
  song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Music/04+Doors+Unlocked+and+Open.mp3'
)
song5 = Song.create(
  album_id: album1.id,
  title: 'You Are a Tourist',
  track_index: 5,
  song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Music/05+You+Are+a+Tourist.mp3'
)

song6 = Song.create(
  album_id: album3.id,
  title: 'Steadier Footing',
  track_index: 1,
  song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Music/01+Steadier+Footing.mp3'
)

song7 = Song.create(
  album_id: album3.id,
  title: 'A Movie Script Ending',
  track_index: 2,
  song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Music/02+A+Movie+Script+Ending.mp3'
)

song8 = Song.create(
  album_id: album3.id,
  title: 'We Laugh Indoors',
  track_index: 3,
  song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Music/03+We+Laugh+Indoors.mp3'
)

song9 = Song.create(
  album_id: album3.id,
  title: 'Information Travels Faster',
  track_index: 4,
  song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Music/04+Information+Travels+Faster.mp3'
)

## FOLLOWS
follow1 = Follow.create(
  follower_id: user1.id,
  followee_id: band5.id
)

follow2 = Follow.create(
  follower_id: user2.id,
  followee_id: band5.id
)

follow3 = Follow.create(
  follower_id: user3.id,
  followee_id: band5.id
)

follow4 = Follow.create(
  follower_id: user4.id,
  followee_id: band5.id
)

follow5= Follow.create(
  follower_id: user5.id,
  followee_id: band5.id
)

follow6= Follow.create(
  follower_id: user1.id,
  followee_id: band1.id
)
