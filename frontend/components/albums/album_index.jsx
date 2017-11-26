 import React from 'react';

 import AlbumIndexItem from './album_index_item';

 class AlbumIndex extends React.Component {

   render () {
     return (
       <ul className='album-index-component'>
         {this.props.albums.map(album =>
           <AlbumIndexItem key={album.id} album={album} />
         )}
       </ul>
     );
   }
 }

export default AlbumIndex;
