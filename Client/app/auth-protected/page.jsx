
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";

const AuthProtected = withPageAuthRequired(
  async () => {
    const session = await getSession();
    const user = session?.user;
    return (
      <div className="content-layout px-44">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    );
  },
  { returnTo: "/auth-protected" }
);

export default AuthProtected;
