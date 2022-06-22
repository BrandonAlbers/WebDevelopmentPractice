import React from "react";
import { useNavigate, useParams } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  const { username } = useParams();
  return (
    <div>
      This is Profile Page for {username}
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        {" "}
        Change to about page
      </button>
    </div>
  );
}

export default Profile;
