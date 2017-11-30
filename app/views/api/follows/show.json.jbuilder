json.user do
  json.partial! '/api/users/user', user: @user
end

json.band do
  json.partial! '/api/bands/band', band: @band
end
