export interface IUnsplashResponse {
  body: {
    id: string;
    created_at: string;
    updated_at: string;
    promoted_at: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string;
    alt_description: string;
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
    };
    links: {
      self: string;
      html: string;
      download: string;
      download_location: string;
    };
    categories: any[];
    likes: number;
    liked_by_user: boolean;
    current_user_collections: {
      id: number;
      title: string;
      published_at: string;
      last_collected_at: string;
      updated_at: string;
      cover_photo: any;
      user: any;
    }[];
    sponsorship: any;
    user: {
      id: string;
      updated_at: string;
      username: string;
      name: string;
      first_name: string;
      last_name: string;
      twitter_username: string | null;
      portfolio_url: string;
      bio: string;
      location: string;
      links: {
        self: string;
        html: string;
        photos: string;
        likes: string;
        portfolio: string;
        following: string;
        followers: string;
      };
      profile_image: {
        small: string;
        medium: string;
        large: string;
      };
      instagram_username: string;
      total_collections: number;
      total_likes: number;
      total_photos: number;
      accepted_tos: boolean;
    };
    exif: {
      make: string;
      model: string;
      exposure_time: string;
      aperture: string;
      focal_length: string;
      iso: number;
    };
    location: {
      title: string;
      name: string;
      city: string | null;
      country: string;
      position: {
        latitude: number;
        longitude: number;
      };
    };
    views: number;
    downloads: number;
  };
  headers: {};
  ok: boolean;
  status: number;
  statusText: string;
  type: number;
  url: string;
}
