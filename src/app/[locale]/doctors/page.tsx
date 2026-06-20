import { DoctorsDirectory } from "@/components/doctors-directory";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-muted/30 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <DoctorsDirectory locale={locale} />
      </div>
    </main>
  );
}