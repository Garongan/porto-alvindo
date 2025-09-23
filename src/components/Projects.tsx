import Link from 'next/link';

import { ArrowUpRight, ExternalLink } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/static/projects';
import { Badge } from './ui/badge';

export const Projects = () => {
  return (
    <section className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <span className='text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground'>
            Recent work
          </span>
          <h2 className='text-2xl font-semibold tracking-tight text-foreground sm:text-3xl'>
            Featured projects
          </h2>
        </div>
        <Link
          href='https://github.com/Garongan'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80'
        >
          View full portfolio
          <ArrowUpRight className='size-4' />
        </Link>
      </div>

      <div className='grid gap-5 md:grid-cols-2 lg:gap-6'>
        {projects.map((project, index) => (
          <Card
            key={project.title}
            className='group relative overflow-hidden border border-border/60 bg-background/80 shadow-lg transition hover:border-primary/50 hover:shadow-xl'
          >
            <div
              aria-hidden
              className='pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
            />
            <CardContent className='relative flex h-full flex-col gap-6 p-6'>
              <div className='flex items-center justify-between gap-3'>
                <Badge className='rounded-full bg-primary/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-primary'>
                  Case {String(index + 1).padStart(2, '0')}
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
        ))}
      </div>
    </section>
  );
};
