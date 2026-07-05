"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  MessageCircle,
} from "lucide-react";

type Lang = "ar" | "en";

const content = {
  ar: {
    heroBadge: "اتصل بنا",
    heroTitle: "يسعدنا أن نسمع منك",
    heroDescription:
      "سواء كان لديك استفسار، أو كنت بحاجة إلى مساعدة طبية، أو ترغب في حجز موعد، فإن فريقنا مستعد للمساعدة.",

    callNow: "اتصل بنا الآن",
    contactUs: "تواصل معنا",

    formTitle: "أرسل لنا رسالة",
    formDescription:
      "املأ النموذج أدناه وسنتواصل معك قريباً.",

    fullName: "الاسم الكامل",
    fullNamePlaceholder: "محمد أحمد",

    phone: "رقم الهاتف",
    phonePlaceholder: "+966 500 000 000",

    email: "عنوان البريد الإلكتروني",
    emailPlaceholder: "info@hospital.com",

    subject: "الموضوع",
    subjectPlaceholder: "كيف يمكننا مساعدتك؟",

    message: "الرسالة",
    messagePlaceholder: "اكتب رسالتك...",

    send: "إرسال رسالة",

    contactInfo: "معلومات الاتصال",
    contactDescription:
      "لا تتردد في التواصل معنا عبر أي من الطرق التالية.",

    phoneTitle: "هاتف",
    emailTitle: "بريد إلكتروني",
    locationTitle: "الموقع",

    location: (
      <>
        الرياض - حي طويق - شارع خديجة بنت خويلد
        <br />
        بجوار القرية الشعبية
      </>
    ),

    emergency: "طوارئ على مدار الساعة (24/7)",

    quickHelpTitle: "هل تحتاج إلى مساعدة فورية؟",
    quickHelpDescription:
      "فريق الدعم لدينا متاح لمساعدتك.",
    chat: "تحدث معنا",
  },

  en: {
    heroBadge: "Contact Us",
    heroTitle: "We'd Love to Hear From You",
    heroDescription:
      "Whether you have an inquiry, need medical assistance, or would like to book an appointment, our team is ready to help.",

    callNow: "Call Us Now",
    contactUs: "Contact Us",

    formTitle: "Send Us a Message",
    formDescription:
      "Fill out the form below and we'll get back to you soon.",

    fullName: "Full Name",
    fullNamePlaceholder: "Marwa Samy",

    phone: "Phone Number",
    phonePlaceholder: "+966 500 000 000",

    email: "Email Address",
    emailPlaceholder: "info@hospital.com",

    subject: "Subject",
    subjectPlaceholder: "How can we help?",

    message: "Message",
    messagePlaceholder: "Write your message...",

    send: "Send Message",

    contactInfo: "Contact Information",
    contactDescription:
      "Feel free to contact us through any of the following methods.",

    phoneTitle: "Phone",
    emailTitle: "Email",
    locationTitle: "Location",

    location: (
      <>
        Riyadh - Tuwaiq District
        <br />
        Khadijah bint Khuwaylid Street
        <br />
        Next to Al Qariah Al Shaabiya
      </>
    ),

    emergency: "24/7 Emergency Services",

    quickHelpTitle: "Need Immediate Assistance?",
    quickHelpDescription:
      "Our support team is always ready to assist you.",
    chat: "Chat With Us",
  },
};

export default function ContactPage() {
  const params = useParams();

  const locale: Lang = params.locale === "en" ? "en" : "ar";

  const isRTL = locale === "ar";

  const t = content[locale];

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50"
    >
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" />

        <div className="mx-auto px-6 py-24 lg:px-8 bg-gradient-to-br from-primary via-primary to-primary2">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full border border-cyan-200 px-4 py-2 text-sm font-medium text-white">
              {t.heroBadge}
            </span>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-primary2 lg:text-5xl">
              {t.heroTitle}
            </h1>

            <p className="mt-6 text-lg leading-8 text-white">
              {t.heroDescription}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
  href="tel:+966500000000"
  className="rounded-full bg-white px-8 py-4 font-bold text-[#7A1F3D]
  transition-all duration-300 ease-in-out
  hover:scale-105 hover:-translate-y-1
  hover:bg-[#7A1F3D] hover:text-white
  hover:shadow-lg hover:shadow-black/20"
>
  {t.callNow}
</a>

              <Link
  href="/contact"
  className="rounded-full border-2 border-white bg-transparent px-8 py-4 font-bold text-white
  transition-all duration-300 ease-in-out
  hover:scale-105 hover:-translate-y-1
  hover:bg-white hover:text-[#7A1F3D]
  hover:shadow-lg hover:shadow-white/20"
>
  {t.contactUs}
</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800">
              {t.formTitle}
            </h2>
            <p className="mt-2 text-slate-500">
              {t.formDescription}
            </p>

            <form className="mt-8 space-y-5">
              {/* Full Name */}
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  {t.fullName}
                </label>
                <input
                  type="text"
                  placeholder={t.fullNamePlaceholder}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#7A1F3D]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  {t.phone}
                </label>
                <input
                  type="tel"
                  placeholder={t.phonePlaceholder}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#7A1F3D]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  {t.email}
                </label>
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#7A1F3D]"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  {t.subject}
                </label>
                <input
                  type="text"
                  placeholder={t.subjectPlaceholder}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#7A1F3D]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  {t.message}
                </label>
                <textarea
                  rows={5}
                  placeholder={t.messagePlaceholder}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#7A1F3D]"
                />
              </div>

              {/* Submit */}
              <button
  type="submit"
  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#7A1F3D] px-6 py-4 font-bold text-white
  transition-all duration-300 ease-in-out
  hover:scale-[1.02] hover:-translate-y-1
  hover:bg-[#5f1730]
  hover:shadow-xl hover:shadow-[#7A1F3D]/30"
>
  <Send size={18} />
  {t.send}
</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">

            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                {t.contactInfo}
              </h2>
              <p className="mt-2 text-slate-500">
                {t.contactDescription}
              </p>
            </div>

            {/* Cards */}
            <div className="space-y-4">

              {/* Phone */}
              <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border">
                <Phone className="text-[#7A1F3D]" />
                <div>
                  <p className="font-semibold">{t.phoneTitle}</p>
                  <p className="text-slate-500">+966 500 000 000</p>
                  <p className="text-xs text-green-600 mt-1">
                    {t.emergency}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border">
                <Mail className="text-[#7A1F3D]" />
                <div>
                  <p className="font-semibold">{t.emailTitle}</p>
                  <p className="text-slate-500">info@hospital.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border">
                <MapPin className="text-[#7A1F3D]" />
                <div>
                  <p className="font-semibold">{t.locationTitle}</p>
                  <p className="text-slate-500 leading-relaxed">
                    {t.location}
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Help */}
            <div className="bg-gradient-to-br from-[#7A1F3D] to-[#a12a52] text-white p-6 rounded-2xl">
              <div className="flex items-center gap-2">
                <MessageCircle />
                <h3 className="font-bold">{t.quickHelpTitle}</h3>
              </div>

              <p className="mt-2 text-sm text-white/90">
                {t.quickHelpDescription}
              </p>

              <button className="mt-4 w-full bg-white text-[#7A1F3D] font-bold py-3 rounded-xl
transition-all duration-300 ease-in-out
hover:scale-[1.02] hover:-translate-y-1
hover:bg-slate-100
hover:shadow-lg">
  {t.chat}
</button>
            </div>

          </div>
        </div>
      </section>
      {/* Google Map */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.1593731021103!2d46.58035547509661!3d24.583695456276956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1991e910ab05%3A0xb88a7b6fd7e9431b!2sSanad%20Al-Jazeera%20Medical%20Complex%20and%20the%20Center%20for%20Medical%20Certificate%20for%20Iqama%20And%20Health%20Certificate!5e0!3m2!1sen!2seg!4v1782905713092!5m2!1sen!2seg"
              className="h-[450px] w-full border-0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
}
