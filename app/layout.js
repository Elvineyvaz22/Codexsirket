import './globals.css';

export const metadata = {
  title: 'TURAN.İ.O MMC | Tikinti və Təmir Xidmətləri',
  description: 'TURAN.İ.O MMC yaşayış və qeyri-yaşayış binalarının tikintisi, təmir və kommunal kommunikasiya işləri üzrə xidmətlər göstərir.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body>{children}</body>
    </html>
  );
}
