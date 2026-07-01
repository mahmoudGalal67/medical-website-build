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

export default function PrivacyPage() {
  return (
    <main
      dir="rtl"
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
                سياسة الخصوصية والشروط والأحكام
              </span>
            </div>

            <h1 className="lg:text-5xl text-3xl font-black text-primary2 leading-tight">
              خصوصيتكم هي أولويتنا
            </h1>

            <p className="mt-6 text-lg leading-8 text-white">
              تلتزم مجموعة سند الجزيرة الطبية بحماية بيانات المرضى والزوار
              والمحافظة على سريتها وفق الأنظمة واللوائح المعمول بها في المملكة
              العربية السعودية.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 space-y-12">
        {/* Privacy */}

        <Section
          icon={<ShieldCheck className="h-7 w-7 text-primary" />}
          title="سياسة الخصوصية"
        >
          <p className="leading-8 text-slate-600">
            تولي مجموعة سند الجزيرة الطبية أهمية قصوى لحماية خصوصية وبيانات
            زوار الموقع والمرضى، وتلتزم بالمحافظة على سرية المعلومات الشخصية
            وفق الأنظمة واللوائح المعمول بها في المملكة العربية السعودية.
          </p>
        </Section>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-2">
          <Card
            icon={<Database className="text-primary" />}
            title="البيانات التي نقوم بجمعها"
          >
            <List
              items={[
                "الاسم الكامل",
                "رقم الجوال",
                "رقم الهوية",
                "العمر",
                "بيانات حجز المواعيد",
                "المعلومات الطبية التي يقدمها المستخدم طوعًا",
                "بيانات التصفح واستخدام الموقع",
              ]}
            />
          </Card>

          <Card
            icon={<ClipboardList className="text-primary" />}
            title="استخدام البيانات"
          >
            <List
              items={[
                "حجز وإدارة المواعيد الطبية",
                "التواصل مع المرضى",
                "تحسين جودة الخدمات والموقع الإلكتروني",
                "الامتثال للمتطلبات النظامية والتنظيمية",
              ]}
            />
          </Card>

          <Card
            icon={<Lock className="text-primary" />}
            title="حماية البيانات"
          >
            <p className="leading-8 text-slate-600">
              نتخذ التدابير التقنية والإدارية المناسبة لحماية البيانات
              الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف.
            </p>
          </Card>

          <Card
            icon={<Scale className="text-primary" />}
            title="مشاركة البيانات"
          >
            <List
              items={[
                "بموافقة صاحب البيانات.",
                "عند وجود متطلب نظامي أو قضائي.",
                "للجهات الصحية المختصة عند الحاجة.",
              ]}
            />
          </Card>

          <Card
            icon={<UserCheck className="text-primary" />}
            title="حقوق المستخدم"
          >
            <List
              items={[
                "الاطلاع على البيانات الشخصية.",
                "طلب تصحيح البيانات.",
                "طلب تحديث البيانات.",
                "الاستفسار عن كيفية معالجة البيانات.",
              ]}
            />
          </Card>

          <Card
            icon={<FileText className="text-primary" />}
            title="التعديلات"
          >
            <p className="leading-8 text-slate-600">
              يحتفظ المجمع بحق تعديل سياسة الخصوصية في أي وقت، ويتم نشر النسخة
              المحدثة عبر الموقع الإلكتروني.
            </p>
          </Card>
        </div>

        {/* Rights */}

        <Section
          icon={<HeartHandshake className="h-7 w-7 text-emerald-600" />}
          title="حقوق وواجبات المريض"
        >
          <p className="text-slate-600 leading-8">
            تحرص مجموعة سند الجزيرة الطبية على تقديم خدمات صحية عالية الجودة مع
            الحفاظ على حقوق المرضى وتعزيز مسؤولياتهم.
          </p>
        </Section>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card
            icon={<BadgeCheck className="text-emerald-600" />}
            title="حقوق المريض"
          >
            <NumberList
              items={[
                "الحصول على الرعاية الصحية المناسبة دون تمييز.",
                "المعاملة باحترام وكرامة.",
                "الحفاظ على خصوصية وسرية المعلومات الطبية.",
                "معرفة اسم الطبيب المعالج والمؤهلين المشاركين في الرعاية.",
                "الحصول على شرح واضح للحالة الصحية والخطة العلاجية.",
                "الموافقة أو الرفض للإجراءات الطبية وفق الأنظمة.",
                "معرفة التكاليف والخدمات المقدمة.",
                "تقديم الشكاوى والملاحظات.",
                "الحصول على نسخة من التقارير الطبية.",
              ]}
            />
          </Card>

          <Card
            icon={<UserCheck className="text-emerald-600" />}
            title="واجبات المريض"
          >
            <NumberList
              items={[
                "تقديم معلومات صحية صحيحة وكاملة.",
                "الالتزام بالخطة العلاجية.",
                "الالتزام بالمواعيد وإبلاغ المجمع عند الإلغاء.",
                "احترام العاملين والمرضى الآخرين.",
                "المحافظة على ممتلكات المجمع.",
                "الالتزام بالأنظمة والتعليمات.",
                "الوفاء بالالتزامات المالية.",
              ]}
            />
          </Card>
        </div>

        {/* Complaints */}

        <Section
          icon={<Phone className="h-7 w-7 text-primary" />}
          title="الشكاوى والاقتراحات"
        >
          <div className="rounded-3xl bg-sky-50 border border-sky-100 p-8">
            <p className="text-slate-600 leading-8">
              يمكن للمرضى تقديم الشكاوى أو المقترحات عبر قنوات التواصل الرسمية
              الخاصة بالمجمع، وسيتم التعامل معها بسرية ومهنية.
            </p>
          </div>
        </Section>

        {/* Terms */}

        <Section
          icon={<ScrollText className="h-7 w-7 text-primary" />}
          title="الشروط والأحكام"
        >
          <div className="space-y-6">
            <CardSimple
              title="استخدام الموقع"
              text="يستخدم الموقع لأغراض الاطلاع على الخدمات الطبية وحجز المواعيد والتواصل مع المجمع."
            />

            <CardSimple
              title="دقة المعلومات"
              text="يبذل المجمع كافة الجهود لتوفير معلومات دقيقة ومحدثة، إلا أنه لا يضمن خلو الموقع من الأخطاء أو الانقطاعات التقنية."
            />

            <CardSimple
              title="حجز المواعيد"
              text="يخضع حجز المواعيد لتوفر المواعيد الفعلية، ويحق للمجمع تعديل أو إعادة جدولة المواعيد عند الضرورة، كما يجب على المريض التأكد من صحة البيانات المدخلة."
            />

            <CardSimple
              title="الملكية الفكرية"
              text="جميع النصوص والشعارات والصور والمحتويات المنشورة على الموقع مملوكة للمجمع أو مرخص باستخدامها، ولا يجوز نسخها أو إعادة استخدامها دون موافقة مسبقة."
            />
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

          <p className="leading-7 text-prima'ry">{item}</p>
        </li>
      ))}
    </ol>
  );
}