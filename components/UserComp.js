import React from 'react';
import { useAuth } from '../utils/context/authContext';

export default function UserComp() {
  const { user } = useAuth();

  return (
    <>
      <div>prop test: {user.image}{user.name}{user.email}{user.metadata.lastSignInTime}</div>
    </>
  );
}
