import React, { useState } from "react";

const LikeButton = () => {
  const [liked, set_Liked] = useState(false);

  const like = () => {
    console.log("Yes, clicked! Did you like it?:", liked);
    set_Liked(!liked);
  };

  return (
    <div>
      <p>
        <button onClick={like}>
          {!liked ? "Like this" : "You've liked this"}
        </button>
      </p>
    </div>
  );
};

export default LikeButton;
