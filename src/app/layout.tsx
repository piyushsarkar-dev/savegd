import Header from "@/components/Header/Header";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import { geistMono, geistSans } from "@/lib/fonts";
import { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "SaveGD",
  description: "SaveGD syncs your files to Google Drive from VS Code.",
  icons: {
    icon: "/favi-icon.png",
    shortcut: "/favi-icon.png",
    apple: "/favi-icon.png",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          enableSystem={false}>
          <Header />

          <main className="mx-auto max-w-7xl px-6 py-3">{children}</main>

          <footer className="border-t">
            <div className="text-muted-foreground mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-6 py-5 text-sm">
              <Link
                href="/privacy"
                className="hover:text-foreground">
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-foreground">
                Terms of Service
              </Link>
              <a
                href="https://github.com/swarnava-ghosh/savegd"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground">
                GitHub Repository
              </a>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
