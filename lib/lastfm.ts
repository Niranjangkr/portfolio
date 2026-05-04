export async function getRecentTracks(limit = 1) {
  const apiKey = process.env.LASTFM_API_KEY;
  const username = process.env.LASTFM_USERNAME;

  if (!apiKey || !username) {
    // Return placeholder if not configured
    return {
      nowPlaying: true,
      track: "Night Springs (feat. Keira)",
      artist: "Alan Wake",
      albumArt: "https://i.scdn.co/image/ab67616d0000b2734121faee31da52613b5ee0e0",
      playCount: 13,
      url: "#"
    };
  }

  try {
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&limit=${limit}&format=json`;
    const response = await fetch(url, { next: { revalidate: 60 } });
    const data = await response.json();
    const latestTrack = data.recenttracks.track[0];

    return {
      nowPlaying: latestTrack['@attr']?.nowplaying === 'true',
      track: latestTrack.name,
      artist: latestTrack.artist['#text'],
      albumArt: latestTrack.image[latestTrack.image.length - 1]['#text'] || null,
      playCount: null, // Last.fm doesn't give track playcount in this endpoint without extra calls
      url: latestTrack.url
    };
  } catch (error) {
    console.error("Last.fm API error:", error);
    return null;
  }
}
