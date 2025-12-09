import { Job } from './types';

export const jobs: Job[] = [
  {
    role: 'Intern - Wordpress Developer',
    company: 'Faculty of Computer Science (FILKOM) University of Brawijaya',
    logo: '/logos/filkom-logo.png',
    duration: 'July 2022 - January 2023',
    description:
      'Resolved mobile UI responsiveness issues and optimized landing page performance, improving page load speed by 40%. Conducted website evaluation on filkom.ub.ac.id/lab-mgm using User Acceptance Testing (UAT), achieving 100% compliance with test standards. Collaborated with the web development team to implement SEO and accessibility enhancements, increasing organic traffic by 35% and improving accessibility scores by 20%.',
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
      'Engineered a responsive Laravel (PHP) web application as part of a Scrum team, integrating modular components and optimizing frontend performance, resulting in a 35% improvement in page load speed and supporting 50% higher concurrent user traffic. Reduced page load times by 50%',
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
    role: 'Fullstack Developer',
    company: 'Enigma Camp',
    logo: '/logos/enigma-camp-logo.ico',
    duration: 'January 2024 - January 2025',
    description:
      'Achieved expertise in backend development by building and deploying 2 production-ready applications using Java with Spring Boot and GoLang with the Fiber framework, including a timesheet management system for 50+ EnigmaCamp employees, reducing manual reporting by 70%. Enhanced frontend capabilities by developing a responsive Next.js website optimized for mobile, tablet, and desktop, improving user engagement metrics by 40%. Completed mobile development with React Native and Expo by delivering a fully functional mobile app integrated with backend services and a payment gateway, resulting in a 60% faster transaction process for users.',
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
  {
    role: 'Intern - iOS Developer',
    company: 'Apple Developer Academy',
    logo: '/logos/apple-logo.png',
    duration: 'March 2025 - Present',
    description:
      'Developed an iOS application using SwiftUI and Clean Architecture, deployed to TestFlight for beta testing with 10+ users. Implemented user-centric design principles based on Apple’s Human Interface Guidelines, improving design consistency across iOS, iPadOS, and WatchOS, resulting in a 25% increase in user engagement and a 30% reduction in reported usability issues. Collaborated with a cross-functional team of 5 developers and designers, ensuring timely delivery under Agile sprints',
    skills: [
      'Swift',
      'Swift UI'
    ],
    projects: [
      {
        projectName: 'KeySense',
        imageUrl: '/job-images/ada-keysense.jpeg',
        link: 'https://apps.apple.com/id/app/keysense/id6754688749',
      },
      {
        projectName: 'GripIn',
        imageUrl: '/job-images/ada-gripin.jpeg',
        link: 'https://testflight.apple.com/join/nAHKmuTT',
      },
      {
        projectName: 'DuckyDive',
        imageUrl: '/job-images/ada-duckydive.jpeg',
        link: 'https://testflight.apple.com/join/g6YcySwX',
      },
    ],
  },

];
