export type User = {
  album_count: string;
  bio: string;
  cover_photo: {
    "640x": string;
    "2000x": string;
  };
  followee_count: number;
  follower_count: number;
  handle: string;
  id: string;
  is_verified: boolean;
  location: string;
  name: number;
  playlist_count: number;
  profile_picture: {
    "150x150": string;
    "480x480": string;
    "1000x1000": string;
  };
  repost_count: number;
  track_count: number;
};

export type Track = {
  artwork: {
    "150x150": "string";
    "480x480": "string";
    "1000x1000": "string";
  };
  description: "string";
  genre: "string";
  id: "string";
  mood: "string";
  release_date: "string";
  remix_of: {
    tracks: [
      {
        parent_track_id: "string";
      }
    ];
  };
  repost_count: 0;
  favorite_count: 0;
  tags: "string";
  title: "string";
  user: {
    album_count: 0;
    bio: "string";
    cover_photo: {
      "640x": "string";
      "2000x": "string";
    };
    followee_count: 0;
    follower_count: 0;
    handle: "string";
    id: "string";
    is_verified: true;
    location: "string";
    name: "string";
    playlist_count: 0;
    profile_picture: {
      "150x150": "string";
      "480x480": "string";
      "1000x1000": "string";
    };
    repost_count: 0;
    track_count: 0;
  };
  duration: 0;
  downloadable: true;
  play_count: 0;
};
