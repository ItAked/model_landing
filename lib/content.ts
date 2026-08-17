export type Locale = "ar" | "en";

export const navItems = [
  { href: "/", labelAr: "الرئيسية", labelEn: "Home" },
  { href: "/about", labelAr: "من نحن", labelEn: "About" },
  { href: "/programs", labelAr: "البرامج", labelEn: "Programs" },
  { href: "/programs#pricing", labelAr: "الأسعار", labelEn: "Pricing" }
];

export const journeys = [
  {
    id: "fat-loss",
    titleAr: "رحلة خسارة الدهون",
    titleEn: "Fat Loss Journey",
    pointsAr: ["خسارة الوزن", "تقليل نسبة الدهون", "تحسين اللياقة", "الوصول إلى وزن صحي"],
    pointsEn: ["Weight loss", "Lower body fat", "Better fitness", "A healthier weight"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "sculpt",
    titleAr: "رحلة نحت وتنسيق الجسم",
    titleEn: "Body Sculpt Journey",
    pointsAr: ["شد الجسم", "إبراز المنحنيات", "تحسين القوام", "بناء جسم متناسق"],
    pointsEn: ["Toning", "Define curves", "Better posture", "A balanced physique"],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "strength",
    titleAr: "رحلة القوة وبناء العضلات",
    titleEn: "Strength Journey",
    pointsAr: ["زيادة القوة", "بناء العضلات", "رفع اللياقة", "تحسين الأداء البدني"],
    pointsEn: ["More strength", "Build muscle", "Raise fitness", "Better physical performance"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "lifestyle",
    titleAr: "رحلة نمط الحياة الصحي",
    titleEn: "Healthy Lifestyle Journey",
    pointsAr: ["تحسين الصحة العامة", "اكتساب عادات صحية", "المحافظة على النتائج", "زيادة النشاط اليومي"],
    pointsEn: ["Better overall health", "Build healthy habits", "Maintain results", "More daily energy"],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "pregnancy",
    titleAr: "رحلة الحمل الصحي",
    titleEn: "Pregnancy Journey",
    pointsAr: [
      "المحافظة على اللياقة",
      "تقليل آلام الظهر",
      "تقوية عضلات الحوض",
      "تحسين الحركة",
      "تحسين الطاقة",
      "الاستعداد للولادة",
      "التحكم بالزيادة المفرطة في الوزن"
    ],
    pointsEn: [
      "Maintain fitness",
      "Ease back pain",
      "Strengthen pelvic muscles",
      "Better mobility",
      "More energy",
      "Prepare for birth",
      "Manage excessive weight gain"
    ],
    image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "postpartum",
    titleAr: "رحلة ما بعد الولادة",
    titleEn: "Postpartum Journey",
    pointsAr: [
      "استعادة اللياقة",
      "شد الجسم",
      "علاج انفصال عضلات البطن",
      "تقوية عضلات قاع الحوض",
      "العودة للنشاط بأمان"
    ],
    pointsEn: [
      "Regain fitness",
      "Tone the body",
      "Support diastasis recovery",
      "Strengthen the pelvic floor",
      "Return to activity safely"
    ],
    image: "https://images.unsplash.com/photo-1470116945706-e6bf5d5a42ea?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "bariatric",
    titleAr: "رحلة التحول بعد التكميم",
    titleEn: "Post Bariatric Transformation",
    pointsAr: [
      "تقليل الترهلات وشد الجسم",
      "نحت وتنسيق القوام",
      "المحافظة على نتائج التكميم",
      "استعادة القوة واللياقة",
      "اكتساب نمط حياة صحي مستدام"
    ],
    pointsEn: [
      "Reduce sagging and tone",
      "Sculpt and balance the figure",
      "Protect bariatric results",
      "Regain strength and fitness",
      "Build a sustainable lifestyle"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "senior",
    titleAr: "رحلة صحة كبار السن",
    titleEn: "Senior Wellness Journey",
    pointsAr: ["تحسين التوازن", "زيادة القوة", "تحسين المرونة", "تحسين الحركة اليومية", "المحافظة على جودة الحياة"],
    pointsEn: ["Better balance", "More strength", "More flexibility", "Easier daily movement", "Protect quality of life"],
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "bridal",
    titleAr: "رحلة العروس",
    titleEn: "Bridal Journey",
    pointsAr: ["نحت الجسم", "شد الجسم", "تحسين اللياقة", "برنامج غذائي خاص", "خطة زمنية حسب موعد الزفاف"],
    pointsEn: ["Body sculpting", "Toning", "Better fitness", "A tailored nutrition plan", "A timeline around the wedding date"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
  },
] as const;

export const methods = [
  {
    id: "ems",
    title: "EMS Training",
    titleAr: "تدريب EMS",
    minutes: 20,
    bodyAr: "جلسات منزلية باستخدام تقنية التحفيز الكهربائي للعضلات.",
    bodyEn: "At-home sessions using electrical muscle stimulation.",
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f14f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "pt",
    title: "Personal Training",
    titleAr: "تدريب شخصي",
    minutes: 50,
    bodyAr: "جلسات تدريب شخصي منزلية مصممة وفق أهدافك.",
    bodyEn: "At-home personal training sessions designed around your goals.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "reformer",
    title: "Reformer Pilates",
    titleAr: "ريفورمر بيلاتس",
    minutes: 50,
    bodyAr: "جلسات منزلية باستخدام جهاز الريفورمر تركز على القوة والمرونة والتوازن.",
    bodyEn: "At-home reformer sessions focused on strength, flexibility, and balance.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
  }
] as const;

export const durations = [
  { id: "foundation", title: "Foundation", sessions: 12, weeks: 6 },
  { id: "progress", title: "Progress", sessions: 24, weeks: 12 },
  { id: "transformation", title: "Transformation", sessions: 36, weeks: 18 },
  { id: "lifestyle", title: "Lifestyle", sessions: 48, weeks: 24 }
] as const;

export const tiers = [
  {
    id: "signature",
    title: "Signature",
    subtitleAr: "التجربة الأساسية الكاملة",
    subtitleEn: "The complete core experience",
    bodyAr: `التجربة الأساسية الكاملة من Like A Model، وتشمل جميع خدمات الرحلة
    الأساسية المصممة لمساعدتك على الوصول لهدفك بطريقة مدروسة ومناسبة لأسلوب حياتك. مثالية لمن تبحث عن تجربة تدريب شخصية متكاملة.`,
    bodyEn: "The complete core Like A Model experience, including every essential journey service designed to help you reach your goal in a considered way that fits your lifestyle.",
    includesAr: [
      "جلسة تقييم احترافية",
      "تحليل مكونات الجسم (InBody)",
      "قياسات الجسم",
      "اختبار اللياقة",
      "برنامج تدريب مخصص",
      "برنامج غذائي مخصص",
      "متابعة عبر التطبيق",
      "متابعة المدربة خلال الرحلة",
      "إعادة تقييم عند انتهاء البرنامج"
    ],
    includesEn: [
      "Professional assessment session",
      "InBody composition analysis",
      "Body measurements",
      "Fitness test",
      "Custom training plan",
      "Custom nutrition plan",
      "In-app follow-up",
      "Coach follow-up throughout the journey",
      "Reassessment at the end of the program"
    ]
  },
  {
    id: "elite",
    title: "Elite",
    subtitleAr: "كل ما في Signature وأكثر",
    subtitleEn: "Everything in Signature, and more",
    bodyAr: "مثالية لمن ترغب في التركيز على النتائج دون القلق بشأن إعداد وجباتها اليومية.",
    bodyEn: "Ideal if you want to focus on results without worrying about daily meal prep.",
    extraAr: [
      "وجبات صحية يومية يتم توصيلها إلى منزلك",
      "تنسيق غذائي متكامل مع الوجبات",
      "متابعة أعلى للالتزام الغذائي",
      "مزايا وعروض شركاء Like A Model",
      "هدية ترحيبية"
    ],
    extraEn: [
      "Daily healthy meals delivered to your home",
      "Nutrition coordination with the meals",
      "Closer nutrition-adherence follow-up",
      "Like A Model partner perks",
      "A welcome gift"
    ]
  },
  {
    id: "private",
    title: "Private",
    subtitleAr: "أعلى مستوى من العناية",
    subtitleEn: "The highest level of care",
    bodyAr: "مصممة للسيدات اللواتي يبحثن عن أعلى مستوى من المتابعة والتخصيص والاهتمام بالتفاصيل.",
    bodyEn: "Designed for women who want the highest level of follow-up, personalization, and attention to detail.",
    extraAr: [
      "فحوصات وتحاليل طبية شاملة قبل بدء الرحلة",
      "مراجعة النتائج وربطها بالخطة التدريبية والغذائية",
      "مدير متابعة شخصي",
      "متابعة يومية",
      "أولوية مطلقة بالمواعيد",
      "خدمات VIP حصرية",
      "هدايا وتجارب خاصة"
    ],
    extraEn: [
      "Comprehensive medical tests before the journey",
      "Results reviewed and tied to training and nutrition",
      "A personal journey manager",
      "Daily follow-up",
      "Absolute booking priority",
      "Exclusive VIP services",
      "Special gifts and experiences"
    ]
  }
] as const;

export type MethodId = (typeof methods)[number]["id"];
export type DurationId = (typeof durations)[number]["id"];
export type TierId = (typeof tiers)[number]["id"];

export const prices: Record<MethodId, Record<DurationId, Record<TierId, number>>> = {
  ems: {
    foundation: { signature: 2700, elite: 4200, private: 4900 },
    progress: { signature: 4590, elite: 7590, private: 8990 },
    transformation: { signature: 6480, elite: 10980, private: 13080 },
    lifestyle: { signature: 8100, elite: 14100, private: 16900 }
  },
  pt: {
    foundation: { signature: 3600, elite: 5100, private: 5800 },
    progress: { signature: 6120, elite: 9120, private: 10520 },
    transformation: { signature: 8640, elite: 13140, private: 15240 },
    lifestyle: { signature: 10800, elite: 16800, private: 19600 }
  },
  reformer: {
    foundation: { signature: 4200, elite: 5700, private: 6400 },
    progress: { signature: 7140, elite: 10140, private: 11540 },
    transformation: { signature: 10080, elite: 14580, private: 16680 },
    lifestyle: { signature: 12600, elite: 18600, private: 21400 }
  }
};

export const extraPrograms = [
  {
    id: "kids",
    titleAr: "برنامج لياقة الأطفال",
    titleEn: "Kids Fitness Program",
    bodyAr: "برنامج مصمم للأطفال لمساعدتهم على بناء نمط حياة صحي ونشط منذ الصغر.",
    bodyEn: "Designed to help children build a healthy, active lifestyle from an early age.",
    pointsAr: [
      "تعزيز النشاط البدني",
      "تحسين التوازن والتناسق الحركي",
      "تنمية القوة والمرونة بما يناسب العمر",
      "زيادة الثقة بالنفس",
      "تقليل الخمول وكثرة استخدام الأجهزة الإلكترونية",
      "غرس العادات الصحية والرياضية منذ الصغر"
    ],
    pointsEn: [
      "More physical activity",
      "Better balance and coordination",
      "Age-appropriate strength and flexibility",
      "More self-confidence",
      "Less inactivity and screen time",
      "Healthy sports habits from a young age"
    ],
    prices: { foundation: 2400, progress: 4080, transformation: 5760, lifestyle: 7200 },
    image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "dance",
    titleAr: "برنامج اللياقة بالرقص",
    titleEn: "Dance Fitness Program",
    bodyAr: "جلسات ممتعة تساعد على رفع النشاط وحرق السعرات بطريقة مختلفة.",
    bodyEn: "Enjoyable sessions that raise activity and burn calories in a different way.",
    pointsAr: [
      "زيادة النشاط البدني",
      "رفع معدل حرق السعرات",
      "تحسين المرونة والتوازن",
      "تعزيز الثقة بالنفس",
      "الاستمتاع بالرياضة بطريقة مختلفة"
    ],
    pointsEn: [
      "More physical activity",
      "Higher calorie burn",
      "Better flexibility and balance",
      "More confidence",
      "Enjoy sport in a different way"
    ],
    prices: { foundation: 3000, progress: 5100, transformation: 7200, lifestyle: 9000 },
    image: "https://images.unsplash.com/photo-1508807521370-02025ac42c58?auto=format&fit=crop&w=1200&q=80"
  }
] as const;

export const together = [
  {
    id: "friend",
    titleAr: "تدربي مع صديقة",
    titleEn: "Train with a friend",
    bodyAr: "شاركي رحلتك مع صديقتك واستمتعي بتجربة مليئة بالحماس والدعم المتبادل.",
    bodyEn: "Share your journey with a friend and enjoy mutual energy and support.",
    pointsAr: [
      "تحفيز وتشجيع مستمر بين الطرفين",
      "زيادة الالتزام بالحضور والاستمرارية",
      "مشاركة الإنجازات والنتائج",
      "أجواء تدريب أكثر متعة وحيوية",
      "تحديات مشتركة لرفع مستوى الحماس",
      "توفير خاص للتدريب الثنائي مقارنة بالاشتراكات الفردية",
      "متابعة التقدم لكل مشتركة بشكل مستقل",
      "إمكانية اختيار أهداف متشابهة أو مختلفة لكل مشتركة"
    ],
    pointsEn: [
      "Ongoing motivation between both of you",
      "Better attendance and consistency",
      "Shared wins and results",
      "More energetic sessions",
      "Shared challenges",
      "A duo rate versus separate plans",
      "Independent progress tracking",
      "Similar or different goals for each person"
    ]
  },
  {
    id: "spouse",
    titleAr: "تدربي مع زوجك",
    titleEn: "Train with your husband",
    bodyAr: "لأن التغيير الحقيقي يصبح أقوى عندما يكون أسلوب حياة مشترك.",
    bodyEn: "Because real change is stronger when it becomes a shared lifestyle.",
    pointsAr: [
      "بناء عادات صحية مشتركة",
      "دعم وتحفيز متبادل",
      "زيادة الالتزام بالبرنامج الغذائي والنشاط البدني",
      "تحقيق الأهداف الصحية كأسرة واحدة",
      "جلسات تدريب مرنة تناسب الطرفين",
      "تحسين جودة الحياة والنشاط اليومي",
      "تشجيع مستمر خارج أوقات الجلسات",
      "تجربة تدريبية مريحة داخل المنزل"
    ],
    pointsEn: [
      "Build shared healthy habits",
      "Mutual support and motivation",
      "Better nutrition and activity consistency",
      "Health goals as one household",
      "Flexible sessions for both",
      "Better daily energy and quality of life",
      "Encouragement beyond the session",
      "Comfortable at-home training"
    ]
  },
  {
    id: "family",
    titleAr: "تدربي مع أبنائك",
    titleEn: "Train with your children",
    bodyAr: "اجعلي الرياضة جزءاً من ثقافة الأسرة اليومية.",
    bodyEn: "Make movement part of your family’s everyday culture.",
    pointsAr: [
      "تعزيز العادات الصحية لدى الأبناء والبنات",
      "تقوية الروابط الأسرية من خلال نشاط مشترك",
      "تشجيع الأبناء والبنات على الحركة والنشاط",
      "تقليل الاعتماد على الأجهزة الإلكترونية",
      "بناء بيئة منزلية صحية ومحفزة",
      "تنمية الثقة بالنفس لدى الأبناء والبنات",
      "غرس أهمية الرياضة وأسلوب الحياة الصحي منذ الصغر",
      "خلق ذكريات وتجارب إيجابية داخل الأسرة",
      "تحويل الرياضة إلى عادة عائلية ممتعة ومستدامة",
      "تعزيز روح المشاركة والدعم بين أفراد الأسرة"
    ],
    pointsEn: [
      "Healthier habits for sons and daughters",
      "Stronger family bonds through shared activity",
      "Encourage children to move",
      "Less reliance on screens",
      "A healthier home environment",
      "More confidence for children",
      "Sport as a lifestyle from a young age",
      "Positive family memories",
      "Sport as a lasting family habit",
      "More support between family members"
    ]
  },
  {
    id: "kids-together",
    titleAr: "تدريب الأطفال المشترك",
    titleEn: "Kids training together",
    bodyAr: "لأن الرياضة تصبح أكثر متعة عندما يشاركها الأطفال مع أصدقائهم أو أشقائهم.",
    bodyEn: "Because sport is more fun when children share it with friends or siblings.",
    pointsAr: [
      "تعزيز الحماس والالتزام بالحضور",
      "تشجيع التفاعل الإيجابي بين الأطفال",
      "زيادة المتعة أثناء التدريب",
      "تنمية روح التعاون والمنافسة الصحية",
      "تحسين اللياقة والمهارات الحركية",
      "بناء الثقة بالنفس من خلال الأنشطة الجماعية",
      "تكوين عادات صحية مستدامة منذ الصغر",
      "إمكانية تدريب الأشقاء أو الأصدقاء في نفس الموعد"
    ],
    pointsEn: [
      "More excitement and attendance",
      "Positive interaction between children",
      "More fun during training",
      "Teamwork and healthy competition",
      "Better fitness and motor skills",
      "Confidence through group activity",
      "Lasting healthy habits from a young age",
      "Siblings or friends can train at the same time"
    ]
  }
] as const;

export const togetherPerksAr = [
  "مدربة واحدة لجميع المشاركين في نفس الموعد",
  "مرونة أكثر في تنسيق المواعيد",
  "توفير أكثر مقارنة بالاشتراكات المنفصلة",
  "متابعة فردية لكل مشترك ضمن البرنامج",
  "خطط تدريبية مخصصة لكل شخص حسب هدفه",
  "تقارير وقياسات مستقلة لكل مشترك",
  "تحفيز ومنافسة إيجابية بين المشاركين",
  "زيادة فرص الالتزام والاستمرارية",
  "تجربة أكثر متعة وتفاعلاً",
  "إمكانية مشاركة رحلة التحول والاحتفال بالإنجازات معاً"
];

export const togetherPerksEn = [
  "One coach for everyone at the same time",
  "More flexible scheduling",
  "Better value than separate plans",
  "Individual follow-up within the program",
  "A training plan for each person’s goal",
  "Independent reports and measurements",
  "Positive motivation between participants",
  "Better consistency",
  "A more engaging experience",
  "Share the journey and celebrate together"
];

export const includedAr = [
  "جلسة تقييم احترافية",
  "تحليل مكونات الجسم (InBody)",
  "قياسات الجسم",
  "اختبار اللياقة",
  "برنامج تدريب مخصص",
  "برنامج غذائي مخصص",
  "متابعة عبر التطبيق",
  "متابعة المدربة خلال الرحلة",
  "إعادة تقييم عند انتهاء البرنامج"
];

export const includedEn = [
  "Professional assessment session",
  "InBody composition analysis",
  "Body measurements",
  "Fitness test",
  "Custom training plan",
  "Custom nutrition plan",
  "In-app follow-up",
  "Coach follow-up throughout the journey",
  "Reassessment at the end of the program"
];

export const faqs = [
  {
    qAr: "ما هي Like A Model؟",
    aAr: `Like A Model هي رحلة تحول متكاملة مصممة خصيصاً لك. نرافقك
    نحو أسلوب حياة أكثر صحة وثقة وتوازناً من خلال تجربة تجمع بين التدريب الشخصي، والبرنامج الغذائي، والمتابعة المستمرة، وقياس النتائج. أسلوب حياة... وليست مجرد تدريب.`,
    qEn: "What is Like A Model?",
    aEn: `Like A Model is a complete transformation journey designed for you. We walk you toward a healthier, more confident, more balanced lifestyle through personal training, nutrition,
    continuous follow-up, and measured results. A lifestyle... not just training.`
  },
  {
    qAr: "كيف أبدأ رحلتي؟",
    aAr: `رحلتك تبدأ بأربع خطوات بسيطة: اختيار رحلة التحول المناسبة لهدفك، اختيار أسلوب التدريب المفضل لديك، اختيار مدة البرنامج، ثم اختيار مستوى التجربة المناسب لك. بعدها يقوم فريق
    Like A Model بتصميم رحلة تناسب أهدافك وأسلوب حياتك.`,
    qEn: "How do I start?",
    aEn: `Your journey starts in four simple steps: choose the transformation journey for your goal, choose your preferred training style, choose the program duration, then choose the
    experience level. After that, the Like A Model team designs a journey around your goals and lifestyle.`
  },
  {
    qAr: "ماذا يشمل الاشتراك؟",
    aAr: `جميع اشتراكات Like A Model تشمل جلسة تقييم احترافية، تحليل مكونات الجسم (InBody)، قياسات الجسم، اختبار اللياقة، برنامج تدريب مخصص، برنامج
    غذائي مخصص، متابعة عبر التطبيق، متابعة المدربة خلال الرحلة، وإعادة تقييم عند انتهاء البرنامج.`,
    qEn: "What does a membership include?",
    aEn: `Every Like A Model plan includes a professional assessment, InBody analysis, measurements, a fitness test, a custom training plan, a custom nutrition plan, in-app follow-up,
    coach support throughout, and a reassessment at the end.`
  },
  {
    qAr: "هل البرنامج الغذائي مشمول ضمن الاشتراك؟",
    aAr: "نعم. جميع برامج Like A Model تتضمن برنامجاً غذائياً مخصصاً يتم إعداده ومتابعته من قبل أخصائية تغذية وفق أهدافك واحتياجاتك ونمط حياتك.",
    qEn: "Is nutrition included?",
    aEn: "Yes. Every Like A Model program includes a custom nutrition plan prepared and followed by a dietitian according to your goals, needs, and lifestyle."
  },
  {
    qAr: "ما الفرق بين EMS وPersonal Training وReformer Pilates؟",
    aAr: `EMS جلسات منزلية بتقنية التحفيز الكهربائي للعضلات ومدتها 20 دقيقة. Personal Training جلسات تدريب شخصي منزلية مدتها 50 دقيقة. Reformer Pilates جلسات منزلية بجهاز الريفورمر تركز على
    القوة والمرونة والتوازن ومدتها 50 دقيقة.`,
    qEn: "What is the difference between EMS, Personal Training, and Reformer Pilates?",
    aEn: `EMS is an at-home electrical muscle stimulation session of 20 minutes. Personal Training is a 50-minute at-home session. Reformer Pilates is a 50-minute at-home reformer session
    focused on strength, flexibility, and balance.`
  },
  {
    qAr: "ما الفرق بين Signature وElite وPrivate؟",
    aAr: `Signature هي التجربة الأساسية المتكاملة وتشمل جميع الخدمات الأساسية اللازمة لبدء رحلتك. Elite تتضمن كل ما في Signature إضافة
    إلى الوجبات الصحية اليومية ومتابعة غذائية موسعة ومزايا الشركاء. Private هي أعلى مستويات الخصوصية والعناية والمتابعة الشخصية مع خدمات ومزايا حصرية مصممة خصيصاً لك.`,
    qEn: "What is the difference between Signature, Elite, and Private?",
    aEn: `Signature is the complete core experience. Elite includes everything in Signature plus daily healthy meals, deeper nutrition follow-up, and partner perks. Private is the highest
    level of privacy, care, and personal follow-up with exclusive services designed for you.`
  },
  {
    qAr: "هل التدريب مناسب للمبتدئات؟",
    aAr: "نعم. تم تصميم برامج Like A Model لتناسب جميع المستويات، سواء كنتِ في بداية رحلتك أو لديكِ خبرة سابقة.",
    qEn: "Is it suitable for beginners?",
    aEn: "Yes. Like A Model programs are designed for every level, whether you are just starting or already have experience."
  },
  {
    qAr: "هل يمكنني الاشتراك مع صديقة أو أحد أفراد أسرتي؟",
    aAr: "نعم. تتوفر برامج ومزايا خاصة للتدريب المشترك مع الصديقات أو الزوج أو أفراد الأسرة، مما يساعد على زيادة الالتزام والتحفيز والاستمتاع بالرحلة معاً. تبدأ خصومات التدريب المشترك من 25٪.",
    qEn: "Can I join with a friend or family member?",
    aEn: "Yes. There are shared-training programs and perks with friends, a spouse, or family, which helps consistency, motivation, and enjoyment. Shared-training savings start from 25%."
  },
  {
    qAr: "متى أبدأ بملاحظة النتائج؟",
    aAr: "تختلف النتائج من عميلة لأخرى بحسب الهدف ومستوى الالتزام، إلا أن معظم العميلات يبدأن بملاحظة تحسن في النشاط والطاقة والقياسات خلال الأسابيع الأولى من الرحلة.",
    qEn: "When will I notice results?",
    aEn: "Results vary by goal and consistency, but most clients start noticing better energy, activity, and measurements in the first weeks."
  },
  {
    qAr: "كيف تتم متابعة تقدمي؟",
    aAr: "نقوم بمتابعة رحلتك من خلال القياسات الدورية، مراجعة البرنامج الغذائي، تقييم مستوى الالتزام، متابعة النتائج والتطور، وإعادة التقييم بشكل دوري.",
    qEn: "How is my progress tracked?",
    aEn: "We follow your journey through periodic measurements, nutrition reviews, adherence checks, results tracking, and regular reassessment."
  },
  {
    qAr: "ماذا لو كان لدي إصابة أو حالة صحية خاصة؟",
    aAr: "يتم أخذ حالتك الصحية بعين الاعتبار قبل تصميم البرنامج لضمان أن تكون رحلتك مناسبة وآمنة ومتوافقة مع احتياجاتك.",
    qEn: "What if I have an injury or a special health condition?",
    aEn: "Your health is considered before the program is designed so the journey is suitable, safe, and aligned with your needs."
  },
  {
    qAr: "هل يمكن تغيير المدربة؟",
    aAr: "نعم. في حال وجود سبب يستدعي ذلك، يمكن التواصل مع فريق خدمة العملاء وسيتم دراسة الطلب وتقديم الحل المناسب.",
    qEn: "Can I change my coach?",
    aEn: "Yes. If there is a reason to do so, contact client care and the request will be reviewed with a suitable solution."
  },
  {
    qAr: "هل يمكن إعادة جدولة الجلسات؟",
    aAr: "نعم. يمكن إعادة جدولة الجلسة عند إشعار الشركة قبل موعد الجلسة بساعتين على الأقل.",
    qEn: "Can sessions be rescheduled?",
    aEn: "Yes. A session can be rescheduled with at least two hours’ notice before the appointment."
  },
  {
    qAr: "ماذا لو كنت مسافرة أو لدي ظرف شخصي؟",
    aAr: "تم تصميم برامج Like A Model بمدة مرنة تتجاوز مدة تنفيذ الجلسات الفعلية، مما يمنحك مساحة مناسبة للتعامل مع السفر أو الظروف الشخصية أو إعادة جدولة بعض المواعيد دون التأثير على رحلتك.",
    qEn: "What if I am traveling or have a personal circumstance?",
    aEn: `Like A Model programs are built with flexible duration beyond the actual session block, so travel, personal circumstances, or rescheduling can be handled without disrupting your
    journey.`
  },
  {
    qAr: "هل يوجد تجميد للاشتراك؟",
    aAr: "تم احتساب فترة مرونة ضمن مدة كل برنامج لمراعاة السفر والظروف الشخصية وإعادة الجدولة عند الحاجة. وفي الحالات الاستثنائية يتم دراسة الطلب وفق سياسة الشركة المعتمدة.",
    qEn: "Can a membership be frozen?",
    aEn: "Each program already includes flexibility for travel, personal circumstances, and rescheduling. Exceptional freeze requests are reviewed under company policy."
  },
  {
    qAr: "هل يوجد برنامج إحالة؟",
    aAr: "نعم. عند اشتراك عميلة جديدة من خلال توصيتك، تحصلين على رصيد بقيمة 300 ريال يمكن استخدامه في تجديد الاشتراك أو البرامج الإضافية أو الجلسات الإضافية أو الخدمات والمزايا الحصرية.",
    qEn: "Is there a referral program?",
    aEn: "Yes. When a new client joins through your recommendation, you receive SAR 300 credit to use on renewal, extra programs, extra sessions, or exclusive services."
  },
  {
    qAr: "ما الذي يميز Like A Model؟",
    aAr: "لأننا لا نقدم جلسات تدريب فقط. نحن نصمم رحلة تحول متكاملة تجمع بين التدريب الشخصي، والتغذية، والمتابعة، وقياس النتائج، والدعم المستمر لمساعدتك على بناء أسلوب حياة صحي يدوم.",
    qEn: "What makes Like A Model different?",
    aEn: `We do not only offer training sessions. We design a complete transformation journey that combines personal training, nutrition, follow-up, measured results, and ongoing support
    so you can build a healthy lifestyle that lasts.`
  }
];

export const reasons = [
  {
    titleAr: "تجربة مصممة خصيصاً لك",
    titleEn: "Designed especially for you",
    bodyAr: "لأن كل امرأة مختلفة، نصمم رحلتك بناءً على أهدافك ونمط حياتك ومستواك الحالي.",
    bodyEn: "Because every woman is different, we design your journey around your goals, lifestyle, and current level."
  },
  {
    titleAr: "متابعة مستمرة",
    titleEn: "Continuous follow-up",
    bodyAr: "رحلتك لا تنتهي بانتهاء الجلسة، بل تستمر من خلال المتابعة والدعم والتحفيز المستمر.",
    bodyEn: "Your journey does not end when the session ends. It continues through follow-up, support, and motivation."
  },
  {
    titleAr: "نتائج قابلة للقياس",
    titleEn: "Measurable results",
    bodyAr: "نؤمن أن النجاح الحقيقي يجب أن يُرى ويُقاس ويُشعر به.",
    bodyEn: "We believe real success must be seen, measured, and felt."
  },
  {
    titleAr: "خصوصية وراحة",
    titleEn: "Privacy and comfort",
    bodyAr: "تجربة احترافية في راحة منزلك وبأعلى معايير الخصوصية.",
    bodyEn: "A professional experience in the comfort of your home, with the highest privacy standards."
  }
];

export const copy = {
  ar: {
    brand: "Like A Model",
    contact: "تواصلي معنا",
    start: "ابدئي رحلتك",
    copyright: "جميع الحقوق محفوظة لـ Like A Model © 2026.",
    builtBy: "رحلة تحول مصممة خصيصاً لك",
    quickLinks: "روابط سريعة",
    heroEyebrow: "Your transformation starts here",
    heroTitle: "رحلة تحول",
    heroTitle2: "مصممة خصيصاً لك",
    heroLead: "في Like A Model لا نقدم جلسات تدريب فقط، بل نصمم رحلة تحول متكاملة تناسب هدفك، وأسلوب تدريبك، ومدة برنامجك، ومستوى التجربة الذي ترغبين به للوصول لهدفك.",
    manifestoA: "لسنا مجرد برنامج تدريبي",
    manifestoB: "نحن شريكك في رحلة التحول",
    manifestoBody: "نؤمن أن التحول الحقيقي لا يبدأ من المكان، بل من القرار. قرار الاهتمام بنفسك. قرار الاستثمار في صحتك. قرار بناء أسلوب حياة يمنحك المزيد من القوة والثقة والتوازن.",
    stepsTitle: "كيف تبنين برنامجك؟",
    stepsLead: "رحلتك في Like A Model تتكون من 4 خطوات فقط.",
    steps: [
      {
        num: "01",
        title: "اختاري رحلة التحول",
        body: "كل رحلة تبدأ بهدف واضح. حددي النتيجة التي ترغبين في الوصول إليها، وسنصمم لك البرنامج المناسب لتحقيقها بأفضل طريقة ممكنة."
      },
      {
        num: "02",
        title: "اختاري أسلوب التدريب",
        body: "لكل امرأة أسلوب تدريب يناسب احتياجاتها وأسلوب حياتها. اختاري التجربة التدريبية التي تشعرين معها بالراحة والتحفيز."
      },
      {
        num: "03",
        title: "اختاري مدة رحلتك",
        body: "النتائج تحتاج إلى الوقت المناسب لتحقيقها. اختاري مدة البرنامج التي تتوافق مع هدفك ومستوى التحول الذي تطمحين إليه."
      },
      {
        num: "04",
        title: "اختاري مستوى التجربة",
        body: "جميع البرامج مصممة بعناية لتقديم تجربة استثنائية، ويمكنك اختيار مستوى المتابعة والخدمات الذي يناسب احتياجاتك."
      }
    ],
    journeysTitle: "اختاري رحلة التحول",
    journeysLead: "كل رحلة تبدأ بهدف واضح.",
    methodsTitle: "اختاري أسلوب التدريب",
    methodsLead: "جلسات منزلية. تجربة تناسب حياتك.",
    minutes: "دقيقة",
    durationsTitle: "اختاري مدة رحلتك",
    durationsLead: "النتائج تحتاج إلى الوقت المناسب.",
    sessions: "جلسة",
    weeks: "أسابيع",
    week: "أسبوعاً",
    programWeeks: "مدة البرنامج",
    tiersTitle: "اختاري مستوى التجربة",
    tiersLead: "من التجربة الأساسية إلى أعلى مستويات العناية.",
    plusSignature: "كل ما في Signature، بالإضافة إلى:",
    plusElite: "كل ما في Elite، بالإضافة إلى:",
    extrasTitle: "البرامج الإضافية",
    extrasLead: "برامج متخصصة تجمع بين الصحة، الحركة، والمتعة.",
    togetherTitle: "شاركي رحلتك مع من تحبين",
    togetherLead: "التحول يصبح أكثر متعة واستمرارية عندما تشاركينه مع من يدعمك ويحفزك. اختاري تجربة التدريب المشترك.",
    togetherPerksTitle: "مزايا التدريب المشترك",
    togetherDiscount: "خصومات التدريب المشترك تبدأ من 25٪.",
    togetherCta: "تدربي مع من تحبين... واتركي الباقي علينا.",
    pricingTitle: "دليل الأسعار",
    pricingLead: `بعد اختيار رحلة التحول، وأسلوب التدريب، ومدة الرحلة، اختاري مستوى التجربة المناسب، ثم اطّلعي على قيمة الاستثمار. جميع الأسعار تشمل خدمات Signature، ويمكن الترقية إلى Elite أو
    Private.`,
    sar: "ريال",
    referralTitle: "هدية الثقة",
    referralLead: "أجمل قصص النجاح تبدأ بتوصية صادقة.",
    referralBody: "لأن ثقتك بـ Like A Model تعني لنا الكثير، تحصلين على رصيد بقيمة 300 ريال داخل Like A Model عند انضمام مشتركة جديدة من خلال توصيتك.",
    referralUsesTitle: "يمكنك استخدام الرصيد في:",
    referralUses: ["تجديد الاشتراك", "البرامج الإضافية", "الجلسات الإضافية", "الخدمات والمزايا الحصرية"],
    referralCloser: "لأن الثقة تستحق التقدير.",
    whyTitle: "لماذا Like A Model؟",
    resultsTitle: "نتائج التحول",
    resultsLead: "في Like A Model لا نقيس النجاح بالكيلوغرامات فقط. نقيسه عندما:",
    results: [
      "تشعرين بطاقة أكبر.",
      "ترتفع ثقتك بنفسك.",
      "تصبح العادات الصحية جزءاً من يومك.",
      "ترين التغيير في المرآة وتشعرين به في حياتك."
    ],
    resultsCloser: "لأن التحول الحقيقي لا يكون مؤقتاً... بل يصبح أسلوب حياة.",
    storiesTitle: "قصص النجاح",
    storiesBody: [
      "خلف كل نتيجة قصة. وخلف كل قصة قرار.",
      "قرار بالبدء. قرار بالاستمرار. قرار بأن تكوني النسخة الأفضل من نفسك.",
      "نفتخر بكل رحلة تحول صنعت فرقاً حقيقياً في حياة عميلاتنا."
    ],
    testimonialsTitle: "آراء العميلات",
    testimonials: "أكبر إنجاز بالنسبة لنا ليس عدد الجلسات... بل عدد النساء اللواتي أصبحن أكثر ثقة وصحة وسعادة بعد انضمامهن إلى Like A Model.",
    aboutTitle: "من نحن",
    aboutTag: "رحلة تحول مصممة خصيصاً لك.",
    aboutIntro: "لهذا صممنا تجربة متكاملة ترافقك في كل خطوة، من التقييم الأولي حتى تحقيق أهدافك، من خلال التدريب الشخصي، والتغذية، والمتابعة المستمرة، ضمن رحلة تناسب احتياجاتك وأسلوب حياتك.",
    missionTitle: "رسالتنا",
    mission: "تمكين المرأة من بناء أسلوب حياة صحي ومستدام من خلال تجربة تحول متكاملة تجمع بين المعرفة والدعم والمتابعة والنتائج الواقعية.",
    visionTitle: "رؤيتنا",
    vision: "أن تصبح Like A Model العلامة السعودية الأكثر تأثيراً في مجال التحول الصحي وأسلوب الحياة للمرأة، وأن تكون الخيار الأول لكل امرأة تبحث عن تجربة استثنائية ونتائج تدوم.",
    faqTitle: "الأسئلة الشائعة",
    closer: "أسلوب حياة... وليست مجرد تدريب.",
    includedTitle: "يشمل الاشتراك",
    forWho: "لمن ترغب في",
    ctaTitle: "ابدئي رحلتك نحو أفضل نسخة منك",
    ctaBody: "فريق Like A Model يصمم رحلتك بعد أربع خطوات بسيطة."
  },
  en: {
    brand: "Like A Model",
    contact: "Contact us",
    start: "Start your journey",
    copyright: "All rights reserved to Like A Model © 2026.",
    builtBy: "A transformation journey designed for you",
    quickLinks: "Quick links",
    heroEyebrow: "Your transformation starts here",
    heroTitle: "A transformation",
    heroTitle2: "designed for you",
    heroLead: `At Like A Model we do not only offer training sessions. We design a complete transformation journey around your goal, training style, program duration, and the experience level
    you want.`,
    manifestoA: "We are not just a training program",
    manifestoB: "We are your partner in the journey",
    manifestoBody: `Real transformation does not start with a place. It starts with a decision. The decision to care for yourself, invest in your health, and build a lifestyle that gives you
    more strength, confidence, and balance.`,
    stepsTitle: "How do you build your program?",
    stepsLead: "Your Like A Model journey is only four steps.",
    steps: [
      {
        num: "01",
        title: "Choose your transformation journey",
        body: "Every journey starts with a clear goal. Choose the result you want, and we will design the right program to get you there."
      },
      {
        num: "02",
        title: "Choose your training style",
        body: "Every woman has a training style that fits her needs and lifestyle. Choose the experience that feels comfortable and motivating."
      },
      {
        num: "03",
        title: "Choose your duration",
        body: "Results need the right amount of time. Choose the program length that matches the transformation you want."
      },
      {
        num: "04",
        title: "Choose your experience level",
        body: "Every program is designed to feel exceptional. Choose the level of follow-up and services that fits you."
      }
    ],
    journeysTitle: "Choose your transformation journey",
    journeysLead: "Every journey starts with a clear goal.",
    methodsTitle: "Choose your training style",
    methodsLead: "At-home sessions. An experience that fits your life.",
    minutes: "minutes",
    durationsTitle: "Choose your duration",
    durationsLead: "Results need the right amount of time.",
    sessions: "sessions",
    weeks: "weeks",
    week: "weeks",
    programWeeks: "Program length",
    tiersTitle: "Choose your experience level",
    tiersLead: "From the core experience to the highest level of care.",
    plusSignature: "Everything in Signature, plus:",
    plusElite: "Everything in Elite, plus:",
    extrasTitle: "Additional programs",
    extrasLead: "Specialized programs that bring together health, movement, and enjoyment.",
    togetherTitle: "Share your journey with who you love",
    togetherLead: "Transformation is more enjoyable and consistent when you share it with someone who supports you.",
    togetherPerksTitle: "Shared training perks",
    togetherDiscount: "Shared-training savings start from 25%.",
    togetherCta: "Train with who you love... and leave the rest to us.",
    pricingTitle: "Pricing guide",
    pricingLead: `After choosing your journey, training style, and duration, choose the experience level and see the investment. All prices include Signature services, with upgrades to
    Elite or Private.`,
    sar: "SAR",
    referralTitle: "The gift of trust",
    referralLead: "The most beautiful success stories start with a sincere recommendation.",
    referralBody: "Because your trust in Like A Model means a great deal, you receive SAR 300 credit when a new member joins through you.",
    referralUsesTitle: "You can use the credit for:",
    referralUses: ["Renewal", "Additional programs", "Extra sessions", "Exclusive services and perks"],
    referralCloser: "Because trust deserves to be valued.",
    whyTitle: "Why Like A Model?",
    resultsTitle: "Transformation results",
    resultsLead: "At Like A Model we do not measure success in kilograms alone. We measure it when:",
    results: [
      "You feel more energy.",
      "Your confidence rises.",
      "Healthy habits become part of your day.",
      "You see the change in the mirror and feel it in your life."
    ],
    resultsCloser: "Because real transformation is not temporary... it becomes a lifestyle.",
    storiesTitle: "Success stories",
    storiesBody: [
      "Behind every result is a story. And behind every story is a decision.",
      "A decision to start. A decision to continue. A decision to become the best version of yourself.",
      "We are proud of every journey that made a real difference in our clients’ lives."
    ],
    testimonialsTitle: "Client voices",
    testimonials: "Our greatest achievement is not the number of sessions... it is the number of women who became more confident, healthy, and happy after joining Like A Model.",
    aboutTitle: "About us",
    aboutTag: "A transformation journey designed especially for you.",
    aboutIntro: `That is why we designed a complete experience that walks with you at every step, from the first assessment to your goals, through personal training, nutrition, and continuous
    follow-up.`,
    missionTitle: "Our mission",
    mission: "To empower women to build a healthy, sustainable lifestyle through a complete transformation experience that brings together knowledge, support, follow-up, and real results.",
    visionTitle: "Our vision",
    vision: `For Like A Model to become the most influential Saudi brand in women’s health transformation and lifestyle, and the first choice for every woman seeking an exceptional experience
    and lasting results.`,
    faqTitle: "Frequently asked questions",
    closer: "A lifestyle... not just training.",
    includedTitle: "Every plan includes",
    forWho: "For those who want",
    ctaTitle: "Start your journey toward your best self",
    ctaBody: "The Like A Model team designs your journey after four simple steps."
  },
};