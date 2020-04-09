import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Dimmer, Loader, Item } from 'semantic-ui-react';
import useData from '../hooks/useData';

export default function AlbumsPage() {
  const [albums, isFetching] = useData('/albums', []);
  return (
    <Container>
      <Dimmer active={isFetching} inverted>
        <Loader>Loading...</Loader>
      </Dimmer>
      {albums.map(album => {
        return (
          <Item key={album.id}>
            <Item.Extra>
              <Link to={`/users/${album.userId}/albums/${album.id}`}>{album.title}</Link>
            </Item.Extra>
          </Item>
        )
      })}
    </Container>
  )
}
