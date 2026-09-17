"use client";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cloud,
  Grid2X2,
  Linkedin,
  Mail,
  Moon,
  Send,
  Sparkles,
  Sun,
  Zap,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

type Language = "en" | "fa";

const projects = [
  {
    title: "Sarraff",
    typeEn: "DeFi / Decentralized Exchange",
    typeFa: "دیفای / صرافی غیرمتمرکز",
    tech: "Next.js / TypeScript / Solidity / Web3",
    descriptionEn:
      "A DeFi platform on Binance Smart Chain for token swapping, liquidity management and KRNT token minting.",
    descriptionFa:
      "یک پلتفرم DeFi روی شبکه Binance Smart Chain برای سواپ توکن، مدیریت نقدینگی و مینت توکن KRNT.",
    image: "/images/sarraff.png",
    link: "https://sarraff.in/",
  },

  {
    title: "KRNT",
    typeEn: "Investment / Web3 Platform",
    typeFa: "پلتفرم سرمایه‌گذاری / Web3",
    tech: "Next.js / TypeScript / Backend",
    descriptionEn:
      "An investment platform connecting investors with promising business ideas and opportunities.",
    descriptionFa:
      "یک پلتفرم سرمایه‌گذاری برای ارتباط سرمایه‌گذاران با ایده‌ها و فرصت‌های تجاری امیدوارکننده.",
    image: "/images/krnt.png",
    link: "https://krnt.in/",
  },

  {
    title: "KRNT Token",
    typeEn: "BEP-20 Token / DeFi",
    typeFa: "توکن BEP-20 / DeFi",
    tech: "Solidity / Binance Smart Chain / Tokenomics",
    descriptionEn:
      "A production-ready BEP-20 token on Binance Smart Chain with dynamic taxation, anti-dump protection, auto-liquidity and reflection rewards.",
    descriptionFa:
      "یک توکن BEP-20 آماده Production روی Binance Smart Chain با مالیات پویا، محافظت در برابر Dump، نقدینگی خودکار و پاداش‌های Reflection.",
    image: "/images/krnttoken.png",
    link: "https://dex.coinmarketcap.com/token/bsc/0xa0dcd9f952842e2e2e5e5441cc50007d169ace5b/",
  },

  {
    title: "KRNT Smart Contract",
    typeEn: "Blockchain / Smart Contract Development",
    typeFa: "بلاکچین / توسعه قرارداد هوشمند",
    tech: "Solidity / BEP-20 / BSC / DeFi",
    descriptionEn:
      "A production-grade BEP-20 smart contract designed and deployed from scratch with minting, burning, pausing, dynamic tax and DeFi integration.",
    descriptionFa:
      "یک قرارداد هوشمند BEP-20 در سطح Production که از صفر طراحی و Deploy شده و شامل Mint، Burn، Pause، مالیات پویا و یکپارچه‌سازی با DeFi است.",
    image: "/images/krntblockchain.png",
    link: "https://bscscan.com/address/0xA0dcd9f952842E2e2e5E5441CC50007d169AcE5B",
  },

  {
    title: "Electroniro",
    typeEn: "Engineering / Corporate Website",
    typeFa: "مهندسی / وب‌سایت شرکتی",
    tech: "Next.js / TypeScript / UI Design",
    descriptionEn:
      "A corporate website for an engineering company specializing in industrial electrical systems and automation.",
    descriptionFa:
      "یک وب‌سایت شرکتی برای یک مجموعه مهندسی متخصص در سیستم‌های برق صنعتی و اتوماسیون.",
    image: "/images/electroniro.png",
    link: "https://electroniro.ir/",
  },

  {
    title: "Akahareb",
    typeEn: "Artist / Music Website",
    typeFa: "هنرمند / وب‌سایت موسیقی",
    tech: "Next.js / TypeScript / UI Design",
    descriptionEn:
      "A cinematic digital experience presenting HAREB’s music, videos, visual work and artistic identity.",
    descriptionFa:
      "یک تجربه دیجیتال سینمایی برای معرفی موسیقی، ویدیوها، آثار بصری و هویت هنری HAREB.",
    image: "/images/hareb.png",
    link: "https://www.akahareb.ir/",
  },

  {
    title: "Akatizz",
    typeEn: "Artist / Music Website",
    typeFa: "هنرمند / وب‌سایت موسیقی",
    tech: "Next.js / TypeScript / UI Design",
    descriptionEn:
      "A dark and modern artist website built around TIZZ’s trap music, visual identity and creative world.",
    descriptionFa:
      "یک وب‌سایت هنری مدرن و دارک با محوریت موسیقی Trap، هویت بصری و دنیای خلاقانه TIZZ.",
    image: "/images/tizz.png",
    link: "https://www.akatizz.ir/",
  },

  {
    title: "Amin Auto",
    typeEn: "Automotive / Business Website",
    typeFa: "خودرو / وب‌سایت تجاری",
    tech: "Next.js / TypeScript / UI Design",
    descriptionEn:
      "A professional automotive website focused on vehicle diagnostics, repair and servicing.",
    descriptionFa:
      "یک وب‌سایت حرفه‌ای در حوزه خودرو با تمرکز بر عیب‌یابی، تعمیر و سرویس خودرو.",
    image: "/images/aminauto.png",
    link: "https://www.aminauto.ir/",
  },

  {
    title: "Omid Damghani",
    typeEn: "Photography / Portfolio",
    typeFa: "عکاسی / پورتفولیو",
    tech: "Next.js / TypeScript / UI Design",
    descriptionEn:
      "A visual photography portfolio focused on atmosphere, storytelling and memorable imagery.",
    descriptionFa:
      "یک پورتفولیوی بصری عکاسی با تمرکز بر فضا، روایت و خلق تصاویر ماندگار.",
    image: "/images/omiddamghani.png",
    link: "https://www.omiddamghani.ir/",
  },
];

const services = [
  {
    titleEn: "Web Development",
    titleFa: "توسعه وب",
    textEn:
      "Modern, fast and scalable web applications using Next.js, React, Node.js and more.",
    textFa:
      "توسعه اپلیکیشن‌های وب مدرن، سریع و مقیاس‌پذیر با استفاده از Next.js، React، Node.js و تکنولوژی‌های دیگر.",
    Icon: Code2,
  },

  {
    titleEn: "UI/UX Design",
    titleFa: "طراحی UI/UX",
    textEn: "Clean, modern and user-focused interfaces that make an impact.",
    textFa: "طراحی رابط‌های کاربری تمیز، مدرن و کاربرمحور که تأثیرگذار باشند.",
    Icon: Grid2X2,
  },

  {
    titleEn: "Digital Products",
    titleFa: "محصولات دیجیتال",
    textEn:
      "From concept to launch, I build digital products that solve real problems.",
    textFa:
      "از ایده و مفهوم اولیه تا Launch، محصولات دیجیتالی می‌سازم که مشکلات واقعی را حل می‌کنند.",
    Icon: Cloud,
  },

  {
    titleEn: "Consulting",
    titleFa: "مشاوره فنی",
    textEn: "Technical consulting for startups and businesses looking to grow.",
    textFa:
      "ارائه مشاوره فنی به استارتاپ‌ها و کسب‌وکارهایی که به دنبال رشد و توسعه هستند.",
    Icon: Zap,
  },
];

const expertise = [
  {
    number: "01",
    titleEn: "Web3 & Blockchain",
    titleFa: "Web3 و بلاکچین",
    textEn:
      "Decentralized applications and blockchain-based systems with a focus on smart contracts and reliable Web3 integrations.",
    textFa:
      "توسعه اپلیکیشن‌های غیرمتمرکز و سیستم‌های مبتنی بر بلاکچین با تمرکز بر قراردادهای هوشمند و یکپارچه‌سازی‌های قابل اعتماد Web3.",
    skills: "Solidity • Smart Contracts • DApps • DeFi • Web3 APIs",
    Icon: Code2,
  },

  {
    number: "02",
    titleEn: "Full-Stack Engineering",
    titleFa: "مهندسی Full-Stack",
    textEn:
      "Scalable web applications built across the frontend and backend with modern, production-ready technologies.",
    textFa:
      "ساخت اپلیکیشن‌های وب مقیاس‌پذیر در Frontend و Backend با استفاده از تکنولوژی‌های مدرن و آماده Production.",
    skills: "Next.js • React • TypeScript • Node.js • REST APIs • Databases",
    Icon: Grid2X2,
  },

  {
    number: "03",
    titleEn: "AI & Automation",
    titleFa: "هوش مصنوعی و اتوماسیون",
    textEn:
      "AI-powered applications and automated workflows designed to reduce manual work and create smarter digital experiences.",
    textFa:
      "ساخت اپلیکیشن‌های مبتنی بر هوش مصنوعی و Workflowهای خودکار برای کاهش کارهای دستی و ایجاد تجربه‌های دیجیتال هوشمندتر.",
    skills: "LLMs • AI Applications • n8n • Bots • Automation",
    Icon: Sparkles,
  },

  {
    number: "04",
    titleEn: "Backend & Infrastructure",
    titleFa: "Backend و زیرساخت",
    textEn:
      "Robust backend systems and infrastructure focused on performance, scalability and reliable deployment.",
    textFa:
      "توسعه سیستم‌های Backend و زیرساخت‌های قدرتمند با تمرکز بر Performance، Scalability و Deployment قابل اعتماد.",
    skills: "Python • FastAPI • PostgreSQL • Redis • Docker • APIs",
    Icon: Cloud,
  },
];

const experiences = [
  {
    number: "01",
    titleEn: "Blockchain & Full-Stack Developer",
    titleFa: "توسعه‌دهنده Blockchain و Full-Stack",
    companyEn: "Freelance / Remote",
    companyFa: "فریلنس / ریموت",
    period: "2018 — Present",
    textEn:
      "Designing and developing decentralized applications, smart contracts and full-stack Web3 products. Working across blockchain architecture, Solidity development and modern frontend/backend technologies to turn ideas into production-ready digital systems.",
    textFa:
      "طراحی و توسعه اپلیکیشن‌های غیرمتمرکز، قراردادهای هوشمند و محصولات Full-Stack مبتنی بر Web3. فعالیت در حوزه معماری بلاکچین، توسعه Solidity و تکنولوژی‌های مدرن Frontend و Backend برای تبدیل ایده‌ها به سیستم‌های دیجیتال آماده Production.",
    skills:
      "DApps • Solidity • React • Next.js • Node.js • TypeScript • Web3 • DeFi",
    Icon: Code2,
  },

  {
    number: "02",
    titleEn: "Full-Stack Developer",
    titleFa: "توسعه‌دهنده Full-Stack",
    companyEn: "Remote / Various Projects",
    companyFa: "ریموت / پروژه‌های مختلف",
    period: "2020",
    textEn:
      "Built and maintained web applications across the frontend and backend, contributing to the complete software development lifecycle from implementation and API integration to databases, testing and deployment.",
    textFa:
      "توسعه و نگهداری اپلیکیشن‌های وب در بخش‌های Frontend و Backend و مشارکت در چرخه کامل توسعه نرم‌افزار از پیاده‌سازی و اتصال API تا Database، تست و Deployment.",
    skills:
      "React • Node.js • Python • PHP • PostgreSQL • REST APIs • Tailwind CSS",
    Icon: Grid2X2,
  },

  {
    number: "03",
    titleEn: "Data Analyst Intern",
    titleFa: "کارآموز تحلیل داده",
    companyEn: "Remote / International Project",
    companyFa: "ریموت / پروژه بین‌المللی",
    period: "2020",
    textEn:
      "Worked with structured datasets and analytical workflows, using SQL and Python to process data, automate repetitive tasks and generate insights for business-oriented decision making.",
    textFa:
      "کار با داده‌های ساختاریافته و Workflowهای تحلیلی با استفاده از SQL و Python برای پردازش داده، اتوماسیون وظایف تکراری و استخراج Insights برای تصمیم‌گیری‌های کسب‌وکاری.",
    skills:
      "SQL • PostgreSQL • Python • Data Processing • Automation • Data Analysis",
    Icon: Cloud,
  },

  {
    number: "04",
    titleEn: "Software Engineering Intern",
    titleFa: "کارآموز مهندسی نرم‌افزار",
    companyEn: "Tech Startup — Tehran, Iran",
    companyFa: "استارتاپ فناوری — تهران، ایران",
    period: "2021",
    textEn:
      "Supported software development activities across frontend, backend and scripting environments while gaining practical experience in agile development, version control and automation.",
    textFa:
      "مشارکت در فعالیت‌های توسعه نرم‌افزار در محیط‌های Frontend، Backend و Scripting و کسب تجربه عملی در توسعه Agile، کنترل نسخه و اتوماسیون.",
    skills:
      "JavaScript • TypeScript • MQL • PHP • Python • Version Control • Automation",
    Icon: Zap,
  },
];

const fade = {
  hidden: { opacity: 0, y: 22 },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Home() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState<Language>("en");

  const t = lang === "fa";

  return (
    <main dir={t ? "rtl" : "ltr"} className={dark ? "site dark" : "site light"}>
      <div className="ambient a1" />
      <div className="ambient a2" />
      <div className="noise" />

      {/* ================= HEADER ================= */}

      <header className="nav wrap">
        <a href="#home" className="brand">
          <Image
            src="/favicon.png"
            alt={t ? "مهرداد سیف" : "Mehrdad Seif"}
            width={45}
            height={45}
            priority
          />
        </a>

        <nav>
          {[
            {
              en: "Home",
              fa: "خانه",
              href: "#home",
            },
            {
              en: "About",
              fa: "درباره من",
              href: "#about",
            },
            {
              en: "Projects",
              fa: "پروژه‌ها",
              href: "#projects",
            },
            {
              en: "Services",
              fa: "خدمات",
              href: "#services",
            },
            {
              en: "Experience",
              fa: "تجربه",
              href: "#experience",
            },
            {
              en: "Contact",
              fa: "تماس",
              href: "#contact",
            },
          ].map((item, i) => (
            <a
              className={i === 0 ? "active" : ""}
              href={item.href}
              key={item.en}
            >
              {t ? item.fa : item.en}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <button
            className="toggle"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? <Moon size={15} /> : <Sun size={15} />}
            <span />
          </button>

          <button
            className="lang"
            onClick={() => setLang(lang === "en" ? "fa" : "en")}
            aria-label="Switch language"
          >
            {lang === "en" ? "FA" : "EN"}
          </button>
        </div>
      </header>

      {/* ================= HERO ================= */}

      <section id="home" className="hero wrap">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="show"
          variants={fade}
        >
          <div className="eyebrow">
            {t
              ? "مهندس ارشد بلاکچین و فول‌استک"
              : "Senior Blockchain & Full-Stack Engineer"}
          </div>

          <h1>
            {t ? "مهرداد" : "Mehrdad"}
            <br />
            <span className="faselematn">{t ? "سیفی" : "Seifi"}</span>
          </h1>

          <p className="lead">
            {t
              ? "ساخت سیستم‌های Web3، فول‌استک و مبتنی بر هوش مصنوعی."
              : "Building Web3, Full-Stack, Blockchain Developer & AI-Powered Systems."}
          </p>

          <p className="sub">
            {t
              ? "من اپلیکیشن‌های وب مقیاس‌پذیر، محصولات غیرمتمرکز، سیستم‌های Backend و راهکارهای مبتنی بر هوش مصنوعی را طراحی و توسعه می‌دهم؛ از معماری و قراردادهای هوشمند تا رابط‌های کاربری آماده برای Production."
              : "I design and build scalable web applications, decentralized products, backend systems and AI-powered solutions — from architecture and smart contracts to production-ready interfaces."}
          </p>

          <div className="actions">
            <a className="btn primary" href="#projects">
              {t ? "مشاهده پروژه‌ها" : "View My Work"}
              {t ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </a>

            <a className="btn ghost" href="#contact">
              {t ? "شروع همکاری" : "Let's Work Together"}
            </a>
          </div>

          <div className="social">
            <a
              href="https://github.com/mehrdadseifi2004-blockchain"
              target="_blank"
              rel="noopener noreferrer"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/in/mehrdad-seifi-23a7b329/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} />
            </a>

            <a
              href="https://t.me/Mehrdadseifii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send size={15} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="orb orb1" />
          <div className="orb orb2" />

          <div className="portrait-frame">
            <img
              src="/images/hero-portrait.png"
              alt="Mehrdad Seif"
              className="hero-portrait"
            />
          </div>

          {/* <div className="side-label">
            {t ? (
              <>
                ایده
                <br />
                کد
                <br />
                محصولات
                <br />
                تأثیرگذاری
              </>
            ) : (
              <>
                IDEAS
                <br />
                CODE
                <br />
                PRODUCTS
                <br />
                IMPACT
              </>
            )}
          </div> */}
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="section wrap about">
        <motion.div
          className="section-intro"
          whileInView="show"
          initial="hidden"
          variants={fade}
          viewport={{ once: true }}
        >
          <div className="eyebrow">{t ? "درباره من" : "About Me"}</div>

          <h2>
            {t ? (
              <>
                تبدیل ایده‌ها
                <br />
                <span>به سیستم‌های واقعی.</span>
              </>
            ) : (
              <>
                Engineering
                <br />
                <span>Ideas into Systems.</span>
              </>
            )}
          </h2>

          <p>
            {t
              ? "من مهرداد سیفی، مهندس Blockchain و Full-Stack هستم و روی ساخت سیستم‌های دیجیتال مقیاس‌پذیر در حوزه‌های Web3، زیرساخت Backend، هوش مصنوعی و اپلیکیشن‌های مدرن وب تمرکز دارم. در تمام لایه‌های یک محصول فعالیت می‌کنم؛ از معماری و APIها گرفته تا قراردادهای هوشمند، رابط‌های کاربری و اتوماسیون، و ایده‌های پیچیده را به محصولات قابل اعتماد و آماده Production تبدیل می‌کنم."
              : "I'm Mehrdad Seifi, a Blockchain & Full-Stack Engineer focused on building scalable digital systems across Web3, backend infrastructure, AI and modern web applications. I work across the stack — from architecture and APIs to smart contracts, frontend interfaces and automation — turning complex ideas into reliable, production-ready products."}
          </p>

          <a className="text-link" href="#contact">
            {t ? "اطلاعات بیشتر درباره من" : "More About Me"}
            {t ? <ArrowLeft size={15} /> : <ArrowRight size={15} />}
          </a>
        </motion.div>

        <div className="stats glass">
          <div>
            <strong>5+</strong>
            <small>{t ? "سال تجربه" : "Years Experience"}</small>
          </div>

          <div>
            <strong>20+</strong>
            <small>{t ? "پروژه تکمیل‌شده" : "Completed Projects"}</small>
          </div>

          <div>
            <strong>10+</strong>
            <small>{t ? "مشتری راضی" : "Happy Clients"}</small>
          </div>
        </div>

        <div className="quote glass">
          <Sparkles size={18} />

          <p>
            {t
              ? "«طراحی خوب و کد تمیز یک تجمل نیستند؛ ضروری هستند.»"
              : "“Good design and clean code are not luxury, they are essential.”"}
          </p>

          <small>— {t ? "مهرداد سیفی" : "Mehrdad Seifi"}</small>
        </div>
      </section>

      {/* ================= EXPERTISE ================= */}

      <section id="expertise" className="section wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">{t ? "تخصص‌ها" : "Expertise"}</div>

            <h2>{t ? "چه چیزهایی می‌سازم" : "What I Build"}</h2>

            <p>
              {t
                ? "در حوزه‌های Web3، مهندسی Full-Stack، هوش مصنوعی و سیستم‌های Backend فعالیت می‌کنم و تفکر محصول را با عمق فنی ترکیب می‌کنم."
                : "I work across Web3, full-stack engineering, AI and backend systems — combining product thinking with technical depth."}
            </p>
          </div>
        </div>

        <div className="service-grid">
          {expertise.map(
            ({ number, titleEn, titleFa, textEn, textFa, skills, Icon }) => (
              <motion.article
                className="card service-card"
                key={number}
                whileHover={{ y: -5 }}
              >
                <div className="icon">
                  <Icon size={20} />
                </div>

                <small>{number}</small>

                <h3>{t ? titleFa : titleEn}</h3>

                <p>{t ? textFa : textEn}</p>

                <span>{skills}</span>

                <ArrowUpRight className="card-arrow" size={18} />
              </motion.article>
            ),
          )}
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section id="services" className="section wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">{t ? "خدمات" : "Services"}</div>

            <h2>{t ? "چه کاری انجام می‌دهم" : "What I Do"}</h2>

            <p>
              {t
                ? "طیف متنوعی از خدمات را برای تبدیل ایده‌ها به محصولات واقعی ارائه می‌دهم؛ از توسعه وب و طراحی UI/UX تا ساخت محصولات و راهکارهای دیجیتال."
                : "I offer a range of services to help bring your ideas to life. From web development to UI/UX design and digital solutions."}
            </p>
          </div>

          <a className="text-link" href="#contact">
            {t ? "همه خدمات" : "All Services"}
            {t ? <ArrowLeft size={15} /> : <ArrowRight size={15} />}
          </a>
        </div>

        <div className="service-grid">
          {services.map(({ titleEn, titleFa, textEn, textFa, Icon }) => (
            <motion.article
              className="card service-card"
              key={titleEn}
              whileHover={{ y: -5 }}
            >
              <div className="icon">
                <Icon size={20} />
              </div>

              <h3>{t ? titleFa : titleEn}</h3>

              <p>{t ? textFa : textEn}</p>

              <ArrowUpRight className="card-arrow" size={18} />
            </motion.article>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              {t ? "پروژه‌های منتخب" : "Selected Works"}
            </div>

            <h2>{t ? "پورتفولیوی من" : "My Portfolio"}</h2>

            <p>
              {t
                ? "منتخبی از پروژه‌هایی که روی آن‌ها کار کرده‌ام؛ هر پروژه یک قدم رو به جلو در مسیر حرفه‌ای من است."
                : "A selection of projects I've worked on. Each one a step forward in the journey."}
            </p>
          </div>

          <a className="text-link" href="#contact">
            {t ? "مشاهده همه پروژه‌ها" : "View All Projects"}
            {t ? <ArrowLeft size={15} /> : <ArrowRight size={15} />}
          </a>
        </div>

        <div className="project-grid">
          {projects.map((p) => (
            <motion.a
              className="project"
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <div className="project-image">
                <img src={p.image} alt={`${p.title} project`} />

                <div className="image-shade" />
              </div>

              <div className="project-meta">
                <div>
                  <h3>{p.title}</h3>

                  <p>{t ? p.typeFa : p.typeEn}</p>

                  <small>{p.tech}</small>
                </div>

                <ArrowUpRight size={19} />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="section wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">{t ? "تجربه" : "Experience"}</div>

            <h2>
              {t ? (
                <>
                  ساخت سیستم‌ها.
                  <br />
                  <span>رشد با تکنولوژی.</span>
                </>
              ) : (
                <>
                  Building Systems.
                  <br />
                  <span>Growing Through Technology.</span>
                </>
              )}
            </h2>

            <p>
              {t
                ? "مسیر حرفه‌ای من بر ساخت سیستم‌های نرم‌افزاری مدرن در حوزه‌های Blockchain، Web3، مهندسی Full-Stack، توسعه Backend و Automation متمرکز بوده است."
                : "A career focused on building modern software systems across Blockchain, Web3, Full-Stack Engineering, Backend Development and Automation."}
            </p>
          </div>
        </div>

        <div className="service-grid">
          {experiences.map(
            ({
              number,
              titleEn,
              titleFa,
              companyEn,
              companyFa,
              period,
              textEn,
              textFa,
              skills,
              Icon,
            }) => (
              <motion.article
                className="card service-card"
                key={number}
                whileHover={{ y: -5 }}
              >
                <div className="icon">
                  <Icon size={20} />
                </div>

                <small>{number}</small>

                <h3>{t ? titleFa : titleEn}</h3>

                <p>
                  <strong>{t ? companyFa : companyEn}</strong>

                  <br />

                  {period}
                </p>

                <p>{t ? textFa : textEn}</p>

                <span>{skills}</span>

                <ArrowUpRight className="card-arrow" size={18} />
              </motion.article>
            ),
          )}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section id="testimonials" className="section wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              {t ? "نظرات مشتریان" : "Testimonials"}
            </div>

            <h2>
              {t ? (
                <>
                  مردم درباره
                  <br />
                  <span>کار من چه می‌گویند.</span>
                </>
              ) : (
                <>
                  What People
                  <br />
                  <span>Say About My Work.</span>
                </>
              )}
            </h2>

            <p>
              {t
                ? "چند کلمه از افرادی که در پروژه‌ها و محصولات واقعی با آن‌ها همکاری کرده‌ام."
                : "A few words from people I've worked with on real-world products and projects."}
            </p>
          </div>
        </div>

        <motion.div className="quote glass" whileHover={{ y: -5 }}>
          <Sparkles size={18} />

          <p>
            {t
              ? "«مهرداد یک توسعه‌دهنده توانمند با درک بسیار خوب از طراحی و حل مسئله است. پروژه ما را به‌موقع تحویل داد و فراتر از انتظارات عمل کرد.»"
              : "“Mehrdad is a talented developer with a great sense of design and problem solving. He delivered our project on time and exceeded expectations.”"}
          </p>

          <small>
            <strong>Ali Rahimi</strong>
            <br />
            {t ? "بنیان‌گذار، Tizz" : "Founder, Tizz"}
          </small>
        </motion.div>
      </section>

      {/* ================= OFFERINGS ================= */}

      <section id="offerings" className="section wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">{t ? "خدمات" : "Services"}</div>

            <h2>
              {t ? (
                <>
                  تبدیل ایده‌ها
                  <br />
                  <span>به محصولات واقعی.</span>
                </>
              ) : (
                <>
                  Turning Ideas.
                  <br />
                  <span>Into Real Products.</span>
                </>
              )}
            </h2>

            <p>
              {t
                ? "از ایده‌های اولیه تا سیستم‌های آماده Production، به کسب‌وکارها و استارتاپ‌ها کمک می‌کنم محصولات دیجیتال قابل اعتماد در حوزه‌های Web3، Full-Stack، AI و Backend بسازند."
                : "From early-stage concepts to production-ready systems, I help businesses and startups build reliable digital products across Web3, Full-Stack Engineering, AI and Backend Development."}
            </p>
          </div>
        </div>

        <div className="service-grid">
          {[
            {
              number: "01",
              titleEn: "Full-Stack Development",
              titleFa: "توسعه Full-Stack",
              textEn:
                "Modern, scalable web applications built from frontend to backend with a focus on performance, maintainability and user experience.",
              textFa:
                "ساخت اپلیکیشن‌های وب مدرن و مقیاس‌پذیر از Frontend تا Backend با تمرکز بر Performance، Maintainability و تجربه کاربری.",
              skills:
                "Next.js • React • TypeScript • Node.js • REST APIs • PostgreSQL",
              Icon: Code2,
            },

            {
              number: "02",
              titleEn: "Blockchain & Web3",
              titleFa: "Blockchain و Web3",
              textEn:
                "Designing and developing blockchain-based products including smart contracts, DApps, tokens, DeFi platforms and Web3 integrations.",
              textFa:
                "طراحی و توسعه محصولات مبتنی بر بلاکچین شامل قراردادهای هوشمند، DAppها، توکن‌ها، پلتفرم‌های DeFi و یکپارچه‌سازی‌های Web3.",
              skills:
                "Solidity • Smart Contracts • DApps • DeFi • Web3 • Token Development",
              Icon: Grid2X2,
            },

            {
              number: "03",
              titleEn: "AI & Automation",
              titleFa: "AI و Automation",
              textEn:
                "Building AI-powered applications and intelligent automation workflows that integrate LLMs and modern AI technologies into real-world products.",
              textFa:
                "ساخت اپلیکیشن‌های مبتنی بر AI و Workflowهای هوشمند که LLMها و تکنولوژی‌های مدرن هوش مصنوعی را وارد محصولات واقعی می‌کنند.",
              skills:
                "LLMs • AI Agents • OpenAI • Gemini • Python • n8n • Automation",
              Icon: Sparkles,
            },

            {
              number: "04",
              titleEn: "Backend & Systems",
              titleFa: "Backend و سیستم‌ها",
              textEn:
                "Developing reliable backend services, APIs and data-driven systems designed for scalability, performance and long-term maintainability.",
              textFa:
                "توسعه سرویس‌های Backend، APIها و سیستم‌های داده‌محور با تمرکز بر Scalability، Performance و Maintainability بلندمدت.",
              skills:
                "Python • FastAPI • Node.js • PostgreSQL • Redis • Docker • APIs",
              Icon: Cloud,
            },
          ].map(
            ({ number, titleEn, titleFa, textEn, textFa, skills, Icon }) => (
              <motion.article
                className="card service-card"
                key={number}
                whileHover={{ y: -5 }}
              >
                <div className="icon">
                  <Icon size={20} />
                </div>

                <small>{number}</small>

                <h3>{t ? titleFa : titleEn}</h3>

                <p>{t ? textFa : textEn}</p>

                <span>{skills}</span>

                <ArrowUpRight className="card-arrow" size={18} />
              </motion.article>
            ),
          )}
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="section wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">{t ? "ارتباط با من" : "Get In Touch"}</div>

            <h2>
              {t ? (
                <>
                  بیایید
                  <br />
                  <span>چیزی عالی بسازیم.</span>
                </>
              ) : (
                <>
                  Let’s Build
                  <br />
                  <span>Something Great.</span>
                </>
              )}
            </h2>

            <p>
              {t
                ? "پروژه‌ای در ذهن دارید، برای اجرای یک ایده به کمک نیاز دارید یا می‌خواهید درباره یک چالش فنی صحبت کنید؟ خوشحال می‌شوم از شما بشنوم."
                : "Have a project in mind, need help bringing an idea to life, or want to discuss a technical challenge? I’d love to hear from you."}
            </p>
          </div>
        </div>

        <div className="contact-grid">
          <motion.a
            className="card contact-card"
            href="mailto:info@mehrdadseif.ir"
            whileHover={{ y: -5 }}
          >
            <div className="icon">
              <Mail size={20} />
            </div>

            <small>{t ? "ایمیل" : "Email"}</small>

            <h3>{t ? "در تماس باشیم" : "Let’s Talk"}</h3>

            <p>info@mehrdadseif.ir</p>

            <ArrowUpRight className="card-arrow" size={18} />
          </motion.a>

          <motion.a
            className="card contact-card"
            href="https://github.com/mehrdadseifi2004-blockchain"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
          >
            <div className="icon">
              <Code2 size={20} />
            </div>

            <small>GitHub</small>

            <h3>{t ? "مشاهده کدها" : "View My Code"}</h3>

            <p>github.com/mehrdadseifi2004-blockchain</p>

            <ArrowUpRight className="card-arrow" size={18} />
          </motion.a>

          <motion.a
            className="card contact-card"
            href="https://www.linkedin.com/in/mehrdad-seifi-23a7b329/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
          >
            <div className="icon">
              <Linkedin size={20} />
            </div>

            <small>LinkedIn</small>

            <h3>{t ? "ارتباط با من" : "Connect With Me"}</h3>

            <p>linkedin.com/in/mehrdad-seifi-23a7b329</p>

            <ArrowUpRight className="card-arrow" size={18} />
          </motion.a>

          <motion.a
            className="card contact-card"
            href="https://t.me/Mehrdadseifii"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
          >
            <div className="icon">
              <Send size={20} />
            </div>

            <small>Telegram</small>

            <h3>{t ? "پیام بدهید" : "Message Me"}</h3>

            <p>@Mehrdadseifii</p>

            <ArrowUpRight className="card-arrow" size={18} />
          </motion.a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">
        <div className="wrap footer-inner">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <span className="brand-mark">M</span>
              <span>{t ? "مهرداد سیفی" : "Mehrdad Seifi"}</span>
            </a>

            <p>
              {t
                ? "مهندس ارشد Blockchain و Full-Stack در حال ساخت سیستم‌های Web3، Full-Stack و مبتنی بر هوش مصنوعی."
                : "Senior Blockchain & Full-Stack Engineer building Web3, Full-Stack, Blockchain Developer & AI-Powered Systems."}
            </p>

            <div
              className="enamad-seal"
              dangerouslySetInnerHTML={{
                __html: `
      <a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=7768063&Code=PtZTchbQL8RR5LVg3KgXSUNzW4flCOkD'>
        <img
          referrerpolicy='origin'
          src='https://trustseal.enamad.ir/logo.aspx?id=7768063&Code=PtZTchbQL8RR5LVg3KgXSUNzW4flCOkD'
          alt=''
          style='cursor:pointer'
          code='PtZTchbQL8RR5LVg3KgXSUNzW4flCOkD'
        >
      </a>
    `,
              }}
            />
          </div>

          <nav className="footer-nav">
            <a href="#home">{t ? "خانه" : "Home"}</a>
            <a href="#about">{t ? "درباره من" : "About"}</a>
            <a href="#expertise">{t ? "تخصص‌ها" : "Expertise"}</a>
            <a href="#projects">{t ? "پروژه‌ها" : "Projects"}</a>
            <a href="#experience">{t ? "تجربه" : "Experience"}</a>
            <a href="#services">{t ? "خدمات" : "Services"}</a>
            <a href="#contact">{t ? "تماس" : "Contact"}</a>
          </nav>
        </div>

        <div className="wrap footer-bottom">
          <span>
            © {new Date().getFullYear()} {t ? "مهرداد سیفی" : "Mehrdad Seifi"}.{" "}
            {t ? "تمامی حقوق محفوظ است." : "All rights reserved."}
          </span>

          <a href="#home" className="back-top">
            {t ? "بازگشت به بالا" : "Back to Top"}

            <ArrowUpRight size={15} />
          </a>
        </div>
      </footer>
    </main>
  );
}
