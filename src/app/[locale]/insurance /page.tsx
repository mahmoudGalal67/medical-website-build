"use client";

import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Search,
  Building2,
  MessageCircle,
} from "lucide-react";

type Lang = "ar" | "en";

type Branch = {
  id: string;
  logo: string;
  nameAr: string;
  nameEn: string;
  companies: string[];
};

const insurerLogos: Record<string, string> = {
  BUPA: "/insurers/bupa.png",
  TAWUNIYA: "/insurers/tawuniya.png",
  MEDGULF: "/insurers/medgulf.png",
  MALATH: "/insurers/malath.png",
  SAICO: "/insurers/saico.png",
  "ALRAJHI TAKAFUL": "/insurers/alrajhi-takaful.png",
  TCS: "/insurers/tcs.png",
  "AL-ETIHAD": "/insurers/al-etihad.png",
  GLOBMED: "/insurers/globmed.png",
  "ARABIAN SHIELD": "/insurers/arabian-shield.png",
  WALAA: "/insurers/walaa.png",
};

const branches: Branch[] = [
  {
    id: "tuwaiq",
    logo: "/branches/sanad.png",
    nameAr: "مجمع سند الجزيرة - فرع طويق",
    nameEn: "Sanad Al Jazeera - Tuwaiq Branch",
    companies: [
      "BUPA",
      "TAWUNIYA",
      "MEDGULF",
      "MALATH",
      "SAICO",
      "ALRAJHI TAKAFUL",
      "TCS",
      "AL-ETIHAD",
      "GLOBMED",
      "ARABIAN SHIELD",
      "WALAA",
    ],
  },
  {
    id: "dar-alkhayal",
    logo: "/branches/khayalLogo.png",
    nameAr: "مجمع دار الخيال الطبي",
    nameEn: "Dar Al-Khayal Medical Complex",
    companies: [
      "TAWUNIYA",
      "MEDGULF",
      "MALATH",
      "SAICO",
      "ALRAJHI TAKAFUL",
      "TCS",
      "AL-ETIHAD",
      "ARABIAN SHIELD",
      "WALAA",
    ],
  },
  {
    id: "mahdiyah",
    logo: "/branches/sanad.png",
    nameAr: "مجمع سند الجزيرة - فرع المهدية",
    nameEn: "Sanad Al Jazeera - Al Mahdiyah Branch",
    companies: ["TAWUNIYA", "SAICO", "ALRAJHI TAKAFUL", "ARABIAN SHIELD", "WALAA"],
  },
  {
    id: "laban",
    logo: "/branches/sanad.png",
    nameAr: "مجمع سند الجزيرة - فرع لبن",
    nameEn: "Sanad Al Jazeera - Laban Branch",
    companies: ["ARABIAN SHIELD", "WALAA"],
  },
  {
    id: "aljazeera-care",
    logo: "/branches/carelogo.png",
    nameAr: "مجمع الجزيرة كير الطبي",
    nameEn: "Al Jazeera Care Medical Complex",
    companies: [],
  },
  {
    id: "dar-alhoda",
    logo: "/branches/hoda.png",
    nameAr: "مجمع دار الهدا الطبي",
    nameEn: "Dar Al-Hoda Medical Complex",
    companies: [],
  },
];

const content = {
  ar: {
    heroBadge: "شركات التأمين المتعاقدة",
    heroTitle: "التأمينات",
    heroDescription:
      "نوفر خدماتنا الطبية بالتعاون مع أفضل شركات التأمين، اختر فرعك بالأسفل لمعرفة شركات التأمين المقبولة لديه.",

    searchLabel: "ابحث عن شركة تأمينك",
    searchPlaceholder: "اكتب اسم شركة التأمين، مثال: TAWUNIYA",
    searchFoundPrefix: "شركتك مقبولة في:",
    searchNotFound: "لم يتم العثور على شركة تطابق بحثك — تواصل معنا للتأكد.",

    branchesTitle: "الفروع وشركات التأمين",
    branchesDescription: "اضغط على الفرع لعرض شركات التأمين المتعاقد معها",
    companiesCountSuffix: "شركة تأمين متعاقدة مع هذا الفرع",
    comingSoon: "قائمة شركات التأمين قيد التحديث",
    comingSoonBadge: "قريبًا",

    ctaTitle: "لم تجد شركة تأمينك ضمن القائمة؟",
    ctaDescription: "تواصل معنا وسنساعدك في معرفة أقرب خيار متاح لك",
    chat: "تحدث معنا",
  },
  en: {
    heroBadge: "Our Insurance Partners",
    heroTitle: "Insurance",
    heroDescription:
      "We provide our medical services in partnership with leading insurance companies. Choose your branch below to see accepted providers.",

    searchLabel: "Search for your insurance company",
    searchPlaceholder: "Type a company name, e.g. TAWUNIYA",
    searchFoundPrefix: "Your company is accepted at:",
    searchNotFound: "No matching company found — contact us to confirm.",

    branchesTitle: "Branches & Insurance Companies",
    branchesDescription: "Select a branch to see its accepted insurance companies",
    companiesCountSuffix: "insurance companies accepted at this branch",
    comingSoon: "Insurance list coming soon",
    comingSoonBadge: "Coming soon",

    ctaTitle: "Can't find your insurance company?",
    ctaDescription: "Contact us and we'll help you find the closest available option",
    chat: "Chat With Us",
  },
};

export default function InsurancePage() {
  const params = useParams();
  const locale: Lang = params.locale === "en" ? "en" : "ar";
  const isRTL = locale === "ar";
  const t = content[locale];

  const [activeBranch, setActiveBranch] = useState(branches[0].id);
  const [query, setQuery] = useState("");

  const activeBranchData = branches.find((b) => b.id === activeBranch)!;

  const matches = useMemo(() => {
    const q = query.trim().toUpperCase();
    if (!q) return [];
    return branches.filter((b) => b.companies.some((c) => c.toUpperCase().includes(q)));
  }, [query]);

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50"
    >
      <section className="relative overflow-hidden">
        <div className="mx-auto px-6 py-24 lg:px-8 bg-gradient-to-br from-primary via-primary to-primary2">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 px-4 py-2 text-sm font-medium text-white">
              <ShieldCheck size={16} />
              {t.heroBadge}
            </span>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-primary2 lg:text-5xl">
              {t.heroTitle}
            </h1>

            <p className="mt-6 text-lg leading-8 text-white">{t.heroDescription}</p>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8 -mt-10 relative z-10">
        <div className="mx-auto max-w-2xl bg-white rounded-3xl shadow-lg p-6 border border-slate-100">
          <label className="block mb-3 text-sm font-medium text-slate-700">
            {t.searchLabel}
          </label>
          <div className="relative">
            <Search
              size={18}
              className="absolute top-1/2 -translate-y-1/2 start-4 text-slate-400"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full rounded-xl border border-slate-200 ps-11 pe-4 py-3 outline-none focus:border-[#7A1F3D]"
            />
          </div>

          {query.trim() !== "" && (
            <div className="mt-4 text-sm">
              {matches.length > 0 ? (
                <p className="text-slate-700">
                  {t.searchFoundPrefix}{" "}
                  <span className="inline-flex flex-wrap gap-2 align-middle mt-2">
                    {matches.map((b) => (
                      <span
                        key={b.id}
                        className="inline-block bg-[#7A1F3D]/10 text-[#7A1F3D] px-3 py-1 rounded-full font-semibold"
                      >
                        {locale === "ar" ? b.nameAr : b.nameEn}
                      </span>
                    ))}
                  </span>
                </p>
              ) : (
                <p className="text-slate-400">{t.searchNotFound}</p>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-800">{t.branchesTitle}</h2>
          <p className="mt-2 text-slate-500">{t.branchesDescription}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {branches.map((b) => {
            const isActive = b.id === activeBranch;
            return (
              <button
                key={b.id}
                onClick={() => setActiveBranch(b.id)}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#7A1F3D]/10 text-[#7A1F3D] ring-1 ring-[#7A1F3D]/30"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
              >
                <span className="flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-100 h-14 w-14 shrink-0 overflow-hidden p-1.5">
                  <Image
                    src={b.logo}
                    alt={locale === "ar" ? b.nameAr : b.nameEn}
                    width={112}
                    height={112}
                    quality={100}
                    unoptimized
                    className="object-contain h-full w-full"
                  />
                </span>
                <span>{locale === "ar" ? b.nameAr : b.nameEn}</span>
                <span
                  className={`text-xs rounded-full px-2 py-0.5 font-bold ${
                    b.companies.length > 0
                      ? isActive
                        ? "bg-[#7A1F3D]/10 text-[#7A1F3D]"
                        : "bg-slate-100 text-slate-500"
                      : "bg-amber-50 text-amber-600"
                  }`}
                >
                  {b.companies.length > 0 ? b.companies.length : t.comingSoonBadge}
                </span>
              </button>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-5 bg-white rounded-2xl shadow-sm border p-5 mb-6">
            <span className="flex items-center justify-center bg-white rounded-2xl shadow-sm border border-slate-100 h-24 w-24 shrink-0 overflow-hidden p-2">
              <Image
                src={activeBranchData.logo}
                alt={locale === "ar" ? activeBranchData.nameAr : activeBranchData.nameEn}
                width={192}
                height={192}
                quality={100}
                unoptimized
                className="object-contain h-full w-full"
              />
            </span>
            <div>
              <p className="font-bold text-lg text-slate-800">
                {locale === "ar" ? activeBranchData.nameAr : activeBranchData.nameEn}
              </p>
              <p className="text-sm text-slate-500">
                {activeBranchData.companies.length > 0
                  ? `${activeBranchData.companies.length} ${t.companiesCountSuffix}`
                  : t.comingSoon}
              </p>
            </div>
          </div>

          {activeBranchData.companies.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {activeBranchData.companies.map((c) => (
                <div
                  key={c}
                  className="flex flex-col items-center justify-center gap-3 bg-white rounded-2xl border border-slate-100 p-6 h-40
                  transition-all duration-300 hover:border-[#7A1F3D]/40 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative w-full h-20 flex items-center justify-center">
                    <Image
                      src={insurerLogos[c]}
                      alt={c}
                      width={400}
                      height={180}
                      quality={100}
                      unoptimized
                      className="object-contain h-20 w-auto max-w-[90%]"
                    />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 text-center">
                    {c}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3 bg-amber-50 text-amber-700 rounded-2xl p-8 text-center">
              <Building2 size={20} />
              <span className="font-medium">{t.comingSoon}</span>
            </div>
          )}
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="mx-auto max-w-3xl bg-gradient-to-br from-[#7A1F3D] to-[#a12a52] text-white rounded-3xl p-8 text-center">
          <div className="flex items-center justify-center gap-2">
            <MessageCircle />
            <h3 className="font-bold text-lg">{t.ctaTitle}</h3>
          </div>
          <p className="mt-2 text-white/90">{t.ctaDescription}</p>
          <button
            className="mt-6 bg-white text-[#7A1F3D] font-bold py-3 px-8 rounded-xl
            transition-all duration-300 ease-in-out
            hover:scale-[1.02] hover:-translate-y-1 hover:bg-slate-100 hover:shadow-lg"
          >
            {t.chat}
          </button>
        </div>
      </section>
    </main>
  );
}
