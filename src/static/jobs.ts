import { Job } from './types';

export const jobs: Job[] = [
  {
    role: 'Intern - Wordpress Developer',
    company: 'Faculty of Computer Science (FILKOM) University of Brawijaya',
    logo: '/logos/filkom-logo.png',
    duration: 'July 2022 - January 2023',
    description: 'Manage and evaluate website using wordpress',
    skills: ['PHP', 'Wordpress', 'Elementor'],
    projects: [
      {
        projectName: 'Profile Company',
        imageUrl: '/job-images/filkom.ub.ac.id_lab-mgm.png',
        link: 'https://filkom.ub.ac.id/lab-mgm/',
      },
    ],
  },
  {
    role: 'Fullstack Developer',
    company: 'Coding Go',
    logo: '/logos/coding-go-logo.jpg',
    duration: 'February 2023 - June 2023',
    description:
      'Developed custom content management system website with laravel',
    skills: [
      'PHP',
      'Javascript',
      'MySQL',
      'HTML',
      'CSS',
      'Git',
      'Github',
      'Laravel',
    ],
    projects: [
      {
        projectName: 'Rojoku Trade Channel',
        imageUrl: '/job-images/coding-go.png',
        link: 'https://github.com/Garongan/laravel-RojokuTradeChannel',
      },
    ],
  },
  {
    role: 'Backend Developer',
    company: 'Enigma Camp',
    logo: '/logos/enigma-camp-logo.ico',
    duration: 'January 2024 - January 2025',
    description:
      'Database schema designer, develop website, building api, and create multiplatform application',
    skills: [
      'Java',
      'Go',
      'Javascript',
      'PostgreSQL',
      'Git',
      'Github',
      'Spring Boot',
      'Express',
      'Postman',
      'Node.Js'
    ],
    projects: [
      {
        projectName: 'Warung Makan Bahari API',
        imageUrl: '/job-images/enigma-camp-wmb-api.png',
        link: 'https://documenter.getpostman.com/view/30958942/2sAXjSz9LJ',
      },
      {
        projectName: 'POS(Point Of Sale) API',
        imageUrl: '/job-images/enigma-camp-pos-api.png',
        link: 'https://documenter.getpostman.com/view/30958942/2sAYBaA9qy',
      },
      {
        projectName: 'Timesheet App',
        imageUrl: '/job-images/enigma-camp-timesheet.png',
        link: 'https://documenter.getpostman.com/view/30958942/2sAXjSz9Fs',
      },
    ],
  },
  // TODO: Add new job experience here
];
