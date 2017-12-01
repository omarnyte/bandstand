# Bandstand

[Live Demo](http://bandstandfullstack.herokuapp.com/#/)

Bandstand is a music discovery website inspired by [Bandcamp](https://bandcamp.com). Users of the site can search by bands, albums, and songs. If an album has songs associated with it, a user can
stream the music directly from the site. If the user is logged in, the
user can follow bands.

## Technologies Used
* CSS
* HTML
* JavaScript
* PostgreSQL
* React-Redux
* * Howler
* Ruby on Rails

## Search
Bandstand's search feature relies on PostgreSQL's powerful abilities to
search across the site's bands, albums, and songs tables. Further, the
search results responsively appear as the user types a search query. The
search results also make it clear whether the result item is a song,
album, or band.

![alt-text](https://s3-us-west-1.amazonaws.com/bandstandapp-dev/README+Files/Search.gif)

```
def self.top_results(query_param)
  param = query_param.downcase.split('')
  param = param.join('%')
  param = '%' + param + '%'
  Band.where('lower(band_name) LIKE ?', param).limit(5)
end
```
By wrapping each element of the search query in a '%', the user can find
the music they are looking for even if they commit a typo or skip a letter.

```
handleChange(e) {
  clearTimeout(this.quickSearchTimeout);
  const query = e.target.value;
  this.setState({query});
  this.quickSearchTimeout = setTimeout(() => this.props.searchDB(this.state.query), 500);
}
```
A custom debounce also ensures that an AJAX request is not dispatched
until the user has stopped typing rather than after every keystroke.

## Band and Album Show Pages
Users can be linked to a band or an album show page directly from the
search results. Both pages will display a band's mini-bio, featuring their
location and a brief description. The band show page renders the band's
albums, if any. The album's show page render the album's songs, if any.

(Band and Album Show Pages gif goes here)


## Music Streaming
An album show page displays the album's song's as well along with an
integrated music player provided by the React Howler library. By default,
the album's first track is loaded on the player. Users can begin playing
the song by clicking on the large lay button, or they may click on any
of the album's other songs to stream that song.

![alt-text](https://s3-us-west-1.amazonaws.com/bandstandapp-dev/README+Files/Music+Player.gif)

## Band Following
Within the band show page or the album show page, a registered user can
choose to follow that band. The site will render a 'Follow' button if
the user is already following the band or an 'Unfollow' button if the
user is not already following the band.

![alt-text](https://s3-us-west-1.amazonaws.com/bandstandapp-dev/README+Files/Follow+Unfollow+Toggle.gif)

## Future Direction
* A profile page will allow a user to view all of the bands they are
  following. A historical feed will allow the user to view the albums
  that their followed artists have released.

* All albums will be tagged with genres. Users will be able to browse  
  albums by genre.
