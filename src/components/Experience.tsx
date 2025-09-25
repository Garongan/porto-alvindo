'use client'

import Image from 'next/image';

import { BriefcaseBusiness, CalendarDays } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import { JobImages } from '@/components/JobImages';
import useMediaQuery from '@/hook/useMediaQuery';
import { jobs } from '@/static/jobs';
import { Badge } from './ui/badge';
import { CustomBackground } from './ui/customBackground';

export const Experience = () => {
  const timeline = [...jobs].reverse();
  const isDesktopOrLaptop = useMediaQuery('(min-width: 1224px)');

  return (
    <section className='flex flex-col gap-6'>
      <CustomBackground />
      <div>
        <span className='text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground'>
          Career journey
        </span>
        <h2 className='text-2xl font-semibold tracking-tight text-foreground sm:text-3xl'>
          Experience
        </h2>
      </div>
      <Card className='border border-border/60 bg-background/80 shadow-lg backdrop-blur'>
        <CardContent className='relative flex flex-col gap-10 pt-10'>
          <div
            aria-hidden
            className='absolute left-9 top-11 bottom-10 hidden w-px bg-border/60 md:block'
          />
          {timeline.map((job, index) => {
            const highlightedSkills = job.skills.slice(0, isDesktopOrLaptop ? 4 : 3);
            const remainingSkillCount = job.skills.length - highlightedSkills.length;

            return (
              <article
                key={job.role + index}
                className='relative flex flex-col gap-4 pb-10 last:border-none last:pb-0 md:pl-12'
              >
                <div className='absolute -left-1 top-1 hidden size-8 items-center justify-center rounded-full border border-primary/50 bg-background/80 text-primary md:flex'>
                  <BriefcaseBusiness className='size-4' />
                </div>

                <div className='flex flex-col gap-3 sm:flex-row sm:justify-between'>
                  <div className='flex items-start gap-3'>
                    <Image
                      src={job.logo}
                      alt={job.company}
                      width={48}
                      height={48}
                      className='mt-1 rounded-lg border border-border/60 bg-background object-cover shadow-md'
                    />
                    <div className='flex flex-col gap-1'>
                      <h3 className='text-lg font-semibold text-foreground'>
                        {job.role}
                      </h3>
                      <p className='text-sm font-medium text-muted-foreground'>
                        {job.company}
                      </p>
                      <p className='flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground'>
                        <CalendarDays className='size-3 text-primary' />
                        {job.duration}
                      </p>
                    </div>
                  </div>
                  <div className='h-5 flex flex-wrap gap-2 sm:justify-end'>
                    {highlightedSkills.map((skill) => (
                      <Badge
                        key={skill}
                        className='border border-primary/30 bg-primary/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary'
                      >
                        {skill}
                      </Badge>
                    ))}
                    {remainingSkillCount > 0 && (
                      <Badge className='border border-border/60 bg-background/60 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground'>
                        +{remainingSkillCount} more
                      </Badge>
                    )}
                  </div>
                </div>

                <p className='text-sm leading-relaxed text-muted-foreground'>
                  {job.description}
                </p>

                {job.projects.length > 0 && (
                  <JobImages
                    role={job.role}
                    projects={job.projects}
                    duration={job.duration}
                  />
                )}
              </article>
            );
          })}
        </CardContent>
      </Card>
    </section>
  );
};
