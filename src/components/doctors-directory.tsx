"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  Heart,
  Star,
  ChevronRight,
  ChevronLeft,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type FilterGroup = {
  title: string;
  options: { label: string; count: number }[];
};

const filterGroups: FilterGroup[] = [
  {
    title: "Specialty",
    options: [
      { label: "Cardiology", count: 12 },
      { label: "Dermatology", count: 10 },
      { label: "Pediatrics", count: 8 },
      { label: "Orthopedics", count: 11 },
      { label: "Dentistry", count: 7 },
      { label: "Neurology", count: 6 },
    ],
  },
  {
    title: "Gender",
    options: [
      { label: "Male", count: 25 },
      { label: "Female", count: 19 },
    ],
  },
  {
    title: "Language",
    options: [
      { label: "Arabic", count: 30 },
      { label: "English", count: 28 },
    ],
  },
  {
    title: "Branch",
    options: [
      { label: "Riyadh", count: 20 },
      { label: "Jeddah", count: 15 },
      { label: "Dammam", count: 9 },
    ],
  },
  {
    title: "Insurance",
    options: [
      { label: "Bupa", count: 20 },
      { label: "Tawuniya", count: 18 },
      { label: "MedGulf", count: 15 },
    ],
  },
];

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  image: string;
};

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Ahmed Al Harbi",
    specialty: "Cardiologist",
    rating: 4.9,
    reviews: 120,
    image: "/doctors/doctor-1.png",
  },
  {
    id: 2,
    name: "Dr. Sara Al Mutairi",
    specialty: "Dermatologist",
    rating: 4.8,
    reviews: 98,
    image: "/doctors/doctor-2.png",
  },
  {
    id: 3,
    name: "Dr. Mohammed Ali",
    specialty: "Orthopedic Surgeon",
    rating: 4.9,
    reviews: 110,
    image: "/doctors/doctor-3.png",
  },
  {
    id: 4,
    name: "Dr. Huda Al Enazi",
    specialty: "Pediatrician",
    rating: 4.8,
    reviews: 76,
    image: "/doctors/doctor-4.png",
  },
  {
    id: 5,
    name: "Dr. Faisal Khan",
    specialty: "Neurologist",
    rating: 4.7,
    reviews: 64,
    image: "/doctors/doctor-5.png",
  },
  {
    id: 6,
    name: "Dr. Reem Al Otaibi",
    specialty: "Dentist",
    rating: 4.9,
    reviews: 85,
    image: "/doctors/doctor-6.png",
  },
];

function FilterSection({ group }: { group: FilterGroup }) {
  return (
    <div className="border-b border-border pb-5">
      <h3 className="mb-3 text-sm font-semibold text-primary  ">
        {group.title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {group.options.map((opt) => (
          <li key={opt.label} className="flex items-center gap-2.5">
            <Checkbox id={`${group.title}-${opt.label}`} />
            <label
              htmlFor={`${group.title}-${opt.label}`}
              className="flex-1 cursor-pointer text-sm text-muted-foreground"
            >
              {opt.label}{" "}
              <span className="text-muted-foreground/60">({opt.count})</span>
            </label>
          </li>
        ))}
      </ul>
      <button className="mt-3 text-xs font-medium text-brand">More</button>
    </div>
  );
}

function DoctorCard({ doctor }: { doctor: Doctor }) {
  const [fav, setFav] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md">
      <div className="relative aspect-square w-full bg-muted">
        <Image
          src={doctor.image || "/placeholder.svg"}
          alt={`Portrait of ${doctor.name}`}
          fill
          sizes="(max-width: 768px) 100vw, 240px"
          className="object-cover"
        />
        <button
          onClick={() => setFav((f) => !f)}
          aria-label={fav ? "Remove from favorites" : "Add to favorites"}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-card/90 text-muted-foreground shadow-sm backdrop-blur transition-colors hover:text-brand"
        >
          <Heart className={cn("h-4 w-4", fav && "fill-brand text-brand")} />
        </button>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-sm font-semibold text-foreground">{doctor.name}</h3>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {doctor.specialty}
        </p>
        <div className="mt-2 flex items-center justify-center gap-1 text-xs">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span className="font-medium text-foreground">{doctor.rating}</span>
          <span className="text-muted-foreground">({doctor.reviews})</span>
        </div>
        <Button
          variant="outline"
          className="mt-3 w-full border-brand/30 text-primary hover:bg-brand-muted hover:text-brand"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}

export function DoctorsDirectory() {
  return (
    <div className="mx-auto w-full max-w-6xl rounded-3xl border border-border bg-background p-4 shadow-sm sm:p-6">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src="/images/hero-doctor.png"
          alt="Doctors"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/30 to-transparent" />

        <div className="relative p-6 sm:p-8">
          <nav className="flex items-center gap-1.5 text-xs text-primary/80">
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary">Doctors</span>
          </nav>

          <h1 className="mt-3 text-3xl font-bold text-black">Our Doctors</h1>

          <p className="mt-2 max-w-md text-sm text-black/80">
            Find the right specialist for your healthcare needs.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside className="flex flex-col gap-5 border-r">
          <div className="flex items-center gap-3 text-sm">
            <span className="font-medium ">Filter By</span>
            <button className="text-primary">Clear All</button>
          </div>
          {filterGroups.map((group) => (
            <FilterSection key={group.title} group={group} />
          ))}
        </aside>

        {/* Grid */}
        <div className="flex flex-col gap-6 ">
          {/* Toolbar */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search doctors..." className="pl-9" />
            </div>
            <Select defaultValue="featured">
              <SelectTrigger className="w-full sm:w-44">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Sort by: Featured</SelectItem>
                <SelectItem value="rating">Sort by: Rating</SelectItem>
                <SelectItem value="reviews">Sort by: Reviews</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-1.5">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {[1, 2, 3, 4].map((p) => (
              <Button
                key={p}
                size="icon"
                variant={p === 1 ? "default" : "outline"}
                className={cn(
                  "h-8 w-8 rounded-full",
                  p === 1 && "bg-primary text-white hover:bg-brand/90",
                )}
              >
                {p}
              </Button>
            ))}
            <span className="px-1 text-sm text-muted-foreground">...</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
            >
              6
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
