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
  username: 'perljam',
  password: 'password',
  email: 'perljam@email.com',
  band_name: 'Perl Jam'
  )

Band.create(
  username: 'foobarfighters',
  password: 'password',
  email: 'foobarfighters@email.com',
  band_name: 'Foo Bar Fighters'
  )

Band.create(
  username: 'ajaxonfive',
  password: 'password',
  email: 'ajaxonfive@email.com',
  band_name: 'Ajaxon Five'
  )

Band.create(
  username: 'dc4qt',
  password: 'password',
  email: 'dc4qt@email.com',
  band_name: 'Death Cab for Queuetie'
)
