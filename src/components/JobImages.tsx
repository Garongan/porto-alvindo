'use client';

import Image from 'next/image';
import { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { JobImagesProps } from '@/static/types';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const JobImages = ({ role, projects, duration }: JobImagesProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className='mt-4 flex w-full snap-x snap-mandatory gap-3 overflow-x-auto pb-3'>
      {projects.map((project, idx) => (
        <Dialog key={idx}>
          <DialogTrigger asChild>
            <button
              type='button'
              onClick={() => setSelectedImage(project.imageUrl)}
              className='group relative inline-flex min-w-[128px] flex-col items-start gap-2 rounded-xl border border-border/60 bg-background/80 p-2 text-left shadow-sm transition hover:border-primary/50 hover:shadow-lg'
            >
              <div className='relative w-full overflow-hidden rounded-lg'>
                <Image
                  src={project.imageUrl}
                  width={160}
                  height={110}
                  alt={`Project Image for ${project.projectName}`}
                  className='h-28 w-full rounded-lg object-cover transition duration-300 group-hover:scale-[1.02]'
                />
                <div className='pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100' />
              </div>
              <span className='text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground'>
                {project.projectName}
              </span>
              <span className='text-[0.65rem] font-medium text-primary'>
                Tap to view
              </span>
            </button>
          </DialogTrigger>
          <DialogContent className='max-w-3xl'>
            <DialogHeader>
              <DialogTitle>{project.projectName}</DialogTitle>
              <DialogDescription className='flex flex-wrap items-center gap-2 text-sm text-muted-foreground'>
                <span>
                  {role} · {duration}
                </span>
                <Link
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='ml-auto inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80'
                >
                  Visit project
                  <ExternalLink className='size-4' />
                </Link>
              </DialogDescription>
            </DialogHeader>
            <div className='mt-4 space-y-3'>
              <Image
                width={640}
                height={360}
                sizes='100vw'
                src={selectedImage || project.imageUrl}
                alt={`Project Image for ${role}`}
                className='w-full rounded-xl border border-border/60 object-cover shadow-lg'
              />
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};
