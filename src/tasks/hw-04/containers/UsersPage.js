import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Dimmer, Loader, Item } from 'semantic-ui-react';
import useData from '../hooks/useData';

export default function UsersPage() {
  const [users, isFetching] = useData('/users', []);
  return (
    <Container className="page">
      <Dimmer active={isFetching} inverted>
        <Loader>Loading...</Loader>
      </Dimmer>
      {users.map(user => {
        return (
          <Item key={user.id}>
            <Item.Extra>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </Item.Extra>
          </Item>
        )
      })}
    </Container>
  )
}
