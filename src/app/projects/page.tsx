import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';

import { ProjectCard } from '@/components/Projects';
import { Button } from '@/components/ui/button';
import { projects } from '@/static/projects';

const ProjectsArchivePage = () => {
  return (
    <div className='relative min-h-screen overflow-hidden bg-background'>
      <div className='container relative mx-auto max-w-screen-xl px-4 py-10 sm:py-16 lg:px-8 flex flex-col gap-8'>
        <header className='flex flex-row justify-between items-center gap-2'>
          <div className='max-w-2xl space-y-3'>
            <span className='text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground'>
              Portfolio
            </span>
            <div className='space-y-2'>
              <h1 className='text-3xl font-semibold tracking-tight text-foreground sm:text-4xl'>
                Project archive
              </h1>
              <p className='text-sm text-muted-foreground sm:text-base'>
                A broader look at shipped products, experiments, and case studies beyond the featured selection on the homepage.
              </p>
            </div>
          </div>
          <Button
            asChild
            variant='ghost'
            size='sm'
            className='self-start gap-2 px-3 py-2 text-sm font-semibold text-primary transition hover:text-primary/80'
          >
            <Link href='/'>
              <ArrowLeft className='size-4' />
              Back to home
            </Link>
          </Button>
        </header>

        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              caseNumber={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsArchivePage;
