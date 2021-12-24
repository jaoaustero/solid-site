import { RouteDataFunc } from 'solid-app-router';

export type BlogInfo = {
  id?: string;
  img: string;
  title: string;
  description: string;
  author: string;
  author_url: string;
  date: number;
  body: () => Promise<any>;
};

export const list: { [id: string]: BlogInfo } = {
  'state-of-solid-september-2021': {
    img: '/img/blog/state-of-solid-september-2021/header.png',
    title: 'The State of Solid: September 2021',
    description:
      'First edition of a quarterly outline of updates in the Solid project, community and ecosystem.',
    author: 'Ryan Carniato',
    author_url: 'https://www.github.com/ryansolid',
    date: 1632960565000,
    body: async () => await import('./Articles/state-of-solid-september-2021.md'),
  },
  'welcome-to-the-solid-blog': {
    img: '/img/blog/welcome-to-the-solid-blog/header.png',
    title: 'Welcome to the Solid blog!',
    description:
      'A new Solid based blog with lots of information and helpful details for you to view.',
    author: 'David Di Biase',
    author_url: 'https://www.github.com/davedbase',
    date: 1635797366000,
    body: async () => await import('./Articles/state-of-solid-september-2021.md'),
  },
};

export const BlogData: RouteDataFunc = () => {
  return {
    get articles() {
      return list;
    },
    get archive() {
      return true;
    },
  };
};