"use client";

import Image from "next/image";
import { useState } from "react";
import { Star, Languages, GraduationCap, CalendarCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const TABS = [
  "Overview",
  "Experience",
  "Qualifications",
  "Reviews (120)",
  "Availability",
];

export function DoctorProfileCard() {
  const [active, setActive] = useState("Overview");

  return (
    <Card className="overflow-hidden lg:p-6 p-2 shadow-sm">
      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="relative h-52 w-full shrink-0 overflow-hidden rounded-xl sm:h-48 sm:w-40">
          <Image
            src="/images/dr-ahmed.png"
            alt="Dr. Ahmed Al Harbi"
            fill
            className="object-cover"
            sizes="160px"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold text-card-foreground text-balance">
            Dr. Ahmed Al Harbi
          </h1>
          <p className="mt-1 text-sm font-medium text-primary">
            Consultant Cardiologist
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            15+ Years Experience
          </p>

          <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={
                    i < 4
                      ? "size-4 fill-amber-400 text-amber-400"
                      : "size-4 fill-muted text-muted-foreground/40"
                  }
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-card-foreground">
              4.8
            </span>
            <span className="text-sm text-muted-foreground">(120 Reviews)</span>
          </div>

          <div className="mt-4 space-y-2 text-sm text-card-foreground">
            <div className="flex items-center gap-2">
              <Languages className="size-4 text-primary" />
              <span>Arabic, English</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="size-4 text-primary" />
              <span>King Saud University</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarCheck className="size-4 text-primary" />
              <span>Available Today</span>
            </div>
          </div>
        </div>
      </div>

      <Tabs value={active} onValueChange={setActive} className="mt-6">
        <TabsList className="h-auto w-full justify-start gap-6 rounded-none border-b border-border bg-transparent p-0">
          {TABS.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="rounded-none border-0 border-b-2 border-transparent bg-transparent px-0 pb-3 text-sm font-medium text-muted-foreground shadow-none data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent
          value="Overview"
          className="mt-4 text-sm leading-relaxed text-muted-foreground"
        >
          Dr. Ahmed Al Harbi is a Consultant Cardiologist with more than 15
          years of experience in diagnosing and treating heart diseases. He
          specializes in interventional cardiology, preventive cardiology, and
          cardiac imaging.
        </TabsContent>
        {TABS.filter((t) => t !== "Overview").map((tab) => (
          <TabsContent
            key={tab}
            value={tab}
            className="mt-4 text-sm leading-relaxed text-muted-foreground"
          >
            Information about {tab.replace(/\s*\(.*\)/, "").toLowerCase()} will
            be displayed here.
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  );
}
