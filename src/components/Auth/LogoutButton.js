import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button
        style={{
          fontSize: "22px",
          padding: "10px 40px",
          borderRadius: "10px",
          fontWeight: "bold",
          cursor: "pointer",
          background: "#face2a",
          color: "#20242c",
        }}
        onClick={() => logout()}
      >
        Log Out
      </button>
    )
  );
};

export default LogoutButton;
