// app/contact/page.tsx

import { Mail, Phone, MapPin, Clock3, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute  inset-0 " />

        <div className="mx-auto  px-6 py-24 lg:px-8 bg-gradient-to-br from-primary via-primary to-primary2">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full border border-cyan-200  px-4 py-2 text-sm font-medium text-white">
              اتصل بنا
            </span>

            <h1 className="mt-6 lg:text-5xl text-3xl font-bold tracking-tight text-primary2">
              يسعدنا أن نسمع منك
            </h1>

            <p className="mt-6 text-lg leading-8 text-white">
              سواء كان لديك استفسار، أو كنت بحاجة إلى مساعدة طبية، أو ترغب في
              حجز موعد، فإن فريقنا مستعد للمساعدة.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 py-12">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3 rounded-3xl border bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-slate-900">
              أرسل لنا رسالة
            </h2>

            <p className="mt-2 text-slate-500">
              املأ النموذج أدناه وسنتواصل معك قريباً.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    الاسم الكامل
                  </label>

                  <input
                    type="text"
                    placeholder="Mahmoud Galal"
                    className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    رقم التليفون
                  </label>

                  <input
                    type="tel"
                    placeholder="+966..."
                    className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  عنوان البريد الإلكتروني
                </label>

                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">موضوع</label>

                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">رسالة</label>

                <textarea
                  rows={6}
                  placeholder="اكتب رسالتك..."
                  className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              <button
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
                type="submit"
              >
                <Send className="h-5 w-5" />
                إرسال رسالة
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-3xl bg-cyan-600 p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold">معلومات الاتصال</h3>

              <p className="mt-3 text-cyan-100">
                لا تتردد في التواصل معنا عبر أي من الطرق التالية.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="rounded-xl bg-white/20 p-3">
                    <Phone />
                  </div>

                  <div>
                    <p className="font-semibold">هاتف</p>
                    <p className="text-cyan-100">+966 500 000 000</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-xl bg-white/20 p-3">
                    <Mail />
                  </div>

                  <div>
                    <p className="font-semibold">بريد إلكتروني</p>
                    <p className="text-cyan-100">info@hospital.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-xl bg-white/20 p-3">
                    <MapPin />
                  </div>

                  <div>
                    <p className="font-semibold">موقع</p>
                    <p className="text-cyan-100">
                      الرياض، المملكة العربية السعودية
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-xl bg-white/20 p-3">
                    <Clock3 />
                  </div>

                  <div>
                    <p className="font-semibold">ساعات العمل</p>
                    <p className="text-cyan-100">من السبت إلى الخميس</p>
                    <p className="text-cyan-100">8:00 صباحاً - 10:00 مساءً</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Help */}
            <div className="rounded-3xl border bg-white p-8 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-cyan-100 p-4">
                  <MessageCircle className="text-cyan-600" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    هل تحتاج إلى مساعدة فورية؟
                  </h3>

                  <p className="text-slate-500">
                    فريق الدعم لدينا متاح لمساعدتك.
                  </p>
                </div>
              </div>

              <button className="mt-6 w-full rounded-xl bg-slate-900 py-3 font-semibold text-white transition hover:bg-slate-800">
                تحدث معنا
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
              src="https://www.google.com/maps/embed?pb="
              className="h-[450px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
