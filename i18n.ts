
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const LANGUAGES = [
  { code: 'en', name: 'English', dir: 'ltr', flag: '🇺🇸' },
  { code: 'ms', name: 'Bahasa Melayu', dir: 'ltr', flag: '🇲🇾' },
  { code: 'zh', name: '中文 (简体)', dir: 'ltr', flag: '🇨🇳' },
  { code: 'hi', name: 'हिन्दी', dir: 'ltr', flag: '🇮🇳' },
  { code: 'es', name: 'Español', dir: 'ltr', flag: '🇪🇸' },
  { code: 'ar', name: 'العربية', dir: 'rtl', flag: '🇸🇦' },
];

const resources = {
  en: {
    translation: {
      common: {
        learnMore: "Learn More",
        viewAll: "View All",
        getStarted: "Get Started",
        readMore: "Read More",
        applyNow: "Apply Now",
        home: "Home",
        selectLanguage: "Select Language",
        popular: "POPULAR",
        submit: "Submit Request"
      },
      nav: {
        company: 'Company',
        services: 'Services',
        pricing: 'Pricing Plans',
        caseStudies: 'Case Studies',
        news: 'News',
        contact: 'Contact',
        getInTouch: 'Get In Touch'
      },
      breadcrumbs: {
        company: "Company",
        services: "Services",
        pricing: "Pricing",
        "case-studies": "Case Studies",
        news: "News",
        contact: "Contact",
        career: "Career",
        "privacy-policy": "Privacy Policy",
        "terms-of-service": "Terms of Service"
      },
      hero: {
        title_static: 'Outpace Your Competition.',
        title_prefix: 'Built for Digital',
        satisfied_customers: 'satisfied customers',
        dynamic: [
          {
            word: "Dominance",
            badges: [
              "Rank #1 on Google Search",
              "Own Your Market Niche",
              "Build Unshakeable Brand Authority"
            ]
          },
          {
            word: "Performance",
            badges: [
              "Sub-Second Page Load Speeds",
              "Seamless Mobile Experience",
              "Enterprise-Grade Cyber Security"
            ]
          },
          {
            word: "Revenue",
            badges: [
              "High-Converting Sales Funnels",
              "Automated Lead Generation",
              "Maximize Ad Spend ROI"
            ]
          }
        ]
      },
      home: {
        globalPresence: {
          title: "Global Client Presence",
          clients: {
            c1: "Integrated payment infrastructure for global scaling.",
            c2: "Banking-as-a-Service platform development.",
            c3: "Renewable energy data visualization dashboard.",
            c4: "Smart city logistics automation systems.",
            c5: "Cross-border e-commerce solution.",
            c6: "Enterprise cyber security auditing tools."
          }
        },
        about: {
          badge: "Who we are",
          title: "Your partners for digital success",
          desc: "We are a dedicated team focused on helping businesses grow through practical and measurable digital solutions. Our strengths are in building high performing websites, driving traffic through digital marketing and SEO, and improving operations with workflow automation and AI tools. Every solution we deliver is designed to help you save time, reach more customers, and grow with confidence.",
          cards: {
            web: {
              title: "Website and E Commerce Solutions",
              subtitle: "Professional websites built to convert.",
              desc: "Launch a high performing business website or online store designed to build trust, capture leads, and support your growth. Everything is fully managed under one subscription."
            },
            marketing: {
              title: "Marketing and SEO Growth",
              subtitle: "Be discovered. Get leads. Grow consistently.",
              desc: "From content and social media to SEO and performance ads, we help you reach the right audience and turn visibility into measurable business results."
            },
            automation: {
              title: "Workflow and AI Automation",
              subtitle: "Save time with smarter systems.",
              desc: "Automate repetitive work, connect your tools, and streamline operations with custom workflows and AI powered solutions."
            }
          },
          cta: {
            badge: "Need help",
            title: "Free advice. Book call back",
            btn: "Let's Talk"
          }
        },
        certifications: {
          title: "Certified & Featured By"
        },
        portfolio: {
          badge: "Selected works",
          title: "Our finished projects",
          desc: "Read how we've helped some of the biggest brands transform their business.",
          viewAll: "View All Works"
        },
        team: {
          badge: "Our expert crew",
          title: "Meet the leadership team",
          desc: "We are all passionate and committed to deliver high quality services to our clients."
        },
        stats: {
          badge: "Why choose us",
          title: "Results that we sucessfully deliver",
          projects: "projects delivered",
          retention: "client retention",
          hours: "hours saved",
          stat1Desc: "Our work has helped clients increase lead flow and achieve measurable online growth across multiple industries.",
          stat2Desc: "A strong retention rate built on consistent monthly improvements and clear, transparent reporting.",
          stat3Desc: "Automation and workflow systems have helped clients save significant operational hours and reduce manual work.",
          circleText: "Business Development Solution IT"
        },
        testimonials: {
          largeText: "testimonials",
          badge: "Hear from customer"
        },
        blog: {
          badge: "Recent post",
          title: "Latest news and industry insights",
          featuredDesc: "We bring deep, functional expertise, but are known for our holistic perspective: we capture value across boundaries."
        },
        faq: {
          badge: "FAQ",
          title: "Frequently Asked Questions",
          desc: "Can't find the answer you're looking for? Reach out to our customer support team."
        }
      },
      contact: {
        title: "Get in Touch",
        subtitle: "Have a project in mind? We'd love to hear from you.",
        badge: "Contact Us",
        visitUs: "Visit Us",
        emailUs: "Email Us",
        callUs: "Call Us",
        whatsapp: "WhatsApp",
        startConversation: "Start a conversation",
        quickChat: "Quick chat on WhatsApp",
        sendMessage: "Send us a message",
        formDesc: "Fill out the form below and we will get back to you within 24 hours.",
        name: "Name",
        namePlaceholder: "John Doe",
        email: "Email",
        emailPlaceholder: "john@example.com",
        phone: "Phone",
        phonePlaceholder: "+60 10-288 2827",
        subject: "Subject",
        subjectPlaceholder: "Project Inquiry",
        message: "Message",
        messagePlaceholder: "Tell us about your project...",
        btnSend: "Send Message",
        workingHours: "Working Hours",
        viewOnMap: "View on Map",
        map: {
          hq: { name: "Global HQ", role: "Headquarters", location: "Kuala Lumpur, Malaysia" },
          hub: { name: "Regional Hub", role: "Operations", location: "Singapore" },
          tech: { name: "Tech Center", role: "R&D", location: "San Francisco, USA" }
        }
      },
      company: {
        title: "We are JXING",
        subtitle: "A team of expert designers, web developers and marketers delivering digital success.",
        aboutBadge: "About JXING Tech Group",
        aboutTitle: "Practical, measurable, and scalable technology.",
        aboutDesc1: "JXING Tech is a digital solutions company that helps businesses grow through practical, measurable, and scalable technology.",
        aboutDesc2: "We believe that digital growth should be simple, affordable, and achievable for every business.",
        brochureTitle: "Download a company brochure",
        brochureTagline: "• Just starting out?",
        brochureBtn: "Get A Copy",
        vision: "Our Vision",
        visionDesc: "To become the most trusted and innovative digital growth partner for businesses across Southeast Asia and beyond.",
        mission: "Our Mission",
        missionDesc: "To help businesses accelerate their digital success through scalable web solutions, e commerce innovation, AI powered automation, and data driven marketing.",
        valuesTitle: "Our Core Values",
        valuesBadge: "Our Culture",
        ctaTitle: "We are committed to delivering only the best"
      },
      services: {
        badge: "Our services",
        title: "Digital services to grow your business",
        viewAll: "View All Services",
        innovativeTitle: "Innovative digital solution services",
        whyChooseBadge: "Why choose us",
        whyChooseTitle: "Reimagined user experiences",
        whyChooseBg: "why choose us",
        whyChooseList: [
          { title: "Customized Solutions", desc: "Building strong media connections to elevate your brand's visibility and credibility through tailored strategies." },
          { title: "Data-Driven Approach", desc: "We utilize advanced analytics to guide every decision, ensuring your growth is measurable and sustainable." },
          { title: "Expert Support", desc: "Our team of industry veterans provides 24/7 support to ensure your digital operations never miss a beat." }
        ]
      },
      footer: {
        tellUs: 'Tell us about your project',
        letsTalk: "Let's talk",
        writeToUs: 'Write to us',
        insightTitle: 'Get the latest inspiration & insights',
        emailPlaceholder: 'Your Email...',
        works: 'Works',
        expertise: 'Expertise',
        about: 'About',
        team: 'Team',
        awards: 'Awards',
        blog: 'Blog',
        careers: 'Careers',
        partnerships: 'Partnerships',
        contact: 'Contact',
        headOffice: 'Head office',
        copyright: '© 2024 JXING Tech Group Sdn. Bhd. All rights reserved. Powered with ❤️ from JXING Tech',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        followUs: 'Follow Us'
      },
      pages: {
        serviceDetail: {
          badge: "Service Detail",
          overviewBadge: "Overview",
          aboutTitle: "About this Service",
          whyChooseBadge: "Why Choose This",
          benefitsTitle: "Key Benefits",
          whatYouGetBadge: "What You Get",
          deliverablesTitle: "Service Deliverables",
          deliverablesFallback: "Specific deliverables tailored to your needs.",
          benefitsFallback: "Details coming soon...",
          viewAll: "View All Services"
        },
        caseStudies: {
          title: "Case Studies",
          subtitle: "Explore how we have helped clients across various industries achieve their digital goals.",
          badge: "Our Work"
        },
        news: {
          title: "Latest News",
          subtitle: "Insights, trends, and updates from the world of digital innovation and design.",
          badge: "Blog"
        },
        career: {
          title: "Career",
          subtitle: "By joining our team, you'll have the opportunity to work on cutting projects, leverage the latest technologies, and make a real impact.",
          badge: "Home • Career",
          applyBadge: "Apply now",
          openingsTitle: "Current openings",
          learnMore: "Learn More",
          oppsBadge: "Opportunities with us",
          joinTitle: "Join our innovative team",
          joinDesc: "If you are unable to find a suitable opening please do not worry. We are always up to discover new talents, kindly mail us your resume and portfolio link to",
          contactBtn: "Contact Now"
        },
        pricing: {
          heroTitle: "Build Your Digital Growth Plan",
          heroSubtitle: "Select services, customize features, and request a tailored quote.",
          badge: "Pricing & Plans",
          addToPlan: "Add to Plan",
          added: "Added",
          removeFromQuote: "Remove",
          yourPlan: "Your Growth Plan",
          requestQuote: "Request Quote & Consult",
          customNotesPlaceholder: "Add specific notes (e.g. number of pages)...",
          estInvestment: "Est. Investment",
          emptyQuote: "Select services from the list to build your custom plan.",
          viewDetails: "View Details",
          modalTitle: "Finalize Your Request",
          modalDesc: "Review your selected services and provide your contact details. We'll discuss the specifics during your consultation.",
          nameLabel: "Full Name",
          emailLabel: "Work Email",
          phoneLabel: "Phone Number",
          notesLabel: "Additional Project Context",
          submitting: "Submitting...",
          successTitle: "Request Received!",
          successDesc: "Redirecting you to our booking calendar...",
          upfrontTotal: "Upfront / One-time",
          monthlyTotal: "Monthly Recurring"
        },
        notFound: {
          title: "Oops! Page not found",
          desc: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
          backHome: "Back to Home"
        },
        servicesPage: {
          subtitle: "Innovative digital solutions designed to help you grow, optimize, and succeed in a competitive landscape."
        }
      },
      legal: {
        privacy: {
          title: "Privacy Policy",
          subtitle: "We are committed to protecting your personal information and your right to privacy.",
          intro: "Last updated: January 01, 2024"
        },
        terms: {
          title: "Terms of Service",
          subtitle: "Please read these terms and conditions carefully before using our service.",
          intro: "Last updated: January 01, 2024"
        }
      },
      meta: { description: "JXING Tech is a digital solutions company." },
      data: {
        // Dynamic data keys populated in useTranslatedData via constants
      }
    }
  },
  ms: {
    translation: {
      common: {
        learnMore: "Ketahui Lebih Lanjut",
        viewAll: "Lihat Semua",
        getStarted: "Mula Sekarang",
        readMore: "Baca Lebih Lanjut",
        applyNow: "Mohon Sekarang",
        home: "Laman Utama",
        selectLanguage: "Pilih Bahasa",
        popular: "POPULAR",
        submit: "Hantar Permintaan"
      },
      nav: {
        company: 'Syarikat',
        services: 'Perkhidmatan',
        pricing: 'Pelan Harga',
        caseStudies: 'Kajian Kes',
        news: 'Berita',
        contact: 'Hubungi',
        getInTouch: 'Hubungi Kami'
      },
      breadcrumbs: {
        company: "Syarikat",
        services: "Perkhidmatan",
        pricing: "Harga",
        "case-studies": "Kajian Kes",
        news: "Berita",
        contact: "Hubungi",
        career: "Kerjaya",
        "privacy-policy": "Dasar Privasi",
        "terms-of-service": "Terma Perkhidmatan"
      },
      hero: {
        title_static: 'Tandingi Pesaing Anda.',
        title_prefix: 'Dibina untuk',
        satisfied_customers: 'pelanggan berpuas hati',
        dynamic: [
          {
            word: "Dominasi",
            badges: [
              "Ranking #1 di Carian Google",
              "Kuasai Pasaran Niche Anda",
              "Bina Autoriti Jenama Yang Kukuh"
            ]
          },
          {
            word: "Prestasi",
            badges: [
              "Kelajuan Muat Halaman Sub-Saat",
              "Pengalaman Mudah Alih Lancar",
              "Keselamatan Siber Gred Enterprise"
            ]
          },
          {
            word: "Hasil",
            badges: [
              "Corong Jualan Berkonversi Tinggi",
              "Penjanaan Lead Automatik",
              "Maksimumkan ROI Iklan"
            ]
          }
        ]
      },
      home: {
        globalPresence: {
          title: "Kehadiran Pelanggan Global",
          clients: {
            c1: "Infrastruktur pembayaran bersepadu untuk skala global.",
            c2: "Pembangunan platform Perbankan-sebagai-Perkhidmatan.",
            c3: "Papan pemuka visualisasi data tenaga boleh diperbaharui.",
            c4: "Sistem automasi logistik bandar pintar.",
            c5: "Penyelesaian e-dagang rentas sempadan.",
            c6: "Alat pengauditan keselamatan siber perusahaan."
          }
        },
        about: {
          badge: "Siapa kami",
          title: "Rakan kongsi kejayaan digital anda",
          desc: "Kami adalah pasukan berdedikasi yang fokus membantu perniagaan berkembang melalui penyelesaian digital yang praktikal dan boleh diukur. Kekuatan kami adalah dalam membina laman web berprestasi tinggi, memacu trafik melalui pemasaran digital dan SEO, serta meningkatkan operasi dengan automasi aliran kerja dan alat AI. Setiap penyelesaian yang kami sampaikan direka untuk membantu anda menjimatkan masa, menjangkau lebih ramai pelanggan, dan berkembang dengan yakin.",
          cards: {
            web: {
              title: "Penyelesaian Laman Web dan E-Dagang",
              subtitle: "Laman web profesional yang dibina untuk menukar.",
              desc: "Lancarkan laman web perniagaan atau kedai dalam talian berprestasi tinggi yang direka untuk membina kepercayaan, menangkap lead, dan menyokong pertumbuhan anda. Semuanya diuruskan sepenuhnya di bawah satu langganan."
            },
            marketing: {
              title: "Pemasaran dan Pertumbuhan SEO",
              subtitle: "Ditemui. Dapatkan lead. Berkembang secara konsisten.",
              desc: "Dari kandungan dan media sosial hingga SEO dan iklan prestasi, kami membantu anda menjangkau audiens yang tepat dan menukar keterlihatan kepada hasil perniagaan yang boleh diukur."
            },
            automation: {
              title: "Automasi Aliran Kerja dan AI",
              subtitle: "Jimatkan masa dengan sistem yang lebih pintar.",
              desc: "Automasikan kerja berulang, sambungkan alat anda, dan lancarkan operasi dengan aliran kerja tersuai dan penyelesaian dikuasakan AI."
            }
          },
          cta: {
            badge: "Perlukan bantuan",
            title: "Nasihat percuma. Tempah panggilan balik",
            btn: "Jom Bincang"
          }
        },
        certifications: {
          title: "Disahkan & Dipaparkan Oleh"
        },
        portfolio: {
          badge: "Karya terpilih",
          title: "Projek siap kami",
          desc: "Baca bagaimana kami telah membantu beberapa jenama terbesar mengubah perniagaan mereka.",
          viewAll: "Lihat Semua Karya"
        },
        team: {
          badge: "Pasukan pakar kami",
          title: "Kenali pasukan kepimpinan",
          desc: "Kami semua bersemangat dan komited untuk memberikan perkhidmatan berkualiti tinggi kepada pelanggan kami."
        },
        stats: {
          badge: "Kenapa pilih kami",
          title: "Hasil yang berjaya kami sampaikan",
          projects: "projek dihantar",
          retention: "pengekalan pelanggan",
          hours: "jam dijimatkan",
          stat1Desc: "Kerja kami telah membantu pelanggan meningkatkan aliran lead dan mencapai pertumbuhan dalam talian yang boleh diukur merentasi pelbagai industri.",
          stat2Desc: "Kadar pengekalan yang kukuh dibina atas penambahbaikan bulanan yang konsisten dan pelaporan yang jelas serta telus.",
          stat3Desc: "Sistem automasi dan aliran kerja telah membantu pelanggan menjimatkan masa operasi yang ketara dan mengurangkan kerja manual.",
          circleText: "Pembangunan Perniagaan Penyelesaian IT"
        },
        testimonials: {
          largeText: "testimoni",
          badge: "Dengar dari pelanggan"
        },
        blog: {
          badge: "Hantaran terkini",
          title: "Berita terkini dan wawasan industri",
          featuredDesc: "Kami membawa kepakaran fungsional yang mendalam, tetapi dikenali dengan perspektif holistik kami: kami menangkap nilai merentasi sempadan."
        },
        faq: {
          badge: "Soalan Lazim",
          title: "Soalan Yang Kerap Ditanya",
          desc: "Tidak jumpa jawapan yang anda cari? Hubungi pasukan sokongan pelanggan kami."
        }
      },
      contact: {
        title: "Hubungi Kami",
        subtitle: "Ada idea projek? Kami ingin mendengar daripada anda.",
        badge: "Hubungi Kami",
        visitUs: "Lawati Kami",
        emailUs: "Emel Kami",
        callUs: "Hubungi Kami",
        whatsapp: "WhatsApp",
        startConversation: "Mulakan perbualan",
        quickChat: "Sembang pantas di WhatsApp",
        sendMessage: "Hantar mesej kepada kami",
        formDesc: "Isi borang di bawah dan kami akan kembali kepada anda dalam masa 24 jam.",
        name: "Nama",
        namePlaceholder: "Ali bin Abu",
        email: "Emel",
        emailPlaceholder: "ali@example.com",
        phone: "Telefon",
        phonePlaceholder: "+60 10-288 2827",
        subject: "Subjek",
        subjectPlaceholder: "Pertanyaan Projek",
        message: "Mesej",
        messagePlaceholder: "Beritahu kami tentang projek anda...",
        btnSend: "Hantar Mesej",
        workingHours: "Waktu Bekerja",
        viewOnMap: "Lihat di Peta",
        map: {
          hq: { name: "Ibu Pejabat Global", role: "Ibu Pejabat", location: "Kuala Lumpur, Malaysia" },
          hub: { name: "Hab Serantau", role: "Operasi", location: "Singapura" },
          tech: { name: "Pusat Teknologi", role: "R&D", location: "San Francisco, USA" }
        }
      },
      company: {
        title: "Kami adalah JXING",
        subtitle: "Pasukan pereka pakar, pembangun web dan pemasar yang memberikan kejayaan digital.",
        aboutBadge: "Tentang JXING Tech Group",
        aboutTitle: "Teknologi praktikal, boleh diukur, dan berskala.",
        aboutDesc1: "JXING Tech adalah syarikat penyelesaian digital yang membantu perniagaan berkembang melalui teknologi praktikal, boleh diukur, dan berskala.",
        aboutDesc2: "Kami percaya bahawa pertumbuhan digital haruslah mudah, mampu milik, dan boleh dicapai untuk setiap perniagaan.",
        brochureTitle: "Muat turun brosur syarikat",
        brochureTagline: "• Baru bermula?",
        brochureBtn: "Dapatkan Salinan",
        vision: "Visi Kami",
        visionDesc: "Untuk menjadi rakan kongsi pertumbuhan digital yang paling dipercayai dan inovatif untuk perniagaan di seluruh Asia Tenggara dan seterusnya.",
        mission: "Misi Kami",
        missionDesc: "Untuk membantu perniagaan mempercepatkan kejayaan digital mereka melalui penyelesaian web berskala, inovasi e-dagang, automasi dikuasakan AI, dan pemasaran berpandukan data.",
        valuesTitle: "Nilai Teras Kami",
        valuesBadge: "Budaya Kami",
        ctaTitle: "Kami komited untuk memberikan hanya yang terbaik"
      },
      services: {
        badge: "Perkhidmatan kami",
        title: "Perkhidmatan digital untuk mengembangkan perniagaan anda",
        viewAll: "Lihat Semua Perkhidmatan",
        innovativeTitle: "Perkhidmatan penyelesaian digital inovatif",
        whyChooseBadge: "Kenapa pilih kami",
        whyChooseTitle: "Pengalaman pengguna yang dibayangkan semula",
        whyChooseBg: "kenapa pilih kami",
        whyChooseList: [
          { title: "Penyelesaian Tersuai", desc: "Membina hubungan media yang kukuh untuk meningkatkan keterlihatan dan kredibiliti jenama anda melalui strategi yang disesuaikan." },
          { title: "Pendekatan Berpandukan Data", desc: "Kami menggunakan analisis canggih untuk memandu setiap keputusan, memastikan pertumbuhan anda boleh diukur dan mampan." },
          { title: "Sokongan Pakar", desc: "Pasukan veteran industri kami menyediakan sokongan 24/7 untuk memastikan operasi digital anda tidak pernah terlepas." }
        ]
      },
      footer: {
        tellUs: 'Beritahu kami tentang projek anda',
        letsTalk: "Jom bincang",
        writeToUs: 'Tulis kepada kami',
        insightTitle: 'Dapatkan inspirasi & wawasan terkini',
        emailPlaceholder: 'Emel Anda...',
        works: 'Karya',
        expertise: 'Kepakaran',
        about: 'Tentang',
        team: 'Pasukan',
        awards: 'Anugerah',
        blog: 'Blog',
        careers: 'Kerjaya',
        partnerships: 'Kerjasama',
        contact: 'Hubungi',
        headOffice: 'Ibu pejabat',
        copyright: '© 2024 JXING Tech Group Sdn. Bhd. Hak cipta terpelihara. Dikuasakan dengan ❤️ dari JXING Tech',
        privacy: 'Dasar Privasi',
        terms: 'Terma Perkhidmatan',
        followUs: 'Ikuti Kami'
      },
      pages: {
        serviceDetail: {
          badge: "Butiran Perkhidmatan",
          overviewBadge: "Gambaran Keseluruhan",
          aboutTitle: "Tentang Perkhidmatan ini",
          whyChooseBadge: "Kenapa Pilih Ini",
          benefitsTitle: "Manfaat Utama",
          whatYouGetBadge: "Apa Yang Anda Dapat",
          deliverablesTitle: "Hasil Serahan Perkhidmatan",
          deliverablesFallback: "Hasil serahan khusus yang disesuaikan dengan keperluan anda.",
          benefitsFallback: "Butiran akan datang...",
          viewAll: "Lihat Semua Perkhidmatan"
        },
        caseStudies: {
          title: "Kajian Kes",
          subtitle: "Terokai bagaimana kami telah membantu pelanggan merentasi pelbagai industri mencapai matlamat digital mereka.",
          badge: "Kerja Kami"
        },
        news: {
          title: "Berita Terkini",
          subtitle: "Wawasan, trend, dan kemas kini dari dunia inovasi digital dan reka bentuk.",
          badge: "Blog"
        },
        career: {
          title: "Kerjaya",
          subtitle: "Dengan menyertai pasukan kami, anda akan berpeluang bekerja pada projek canggih, memanfaatkan teknologi terkini, dan membuat impak sebenar.",
          badge: "Laman Utama • Kerjaya",
          applyBadge: "Mohon sekarang",
          openingsTitle: "Kekosongan semasa",
          learnMore: "Ketahui Lebih Lanjut",
          oppsBadge: "Peluang bersama kami",
          joinTitle: "Sertai pasukan inovatif kami",
          joinDesc: "Jika anda tidak dapat mencari kekosongan yang sesuai, jangan risau. Kami sentiasa bersedia untuk menemui bakat baru, sila emelkan resume dan pautan portfolio anda ke",
          contactBtn: "Hubungi Sekarang"
        },
        pricing: {
          heroTitle: "Bina Pelan Pertumbuhan Digital Anda",
          heroSubtitle: "Pilih perkhidmatan, sesuaikan ciri, dan minta sebut harga tersuai.",
          badge: "Harga & Pelan",
          addToPlan: "Tambah ke Pelan",
          added: "Ditambah",
          removeFromQuote: "Buang",
          yourPlan: "Pelan Pertumbuhan Anda",
          requestQuote: "Minta Sebut Harga & Rundingan",
          customNotesPlaceholder: "Tambah nota khusus (cth: bilangan halaman)...",
          estInvestment: "Anggaran Pelaburan",
          emptyQuote: "Pilih perkhidmatan dari senarai untuk membina pelan tersuai anda.",
          viewDetails: "Lihat Butiran",
          modalTitle: "Muktamadkan Permintaan Anda",
          modalDesc: "Semak perkhidmatan pilihan anda dan berikan butiran hubungan anda. Kami akan membincangkan butiran khusus semasa rundingan.",
          nameLabel: "Nama Penuh",
          emailLabel: "Emel Kerja",
          phoneLabel: "Nombor Telefon",
          notesLabel: "Konteks Projek Tambahan",
          submitting: "Sedang menghantar...",
          successTitle: "Permintaan Diterima!",
          successDesc: "Mengalihkan anda ke kalendar tempahan kami...",
          upfrontTotal: "Pendahuluan / One-time",
          monthlyTotal: "Berulang Bulanan"
        },
        notFound: {
          title: "Aduh! Halaman tidak dijumpai",
          desc: "Halaman yang anda cari mungkin telah dibuang, nama ditukar, atau sementara tidak tersedia.",
          backHome: "Kembali ke Laman Utama"
        },
        servicesPage: {
          subtitle: "Penyelesaian digital inovatif yang direka untuk membantu anda berkembang, mengoptimumkan, dan berjaya dalam landskap yang kompetitif."
        }
      },
      legal: {
        privacy: {
          title: "Dasar Privasi",
          subtitle: "Kami komited untuk melindungi maklumat peribadi anda dan hak privasi anda.",
          intro: "Kemas kini terakhir: 01 Januari 2024"
        },
        terms: {
          title: "Terma Perkhidmatan",
          subtitle: "Sila baca terma dan syarat ini dengan teliti sebelum menggunakan perkhidmatan kami.",
          intro: "Kemas kini terakhir: 01 Januari 2024"
        }
      },
      meta: { description: "JXING Tech adalah syarikat penyelesaian digital." },
      data: {
      }
    }
  },
  hi: {
    translation: {
      common: {
        learnMore: "और जानें",
        viewAll: "सभी देखें",
        getStarted: "शुरू करें",
        readMore: "अधिक पढ़ें",
        applyNow: "अभी आवेदन करें",
        home: "होम",
        selectLanguage: "भाषा चुनें",
        popular: "लोकप्रिय",
        submit: "अनुरोध सबमिट करें"
      },
      nav: {
        company: 'कंपनी',
        services: 'सेवाएं',
        pricing: 'मूल्य निर्धारण योजनाएं',
        caseStudies: 'केस स्टडीज',
        news: 'समाचार',
        contact: 'संपर्क करें',
        getInTouch: 'संपर्क में रहें'
      },
      breadcrumbs: {
        company: "कंपनी",
        services: "सेवाएं",
        pricing: "मूल्य निर्धारण",
        "case-studies": "केस स्टडीज",
        news: "समाचार",
        contact: "संपर्क",
        career: "करियर",
        "privacy-policy": "गोपनीयता नीति",
        "terms-of-service": "सेवा की शर्तें"
      },
      hero: {
        title_static: 'अपने प्रतिस्पर्धियों से आगे निकलें।',
        title_prefix: 'डिजिटल के लिए बनाया गया',
        satisfied_customers: 'संतुष्ट ग्राहक',
        dynamic: [
          {
            word: "प्रभुत्व",
            badges: [
              "Google खोज पर #1 रैंक",
              "अपने बाजार क्षेत्र का स्वामित्व",
              "अटूट ब्रांड अधिकार बनाएं"
            ]
          },
          {
            word: "प्रदर्शन",
            badges: [
              "उप-सेकंड पृष्ठ लोड गति",
              "सहज मोबाइल अनुभव",
              "उद्यम-ग्रेड साइबर सुरक्षा"
            ]
          },
          {
            word: "राजस्व",
            badges: [
              "उच्च-परिवर्तन बिक्री फ़नल",
              "स्वचालित लीड जनरेशन",
              "विज्ञापन खर्च ROI को अधिकतम करें"
            ]
          }
        ]
      },
      home: {
        globalPresence: {
          title: "वैश्विक ग्राहक उपस्थिति",
          clients: {
            c1: "वैश्विक स्केलिंग के लिए एकीकृत भुगतान बुनियादी ढांचा।",
            c2: "बैंकिंग-एज़-ए-सर्विस प्लेटफ़ॉर्म विकास।",
            c3: "अक्षय ऊर्जा डेटा विज़ुअलाइज़ेशन डैशबोर्ड।",
            c4: "स्मार्ट सिटी लॉजिस्टिक्स स्वचालन प्रणाली।",
            c5: "सीमा पार ई-कॉमर्स समाधान।",
            c6: "उद्यम साइबर सुरक्षा ऑडिटिंग उपकरण।"
          }
        },
        about: {
          badge: "हम कौन हैं",
          title: "डिजिटल सफलता के लिए आपके भागीदार",
          desc: "हम एक समर्पित टीम हैं जो व्यावहारिक और मापने योग्य डिजिटल समाधानों के माध्यम से व्यवसायों को बढ़ने में मदद करने पर केंद्रित है। हमारी ताकत उच्च प्रदर्शन वाली वेबसाइट बनाने, डिजिटल मार्केटिंग और एसईओ के माध्यम से ट्रैफ़िक चलाने, और वर्कफ़्लो स्वचालन और एआई टूल के साथ संचालन में सुधार करने में है। हमारे द्वारा दिया जाने वाला हर समाधान आपको समय बचाने, अधिक ग्राहकों तक पहुंचने और विश्वास के साथ बढ़ने में मदद करने के लिए डिज़ाइन किया गया है।",
          cards: {
            web: {
              title: "वेबसाइट और ई-कॉमर्स समाधान",
              subtitle: "कन्वर्ट करने के लिए बनाई गई पेशेवर वेबसाइटें।",
              desc: "विश्वास बनाने, लीड हासिल करने और आपके विकास का समर्थन करने के लिए डिज़ाइन की गई उच्च प्रदर्शन वाली व्यावसायिक वेबसाइट या ऑनलाइन स्टोर लॉन्च करें। सब कुछ एक सदस्यता के तहत पूरी तरह से प्रबंधित है।"
            },
            marketing: {
              title: "मार्केटिंग और एसईओ विकास",
              subtitle: "खोजे जाएं। लीड प्राप्त करें। लगातार बढ़ें।",
              desc: "सामग्री और सोशल मीडिया से लेकर एसईओ और प्रदर्शन विज्ञापनों तक, हम आपको सही दर्शकों तक पहुंचने और दृश्यता को मापने योग्य व्यावसायिक परिणामों में बदलने में मदद करते हैं।"
            },
            automation: {
              title: "वर्कफ़्लो और एआई स्वचालन",
              subtitle: "स्मार्ट सिस्टम के साथ समय बचाएं।",
              desc: "कस्टम वर्कफ़्लो और एआई संचालित समाधानों के साथ दोहराव वाले काम को स्वचालित करें, अपने टूल कनेक्ट करें, और संचालन को सुव्यवस्थित करें।"
            }
          },
          cta: {
            badge: "मदद की ज़रूरत है",
            title: "मुफ्त सलाह। कॉल बैक बुक करें",
            btn: "चलो बात करते हैं"
          }
        },
        certifications: {
          title: "द्वारा प्रमाणित और प्रदर्शित"
        },
        portfolio: {
          badge: "चयनित कार्य",
          title: "हमारी पूरी की गई परियोजनाएं",
          desc: "पढ़ें कि हमने कुछ सबसे बड़े ब्रांडों को उनके व्यवसाय को बदलने में कैसे मदद की है।",
          viewAll: "सभी कार्य देखें"
        },
        team: {
          badge: "हमारी विशेषज्ञ टीम",
          title: "नेतृत्व टीम से मिलें",
          desc: "हम सभी अपने ग्राहकों को उच्च गुणवत्ता वाली सेवाएं देने के लिए भावुक और प्रतिबद्ध हैं।"
        },
        stats: {
          badge: "हमें क्यों चुनें",
          title: "परिणाम जो हम सफलतापूर्वक देते हैं",
          projects: "परियोजनाएं दी गईं",
          retention: "ग्राहक प्रतिधारण",
          hours: "बचाए गए घंटे",
          stat1Desc: "हमारे काम ने ग्राहकों को लीड प्रवाह बढ़ाने और कई उद्योगों में मापने योग्य ऑनलाइन विकास प्राप्त करने में मदद की है।",
          stat2Desc: "लगातार मासिक सुधार और स्पष्ट, पारदर्शी रिपोर्टिंग पर निर्मित एक मजबूत प्रतिधारण दर।",
          stat3Desc: "स्वचालन और वर्कफ़्लो सिस्टम ने ग्राहकों को महत्वपूर्ण परिचालन घंटों को बचाने और मैनुअल काम को कम करने में मदद की है।",
          circleText: "व्यापार विकास समाधान आईटी"
        },
        testimonials: {
          largeText: "प्रशंसापत्र",
          badge: "ग्राहक से सुनें"
        },
        blog: {
          badge: "हालिया पोस्ट",
          title: "नवीनतम समाचार और उद्योग अंतर्दृष्टि",
          featuredDesc: "हम गहरी, कार्यात्मक विशेषज्ञता लाते हैं, लेकिन हमारे समग्र दृष्टिकोण के लिए जाने जाते हैं: हम सीमाओं के पार मूल्य पर कब्जा करते हैं।"
        },
        faq: {
          badge: "सामान्य प्रश्न",
          title: "अक्सर पूछे जाने वाले प्रश्न",
          desc: "वह उत्तर नहीं मिल रहा है जिसे आप ढूंढ रहे हैं? हमारी ग्राहक सहायता टीम से संपर्क करें।"
        }
      },
      contact: {
        title: "संपर्क में रहें",
        subtitle: "दिमाग में कोई प्रोजेक्ट है? हमें आपसे सुनना अच्छा लगेगा।",
        badge: "संपर्क करें",
        visitUs: "हम से मिलें",
        emailUs: "हमें ईमेल करें",
        callUs: "हमें कॉल करें",
        whatsapp: "व्हाट्सएप",
        startConversation: "बातचीत शुरू करें",
        quickChat: "व्हाट्सएप पर त्वरित चैट",
        sendMessage: "हमें संदेश भेजें",
        formDesc: "नीचे दिया गया फॉर्म भरें और हम 24 घंटे के भीतर आपसे संपर्क करेंगे।",
        name: "नाम",
        namePlaceholder: "जॉन डो",
        email: "ईमेल",
        emailPlaceholder: "john@example.com",
        phone: "फ़ोन",
        phonePlaceholder: "+60 10-288 2827",
        subject: "विषय",
        subjectPlaceholder: "परियोजना पूछताछ",
        message: "संदेश",
        messagePlaceholder: "हमें अपने प्रोजेक्ट के बारे में बताएं...",
        btnSend: "संदेश भेजें",
        workingHours: "काम के घंटे",
        viewOnMap: "मानचित्र पर देखें",
        map: {
          hq: { name: "वैश्विक मुख्यालय", role: "मुख्यालय", location: "कुआलालंपुर, मलेशिया" },
          hub: { name: "क्षेत्रीय हब", role: "संचालन", location: "सिंगापुर" },
          tech: { name: "तकनीकी केंद्र", role: "R&D", location: "सैन फ्रांसिस्को, यूएसए" }
        }
      },
      company: {
        title: "हम JXING हैं",
        subtitle: "डिजिटल सफलता प्रदान करने वाले विशेषज्ञ डिजाइनरों, वेब डेवलपर्स और मार्केटर्स की एक टीम।",
        aboutBadge: "JXING Tech Group के बारे में",
        aboutTitle: "व्यावहारिक, मापने योग्य और स्केलेबल तकनीक।",
        aboutDesc1: "JXING Tech एक डिजिटल समाधान कंपनी है जो व्यावहारिक, मापने योग्य और स्केलेबल तकनीक के माध्यम से व्यवसायों को बढ़ने में मदद करती है।",
        aboutDesc2: "हमारा मानना है कि डिजिटल विकास हर व्यवसाय के लिए सरल, किफायती और प्राप्त करने योग्य होना चाहिए।",
        brochureTitle: "कंपनी ब्रोशर डाउनलोड करें",
        brochureTagline: "• अभी शुरुआत कर रहे हैं?",
        brochureBtn: "एक प्रति प्राप्त करें",
        vision: "हमारी दृष्टि",
        visionDesc: "दक्षिण पूर्व एशिया और उससे आगे के व्यवसायों के लिए सबसे भरोसेमंद और अभिनव डिजिटल विकास भागीदार बनना।",
        mission: "हमारा मिशन",
        missionDesc: "व्यवसायों को स्केलेबल वेब समाधान, ई-कॉमर्स नवाचार, एआई संचालित स्वचालन और डेटा संचालित विपणन के माध्यम से अपनी डिजिटल सफलता में तेजी लाने में मदद करना।",
        valuesTitle: "हमारा मूल मूल्य",
        valuesBadge: "हमारी संस्कृति",
        ctaTitle: "हम केवल सर्वश्रेष्ठ देने के लिए प्रतिबद्ध हैं"
      },
      services: {
        badge: "हमारी सेवाएं",
        title: "आपके व्यवसाय को बढ़ाने के लिए डिजिटल सेवाएं",
        viewAll: "सभी सेवाएं देखें",
        innovativeTitle: "अभिनव डिजिटल समाधान सेवाएं",
        whyChooseBadge: "हमें क्यों चुनें",
        whyChooseTitle: "पुनर्कल्पित उपयोगकर्ता अनुभव",
        whyChooseBg: "हमें क्यों चुनें",
        whyChooseList: [
          { title: "अनुकूलित समाधान", desc: "अनुरूप रणनीतियों के माध्यम से अपने ब्रांड की दृश्यता और विश्वसनीयता को बढ़ाने के लिए मजबूत मीडिया कनेक्शन बनाना।" },
          { title: "डेटा-संचालित दृष्टिकोण", desc: "हम हर निर्णय का मार्गदर्शन करने के लिए उन्नत एनालिटिक्स का उपयोग करते हैं, यह सुनिश्चित करते हुए कि आपका विकास मापने योग्य और टिकाऊ है।" },
          { title: "विशेषज्ञ समर्थन", desc: "हमारी उद्योग के दिग्गजों की टीम यह सुनिश्चित करने के लिए 24/7 सहायता प्रदान करती है कि आपके डिजिटल संचालन कभी भी न चूकें।" }
        ]
      },
      footer: {
        tellUs: 'हमें अपने प्रोजेक्ट के बारे में बताएं',
        letsTalk: "चलो बात करते हैं",
        writeToUs: 'हमें लिखें',
        insightTitle: 'नवीनतम प्रेरणा और अंतर्दृष्टि प्राप्त करें',
        emailPlaceholder: 'आपका ईमेल...',
        works: 'कार्य',
        expertise: 'विशेषज्ञता',
        about: 'के बारे में',
        team: 'टीम',
        awards: 'पुरस्कार',
        blog: 'ब्लॉग',
        careers: 'करियर',
        partnerships: 'साझेदारी',
        contact: 'संपर्क',
        headOffice: 'प्रधान कार्यालय',
        copyright: '© 2024 JXING Tech Group Sdn. Bhd. सर्वाधिकार सुरक्षित। JXING Tech से ❤️ के साथ संचालित',
        privacy: 'गोपनीयता नीति',
        terms: 'सेवा की शर्तें',
        followUs: 'हमारा अनुसरण करें'
      },
      pages: {
        serviceDetail: {
          badge: "सेवा विवरण",
          overviewBadge: "अवलोकन",
          aboutTitle: "इस सेवा के बारे में",
          whyChooseBadge: "इसे क्यों चुनें",
          benefitsTitle: "मुख्य लाभ",
          whatYouGetBadge: "आपको क्या मिलता है",
          deliverablesTitle: "सेवा वितरण",
          deliverablesFallback: "आपकी आवश्यकताओं के अनुरूप विशिष्ट वितरण।",
          benefitsFallback: "विवरण जल्द ही आ रहा है...",
          viewAll: "सभी सेवाएं देखें"
        },
        caseStudies: {
          title: "केस स्टडीज",
          subtitle: "जानें कि हमने विभिन्न उद्योगों के ग्राहकों को उनके डिजिटल लक्ष्यों को प्राप्त करने में कैसे मदद की है।",
          badge: "हमारा काम"
        },
        news: {
          title: "नवीनतम समाचार",
          subtitle: "डिजिटल नवाचार और डिजाइन की दुनिया से अंतर्दृष्टि, रुझान और अपडेट।",
          badge: "ब्लॉग"
        },
        career: {
          title: "करियर",
          subtitle: "हमारी टीम में शामिल होकर, आपको अत्याधुनिक परियोजनाओं पर काम करने, नवीनतम तकनीकों का लाभ उठाने और वास्तविक प्रभाव डालने का अवसर मिलेगा।",
          badge: "होम • करियर",
          applyBadge: "अभी आवेदन करें",
          openingsTitle: "वर्तमान उद्घाटन",
          learnMore: "और जानें",
          oppsBadge: "हमारे साथ अवसर",
          joinTitle: "हमारी अभिनव टीम में शामिल हों",
          joinDesc: "यदि आपको कोई उपयुक्त रिक्ति नहीं मिल रही है तो कृपया चिंता न करें। हम हमेशा नई प्रतिभाओं को खोजने के लिए तैयार हैं, कृपया अपना बायोडाटा और पोर्टफोलियो लिंक हमें मेल करें",
          contactBtn: "अभी संपर्क करें"
        },
        pricing: {
          heroTitle: "अपनी डिजिटल विकास योजना बनाएं",
          heroSubtitle: "सेवाएं चुनें, सुविधाओं को अनुकूलित करें, और एक सिलवाया गया उद्धरण का अनुरोध करें।",
          badge: "मूल्य निर्धारण और योजनाएं",
          addToPlan: "योजना में जोड़ें",
          added: "जोड़ा गया",
          removeFromQuote: "निकालें",
          yourPlan: "आपकी विकास योजना",
          requestQuote: "उद्धरण और परामर्श का अनुरोध करें",
          customNotesPlaceholder: "विशिष्ट नोट्स जोड़ें (जैसे पृष्ठों की संख्या)...",
          estInvestment: "अनुमानित निवेश",
          emptyQuote: "अपनी कस्टम योजना बनाने के लिए सूची से सेवाओं का चयन करें।",
          viewDetails: "विवरण देखें",
          modalTitle: "अपने अनुरोध को अंतिम रूप दें",
          modalDesc: "अपनी चयनित सेवाओं की समीक्षा करें और अपना संपर्क विवरण प्रदान करें। हम अपने परामर्श के दौरान बारीकियों पर चर्चा करेंगे।",
          nameLabel: "पूरा नाम",
          emailLabel: "कार्य ईमेल",
          phoneLabel: "फ़ोन नंबर",
          notesLabel: "अतिरिक्त परियोजना संदर्भ",
          submitting: "सबमिट कर रहा है...",
          successTitle: "अनुरोध प्राप्त हुआ!",
          successDesc: "आपको हमारे बुकिंग कैलेंडर पर पुनर्निर्देशित किया जा रहा है...",
          upfrontTotal: "अग्रिम / एक बार",
          monthlyTotal: "मासिक आवर्ती"
        },
        notFound: {
          title: "ओह! पृष्ठ नहीं मिला",
          desc: "जिस पृष्ठ को आप खोज रहे हैं वह हटा दिया गया हो सकता है, उसका नाम बदल दिया गया हो, या अस्थायी रूप से अनुपलब्ध हो।",
          backHome: "होम पर वापस"
        },
        servicesPage: {
          subtitle: "अभिनव डिजिटल समाधान आपको बढ़ने, अनुकूलित करने और प्रतिस्पर्धी परिदृश्य में सफल होने में मदद करने के लिए डिज़ाइन किए गए हैं।"
        }
      },
      legal: {
        privacy: {
          title: "गोपनीयता नीति",
          subtitle: "हम आपकी व्यक्तिगत जानकारी और आपके गोपनीयता के अधिकार की रक्षा के लिए प्रतिबद्ध हैं।",
          intro: "अंतिम अद्यतन: 01 जनवरी 2024"
        },
        terms: {
          title: "सेवा की शर्तें",
          subtitle: "हमारी सेवा का उपयोग करने से पहले कृपया इन नियमों और शर्तों को ध्यान से पढ़ें।",
          intro: "अंतिम अद्यतन: 01 जनवरी 2024"
        }
      },
      meta: { description: "JXING Tech एक डिजिटल समाधान कंपनी है।" },
      data: {
      }
    }
  },
  es: {
    translation: {
      common: {
        learnMore: "Aprenda más",
        viewAll: "Ver todo",
        getStarted: "Empezar",
        readMore: "Leer más",
        applyNow: "Aplica ya",
        home: "Inicio",
        selectLanguage: "Seleccionar idioma",
        popular: "POPULAR",
        submit: "Enviar solicitud"
      },
      nav: {
        company: 'Empresa',
        services: 'Servicios',
        pricing: 'Planes de precios',
        caseStudies: 'Casos de estudio',
        news: 'Noticias',
        contact: 'Contacto',
        getInTouch: 'Ponerse en contacto'
      },
      breadcrumbs: {
        company: "Empresa",
        services: "Servicios",
        pricing: "Precios",
        "case-studies": "Casos de estudio",
        news: "Noticias",
        contact: "Contacto",
        career: "Carrera",
        "privacy-policy": "Política de privacidad",
        "terms-of-service": "Términos de servicio"
      },
      hero: {
        title_static: 'Supere a su competencia.',
        title_prefix: 'Construido para el',
        satisfied_customers: 'clientes satisfechos',
        dynamic: [
          {
            word: "Dominio",
            badges: [
              "Rango #1 en la búsqueda de Google",
              "Poseer su nicho de mercado",
              "Construir autoridad de marca inquebrantable"
            ]
          },
          {
            word: "Rendimiento",
            badges: [
              "Velocidades de carga de página de subsegundos",
              "Experiencia móvil perfecta",
              "Ciberseguridad de grado empresarial"
            ]
          },
          {
            word: "Ingresos",
            badges: [
              "Embudos de ventas de alta conversión",
              "Generación de leads automatizada",
              "Maximizar el ROI de la inversión publicitaria"
            ]
          }
        ]
      },
      home: {
        globalPresence: {
          title: "Presencia global de clientes",
          clients: {
            c1: "Infraestructura de pago integrada para escalar globalmente.",
            c2: "Desarrollo de plataforma de banca como servicio.",
            c3: "Panel de visualización de datos de energía renovable.",
            c4: "Sistemas de automatización logística de ciudades inteligentes.",
            c5: "Solución de comercio electrónico transfronterizo.",
            c6: "Herramientas de auditoría de ciberseguridad empresarial."
          }
        },
        about: {
          badge: "Quienes somos",
          title: "Sus socios para el éxito digital",
          desc: "Somos un equipo dedicado enfocado en ayudar a las empresas a crecer a través de soluciones digitales prácticas y medibles. Nuestras fortalezas están en la construcción de sitios web de alto rendimiento, impulsando el tráfico a través del marketing digital y SEO, y mejorando las operaciones con automatización del flujo de trabajo y herramientas de IA. Cada solución que entregamos está diseñada para ayudarlo a ahorrar tiempo, llegar a más clientes y crecer con confianza.",
          cards: {
            web: {
              title: "Sitios web y soluciones de comercio electrónico",
              subtitle: "Sitios web profesionales creados para convertir.",
              desc: "Lance un sitio web comercial de alto rendimiento o una tienda en línea diseñada para generar confianza, captar clientes potenciales y apoyar su crecimiento. Todo está totalmente gestionado bajo una suscripción."
            },
            marketing: {
              title: "Marketing y crecimiento SEO",
              subtitle: "Sea descubierto. Obtenga clientes potenciales. Crezca constantemente.",
              desc: "Desde contenido y redes sociales hasta SEO y anuncios de rendimiento, lo ayudamos a llegar a la audiencia adecuada y convertir la visibilidad en resultados comerciales medibles."
            },
            automation: {
              title: "Flujo de trabajo y automatización de IA",
              subtitle: "Ahorre tiempo con sistemas más inteligentes.",
              desc: "Automatice el trabajo repetitivo, conecte sus herramientas y agilice las operaciones con flujos de trabajo personalizados y soluciones impulsadas por IA."
            }
          },
          cta: {
            badge: "Necesita ayuda",
            title: "Asesoramiento gratuito. Reserve una devolución de llamada",
            btn: "Hablemos"
          }
        },
        certifications: {
          title: "Certificado y destacado por"
        },
        portfolio: {
          badge: "Obras seleccionadas",
          title: "Nuestros proyectos terminados",
          desc: "Lea cómo hemos ayudado a algunas de las marcas más grandes a transformar su negocio.",
          viewAll: "Ver todos los trabajos"
        },
        team: {
          badge: "Nuestro equipo de expertos",
          title: "Conozca al equipo de liderazgo",
          desc: "Todos somos apasionados y estamos comprometidos a brindar servicios de alta calidad a nuestros clientes."
        },
        stats: {
          badge: "Por qué elegirnos",
          title: "Resultados que entregamos con éxito",
          projects: "proyectos entregados",
          retention: "retención de clientes",
          hours: "horas ahorradas",
          stat1Desc: "Nuestro trabajo ha ayudado a los clientes a aumentar el flujo de clientes potenciales y lograr un crecimiento en línea medible en múltiples industrias.",
          stat2Desc: "Una fuerte tasa de retención basada en mejoras mensuales consistentes e informes claros y transparentes.",
          stat3Desc: "Los sistemas de automatización y flujo de trabajo han ayudado a los clientes a ahorrar horas operativas significativas y reducir el trabajo manual.",
          circleText: "Solución de desarrollo empresarial TI"
        },
        testimonials: {
          largeText: "testimonios",
          badge: "Escuchar al cliente"
        },
        blog: {
          badge: "Publicación reciente",
          title: "Últimas noticias y perspectivas de la industria",
          featuredDesc: "Aportamos una profunda experiencia funcional, pero somos conocidos por nuestra perspectiva holística: capturamos valor a través de los límites."
        },
        faq: {
          badge: "Preguntas más frecuentes",
          title: "Preguntas frecuentes",
          desc: "¿No encuentra la respuesta que busca? Comuníquese con nuestro equipo de atención al cliente."
        }
      },
      contact: {
        title: "Ponerse en contacto",
        subtitle: "¿Tiene un proyecto en mente? Nos encantaría saber de usted.",
        badge: "Contáctenos",
        visitUs: "Visítenos",
        emailUs: "Envíenos un correo electrónico",
        callUs: "Llámenos",
        whatsapp: "WhatsApp",
        startConversation: "Iniciar una conversación",
        quickChat: "Chat rápido en WhatsApp",
        sendMessage: "Envíenos un mensaje",
        formDesc: "Complete el formulario a continuación y nos pondremos en contacto con usted dentro de las 24 horas.",
        name: "Nombre",
        namePlaceholder: "Juan Pérez",
        email: "Correo electrónico",
        emailPlaceholder: "juan@example.com",
        phone: "Teléfono",
        phonePlaceholder: "+60 10-288 2827",
        subject: "Asunto",
        subjectPlaceholder: "Consulta del proyecto",
        message: "Mensaje",
        messagePlaceholder: "Cuéntanos sobre tu proyecto...",
        btnSend: "Enviar mensaje",
        workingHours: "Horas de trabajo",
        viewOnMap: "Ver en el mapa",
        map: {
          hq: { name: "Sede mundial", role: "Sede central", location: "Kuala Lumpur, Malasia" },
          hub: { name: "Centro regional", role: "Operaciones", location: "Singapur" },
          tech: { name: "Centro tecnológico", role: "I + D", location: "San Francisco, EE. UU." }
        }
      },
      company: {
        title: "Somos JXING",
        subtitle: "Un equipo de diseñadores expertos, desarrolladores web y especialistas en marketing que ofrecen éxito digital.",
        aboutBadge: "Acerca de JXING Tech Group",
        aboutTitle: "Tecnología práctica, medible y escalable.",
        aboutDesc1: "JXING Tech es una empresa de soluciones digitales que ayuda a las empresas a crecer a través de tecnología práctica, medible y escalable.",
        aboutDesc2: "Creemos que el crecimiento digital debe ser simple, asequible y alcanzable para todas las empresas.",
        brochureTitle: "Descargar un folleto de la empresa",
        brochureTagline: "• ¿Acaba de empezar?",
        brochureBtn: "Obtener una copia",
        vision: "Nuestra visión",
        visionDesc: "Convertirse en el socio de crecimiento digital más confiable e innovador para empresas en el sudeste asiático y más allá.",
        mission: "Nuestra misión",
        missionDesc: "Ayudar a las empresas a acelerar su éxito digital a través de soluciones web escalables, innovación en comercio electrónico, automatización impulsada por IA y marketing basado en datos.",
        valuesTitle: "Nuestros valores fundamentales",
        valuesBadge: "Nuestra cultura",
        ctaTitle: "Estamos comprometidos a ofrecer solo lo mejor"
      },
      services: {
        badge: "Nuestros servicios",
        title: "Servicios digitales para hacer crecer su negocio",
        viewAll: "Ver todos los servicios",
        innovativeTitle: "Servicios de soluciones digitales innovadoras",
        whyChooseBadge: "Por qué elegirnos",
        whyChooseTitle: "Experiencias de usuario reinventadas",
        whyChooseBg: "por qué elegirnos",
        whyChooseList: [
          { title: "Soluciones personalizadas", desc: "Construyendo conexiones de medios sólidas para elevar la visibilidad y credibilidad de su marca a través de estrategias personalizadas." },
          { title: "Enfoque basado en datos", desc: "Utilizamos análisis avanzados para guiar cada decisión, asegurando que su crecimiento sea medible y sostenible." },
          { title: "Soporte experto", desc: "Nuestro equipo de veteranos de la industria brinda soporte 24/7 para garantizar que sus operaciones digitales nunca pierdan el ritmo." }
        ]
      },
      footer: {
        tellUs: 'Cuéntanos sobre tu proyecto',
        letsTalk: "Hablemos",
        writeToUs: 'Escríbenos',
        insightTitle: 'Obtenga la última inspiración y conocimientos',
        emailPlaceholder: 'Tu correo electrónico...',
        works: 'Trabajos',
        expertise: 'Experiencia',
        about: 'Acerca de',
        team: 'Equipo',
        awards: 'Premios',
        blog: 'Blog',
        careers: 'Carreras',
        partnerships: 'Asociaciones',
        contact: 'Contacto',
        headOffice: 'Oficina central',
        copyright: '© 2024 JXING Tech Group Sdn. Bhd. Todos los derechos reservados. Desarrollado con ❤️ por JXING Tech',
        privacy: 'Política de privacidad',
        terms: 'Términos de servicio',
        followUs: 'Síguenos'
      },
      pages: {
        serviceDetail: {
          badge: "Detalle del servicio",
          overviewBadge: "Descripción general",
          aboutTitle: "Acerca de este servicio",
          whyChooseBadge: "Por qué elegir esto",
          benefitsTitle: "Beneficios clave",
          whatYouGetBadge: "Lo que obtienes",
          deliverablesTitle: "Entregables del servicio",
          deliverablesFallback: "Entregables específicos adaptados a sus necesidades.",
          benefitsFallback: "Detalles próximamente...",
          viewAll: "Ver todos los servicios"
        },
        caseStudies: {
          title: "Casos de estudio",
          subtitle: "Explore cómo hemos ayudado a clientes de diversas industrias a lograr sus objetivos digitales.",
          badge: "Nuestro trabajo"
        },
        news: {
          title: "Últimas noticias",
          subtitle: "Perspectivas, tendencias y actualizaciones del mundo de la innovación digital y el diseño.",
          badge: "Blog"
        },
        career: {
          title: "Carrera",
          subtitle: "Al unirse a nuestro equipo, tendrá la oportunidad de trabajar en proyectos de vanguardia, aprovechar las últimas tecnologías y generar un impacto real.",
          badge: "Inicio • Carrera",
          applyBadge: "Aplica ya",
          openingsTitle: "Aperturas actuales",
          learnMore: "Aprenda más",
          oppsBadge: "Oportunidades con nosotros",
          joinTitle: "Únete a nuestro equipo innovador",
          joinDesc: "Si no puede encontrar una vacante adecuada, no se preocupe. Siempre estamos dispuestos a descubrir nuevos talentos, por favor envíenos su currículum y enlace de cartera a",
          contactBtn: "Contactar ahora"
        },
        pricing: {
          heroTitle: "Construya su plan de crecimiento digital",
          heroSubtitle: "Seleccione servicios, personalice características y solicite una cotización personalizada.",
          badge: "Precios y planes",
          addToPlan: "Agregar al plan",
          added: "Agregado",
          removeFromQuote: "Eliminar",
          yourPlan: "Su plan de crecimiento",
          requestQuote: "Solicitar cotización y consulta",
          customNotesPlaceholder: "Agregar notas específicas (por ejemplo, número de páginas)...",
          estInvestment: "Inversión est.",
          emptyQuote: "Seleccione servicios de la lista para crear su plan personalizado.",
          viewDetails: "Ver detalles",
          modalTitle: "Finalice su solicitud",
          modalDesc: "Revise sus servicios seleccionados y proporcione sus datos de contacto. Discutiremos los detalles durante nuestra consulta.",
          nameLabel: "Nombre completo",
          emailLabel: "Correo electrónico del trabajo",
          phoneLabel: "Número de teléfono",
          notesLabel: "Contexto adicional del proyecto",
          submitting: "Enviando...",
          successTitle: "¡Solicitud recibida!",
          successDesc: "Redirigiéndole a nuestro calendario de reservas...",
          upfrontTotal: "Por adelantado / Única vez",
          monthlyTotal: "Mensual recurrente"
        },
        notFound: {
          title: "¡Ups! Página no encontrada",
          desc: "Es posible que la página que está buscando haya sido eliminada, se haya cambiado su nombre o no esté disponible temporalmente.",
          backHome: "Volver a Inicio"
        },
        servicesPage: {
          subtitle: "Soluciones digitales innovadoras diseñadas para ayudarlo a crecer, optimizar y tener éxito en un panorama competitivo."
        }
      },
      legal: {
        privacy: {
          title: "Política de privacidad",
          subtitle: "Estamos comprometidos a proteger su información personal y su derecho a la privacidad.",
          intro: "Última actualización: 01 de enero de 2024"
        },
        terms: {
          title: "Términos de servicio",
          subtitle: "Lea atentamente estos términos y condiciones antes de utilizar nuestro servicio.",
          intro: "Última actualización: 01 de enero de 2024"
        }
      },
      meta: { description: "JXING Tech es una empresa de soluciones digitales." },
      data: {
      }
    }
  },
  ar: {
    translation: {
      common: {
        learnMore: "اعرف المزيد",
        viewAll: "عرض الكل",
        getStarted: "ابدأ",
        readMore: "اقرأ المزيد",
        applyNow: "قدم الآن",
        home: "الصفحة الرئيسية",
        selectLanguage: "اختر اللغة",
        popular: "شائع",
        submit: "إرسال طلب"
      },
      nav: {
        company: 'الشركة',
        services: 'الخدمات',
        pricing: 'خطط التسعير',
        caseStudies: 'دراسات الحالة',
        news: 'الأخبار',
        contact: 'اتصل',
        getInTouch: 'تواصل معنا'
      },
      breadcrumbs: {
        company: "الشركة",
        services: "الخدمات",
        pricing: "التسعير",
        "case-studies": "دراسات الحالة",
        news: "الأخبار",
        contact: "اتصل",
        career: "وظائف",
        "privacy-policy": "سياسة الخصوصية",
        "terms-of-service": "شروط الخدمة"
      },
      hero: {
        title_static: 'تفوق على منافسيك.',
        title_prefix: 'بنيت ل',
        satisfied_customers: 'عملاء راضين',
        dynamic: [
          {
            word: "الهيمنة",
            badges: [
              "المرتبة رقم 1 في بحث Google",
              "امتلك تخصص السوق الخاص بك",
              "بناء سلطة العلامة التجارية التي لا تتزعزع"
            ]
          },
          {
            word: "الأداء",
            badges: [
              "سرعات تحميل الصفحات أقل من الثانية",
              "تجربة جوال سلسة",
              "أمن سيبراني من مستوى المؤسسات"
            ]
          },
          {
            word: "الإيرادات",
            badges: [
              "مسارات مبيعات عالية التحويل",
              "توليد العملاء المحتملين الآلي",
              "تعظيم عائد الاستثمار في الإنفاق الإعلاني"
            ]
          }
        ]
      },
      home: {
        globalPresence: {
          title: "حضور العملاء العالميين",
          clients: {
            c1: "بنية تحتية متكاملة للدفع للتوسع العالمي.",
            c2: "تطوير منصة الخدمات المصرفية كخدمة.",
            c3: "لوحة معلومات تصور بيانات الطاقة المتجددة.",
            c4: "أنظمة أتمتة لوجستيات المدينة الذكية.",
            c5: "حل التجارة الإلكترونية عبر الحدود.",
            c6: "أدوات تدقيق الأمن السيبراني للمؤسسات."
          }
        },
        about: {
          badge: "من نحن",
          title: "شركاؤك للنجاح الرقمي",
          desc: "نحن فريق مخصص يركز على مساعدة الشركات على النمو من خلال حلول رقمية عملية وقابلة للقياس. تكمن نقاط قوتنا في بناء مواقع ويب عالية الأداء، وجذب حركة المرور من خلال التسويق الرقمي وتحسين محركات البحث، وتحسين العمليات باستخدام أتمتة سير العمل وأدوات الذكاء الاصطناعي. تم تصميم كل حل نقدمه لمساعدتك على توفير الوقت والوصول إلى المزيد من العملاء والنمو بثقة.",
          cards: {
            web: {
              title: "حلول المواقع والتجارة الإلكترونية",
              subtitle: "مواقع ويب احترافية مصممة للتحويل.",
              desc: "أطلق موقعًا تجاريًا عالي الأداء أو متجرًا عبر الإنترنت مصممًا لبناء الثقة والتقاط العملاء المحتملين ودعم نموك. كل شيء يدار بالكامل تحت اشتراك واحد."
            },
            marketing: {
              title: "التسويق ونمو تحسين محركات البحث",
              subtitle: "كن مكتشفًا. احصل على عملاء متوقعين. انمو باستمرار.",
              desc: "من المحتوى ووسائل التواصل الاجتماعي إلى تحسين محركات البحث وإعلانات الأداء، نساعدك في الوصول إلى الجمهور المناسب وتحويل الرؤية إلى نتائج أعمال قابلة للقياس."
            },
            automation: {
              title: "سير العمل وأتمتة الذكاء الاصطناعي",
              subtitle: "وفر الوقت مع أنظمة أكثر ذكاءً.",
              desc: "أتمتة العمل المتكرر، وربط أدواتك، وتبسيط العمليات من خلال سير عمل مخصص وحلول مدعومة بالذكاء الاصطناعي."
            }
          },
          cta: {
            badge: "بحاجة للمساعدة",
            title: "نصيحة مجانية. احجز مكالمة عودة",
            btn: "لنتحدث"
          }
        },
        certifications: {
          title: "معتمد ومميز بواسطة"
        },
        portfolio: {
          badge: "أعمال مختارة",
          title: "مشاريعنا المنجزة",
          desc: "اقرأ كيف ساعدنا بعضًا من أكبر العلامات التجارية على تحويل أعمالهم.",
          viewAll: "عرض جميع الأعمال"
        },
        team: {
          badge: "فريق خبرائنا",
          title: "تعرف على فريق القيادة",
          desc: "نحن جميعًا متحمسون وملتزمون بتقديم خدمات عالية الجودة لعملائنا."
        },
        stats: {
          badge: "لماذا تختارنا",
          title: "النتائج التي نقدمها بنجاح",
          projects: "مشاريع تم تسليمها",
          retention: "الاحتفاظ بالعملاء",
          hours: "ساعات تم توفيرها",
          stat1Desc: "ساعد عملنا العملاء على زيادة تدفق العملاء المحتملين وتحقيق نمو عبر الإنترنت قابل للقياس عبر صناعات متعددة.",
          stat2Desc: "معدل احتفاظ قوي مبني على تحسينات شهرية متسقة وتقارير واضحة وشفافة.",
          stat3Desc: "ساعدت أنظمة الأتمتة وسير العمل العملاء على توفير ساعات تشغيل كبيرة وتقليل العمل اليدوي.",
          circleText: "تطوير الأعمال حل تكنولوجيا المعلومات"
        },
        testimonials: {
          largeText: "الشهادات",
          badge: "استمع من العميل"
        },
        blog: {
          badge: "منشور حديث",
          title: "آخر الأخبار ورؤى الصناعة",
          featuredDesc: "نحن نجلب خبرة وظيفية عميقة، لكننا معروفون بمنظورنا الشامل: نحن نلتقط القيمة عبر الحدود."
        },
        faq: {
          badge: "الأسئلة الشائعة",
          title: "أسئلة مكررة",
          desc: "لا يمكنك العثور على الإجابة التي تبحث عنها؟ تواصل مع فريق دعم العملاء لدينا."
        }
      },
      contact: {
        title: "تواصل معنا",
        subtitle: "هل لديك مشروع في الاعتبار؟ نود أن نسمع منك.",
        badge: "اتصل بنا",
        visitUs: "قم بزيارتنا",
        emailUs: "راسلنا عبر البريد الإلكتروني",
        callUs: "اتصل بنا",
        whatsapp: "WhatsApp",
        startConversation: "ابدأ محادثة",
        quickChat: "دردشة سريعة على WhatsApp",
        sendMessage: "أرسل لنا رسالة",
        formDesc: "املأ النموذج أدناه وسنعاود الاتصال بك في غضون 24 ساعة.",
        name: "الاسم",
        namePlaceholder: "جون دو",
        email: "البريد الإلكتروني",
        emailPlaceholder: "john@example.com",
        phone: "الهاتف",
        phonePlaceholder: "+60 10-288 2827",
        subject: "الموضوع",
        subjectPlaceholder: "استفسار عن مشروع",
        message: "الرسالة",
        messagePlaceholder: "أخبرنا عن مشروعك...",
        btnSend: "إرسال رسالة",
        workingHours: "ساعات العمل",
        viewOnMap: "عرض على الخريطة",
        map: {
          hq: { name: "المقر الرئيسي العالمي", role: "المقر الرئيسي", location: "كوالالمبور، ماليزيا" },
          hub: { name: "المركز الإقليمي", role: "العمليات", location: "سنغافورة" },
          tech: { name: "المركز التقني", role: "البحث والتطوير", location: "سان فرانسيسكو، الولايات المتحدة الأمريكية" }
        }
      },
      company: {
        title: "نحن JXING",
        subtitle: "فريق من الخبراء المصممين ومطوري الويب والمسوقين الذين يقدمون النجاح الرقمي.",
        aboutBadge: "حول JXING Tech Group",
        aboutTitle: "تكنولوجيا عملية وقابلة للقياس وقابلة للتطوير.",
        aboutDesc1: "JXING Tech هي شركة حلول رقمية تساعد الشركات على النمو من خلال تكنولوجيا عملية وقابلة للقياس وقابلة للتطوير.",
        aboutDesc2: "نؤمن بأن النمو الرقمي يجب أن يكون بسيطًا وبأسعار معقولة ويمكن تحقيقه لكل شركة.",
        brochureTitle: "تحميل كتيب الشركة",
        brochureTagline: "• هل بدأت للتو؟",
        brochureBtn: "احصل على نسخة",
        vision: "رؤيتنا",
        visionDesc: "أن نصبح شريك النمو الرقمي الأكثر ثقة وابتكارًا للشركات في جميع أنحاء جنوب شرق آسيا وخارجها.",
        mission: "مهمتنا",
        missionDesc: "لمساعدة الشركات على تسريع نجاحها الرقمي من خلال حلول الويب القابلة للتطوير، وابتكار التجارة الإلكترونية، والأتمتة المدعومة بالذكاء الاصطناعي، والتسويق القائم على البيانات.",
        valuesTitle: "قيمنا الأساسية",
        valuesBadge: "ثقافتنا",
        ctaTitle: "نحن ملتزمون بتقديم الأفضل فقط"
      },
      services: {
        badge: "خدماتنا",
        title: "أتمتة الذكاء الاصطناعي وخدمات الويب لتنمية عملك",
        viewAll: "عرض جميع الخدمات",
        innovativeTitle: "خدمات الحلول الرقمية المبتكرة",
        whyChooseBadge: "لماذا تختارنا",
        whyChooseTitle: "تجارب مستخدم مُعاد تصورها",
        whyChooseBg: "لماذا تختارنا",
        whyChooseList: [
          { title: "حلول مخصصة", desc: "بناء اتصالات إعلامية قوية لرفع مستوى رؤية علامتك التجارية ومصداقيتها من خلال استراتيجيات مصممة خصيصًا." },
          { title: "نهج قائم على البيانات", desc: "نحن نستخدم التحليلات المتقدمة لتوجيه كل قرار، مما يضمن أن نموك قابل للقياس ومستدام." },
          { title: "دعم الخبراء", desc: "يوفر فريقنا من قدامى المحاربين في الصناعة دعمًا على مدار الساعة طوال أيام الأسبوع لضمان عدم تفويت عملياتك الرقمية لأي لحظة." }
        ]
      },
      footer: {
        tellUs: 'أخبرنا عن مشروعك',
        letsTalk: "لنتحدث",
        writeToUs: 'اكتب إلينا',
        insightTitle: 'احصل على أحدث الإلهام والرؤى',
        emailPlaceholder: 'بريدك الإلكتروني...',
        works: 'أعمال',
        expertise: 'خبرة',
        about: 'حول',
        team: 'فريق',
        awards: 'جوائز',
        blog: 'مدونة',
        careers: 'وظائف',
        partnerships: 'شراكات',
        contact: 'اتصل',
        headOffice: 'المكتب الرئيسي',
        copyright: '© 2024 JXING Tech Group Sdn. Bhd. جميع الحقوق محفوظة. مدعوم بـ ❤️ من JXING Tech',
        privacy: 'سياسة الخصوصية',
        terms: 'شروط الخدمة',
        followUs: 'تابعنا'
      },
      pages: {
        serviceDetail: {
          badge: "تفاصيل الخدمة",
          overviewBadge: "نظرة عامة",
          aboutTitle: "حول هذه الخدمة",
          whyChooseBadge: "لماذا تختار هذا",
          benefitsTitle: "الفوائد الرئيسية",
          whatYouGetBadge: "ما ستحصل عليه",
          deliverablesTitle: "تسليمات الخدمة",
          deliverablesFallback: "تسليمات محددة مصممة لاحتياجاتك.",
          benefitsFallback: "التفاصيل قادمة قريبا...",
          viewAll: "عرض جميع الخدمات"
        },
        caseStudies: {
          title: "دراسات الحالة",
          subtitle: "استكشف كيف ساعدنا العملاء عبر مختلف الصناعات على تحقيق أهدافهم الرقمية.",
          badge: "عملنا"
        },
        news: {
          title: "آخر الأخبار",
          subtitle: "رؤى واتجاهات وتحديثات من عالم الابتكار الرقمي والتصميم.",
          badge: "مدونة"
        },
        career: {
          title: "وظائف",
          subtitle: "من خلال الانضمام إلى فريقنا، ستتاح لك الفرصة للعمل في مشاريع متطورة، والاستفادة من أحدث التقنيات، وإحداث تأثير حقيقي.",
          badge: "الصفحة الرئيسية • وظائف",
          applyBadge: "قدم الآن",
          openingsTitle: "الوظائف الحالية",
          learnMore: "اعرف المزيد",
          oppsBadge: "الفرص معنا",
          joinTitle: "انضم إلى فريقنا المبتكر",
          joinDesc: "إذا لم تتمكن من العثور على وظيفة شاغرة مناسبة، فلا تقلق. نحن دائما على استعداد لاكتشاف مواهب جديدة، يرجى إرسال سيرتك الذاتية ورابط محفظتك إلينا عبر البريد الإلكتروني إلى",
          contactBtn: "اتصل الآن"
        },
        pricing: {
          heroTitle: "بناء خطة النمو الرقمي الخاصة بك",
          heroSubtitle: "اختر الخدمات، وخصص الميزات، واطلب عرض أسعار مخصصًا.",
          badge: "التسعير والخطط",
          addToPlan: "أضف إلى الخطة",
          added: "تمت الإضافة",
          removeFromQuote: "إزالة",
          yourPlan: "خطة النمو الخاصة بك",
          requestQuote: "طلب عرض أسعار واستشارة",
          customNotesPlaceholder: "أضف ملاحظات محددة (مثل عدد الصفحات)...",
          estInvestment: "الاستثمار المقدر",
          emptyQuote: "اختر الخدمات من القائمة لبناء خطتك المخصصة.",
          viewDetails: "عرض التفاصيل",
          modalTitle: "إنهاء طلبك",
          modalDesc: "راجع خدماتك المختارة وقدم تفاصيل الاتصال الخاصة بك. سنناقش التفاصيل خلال استشارتنا.",
          nameLabel: "الاسم الكامل",
          emailLabel: "بريد العمل",
          phoneLabel: "رقم الهاتف",
          notesLabel: "سياق المشروع الإضافي",
          submitting: "جار الإرسال...",
          successTitle: "تم استلام الطلب!",
          successDesc: "إعادة توجيهك إلى تقويم الحجز الخاص بنا...",
          upfrontTotal: "مقدمًا / لمرة واحدة",
          monthlyTotal: "شهرية متكررة"
        },
        notFound: {
          title: "وجه الفتاة! الصفحة غير موجودة",
          desc: "الصفحة التي تبحث عنها قد تم حذفها، أو تغيير اسمها، أو غير متاحة مؤقتا.",
          backHome: "العودة إلى الصفحة الرئيسية"
        },
        servicesPage: {
          subtitle: "حلول رقمية مبتكرة مصممة لمساعدتك على النمو والتحسين والنجاح في مشهد تنافسي."
        }
      },
      legal: {
        privacy: {
          title: "سياسة الخصوصية",
          subtitle: "نحن ملتزمون بحماية معلوماتك الشخصية وحقك في الخصوصية.",
          intro: "آخر تحديث: 01 يناير 2024"
        },
        terms: {
          title: "شروط الخدمة",
          subtitle: "يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدمتنا.",
          intro: "آخر تحديث: 01 يناير 2024"
        }
      },
      meta: { description: "JXING Tech هي شركة حلول رقمية." },
      data: {
      }
    }
  },
  zh: {
    translation: {
      common: {
        learnMore: "了解更多",
        viewAll: "查看全部",
        getStarted: "开始使用",
        readMore: "阅读更多",
        applyNow: "立即申请",
        home: "首页",
        selectLanguage: "选择语言",
        popular: "热门",
        submit: "提交请求"
      },
      nav: {
        company: '公司',
        services: '服务',
        pricing: '价格方案',
        caseStudies: '案例研究',
        news: '新闻',
        contact: '联系我们',
        getInTouch: '保持联系'
      },
      breadcrumbs: {
        company: "公司",
        services: "服务",
        pricing: "价格",
        "case-studies": "案例研究",
        news: "新闻",
        contact: "联系我们",
        career: "职业生涯",
        "privacy-policy": "隐私政策",
        "terms-of-service": "服务条款"
      },
      hero: {
        title_static: '超越您的竞争对手。',
        title_prefix: '专为数字',
        satisfied_customers: '满意的客户',
        dynamic: [
          {
            word: "统治",
            badges: [
              "谷歌搜索排名第一",
              "占据您的市场利基",
              "建立不可动摇的品牌权威"
            ]
          },
          {
            word: "表现",
            badges: [
              "亚秒级页面加载速度",
              "无缝移动体验",
              "企业级网络安全"
            ]
          },
          {
            word: "收入",
            badges: [
              "高转化率销售漏斗",
              "自动化潜在客户生成",
              "最大化广告支出回报率"
            ]
          }
        ]
      },
      home: {
        globalPresence: {
          title: "全球客户分布",
          clients: {
            c1: "用于全球扩展的综合支付基础设施。",
            c2: "银行即服务平台开发。",
            c3: "可再生能源数据可视化仪表板。",
            c4: "智慧城市物流自动化系统。",
            c5: "跨境电子商务解决方案。",
            c6: "企业网络安全审计工具。"
          }
        },
        about: {
          badge: "我们是谁",
          title: "您的数字成功合作伙伴",
          desc: "我们要是一个致力于通过实用且可衡量的数字解决方案帮助企业发展的团队。我们的优势在于建立高性能网站、通过数字营销和SEO推动流量，以及利用工作流自动化和AI工具改善运营。我们需要提供的每一个解决方案都旨在帮助您节省时间、接触更多客户并充满信心地成长。",
          cards: {
            web: {
              title: "网站和电子商务解决方案",
              subtitle: "专为转化而构建的专业网站。",
              desc: "启动一个旨在建立信任、获取潜在客户并支持您增长的高性能商业网站或在线商店。一切都在一个订阅下完全管理。"
            },
            marketing: {
              title: "营销和SEO增长",
              subtitle: "被发现。获取潜在客户。持续增长。",
              desc: "从内容和社交媒体到SEO和效果广告，我们帮助您触达正确的受众，并将可见性转化为可衡量的业务成果。"
            },
            automation: {
              title: "工作流和AI自动化",
              subtitle: "用更智能的系统节省时间。",
              desc: "通过自定义工作流和AI驱动的解决方案，自动化重复性工作，连接您的工具，并简化运营。"
            }
          },
          cta: {
            badge: "需要帮助",
            title: "免费咨询。预约回电",
            btn: "让我们谈谈"
          }
        },
        certifications: {
          title: "认证 & 推荐由"
        },
        portfolio: {
          badge: "精选作品",
          title: "我们完成的项目",
          desc: "阅读我们如何帮助一些最大的品牌转型业务。",
          viewAll: "查看所有作品"
        },
        team: {
          badge: "我们的专家团队",
          title: "认识领导团队",
          desc: "我们都充满激情，致力于为客户提供高质量的服务。"
        },
        stats: {
          badge: "为什么选择我们",
          title: "我们成功交付的成果",
          projects: "交付的项目",
          retention: "客户留存率",
          hours: "节省的时间",
          stat1Desc: "我们的工作帮助客户在多个行业增加了潜在客户流量并实现了可衡量的在线增长。",
          stat2Desc: "建立在持续每月的改进和清晰、透明的报告基础上的强大留存率。",
          stat3Desc: "自动化和工作流系统帮助客户节省了大量的运营时间并减少了手工工作。",
          circleText: "业务发展 解决方案 IT"
        },
        testimonials: {
          largeText: "客户感言",
          badge: "听听客户怎么说"
        },
        blog: {
          badge: "最新文章",
          title: "最新新闻和行业见解",
          featuredDesc: "我们带来深厚的职能专长，但也以我们的整体视角而闻名：我们跨越界限获取价值。"
        },
        faq: {
          badge: "常见问题",
          title: "经常问的问题",
          desc: "找不到您要找的答案？联系我们的客户支持团队。"
        }
      },
      contact: {
        title: "取得联系",
        subtitle: "有项目想法吗？我们要很高兴收到您的来信。",
        badge: "联系我们",
        visitUs: "拜访我们",
        emailUs: "给我们发邮件",
        callUs: "致电我们",
        whatsapp: "WhatsApp",
        startConversation: "开始对话",
        quickChat: "WhatsApp 快速聊天",
        sendMessage: "给我们发消息",
        formDesc: "填写下面的表格，我们将在24小时内回复您。",
        name: "姓名",
        namePlaceholder: "张三",
        email: "电子邮件",
        emailPlaceholder: "zhangsan@example.com",
        phone: "电话",
        phonePlaceholder: "+60 10-288 2827",
        subject: "主题",
        subjectPlaceholder: "项目咨询",
        message: "信息",
        messagePlaceholder: "告诉我们要关于您的项目...",
        btnSend: "发送信息",
        workingHours: "工作时间",
        viewOnMap: "在地图上查看",
        map: {
          hq: { name: "全球总部", role: "总部", location: "吉隆坡，马来西亚" },
          hub: { name: "区域中心", role: "运营", location: "新加坡" },
          tech: { name: "技术中心", role: "研发", location: "旧金山，美国" }
        }
      },
      company: {
        title: "我们是 JXING",
        subtitle: "一群致力于提供数字成功的专家设计师、Web开发人员和营销人员。",
        aboutBadge: "关于 JXING Tech Group",
        aboutTitle: "实用、可衡量且可扩展的技术。",
        aboutDesc1: "JXING Tech 是一家数字解决方案公司，通过实用、可衡量且可扩展的技术帮助企业发展。",
        aboutDesc2: "我们要相信，对于每个企业来说，数字增长应该是简单、负担得起且可以实现的。",
        brochureTitle: "下载公司宣传册",
        brochureTagline: "• 刚开始？",
        brochureBtn: "获取副本",
        vision: "我们的愿景",
        visionDesc: "成为东南亚及其他地区企业最值得信赖和最具创新性的数字增长合作伙伴。",
        mission: "我们的使命",
        missionDesc: "通过可扩展的Web解决方案、电子商务创新、AI驱动的自动化和数据驱动的营销，帮助企业加速其数字成功。",
        valuesTitle: "我们的核心价值观",
        valuesBadge: "我们的文化",
        ctaTitle: "我们要致力于只提供最好的"
      },
      services: {
        badge: "我们的服务",
        title: "发展您业务的数字服务",
        viewAll: "查看所有服务",
        innovativeTitle: "创新数字解决方案服务",
        whyChooseBadge: "为什么选择我们",
        whyChooseTitle: "重构用户体验",
        whyChooseBg: "为什么选择我们",
        whyChooseList: [
          { title: "定制解决方案", desc: "建立强大的媒体连接，通过量身定制的策略提升您品牌的知名度和可信度。" },
          { title: "数据驱动方法", desc: "我们要利用高级分析来指导每一个决策，确保您的增长是可衡量和可持续的。" },
          { title: "专家支持", desc: "我们的行业资深团队提供24/7支持，确保您的数字运营永不停歇。" }
        ]
      },
      footer: {
        tellUs: '告诉我们要关于您的项目',
        letsTalk: "让我们谈谈",
        writeToUs: '写信给我们',
        insightTitle: '获取最新灵感和见解',
        emailPlaceholder: '您的电子邮件...',
        works: '作品',
        expertise: '专长',
        about: '关于',
        team: '团队',
        awards: '奖项',
        blog: '博客',
        careers: '职业',
        partnerships: '合作伙伴',
        contact: '联系',
        headOffice: '总办事处',
        copyright: '© 2024 JXING Tech Group Sdn. Bhd. 保留所有权利。由 JXING Tech 用 ❤️ 提供支持',
        privacy: '隐私政策',
        terms: '服务条款',
        followUs: '关注我们'
      },
      pages: {
        serviceDetail: {
          badge: "服务详情",
          overviewBadge: "概览",
          aboutTitle: "关于此服务",
          whyChooseBadge: "为什么选择此服务",
          benefitsTitle: "主要优势",
          whatYouGetBadge: "您将获得什么",
          deliverablesTitle: "服务交付物",
          deliverablesFallback: "根据您的需求量身定制的具体交付物。",
          benefitsFallback: "详情即将推出...",
          viewAll: "查看所有服务"
        },
        caseStudies: {
          title: "案例研究",
          subtitle: "探索我们如何帮助各行各业的客户实现其数字目标。",
          badge: "我们的工作"
        },
        news: {
          title: "最新新闻",
          subtitle: "来自数字创新和设计世界的见解、趋势和更新。",
          badge: "博客"
        },
        career: {
          title: "职业生涯",
          subtitle: "通过加入我们的团队，您将有机会从事尖端项目，利用最新技术，并产生真正的影响。",
          badge: "首页 • 职业",
          applyBadge: "立即申请",
          openingsTitle: "当前职位空缺",
          learnMore: "了解更多",
          oppsBadge: "与我们的机会",
          joinTitle: "加入我们的创新团队",
          joinDesc: "如果您找不到合适的职位空缺，请不要担心。我们要总是乐于发掘新的人才，请将您的简历和作品集链接邮寄给我们",
          contactBtn: "立即联系"
        },
        pricing: {
          heroTitle: "制定您的数字增长计划",
          heroSubtitle: "选择服务，自定义功能，并请求量身定制的报价。",
          badge: "价格和方案",
          addToPlan: "添加到计划",
          added: "已添加",
          removeFromQuote: "移除",
          yourPlan: "您的增长计划",
          requestQuote: "请求报价和咨询",
          customNotesPlaceholder: "添加具体说明（例如页面数量）...",
          estInvestment: "预计投资",
          emptyQuote: "从列表中选择服务以制定您的自定义计划。",
          viewDetails: "查看详情",
          modalTitle: "完成您的请求",
          modalDesc: "查看您选择的服务并提供您的联系方式。我们将在咨询期间讨论具体细节。",
          nameLabel: "全名",
          emailLabel: "工作邮箱",
          phoneLabel: "电话号码",
          notesLabel: "其他项目背景",
          submitting: "正在提交...",
          successTitle: "请求已收到！",
          successDesc: "正在将您重定向到我们的预订日历...",
          upfrontTotal: "预付 / 一次性",
          monthlyTotal: "月度经常性"
        },
        notFound: {
          title: "哎呀！找不到页面",
          desc: "您正在寻找的页面可能已被移除、名称已更改或暂时不可用。",
          backHome: "返回首页"
        },
        servicesPage: {
          subtitle: "创新的数字解决方案，旨在帮助您在竞争激烈的环境中成长、优化并取得成功。"
        }
      },
      legal: {
        privacy: {
          title: "隐私政策",
          subtitle: "我们致力于保护您的个人信息和您的隐私权。",
          intro: "最后更新：2024年1月1日"
        },
        terms: {
          title: "服务条款",
          subtitle: "在使用我们的服务之前，请仔细阅读这些条款和条件。",
          intro: "最后更新：2024年1月1日"
        }
      },
      meta: { description: "JXING Tech 是一家数字解决方案公司。" },
      data: {
        // Dynamic data keys populated in useTranslatedData via constants
      }
    }
  },

};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ms', 'zh', 'hi', 'es', 'ar'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
