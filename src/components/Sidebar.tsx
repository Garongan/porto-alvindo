import { Skills } from './Skills';

export const Sidebar = () => {
  return (
    <aside className='flex flex-col gap-6 lg:sticky lg:top-12 lg:h-max'>
      <Skills />
    </aside>
  );
};
