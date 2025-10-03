export type SkillCategory = {
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: 'Mobile',
    skills: ['Swift', 'Swift UI', 'Dart', 'React Native', 'Expo', 'Flutter'],
  },
  {
    label: 'Web',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.Js',
      'Vite',
      'Tailwind CSS',
      'Bootstrap CSS',
      'Wordpress',
      'Elementor',
    ],
  },
  {
    label: 'Backend',
    skills: ['PHP', 'Go', 'Java', 'Node.Js', 'Laravel', 'Spring Boot', 'Gin', 'Express', 'Fiber'],
  },
  {
    label: 'Tools',
    skills: ['MySQL', 'PostgreSQL', 'Git', 'Github', 'Postman', 'Jira'],
  },
];

export const totalSkills = skillCategories.reduce(
  (count, category) => count + category.skills.length,
  0,
);
