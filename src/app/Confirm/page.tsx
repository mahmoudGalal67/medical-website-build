"use client";

import { useEffect } from "react";
import { Check, CalendarPlus, Printer } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const details = [
  { label: "Doctor", value: "Dr. Ahmed Al Harbi" },
  { label: "Department", value: "Cardiology" },
  { label: "Date", value: "21 May 2025, Wednesday" },
  { label: "Time", value: "10:00 AM" },
  { label: "Branch", value: "Riyadh - Al Malqa" },
];

export default function Page() {
  useEffect(() => {
    const runConfetti = async () => {
      const confetti = (await import("canvas-confetti")).default;

      const duration = 2000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 6,
          spread: 80,
          startVelocity: 40,
          origin: {
            x: Math.random(),
            y: Math.random() * 0.5,
          },
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();
    };

    runConfetti();
  }, []);

  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-background p-4 sm:p-8">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-background to-background" />

        <img
          src="/gfd.jpeg"
          alt="Background"
          className="h-full w-full object-cover opacity-10 blur-sm"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_60%)]" />
      </div>

      <Card className="relative w-full max-w-xl overflow-hidden border-border/60 px-6 py-10 shadow-xl sm:px-10">
        {/* Celebration Dots */}
        <div className="absolute left-1/2 top-10 -translate-x-1/2">
          {[...Array(40)].map((_, i) => (
            <span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full animate-pulse"
              style={{
                backgroundColor: [
                  "#22c55e",
                  "#60a5fa",
                  "#f59e0b",
                  "#ef4444",
                  "#a855f7",
                ][i % 5],
                transform: `translate(
                  ${Math.cos(i * 0.4) * (50 + (i % 12) * 20)}px,
                  ${Math.sin(i * 0.4) * (30 + (i % 12) * 15)}px
                )`,
              }}
            />
          ))}
        </div>

        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg">
            <Check className="h-8 w-8" strokeWidth={3} />
          </div>
        </div>

        <div className="mt-6 text-center">
          <h1 className="text-2xl font-bold">Appointment Confirmed!</h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Your appointment has been successfully booked 🎉
          </p>
        </div>

        <dl className="mt-8 rounded-xl border bg-muted/30 px-5 py-4 sm:px-6">
          {details.map((item, i) => (
            <div
              key={item.label}
              className={`flex justify-between py-2 text-sm ${
                i !== details.length - 1 ? "border-b" : ""
              }`}
            >
              <dt className="text-muted-foreground">{item.label}</dt>
              <dd className="font-medium">{item.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <CalendarPlus className="h-4 w-4" />
              Add to Calendar
            </Button>

            <Button variant="outline" className="gap-2">
              <Printer className="h-4 w-4" />
              Print
            </Button>
          </div>

          <Button className="sm:px-10">Done</Button>
        </div>
      </Card>
    </main>
  );
}
