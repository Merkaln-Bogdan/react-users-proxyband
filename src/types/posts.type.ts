type PostType = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

type AlbumType = {
  id: number;
  userId: number;
  title: string;
};

export type { PostType, AlbumType };
