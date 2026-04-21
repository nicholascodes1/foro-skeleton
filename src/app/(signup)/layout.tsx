import "@/app/globals.css";
import { spaceGrotesk } from "@/app/ui/fonts";

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
