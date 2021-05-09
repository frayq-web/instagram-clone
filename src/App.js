import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './Firebase';


function App() {
  const [posts, setPost] = useState([
    /*{
      username: "s04v",
      caption: "wow it works",
      imageUrl: "https://gomobi.pl/wp-content/uploads/2019/06/react-native.png"
    },
    {
      username: "shv04v",
      caption: "wow",
      imageUrl: "https://miro.medium.com/max/2484/1*CeuWv9fCjD1uTiTuKytnBQ.png"
    }*/
  ]);
  
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPost(snapshot.docs.map(doc => doc.data()));
    });
  }, []);


  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""/>
      </div>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

    </div>
  );
}

export default App;
