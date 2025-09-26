import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';

import { ProjectCard } from '@/components/Projects';
import { Button } from '@/components/ui/button';
import { projectsBySkillLabel } from '@/static/projects';

const ProjectsArchivePage = () => {
  let caseCounter = 0;

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

        <div className='flex flex-col gap-10'>
          {projectsBySkillLabel.map(({ label, projects }) => {
            if (projects.length === 0) {
              return null;
            }

            return (
              <section key={label} className='space-y-4'>
                <div className='flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between'>
                  <div>
                    <span className='text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground'>
                      {label}
                    </span>
                    <h2 className='text-2xl font-semibold tracking-tight text-foreground sm:text-3xl'>
                      {label} projects
                    </h2>
                  </div>
                  <span className='text-sm font-medium text-muted-foreground'>
                    {projects.length} {projects.length === 1 ? 'case study' : 'case studies'}
                  </span>
                </div>

                <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
                  {projects.map((project) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      caseNumber={++caseCounter}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsArchivePage;
