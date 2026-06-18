import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Cognix AI - Premium Intelligent Assistant",
  description: "Experience the next level of cognitive reasoning and creative problem-solving with Cognix AI, powered by Google Gemini.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Cognix AI - Premium Intelligent Assistant",
    description: "Experience the next level of cognitive reasoning and creative problem-solving with Cognix AI.",
    images: [],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
