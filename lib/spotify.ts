export async function getSpotifyNowPlaying() {
  const token = process.env.SPOTIFY_TOKEN;
  
  if (!token || token === "xxx") {
    // Return dummy data if not configured
    return {
      isPlaying: true,
      track: "Night Springs (feat. Keira)",
      artist: "Alan Wake",
      albumArt: "https://i.scdn.co/image/ab67616d0000b2734121faee31da52613b5ee0e0",
      playCount: 13,
      playlistUrl: "https://open.spotify.com/playlist/02uOQLQYKlV3IhSysjX8HP"
    };
  }

  try {
    const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { revalidate: 60 },
    });

    if (response.status === 204 || response.status > 400) {
      return { isPlaying: false, playlistUrl: "https://open.spotify.com/playlist/02uOQLQYKlV3IhSysjX8HP" };
    }

    const data = await response.json();
    
    return {
      isPlaying: data.is_playing,
      track: data.item.name,
      artist: data.item.artists.map((_artist: any) => _artist.name).join(", "),
      albumArt: data.item.album.images[0].url,
      playCount: Math.floor(Math.random() * 20) + 1, // Simulated play count for UI demonstration
      playlistUrl: "https://open.spotify.com/playlist/02uOQLQYKlV3IhSysjX8HP"
    };
  } catch (error) {
    console.error("Spotify API error:", error);
    return { isPlaying: false, playlistUrl: "https://open.spotify.com/playlist/02uOQLQYKlV3IhSysjX8HP" };
  }
}
