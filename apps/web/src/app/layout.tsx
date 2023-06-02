import { defaultMetadata } from '~ui';
import '../styles/global.css';
import { Toaster } from 'react-hot-toast';
import GlobalModals from '../shared/GlobalModal';

import { Metadata } from 'next';

export const metadata: Metadata = defaultMetadata
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body suppressHydrationWarning={true}>
      <main>
        {/* <Providers> */}
          <Toaster
            position="bottom-right"
            // toastOptions={getToastOptions(resolvedTheme)}
          />
          <GlobalModals />
          <div className="">
            {children}
          </div>
        {/* </Providers> */}
      </main>
    </body>
  </html>
  );
}
