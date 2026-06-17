"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
];

// May 2025 starts on a Thursday (index 4), has 31 days
const MONTH_LABEL = "May 2025";
const FIRST_WEEKDAY = 4;
const DAYS_IN_MONTH = 31;

export function BookingCard() {
  const [selectedDate, setSelectedDate] = useState<number>(21);
  const [selectedTime, setSelectedTime] = useState<string>("09:00 AM");

  const leadingBlanks = Array.from({ length: FIRST_WEEKDAY });
  const days = Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1);

  return (
    <Card className="w-full gap-0 overflow-hidden p-5 shadow-sm">
      <h2 className="text-base font-semibold text-card-foreground">
        Book Appointment
      </h2>

      {/* Calendar */}
      <div className="mt-5">
        <p className="mb-3 text-sm font-medium text-card-foreground">
          Select Date
        </p>
        <div className="mb-3 flex items-center justify-between">
          <button
            type="button"
            aria-label="Previous month"
            className="flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted"
          >
            <ChevronLeft className="size-4" />
          </button>
          <span className="text-sm font-medium text-card-foreground">
            {MONTH_LABEL}
          </span>
          <button
            type="button"
            aria-label="Next month"
            className="flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-y-2 text-center">
          {WEEKDAYS.map((day) => (
            <span
              key={day}
              className="text-xs font-medium text-muted-foreground"
            >
              {day}
            </span>
          ))}
          {leadingBlanks.map((_, i) => (
            <span key={`blank-${i}`} />
          ))}
          {days.map((day) => {
            const isSelected = day === selectedDate;
            return (
              <div key={day} className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setSelectedDate(day)}
                  className={cn(
                    "flex size-8 items-center justify-center rounded-md text-sm transition-colors",
                    isSelected
                      ? "bg-primary font-medium text-primary-foreground"
                      : "text-card-foreground hover:bg-muted",
                  )}
                >
                  {day}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Time slots */}
      <div className="mt-6">
        <p className="mb-3 text-sm font-medium text-card-foreground">
          Select Time
        </p>
        <div className="grid grid-cols-3 gap-2">
          {TIME_SLOTS.map((time) => {
            const isSelected = time === selectedTime;
            return (
              <button
                key={time}
                type="button"
                onClick={() => setSelectedTime(time)}
                className={cn(
                  "rounded-md border px-2 py-2 text-xs font-medium transition-colors",
                  isSelected
                    ? "border-primary bg-accent text-primary"
                    : "border-border bg-card text-card-foreground hover:bg-muted",
                )}
              >
                {time}
              </button>
            );
          })}
        </div>
      </div>

      <Link href="/Confirm" className="mt-6 w-full">
        <Button className="mt-6 w-full">Continue</Button>
      </Link>
    </Card>
  );
}
