import type { PortfolioItem } from '../types'

export const portfolio: PortfolioItem[] = [
  {
    title: 'SoundCloud Audio',
    category: ['All', 'SoundCloud'],
    type: 'audio',
    thumbnail: '/img/portfolio/1.jpg',
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221650664&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
  },
  {
    title: 'Detailed Project 1',
    category: ['All', 'Detailed'],
    type: 'image',
    thumbnail: '/img/portfolio/2.jpg',
    fullSrc: '/img/portfolio/full/2.jpg'
  },
  {
    title: 'YouTube Video',
    category: ['All', 'YouTube Videos'],
    type: 'video',
    thumbnail: '/img/portfolio/3.jpg',
    src: 'https://www.youtube.com/embed/nUpxU886t6A'
  },
  {
    title: 'Detailed Project 2',
    category: ['All', 'Detailed'],
    type: 'image',
    thumbnail: '/img/portfolio/4.jpg',
    fullSrc: '/img/portfolio/full/3.jpg'
  },
  {
    title: 'Vimeo Video',
    category: ['All', 'Vimeo Videos'],
    type: 'video',
    thumbnail: '/img/portfolio/5.jpg',
    src: 'https://player.vimeo.com/video/158221461'
  },
  {
    title: 'Mockup 1',
    category: ['All', 'Mockups'],
    type: 'image',
    thumbnail: '/img/portfolio/6.jpg',
    fullSrc: '/img/portfolio/full/5.jpg'
  }
];
