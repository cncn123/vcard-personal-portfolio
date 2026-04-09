import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "蔡倪 Bobby — 个人主页",
    template: "%s · 蔡倪 Bobby",
  },
  description: "蔡倪（Bobby CAI Ni）个人作品集：大数据、AI、全栈与数据治理。",
  openGraph: {
    title: "蔡倪 Bobby — 个人主页",
    description: "蔡倪（Bobby CAI Ni）个人作品集：大数据、AI、全栈与数据治理。",
    type: "website",
    locale: "zh_CN",
    siteName: "Bobby CAI Ni",
    images: [{ url: "/my-avatar.png", width: 800, height: 800, alt: "蔡倪 Bobby" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "蔡倪 Bobby — 个人主页",
    description: "蔡倪（Bobby CAI Ni）个人作品集：大数据、AI、全栈与数据治理。",
    images: ["/my-avatar.png"],
  },
  alternates: {
    languages: {
      "zh-Hans": "/",
      "zh-Hant": "/",
    },
  },
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
