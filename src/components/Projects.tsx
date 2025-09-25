import Link from 'next/link';

import { ArrowRight, ExternalLink } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/static/projects';
import type { project as ProjectType } from '@/static/types';
import { Badge } from './ui/badge';

const FEATURED_COUNT = 4;

const formatCaseNumber = (caseNumber: number) =>
  `Case ${String(caseNumber).padStart(2, '0')}`;

export const ProjectCard = ({
  project,
  caseNumber,
}: {
  project: ProjectType;
  caseNumber: number;
}) => (
  <Card className='group relative overflow-hidden border border-border/60 bg-background/80 shadow-lg transition hover:border-primary/50 hover:shadow-xl'>
    <div
      aria-hidden
      className='pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
    />
    <CardContent className='relative flex h-full flex-col gap-6 p-6'>
      <div className='flex items-center justify-between gap-3'>
        <Badge className='rounded-full bg-primary/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-primary'>
          {formatCaseNumber(caseNumber)}
        </Badge>
        <Link
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-full border border-border/50 bg-background/60 p-2 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary'
        >
          <ExternalLink className='size-4' />
        </Link>
      </div>

      <div className='flex flex-col gap-2'>
        <Link
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
          className='text-lg font-semibold text-foreground transition hover:text-primary sm:text-xl'
        >
          {project.title}
        </Link>
        <p className='text-sm leading-relaxed text-muted-foreground'>
          {project.description}
        </p>
      </div>

      <div className='mt-auto flex flex-wrap gap-2'>
        {project.techs.map((tech) => (
          <Badge
            key={tech}
            variant='secondary'
            className='border border-border/50 bg-background/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-foreground/80'
          >
            {tech}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

export const Projects = () => {
  const featuredProjects = projects.slice(0, FEATURED_COUNT);
  const archiveProjects = projects.slice(FEATURED_COUNT);
  const hasArchiveProjects = archiveProjects.length > 0;

  return (
    <section className='flex flex-col gap-6'>
      <div className='flex flex-row justify-between items-center gap-2'>
        <div>
          <span className='text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground'>
            Recent work
          </span>
          <h2 className='text-2xl font-semibold tracking-tight text-foreground sm:text-3xl'>
            Featured projects
          </h2>
        </div>
        {hasArchiveProjects ? (
          <Button
            asChild
            variant='ghost'
            size='sm'
            className='h-auto gap-2 px-2 py-2 text-sm font-semibold text-primary transition hover:text-primary/80'
          >
            <Link href='/projects'>
              View more projects
              <ArrowRight className='size-4' />
            </Link>
          </Button>
        ) : (
          <span className='text-sm text-muted-foreground'>More projects coming soon.</span>
        )}
      </div>

      <div className='grid gap-5 md:grid-cols-2 lg:gap-6'>
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            caseNumber={index + 1}
          />
        ))}
      </div>
    </section>
  );
};
