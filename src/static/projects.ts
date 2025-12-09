import { skillCategories } from './skills';
import { ProjectGroup, project } from './types';

export const projects: project[] = [
  {
    title: 'KeySense',
    description:
      'KeySense help musicians and singers quickly identify the key of any song. As a tech lead, I manage the usage of more beneficial technologies/algorithm and supervise the code work of other programmers. Delivered a stable app with high accuracy up to 70%',
    techs: ['Swift', 'Swift UI', 'AVAudio', 'Parabolic Algorithm', 'Git', 'Github'],
    link: 'https://apps.apple.com/id/app/keysense/id6754688749',
  },
  {
    title: 'GripIn',
    description:
      'iOS hand therapy app that blends CoreML gesture recognition, live camera feedback, and one-handed navigation to support wrist injury recovery',
    techs: ['Swift', 'Swift UI', 'CoreML', 'Vision', 'CreateML', 'Git', 'Github'],
    link: 'https://testflight.apple.com/join/nAHKmuTT',
  },
  {
    title: 'DuckyDive',
    description: 'Investigated Apple Reality Kit Technology, collaborated well with team of 5 people. As a tech enthusiast I’m facing so many bugs logic and based on that I learned well about Reality Kit. Delivered game play and story to Apple’s team, students, and game enthusiasts',
    techs: ['Swift', 'Swift UI', 'Reality Kit', 'Git', 'Github'],
    link: 'https://testflight.apple.com/join/g6YcySwX'
  },
  {
    title: 'Ciputra Golf Mobile Application',
    description:
      'As a mobile developer, I led the development of a driving-range ordering app for Ciputra Golf, implementing SwiftUI for a modern UI and Supabase for real-time data management. Delivered a seamless experience for players and staff, improving operational efficiency.',
    techs: ['Swift', 'Swift UI', 'Supabase', 'Supabase Client', 'Jira'],
    link: 'https://testflight.apple.com/join/n4K1K5X7'
  },
  {
    title: 'Image Gallery',
    description:
      'As a full-stack developer, I built a responsive image-sharing platform with Laravel backend and PostgreSQL database, enabling users to create and share collaborative galleries. Leveraged Tailwind CSS for a clean, responsive UI. Delivered a deployed application on Vercel for global access.',
    techs: [
      'PHP',
      'PostgreSQL',
      'HTML',
      'Tailwind CSS',
      'Git',
      'Github',
      'Laravel',
    ],
    link: 'https://image-gallery-laravel.vercel.app/',
  },
  {
    title: 'Spring Blogs API',
    description:
      'As a backend developer, I designed and implemented a RESTful API for a blogging platform, utilizing Spring Boot for the framework and Okta for OAuth authentication. Delivered secure and efficient blog management, tested thoroughly with Postman.',
    techs: ['Java', 'Git', 'Github', 'Spring Boot', 'Postman'],
    link: 'https://github.com/Garongan/spring-blogs-api',
  },
  {
    title: 'EazyCamp',
    description:
      'As a mobile developer, I built EazyCamp, a cross-platform mobile app using React Native and Expo, to help hikers reserve gear and organize end-to-end trips. Delivered intuitive UI and seamless functionality for outdoor enthusiasts.',
    techs: ['Javascript', 'Git', 'Github', 'React Native', 'Expo'],
    link: 'https://github.com/Garongan/ezazyCamp',
  },
  {
    title: 'Li Fashion',
    description:
      'As a mobile developer, I developed Li Fashion, a Flutter-based app for menswear inspiration, featuring curated trends and personalized recommendations. Delivered enhanced user engagement through thoughtful design and functionality.',
    techs: ['Dart', 'Git', 'Github', 'Flutter'],
    link: 'https://github.com/Garongan/li_fashion',
  },
  {
    title: 'Backend Sistem Pengelolaan Iuran',
    description:
      'As a backend developer, I engineered a backend service using Laravel and MySQL to automate residential dues and community administration. Delivered streamlined processes for housing communities, ensuring efficient management.',
    techs: ['PHP', 'MySQL', 'Laravel', 'Postman'],
    link: 'https://github.com/Garongan/li_fashion',
  },
  {
    title: 'Frontend Sistem Pengelolaan Iuran',
    description:
      'As a frontend developer, I created an interactive management dashboard using React, Vite, and Tailwind CSS, integrated with Chart.js for real-time data visualization. Delivered tools for effective administration to housing communities.',
    techs: [
      'JavaScript',
      'HTML',
      'CSS',
      'Git',
      'Github',
      'React',
      'Node.Js',
      'Vite',
      'Tailwind CSS',
    ],
    link: 'https://github.com/Garongan/frontend-sistem-pengelolaan-iuran',
  },
  {
    title: 'Restaurant App',
    description: "As a mobile developer, I built a Flutter application that displays restaurant lists, manages favorites, and shows reviews. Added a reminder feature for lunch breaks. Delivered enhanced user convenience.",
    techs: ['Dart', 'Git', 'Github', 'Flutter'],
    link: ""
  },
  {
    title: 'Story App',
    description: "As a mobile developer, I developed a Flutter app that allows users to create stories using images and location data. Focused on integrating camera and location services. Delivered a rich storytelling experience.",
    techs: ['Dart', 'Git', 'Github', 'Flutter'],
    link: ""
  },
  {
    title: 'Timesheet App',
    description:
      'As a backend developer, I implemented a timesheet service with Spring Boot and PostgreSQL to handle project allocations, overtime approvals, and payroll exports. Delivered accurate and efficient payroll processing, documented with Postman.',
    techs: ['Java', 'Spring Boot', 'PostgreSQL', 'Git', 'Github', 'Postman'],
    link: 'https://documenter.getpostman.com/view/30958942/2sAXjSz9Fs',
  }
];

const normalize = (value: string) => value.trim().toLowerCase();

const primarySkillCategories = skillCategories.filter(
  (category) => category.label !== 'Tools',
);

const toolsCategory = skillCategories.find((category) => category.label === 'Tools');

const getMatchCount = (category: (typeof skillCategories)[number], techs: string[]) =>
  techs.reduce((count, tech) => {
    const normalizedTech = normalize(tech);
    return category.skills.some((skill) => normalize(skill) === normalizedTech)
      ? count + 1
      : count;
  }, 0);

const resolveCategoryLabel = (project: project) => {
  let chosenLabel: string | null = null;
  let highestMatchCount = 0;

  primarySkillCategories.forEach((category) => {
    const matchCount = getMatchCount(category, project.techs);

    if (matchCount > highestMatchCount) {
      highestMatchCount = matchCount;
      chosenLabel = category.label;
    }
  });

  if (chosenLabel) {
    return chosenLabel;
  }

  if (toolsCategory) {
    const toolsMatchCount = getMatchCount(toolsCategory, project.techs);
    if (toolsMatchCount > 0) {
      return toolsCategory.label;
    }
  }

  return 'Other';
};

export const projectsBySkillLabel: ProjectGroup[] = (() => {
  const groupedProjects = new Map<string, project[]>();

  skillCategories.forEach((category) => {
    groupedProjects.set(category.label, []);
  });

  const otherProjects: project[] = [];

  projects.forEach((project) => {
    const label = resolveCategoryLabel(project);
    const group = groupedProjects.get(label);

    if (group) {
      group.push(project);
    } else {
      otherProjects.push(project);
    }
  });

  const orderedGroups: ProjectGroup[] = skillCategories
    .map((category) => ({
      label: category.label,
      projects: groupedProjects.get(category.label) ?? [],
    }))
    .filter((group) => group.projects.length > 0);

  if (otherProjects.length > 0) {
    orderedGroups.push({
      label: 'Other',
      projects: otherProjects,
    });
  }

  return orderedGroups;
})();
