'use client'

import { useMemo, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { skillCategories, totalSkills } from '@/static/skills';
import { CustomBackground } from './ui/customBackground';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState(skillCategories[0]?.label ?? '');

  const activeCategory = useMemo(() => {
    if (!activeTab) return skillCategories[0];

    return skillCategories.find((category) => category.label === activeTab) ?? skillCategories[0];
  }, [activeTab]);

  if (!activeCategory) {
    return null;
  }

  return (
    <Card className='lg:max-w-sm border border-border/60 bg-background/60 shadow-lg backdrop-blur overflow-hidden'>
      <CustomBackground />
      <CardHeader className='space-y-3 pb-2'>
        <div className='flex items-center justify-between gap-4'>
          <CardTitle className='text-lg font-semibold tracking-tight text-foreground'>
            Skillset
          </CardTitle>
          <Badge className='rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary'>
            {totalSkills}+ tools
          </Badge>
        </div>
        <p className='text-sm leading-relaxed text-muted-foreground'>
          Versatile across native and cross-platform stacks with a focus on clean architecture, rapid prototyping, and stable releases.
        </p>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='flex flex-wrap gap-1'>
          {skillCategories.map((category) => {
            const isActive = category.label === activeCategory.label;

            return (
              <button
                key={category.label}
                type='button'
                onClick={() => setActiveTab(category.label)}
                className={cn(
                  'rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] transition',
                  isActive
                    ? 'border-primary bg-primary/90 text-primary-foreground shadow'
                    : 'border-border/60 bg-background/80 text-foreground/60 hover:border-primary/40 hover:text-primary',
                )}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className='border-t border-dashed border-border/70 pt-4'>
          <div className='flex flex-wrap gap-1'>
            {activeCategory.skills.map((skill) => (
              <Badge
                key={skill}
                variant='secondary'
                className='border border-border/50 bg-background/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-foreground/80 transition hover:border-primary/40 hover:text-primary'
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
