# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180106175928) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.integer "band_id", null: false
    t.string "name", null: false
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_location", null: false
    t.index ["band_id"], name: "index_albums_on_band_id"
    t.index ["name"], name: "index_albums_on_name"
  end

  create_table "band_genres", force: :cascade do |t|
    t.integer "band_id", null: false
    t.integer "genre_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["band_id"], name: "index_band_genres_on_band_id"
    t.index ["genre_id"], name: "index_band_genres_on_genre_id"
  end

  create_table "bands", force: :cascade do |t|
    t.string "band_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "location", null: false
    t.string "mini_bio", null: false
    t.string "image_location", null: false
    t.index ["band_name"], name: "index_bands_on_band_name", unique: true
  end

  create_table "follows", force: :cascade do |t|
    t.integer "follower_id", null: false
    t.integer "followee_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["followee_id"], name: "index_follows_on_followee_id"
    t.index ["follower_id"], name: "index_follows_on_follower_id"
  end

  create_table "genres", force: :cascade do |t|
    t.string "genre", null: false
    t.index ["genre"], name: "index_genres_on_genre", unique: true
  end

  create_table "songs", force: :cascade do |t|
    t.integer "album_id", null: false
    t.string "title", null: false
    t.integer "track_index", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "song_location", null: false
    t.index ["album_id"], name: "index_songs_on_album_id"
    t.index ["title"], name: "index_songs_on_title"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "email", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["username"], name: "index_users_on_username"
  end

end
