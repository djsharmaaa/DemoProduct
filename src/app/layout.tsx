import './globals.css';
import Navbar from '../components/Navbar/Navbar';

export const metadata = {
  title: 'ProductSite',
  description: 'Browse top products here',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
