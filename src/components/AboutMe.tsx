'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';
import useMediaQuery from '@/hook/useMediaQuery';

export const AboutMe = () => {
  const isDesktopOrLaptop = useMediaQuery('(min-width: 1224px)');
  return (
    <Card className='mb-6'>
      <CardHeader className='flex flex-row justify-between items-baseline'>
        <CardTitle>About Me</CardTitle>
        {isDesktopOrLaptop && <ThemeSwitcher />}
      </CardHeader>
      <CardContent>
        <p className='text-muted-foreground'>
          {/* Write 1-2 sentences about yourself */}
          Proficient Mobile Developer with approximately one year of experience in both native and cross-platform development. Skilled in Flutter, React Native, and SwiftUI. Contributed to the successful launch of an iOS application on TestFlight, employing a robust architectural design approach known as Clean Architecture. 
        </p>
      </CardContent>
    </Card>
  );
};
