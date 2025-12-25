'use client';

import { MantineProvider } from '@mantine/core';
import { ThemeA } from '@/themes/theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={ThemeA}>
      {children}
    </MantineProvider>
  );
}
