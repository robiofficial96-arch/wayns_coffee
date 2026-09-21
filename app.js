/**
 * WAYNS COFFEE - BILINGUAL JAVASCRIPT ENGINE (English & Arabic)
 * واينز كافيه - محرك ثنائي اللغة (الإنجليزية والعربية)
 * Kingdom of Saudi Arabia | المملكة العربية السعودية
 */

// Official Saudi Riyal Symbol Icon
const riyalSymbol = '<img src="Saudi_Riyal_Symbol copy.svg" alt="ر.س" class="riyal-symbol">';

// Comprehensive Bilingual Dictionary
const translations = {
  en: {
    // Top Bar
    topbarAnnouncement: "Experience Royal Saudi Hospitality & Artisanal Specialty Coffee | Riyadh • Jeddah • Khobar",
    topbarHours: "Daily: 6:00 AM – 1:30 AM",
    topbarContact: "+966 11 456 7890",

    // Navbar
    navHome: "Home",
    navMenu: "Menu",
    navBranch: "Branch",
    navLocation: "Location",
    navContact: "Contact",

    // Mobile Bottom Bar
    bottomHome: "Home",
    bottomMenu: "Menu",
    bottomBranch: "Branch",
    bottomLocation: "Location",
    bottomContact: "Contact",

    // Hero Section
    heroBadge: "The Pinnacle of Saudi Coffee Culture",
    heroTitleLine1: "Where Saudi Heritage",
    heroTitleLine2: "Meets Specialty Coffee",
    heroSubtitle: "Immerse in the timeless ritual of Saudi Gahwa and masterfully roasted single-origin Arabica. Crafted with the spirit of Saudi Hafawah (authentic hospitality) in the heart of Riyadh.",
    heroBtnExplore: "Explore Menu",
    navBranchLabel: "Our Branches",

    // Hero Stats
    heroStat1Number: "100%",
    heroStat1Label: "Specialty Grade Arabica",
    heroStat2Number: "4",
    heroStat2Label: "Flagship Saudi Branches",
    heroStat3Number: "Jazan",
    heroStat3Label: "Khawlani Saudi Beans",
    heroStat4Number: "4.9 ★",
    heroStat4Label: "Guest Satisfaction",

    // Signature Categories (Hero Badges)
    heroCatCoffee: "COFFEE",
    heroCatSweets: "SWEETS",
    heroCatTea: "TEA",
    tickerSpecialistText: "TEA & COFFEE SPECIALIST",
 
    // V12 Signature Slow-Drip Specialty Bar (Wayns Coffee Exclusive)
    v12Badge: "WAYNS SIGNATURE BAR",
    v12TitleLine1: "Crafted Drop by Drop:",
    v12TitleHighlight: "The V12 Slow Drip",
    v12Desc1: "At Wayns Coffee, every cup tells an artisan story. Our golden V12 slow-drip extraction is engineered to unlock the rarest fruit and floral notes from premium Saudi Khawlani and Ethiopian single-origin beans.",
    v12Desc2: "A serene ritual where time, precise water temperature, and gravity come together to deliver an exceptionally clean, aromatic, and velvety coffee experience.",
    v12Feature1Title: "100% Single-Origin",
    v12Feature1Desc: "Hand-picked high-altitude micro-lots roasted to perfection.",
    v12Feature2Title: "Pure Cold & Hot Drip",
    v12Feature2Desc: "Ultra-clean profile with no bitterness, highlighting natural caramel sweetness.",
    v12Btn: "Taste The V12 Brew",

    // Heritage Section (Saudi Gahwa)
    heritageBadge: "Ceremony of Authentic Saudi Gahwa",
    heritageTitleLine1: "The Art of Royal",
    heritageTitleHighlight: "Saudi Gahwa",
    heritageDesc1: "Saudi Gahwa is more than coffee — it is the soul of Saudi hospitality. At Wayns Coffee, we honor the ancient tradition of the Dallah, hand-pounded with saffron, cardamom, and rare Jazan Khawlani beans.",
    heritageDesc2: "Every cup embodies the Year of Saudi Coffee initiative — a royal decree celebrating Saudi Arabia's world-class specialty coffee heritage from Jazan to the world stage.",
    heritageStat1: "Khawlani Single Origin",
    heritageStat1Label: "Jazan Region",
    heritageStat2: "Saudi Gahwa",
    heritageStat2Label: "UNESCO Heritage",
    heritageBtn1: "Our Coffee Story",
    heritageBtn2: "Explore Menu",
    heritageHighlight1: "Saffron & Cardamom",
    heritageHighlight1Sub: "Traditional Spice Blend",
    heritageHighlight2: "Medjool Dates",
    heritageHighlight2Sub: "Medina Royal Harvest",

    // Categories
    catKicker: "EXPLORE OUR WORLD",
    catTitle: "What Would You Like Today?",
    catSubtitle: "From authentic Saudi Gahwa to champion-level specialty espresso, every cup is a celebration of Saudi coffee culture.",
    catAll: "All",
    catGahwa: "Saudi Gahwa",
    catSpecialty: "Specialty Coffee",
    catColdBrew: "Cold Brew",
    catTea: "Artisan Tea",
    catDates: "Royal Dates",
    catPastries: "Artisan Pastries",

    // Customer Favorites
    picksKicker: "SIGNATURE SELECTIONS",
    picksTitle: "Guest Favorites",
    picksViewAll: "View Full Menu",
    fav1Title: "Royal Saudi Gahwa",
    fav1Desc: "Traditional Dallah-brewed with Khawlani beans, saffron & cardamom",
    fav1Price: `28 ${riyalSymbol}`,
    fav2Title: "Iced Spanish Latte",
    fav2Desc: "Signature house blend with condensed milk, served over ice",
    fav2Price: `22 ${riyalSymbol}`,
    fav3Title: "Khawlani Pour-Over",
    fav3Desc: "Single origin Jazan Khawlani, light roast, floral notes",
    fav3Price: `32 ${riyalSymbol}`,
    fav4Title: "Medjool Date Latte",
    fav4Desc: "House espresso with Medina Medjool date syrup & oat milk",
    fav4Price: `26 ${riyalSymbol}`,
    fav5Title: "Signature Cold Brew",
    fav5Desc: "24-hour slow steep, chocolate & walnut tasting notes",
    fav5Price: `24 ${riyalSymbol}`,
    fav6Title: "Pistachio Croissant",
    fav6Desc: "Buttery laminated pastry with pistachio cream frangipane",
    fav6Price: `18 ${riyalSymbol}`,

    // Our Story Section
    storyKicker: "OUR STORY",
    storyTitleLine1: "Born From",
    storyTitleHighlight: "Saudi Passion",
    storyTitleLine2: "For Great Coffee",
    storyDesc: "Wayns Coffee was born from a deep reverence for Saudi coffee culture and a relentless pursuit of specialty coffee excellence. We source the finest Khawlani beans from Jazan — the only coffee-growing region in Arabia — and blend ancient Saudi Gahwa ceremony with world-class barista craft.",
    storyBtn: "Discover Our Story",
    storyFeature1: "Champion Baristas",
    storyFeature1Sub: "World-class specialty craft",
    storyFeature2: "Jazan Khawlani Beans",
    storyFeature2Sub: "Single origin excellence",
    storyFeature3: "Hafawah Hospitality",
    storyFeature3Sub: "Authentic Saudi welcome",

    // Newsletter / Stay Connected
    connectedKicker: "STAY CONNECTED",
    connectedTitle: "New Blends, Exclusive Offers & Saudi Coffee Stories",
    connectedPlaceholder: "Your email address",
    connectedBtn: "Subscribe",
    badgeGahwa: "Authentic Saudi Gahwa",
    badgeSpecialty: "Champion Specialty Coffee",
    badgeKhawlani: "Jazan Khawlani Beans",

    // Footer
    footerDesc: "Wayns Coffee is Saudi Arabia's foremost specialty coffee destination — honoring the ancient Gahwa ceremony with world-class barista craft, sourcing rare Jazan Khawlani single-origin beans.",
    footerNavTitle: "Quick Navigation",
    footerContactTitle: "Contact & Head Office",
    footerAddress: "King Fahd Road, Al Olaya District, Riyadh 12241, Kingdom of Saudi Arabia",
    footerTax: "ZATCA e-Invoice Certified",
    footerCopyright: "© 2026 Wayns Coffee (ونس كافيه) All Rights Reserved.",
    footerCR: "",
    footerPrivacy: "",
    footerTerms: "",

    // Contact Page
    contactKicker: "GET IN TOUCH",
    contactTitle: "We'd Love to Hear From You",
    contactSubtitle: "Whether you're planning a visit, have a question about our specialty coffee, or want to book a private event — we're here.",
    contactNameLabel: "Full Name",
    contactNamePlaceholder: "Your name",
    contactEmailLabel: "Email Address",
    contactEmailPlaceholder: "your@email.com",
    contactSubjectLabel: "Subject",
    contactSubjectPlaceholder: "How can we help?",
    contactMsgLabel: "Your Message",
    contactMsgPlaceholder: "Tell us more...",
    contactSubmitBtn: "Send Message",
    contactWhatsapp: "Chat on WhatsApp",
    contactAddressTitle: "Head Office",
    contactPhoneTitle: "Phone",
    contactEmailTitle: "Email",
    contactHoursTitle: "Opening Hours",
    contactHoursValue: "Daily: 6:00 AM – 1:30 AM",

    // Branch Page
    branchKicker: "OUR LOCATIONS",
    branchTitle: "Find Your Nearest Wayns",
    branchSubtitle: "Four flagship branches across Saudi Arabia's premier cities — each offering the same exceptional Wayns Coffee experience.",
    branchViewMap: "View on Map",
    branchCallNow: "Call Now",
    branch1Name: "Riyadh — Al Olaya Flagship",
    branch1Address: "King Fahd Road, Al Olaya District, Riyadh",
    branch1Hours: "Daily: 6:00 AM – 1:30 AM",
    branch2Name: "Jeddah — Al Hamra",
    branch2Address: "Prince Mohammed Bin Abdulaziz Rd, Al Hamra, Jeddah",
    branch2Hours: "Daily: 7:00 AM – 1:00 AM",
    branch3Name: "Khobar — Corniche",
    branch3Address: "King Faisal Road, Al Khobar Corniche, Eastern Province",
    branch3Hours: "Daily: 7:00 AM – 12:00 AM",
    branch4Name: "Riyadh — King Abdullah Road",
    branch4Address: "King Abdullah Road, Al Nakheel, Riyadh",
    branch4Hours: "Daily: 6:30 AM – 1:30 AM",

    // Location Page
    locationKicker: "FIND US",
    locationTitle: "Visit Wayns Coffee",
    locationSubtitle: "Our four premium locations bring the Wayns Coffee experience to the heart of Saudi Arabia's finest neighborhoods.",

    // Menu Page
    menuKicker: "FULL MENU",
    menuTitle: "Our Complete Offerings",
    menuSubtitle: "From rare single-origin pour-overs to the royal Saudi Gahwa ceremony — discover the full spectrum of Wayns Coffee.",
    menuFilterAll: "All",
    menuFilterGahwa: "Saudi Gahwa",
    menuFilterEspresso: "Espresso",
    menuFilterColdBrew: "Cold Brew",
    menuFilterTea: "Tea",
    menuFilterPastries: "Pastries",
    menuFilterDates: "Dates",

    // Toast Notifications
    toastOrderSuccess: "Added to your order! ☕",
    toastLangSwitched: "Language switched to English",
    toastSubscribed: "Thank you for subscribing to Wayns Coffee!"
  },

  ar: {
    // Top Bar
    topbarAnnouncement: "تجربة الضيافة السعودية الملكية وقهوة المختصة الحرفية | الرياض • جدة • الخبر",
    topbarHours: "يومياً: 6:00 ص – 1:30 ص",
    topbarContact: "+966 11 456 7890",

    // Navbar
    navHome: "الرئيسية",
    navMenu: "القائمة",
    navBranch: "الفروع",
    navLocation: "الموقع",
    navContact: "اتصل بنا",

    // Mobile Bottom Bar
    bottomHome: "الرئيسية",
    bottomMenu: "القائمة",
    bottomBranch: "الفروع",
    bottomLocation: "الموقع",
    bottomContact: "اتصل بنا",

    // Hero Section
    heroBadge: "قمة ثقافة القهوة السعودية",
    heroTitleLine1: "حيث يلتقي التراث السعودي",
    heroTitleLine2: "بقهوة المختصة",
    heroSubtitle: "استمتع بطقوس القهوة السعودية الراسخة وحبوب الأرابيكا أحادية المصدر المحمصة باحتراف. صنعة مستلهمة من روح الحفاوة السعودية الأصيلة في قلب الرياض.",
    heroBtnExplore: "استكشف القائمة",
    navBranchLabel: "فروعنا",

    // Hero Stats
    heroStat1Number: "100%",
    heroStat1Label: "حبوب أرابيكا مختصة",
    heroStat2Number: "4",
    heroStat2Label: "فروع رئيسية في المملكة",
    heroStat3Number: "جازان",
    heroStat3Label: "حبوب خولاني السعودية",
    heroStat4Number: "4.9 ★",
    heroStat4Label: "رضا الضيوف",

    // Signature Categories (Hero Badges)
    heroCatCoffee: "القهوة",
    heroCatSweets: "الحلويات",
    heroCatTea: "الشاي",
    tickerSpecialistText: "مختصون في الشاي والقهوة المختصة",
 
    // V12 Signature Slow-Drip Specialty Bar (Wayns Coffee Exclusive)
    v12Badge: "ركن واينز المميز",
    v12TitleLine1: "مقطرة قطرة بقطرة:",
    v12TitleHighlight: "تقطير الـ V12 البطيء",
    v12Desc1: "في واينز كافيه، لكل فنجان حكاية حرفية فريدة. تم تصميم برج التقطير الذهبي V12 ليستخلص أنقى الإيحاءات العطرية والفاكهية من أجود حبوب البن الخولاني السعودي الفاخر والإثيوبي أحادي المصدر.",
    v12Desc2: "طقس هادئ يلتقي فيه الوقت والجاذبية والتحكم الدقيق بدرجة الحرارة لنقدم لك فنجاناً بنقاء استثنائي وقوام مخملي بدون أي مرارة.",
    v12Feature1Title: "100% بن أحادي المصدر",
    v12Feature1Desc: "محاصيل مختارة بعناية ومحمصة باحترافية لإبراز حلاوتها الطبيعية.",
    v12Feature2Title: "تقطير نقي وبارد/ساخن",
    v12Feature2Desc: "مذاق فائق النقاء يبرز إيحاءات الكراميل والزهور الطبيعية.",
    v12Btn: "تذوق قهوة V12",

    // Heritage Section (Saudi Gahwa)
    heritageBadge: "طقوس القهوة السعودية الأصيلة",
    heritageTitleLine1: "فن القهوة السعودية",
    heritageTitleHighlight: "الملكية",
    heritageDesc1: "القهوة السعودية أكثر من مجرد مشروب — إنها روح الضيافة السعودية. في واينز كافيه، نكرّم تقليد الدلة الأصيلة المدقوقة يدوياً بالزعفران والهيل وحبوب خولاني النادرة من جازان.",
    heritageDesc2: "كل فنجان يجسد مبادرة عام القهوة السعودية — المرسوم الملكي الذي يحتفي بإرث القهوة المختصة العالمي للمملكة العربية السعودية من جازان إلى المسرح العالمي.",
    heritageStat1: "خولاني أحادي المصدر",
    heritageStat1Label: "منطقة جازان",
    heritageStat2: "القهوة السعودية",
    heritageStat2Label: "تراث اليونسكو",
    heritageBtn1: "قصة قهوتنا",
    heritageBtn2: "استكشف القائمة",
    heritageHighlight1: "الزعفران والهيل",
    heritageHighlight1Sub: "مزيج التوابل التقليدي",
    heritageHighlight2: "تمر المجدول",
    heritageHighlight2Sub: "حصاد المدينة الملكي",

    // Categories
    catKicker: "استكشف عالمنا",
    catTitle: "ماذا تحب أن تطلب اليوم؟",
    catSubtitle: "من القهوة السعودية الأصيلة إلى قهوة الإسبريسو المختصة على مستوى البطولات، كل فنجان احتفاء بثقافة القهوة السعودية.",
    catAll: "الكل",
    catGahwa: "القهوة السعودية",
    catSpecialty: "قهوة مختصة",
    catColdBrew: "كولد برو",
    catTea: "شاي حرفي",
    catDates: "تمور ملكية",
    catPastries: "مخبوزات حرفية",

    // Customer Favorites
    picksKicker: "الاختيارات المميزة",
    picksTitle: "المفضلة لدى الضيوف",
    picksViewAll: "عرض القائمة الكاملة",
    fav1Title: "القهوة السعودية الملكية",
    fav1Desc: "مخمرة بالدلة التقليدية من حبوب خولاني بالزعفران والهيل",
    fav1Price: `28 ${riyalSymbol}`,
    fav2Title: "سبانيش لاتيه بارد",
    fav2Desc: "خلطتنا المميزة مع الحليب المكثف على الثلج",
    fav2Price: `22 ${riyalSymbol}`,
    fav3Title: "بور أوفر خولاني",
    fav3Desc: "حبوب خولاني أحادية المصدر من جازان، تحميص خفيف، نكهات زهرية",
    fav3Price: `32 ${riyalSymbol}`,
    fav4Title: "لاتيه المجدول",
    fav4Desc: "إسبريسو المحل مع شراب تمر المجدول من المدينة وحليب الشوفان",
    fav4Price: `26 ${riyalSymbol}`,
    fav5Title: "كولد برو المميز",
    fav5Desc: "نقيع بطيء 24 ساعة، نكهات الشوكولاتة والجوز",
    fav5Price: `24 ${riyalSymbol}`,
    fav6Title: "كرواسون الفستق",
    fav6Desc: "عجينة مورقة بكريمة الفستق الفرنجيبان",
    fav6Price: `18 ${riyalSymbol}`,

    // Our Story Section
    storyKicker: "قصتنا",
    storyTitleLine1: "وُلدنا من",
    storyTitleHighlight: "شغف سعودي",
    storyTitleLine2: "بالقهوة الرائعة",
    storyDesc: "وُلد واينز كافيه من تعظيم عميق لثقافة القهوة السعودية وسعي دؤوب نحو التميز في القهوة المختصة. نحرص على الحصول على أفضل حبوب خولاني من جازان — المنطقة الوحيدة المنتجة للقهوة في الجزيرة العربية — وندمج طقوس القهوة السعودية العريقة مع أعلى معايير تحضير القهوة في العالم.",
    storyBtn: "اكتشف قصتنا",
    storyFeature1: "باريستا بطولي",
    storyFeature1Sub: "صنعة حرفية على مستوى عالمي",
    storyFeature2: "حبوب خولاني من جازان",
    storyFeature2Sub: "تميز أحادي المصدر",
    storyFeature3: "ضيافة الحفاوة",
    storyFeature3Sub: "ترحيب سعودي أصيل",

    // Newsletter / Stay Connected
    connectedKicker: "ابقَ على تواصل",
    connectedTitle: "خلطات جديدة، عروض حصرية وقصص القهوة السعودية",
    connectedPlaceholder: "أدخل بريدك الإلكتروني",
    connectedBtn: "اشترك",
    badgeGahwa: "قهوة سعودية أصيلة",
    badgeSpecialty: "قهوة مختصة بطولية",
    badgeKhawlani: "حبوب خولاني من جازان",

    // Footer
    footerDesc: "واينز كافيه هي الوجهة الأولى للقهوة المختصة في المملكة العربية السعودية — نكرّم طقوس القهوة السعودية العريقة مع صنعة باريستا عالمية المستوى، ونحرص على الحصول على حبوب خولاني النادرة أحادية المصدر من جازان.",
    footerNavTitle: "روابط سريعة",
    footerContactTitle: "المقر الرئيسي والتواصل",
    footerAddress: "طريق الملك فهد، حي العليا، الرياض 12241، المملكة العربية السعودية",
    footerTax: "معتمد من هيئة الزكاة والضريبة والجمارك ZATCA",
    footerCopyright: "© 2026 Wayns Coffee (ونس كافيه) All Rights Reserved.",
    footerCR: "",
    footerPrivacy: "",
    footerTerms: "",

    // Contact Page
    contactKicker: "تواصل معنا",
    contactTitle: "يسعدنا التواصل معك",
    contactSubtitle: "سواء كنت تخطط لزيارة، أو لديك سؤال عن قهوتنا المختصة، أو تريد حجز فعالية خاصة — نحن هنا.",
    contactNameLabel: "الاسم الكامل",
    contactNamePlaceholder: "اسمك",
    contactEmailLabel: "البريد الإلكتروني",
    contactEmailPlaceholder: "your@email.com",
    contactSubjectLabel: "الموضوع",
    contactSubjectPlaceholder: "كيف يمكننا مساعدتك؟",
    contactMsgLabel: "رسالتك",
    contactMsgPlaceholder: "أخبرنا المزيد...",
    contactSubmitBtn: "إرسال الرسالة",
    contactWhatsapp: "تواصل عبر واتساب",
    contactAddressTitle: "المقر الرئيسي",
    contactPhoneTitle: "الهاتف",
    contactEmailTitle: "البريد الإلكتروني",
    contactHoursTitle: "أوقات العمل",
    contactHoursValue: "يومياً: 6:00 ص – 1:30 ص",

    // Branch Page
    branchKicker: "فروعنا",
    branchTitle: "أقرب فرع واينز إليك",
    branchSubtitle: "أربعة فروع رئيسية في أرقى مدن المملكة العربية السعودية — كل واحد يقدم نفس تجربة واينز كافيه الاستثنائية.",
    branchViewMap: "عرض على الخريطة",
    branchCallNow: "اتصل الآن",
    branch1Name: "الرياض — العليا الرئيسي",
    branch1Address: "طريق الملك فهد، حي العليا، الرياض",
    branch1Hours: "يومياً: 6:00 ص – 1:30 ص",
    branch2Name: "جدة — الحمرا",
    branch2Address: "طريق الأمير محمد بن عبدالعزيز، الحمرا، جدة",
    branch2Hours: "يومياً: 7:00 ص – 1:00 ص",
    branch3Name: "الخبر — الكورنيش",
    branch3Address: "طريق الملك فيصل، كورنيش الخبر، المنطقة الشرقية",
    branch3Hours: "يومياً: 7:00 ص – 12:00 م",
    branch4Name: "الرياض — طريق الملك عبدالله",
    branch4Address: "طريق الملك عبدالله، النخيل، الرياض",
    branch4Hours: "يومياً: 6:30 ص – 1:30 ص",

    // Location Page
    locationKicker: "ابحث عنا",
    locationTitle: "زر واينز كافيه",
    locationSubtitle: "مواقعنا الأربعة الفاخرة تجلب تجربة واينز كافيه إلى قلب أرقى أحياء المملكة العربية السعودية.",

    // Menu Page
    menuKicker: "القائمة الكاملة",
    menuTitle: "عروضنا الكاملة",
    menuSubtitle: "من بور أوفر أحادي المصدر النادر إلى طقوس القهوة السعودية الملكية — اكتشف الطيف الكامل لواينز كافيه.",
    menuFilterAll: "الكل",
    menuFilterGahwa: "القهوة السعودية",
    menuFilterEspresso: "إسبريسو",
    menuFilterColdBrew: "كولد برو",
    menuFilterTea: "شاي",
    menuFilterPastries: "مخبوزات",
    menuFilterDates: "تمور",

    // Toast Notifications
    toastOrderSuccess: "تمت الإضافة إلى طلبك! ☕",
    toastLangSwitched: "تم تحويل اللغة إلى العربية",
    toastSubscribed: "شكراً لاشتراكك في واينز كافيه!"
  }
};

// Smart Device Auto-Translate Detection
function detectDeviceLanguage() {
  // 1. Allow testing via URL parameter (?lang=ar or ?lang=en)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const paramLang = urlParams.get('lang');
    if (paramLang === 'ar' || paramLang === 'en') {
      localStorage.setItem('wayns_lang', paramLang);
      return paramLang;
    }
  } catch (e) {}

  // 2. Saved user preference
  const saved = localStorage.getItem('wayns_lang');
  if (saved === 'ar' || saved === 'en') {
    return saved;
  }

  // 3. Auto-detect browser/phone language
  const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage || ''];
  for (let i = 0; i < browserLanguages.length; i++) {
    const l = (browserLanguages[i] || '').toLowerCase();
    if (l.startsWith('ar')) {
      return 'ar';
    }
  }

  // Default: English
  return 'en';
}

let currentLang = detectDeviceLanguage();

// Set language function
function setLanguage(lang, suppressToast = false) {
  currentLang = lang;
  localStorage.setItem('wayns_lang', lang);

  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Update text for all elements with data-i18n
  const translatableElements = document.querySelectorAll('[data-i18n]');
  translatableElements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      const val = translations[lang][key];
      if (typeof val === 'string' && val.includes('<')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });

  // Update placeholders
  const inputs = document.querySelectorAll('[data-i18n-placeholder]');
  inputs.forEach(input => {
    const key = input.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      input.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update active state on language toggle buttons
  updateLangToggleButtons();

  // Refresh Lucide icons
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }

  // Show toast notification
  if (!suppressToast) {
    showToast(translations[lang].toastLangSwitched);
  }
}

// Toggle language
function toggleLanguage() {
  const nextLang = currentLang === 'en' ? 'ar' : 'en';
  setLanguage(nextLang);
}

// Update buttons visual indicator
function updateLangToggleButtons() {
  const btns = document.querySelectorAll('.lang-btn');
  btns.forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === currentLang) {
      btn.classList.add('bg-[#04300d]', 'text-white', 'font-bold');
      btn.classList.remove('text-gray-600', 'text-gray-500', 'hover:text-[#04300d]');
    } else {
      btn.classList.remove('bg-[#04300d]', 'text-white', 'font-bold');
      btn.classList.add('text-gray-600', 'hover:text-[#04300d]');
    }
  });
}

// Toast notification helper
function showToast(message) {
  let toast = document.getElementById('wayns-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'wayns-toast';
    toast.className = 'fixed bottom-6 end-6 z-50 bg-[#04300d] text-white border border-[#234827] px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 transition-all duration-300 transform translate-y-20 opacity-0';
    toast.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
      <span id="wayns-toast-msg" class="text-xs font-semibold"></span>
    `;
    document.body.appendChild(toast);
  }

  const msgSpan = document.getElementById('wayns-toast-msg');
  msgSpan.textContent = message;

  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3000);
}

// Mobile Menu Drawer Handler
function initMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenu = document.getElementById('close-mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    });
  }

  if (closeMenu && mobileMenu) {
    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.classList.add('hidden');
    });
  });
}

// Navbar Scroll Effect
function initNavbarScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-md', 'bg-white/95');
      header.classList.remove('bg-[#FAF7F2]/90');
    } else {
      header.classList.remove('shadow-md', 'bg-white/95');
      header.classList.add('bg-[#FAF7F2]/90');
    }
  });
}

// Menu filter functionality
// Menu filter functionality & section separation
function initMenuFilter() {
  const filterBtns = document.querySelectorAll('.menu-filter-btn, button[data-filter], button[data-category]');
  const sections = document.querySelectorAll('[data-menu-section]');
  const allCards = document.querySelectorAll('.menu-card[data-category]');

  function applyFilter(category) {
    // Update button active states
    filterBtns.forEach(b => {
      const cat = b.getAttribute('data-filter') || b.getAttribute('data-category');
      if (cat === category) {
        b.classList.remove('bg-white', 'text-[#141C15]', 'text-[#04300d]');
        b.classList.add('bg-[#04300d]', 'text-white');
      } else if (cat) {
        b.classList.remove('bg-[#04300d]', 'text-white');
        b.classList.add('bg-white', 'text-[#141C15]');
      }
    });

    // Show/hide sections or individual cards
    if (sections.length > 0) {
      sections.forEach(sec => {
        const secCat = sec.getAttribute('data-menu-section');
        if (category === 'all' || secCat === category) {
          sec.style.display = '';
        } else {
          sec.style.display = 'none';
        }
      });
    } else {
      allCards.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter') || btn.getAttribute('data-category');
      if (filter) applyFilter(filter);
    });
  });

  // Handle URL query parameter e.g., menu.html?cat=tea
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  if (catParam) {
    applyFilter(catParam);
  }
}

// Location filter functionality
function initLocationFilter() {
  const cityBtns = document.querySelectorAll('[data-city]');
  const locationCards = document.querySelectorAll('[data-location-city]');

  cityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const city = btn.getAttribute('data-city');

      cityBtns.forEach(b => {
        b.classList.remove('bg-[#04300d]', 'text-white');
        b.classList.add('bg-white', 'text-[#04300d]');
      });
      btn.classList.remove('bg-white', 'text-[#04300d]');
      btn.classList.add('bg-[#04300d]', 'text-white');

      locationCards.forEach(card => {
        if (city === 'all' || card.getAttribute('data-location-city') === city) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Contact form handler
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Your message has been sent! We will contact you soon.');
      form.reset();
    });
  }
}

// Newsletter Subscription Handler
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast(translations[currentLang].toastSubscribed);
        input.value = '';
      }
    });
  }
}

// Order buttons interaction
function initOrderButtons() {
  document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-add-fav') || e.target.closest('.btn-order-item')) {
      showToast(translations[currentLang].toastOrderSuccess);
    }
  });
}

// DOM Ready Handler
document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
  setLanguage(currentLang, true);
  initMobileMenu();
  initNavbarScroll();
  initOrderButtons();
  initNewsletter();
  initMenuFilter();
  initLocationFilter();
  initContactForm();
});

// Listen for system/device language change
window.addEventListener('languagechange', () => {
  const newLang = detectDeviceLanguage();
  if (newLang !== currentLang) {
    setLanguage(newLang);
  }
});
