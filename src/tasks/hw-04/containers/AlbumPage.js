import React from 'react';
import { Container, Dimmer, Loader, Image, Grid, Modal, Button, Header } from 'semantic-ui-react';
import { useParams, Redirect } from 'react-router-dom';
import useData from '../hooks/useData';

export default function AlbumPage(props) {
  const { userId, albumId } = useParams();
  const [album, isFetching, err] = useData(`/albums/${albumId}/photos`, []);
  const userName = props.userName;
  
  if (err && err.status === 404) {
    return <Redirect to={`/users/${userId}`} />
  }
  return (
    <Container>
      <Dimmer active={isFetching} inverted>
        <Loader>Loading...</Loader>
      </Dimmer>
      <Grid columns={4}>
        {album.map(image => {
          return (
            <Grid.Column key={image.id}>
              <Modal
                trigger={
                  <Image src={image.thumbnailUrl} />
                }
                basic size='small'
                closeIcon>
                <Header icon='user circle' content={`by user ${userName}`} />
                <Modal.Content>
                  <Image src={image.url} wrapped fluid />
                </Modal.Content>
              </Modal>
            </Grid.Column>
          )
        })}
      </Grid>
    </Container>
  )
}
