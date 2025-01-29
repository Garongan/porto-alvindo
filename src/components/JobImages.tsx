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
    <div className='mt-4 flex space-x-2 overflow-x-auto pb-2 w-full'>
      {projects.map((project, idx) => (
        <Dialog key={idx}>
          <DialogTrigger asChild>
            <Image
              src={project.imageUrl}
              width={100}
              height={100}
              alt={`Project Image for ${project.projectName}`}
              onClick={() => setSelectedImage(project.imageUrl)}
              className='cursor-pointer rounded-md border h-full w-auto shadow-md object-cover'
            />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{project.projectName}</DialogTitle>
              <DialogDescription className='flex items-center gap-2'>
                <span>
                  {role} - {duration}
                </span>
                <Link
                  href={project.link}
                  target='_blank'
                  className='flex items-center justify-center text-blue-600 hover:underline'
                >
                  Visit
                  <ExternalLink className='size-3 ml-2' />
                </Link>
              </DialogDescription>
            </DialogHeader>
            <div className='mt-4 mx-auto space-y-2'>
              <Image
                width={400}
                height={400}
                sizes='1'
                src={selectedImage || ''}
                alt={`Project Image for ${role}`}
                className='rounded-md border shadow-md object-cover w-full h-auto'
              />
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};
