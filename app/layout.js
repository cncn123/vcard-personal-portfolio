import "./globals.css";
import "@fontsource/lxgw-wenkai/300.css";
import "@fontsource/lxgw-wenkai/500.css";
import "@fontsource/lxgw-wenkai/700.css";
import "@fontsource/lxgw-wenkai-tc/300.css";
import "@fontsource/lxgw-wenkai-tc/400.css";
import "@fontsource/lxgw-wenkai-tc/700.css";

export const metadata = {
  title: "蔡倪 Bobby — 个人主页",
  description: "Bobby CAI Ni 个人作品集（Next.js 16 + Lucide）",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hans" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
