"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeartPulse, Stethoscope, Baby, Users, Sparkles, Smile, Ear } from "lucide-react";

type Lang = "ar" | "en";

type FaqItem = {
  q: { ar: string; en: string };
  a: { ar: string; en: string };
};

type FaqCategory = {
  title: { ar: string; en: string };
  icon: typeof HeartPulse;
  items: FaqItem[];
};

const faqCategories: FaqCategory[] = [
  {
    title: { ar: "السكري والقلب والأمراض المزمنة", en: "Diabetes, Heart & Chronic Conditions" },
    icon: HeartPulse,
    items: [
      {
        q: { ar: "أعراض مرض السكري المبكرة التي لا يجب تجاهلها.", en: "Early diabetes symptoms you shouldn't ignore." },
        a: {
          ar: "من أهم العلامات المبكرة العطش الشديد، كثرة التبول خصوصًا ليلاً، الشعور المستمر بالتعب، عدم وضوح الرؤية، بطء التئام الجروح، ونقصان الوزن غير المبرر. عند ملاحظة أكثر من عرض يُنصح بإجراء فحص للسكر التراكمي مبكرًا.",
          en: "Key early signs include excessive thirst, frequent urination especially at night, persistent fatigue, blurred vision, slow wound healing, and unexplained weight loss. If several symptoms appear together, an early HbA1c test is recommended.",
        },
      },
      {
        q: { ar: "الفرق بين السكري النوع الأول والنوع الثاني.", en: "The difference between Type 1 and Type 2 diabetes." },
        a: {
          ar: "النوع الأول مرض مناعي يظهر غالبًا في الطفولة أو الشباب وينتج عن توقف البنكرياس عن إفراز الإنسولين تمامًا، فيحتاج المريض لحقن الإنسولين مدى الحياة. أما النوع الثاني فيرتبط غالبًا بالسمنة ونمط الحياة، وتحدث فيه مقاومة للإنسولين، ويمكن التحكم فيه أحيانًا بالغذاء والرياضة وأدوية فموية.",
          en: "Type 1 is an autoimmune condition, usually appearing in childhood or youth, where the pancreas stops producing insulin entirely, requiring lifelong insulin injections. Type 2 is often linked to obesity and lifestyle, involves insulin resistance, and can sometimes be managed with diet, exercise, and oral medication.",
        },
      },
      {
        q: { ar: "أفضل نظام غذائي لمرضى السكري.", en: "The best diet plan for diabetic patients." },
        a: {
          ar: "يعتمد على تقليل الكربوهيدرات البسيطة والسكريات المكررة، والتركيز على الألياف والخضروات والبروتينات الخفيفة، وتقسيم الوجبات على مدار اليوم لتفادي ارتفاع أو انخفاض السكر المفاجئ. يفضل دائمًا وضع الخطة الغذائية بالتنسيق مع أخصائي تغذية أو طبيب الغدد الصماء.",
          en: "It focuses on reducing simple carbs and refined sugars, prioritizing fiber, vegetables, and lean protein, and spreading meals throughout the day to avoid sudden blood sugar spikes or drops. A dietitian or endocrinologist should ideally tailor the plan.",
        },
      },
      {
        q: { ar: "أسباب ارتفاع ضغط الدم وطرق الوقاية منه.", en: "Causes of high blood pressure and prevention methods." },
        a: {
          ar: "من أبرز الأسباب زيادة الوزن، الإفراط في تناول الملح، قلة الحركة، التدخين، والتوتر المستمر، بالإضافة إلى العامل الوراثي. تتضمن الوقاية ممارسة الرياضة بانتظام، تقليل الملح والدهون، الإقلاع عن التدخين، ومتابعة الضغط دوريًا خاصة بعد سن الأربعين.",
          en: "Main causes include excess weight, high salt intake, inactivity, smoking, chronic stress, and genetics. Prevention includes regular exercise, reducing salt and fat intake, quitting smoking, and routine blood pressure checks, especially after age 40.",
        },
      },
      {
        q: { ar: "متى يصبح ارتفاع الكوليسترول خطيرًا؟", en: "When does high cholesterol become dangerous?" },
        a: {
          ar: "يصبح خطيرًا عندما يرتفع الكوليسترول الضار (LDL) بشكل كبير أو ينخفض الكوليسترول الجيد (HDL)، مما يزيد خطر تصلب الشرايين والجلطات القلبية. الفحص الدوري كل سنة إلى سنتين، خصوصًا لمن لديهم تاريخ عائلي أو أمراض قلبية، يساعد على الاكتشاف المبكر.",
          en: "It becomes dangerous when bad cholesterol (LDL) rises significantly or good cholesterol (HDL) drops, increasing the risk of arterial hardening and heart attacks. Regular checks every 1–2 years, especially with a family history, aid early detection.",
        },
      },
      {
        q: { ar: "علامات أمراض القلب المبكرة.", en: "Early warning signs of heart disease." },
        a: {
          ar: "تشمل ضيق التنفس عند المجهود البسيط، ألم أو ضغط في الصدر، خفقان غير منتظم، تورم القدمين، والتعب السريع غير المعتاد. ظهور أي من هذه الأعراض يستدعي مراجعة طبيب القلب دون تأخير.",
          en: "These include shortness of breath with mild exertion, chest pain or pressure, irregular heartbeat, swollen feet, and unusual quick fatigue. Any of these signs warrant a prompt visit to a cardiologist.",
        },
      },
      {
        q: { ar: "الربو عند الأطفال وكيفية التعامل مع النوبات.", en: "Childhood asthma and how to handle attacks." },
        a: {
          ar: "يظهر الربو عادة بسعال ليلي متكرر، صفير أثناء التنفس، وضيق نفس عند المجهود أو البرد. عند حدوث نوبة يجب إبعاد الطفل عن المهيّج واستخدام البخاخ الموسّع للشعب حسب خطة الطبيب، والتوجه للطوارئ إذا لم يتحسن خلال دقائق أو زاد الضيق.",
          en: "Asthma typically presents with recurrent nighttime coughing, wheezing, and breathlessness with exertion or cold air. During an attack, remove the trigger, use the prescribed bronchodilator inhaler, and seek emergency care if there's no improvement within minutes.",
        },
      },
    ],
  },
  {
    title: { ar: "طب الأسرة والباطنية", en: "Family & Internal Medicine" },
    icon: Stethoscope,
    items: [
      {
        q: { ar: "متى تحتاج إلى مراجعة طبيب باطنية؟", en: "When should you see an internal medicine doctor?" },
        a: {
          ar: "عند استمرار أي عرض غير مبرر لأكثر من أسبوعين مثل الحمى المتكررة، آلام البطن، فقدان الوزن غير المقصود، أو التعب المزمن. كذلك يُفضل الفحص الدوري السنوي حتى بدون أعراض للاطمئنان على الصحة العامة.",
          en: "When any unexplained symptom persists over two weeks, such as recurrent fever, abdominal pain, unintended weight loss, or chronic fatigue. Annual check-ups are also recommended even without symptoms.",
        },
      },
      {
        q: { ar: "أسباب الإرهاق والتعب المستمر.", en: "Causes of persistent fatigue and exhaustion." },
        a: {
          ar: "قد يعود لأسباب بسيطة مثل قلة النوم أو سوء التغذية، أو لأسباب طبية مثل فقر الدم، قصور الغدة الدرقية، نقص فيتامين د أو ب12، أو التوتر النفسي المزمن. إذا استمر التعب رغم الراحة الكافية يُنصح بعمل تحاليل شاملة.",
          en: "It may stem from simple causes like poor sleep or nutrition, or medical ones like anemia, hypothyroidism, vitamin D or B12 deficiency, or chronic stress. If fatigue persists despite adequate rest, comprehensive lab tests are advised.",
        },
      },
      {
        q: { ar: "نقص فيتامين د وأعراضه الشائعة.", en: "Vitamin D deficiency and its common symptoms." },
        a: {
          ar: "يسبب نقصه الشعور بالإرهاق العام، آلام العظام والعضلات، ضعف المناعة، وتساقط الشعر أحيانًا. يشيع بسبب قلة التعرض لأشعة الشمس، ويُعالج بالمكملات بعد تأكيد النقص بتحليل الدم.",
          en: "Deficiency causes general fatigue, bone and muscle pain, weakened immunity, and sometimes hair loss. It's common due to limited sun exposure and is treated with supplements after a blood test confirms it.",
        },
      },
      {
        q: { ar: "فقر الدم: الأسباب والأعراض والعلاج.", en: "Anemia: causes, symptoms, and treatment." },
        a: {
          ar: "من أشهر أسبابه نقص الحديد أو فيتامين ب12 أو حمض الفوليك، وأحيانًا النزيف المزمن. تشمل الأعراض الشحوب، الدوخة، وسرعة ضربات القلب، والتعب العام. يعتمد العلاج على السبب، وغالبًا يشمل مكملات الحديد مع تعديل النظام الغذائي.",
          en: "Common causes include iron, B12, or folic acid deficiency, and sometimes chronic bleeding. Symptoms include paleness, dizziness, rapid heartbeat, and general fatigue. Treatment depends on the cause and often includes iron supplements plus dietary changes.",
        },
      },
      {
        q: { ar: "أسباب الدوخة المتكررة.", en: "Causes of recurrent dizziness." },
        a: {
          ar: "قد تنتج عن انخفاض ضغط الدم، اضطرابات الأذن الداخلية، الجفاف، فقر الدم، أو انخفاض سكر الدم. تكرار الدوخة يستدعي الفحص لتحديد السبب الدقيق خاصة إذا رافقها فقدان توازن أو تشوش رؤية.",
          en: "It may result from low blood pressure, inner ear disorders, dehydration, anemia, or low blood sugar. Recurrent dizziness warrants evaluation, especially if accompanied by loss of balance or blurred vision.",
        },
      },
      {
        q: { ar: "اضطرابات الغدة الدرقية.", en: "Thyroid gland disorders." },
        a: {
          ar: "تشمل فرط النشاط الذي يسبب فقدان وزن وخفقان وتوتر، وقصور النشاط الذي يسبب زيادة وزن وإرهاق وبرودة الجسم. يتم التشخيص بتحليل هرمونات TSH وT4 ويُعالج حسب النوع بالأدوية المناسبة.",
          en: "These include hyperthyroidism, causing weight loss, palpitations, and anxiety, and hypothyroidism, causing weight gain, fatigue, and feeling cold. Diagnosis is via TSH and T4 blood tests, with treatment tailored to the type.",
        },
      },
    ],
  },
  {
    title: { ar: "النساء والولادة", en: "Women's Health & Pregnancy" },
    icon: Baby,
    items: [
      {
        q: { ar: "أعراض تكيس المبايض.", en: "Symptoms of polycystic ovary syndrome (PCOS)." },
        a: {
          ar: "تشمل عدم انتظام الدورة الشهرية، زيادة نمو الشعر، حب الشباب، وزيادة الوزن، وأحيانًا صعوبة في الحمل. يُشخَّص بالفحص السريري والموجات الصوتية وتحليل الهرمونات.",
          en: "Symptoms include irregular periods, excess hair growth, acne, weight gain, and sometimes difficulty conceiving. Diagnosis involves a clinical exam, ultrasound, and hormone testing.",
        },
      },
      {
        q: { ar: "تأخر الحمل: متى يجب زيارة الطبيب؟", en: "Delayed pregnancy: when should you see a doctor?" },
        a: {
          ar: "يُنصح بمراجعة طبيب النساء إذا لم يحدث حمل بعد سنة من المحاولة المنتظمة للأزواج أقل من 35 عامًا، أو بعد 6 أشهر لمن تجاوزت 35 عامًا، لتقييم الأسباب المحتملة لدى الطرفين.",
          en: "It's advisable to see a gynecologist if pregnancy hasn't occurred after a year of regular attempts for couples under 35, or after 6 months for those over 35, to evaluate potential causes for both partners.",
        },
      },
      {
        q: { ar: "متابعة الحمل شهرًا بشهر.", en: "Monthly pregnancy monitoring." },
        a: {
          ar: "تشمل المتابعة فحوصات دورية للدم والضغط والوزن، وموجات صوتية لمتابعة نمو الجنين في مراحل محددة، بالإضافة لفحص السكري والفحص التفصيلي للتأكد من سلامة الأعضاء غالبًا بين الأسبوعين 18-22.",
          en: "Monitoring includes regular blood, blood pressure, and weight checks, scheduled ultrasounds to track fetal growth, a glucose test, and a detailed anomaly scan usually between weeks 18–22.",
        },
      },
      {
        q: { ar: "علامات الحمل المبكرة.", en: "Early signs of pregnancy." },
        a: {
          ar: "من أبرزها تأخر الدورة الشهرية، الغثيان الصباحي، تورم وحساسية الثديين، التعب الشديد، وكثرة التبول. تأكيد الحمل يكون بتحليل الدم أو الاختبار المنزلي متبوعًا بالموجات الصوتية.",
          en: "Key signs include a missed period, morning nausea, breast tenderness and swelling, extreme fatigue, and frequent urination. Confirmation is via a blood test or home test, followed by an ultrasound.",
        },
      },
      {
        q: { ar: "أفضل الفحوصات الدورية للمرأة.", en: "The best routine health checks for women." },
        a: {
          ar: "تشمل فحص عنق الرحم (باب سميرة) بشكل دوري، فحص الثدي السريري والماموجرام حسب العمر، تحليل فيتامين د والحديد، وفحص هرمونات الغدة الدرقية، بالإضافة لمتابعة صحة العظام مع التقدم بالعمر.",
          en: "These include regular Pap smears, clinical breast exams and mammograms based on age, vitamin D and iron testing, thyroid hormone checks, and bone health monitoring as women age.",
        },
      },
      {
        q: { ar: "اضطرابات الدورة الشهرية وأسبابها.", en: "Menstrual cycle disorders and their causes." },
        a: {
          ar: "قد تنتج عن اختلال الهرمونات، تكيس المبايض، التوتر النفسي، تغير الوزن الملحوظ، أو مشاكل في الرحم مثل الأورام الليفية. عدم الانتظام المستمر يستدعي الفحص لتحديد السبب والعلاج المناسب.",
          en: "These may result from hormonal imbalance, PCOS, psychological stress, significant weight changes, or uterine issues like fibroids. Persistent irregularity warrants evaluation to determine the cause and treatment.",
        },
      },
    ],
  },
  {
    title: { ar: "الأطفال", en: "Pediatrics" },
    icon: Users,
    items: [
      {
        q: { ar: "ارتفاع الحرارة عند الأطفال: متى تكون خطيرة؟", en: "Fever in children: when is it dangerous?" },
        a: {
          ar: "تُعتبر مقلقة إذا تجاوزت 38.5 درجة عند الرضع أقل من 3 أشهر، أو استمرت أكثر من 3 أيام، أو رافقها تشنجات، طفح جلدي، صعوبة تنفس، أو خمول شديد. في هذه الحالات يجب التوجه للطوارئ فورًا.",
          en: "It's concerning if it exceeds 38.5°C in infants under 3 months, lasts more than 3 days, or is accompanied by seizures, rash, breathing difficulty, or severe lethargy — these cases require immediate emergency care.",
        },
      },
      {
        q: { ar: "ضعف المناعة عند الأطفال.", en: "Weak immunity in children." },
        a: {
          ar: "يظهر بتكرار الإصابة بالعدوى أكثر من المعتاد، وبطء التعافي منها. من أسبابه سوء التغذية، نقص الفيتامينات، أو أحيانًا أسباب وراثية، ويحتاج تقييمًا طبيًا لتحديد السبب ووضع خطة تقوية مناسبة.",
          en: "It shows as more frequent infections than usual with slow recovery. Causes include poor nutrition, vitamin deficiencies, or sometimes genetic factors, requiring medical evaluation to determine the cause and treatment.",
        },
      },
      {
        q: { ar: "الحساسية الموسمية عند الأطفال.", en: "Seasonal allergies in children." },
        a: {
          ar: "تظهر بأعراض مثل العطس المتكرر، سيلان الأنف، وحكة العين، خصوصًا في فصلي الربيع والخريف. يساعد تجنب المهيّجات واستخدام مضادات الهيستامين الموصوفة من الطبيب في تخفيف الأعراض.",
          en: "Symptoms include frequent sneezing, runny nose, and itchy eyes, especially in spring and autumn. Avoiding triggers and using doctor-prescribed antihistamines helps relieve symptoms.",
        },
      },
      {
        q: { ar: "مشاكل التغذية وفقدان الشهية.", en: "Feeding problems and loss of appetite." },
        a: {
          ar: "قد تعود لأسباب نفسية، اضطرابات هضمية، أو حالات طبية مثل فقر الدم ونقص الزنك. يهم متابعة منحنى النمو ووزن الطفل بانتظام، ومراجعة الطبيب إذا استمر رفض الطعام أو تأثر النمو.",
          en: "This may stem from psychological factors, digestive issues, or medical conditions like anemia and zinc deficiency. Regularly tracking growth and weight is important, with a doctor's visit if food refusal or growth is affected.",
        },
      },
      {
        q: { ar: "جدول تطعيمات الأطفال وأهميته.", en: "The childhood vaccination schedule and its importance." },
        a: {
          ar: "يحمي جدول التطعيمات الطفل من أمراض خطيرة كشلل الأطفال والحصبة والسعال الديكي وغيرها، ويُبنى على جرعات في مواعيد محددة منذ الولادة حتى سن المراهقة. الالتزام بالمواعيد ضروري لضمان أعلى فعالية مناعية.",
          en: "The vaccination schedule protects children from serious diseases like polio, measles, and whooping cough, with doses given at specific ages from birth through adolescence. Following the schedule ensures maximum immune effectiveness.",
        },
      },
    ],
  },
  {
    title: { ar: "الجلدية والتجميل", en: "Dermatology & Cosmetics" },
    icon: Sparkles,
    items: [
      {
        q: { ar: "أسباب تساقط الشعر عند النساء والرجال.", en: "Causes of hair loss in men and women." },
        a: {
          ar: "تشمل الوراثة، اختلال الهرمونات، نقص الحديد أو فيتامين د، التوتر النفسي، وبعض الأمراض المزمنة مثل قصور الغدة الدرقية. يساعد تحديد السبب عبر التحاليل في اختيار العلاج الأنسب.",
          en: "Causes include genetics, hormonal imbalance, iron or vitamin D deficiency, psychological stress, and chronic conditions like hypothyroidism. Lab tests help identify the cause and guide the right treatment.",
        },
      },
      {
        q: { ar: "علاج حب الشباب وآثاره.", en: "Treating acne and its scars." },
        a: {
          ar: "يشمل العلاج كريمات موضعية، أدوية فموية في الحالات الشديدة، وجلسات تقشير أو ليزر لعلاج الآثار المتبقية بعد التئام الحبوب. يُفضل استشارة طبيب جلدية لتحديد الخطة حسب شدة الحالة.",
          en: "Treatment includes topical creams, oral medication for severe cases, and peeling or laser sessions to treat residual scars. A dermatologist should tailor the plan based on severity.",
        },
      },
      {
        q: { ar: "الأكزيما: الأسباب والعلاج.", en: "Eczema: causes and treatment." },
        a: {
          ar: "ترتبط الأكزيما غالبًا بالحساسية والعامل الوراثي وجفاف البشرة، وتزداد مع التوتر أو تغير الطقس. يعتمد العلاج على مرطبات مكثفة، كريمات كورتيزون موضعية عند الحاجة، وتجنب المهيّجات المعروفة.",
          en: "Eczema is often linked to allergies, genetics, and dry skin, worsening with stress or weather changes. Treatment relies on intensive moisturizing, topical cortisone creams when needed, and avoiding known triggers.",
        },
      },
      {
        q: { ar: "التصبغات الجلدية وكيفية الوقاية منها.", en: "Skin pigmentation and how to prevent it." },
        a: {
          ar: "تنتج غالبًا عن التعرض للشمس، التغيرات الهرمونية، أو التهابات الجلد السابقة. تشمل الوقاية استخدام واقي الشمس يوميًا، وتجنب التعرض المباشر لأشعة الشمس في أوقات الذروة، مع كريمات موضعية لتفتيح التصبغات الموجودة.",
          en: "It's often caused by sun exposure, hormonal changes, or prior skin inflammation. Prevention includes daily sunscreen, avoiding peak sun hours, and topical creams to lighten existing pigmentation.",
        },
      },
      {
        q: { ar: "الفرق بين البوتوكس والفيلر.", en: "The difference between Botox and fillers." },
        a: {
          ar: "البوتوكس يعمل على إرخاء العضلات لتقليل خطوط التعبير كخطوط الجبهة والعين، بينما الفيلر يُستخدم لملء الفراغات وإضافة حجم كالخدود والشفاه. كلاهما إجراء تجميلي مؤقت يحتاج لتكرار دوري.",
          en: "Botox relaxes muscles to reduce expression lines like forehead and eye wrinkles, while filler adds volume to fill areas like cheeks and lips. Both are temporary cosmetic procedures requiring periodic repetition.",
        },
      },
    ],
  },
  {
    title: { ar: "الأسنان", en: "Dentistry" },
    icon: Smile,
    items: [
      {
        q: { ar: "أسباب حساسية الأسنان.", en: "Causes of tooth sensitivity." },
        a: {
          ar: "تحدث غالبًا بسبب تآكل طبقة المينا، تراجع اللثة، تسوس الأسنان، أو استخدام معجون أسنان خشن. تقليل الأطعمة الحمضية واستخدام معجون مخصص للأسنان الحساسة يساعد في تخفيفها.",
          en: "It's often caused by enamel erosion, gum recession, cavities, or using an abrasive toothpaste. Reducing acidic foods and using sensitivity toothpaste helps relieve it.",
        },
      },
      {
        q: { ar: "متى تحتاج إلى سحب العصب؟", en: "When do you need a root canal?" },
        a: {
          ar: "يُلجأ لسحب العصب عند وصول التسوس أو الالتهاب إلى لُب السن مسببًا ألمًا شديدًا مستمرًا أو تورمًا وخراجًا. يهدف العلاج للحفاظ على السن بدل خلعه بعد إزالة الأنسجة الملتهبة.",
          en: "A root canal is needed when decay or infection reaches the tooth's pulp, causing severe persistent pain, swelling, or an abscess. It aims to save the tooth instead of extracting it, after removing the inflamed tissue.",
        },
      },
      {
        q: { ar: "طرق الوقاية من تسوس الأسنان.", en: "Ways to prevent tooth decay." },
        a: {
          ar: "تشمل تنظيف الأسنان مرتين يوميًا بمعجون يحتوي على الفلورايد، استخدام الخيط الطبي، تقليل السكريات، والمتابعة الدورية مع طبيب الأسنان كل 6 أشهر للكشف المبكر.",
          en: "These include brushing twice daily with fluoride toothpaste, flossing, reducing sugar intake, and regular dental check-ups every 6 months for early detection.",
        },
      },
      {
        q: { ar: "تقويم الأسنان: الأنواع والمميزات.", en: "Braces: types and features." },
        a: {
          ar: "تتنوع بين التقويم المعدني التقليدي الأكثر فعالية للحالات المعقدة، والتقويم الشفاف الأقل ظهورًا والمناسب للحالات البسيطة والمتوسطة. يحدد طبيب التقويم النوع الأنسب حسب حالة الأسنان والفكين.",
          en: "Options range from traditional metal braces, most effective for complex cases, to clear aligners, less visible and suited to mild-to-moderate cases. An orthodontist determines the best fit based on the teeth and jaw condition.",
        },
      },
    ],
  },
  {
    title: { ar: "الأنف والأذن والحنجرة", en: "ENT (Ear, Nose & Throat)" },
    icon: Ear,
    items: [
      {
        q: { ar: "أسباب التهاب اللوز المتكرر.", en: "Causes of recurrent tonsillitis." },
        a: {
          ar: "ينتج غالبًا عن عدوى فيروسية أو بكتيرية متكررة، ضعف المناعة، أو تضخم اللوزتين بشكل مزمن يجعلهما عرضة للالتهاب. عند تكرار الالتهاب أكثر من عدة مرات سنويًا قد ينصح الطبيب باستئصالها.",
          en: "It's often caused by recurrent viral or bacterial infections, weak immunity, or chronically enlarged tonsils prone to inflammation. If it recurs several times a year, a doctor may recommend removal.",
        },
      },
      {
        q: { ar: "حساسية الجيوب الأنفية.", en: "Sinus allergies." },
        a: {
          ar: "تسبب انسدادًا في الأنف، صداعًا، وثقلاً في الوجه نتيجة التهاب مخاطية الجيوب بسبب مسببات الحساسية أو التغيرات الجوية. يساعد غسول الأنف الملحي ومضادات الهيستامين في تخفيف الأعراض.",
          en: "This causes nasal congestion, headaches, and facial pressure due to inflamed sinus lining from allergens or weather changes. Saline nasal rinses and antihistamines help relieve symptoms.",
        },
      },
      {
        q: { ar: "الشخير وانقطاع التنفس أثناء النوم.", en: "Snoring and sleep apnea." },
        a: {
          ar: "الشخير المصحوب بتوقف مؤقت للتنفس أثناء النوم قد يشير لانقطاع النفس الانسدادي، وهو ما يؤثر على جودة النوم والقلب على المدى الطويل. يُشخَّص عبر دراسة النوم ويُعالج حسب الشدة بتغيير نمط الحياة أو أجهزة التنفس المساعدة.",
          en: "Snoring with temporary breathing pauses may indicate obstructive sleep apnea, affecting sleep quality and long-term heart health. It's diagnosed via a sleep study and treated based on severity with lifestyle changes or breathing devices.",
        },
      },
      {
        q: { ar: "ضعف السمع عند الأطفال والكبار.", en: "Hearing loss in children and adults." },
        a: {
          ar: "عند الأطفال قد يكون خلقيًا أو ناتجًا عن التهابات الأذن المتكررة، بينما عند الكبار يرتبط غالبًا بالتقدم في العمر أو التعرض للضوضاء. الكشف المبكر بفحص السمع يساعد في العلاج المناسب سواء بالأدوية أو المعينات السمعية.",
          en: "In children it may be congenital or due to recurrent ear infections, while in adults it's often linked to aging or noise exposure. Early detection through a hearing test helps guide treatment, whether medication or hearing aids.",
        },
      },
    ],
  },
];

const uiText = {
  ar: {
    badge: "الأسئلة الشائعة",
    faqTitle: "الأسئلة الطبية الأكثر شيوعًا",
    faqSubtitle: "إجابات موثوقة من فريقنا الطبي على الأسئلة الأكثر تكرارًا من مرضانا، مصنّفة حسب التخصص",
    questionsCountSuffix: "سؤال",
  },
  en: {
    badge: "FAQ",
    faqTitle: "Most Common Medical Questions",
    faqSubtitle: "Trusted answers from our medical team to the questions patients ask most, organized by specialty",
    questionsCountSuffix: "questions",
  },
};

export default function FaqSection({ locale }: { locale: Lang }) {
  const isRTL = locale === "ar";
  const t = uiText[locale];
  const [activeCategory, setActiveCategory] = useState(0);

  const active = faqCategories[activeCategory];
  const ActiveIcon = active.icon;

  return (
    <section className="container mx-auto px-4 py-20" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#dc3433]/10 text-[#dc3433] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {t.badge}
          </span>
          <h2 className="text-4xl font-bold text-primary2">{t.faqTitle}</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">{t.faqSubtitle}</p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {faqCategories.map((cat, idx) => {
            const CatIcon = cat.icon;
            const isActive = idx === activeCategory;
            return (
              <button
                key={cat.title.ar}
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold whitespace-nowrap transition-all duration-300 border-2 cursor-pointer ${
                  isActive
                    ? "bg-[#dc3433] border-[#dc3433] text-white shadow-lg shadow-[#dc3433]/30 scale-105"
                    : "bg-white border-slate-200 text-slate-600 hover:border-[#dc3433]/40 hover:text-[#dc3433]"
                }`}
              >
                <CatIcon size={18} />
                {cat.title[locale]}
              </button>
            );
          })}
        </div>

        {/* Active category panel */}
        <div className="bg-white rounded-[32px] border border-slate-100 shadow-lg overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-5 bg-slate-50 border-b border-slate-100">
            <div className="w-11 h-11 rounded-xl bg-[#dc3433]/10 flex items-center justify-center flex-shrink-0">
              <ActiveIcon size={22} className="text-[#dc3433]" />
            </div>
            <h3 className="font-bold text-primary2 text-lg flex-1">{active.title[locale]}</h3>
            <span className="text-sm text-slate-400 flex-shrink-0">
              {active.items.length} {t.questionsCountSuffix}
            </span>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {active.items.map((item, index) => (
              <AccordionItem
                key={item.q.ar}
                value={`item-${activeCategory}-${index}`}
                className="border-b last:border-b-0 px-2"
              >
                <AccordionTrigger className="px-6 text-left text-base md:text-lg font-semibold hover:no-underline">
                  <span className={`flex items-start gap-3 flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#dc3433]/10 text-[#dc3433] text-sm font-bold flex items-center justify-center mt-0.5">
                      {index + 1}
                    </span>
                    <span>{item.q[locale]}</span>
                  </span>
                </AccordionTrigger>

                <AccordionContent className="px-6 text-slate-600 leading-7 ps-16">
                  {item.a[locale]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
