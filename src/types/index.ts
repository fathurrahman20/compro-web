export interface User {
  id: string;
  name: string;
  email: string;
}

export interface News {
  id: string;
  title: string;
  slug: string;
  content: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  author: User;
}
