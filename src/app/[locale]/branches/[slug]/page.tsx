import { Heart, ShieldPlus, CheckCircle2, Building2 } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";

import DoctorsSection from "@/components/doctors-section";
import TestimonialsSection from "@/components/AAtestimonials-section";

const branches = [
  {
    id: "1",
    slug: "care",
    title: "مجمع الجزيره كير الطبي",
    desc: "رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
    logo: "/branches/pages/care.jpeg",
    doctors: 2,
  },
  {
    id: "2",
    slug: "tweq",
    title: "سند الجزيرة فرع طويق",
    desc: "رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
    logo: "/branches/pages/tweq.jpeg",
    doctors: 10,
  },
  {
    id: "3",
    slug: "khayal",
    title: "دار الخيال",
    desc: "رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
    logo: "/branches/pages/khayal.jpeg",
    doctors: 8,
  },
  {
    id: "4",
    slug: "hoda",
    title: " دار الهدا",
    desc: "رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
    logo: "/branches/pages/hoda.jpeg",
    doctors: 3,
  },
  {
    id: "5",
    slug: "mahdya",
    title: "سند الجزيرة فرع المهدية",
    desc: "رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
    logo: "/branches/pages/mahdya.jpeg",
    doctors: 5,
  },
  {
    id: "6",
    slug: "lbn",
    title: "سند الجزيرة فرع لبن",
    desc: "رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
    logo: "/branches/pages/lbn.jpeg",
    doctors: 6,
  },
];

const services = [
  " العيادات الطبية.",
  " الأسنان",
  " الجلدية والتجميل.",
  " المختبر ",
  "الخدمات المساندة.",
  " الأشعه",
  
];
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const branch = branches.find((p) => p.slug == slug);

  const doctors = Array.from({ length: branch?.doctors || 0 }, () => "");
  console.log("doctors", doctors);
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

              <h1 className=" lg:text-6xl text-4xl font-bold text-primary2 mt-6 leading-tight">
                عناية
                <span className="text-primary block">
                  مميزة باحدث الاساليب الطبية
                </span>
              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-8"></p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-primary text-white px-8 py-4 rounded-xl font-medium">
                  حجز موعد
                </button>

                <button className="border px-8 py-4 rounded-xl font-medium">
                  التواصل مع الفرع
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <h3 className="font-bold text-3xl text-primary">15+</h3>
                  <p className="text-slate-500">متخصصون</p>
                </div>

                <div>
                  <h3 className="font-bold text-3xl text-primary">20K+</h3>
                  <p className="text-slate-500">مرضى</p>
                </div>

                <div>
                  <h3 className="font-bold text-3xl text-primary">98%</h3>
                  <p className="text-slate-500">إشباع</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-blue-100 rounded-[40px] p-6">
                <Image
                  src={branch?.logo || ""}
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
            <h2 className="text-4xl text-primary2 font-bold mb-6">عن الفرع </h2>

            <p className="text-slate-600 leading-8">
              يوفر فرعنا رعاية شاملة باستخدام تقنيات تشخيصية وعلاجية متطورة.
            </p>

            <p className="text-slate-600 leading-8 mt-4">
              نركز على الوقاية وإعادة التأهيل على المدى الطويل.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              "التشخيص المتقدم",
              "جراحة القلب",
              "التصوير بالرنين المغناطيسي للقلب",
              "الرعاية الطارئة",
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
          <h2 className="text-4xl text-primary2 font-bold text-center mb-12">
            العلاجات والخدمات
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

      <DoctorsSection doctors={doctors} params={branch?.slug} />
      {/* WHY CHOOSE */}

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl text-primary2 font-bold mb-8">
                لماذا تختارنا
              </h2>

              <div className="space-y-6">
                {[
                  "أطباء قلب ذوو خبرة",
                  "معدات حديثة",
                  "قبول التأمين",
                  "خدمات طوارئ على مدار الساعة",
                  "سرعة تحديد المواعيد",
                  "تشخيصات متطورة",
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

              <h3 className="font-bold text-primary2 text-2xl mt-6">
                مرافق عالمية المستوى
              </h3>

              <p className="text-slate-600 mt-4 leading-8">
                مُجهَّز بأحدث التقنيات للتشخيص والعلاج الدقيق.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <TestimonialsSection />
      {/* FAQ */}

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary2">
              الأسئلة الشائعة
            </h2>

            <p className="mt-4 text-slate-600">
              اعثر على إجابات للأسئلة الأكثر شيوعاً حول قسم أمراض القلب لدينا.
            </p>
          </div>

          <div className="bg-white rounded-[32px] border border-slate-100 shadow-lg overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b last:border-b-0 px-2 "
              >
                <AccordionTrigger className="px-6 text-left text-lg font-semibold hover:no-underline">
                  <span className="flex-1 text-right">
                    ما هي الحالات التي تعالجها؟
                  </span>
                </AccordionTrigger>

                <AccordionContent className="px-6 text-slate-600 leading-7">
                  نقوم بتشخيص وعلاج مجموعة واسعة من أمراض القلب والأوعية
                  الدموية، بما في ذلك مرض الشريان التاجي، وفشل القلب، واضطرابات
                  نظم القلب، وارتفاع ضغط الدم، وعيوب القلب الخلقية، وأمراض
                  صمامات القلب.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-b last:border-b-0 px-2"
              >
                <AccordionTrigger className="px-6 text-left text-lg font-semibold hover:no-underline">
                  <span className="flex-1 text-right">هل تقبلون التأمين؟</span>
                </AccordionTrigger>

                <AccordionContent className="px-6 text-slate-600 leading-7">
                  نعم، نحن نتعاون مع معظم شركات التأمين الكبرى. يرجى التواصل مع
                  فريق الدعم لدينا أو الاطلاع على قسم التأمين للحصول على قائمة
                  كاملة بالخطط المقبولة.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border-b last:border-b-0 px-2"
              >
                <AccordionTrigger className="px-6 text-left text-lg font-semibold hover:no-underline">
                  <span className="flex-1 text-right">كيف أحجز موعداً؟</span>
                </AccordionTrigger>

                <AccordionContent className="px-6 text-slate-600 leading-7">
                  يمكنك حجز موعد عبر الإنترنت من خلال نظام الحجز لدينا، أو عن
                  طريق الاتصال بمكتب الاستقبال، أو بزيارة المستشفى مباشرةً.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border-b last:border-b-0 px-2"
              >
                <AccordionTrigger className="px-6 text-left text-lg font-semibold hover:no-underline">
                  <span className="flex-1 text-right">
                    هل يمكنني الحصول على استشارة عبر الإنترنت؟
                  </span>
                </AccordionTrigger>

                <AccordionContent className="px-6 text-slate-600 leading-7">
                  نعم، يقدم العديد من المتخصصين لدينا استشارات عبر الطب الاتصالي
                  لزيارات المتابعة وبعض التقييمات الطبية المحددة.
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
            هل تحتاج إلى استشارة طبية؟
          </h2>

          <p className="mt-4 text-blue-100 text-lg">
            احجز موعدك مع أخصائيينا اليوم.
          </p>

          <button className="bg-white text-primary px-10 py-4 rounded-xl mt-8 font-semibold">
            حجز موعد
          </button>
        </div>
      </section>
    </div>
  );
}
