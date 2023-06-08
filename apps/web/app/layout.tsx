
import { defaultMetadata } from '~ui';
import './styles/global.css';
import { Toaster } from 'react-hot-toast';
import GlobalModals from './shared/GlobalModal';

import Providers from './shared/Provider';
import Navbar from './global/Navbar';
import { Metadata } from 'next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <main>
          <Providers>
            <Toaster
              position="bottom-right"
              // toastOptions={getToastOptions(resolvedTheme)}
            />
            <GlobalModals />
            <div className="flex min-h-screen flex-col pb-14 md:pb-0 w-full">
              <Navbar />
              {children}
            </div>
          </Providers>
        </main>
      </body>
    </html>
  );
}
export const metadata:Metadata = defaultMetadata
