import React, { useEffect, useState } from "react";
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi(); // global object, connector for Spotify app with the react project

function App() {
  const [token, setToken] = useState(null); // initial state is null
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    
    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("User: ", user);

        dispatch({
          type: 'SET_USER',
          user: user // or just user, here we shoot the value of user in the Data Layer
        })
      }); // promise function that get the user account loggen in
    }

    console.log("I HAVE A TOKEN: ", token); // token for safe communication between the react app and Spotify
  }, []);

  console.log("User: ", user);

  return (
    <div className="App">
      {
        token ? <Player /> :
        <Login />
      }
    </div>
  );
}

export default App;
