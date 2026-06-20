import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { DoctorProfileCard } from "@/components/doctor-profile-card";
import { BookingCard } from "@/components/booking-card";
import { Specializations } from "@/components/specializations";

export default function Page() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-full">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link
                href="#"
                className="transition-colors hover:text-foreground"
              >
                Home
              </Link>
            </li>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <li>
              <Link
                href="#"
                className="transition-colors hover:text-foreground"
              >
                Doctors
              </Link>
            </li>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <li className="font-medium text-foreground" aria-current="page">
              Dr. Ahmed Al Harbi
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <DoctorProfileCard />
            <Specializations />
          </div>
          <div className="lg:col-span-1">
            <BookingCard />
          </div>
        </div>
      </div>
    </main>
  );
}
