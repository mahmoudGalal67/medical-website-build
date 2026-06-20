"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useMemo, useState } from "react";

import {
  Heart,
  Brain,
  Activity,
  Baby,
  Eye,
  Ear,
  Stethoscope,
  ScanLine,
  ShieldPlus,
  ArrowRight,
  Search,
} from "lucide-react";

function Feature({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>

      <h3 className="font-semibold text-lg text-slate-900">{title}</h3>
    </div>
  );
}

export default async function DepartmentsPage({}) {
  const [search, setSearch] = useState("");

  const departments = [
    {
      id: 1,
      name: "Laser treatment",
      icon: Heart,
      doctors: 15,
      description: "Advanced heart and vascular care.",
      slug: "cardiology",
    },
    {
      id: 2,
      name: "Dentistry",
      icon: Brain,
      doctors: 12,
      description: "Brain and nervous system treatments.",
      slug: "Dentistry",
    },
    {
      id: 3,
      name: "Gynecology",
      icon: Activity,
      doctors: 18,
      description: "Bone, joint and sports injuries.",
      slug: "Gynecology",
    },
    {
      id: 4,
      name: "Dermatology",
      icon: Baby,
      doctors: 10,
      description: "Healthcare for infants and children.",
      slug: "pediatrics",
    },
  ];

  const filteredDepartments = useMemo(() => {
    return departments.filter((department) =>
      department.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO */}

      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-primary">
              Medical Departments
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold text-slate-900">
              Find The Right
              <span className="block text-primary">Medical Department</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              Explore our specialized departments and connect with experienced
              doctors and advanced medical services.
            </p>

            <div className="relative mt-10">
              <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search departments..."
                className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-14 pr-4 outline-none focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}

      <section className="container mx-auto px-4 py-10">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-4xl font-bold">All Departments</h2>

          <span className="text-slate-500">
            {filteredDepartments.length} Departments
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredDepartments.map((department) => {
            const Icon = department.icon;

            return (
              <Link
                key={department.id}
                href={`/departments/${department.slug}`}
                className="group rounded-3xl border border-slate-100 bg-white p-8 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                  <Icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {department.name}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {department.description}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    {department.doctors} Doctors
                  </span>

                  <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE US */}

      {/* FEATURED */}

      <section className="container mx-auto px-4 py-16">
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-primary to-blue-400 p-10 text-white">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
                Featured Department
              </span>

              <h2 className="mt-5 text-4xl font-bold">Cardiology Center</h2>

              <p className="mt-4 leading-8 text-blue-100">
                Advanced cardiac care with highly experienced specialists and
                modern diagnostic technology.
              </p>

              <button className="mt-8 rounded-xl bg-white px-8 py-3 font-semibold text-primary">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["15+", "Specialists"],
                ["20K+", "Patients"],
                ["24/7", "Emergency"],
                ["98%", "Satisfaction"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl bg-white/10 p-6 backdrop-blur"
                >
                  <h3 className="text-4xl font-bold">{value}</h3>

                  <p className="mt-2">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="rounded-[32px] bg-white p-10 shadow-sm">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold">Why Choose Our Hospital</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Feature title="Expert Doctors" icon={<Stethoscope />} />

            <Feature title="Modern Equipment" icon={<ShieldPlus />} />

            <Feature title="24/7 Emergency" icon={<Heart />} />

            <Feature title="Patient Focused Care" icon={<Brain />} />
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="container mx-auto px-4 pb-20">
        <div className="rounded-[40px] bg-primary p-12 text-center text-white">
          <h2 className="text-5xl font-bold">Need Medical Assistance?</h2>

          <p className="mt-4 text-lg text-blue-100">
            Book your appointment with our specialists today.
          </p>

          <button className="mt-8 rounded-xl bg-white px-10 py-4 font-semibold text-primary">
            Book Appointment
          </button>
        </div>
      </section>
    </div>
  );
}
