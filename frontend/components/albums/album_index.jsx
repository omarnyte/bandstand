 import React from 'react';

 import AlbumIndexItem from './album_index_item';

 class AlbumIndex extends React.Component {

  renderNoAlbums(currentAlbums) {
    if (currentAlbums.length === 0) {
      return (
        <div className='no-albums'>
         <img src='https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Site+Images/photo-1499415479124-43c32433a620.jpeg' />
         <span>This artist doesn't have any albums!</span>
        </div>
      );
     }
   }

   render () {
     return (
       <ul className='album-index-component'>
         {this.renderNoAlbums(this.props.albums)}
         {this.props.albums.map(album =>
           <AlbumIndexItem key={album.id} album={album} />
         )}
       </ul>
     );
   }
 }

export default AlbumIndex;
