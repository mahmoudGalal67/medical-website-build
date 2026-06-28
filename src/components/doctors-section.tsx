"use client";


interface Doctor {
  id: number;
  name: string;
  title: string;
  specialty: string;
  clinic: string;
  image: string;
  branch: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "د. شيماء شمخ ",
    title: "عضو الكلية الملكية ببريطانيا.",
    specialty: "",
    clinic: "عيادة النساء والولادة",
    image:
      "/doctors/doctor1.jpg",
      branch:'سند الجزيرة'
  },
  {
    id: 2,
    name: "دكتورة سماح بلتاجي",
    title: "حاصلة على شهادة ADA لتجميل الأسنان",
    specialty: "",
    clinic: "عيادة الأسنان",
    image:
     "/doctors/doctor2.jpg",
    branch:'  دار الهدا'

  },
  {
    id: 3,
   name: "دكتورة رشا نجيب",
    title: "ماجستير النساء والتوليد – جامعة الأزهر.",
    specialty: "",
    clinic: " عيادة النساء والتوليد",
    image:
     "/doctors/doctor3.jpg",
           branch:'سند الجزيرة'

  },
  {
    id: 4,
    name: "د. سارة عمارة",
    title: "أخصائية طب وجراحة العيون",
    specialty: "",
    clinic: "عيادة  الليزر",
    image:
      "/doctors/doctor4.jpg",
       branch:'سند الجزيرة'

  },
  {
    id: 5,
    name: "دكتورة فاطمة الخليل",
    title: "بكالوريوس طب وجراحة",
    specialty: "",
    clinic: "أخصائية بشرة ",
    image:
      "/doctors/doctor5.jpg",
            branch:' دار الخيال'

  },
  {
    id: 6,
    name: "ايمان حمدان مسلم مرسي",
    title: "بكالوريوس  طب الفم وتجميل الأسنان",
    specialty: "",
    clinic: "عيادة الأسنان",
    image:
      "/doctors/doctor6.jpg",
           branch:'سند الجزيرة'

  },
];

function BrandLogo() {
  return (
    <div className="absolute top-4 right-4 w-10 h-10 rounded-full border-2 border-white flex items-center justify-center z-10">
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
          fill="currentColor"
        />
        <path
          d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
          fill="currentColor"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}

function WatermarkText ({title} :{title:string}) {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden pointer-events-none select-none h-28">
      <span
        className="text-[48px] font-black tracking-widest uppercase leading-none"
        style={{
          color: "transparent",
          WebkitTextStroke: "1.5px rgba(180,120,220,0.35)",
          letterSpacing: "0.1em",
          fontFamily: "Arial Black, sans-serif",
        }}
      >
{title}
</span>
    </div>
  );
}

function SocialButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="w-9 h-9 rounded-full border-2 border-white/60 flex items-center justify-center text-white hover:border-white hover:text-white transition-colors duration-200">
      {icon}
    </button>
  );
}

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden shadow-2xl" style={{ background: "#367F8B" }}>
      {/* Top image area */}
      <div className="relative" style={{ background: "#367F8B", minHeight: 350 }}>
        <BrandLogo />

        {/* Doctor photo with gold circle background */}
        <div className="flex items-end justify-center pt-10 pb-0 relative z-10">
          <div
            className="relative"
            style={{
              width: 320,
              height: 240,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            {/* Gold circle */}
            <div
              className="absolute rounded-full"
              style={{
                width: 280,
                height: 280,
                background: "#002125",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            {/* Doctor image */}
            <img
              src={doctor.image}
              alt={doctor.name}
              className="relative z-10 object-cover object-top rounded-full"
              style={{
                width: 280,
                height: 280,
              }}
            />
          </div>
        </div>

        {/* Watermark */}
        <WatermarkText title={doctor.branch} />
      </div>

      {/* Divider */}
      <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.15)" }} />

      {/* Bottom info area */}
      <div
        className="flex flex-col items-center text-center px-5 pt-5 pb-6 gap-2"
        style={{ background: "#176773", direction: "rtl" }}
      >
        <h3 className="text-white font-bold text-lg leading-snug">{doctor.name}</h3>
        <p className="text-white/90 text-sm leading-relaxed">{doctor.title}</p>
        {doctor.specialty && (
          <p className="text-white/80 text-sm leading-relaxed">{doctor.specialty}</p>
        )}
        <p className="text-white/80 text-sm mt-1">{doctor.clinic}</p>

        {/* Social icons */}
        {/* <div className="flex gap-3 mt-3" style={{ direction: "ltr" }}>
          <SocialButton icon={<Facebook size={15} />} />
          <SocialButton icon={<Twitter size={15} />} />
          <SocialButton icon={<Linkedin size={15} />} />
        </div> */}
      </div>
    </div>
  );
}

export default function DoctorsSection() {
  return (
    <section
      className="w-full min-h-screen py-16 px-4"
      style={{ background: "#A6DAE3" }}
    >
      <h2 className="text-2xl text-primary text-center mb-12">الفريق الطبي</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
}

