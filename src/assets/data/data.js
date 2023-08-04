import airbnb from '../airbnb-clone.png';
import store from '../ecomm-store.png';
import dashboard from '../dashboard.png';

const projects = [
  {
    id: 1,
    image:
      'https://user-images.githubusercontent.com/73438276/233984769-4076ed6e-b220-4884-b063-3c6354d8c51b.png',
    name: 'Kwiksell',
    description:
      'Kwiksell is digital marketplace helps to connect business owners and consumers.',
    repo: 'https://github.com/d2ndjim?tab=repositories',
    live: 'https://www.kwiksell.com/',
  },
  {
    id: 2,
    image: airbnb,
    name: 'Airbnb NextJs',
    description:
      'An Imitation of the Airbnb website built using the new NextJS 13 app router, TailwindCSS, MongoDB and Prisma.',
    repo: 'https://github.com/d2ndjim/airbnb',
    live: 'https://rent-project-gold.vercel.app/',
  },
  {
    id: 3,
    image: store,
    name: 'Ecommerce Store',
    description:
      'This is an Ecommerce store where users can view order items of choice. Built using React, NextJS, and TailwindCSS.',
    repo: 'https://github.com/d2ndjim/ecommerce-store',
    live: 'https://ecommerce-store-mu-jade.vercel.app/',
  },
  {
    id: 4,
    image: dashboard,
    name: 'Ecommerce Dahboard',
    description:
      'This is an Ecommerce Dashboard + CMS application that can be connected to multiple Ecommerce Store applications. Built using NextJS, Prisma,NodeJS, MySQL, and TailwindCSS.',
    repo: 'https://github.com/d2ndjim/ecommerce-dashboard',
    live: 'https://ecommerce-dashboard-bice.vercel.app/',
  },
  {
    id: 5,
    image:
      'https://user-images.githubusercontent.com/73438276/198055620-7877987b-6156-41a8-aebc-5a8600cd6cbc.png',
    name: 'AES Service',
    description:
      'This is an application that helps users to make electrical engineering or repair appointments. Built using React, Redux and TailwindCSS.',
    repo: 'https://github.com/d2ndjim/aes-service',
    live: 'https://aes-service.vercel.app/',
  },
];

export default projects;
