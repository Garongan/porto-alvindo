'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { socials } from '@/static/socials';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { CustomBackground } from './ui/customBackground';
import ThemeSwitcher from './ui/ThemeSwitcher';

export const Profile = () => {

  return (
    <Card className='relative overflow-hidden border border-border/60 bg-background/60 shadow-lg backdrop-blur'>
      <CustomBackground />
      <div className='absolute top-5 end-5 z-10'>
        <ThemeSwitcher />
      </div>
      <CardContent className='relative flex flex-col gap-8 p-6 md:p-8'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-6 md:flex-row md:items-center md:gap-8'>
            <div className='relative mx-auto flex-shrink-0 md:mx-0'>
              <Image
                width={150}
                height={150}
                quality={100}
                src='/avatar.jpg'
                alt='Portrait of Alvindo Tri Jatmiko'
                className='relative size-24 rounded-full border border-border/70 bg-background object-cover shadow-xl md:size-28'
                priority
              />
            </div>
            <div className='flex flex-col gap-4 text-center md:text-left'>
              <div className='flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4'>
                <h1 className='text-2xl font-semibold tracking-tight text-foreground md:text-3xl'>
                  Alvindo Tri Jatmiko
                </h1>
                <Badge
                  variant='secondary'
                  className='mx-auto w-fit px-3 py-1 text-[0.7rem] uppercase tracking-[0.25em] sm:mx-0'
                >
                  Mobile Developer
                </Badge>
              </div>
              <p className='text-sm leading-relaxed text-muted-foreground md:max-w-xl'>
                Mobile developer focused on crafting high-quality, maintainable apps with clean architecture, consistent delivery, and delightful user experiences.
              </p>
              <div className='flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:justify-start'>
                <span>Cross-platform builds</span>
                <span>Team-driven mindset</span>
                <span>Remote collaboration</span>
              </div>
            </div>
          </div>
        </div>

        <div className='grid gap-3 sm:grid-cols-2'>
          <Button className='w-full gap-2 text-sm font-semibold' asChild>
            <Link
              download
              href='/resume-alvindo.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              <MdOutlineFileDownload /> Download resume
            </Link>
          </Button>
          <Button
            className='w-full gap-2 text-sm font-semibold'
            variant='outline'
            asChild
          >
            <Link
              href='https://wa.me/+628999015103'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaWhatsapp /> Whatsapp me
            </Link>
          </Button>
        </div>

        <div className='flex flex-col gap-3 border-t border-dashed border-border/70 pt-6'>
          <span className='text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground'>
            Stay connected
          </span>
          <div className='grid gap-2 sm:grid-cols-2'>
            {socials.map((s, i) => {
              const parts = s.link.split('/').filter(Boolean);
              const username = parts[parts.length - 1] ?? s.name;

              return (
                <Link
                  key={i}
                  href={s.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Open ${s.name} profile`}
                  className='group flex items-center justify-between rounded-lg border border-border/60 bg-background/80 px-3 py-2 transition hover:border-primary/40 hover:bg-primary/5'
                >
                  <div className='flex items-center gap-3'>
                    <s.icon className='size-4 text-muted-foreground transition group-hover:text-primary' />
                    <div className='flex flex-col text-left'>
                      <span className='text-sm font-semibold text-foreground'>
                        {s.name}
                      </span>
                      <span className='text-xs text-muted-foreground transition group-hover:text-primary'>
                        @{username}
                      </span>
                    </div>
                  </div>
                  <span className='text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground transition group-hover:text-primary'>
                    View
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
