import { DoctorsDirectory } from "@/components/doctors-directory";

export default function Page() {
  return (
    <main className="min-h-screen bg-muted/30 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <DoctorsDirectory />
      </div>
    </main>
  );
}
