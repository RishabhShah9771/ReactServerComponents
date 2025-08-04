import './globals.css';

export const metadata = {
  title: 'React RSC, Server Actions',
  description: 'A thorough demo of advanced React features using NextJS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
