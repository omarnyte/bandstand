# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# demo log in
Band.create(
  username: 'lanadellrey',
  password: 'password',
  email: 'lanadellrey@email.com',
  band_name: 'Lana Dell Rey'
  )

Band.create(
  username: 'username1',
  password: 'password',
  email: 'email1@email.com',
  band_name: 'band1'
  )

Band.create(
  username: 'username2',
  password: 'password',
  email: 'email2@email.com',
  band_name: 'band2'
  )

Band.create(
  username: 'username3',
  password: 'password',
  email: 'email3@email.com',
  band_name: 'band3'
  )

Band.create(
  username: 'username4',
  password: 'password',
  email: 'email4@email.com',
  band_name: 'band4'
)
