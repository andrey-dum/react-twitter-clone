import React, { useState } from "react";
import "./TweetBox.scss";
import { Avatar, Button } from "@material-ui/core";
import db from "../../firebase";
import firebase from 'firebase';


function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      displayName: "Mac",
      username: "Mac",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://i.dailymail.co.uk/1s/2020/03/18/11/26114936-8125727-image-a-8_1584531272374.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.dailymail.co.uk/1s/2020/03/18/11/26114936-8125727-image-a-8_1584531272374.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;