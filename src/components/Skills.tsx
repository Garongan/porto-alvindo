import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { skills } from '@/static/skills';
import { CustomBackground } from './ui/customBackground';

export const Skills = () => {
  return (
    <Card className='lg:max-w-sm border border-border/60 bg-background/60 shadow-lg backdrop-blur overflow-hidden'>
      <CustomBackground />
      <CardHeader className='space-y-3 pb-2'>
        <div className='flex items-center justify-between gap-4'>
          <CardTitle className='text-lg font-semibold tracking-tight text-foreground'>
            Skillset
          </CardTitle>
          <Badge className='rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary'>
            {skills.length}+ tools
          </Badge>
        </div>
        <p className='text-sm leading-relaxed text-muted-foreground'>
          Versatile across native and cross-platform stacks with a focus on clean architecture, rapid prototyping, and stable releases.
        </p>
      </CardHeader>
      <CardContent>
        <div className='flex flex-wrap gap-2'>
          {skills.map((s, i) => (
            <Badge
              key={i}
              variant='secondary'
              className='border border-border/50 bg-background/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-foreground/80 transition hover:border-primary/40 hover:text-primary'
            >
              {s}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
