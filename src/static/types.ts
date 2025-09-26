export type projects = {
  projectName: string;
  imageUrl: string;
  link: string;
};

export type Job = {
  role: string;
  company: string;
  logo: string;
  duration: string;
  description: string;
  skills: string[];
  projects: projects[];
};

export type project = {
  title: string;
  description: string;
  techs: string[];
  link: string;
};

export type ProjectGroup = {
  label: string;
  projects: project[];
};

export type JobImagesProps = {
  role: string;
  projects: projects[];
  duration: string;
};
