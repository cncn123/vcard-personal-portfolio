'use strict';

(function () {
  const M = {
    'zh-CN': {
      metaTitle: '蔡倪 Bobby — 个人主页',
      navAbout: '关于',
      navResume: '履历',
      navPortfolio: '作品',
      navBlog: '随笔',
      navContact: '联系',
      langToggle: '繁體',
      langAria: '切换为繁体中文',
      themeAria: '切换明暗主题',
      nameDisplay: '蔡倪（Bobby CAI Ni）',
      jobTitle: '助理 IT 开发经理 · 大数据技术专家',
      sidebarShowContacts: '显示联系方式',
      contactEmail: '电子邮箱',
      contactPhone: '电话',
      contactBirthday: '生日',
      contactLocation: '所在地',
      contactAddress: '中国香港',
      socialFacebook: 'Facebook',
      socialTwitter: 'X（Twitter）',
      socialInstagram: 'Instagram',
      aboutTitle: '关于我',
      aboutP1: '我是蔡倪（Bobby CAI Ni），现任中国移动香港公司信息技术中心-中台运营支撑的助理 IT 开发经理及大数据技术专家。',
      aboutP2: '我的核心职责是主导大数据应用的整体规划与落地，推动 AI 与大数据技术在客户洞察、精准营销、风险控制等核心业务场景中的应用，以提升自助化分析能力。同时，我负责统筹各部门数据需求的全生命周期管理，与业务部门协同开展关键业务领域的数据专题分析，将分析结果转化为自动化的多源数据融合报告，为管理层及业务部门提供数据驱动的决策支持。此外，我还致力于构建安全可控的数据生态合作模式，推动数据能力的产品化封装与商业化输出。',
      aboutP3: '在技术技能方面，我精通全栈开发，涵盖前端（HTML、JavaScript、CSS、C#）、后端（Java、Node.js、Python）及数据应用开发（Hive、Spark、PL/SQL、MongoDB），并具备移动端（iOS、Android）以及 Shell、AI-Python 等开发能力。',
      aboutP4: '我持有多项权威认证，包括 AWS 机器学习专家级认证、AWS 解决方案架构师认证、PMP 项目管理认证、CKA 认证、CDMP 数据管理认证、中国移动梧桐大数据助理级技能认证以及中国移动中级 AI 人才培训认证（技术方向），并入选集团 IT 专家人才库。',
      aboutP5: '在工作中，我始终坚持「技术驱动业务」，例如首创引入 AI 大模型优化数据治理流程，解决了地址数据标准化难题，有效支撑了精准营销策略的落地。',
      serviceTitle: '专业领域',
      s1t: '大数据与人工智能',
      s1d: '规划并落地大数据应用，推动 AI 与大数据在客户洞察、精准营销、风控等场景的价值闭环。',
      s2t: '全栈与工程化',
      s2d: '覆盖前端、后端、数据应用与移动端工程实践，支撑中台与业务系统建设。',
      s3t: '数据工程与自助分析',
      s3d: '统筹数据需求全生命周期，开展专题分析并沉淀自动化、多源融合的分析报告能力。',
      s4t: '数据治理与生态合作',
      s4d: '构建安全可控的数据合作模式，推动数据能力产品化封装与商业化输出。',
      testimonialsTitle: '工作亮点',
      t1name: '数据治理创新',
      t1text: '率先引入 AI 大模型优化数据治理流程，解决地址数据标准化难题，支撑精准营销落地。',
      t2name: '业务赋能',
      t2text: '将分析结果转化为自动化多源数据融合报告，为管理层与业务部门提供数据驱动的决策支持。',
      clientsTitle: '合作伙伴',
      resumeTitle: '履历',
      eduTitle: '专业认证',
      eduItemTitle: '权威认证与人才资质',
      eduSpan: '持续更新',
      eduText: 'AWS 机器学习专家级认证、AWS 解决方案架构师认证、PMP、CKA、CDMP、中国移动梧桐大数据助理级技能认证、中国移动中级 AI 人才培训认证（技术方向）；入选集团 IT 专家人才库。',
      expTitle: '职业经历',
      expItemTitle: '中国移动香港有限公司',
      expSpan: '至今',
      expText: '信息技术中心 · 中台运营支撑。任助理 IT 开发经理及大数据技术专家，主导大数据应用规划与落地，推动 AI 与大数据在核心业务场景的应用，统筹数据需求管理与跨部门数据专题分析。',
      skillsTitle: '技能侧重',
      sk1: '大数据（Spark / Hive）',
      sk2: 'Java / 后端工程',
      sk3: 'Python / AI 与脚本',
      sk4: '前端与全栈交付',
      portfolioTitle: '作品展示',
      filterAll: '全部',
      filterWebDesign: '数据可视化',
      filterApps: '平台与工具',
      filterWebDev: '工程实践',
      selectCategory: '选择分类',
      portfolioCatWD: '数据可视化',
      portfolioCatApp: '平台与工具',
      portfolioCatDev: '工程实践',
      blogTitle: '随笔',
      blogCat: '大数据',
      blog1title: '自助分析与数据产品化思考',
      blog1excerpt: '从需求统筹到报告自动化，如何把分析能力沉淀为可复用的数据产品。',
      blog2title: 'AI 在数据治理中的实践',
      blog2excerpt: '以大模型辅助标准化与质量提升为例，讨论技术与业务的结合点。',
      blog3title: '精准营销背后的数据链路',
      blog3excerpt: '客户洞察、特征工程与策略闭环中的关键能力与实践要点。',
      contactTitle: '联系',
      formTitle: '留言',
      phName: '姓名',
      phEmail: '电子邮箱',
      phMessage: '留言内容',
      sendBtn: '发送',
      mapTitle: '中国香港'
    },
    'zh-TW': {
      metaTitle: '蔡倪 Bobby — 個人主頁',
      navAbout: '關於',
      navResume: '履歷',
      navPortfolio: '作品',
      navBlog: '隨筆',
      navContact: '聯絡',
      langToggle: '简体',
      langAria: '切換為簡體中文',
      themeAria: '切換明暗主題',
      nameDisplay: '蔡倪（Bobby CAI Ni）',
      jobTitle: '助理 IT 開發經理 · 大數據技術專家',
      sidebarShowContacts: '顯示聯絡方式',
      contactEmail: '電子郵件',
      contactPhone: '電話',
      contactBirthday: '生日',
      contactLocation: '所在地',
      contactAddress: '中國香港',
      socialFacebook: 'Facebook',
      socialTwitter: 'X（Twitter）',
      socialInstagram: 'Instagram',
      aboutTitle: '關於我',
      aboutP1: '我是蔡倪（Bobby CAI Ni），現任中國移動香港公司信息技術中心-中台運營支援的助理 IT 開發經理及大數據技術專家。',
      aboutP2: '我的核心職責是主導大數據應用的整體規劃與落地，推動 AI 與大數據技術在客戶洞察、精準營銷、風險控制等核心業務場景中的應用，以提升自助化分析能力。同時，我負責統籌各部門數據需求的全生命週期管理，與業務部門協同開展關鍵業務領域的數據專題分析，將分析結果轉化為自動化的多源數據融合報告，為管理層及業務部門提供數據驅動的決策支持。此外，我還致力於構建安全可控的數據生態合作模式，推動數據能力的產品化封裝與商業化輸出。',
      aboutP3: '在技術技能方面，我精通全端開發，涵蓋前端（HTML、JavaScript、CSS、C#）、後端（Java、Node.js、Python）及數據應用開發（Hive、Spark、PL/SQL、MongoDB），並具備移動端（iOS、Android）以及 Shell、AI-Python 等開發能力。',
      aboutP4: '我持有多項權威認證，包括 AWS 機器學習專家級認證、AWS 解決方案架構師認證、PMP 項目管理認證、CKA 認證、CDMP 數據管理認證、中國移動梧桐大數據助理級技能認證以及中國移動中級 AI 人才培訓認證（技術方向），並入選集團 IT 專家人才庫。',
      aboutP5: '在工作中，我始終堅持「技術驅動業務」，例如首創引入 AI 大模型優化數據治理流程，解決了地址數據標準化難題，有效支撐了精準營銷策略的落地。',
      serviceTitle: '專業領域',
      s1t: '大數據與人工智能',
      s1d: '規劃並落地大數據應用，推動 AI 與大數據在客戶洞察、精準營銷、風控等場景的價值閉環。',
      s2t: '全端與工程化',
      s2d: '涵蓋前端、後端、數據應用與移動端工程實踐，支撐中台與業務系統建設。',
      s3t: '數據工程與自助分析',
      s3d: '統籌數據需求全生命週期，開展專題分析並沉澱自動化、多源融合的分析報告能力。',
      s4t: '數據治理與生態合作',
      s4d: '構建安全可控的數據合作模式，推動數據能力產品化封裝與商業化輸出。',
      testimonialsTitle: '工作亮點',
      t1name: '數據治理創新',
      t1text: '率先引入 AI 大模型優化數據治理流程，解決地址數據標準化難題，支撐精準營銷落地。',
      t2name: '業務賦能',
      t2text: '將分析結果轉化為自動化多源數據融合報告，為管理層與業務部門提供數據驅動的決策支持。',
      clientsTitle: '合作夥伴',
      resumeTitle: '履歷',
      eduTitle: '專業認證',
      eduItemTitle: '權威認證與人才資質',
      eduSpan: '持續更新',
      eduText: 'AWS 機器學習專家級認證、AWS 解決方案架構師認證、PMP、CKA、CDMP、中國移動梧桐大數據助理級技能認證、中國移動中級 AI 人才培訓認證（技術方向）；入選集團 IT 專家人才庫。',
      expTitle: '職業經歷',
      expItemTitle: '中國移動香港有限公司',
      expSpan: '至今',
      expText: '信息技術中心 · 中台運營支援。任助理 IT 開發經理及大數據技術專家，主導大數據應用規劃與落地，推動 AI 與大數據在核心業務場景的應用，統籌數據需求管理與跨部門數據專題分析。',
      skillsTitle: '技能側重',
      sk1: '大數據（Spark / Hive）',
      sk2: 'Java / 後端工程',
      sk3: 'Python / AI 與腳本',
      sk4: '前端與全端交付',
      portfolioTitle: '作品展示',
      filterAll: '全部',
      filterWebDesign: '數據可視化',
      filterApps: '平台與工具',
      filterWebDev: '工程實踐',
      selectCategory: '選擇分類',
      portfolioCatWD: '數據可視化',
      portfolioCatApp: '平台與工具',
      portfolioCatDev: '工程實踐',
      blogTitle: '隨筆',
      blogCat: '大數據',
      blog1title: '自助分析與數據產品化思考',
      blog1excerpt: '從需求統籌到報告自動化，如何把分析能力沉澱為可複用的數據產品。',
      blog2title: 'AI 在數據治理中的實踐',
      blog2excerpt: '以大模型輔助標準化與質量提升為例，討論技術與業務的結合點。',
      blog3title: '精準營銷背後的數據鏈路',
      blog3excerpt: '客戶洞察、特徵工程與策略閉環中的關鍵能力與實踐要點。',
      contactTitle: '聯絡',
      formTitle: '留言',
      phName: '姓名',
      phEmail: '電子郵件',
      phMessage: '留言內容',
      sendBtn: '發送',
      mapTitle: '中國香港'
    }
  };

  function t(lang, key) {
    const pack = M[lang] || M['zh-CN'];
    return pack[key] != null ? pack[key] : key;
  }

  function applyLocale(lang) {
    if (lang !== 'zh-CN' && lang !== 'zh-TW') lang = 'zh-CN';
    document.documentElement.setAttribute('data-locale', lang);
    document.documentElement.setAttribute('lang', lang === 'zh-TW' ? 'zh-Hant' : 'zh-Hans');

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const val = t(lang, key);
      if (val == null) return;
      el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', t(lang, key));
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', t(lang, key));
    });

    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-title');
      el.setAttribute('title', t(lang, key));
    });

    const titleEl = document.querySelector('title');
    if (titleEl) titleEl.textContent = t(lang, 'metaTitle');

    const langBtn = document.querySelector('[data-lang-toggle]');
    if (langBtn) {
      const span = langBtn.querySelector('[data-lang-label]');
      if (span) span.textContent = lang === 'zh-CN' ? M['zh-CN'].langToggle : M['zh-TW'].langToggle;
    }

    try {
      localStorage.setItem('locale', lang);
    } catch (e) { /* ignore */ }

    const activeFilterBtn = document.querySelector('[data-filter-btn].active');
    const selectValEl = document.querySelector('[data-selecct-value]');
    if (activeFilterBtn && selectValEl) {
      const lab = activeFilterBtn.querySelector('[data-i18n]');
      if (lab) selectValEl.textContent = lab.textContent;
    }
  }

  window.I18N_MESSAGES = M;
  window.applyLocale = applyLocale;

  let initial = 'zh-CN';
  try {
    const saved = localStorage.getItem('locale');
    if (saved === 'zh-CN' || saved === 'zh-TW') initial = saved;
  } catch (e) { /* ignore */ }

  applyLocale(initial);

  const langToggle = document.querySelector('[data-lang-toggle]');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      const cur = document.documentElement.getAttribute('data-locale') || 'zh-CN';
      applyLocale(cur === 'zh-CN' ? 'zh-TW' : 'zh-CN');
    });
  }
})();
