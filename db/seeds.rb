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

band8 = Band.create(
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

band15 = Band.create(
  band_name: 'The Keystrokes',
  location: 'New York, New York',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://upload.wikimedia.org/wikipedia/commons/6/65/The_Strokes_by_Roger_Woolman.jpg'
)

band16 = Band.create(
  band_name: 'The Farray',
  location: 'Denver, Colorado',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://iscale.iheart.com/v3/url/aHR0cDovL2ltYWdlLmloZWFydC5jb20vaW1hZ2VzL3JvdmkvMTA4MC8wMDAzLzU0NC9NSTAwMDM1NDQ2NjUuanBn'
)

band17 = Band.create(
  band_name: 'Fat Arrow Smith',
  location: 'Boston, Massachussets',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Steven_Tyler_1.jpg'
)

band18 = Band.create(
  band_name: 'Rage Against the Machine Learning',
  location: 'Los Angeles, California',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Rage_Against_The_Machine.jpg'
)

band19 = Band.create(
  band_name: 'Black IPs',
  location: 'Los Angeles, CA',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://i.scdn.co/image/b05032838bc3a4bfdd96b2daf7c51c719825ffdf'
)

band20 = Band.create(
  band_name: 'Nine Inch Rails',
  location: 'Cleveland, OH',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://cps-static.rovicorp.com/3/JPG_400/MI0003/715/MI0003715454.jpg?partner=allrovi.com'
)

band21 = Band.create(
  band_name: 'Chance the Wrapper',
  location: 'Chicago, IL',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://www.famousbirthdays.com/headshots/chance-rapper-1.jpg'
)

band22 = Band.create(
  band_name: 'Car DB',
  location: 'Bronx, New York',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://media.pitchfork.com/photos/599e577e6c9e4147e946be7c/1:1/w_300/GettyImages-835868862.jpg'
)

band23 = Band.create(
  band_name: 'Bashtreet Boys',
  location: 'Orlando, Florida',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://i.pinimg.com/736x/a0/95/95/a09595c04c0452a1bf1cc542f09a9c0d--boy-band-backstreet-boys.jpg'
)

band24 = Band.create(
  band_name: 'Disclojure',
  location: 'Reigate, Surrey',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'http://www.themusicninja.com/wp-content/uploads/2013/05/Disclosure1-e1369836564281.jpg'
)

band25 = Band.create(
  band_name: 'Schoolboy Queue',
  location: 'Los Angeles, California',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'http://www.rap-up.com/app/uploads/2014/12/sbq.jpg'
)

band26 = Band.create(
  band_name: 'Big O Smalls',
  location: 'Brooklyn, New York',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://www.biography.com/.image/t_share/MTQ3Mzg2NDU3NDMzMDU2OTUx/biggie_smalls_photo_by_clarence_davis_new_york_daily_news_archive_getty_97348258.jpg'
)

band27 = Band.create(
  band_name: 'Gitpull',
  location: 'Miami Florida',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'http://redalertpolitics.com/files/2013/04/Pitbull.jpg'
)

band28 = Band.create(
  band_name: 'Splice Girls',
  location: 'London, England',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Spice_Girls_in_Toronto%2C_Ontario.jpg/1149px-Spice_Girls_in_Toronto%2C_Ontario.jpg'
)

band29 = Band.create(
  band_name: 'Mariah Curry',
  location: 'Huntington, New York',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Mariah_Carey_%40_2010_Academy_Awards.jpg'
)

band30 = Band.create(
  band_name: 'Alice in Blockchains',
  location: 'Seattle, Washington',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Alice_In_Chains_-_Jimmy_Kimmel_Live.jpg'
)

band31 = Band.create(
  band_name: 'Loope Fiasco',
  location: 'Chicago, Illinois',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'http://www.rap-up.com/app/uploads/2014/12/lupe-fiasco.jpg'
)

band32 = Band.create(
  band_name: 'API',
  location: 'Ukiah, California',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'https://iscale.iheart.com/v3/url/aHR0cDovL2ltYWdlLmloZWFydC5jb20vaW1hZ2VzL3JvdmkvMTA4MC8wMDAxLzM2Ny9NSTAwMDEzNjcwOTEuanBn'
)

band33 = Band.create(
  band_name: 'Nickelbackend',
  location: 'Alberta, Canada',
  mini_bio: Faker::Hipster.paragraph(mini_bio_rand),
  image_location: 'http://images.genius.com/690ebb794f404ce292a2c2a9fba7e195.1000x1000x1.jpg'
)



## GENRES
alternative = Genre.create(genre: 'alternative')
alternative_hip_hop = Genre.create(genre: 'alternative hip hop')
alternative_metal = Genre.create(genre: 'alternative metal')
alternative_rock = Genre.create(genre: 'alternative rock')
baroque_pop = Genre.create(genre: 'baroque pop')
blues_rock = Genre.create(genre: 'blues rock')
conscious_hip_hop = Genre.create(genre: 'conscious hip hop')
conscious_rap = Genre.create(genre: 'conscious rap')
country = Genre.create(genre: 'country')
dance_pop = Genre.create(genre: 'dance_pop')
deep_house = Genre.create(genre: 'deep house')
disco = Genre.create(genre: 'disco')
dream_pop = Genre.create(genre: 'dream pop')
edm = Genre.create(genre: 'EDM')
electronic_rock = Genre.create(genre: 'electronic rock')
funk = Genre.create(genre: 'funk')
funk_metal = Genre.create(genre: 'funk metal')
gangsta_rap = Genre.create(genre: 'gangsta rap')
garage_rock = Genre.create(genre: 'garage rock')
glam_metal = Genre.create(genre: 'glam metal')
gothic_rock = Genre.create(genre: 'gothic rock')
grunge = Genre.create(genre: 'grunge')
hard_rock = Genre.create(genre: 'hard rock')
heavy_metal = Genre.create(genre: 'heavy metal')
hip_hop = Genre.create(genre: 'hip hop')
house = Genre.create(genre: 'house')
indie = Genre.create(genre: 'indie')
indie_pop = Genre.create(genre: 'indie pop')
indie_rock = Genre.create(genre: 'indie rock')
industrial_rock = Genre.create(genre: 'industrial rock')
latin_rap = Genre.create(genre: 'latin rap')
metal = Genre.create(genre: 'metal')
nu_metal = Genre.create(genre: 'nu_metal')
pop = Genre.create(genre: 'pop')
pop_punk = Genre.create(genre: 'pop punk')
pop_rap = Genre.create(genre: 'pop rap')
pop_rock = Genre.create(genre: 'pop rock')
post_grunge = Genre.create(genre: 'post grunge')
post_punk = Genre.create(genre: 'post punk')
punk_rock = Genre.create(genre: 'punk rock')
rap = Genre.create(genre: 'rap')
rap_metal = Genre.create(genre: 'rap metal')
rap_rock = Genre.create(genre: 'rap rock')
reggaeton = Genre.create(genre: 'reggaeton')
rb = Genre.create(genre: 'R&B')
rock = Genre.create(genre: 'rock')
singer_songwriter = Genre.create(genre: 'singer-songwriter')
ska_punk = Genre.create(genre: 'ska punk')
soft_rock = Genre.create(genre: 'soft rock')
soul = Genre.create(genre: 'soul')
synth_pop = Genre.create(genre: 'synth pop')
trapp = Genre.create(genre: 'trap')


## BAND-GENRES
# Lana Dell Rey
BandGenre.create(band_id: band1.id, genre_id: pop.id)
BandGenre.create(band_id: band1.id, genre_id: baroque_pop.id)
BandGenre.create(band_id: band1.id, genre_id: dream_pop.id)
BandGenre.create(band_id: band1.id, genre_id: indie_pop.id)

# Perl Jam
BandGenre.create(band_id: band2.id, genre_id: rock.id)
BandGenre.create(band_id: band2.id, genre_id: alternative_rock.id)
BandGenre.create(band_id: band2.id, genre_id: grunge.id)
BandGenre.create(band_id: band2.id, genre_id: hard_rock.id)

# Foo Bar Fighters
BandGenre.create(band_id: band3.id, genre_id: rock.id)
BandGenre.create(band_id: band3.id, genre_id: alternative_rock.id)
BandGenre.create(band_id: band3.id, genre_id: hard_rock.id)
BandGenre.create(band_id: band3.id, genre_id: post_grunge.id)

# Ajaxon Five
BandGenre.create(band_id: band4.id, genre_id: pop.id)
BandGenre.create(band_id: band4.id, genre_id: disco.id)
BandGenre.create(band_id: band4.id, genre_id: rb.id)
BandGenre.create(band_id: band4.id, genre_id: soul.id)

# Death Cab For Queuetie
BandGenre.create(band_id: band5.id, genre_id: indie.id)
BandGenre.create(band_id: band5.id, genre_id: alternative_rock.id)
BandGenre.create(band_id: band5.id, genre_id: indie_rock.id)
BandGenre.create(band_id: band5.id, genre_id: indie_pop.id)

# Node Out
BandGenre.create(band_id: band6.id, genre_id: pop.id)
BandGenre.create(band_id: band6.id, genre_id: ska_punk.id)
BandGenre.create(band_id: band6.id, genre_id: alternative_rock.id)
BandGenre.create(band_id: band6.id, genre_id: pop_rock.id)

# Link 182
BandGenre.create(band_id: band7.id, genre_id: rock.id)
BandGenre.create(band_id: band7.id, genre_id: pop_punk.id)
BandGenre.create(band_id: band7.id, genre_id: alternative_rock.id)
BandGenre.create(band_id: band7.id, genre_id: punk_rock.id)

# Maclemore
BandGenre.create(band_id: band8.id, genre_id: hip_hop.id)
BandGenre.create(band_id: band8.id, genre_id: alternative_hip_hop.id)
BandGenre.create(band_id: band8.id, genre_id: pop_rap.id)

# U2ube
BandGenre.create(band_id: band9.id, genre_id: rock.id)
BandGenre.create(band_id: band9.id, genre_id: alternative_rock.id)
BandGenre.create(band_id: band9.id, genre_id: pop_rock.id)
BandGenre.create(band_id: band9.id, genre_id: post_punk.id)

# ASYNC
BandGenre.create(band_id: band10.id, genre_id: pop.id)
BandGenre.create(band_id: band10.id, genre_id: dance_pop.id)

# Linkedin Park
BandGenre.create(band_id: band11.id, genre_id: rock.id)
BandGenre.create(band_id: band11.id, genre_id: alternative_rock.id)
BandGenre.create(band_id: band11.id, genre_id: nu_metal.id)

# Popup Roach
BandGenre.create(band_id: band12.id, genre_id: rock.id)
BandGenre.create(band_id: band12.id, genre_id: hard_rock.id)
BandGenre.create(band_id: band12.id, genre_id: nu_metal.id)
BandGenre.create(band_id: band12.id, genre_id: rap_metal.id)

# JSON Derulo
BandGenre.create(band_id: band13.id, genre_id: rb.id)
BandGenre.create(band_id: band13.id, genre_id: hip_hop.id)
BandGenre.create(band_id: band13.id, genre_id: pop.id)

# Hashlee Simpson
BandGenre.create(band_id: band14.id, genre_id: pop.id)
BandGenre.create(band_id: band14.id, genre_id: pop_rock.id)
BandGenre.create(band_id: band14.id, genre_id: pop_punk.id)

# The Keystrokes
BandGenre.create(band_id: band15.id, genre_id: rock.id)
BandGenre.create(band_id: band15.id, genre_id: indie_rock.id)
BandGenre.create(band_id: band15.id, genre_id: garage_rock.id)
BandGenre.create(band_id: band15.id, genre_id: post_punk.id)

# The Fray
BandGenre.create(band_id: band16.id, genre_id: rock.id)
BandGenre.create(band_id: band16.id, genre_id: pop_rock.id)
BandGenre.create(band_id: band16.id, genre_id: alternative_rock.id)
BandGenre.create(band_id: band16.id, genre_id: soft_rock.id)

# Fat Arrow Smith
BandGenre.create(band_id: band17.id, genre_id: rock.id)
BandGenre.create(band_id: band17.id, genre_id: hard_rock.id)
BandGenre.create(band_id: band17.id, genre_id: blues_rock.id)
BandGenre.create(band_id: band17.id, genre_id: glam_metal.id)

# Rage Against the Machine Learning
BandGenre.create(band_id: band18.id, genre_id: metal.id)
BandGenre.create(band_id: band18.id, genre_id: funk_metal.id)
BandGenre.create(band_id: band18.id, genre_id: alternative_metal.id)
BandGenre.create(band_id: band18.id, genre_id: nu_metal.id)

# Black IPs
BandGenre.create(band_id: band19.id, genre_id: pop.id)
BandGenre.create(band_id: band19.id, genre_id: hip_hop.id)
BandGenre.create(band_id: band19.id, genre_id: dance_pop.id)
BandGenre.create(band_id: band19.id, genre_id: edm.id)

# Nine Inch Rails
BandGenre.create(band_id: band20.id, genre_id: rock.id)
BandGenre.create(band_id: band20.id, genre_id: alternative_rock.id)
BandGenre.create(band_id: band20.id, genre_id: electronic_rock.id)

# Chance the Wrapper
BandGenre.create(band_id: band21.id, genre_id: rap.id)
BandGenre.create(band_id: band21.id, genre_id: hip_hop.id)
BandGenre.create(band_id: band21.id, genre_id: conscious_hip_hop.id)

# Car DB
BandGenre.create(band_id: band22.id, genre_id: hip_hop.id)
BandGenre.create(band_id: band22.id, genre_id: trapp.id)

# Bashtreet Boys
BandGenre.create(band_id: band23.id, genre_id: pop.id)
BandGenre.create(band_id: band23.id, genre_id: dance_pop.id)
BandGenre.create(band_id: band23.id, genre_id: rb.id)
BandGenre.create(band_id: band23.id, genre_id: pop_rock.id)

# Disclojure
BandGenre.create(band_id: band24.id, genre_id: house.id)
BandGenre.create(band_id: band24.id, genre_id: deep_house.id)
BandGenre.create(band_id: band24.id, genre_id: synth_pop.id)

# Schoolboy Queue
BandGenre.create(band_id: band25.id, genre_id: rap.id)
BandGenre.create(band_id: band25.id, genre_id: pop_rap.id)
BandGenre.create(band_id: band25.id, genre_id: gangsta_rap.id)

# Big O Smalls
BandGenre.create(band_id: band26.id, genre_id: rap.id)
BandGenre.create(band_id: band26.id, genre_id: hip_hop.id)
BandGenre.create(band_id: band26.id, genre_id: gangsta_rap.id)
BandGenre.create(band_id: band26.id, genre_id: pop_rap.id)

# Gitpull
BandGenre.create(band_id: band27.id, genre_id: rap.id)
BandGenre.create(band_id: band27.id, genre_id: dance_pop.id)
BandGenre.create(band_id: band27.id, genre_id: latin_rap.id)

# Splice Girls
BandGenre.create(band_id: band28.id, genre_id: pop.id)
BandGenre.create(band_id: band28.id, genre_id: dance_pop.id)
BandGenre.create(band_id: band28.id, genre_id: rb.id)

# Mariah Curry
BandGenre.create(band_id: band29.id, genre_id: pop.id)
BandGenre.create(band_id: band29.id, genre_id: rb.id)
BandGenre.create(band_id: band29.id, genre_id: dance_pop.id)
BandGenre.create(band_id: band29.id, genre_id: pop_rap.id)

# Alice in Blockchains
BandGenre.create(band_id: band30.id, genre_id: metal.id)
BandGenre.create(band_id: band30.id, genre_id: alternative_metal.id)
BandGenre.create(band_id: band30.id, genre_id: grunge.id)
BandGenre.create(band_id: band30.id, genre_id: heavy_metal.id)

# Loope Fiasco
BandGenre.create(band_id: band31.id, genre_id: hip_hop.id)

# API
BandGenre.create(band_id: band32.id, genre_id: rock.id)
BandGenre.create(band_id: band32.id, genre_id: punk_rock.id)

# Nickelbackend
BandGenre.create(band_id: band33.id, genre_id: rock.id)
BandGenre.create(band_id: band33.id, genre_id: hard_rock.id)
BandGenre.create(band_id: band33.id, genre_id: pop_rock.id)




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
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+2.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+3.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+4.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+5.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+6.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+7.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+8.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+9.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+10.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+11.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+12.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+13.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+14.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+15.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+16.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+17.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+18.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+19.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+20.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+21.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+22.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+23.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+24.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+25.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+26.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+27.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+28.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+29.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+30.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+31.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+32.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+33.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+34.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+35.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+36.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+37.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+38.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+39.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+40.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+41.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+42.jpg',
  'https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Random+Album+Art/Album+Art+43.jpg'
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
