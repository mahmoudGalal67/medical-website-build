import {
  Heart,
  ShieldPlus,
  CheckCircle2,
  Building2,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";
import { id } from "date-fns/locale";


const branches = [{
  id:'1',
  title:'ثادق الجزيرة كير',
  desc:"رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
  logo:"/branches/sanad.png",
  doctors:[]
},
{
  id:'2',
  title:'سند الجزيرة فرع طويق',
  desc:"رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
  logo:"/branches/sanad.png",
  doctors:[]
}
,{
  id:'3',
  title:'دار الخيال',
  desc:"رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
  logo:"/branches/khayal.png",
  doctors:[]
}
,{
  id:'4',
  title:' دار الهدا',
  desc:"رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
  logo:"/branches/hoda.png",
  doctors:[]
}
,{
  id:'5',
  title:'سند الجزيرة فرع المهدية',
  desc:"رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
  logo:"/branches/sanad.png",
  doctors:[]
}
,{
  id:'6',
  title:'سند الجزيرة فرع لبن',
  desc:"رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
  logo:"/branches/sanad.png",
  doctors:[]
}]

const doctors = [
  {
    id: 1,
    name: "Dr. Ahmed Al Harbi",
    specialty: "Consultant Cardiologist",
    experience: "15 Years",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
  },
  {
    id: 2,
    name: "Dr. Sara Al Mutairi",
    specialty: "Cardiologist",
    experience: "12 Years",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
  },
  {
    id: 3,
    name: "Dr. Mohammed Ali",
    specialty: "Heart Surgeon",
    experience: "18 Years",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
  },
  {
    id: 4,
    name: "Dr. Huda Al Enazi",
    specialty: "Pediatric Cardiologist",
    experience: "10 Years",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
  },
];

const services = [
  "Heart Checkup",
  "ECG",
  "Echocardiogram",
  "Stress Test",
  "Cardiac MRI",
  "Heart Surgery",
  "Angiography",
  "Hypertension Clinic",
];

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: Props) {
    const { slug } = await params;
    const branch = branches.find((p)=>p.id==slug)
    console.log(branch)
  return (
    <div className="bg-slate-50">
      {/* HERO */}

      <section className="relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-medium">
                {branch?.title}
              </span>

              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mt-6 leading-tight">
                Cardiology
                <span className="text-primary block">Department</span>
              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-8">
                Advanced heart and vascular care with internationally
                experienced specialists, modern diagnostic technologies and
                patient-centered treatment plans.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-primary text-white px-8 py-4 rounded-xl font-medium">
                  Book Appointment
                </button>

                <button className="border px-8 py-4 rounded-xl font-medium">
                  Contact Department
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <h3 className="font-bold text-3xl text-primary">15+</h3>
                  <p className="text-slate-500">Specialists</p>
                </div>

                <div>
                  <h3 className="font-bold text-3xl text-primary">20K+</h3>
                  <p className="text-slate-500">Patients</p>
                </div>

                <div>
                  <h3 className="font-bold text-3xl text-primary">98%</h3>
                  <p className="text-slate-500">Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-blue-100 rounded-[40px] p-6">
                <Image
                  src={branch?.logo || ''}
                  alt=""
                  width={700}
                  height={700}
                  className="rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Department</h2>

            <p className="text-slate-600 leading-8">
              Our Cardiology Department provides comprehensive care for
              cardiovascular diseases using advanced diagnostic and therapeutic
              technologies.
            </p>

            <p className="text-slate-600 leading-8 mt-4">
              We focus on prevention, diagnosis, treatment, rehabilitation and
              long-term management of heart conditions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              "Advanced Diagnostics",
              "Heart Surgery",
              "Cardiac MRI",
              "Emergency Care",
            ].map((item) => (
              <div key={item} className="bg-white p-6 rounded-2xl shadow-sm">
                <Heart className="text-primary mb-4" />
                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Treatments & Services
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition"
              >
                <ShieldPlus className="text-primary mb-4" />

                <h3 className="font-semibold">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS */}

      <section className="container mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Department Specialists</h2>

          <button className="text-primary font-medium">
            View All Doctors
          </button>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={400}
                height={400}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="font-bold">{doctor.name}</h3>

                <p className="text-slate-500 mt-2">{doctor.specialty}</p>

                <div className="flex justify-between mt-4 text-sm">
                  <span>{doctor.experience}</span>

                  <span className="text-yellow-500">⭐ {doctor.rating}</span>
                </div>

                <button className="w-full mt-6 bg-primary text-white py-3 rounded-xl">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8">Why Choose Us</h2>

              <div className="space-y-6">
                {[
                  "Experienced Cardiologists",
                  "Modern Equipment",
                  "Insurance Accepted",
                  "24/7 Emergency Services",
                  "Fast Appointment Scheduling",
                  "Advanced Diagnostics",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">

                    <CheckCircle2 className="text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-10">
              <Building2 className="h-12 w-12 text-primary" />

              <h3 className="font-bold text-2xl mt-6">
                World-Class Facilities
              </h3>

              <p className="text-slate-600 mt-4 leading-8">
                Equipped with modern technology for accurate diagnosis and
                treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}

      {/* FAQ */}

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-slate-600">
              Find answers to the most common questions about our Cardiology
              Department.
            </p>
          </div>

          <div className="bg-white rounded-[32px] border border-slate-100 shadow-lg overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b last:border-b-0 px-2 " 
              >
                <AccordionTrigger className="px-6 text-left text-lg font-semibold hover:no-underline">
                  What conditions do you treat?
                </AccordionTrigger>

                <AccordionContent className="px-6 text-slate-600 leading-7">
                  We diagnose and treat a wide range of cardiovascular
                  conditions including coronary artery disease, heart failure,
                  arrhythmias, hypertension, congenital heart defects, and
                  valvular heart diseases.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-b last:border-b-0 px-2"
              >
                <AccordionTrigger className="px-6 text-left text-lg font-semibold hover:no-underline">
                  Do you accept insurance?
                </AccordionTrigger>

                <AccordionContent className="px-6 text-slate-600 leading-7">
                  Yes, we work with most major insurance providers. Please
                  contact our support team or check the insurance section for a
                  complete list of accepted plans.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border-b last:border-b-0 px-2"
              >
                <AccordionTrigger className="px-6 text-left text-lg font-semibold hover:no-underline">
                  How do I book an appointment?
                </AccordionTrigger>

                <AccordionContent className="px-6 text-slate-600 leading-7">
                  You can book an appointment online through our booking system,
                  by calling our reception desk, or by visiting the hospital
                  directly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border-b last:border-b-0 px-2"
              >
                <AccordionTrigger className="px-6 text-left text-lg font-semibold hover:no-underline">
                  Can I consult online?
                </AccordionTrigger>

                <AccordionContent className="px-6 text-slate-600 leading-7">
                  Yes. Many of our specialists offer telemedicine consultations
                  for follow-up visits and selected medical assessments.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="container mx-auto px-4 pb-20">
        <div className="bg-primary rounded-[40px] p-12 text-white text-center">
          <h2 className="md:text-5xl text-3xl font-bold">
            Need Medical Consultation?
          </h2>

          <p className="mt-4 text-blue-100 text-lg">
            Schedule your appointment with our specialists today.
          </p>

          <button className="bg-white text-primary px-10 py-4 rounded-xl mt-8 font-semibold">
            Book Appointment
          </button>
        </div>
      </section>
    </div>
  );
}

function StatCard({
  icon,
  value,
  title,
}: {
  icon: React.ReactNode;
  value: string;
  title: string;
}) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-3 text-primary">{icon}</div>

      <h3 className="text-3xl font-bold">{value}</h3>

      <p className="text-slate-500 mt-2">{title}</p>
    </div>
  );
}
