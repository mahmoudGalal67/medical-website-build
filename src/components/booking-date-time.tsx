"use client";

import { useState } from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Building2,
  Stethoscope,
  User,
  CalendarDays,
  FileText,
  CircleCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = [
  { label: "Branch", icon: Building2 },
  { label: "Department", icon: Stethoscope },
  { label: "Doctor", icon: User },
  { label: "Date & Time", icon: CalendarDays },
  { label: "Details", icon: FileText },
  { label: "Confirmation", icon: CircleCheck },
];

const timeSlots = {
  Morning: [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
  ],
  Afternoon: [
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
  ],
  Evening: ["07:00 PM", "07:30 PM", "08:00 PM"],
};

// May 2025 starts on a Thursday
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const firstDayOffset = 4;
const daysInMonth = 31;

function Stepper({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, i) => {
        const Icon = step.icon;
        const done = i < current;
        const active = i === current;
        return (
          <div
            key={step.label}
            className="flex flex-1 items-center last:flex-none"
          >
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full border-2 transition-colors",
                  active && "border-brand bg-primary text-white",
                  done && "border-brand bg-primary text-white",
                  !active &&
                    !done &&
                    "border-border bg-card text-muted-foreground",
                )}
              >
                {done ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Icon className="h-4 w-4" />
                )}
              </div>
              <span
                className={cn(
                  "hidden text-xs sm:block",
                  active || done
                    ? "font-medium text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={cn(
                  "mx-1 h-0.5 flex-1 sm:mx-2",
                  i < current ? "bg-primary" : "bg-border",
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function Calendar({
  selected,
  onSelect,
}: {
  selected: number;
  onSelect: (day: number) => void;
}) {
  const cells: (number | null)[] = [
    ...Array(firstDayOffset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h3 className="text-sm font-semibold text-foreground">May 2025</h3>
        <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-y-2 text-center">
        {weekDays.map((d) => (
          <span key={d} className="text-xs font-medium text-muted-foreground">
            {d}
          </span>
        ))}
        {cells.map((day, i) => (
          <div key={i} className="flex items-center justify-center">
            {day ? (
              <button
                onClick={() => onSelect(day)}
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors",
                  selected === day
                    ? "bg-primary font-medium text-white"
                    : "text-foreground hover:bg-muted",
                )}
              >
                {day}
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function BookingDateTime() {
  const [selectedDay, setSelectedDay] = useState(21);
  const [selectedSlot, setSelectedSlot] = useState("10:00 AM");

  return (
    <div className="mx-auto w-full max-w-3xl rounded-3xl border border-border bg-background p-5 shadow-sm sm:p-7">
      <Stepper current={3} />

      <div className="mt-8 rounded-2xl border border-border p-5 sm:p-6">
        <h2 className="text-lg font-bold text-foreground">
          Select Date &amp; Time
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Calendar selected={selectedDay} onSelect={setSelectedDay} />

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Available Time Slots
            </h3>
            <div className="flex flex-col gap-5">
              {Object.entries(timeSlots).map(([period, slots]) => (
                <div key={period}>
                  <p className="mb-2 text-xs font-medium text-primary">
                    {period}
                  </p>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {slots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={cn(
                          "rounded-lg border px-2 py-2 text-xs font-medium transition-colors",
                          selectedSlot === slot
                            ? "border-brand bg-primary text-primary-primary text-white"
                            : "border-border text-foreground hover:border-primary/40 hover:bg-brand-muted",
                        )}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-3">
        <Button variant="outline" className="min-w-24">
          Back
        </Button>
        <Button className="min-w-24 bg-primary text-white hover:bg-brand/90">
          Next
        </Button>
      </div>
    </div>
  );
}
