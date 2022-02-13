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
