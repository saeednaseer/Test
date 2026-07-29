/* =========================================================
   محتوى الموقع — عدّل هنا فقط
   Site content — edit only here

   كل حقل نصي أصبح كائنًا فيه اللغتين: { ar: "عربي", en: "English" }
   عدّل النسختين مع بعض في نفس المكان — الموقع يتحول بينهم تلقائيًا
   Every text field is now { ar: "...", en: "..." } — edit both together;
   the site switches between them automatically via the language toggle.

   الحقول التقنية (الروابط، الأيقونات، الألوان، مسارات الصور) لا تُترجم،
   وتبقى كما هي بلا كائن لغتين.
   Technical fields (links, icons, colors, image paths) are NOT bilingual
   and stay as plain values.
========================================================= */
const siteContent = {

  // -------- بيانات عامة / General --------
  pageTitle: {
    ar: "سعيد ناصر | مصور درون ومونتاج ومنتج عقاري",
    en: "Saeed Nasser | Drone Videographer, Editor & Real Estate Producer"
  },
  pageDescription: {
    ar: "تصوير درون، مونتاج، إنتاج عقاري، تصميم جرافيك، تحريك شعارات، وتصوير برامج تلفزيونية.",
    en: "Drone videography, video editing, real estate production, graphic design, logo animation, and TV program filming."
  },
  fullName: { ar: "سعيد ناصر", en: "Saeed Nasser" },
  heroGreeting: { ar: "مرحباً، أنا", en: "Hi, I'm" },
  experienceBadge: { ar: "+10 سنوات خبرة", en: "10+ Years of Experience" },

  // العناوين الوظيفية اللي تتبدّل بأنيميشن الكتابة في الهيرو
  roles: [
    { ar: "مصور درون",     en: "Drone Videographer" },
    { ar: "مونتير فيديو",   en: "Video Editor" },
    { ar: "منتج عقاري",     en: "Real Estate Producer" },
    { ar: "مصمم جرافيك",    en: "Graphic Designer" }
  ],

  bio: {
    ar: "أوثّق العقارات والمشاريع والبرامج التلفزيونية بعدسة الدرون، وأحوّل الفكرة الخام إلى محتوى بصري جاهز للنشر عبر المونتاج والتصميم الجرافيكي.",
    en: "I document real estate, projects, and TV programs through the drone lens, turning raw ideas into publish-ready visual content through editing and graphic design."
  },

  // -------- الإحصائيات (شريط التايم كود) / Stats --------
  stats: [
    { num: "+600", label: { ar: "مشروع منجز", en: "Projects Completed" } },
    { num: "+10",  label: { ar: "سنوات خبرة", en: "Years of Experience" } },
    { num: "4",    label: { ar: "أسواق",       en: "Markets" } },
    { num: "+150", label: { ar: "ساعة تصوير جوي", en: "Hours of Aerial Footage" } }
  ],

  // -------- الأسواق / الدول / Markets --------
  markets: [
    { flag: "images/flags/sa.svg", name: { ar: "السعودية", en: "Saudi Arabia" } },
    { flag: "images/flags/kw.svg", name: { ar: "الكويت",   en: "Kuwait" } },
    { flag: "images/flags/ye.svg", name: { ar: "اليمن",     en: "Yemen" } },
    { flag: "images/flags/ly.svg", name: { ar: "ليبيا",     en: "Libya" } }
  ],

  // -------- نبذة / About --------
  aboutText: {
    ar: "بدأت رحلتي في المونتاج قبل أكثر من 10 سنوات، وتوسّع مجالي تدريجيًا مع دخول الدرون كأداة أساسية في التصوير العقاري والتلفزيوني. أؤمن إن أي مشروع مهما كان بسيطًا يستحق نفس الاهتمام بالتفاصيل — من زاوية اللقطة إلى آخر قصّة في المونتاج. هذا ما يميّز أسلوبي: سرعة في التسليم دون التنازل عن الجودة.",
    en: "My journey began in video editing over 10 years ago, and gradually expanded as the drone became an essential tool in real estate and TV production. I believe every project, however simple, deserves the same attention to detail — from the camera angle to the final cut. That's what defines my style: fast delivery without compromising on quality."
  },

  // -------- الخدمات / Services --------
  // slug: يُستخدم للربط بصفحة أعمال هذا القسم تحديدًا (works.html?cat=slug) — لا يُترجم
  servicesIntro: {
    ar: "خدمات إنتاج مرئي متكاملة، من التصوير الجوي إلى المونتاج والإخراج النهائي.",
    en: "Full-service visual production, from aerial filming to editing and final delivery."
  },
  services: [
    { slug: "drone",          tag: "01", icon: "🛸", title: { ar: "تصوير درون",            en: "Drone Videography" },        desc: { ar: "زوايا جوية سينمائية توثّق العقار أو الموقع من منظور مختلف تمامًا.", en: "Cinematic aerial angles that document a property or site from a completely different perspective." } },
    { slug: "montage",        tag: "02", icon: "✂️", title: { ar: "المونتاج",               en: "Video Editing" },            desc: { ar: "تنظيم اللقطات وضبط الإيقاع لتخرج القصة بصورتها النهائية الاحترافية.", en: "Organizing footage and pacing the story into its final, professional form." } },
    { slug: "real-estate",    tag: "03", icon: "🏠", title: { ar: "الإنتاج العقاري",         en: "Real Estate Production" },   desc: { ar: "تغطية متكاملة للوحدات العقارية بأسلوب بصري يسهّل على العميل اتخاذ القرار.", en: "Complete property coverage with a visual style that helps clients make faster decisions." } },
    { slug: "graphic-design", tag: "04", icon: "🎨", title: { ar: "تصميم جرافيك",             en: "Graphic Design" },           desc: { ar: "هويات بصرية ومطبوعات وتصاميم تحمل بصمة واضحة، من الفكرة إلى التنفيذ النهائي.", en: "Visual identities, print, and designs with a clear signature — from concept to final execution." } },
    { slug: "logo-animation", tag: "05", icon: "⚡", title: { ar: "تحريك الشعارات",          en: "Logo Animation" },           desc: { ar: "إعطاء الهوية البصرية حياة وحركة تترك انطباعًا أول قويًا واحترافيًا.", en: "Bringing a visual identity to life with motion that leaves a strong first impression." } },
    { slug: "tv-programs",    tag: "06", icon: "📺", title: { ar: "تصوير البرامج التلفزيونية", en: "TV Program Filming" },      desc: { ar: "تغطية كاملة للحلقات والبرامج التلفزيونية بجودة تصوير احترافية.", en: "Full coverage of episodes and TV programs with professional filming quality." } }
  ],

  // -------- الأعمال / المعرض / Portfolio --------
  // category: لازم تطابق أحد قيم slug في مصفوفة services بالأعلى (لا يُترجم)
  // featured: true → يظهر في الصفحة الرئيسية (بحد أقصى 8)
  work: [
    { category: "drone",           featured: true, title: { ar: "تصوير عقاري بالدرون", en: "Drone Real Estate Footage" },  desc: { ar: "توثيق جوي لمشروع مستودعات.", en: "Aerial documentation of a warehouse project." },              gradient: "linear-gradient(135deg,#9F1F63,#0E0E10)", videoLink: "https://youtu.be/CDRoJKS6KUc" },
    { category: "drone",           featured: false, title: { ar: "تصوير عقاري بالدرون", en: "Drone Real Estate Footage" },  desc: { ar: "توثيق اعلان لإستراحة للبيع.", en: "Promotional footage for a rest house for sale." },             gradient: "linear-gradient(135deg,#9F1F63,#0E0E10)", videoLink: "https://youtu.be/pBSVYD4oJXM" },
    { category: "drone",           featured: true, title: { ar: "برنامج خريف حوف | تصوير جوي بالدرون", en: "Kharif Hauf Program | Aerial Drone Footage" }, desc: { ar: "برنامج خريف حوف، يوثق المشاهد الطبيعية الخلابة من منظور جوي يبرز جمال المكان وتفاصيله.", en: "Kharif Hauf program, documenting stunning natural scenery from an aerial view that highlights the place's beauty and detail." }, gradient: "linear-gradient(135deg,#9F1F63,#0E0E10)", videoLink: "https://youtu.be/qftb3qL5U8w?si=3oZxwo-2hqj95pij" },
    { category: "drone",           featured: false, title: { ar: "على خطى المحضار | تصوير جوي بالدرون", en: "In the Footsteps of Al-Mahdhar | Aerial Drone Footage" }, desc: { ar: "عمل يوثق المسيرة الفنية للفنان حسين أبو بكر المحضار، من خلال لقطات جوية استعرضت أبرز المناطق التي تغنى بها وألهمت أعماله.", en: "A piece documenting the artistic journey of Hussein Abu Bakr Al-Mahdhar, through aerial shots of the places that inspired his work." }, gradient: "linear-gradient(135deg,#9F1F63,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=4D01Br4q8ZY&list=PLZz0Fdf56G7RMz39OW8DYBDI7e0ew5cSy&index=8" },
    { category: "drone",           featured: false, title: { ar: "برنامج نجم البدلة | تصوير جوي بالدرون", en: "Najm Al-Badla Program | Aerial Drone Footage" }, desc: { ar: "عمل يوثق سواحل حضرموت بلقطات جوية احترافية، ويستعرض التجارب السياحية والحياة اليومية للسكان.", en: "A piece documenting the coasts of Hadhramaut with professional aerial shots, showcasing tourism and daily life." }, gradient: "linear-gradient(135deg,#9F1F63,#0E0E10)", videoLink: "https://youtu.be/pBSVYD4oJXM" },
    { category: "drone",           featured: false, title: { ar: "إعلان قاعة أفراح | التصوير السينمائي", en: "Wedding Hall Ad | Cinematic Filming" }, desc: { ar: "تنفيذ تصوير احترافي لإعلان ترويجي يبرز هوية القاعة، تفاصيلها، والأجواء المميزة للمناسبات.", en: "Professional filming for a promotional ad highlighting the hall's identity, details, and event atmosphere." }, gradient: "linear-gradient(135deg,#9F1F63,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=jRrol528fCQ" },

    { category: "montage",         featured: true, title: { ar: "الذاكرة الحضرمية | مونتاج", en: "Hadhrami Memory | Editing" }, desc: { ar: "مونتاج برنامج يوثق العادات والتقاليد الحضرمية في رمضان، ويبرز الموروث الثقافي بأسلوب بصري متناسق وجذاب.", en: "Editing for a program documenting Hadhrami traditions during Ramadan, highlighting cultural heritage with a cohesive visual style." }, gradient: "linear-gradient(135deg,#D91B5C,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=4Tg4lNx5Fi0" },
    { category: "montage",         featured: true, title: { ar: "قصة نجاح | براند حواج", en: "Success Story | Hawaj Brand" }, desc: { ar: "مونتاج تقرير يوثق قصة نجاح براند حواج، بأسلوب بصري يبرز رحلة العلامة التجارية، وإنجازاتها، وتأثيرها في السوق.", en: "Editing for a report documenting the Hawaj brand's success story, highlighting its journey, achievements, and market impact." }, gradient: "linear-gradient(135deg,#D91B5C,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=iq0DZSrf1vo" },

    { category: "real-estate",     featured: true, title: { ar: "جولة عقارية كاملة", en: "Full Property Tour" }, desc: { ar: "تغطية شاملة لوحدة سكنية من الداخل والخارج.", en: "Comprehensive coverage of a residential unit, inside and out." }, gradient: "linear-gradient(135deg,#7A1F4F,#0E0E10)", videoLink: "https://youtu.be/vWaPPHRjxgg" },
    { category: "real-estate",     featured: true, title: { ar: "إعلان للإيجار | تصوير ومونتاج", en: "Rental Ad | Filming & Editing" }, desc: { ar: "تصوير ومونتاج إعلان احترافي يبرز مميزات المستودعات وجاهزيتها للإيجار.", en: "Professional filming and editing for an ad highlighting warehouse features and rental readiness." }, gradient: "linear-gradient(135deg,#7A1F4F,#0E0E10)", videoLink: "https://youtu.be/xrvaOONTjOg" },

    { category: "logo-animation",  featured: false, title: { ar: "تحريك شعار | أستديو مسهور (الإصدار الأول)", en: "Logo Animation | Mashhour Studio (Version 1)" }, desc: { ar: "تنفيذ موشن جرافيك لشعار أستديو مسهور بأسلوب احترافي يعكس هوية البرنامج ويمنحه حضورًا بصريًا مميزًا.", en: "Motion graphics for the Mashhour Studio logo, reflecting the program's identity with a distinctive visual presence." }, gradient: "linear-gradient(135deg,#7A1750,#0E0E10)", videoLink: "https://youtu.be/l5TJtVsIVoI" },
    { category: "logo-animation",  featured: true, title: { ar: "تحريك شعار | برنامج أستديو (الإصدار الثاني)", en: "Logo Animation | Studio Program (Version 2)" }, desc: { ar: "نسخة حديثة لتحريك شعار أستديو مسهور، بتصميم حركي مختلف يواكب هوية البرنامج ويضيف لمسة بصرية متجددة.", en: "An updated take on the Mashhour Studio logo animation, with a fresh motion design that adds a renewed visual touch." }, gradient: "linear-gradient(135deg,#7A1750,#0E0E10)", videoLink: "https://youtu.be/T0qjO2n1MD4" },
    { category: "logo-animation",  featured: true, title: { ar: "تحريك شعار | تلفزيون حضرموت", en: "Logo Animation | Hadhramaut TV" }, desc: { ar: "تصميم وتنفيذ موشن جرافيك لشعار تلفزيون حضرموت، بأسلوب احترافي يعزز الهوية البصرية ويمنح الشعار حركة عصرية وجذابة.", en: "Motion graphics design and execution for the Hadhramaut TV logo, giving it a modern, engaging movement." }, gradient: "linear-gradient(135deg,#7A1750,#0E0E10)", videoLink: "https://youtu.be/gzU9MwPhWoI" },

    { category: "tv-programs",     featured: true, title: { ar: "برنامج أرياف | تصوير", en: "Aryaf Program | Filming" }, desc: { ar: "تصوير سلسلة وثائقية من 10 حلقات تستعرض أرياف ساحل حضرموت، وتبرز جمال الطبيعة والحياة الريفية.", en: "Filming a 10-episode documentary series showcasing the rural coast of Hadhramaut and rural life." }, gradient: "linear-gradient(135deg,#B0195C,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=MVmPv1dS6no&list=PLV8U2ls1d3amibuUTwOtYJuw2pX3722V9" },
    { category: "tv-programs",     featured: true, title: { ar: "أنشودة ميزنا الله | تصوير", en: "\"Mayyazana Allah\" Anthem | Filming" }, desc: { ar: "تنفيذ التصوير لأنشودة «ميزنا الله» بأسلوب بصري يعزز الرسالة ويبرز المشاهد بإخراج متناسق وجودة احترافية.", en: "Filming for the anthem «Mayyazana Allah», with a visual style that reinforces the message through cohesive, professional direction." }, gradient: "linear-gradient(135deg,#B0195C,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=MKKHxBMYhO8" }
  ],

  // -------- العملاء / Clients --------
  // تنبيه: تأكد من رفع 35 ملف بنفس هذه الأسماء بالظبط (1.png إلى 35.png) داخل images/clients/
  clients: [
  { name: { ar: "عميل 01", en: "Client 01" }, logo: "images/clients/1.webp" },
{ name: { ar: "عميل 02", en: "Client 02" }, logo: "images/clients/2.webp" },
{ name: { ar: "عميل 03", en: "Client 03" }, logo: "images/clients/3.webp" },
{ name: { ar: "عميل 04", en: "Client 04" }, logo: "images/clients/4.webp" },
{ name: { ar: "عميل 05", en: "Client 05" }, logo: "images/clients/5.webp" },
{ name: { ar: "عميل 06", en: "Client 06" }, logo: "images/clients/6.webp" },
{ name: { ar: "عميل 07", en: "Client 07" }, logo: "images/clients/7.webp" },
{ name: { ar: "عميل 08", en: "Client 08" }, logo: "images/clients/8.webp" },
{ name: { ar: "عميل 09", en: "Client 09" }, logo: "images/clients/9.webp" },
{ name: { ar: "عميل 10", en: "Client 10" }, logo: "images/clients/10.webp" },
{ name: { ar: "عميل 11", en: "Client 11" }, logo: "images/clients/11.webp" },
{ name: { ar: "عميل 12", en: "Client 12" }, logo: "images/clients/12.webp" },
{ name: { ar: "عميل 13", en: "Client 13" }, logo: "images/clients/13.webp" },
{ name: { ar: "عميل 14", en: "Client 14" }, logo: "images/clients/14.webp" },
{ name: { ar: "عميل 15", en: "Client 15" }, logo: "images/clients/15.webp" },
{ name: { ar: "عميل 16", en: "Client 16" }, logo: "images/clients/16.webp" },
{ name: { ar: "عميل 17", en: "Client 17" }, logo: "images/clients/17.webp" },
{ name: { ar: "عميل 18", en: "Client 18" }, logo: "images/clients/18.webp" },
{ name: { ar: "عميل 19", en: "Client 19" }, logo: "images/clients/19.webp" },
{ name: { ar: "عميل 20", en: "Client 20" }, logo: "images/clients/20.webp" },
{ name: { ar: "عميل 21", en: "Client 21" }, logo: "images/clients/21.webp" },
{ name: { ar: "عميل 22", en: "Client 22" }, logo: "images/clients/22.webp" },
{ name: { ar: "عميل 23", en: "Client 23" }, logo: "images/clients/23.webp" },
{ name: { ar: "عميل 24", en: "Client 24" }, logo: "images/clients/24.webp" },
{ name: { ar: "عميل 25", en: "Client 25" }, logo: "images/clients/25.webp" },
{ name: { ar: "عميل 26", en: "Client 26" }, logo: "images/clients/26.webp" },
{ name: { ar: "عميل 27", en: "Client 27" }, logo: "images/clients/27.webp" },
{ name: { ar: "عميل 28", en: "Client 28" }, logo: "images/clients/28.webp" },
{ name: { ar: "عميل 29", en: "Client 29" }, logo: "images/clients/29.webp" },
{ name: { ar: "عميل 30", en: "Client 30" }, logo: "images/clients/30.webp" },
{ name: { ar: "عميل 31", en: "Client 31" }, logo: "images/clients/31.webp" },
{ name: { ar: "عميل 32", en: "Client 32" }, logo: "images/clients/32.webp" },
{ name: { ar: "عميل 33", en: "Client 33" }, logo: "images/clients/33.webp" },
{ name: { ar: "عميل 34", en: "Client 34" }, logo: "images/clients/34.webp" },
{ name: { ar: "عميل 35", en: "Client 35" }, logo: "images/clients/35.webp" }
  ],

  // -------- تواصل / Contact --------
  contactTitle: { ar: "لنبدأ مشروعك القادم", en: "Let's Start Your Next Project" },
  contactText: {
    ar: "عندك عقار، حدث، أو فكرة تحتاج محتوى مرئي احترافي؟ تواصل معي لنحوّلها إلى عمل جاهز للنشر.",
    en: "Have a property, event, or idea that needs professional visual content? Get in touch and let's turn it into something ready to publish."
  },
  whatsappLink: "https://wa.me/966510798388",

  // -------- الفوتر / Footer --------
  footerTagline: {
    ar: "مصور درون ومونتير، متخصص في الإنتاج العقاري والتصميم الجرافيكي.",
    en: "Drone videographer and editor, specializing in real estate production and graphic design."
  },
  phoneDisplay: "+966 51 079 8388",
  email: "snb135@hotmail.com",
  emailLink: "mailto:snb135@hotmail.com",

  // روابط السوشيال ميديا — اترك أي رابط فارغًا "" إن لم ترغب بظهور أيقونته (لا تُترجم)
  socials: {
    linkedin: "https://linkedin.com/in/username",
    instagram: "https://instagram.com/s.n.b1",
    tiktok: "https://tiktok.com/@s.n.b135",
    youtube: "https://youtube.com/@SNBMontage",
    behance: "https://behance.net/snb_135",
    facebook: "https://facebook.com/username"
  },

  // -------- صفحة "تصميم جرافيك" — أسلوب تحريري مستقل / Graphic Design Page --------
  graphicDesignPage: {
    eyebrow: { ar: "استوديو التصميم", en: "Design Studio" },
    metaDescription: { ar: "أعمال تصميم جرافيك: هويات بصرية، مطبوعات، وحملات إعلانية.", en: "Graphic design work: visual identities, print, and ad campaigns." },
    statement: { ar: "أصمم؛ إذن أنا موجود", en: "I Design; Therefore I Am" },
    subStatement: { ar: "تصميم جرافيك — منذ 2015", en: "Graphic Design — Since 2015" },
    intro: {
      ar: "أنا سعيد ناصر، إلى جانب الفيديو والدرون، أصمم هويات بصرية ومطبوعات ومحتوى جرافيكي يحمل بصمة واضحة. هذا النص Placeholder — عدّله من content.js ليحكي أسلوبك الخاص في التصميم.",
      en: "I'm Saeed Nasser — alongside video and drone work, I design visual identities, print, and graphic content with a clear signature. This is placeholder text — edit it in content.js to tell your own design story."
    },
    projects: [
      {
        title: { ar: "هوية بصرية — مشروع 01", en: "Visual Identity — Project 01" },
        tags: { ar: "هوية بصرية، تصميم مطبوعات", en: "Visual Identity, Print Design" },
        desc: { ar: "وصف مختصر يشرح فكرة المشروع والحل البصري الذي قدّمته. عدّل هذا النص والصور من content.js.", en: "A short description explaining the project's idea and the visual solution delivered. Edit this text and images in content.js." },
        gallery: [
                     "images/Posts/0.webp",
                     "images/Posts/1.webp",
                     "images/Posts/2.webp",
                     "images/Posts/3.webp",
                     "images/Posts/4.webp",
                     "images/Posts/5.webp",
                     "images/Posts/7.webp",
                     "images/Posts/8.webp",
                     "images/Posts/9.webp",
                     "images/Posts/10.webp",
                     "images/Posts/11.webp"
                 
        ]
      },
      {
        title: { ar: "حملة مطبوعة — مشروع 02", en: "Print Campaign — Project 02" },
        tags: { ar: "تصميم إعلانات، طباعة", en: "Ad Design, Print" },
        desc: { ar: "وصف مختصر يشرح فكرة المشروع والحل البصري الذي قدّمته. عدّل هذا النص والصور من content.js.", en: "A short description explaining the project's idea and the visual solution delivered. Edit this text and images in content.js." },
        gallery: [
          "linear-gradient(135deg,#F7941E,#1a0d14)",
          "linear-gradient(135deg,#9F1F63,#1a0d14)",
          "linear-gradient(135deg,#D91B5C,#1a0d14)"
        ]
      }
    ],
    artifacts: [
      { icon: "🎨", caption: { ar: "شعار مطبوع بأسلوب تجريبي.", en: "A logo printed in an experimental style." } },
      { icon: "📐", caption: { ar: "استكشاف بصري لهوية غير منشورة.", en: "Visual exploration for an unpublished identity." } },
      { icon: "🖋️", caption: { ar: "خط يد مخصّص لمشروع شخصي.", en: "Custom hand lettering for a personal project." } },
      { icon: "🗞️", caption: { ar: "تصميم غلاف مطبوعة.", en: "Publication cover design." } },
      { icon: "🏷️", caption: { ar: "بطاقة عمل مصمَّمة يدويًا.", en: "A hand-designed business card." } },
      { icon: "🖼️", caption: { ar: "ملصق لأحد الفعاليات.", en: "A poster for an event." } }
    ],
    closing: { ar: "شكرًا لزيارة هذا الجزء من أعمالي.", en: "Thanks for visiting this part of my work." }
  }
};
