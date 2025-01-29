import Link from 'next/link';

import { ExternalLink } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/static/projects';
import { Badge } from './ui/badge';

const midNumber = projects.length / 2;

export const Projects = () => {
  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Featured Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
        <div className='grid gap-4'>
          {projects.slice(0, midNumber).map((p, i) => (
            <Card key={i}>
              <CardContent className='pt-6 h-full'>
                <div className='flex flex-col h-full'>
                  <Link
                    href={p.link}
                    className='font-semibold text-primary hover:underline'
                  >
                    {p.title}
                  </Link>
                  <p className='text-sm text-muted-foreground mt-1 mb-4'>
                    {p.description}
                  </p>
                  <div className='mt-auto flex items-start justify-between gap-4'>
                    <div className='flex flex-wrap gap-2'>
                      {p.techs.map((value, index) => (
                        <Badge key={index} variant={'secondary'}>
                          {value}
                        </Badge>
                      ))}
                    </div>
                    <Link
                      href={p.link}
                      className='flex items-center gap-2 text-sm text-primary hover:underline text-blue-500'
                    >
                      View
                      <ExternalLink className='inline-block size-3' />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className='grid gap-4'>
          {projects.slice(midNumber, projects.length).map((p, i) => (
            <Card key={i}>
              <CardContent className='pt-6 h-full'>
                <div className='flex flex-col h-full'>
                  <Link
                    href={p.link}
                    className='font-semibold text-primary hover:underline'
                  >
                    {p.title}
                  </Link>
                  <p className='text-sm text-muted-foreground mt-1 mb-4'>
                    {p.description}
                  </p>
                  <div className='mt-auto flex items-start justify-between gap-4'>
                    <div className='flex flex-wrap gap-2'>
                      {p.techs.map((value, index) => (
                        <Badge key={index} variant={'secondary'}>
                          {value}
                        </Badge>
                      ))}
                    </div>
                    <Link
                      href={p.link}
                      className='flex items-center gap-2 text-sm text-primary hover:underline text-blue-500'
                    >
                      View
                      <ExternalLink className='inline-block size-3' />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
