const prompt = require('prompt-sync')({sigint: true});
const { capitalizeEachWord } = require('./helperFunctions');

const clientId = //Yours;
const clientSecret = //Yours;

const tokenUrl = 'https://accounts.spotify.com/api/token';

async function getToken() {
    try {
      const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
        },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
        }),
      });
  
      const data = await response.json();
      const accessToken = data.access_token;

      return accessToken;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
//getToken();

const search = prompt("The artist that you want to look up: ")
const searchQuery = capitalizeEachWord(search);
const searchUrl =  `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=album&limit=50`;

async function getInfo() {
    try {

      const accessToken = await getToken();
        console.log(accessToken);
      const response = await fetch(searchUrl, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        //muteHttpExceptions: true
      });
  
    if (response.ok) {
        const jsonResponse = await response.json();
        const albums = jsonResponse.albums.items;
        console.log('API Response: \n');
        for (let i = 0; i < albums.length; i++) {
            let album = albums[i];
            if (album.artists.some(artist => artist.name === searchQuery)) {
                let description = {
                    album_type: album.album_type,
                    artists: album.artists.map(artist => artist.name).join(', '), // Combine multiple artists into a string
                    album_name: album.name,
                    release_date: album.release_date,
                    total_tracks: album.total_tracks
                };
                console.log(`Album ${i + 1}:`, description);
            }
        }
        
    } else {
        console.error('API Request Failed:', response.status);
    }

    } catch (error) {
      console.error('Error:', error);
    }
  }

getInfo(); 


