import { spaceGrotesk } from "@/app/ui/fonts";

export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${spaceGrotesk.className} min-h-screen`}>
      {children}
    </div>
  );
}
