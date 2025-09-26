import { skillCategories } from './skills';
import { ProjectGroup, project } from './types';

export const projects: project[] = [
  // START: FEATURED PROJECTS
  {
    title: 'Image Gallery',
    description:
      'Responsive image-sharing platform that lets users curate and publish collaborative galleries',
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
      'RESTful API for a blogging platform secured with Okta-driven OAuth authentication',
    techs: ['Java', 'Git', 'Github', 'Spring Boot', 'Postman'],
    link: 'https://github.com/Garongan/spring-blogs-api',
  },
  {
    title: 'EazyCamp',
    description:
      'Cross-platform mobile app that helps hikers reserve gear and organize trips end to end',
    techs: ['Javascript', 'Git', 'Github', 'React Native', 'Expo'],
    link: 'https://github.com/Garongan/ezazyCamp',
  },
  {
    title: 'Li Fashion',
    description:
      'Menswear inspiration app delivering curated trends and personalized style recommendations',
    techs: ['Dart', 'Git', 'Github', 'Flutter'],
    link: 'https://github.com/Garongan/li_fashion',
  },
  // END: FEATURED PROJECTS
  {
    title: 'Backend Sistem Pengelolaan Iuran',
    description:
      'Laravel-powered backend service that automates residential dues and community administration',
    techs: ['PHP', 'MySQL', 'Laravel', 'Postman'],
    link: 'https://github.com/Garongan/li_fashion',
  },
  {
    title: 'Frontend Sistem Pengelolaan Iuran',
    description:
      'Interactive management dashboard for housing communities with real-time Chart.js insights',
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
  // TODO: Add project
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
