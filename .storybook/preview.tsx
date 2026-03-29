import type { Preview } from '@storybook/nextjs-vite';
import { Lato, Noto_Sans_JP } from 'next/font/google';
import '../src/app/globals.css';

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['400', '700']
});

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto',
  subsets: ['latin'],
  weight: ['400', '500', '700']
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => (
      <div className={`${lato.variable} ${notoSansJP.variable} antialiased`}>
        <Story />
      </div>
    )
  ],
  tags: ['autodocs']
};

export default preview;
