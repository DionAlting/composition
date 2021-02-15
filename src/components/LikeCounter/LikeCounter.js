import React, { useState, useEffect } from "react";

const LikeCounter = () => {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes);
  console.log("A render!");

  /*
❓ Try to explain, in your own words, what this second, array argument to the useEffect is supposed to achieve. 
    Hint: the React docs call it the "dependencies" array.

    When you pass a variable to the dependencies array the useEffect hook will run each time that value changes
  */
  useEffect(() => {
    console.log("The useEffect action!");
  }, [numLikes]);

  /*
  🤔 Question
    Can you predict what would happen to the UI if we were to call set_numLikes? What argument(s) would we pass into the function?

    You should pass the value you want numLikes to be.
  */
  const increment = () => {
    console.log("Yes, clicked! Current number of likes:", numLikes);
    set_numLikes(numLikes + 1);
  };
  const reset = () => {
    set_numLikes(0);
  };
  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
        <button onClick={increment}>Like</button>
        <button onClick={reset}>Reset</button>
      </p>
    </div>
  );
};

export default LikeCounter;
