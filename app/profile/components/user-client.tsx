"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from 'react';

const ProfileClient = () => {
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    // if (user) {
    //   localStorage.setItem('email', user?.email);
    // }
  }, [user]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return user ? (
    <div className="flex gap-2">
      <img src={user.picture} alt={user.name}  className="rounded-full w-12 h-12 -mt-2"/>
      <h2 >{user.name}</h2>
      {/* <p>{user.email}</p> */}
    </div>
  ) : (
    <div>.</div>
  );
};

export default ProfileClient;
