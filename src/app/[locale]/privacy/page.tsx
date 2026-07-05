import {
  ShieldCheck,
  Lock,
  Database,
  FileText,
  HeartHandshake,
  Scale,
  UserCheck,
  Phone,
  ClipboardList,
  BadgeCheck,
  ScrollText,
} from "lucide-react";

type Lang = "ar" | "en";

const content = {
  ar: {
    heroBadge: "سياسة الخصوصية والشروط والأحكام",
    heroTitle: "خصوصيتكم هي أولويتنا",
    heroDesc:
      "تلتزم مجموعة سند الجزيرة الطبية بحماية بيانات المرضى والزوار والمحافظة على سريتها وفق الأنظمة واللوائح المعمول بها في المملكة العربية السعودية.",

    privacySectionTitle: "سياسة الخصوصية",
    privacySectionText:
      "تولي مجموعة سند الجزيرة الطبية أهمية قصوى لحماية خصوصية وبيانات زوار الموقع والمرضى، وتلتزم بالمحافظة على سرية المعلومات الشخصية وفق الأنظمة واللوائح المعمول بها في المملكة العربية السعودية.",

    dataCollectedTitle: "البيانات التي نقوم بجمعها",
    dataCollected: [
      "الاسم الكامل",
      "رقم الجوال",
      "رقم الهوية",
      "العمر",
      "بيانات حجز المواعيد",
      "المعلومات الطبية التي يقدمها المستخدم طوعًا",
      "بيانات التصفح واستخدام الموقع",
    ],

    dataUsageTitle: "استخدام البيانات",
    dataUsage: [
      "حجز وإدارة المواعيد الطبية",
      "التواصل مع المرضى",
      "تحسين جودة الخدمات والموقع الإلكتروني",
      "الامتثال للمتطلبات النظامية والتنظيمية",
    ],

    dataProtectionTitle: "حماية البيانات",
    dataProtectionText:
      "نتخذ التدابير التقنية والإدارية المناسبة لحماية البيانات الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف.",

    dataSharingTitle: "مشاركة البيانات",
    dataSharing: [
      "بموافقة صاحب البيانات.",
      "عند وجود متطلب نظامي أو قضائي.",
      "للجهات الصحية المختصة عند الحاجة.",
    ],

    userRightsTitle: "حقوق المستخدم",
    userRights: [
      "الاطلاع على البيانات الشخصية.",
      "طلب تصحيح البيانات.",
      "طلب تحديث البيانات.",
      "الاستفسار عن كيفية معالجة البيانات.",
    ],

    amendmentsTitle: "التعديلات",
    amendmentsText:
      "يحتفظ المجمع بحق تعديل سياسة الخصوصية في أي وقت، ويتم نشر النسخة المحدثة عبر الموقع الإلكتروني.",

    patientRightsDutiesTitle: "حقوق وواجبات المريض",
    patientRightsDutiesText:
      "تحرص مجموعة سند الجزيرة الطبية على تقديم خدمات صحية عالية الجودة مع الحفاظ على حقوق المرضى وتعزيز مسؤولياتهم.",

    patientRightsTitle: "حقوق المريض",
    patientRights: [
      "الحصول على الرعاية الصحية المناسبة دون تمييز.",
      "المعاملة باحترام وكرامة.",
      "الحفاظ على خصوصية وسرية المعلومات الطبية.",
      "معرفة اسم الطبيب المعالج والمؤهلين المشاركين في الرعاية.",
      "الحصول على شرح واضح للحالة الصحية والخطة العلاجية.",
      "الموافقة أو الرفض للإجراءات الطبية وفق الأنظمة.",
      "معرفة التكاليف والخدمات المقدمة.",
      "تقديم الشكاوى والملاحظات.",
      "الحصول على نسخة من التقارير الطبية.",
    ],

    patientDutiesTitle: "واجبات المريض",
    patientDuties: [
      "تقديم معلومات صحية صحيحة وكاملة.",
      "الالتزام بالخطة العلاجية.",
      "الالتزام بالمواعيد وإبلاغ المجمع عند الإلغاء.",
      "احترام العاملين والمرضى الآخرين.",
      "المحافظة على ممتلكات المجمع.",
      "الالتزام بالأنظمة والتعليمات.",
      "الوفاء بالالتزامات المالية.",
    ],

    complaintsTitle: "الشكاوى والاقتراحات",
    complaintsText:
      "يمكن للمرضى تقديم الشكاوى أو المقترحات عبر قنوات التواصل الرسمية الخاصة بالمجمع، وسيتم التعامل معها بسرية ومهنية.",

    termsTitle: "الشروط والأحكام",
    termsCards: [
      {
        title: "استخدام الموقع",
        text: "يستخدم الموقع لأغراض الاطلاع على الخدمات الطبية وحجز المواعيد والتواصل مع المجمع.",
      },
      {
        title: "دقة المعلومات",
        text: "يبذل المجمع كافة الجهود لتوفير معلومات دقيقة ومحدثة، إلا أنه لا يضمن خلو الموقع من الأخطاء أو الانقطاعات التقنية.",
      },
      {
        title: "حجز المواعيد",
        text: "يخضع حجز المواعيد لتوفر المواعيد الفعلية، ويحق للمجمع تعديل أو إعادة جدولة المواعيد عند الضرورة، كما يجب على المريض التأكد من صحة البيانات المدخلة.",
      },
      {
        title: "الملكية الفكرية",
        text: "جميع النصوص والشعارات والصور والمحتويات المنشورة على الموقع مملوكة للمجمع أو مرخص باستخدامها، ولا يجوز نسخها أو إعادة استخدامها دون موافقة مسبقة.",
      },
    ],
  },
  en: {
    heroBadge: "Privacy Policy & Terms and Conditions",
    heroTitle: "Your Privacy Is Our Priority",
    heroDesc:
      "Sanad Aljazeera Medical Group is committed to protecting the data of patients and visitors and maintaining its confidentiality in accordance with the regulations and laws applicable in the Kingdom of Saudi Arabia.",

    privacySectionTitle: "Privacy Policy",
    privacySectionText:
      "Sanad Aljazeera Medical Group places the utmost importance on protecting the privacy and data of website visitors and patients, and is committed to maintaining the confidentiality of personal information in accordance with the regulations and laws applicable in the Kingdom of Saudi Arabia.",

    dataCollectedTitle: "Data We Collect",
    dataCollected: [
      "Full name",
      "Mobile number",
      "National ID number",
      "Age",
      "Appointment booking data",
      "Medical information voluntarily provided by the user",
      "Browsing and website usage data",
    ],

    dataUsageTitle: "Use of Data",
    dataUsage: [
      "Booking and managing medical appointments",
      "Communicating with patients",
      "Improving the quality of services and the website",
      "Complying with regulatory and legal requirements",
    ],

    dataProtectionTitle: "Data Protection",
    dataProtectionText:
      "We take appropriate technical and administrative measures to protect personal data from unauthorized access, alteration, disclosure, or destruction.",

    dataSharingTitle: "Data Sharing",
    dataSharing: [
      "With the data owner's consent.",
      "When there is a legal or judicial requirement.",
      "With relevant health authorities when necessary.",
    ],

    userRightsTitle: "User Rights",
    userRights: [
      "Access personal data.",
      "Request correction of data.",
      "Request updates to data.",
      "Inquire about how data is processed.",
    ],

    amendmentsTitle: "Amendments",
    amendmentsText:
      "The complex reserves the right to amend the privacy policy at any time, and the updated version will be published on the website.",

    patientRightsDutiesTitle: "Patient Rights & Responsibilities",
    patientRightsDutiesText:
      "Sanad Aljazeera Medical Group is committed to providing high-quality healthcare services while upholding patients' rights and reinforcing their responsibilities.",

    patientRightsTitle: "Patient Rights",
    patientRights: [
      "Receive appropriate healthcare without discrimination.",
      "Be treated with respect and dignity.",
      "Have the privacy and confidentiality of medical information protected.",
      "Know the name of the treating physician and the qualified staff involved in care.",
      "Receive a clear explanation of the health condition and treatment plan.",
      "Consent to or refuse medical procedures in accordance with regulations.",
      "Know the costs and services provided.",
      "Submit complaints and feedback.",
      "Obtain a copy of medical reports.",
    ],

    patientDutiesTitle: "Patient Responsibilities",
    patientDuties: [
      "Provide accurate and complete health information.",
      "Adhere to the treatment plan.",
      "Keep appointments and notify the complex in case of cancellation.",
      "Respect staff and other patients.",
      "Preserve the complex's property.",
      "Comply with regulations and instructions.",
      "Fulfill financial obligations.",
    ],

    complaintsTitle: "Complaints & Suggestions",
    complaintsText:
      "Patients can submit complaints or suggestions through the complex's official communication channels, and they will be handled confidentially and professionally.",

    termsTitle: "Terms and Conditions",
    termsCards: [
      {
        title: "Use of the Website",
        text: "The website is used to view medical services, book appointments, and communicate with the complex.",
      },
      {
        title: "Accuracy of Information",
        text: "The complex makes every effort to provide accurate and up-to-date information; however, it does not guarantee the website will be free of errors or technical interruptions.",
      },
      {
        title: "Appointment Booking",
        text: "Appointment booking is subject to actual availability, and the complex reserves the right to modify or reschedule appointments when necessary. Patients must also ensure the accuracy of the data entered.",
      },
      {
        title: "Intellectual Property",
        text: "All text, logos, images, and content published on the website are owned by the complex or used under license, and may not be copied or reused without prior consent.",
      },
    ],
  },
};

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function PrivacyPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale: Lang = rawLocale === "en" ? "en" : "ar";
  const isRTL = locale === "ar";
  const t = content[locale];

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white"
    >
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-primary2" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-white px-5 py-2 shadow-sm">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span className="font-medium text-sky-700">
                {t.heroBadge}
              </span>
            </div>

            <h1 className="lg:text-5xl text-3xl font-black text-primary2 leading-tight">
              {t.heroTitle}
            </h1>

            <p className="mt-6 text-lg leading-8 text-white">
              {t.heroDesc}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 space-y-12">
        {/* Privacy */}

        <Section
          icon={<ShieldCheck className="h-7 w-7 text-primary" />}
          title={t.privacySectionTitle}
        >
          <p className="leading-8 text-slate-600">
            {t.privacySectionText}
          </p>
        </Section>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-2">
          <Card
            icon={<Database className="text-primary" />}
            title={t.dataCollectedTitle}
          >
            <List items={t.dataCollected} />
          </Card>

          <Card
            icon={<ClipboardList className="text-primary" />}
            title={t.dataUsageTitle}
          >
            <List items={t.dataUsage} />
          </Card>

          <Card
            icon={<Lock className="text-primary" />}
            title={t.dataProtectionTitle}
          >
            <p className="leading-8 text-slate-600">
              {t.dataProtectionText}
            </p>
          </Card>

          <Card
            icon={<Scale className="text-primary" />}
            title={t.dataSharingTitle}
          >
            <List items={t.dataSharing} />
          </Card>

          <Card
            icon={<UserCheck className="text-primary" />}
            title={t.userRightsTitle}
          >
            <List items={t.userRights} />
          </Card>

          <Card
            icon={<FileText className="text-primary" />}
            title={t.amendmentsTitle}
          >
            <p className="leading-8 text-slate-600">
              {t.amendmentsText}
            </p>
          </Card>
        </div>

        {/* Rights */}

        <Section
          icon={<HeartHandshake className="h-7 w-7 text-emerald-600" />}
          title={t.patientRightsDutiesTitle}
        >
          <p className="text-slate-600 leading-8">
            {t.patientRightsDutiesText}
          </p>
        </Section>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card
            icon={<BadgeCheck className="text-emerald-600" />}
            title={t.patientRightsTitle}
          >
            <NumberList items={t.patientRights} />
          </Card>

          <Card
            icon={<UserCheck className="text-emerald-600" />}
            title={t.patientDutiesTitle}
          >
            <NumberList items={t.patientDuties} />
          </Card>
        </div>

        {/* Complaints */}

        <Section
          icon={<Phone className="h-7 w-7 text-primary" />}
          title={t.complaintsTitle}
        >
          <div className="rounded-3xl bg-sky-50 border border-sky-100 p-8">
            <p className="text-slate-600 leading-8">
              {t.complaintsText}
            </p>
          </div>
        </Section>

        {/* Terms */}

        <Section
          icon={<ScrollText className="h-7 w-7 text-primary" />}
          title={t.termsTitle}
        >
          <div className="space-y-6">
            {t.termsCards.map((card) => (
              <CardSimple key={card.title} title={card.title} text={card.text} />
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">
          {icon}
        </div>

        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
      </div>

      {children}
    </section>
  );
}

function Card({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-sky-100 p-3">{icon}</div>

        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      {children}
    </div>
  );
}

function CardSimple({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>

      <p className="leading-8 text-slate-600">{text}</p>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-slate-600 leading-7"
        >
          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary2"></span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function NumberList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-5">
      {items.map((item, index) => (
        <li key={index} className="flex gap-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary2 text-white text-sm font-bold">
            {index + 1}
          </div>

          <p className="leading-7 text-primary">{item}</p>
        </li>
      ))}
    </ol>
  );
}
