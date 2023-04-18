/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useAuth } from '../utils/context/authContext';

export default function UserComp() {
  const { user } = useAuth();

  return (
    <>
      <div
        className="card"
        style={{
          width: '18rem',
        }}
      >
        <img src={user.photoURL} className="card-img-top" alt="profile" />
        <div className="card-body">
          <h5 className="card-title" id="pfl-txt">{user.displayName}</h5>
          <p className="card-text" id="pfl-txt">{user.email}</p>
          <p className="card-text" id="pfl-txt">Last sign in: {user.metadata.lastSignInTime}</p>
        </div>
      </div>
    </>
  );
}
