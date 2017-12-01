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

band_photos = [
  'https://pixabay.com/get/eb3cb70e21f1083ed1534705fb0938c9bd22ffd41cb0134193f7c77ca3/girl-2961959_1920.jpg',
  'https://static.pexels.com/photos/654690/pexels-photo-654690.jpeg'
]

band1 = Band.create(
  band_name: 'Lana Dell Rey',
  location: 'New York, New York',
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

band15= Band.create(
  band_name: 'The Keystrokes',
  location: 'New York, New York',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://upload.wikimedia.org/wikipedia/commons/6/65/The_Strokes_by_Roger_Woolman.jpg'
)

band15= Band.create(
  band_name: 'The Farray',
  location: 'Denver, Colorado',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://iscale.iheart.com/v3/url/aHR0cDovL2ltYWdlLmloZWFydC5jb20vaW1hZ2VzL3JvdmkvMTA4MC8wMDAzLzU0NC9NSTAwMDM1NDQ2NjUuanBn'
)

band16= Band.create(
  band_name: 'Fat Arrow Smith',
  location: 'Boston, Massachussets',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Steven_Tyler_1.jpg'
)

SONGS = [
  # http://freemusicarchive.org/music/Greg_Atkinson/7_Gifts/
  {title: 'Gifts', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Greg+Atkinson/7+Gifts/7+Gifts/Greg_Atkinson_-_01_-_7_Gifts.mp3'},
  {title: 'Superfortess', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Greg+Atkinson/7+Gifts/7+Gifts/Greg_Atkinson_-_02_-_Superfortress.mp3'},
  {title: 'Poison Me and You Die', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Greg+Atkinson/7+Gifts/7+Gifts/Greg_Atkinson_-_03_-_Poison_me_and_You_Die.mp3'},
  {title: 'Reason to Reason', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Greg+Atkinson/7+Gifts/7+Gifts/Greg_Atkinson_-_04_-_Reason_to_Reason.mp3'},
  {title: 'White Horses', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Greg+Atkinson/7+Gifts/7+Gifts/Greg_Atkinson_-_05_-_White_Horses.mp3'},
  {title: 'Two Metres', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Greg+Atkinson/7+Gifts/7+Gifts/Greg_Atkinson_-_06_-_Two_metres.mp3'},
  {title: 'Terracotta Child', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Greg+Atkinson/7+Gifts/7+Gifts/Greg_Atkinson_-_07_-_Terracotta_Child.mp3'},

  # http://freemusicarchive.org/music/Greg_Atkinson/Christmas_Losers/
  {title: 'Losing Over Christmas', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Greg+Atkinson/7+Gifts/7+Gifts/Greg_Atkinson_-_07_-_Terracotta_Child.mp3'},
  {title: 'Pantomime Cow', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Greg+Atkinson/Christmas+Losers/Greg_Atkinson_-_02_-_Pantomime_Cow.mp3'},
  {title: 'Loses on a Christmas Eve', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Greg+Atkinson/Christmas+Losers/Greg_Atkinson_-_03_-_Losers_on_a_Christmas_Eve.mp3'},

  # http://freemusicarchive.org/music/Greg_Atkinson/Hikikomori_EP/
  {title: 'Hikkomorio', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Greg+Atkinson/Hikikomori+EP/Greg_Atkinson_-_01_-_Hikikomori.mp3'},
  {title: 'Slow Enough', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Greg+Atkinson/Hikikomori+EP/Greg_Atkinson_-_02_-_Slow_Enough.mp3'},
  {title: 'Erudite Girl', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Greg+Atkinson/Hikikomori+EP/Greg_Atkinson_-_03_-_Erudite_Girl.mp3'},
  {title: 'If You Stay', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Greg+Atkinson/Hikikomori+EP/Greg_Atkinson_-_04_-_If_You_Stay.mp3'},

  # http://freemusicarchive.org/music/Soft_and_Furious/
  {title: 'You\re Magic', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Soft+and+Furious/The+truth+abouth+RW/Soft_and_Furious_-_01_-_Youre_Magic.mp3'},
  {title: 'Game On', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Soft+and+Furious/The+truth+abouth+RW/Soft_and_Furious_-_02_-_Game_On.mp3'},
  {title: 'Incredible You', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Soft+and+Furious/The+truth+abouth+RW/Soft_and_Furious_-_03_-_Incredible_You.mp3'},
  {title: 'Next Time', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Soft+and+Furious/The+truth+abouth+RW/Soft_and_Furious_-_04_-_Next_Time.mp3'},
  {title: 'Probably Not', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Soft+and+Furious/The+truth+abouth+RW/Soft_and_Furious_-_05_-_Probably_Not.mp3'},
  {title: 'Shining End', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Soft+and+Furious/The+truth+abouth+RW/Soft_and_Furious_-_06_-_Shining_Ending.mp3'},

  # http://freemusicarchive.org/music/Lea_Thomas/Live_at_WFMU_for_Shrunken_Planet_with_Jeffrey_Davison_10282017
  {title: 'Some Days Are Longer', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Lea+Thomas/Live+at+WFMU+for+Shrunken+Planet+with+Jeffrey+Davison/Lea_Thomas_-_01_-_Some_Days_Are_Longer.mp3'},
  {title: 'Talk Like the Trees', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Lea+Thomas/Live+at+WFMU+for+Shrunken+Planet+with+Jeffrey+Davison/Lea_Thomas_-_02_-_Talk_Like_the_Trees.mp3'},
  {title: 'Upstream', song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Lea+Thomas/Live+at+WFMU+for+Shrunken+Planet+with+Jeffrey+Davison/Lea_Thomas_-_04_-_Want_For_Nothing.mp3'}
]

### ALBUMS ###
def album_name
  rand_album_num = rand(4) + 1
  rand_string = Faker::Hipster.sentence(rand_album_num).chop!
  rand_string = rand_string.split.map do |word|
    word.capitalize
  end
  rand_string.join(' ')
end
album_description = Faker::Hipster.paragraph((rand(10) + 10))

ALBUM_ART = [
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+1.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+10.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+11.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+12.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+13.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+14.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+15.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+16.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+17.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+18.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+2.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+3.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+4.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+5.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+6.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+7.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+8.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+9.jpg'
]

ALBUM_ART.each do |album|
  album = Album.create(
      band_id: (rand(16) + 1),
      name: album_name,
      description: album_description,
      image_location: album
    )

  rand_num_of_tracks = rand(7) + 5
  rand_songs = SONGS.sample(rand_num_of_tracks)
  rand_songs.each do |song|
    i = 1
    Song.create(
      album_id: album.id,
      title: song[:title],
      track_index: i,
      song_location: song[:song_location]
    )
    i += 1
  end


end

album1 = Album.create(
  band_id: band5.id,
  name: 'Nodes and Keys',
  description: album_description,
  image_location: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Codes_And_Keys_Death_Cab_For_Cutie.jpg'
)

album2 = Album.create(
  band_id: band6.id,
  name: 'Push and Pop',
  description: album_description,
  image_location: 'https://upload.wikimedia.org/wikipedia/en/7/79/Push_and_Shove_-_No_Doubt_album_cover.jpg'
)

# album2 = Album.create(
#   band_id: band5.id,
#   name: 'Narrow Stairs',
#   description: Faker::Hipster.paragraph(album_description_rand),
#   image_location: 'https://en.wikipedia.org/wiki/Narrow_Stairs#/media/File:Narrow_stairs.jpg'
# )
#
# album3 = Album.create(
#   band_id: band5.id,
#   name: 'The Photo Album',
#   description: Faker::Hipster.paragraph(album_description_rand),
#   image_location: 'https://en.wikipedia.org/wiki/The_Photo_Album#/media/File:DeathCabPhotoAlbum.jpg'
# )
#
# album4 = Album.create(
#   band_id: band5.id,
#   name: "We Have the Facts and We're Voting Yes",
#   description: Faker::Hipster.paragraph(album_description_rand),
#   image_location: 'https://en.wikipedia.org/wiki/We_Have_the_Facts_and_We%27re_Voting_Yes'
# )




# song1 = Song.create(
#   album_id: album1.id,
#   title: 'Home is a Fire',
#   track_index: 1,
#   song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Music/01+Home+Is+a+Fire.mp3'
# )
# song2 = Song.create(
#   album_id: album1.id,
#   title: 'Codes and Keys',
#   track_index: 2,
#   song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Music/02+Codes+and+Keys.mp3'
# )
# song3 = Song.create(
#   album_id: album1.id,
#   title: 'Some Boys',
#   track_index: 3,
#   song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Music/03+Some+Boys.mp3'
# )
# song4 = Song.create(
#   album_id: album1.id,
#   title: 'Doors Unlocked and Open',
#   track_index: 4,
#   song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Music/04+Doors+Unlocked+and+Open.mp3'
# )
# song5 = Song.create(
#   album_id: album1.id,
#   title: 'You Are a Tourist',
#   track_index: 5,
#   song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Music/05+You+Are+a+Tourist.mp3'
# )
#
# song6 = Song.create(
#   album_id: album3.id,
#   title: 'Steadier Footing',
#   track_index: 1,
#   song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Music/01+Steadier+Footing.mp3'
# )
#
# song7 = Song.create(
#   album_id: album3.id,
#   title: 'A Movie Script Ending',
#   track_index: 2,
#   song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Music/02+A+Movie+Script+Ending.mp3'
# )
#
# song8 = Song.create(
#   album_id: album3.id,
#   title: 'We Laugh Indoors',
#   track_index: 3,
#   song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Music/03+We+Laugh+Indoors.mp3'
# )
#
# song9 = Song.create(
#   album_id: album3.id,
#   title: 'Information Travels Faster',
#   track_index: 4,
#   song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Music/04+Information+Travels+Faster.mp3'
# )

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

# CREATIVE COMMONS MUSIC

# http://freemusicarchive.org/music/Evie_Sands/
band100 = Band.create(
  band_name: 'Evie Sanders',
  location: 'Los Angeles, California',
  mini_bio: 'Evie Sands is a singer, songwriter, player & producer. Her career has traversed the musical spectrum of Tin Pan Alley, teenage package tours, national TV exposure, major label hits, cult fandom, Indie label #1’s and digital DIY with her own synthesis of sophisticated soulful pop.',
  image_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Evie+Sands/Band+Image.jpg'
)

  # http://freemusicarchive.org/music/Evie_Sands/Live_at_WFMU_with_Gaylord_Fields_10292017/
  album100 = Album.create(
    band_id: band100.id,
    name: 'Live at WFMU with Gaylord Fields',
    description: album_description,
    image_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Evie+Sands/Live+at+WFMU+with+Gaylord+Fields/Album+Art.jpg'
  )

    song101 = Song.create(
      album_id: album100.id,
      title: 'You Can Do It',
      track_index: 1,
      song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Evie+Sands/Live+at+WFMU+with+Gaylord+Fields/Evie_Sands_-_01_-_You_Can_Do_It.mp3'
    )

    song102 = Song.create(
      album_id: album100.id,
      title: 'Another Side on the Other Side of the Line',
      track_index: 2,
      song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Evie+Sands/Live+at+WFMU+with+Gaylord+Fields/Evie_Sands_-_02_-_Another_Night_On_The_Other_Side_Of_The_Line.mp3'
    )

    song103 = Song.create(
      album_id: album100.id,
      title: 'While I Look At You',
      track_index: 3,
      song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Evie+Sands/Live+at+WFMU+with+Gaylord+Fields/Evie_Sands_-_03_-_While_I_Look_At_You.mp3'
    )

    song104 = Song.create(
      album_id: album100.id,
      title: 'Don\'t Look Back, Don\'t Look Down',
      track_index: 4,
      song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Evie+Sands/Live+at+WFMU+with+Gaylord+Fields/Evie_Sands_-_04_-_Dont_Look_Back_Dont_Look_Down.mp3'
    )

    song105 = Song.create(
      album_id: album100.id,
      title: 'Without You',
      track_index: 5,
      song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Evie+Sands/Live+at+WFMU+with+Gaylord+Fields/Evie_Sands_-_05_-_Without_You.mp3'
    )

    song106 = Song.create(
      album_id: album100.id,
      title: 'Fingerprint Me, Baby',
      track_index: 6,
      song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Evie+Sands/Live+at+WFMU+with+Gaylord+Fields/Evie_Sands_-_06_-_Fingerprint_Me_Baby.mp3'
    )

    song107 = Song.create(
      album_id: album100.id,
      title: 'Rodeo',
      track_index: 7,
      song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Evie+Sands/Live+at+WFMU+with+Gaylord+Fields/Evie_Sands_-_07_-_Rodeo.mp3'
    )

    song108 = Song.create(
      album_id: album100.id,
      title: 'Any Way That You Want Me',
      track_index: 8,
      song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Evie+Sands/Live+at+WFMU+with+Gaylord+Fields/Evie_Sands_-_09_-_Any_Way_That_You_Want_Me.mp3'
    )

    song109 = Song.create(
      album_id: album100.id,
      title: 'Get Up',
      track_index: 9,
      song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Evie+Sands/Live+at+WFMU+with+Gaylord+Fields/Evie_Sands_-_10_-_Get_Up.mp3'
    )

    song110 = Song.create(
      album_id: album100.id,
      title: 'Shine For Me',
      track_index: 10,
      song_location: 'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Evie+Sands/Live+at+WFMU+with+Gaylord+Fields/Evie_Sands_-_11_-_Shine_For_Me.mp3'
    )
