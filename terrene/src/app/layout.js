import "./globals.css";
import ClientLayout from "@/client-layout";
import TopBar from "@/components/TopBar/TopBar";

export const metadata = {
  title: 'LEET Solutions',
  description: 'Industrial company from Morocco\'s 1337 coding school ecosystem',
  icons: {
    icon: '/logos/LEET.svg',
    shortcut: '/logos/LEET.svg',
    apple: '/logos/LEET.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          <TopBar />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
