import React from 'react';
import { Card } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

export default function UserComp() {
  const { user } = useAuth();

  return (
    <>
      <Card
        className="card"
        style={{
          width: '15rem',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Card.Img style={{ borderRadius: '140px', width: '190px', marginTop: '15px' }} src={user.photoURL} alt="profile" />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{user.displayName}</Card.Title>
          <Card.Text style={{ color: 'black' }}>{user.email}</Card.Text>
          <Card.Text>Last sign in: {user.metadata.lastSignInTime}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
