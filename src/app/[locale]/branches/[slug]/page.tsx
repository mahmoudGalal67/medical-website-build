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
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5301159142036!2d45.8607969!3d25.2863875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2bc1037acc120b%3A0x133471c5b9890ee5!2z2YXYrNmF2Lkg2KfZhNis2LLYqNix2Kkg2YPZitixINin2YTYt9io2Yo!5e0!3m2!1sar!2seg!4v1783178785468!5m2!1sar!2seg'
  },
  {
    id: "2",
    slug: "tweq",
    title: "سند الجزيرة فرع طويق",
    desc: "رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
    logo: "/branches/pages/tweq.jpeg",
    doctors: 10,
    location: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3628.1568057331287!2d46.580284075362044!3d24.58378407811085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM1JzAxLjYiTiA0NsKwMzQnNTguMyJF!5e0!3m2!1sen!2seg!4v1783178414958!5m2!1sen!2seg'
  },
  {
    id: "3",
    slug: "khayal",
    title: "دار الخيال",
    desc: "رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
    logo: "/branches/pages/khayal.jpeg",
    doctors: 8,
    location: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3628.2607342403053!2d46.54438397536189!3d24.58019637811336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM0JzQ4LjciTiA0NsKwMzInNDkuMSJF!5e0!3m2!1sen!2seg!4v1783178657254!5m2!1sen!2seg'
  },
  {
    id: "4",
    slug: "hoda",
    title: " دار الهدا",
    desc: "رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
    logo: "/branches/pages/hoda.jpeg",
    doctors: 3,
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.118019090726!2d46.567173399999994!3d24.585122899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f19a44c021647%3A0x45da4f842e337a88!2z2YXYrNmF2Lkg2K_Yp9ixINin2YTZh9iv2KfYoSDZhNi32Kgg2YjYqtmC2YjZitmFINin2YTYp9iz2YbYp9mG!5e0!3m2!1sen!2seg!4v1783178746436!5m2!1sen!2seg'
  },
  {
    id: "5",
    slug: "mahdya",
    title: "سند الجزيرة فرع المهدية",
    desc: "رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
    logo: "/branches/pages/mahdya.jpeg",
    doctors: 5,
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.099288896348!2d46.5224044!3d24.6547105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1f8b044d182d%3A0xa69f981c49107343!2z2YXYrNmF2Lkg2LnZitin2K_Yp9iqINiz2YbYryDYp9mE2KzYstmK2LHYqSDYp9mE2LfYqNmK!5e0!3m2!1sen!2seg!4v1783178718485!5m2!1sen!2seg'
  },
  {
    id: "6",
    slug: "lbn",
    title: "سند الجزيرة فرع لبن",
    desc: "رعاية متقدمة   على يد أخصائيين يتمتعون بخبرة دولية، وباستخدام تقنيات تشخيصية حديثة وخطط علاجية تتمحور حول المريض.",
    logo: "/branches/pages/lbn.jpeg",
    doctors: 6,
    location: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3627.0748994759865!2d46.5330276753632!3d24.62110327808628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM3JzE2LjAiTiA0NsKwMzInMDguMiJF!5e0!3m2!1sen!2seg!4v1783178687747!5m2!1sen!2seg'
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
       {/* Google Map */}
      <section className="pb-24 my-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <iframe
              className="h-[450px] w-full border-0"
              src={branch?.location}
              title="Google Map"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>
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
