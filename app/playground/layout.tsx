import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Playground - Try Our AI Features",
  description: "Experience our AI capabilities with interactive demos",
};

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col md:flex-row">
        <div className="w-full md:flex-1">{children}</div>
      </main>
    </div>
  );
}
