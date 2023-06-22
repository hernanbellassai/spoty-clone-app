import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import { loginUrl, getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

const spotify = new SpotifyWebApi();

function App() {


  const [token, setToken] = useState();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("soy usuario", user);
      });
    }

    console.log("tengo el token", token);
  }, []);



  return (
    <div className="app">

      { token ? 
       <Player/> : 

       <Login />
      }
     
    </div>
  );
}

export default App;
