import "./globals.css";

export const metadata = {
  title: "蔡倪 Bobby — 个人主页",
  description: "Bobby CAI Ni 个人作品集（Next.js 16 + Lucide）",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hans" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.7.0/style.css"
        />
        <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
