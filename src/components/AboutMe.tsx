'use client';
import { CheckCircle2 } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CustomBackground } from './ui/customBackground';

export const AboutMe = () => {
  return (
    <Card className='border border-border/60 bg-background/80 shadow-lg backdrop-blur overflow-hidden'>
      <CustomBackground />
      <CardHeader className='flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between'>
        <div className='flex max-w-3xl flex-col gap-3'>
          <span className='text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground'>
            About
          </span>
          <CardTitle className='text-2xl font-semibold tracking-tight text-foreground sm:text-3xl'>
            Product-minded mobile engineer who ships polished experiences
          </CardTitle>
          <p className='text-sm leading-relaxed text-muted-foreground sm:text-base'>
            I architect and build native and cross-platform apps with clean architecture principles, clear documentation, and a focus on rapid iteration. My workflow balances reliability with thoughtful UI craft so teams can deliver value with confidence.
          </p>
        </div>
      </CardHeader>
      <CardContent className='space-y-6'>
        <ul className='grid gap-3 sm:grid-cols-2'>
          {[
            'Lead end-to-end delivery from discovery to App Store launch.',
            'Champion clean architecture and maintainable codebases.',
            'Collaborate closely with designers and product partners.',
            'Continuously learn and adopt modern mobile tooling.',
          ].map((item, index) => (
            <li key={index} className='flex items-start gap-3 text-sm text-muted-foreground'>
              <CheckCircle2 className='mt-0.5 size-4 text-primary' />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className='flex flex-wrap items-center gap-3 rounded-xl border border-dashed border-primary/40 bg-primary/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary'>
          <span>Currently open for remote-friendly roles</span>
          <span className='hidden h-3 w-px bg-primary/40 sm:inline-block' aria-hidden />
          <span>Timezone GMT+7</span>
        </div>
      </CardContent>
    </Card>
  );
};
