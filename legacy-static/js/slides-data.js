/**
 * ICT Coach Presentation Data Model
 * HSC ICT Chapter 4: Web Design and HTML (ওয়েব ডিজাইন ও HTML)
 * Author: ICT Coach Special Teaching Edition (Expanded Step-by-Step Edition)
 */

window.SLIDES_DATA = [
  // ==========================================
  // MODULE 1: পরিচিতি ও বোর্ড নম্বর বণ্টন
  // ==========================================
  {
    id: 1,
    module: "Intro",
    category: "পরিচিতি",
    title: "ওয়েব ডিজাইন ও HTML — মাস্টার ক্লাস",
    subtitle: "HSC ICT অধ্যায় ৪ | One-Shot Complete Lecture",
    layout: "hero-title",
    teacherNotes: "ক্লাসের শুরুতে অধ্যায়ের গুরুত্ব বুঝিয়ে দিন। বলুন যে এই অধ্যায় থেকে এইচএসসি বোর্ড পরীক্ষায় প্রতি বছর কমপক্ষে ১ থেকে ২টি সম্পূর্ণ সিকিউ এবং ৩ থেকে ৫টি এমসিকিউ নিশ্চিত আসে। কোডিং সহজ এবং একটু মনোযোগ দিলেই পুরো ১০ নম্বর পাওয়া যায়।",
    html: `
      <div class="slide-hero-badge">HSC ICT Master Series • 2024–2026</div>
      <h1 class="slide-main-title">ওয়েব ডিজাইন পরিচিতি ও <span class="gradient-text">HTML</span></h1>
      <p class="slide-main-desc">বেসিক কনসেপ্ট • ওয়েবসাইট কাঠামো • ট্যাগ ও অ্যাট্রিবিউট • টেবিল ও লিস্ট কোডিং • বোর্ড CQ ও MCQ সমাধান</p>
      
      <div class="hero-stats-grid">
        <div class="stat-card">
          <div class="stat-icon">🎯</div>
          <div class="stat-val">১০–১৫ নম্বর</div>
          <div class="stat-lbl">বোর্ড পরীক্ষায় ওয়েটেজ</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">📑</div>
          <div class="stat-val">১–২ টি CQ</div>
          <div class="stat-lbl">সৃজনশীল প্রশ্ন নিশ্চিত</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">💡</div>
          <div class="stat-val">৩–৫ টি MCQ</div>
          <div class="stat-lbl">বহুনির্বাচনী প্রশ্ন</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">💻</div>
          <div class="stat-val">HTML5</div>
          <div class="stat-lbl">হ্যান্ডস-অন লাইভ কোড</div>
        </div>
      </div>
      
      <div class="hero-footer-bar">
        <span>👨‍🏫 উপস্থাপনায়: <strong>ICT Coach Special Teaching Version</strong></span>
        <span>⚡ অধ্যায় ৪: Web Design & HTML</span>
      </div>
    `
  },

  {
    id: 2,
    module: "Intro",
    category: "বোর্ড এনালাইসিস",
    title: "বোর্ড পরীক্ষার প্রশ্ন প্যাটার্ন ও অধ্যায় বিশ্লেষণ",
    subtitle: "কোন টপিক থেকে কেমন প্রশ্ন আসে?",
    layout: "content-grid",
    teacherNotes: "ছাত্রদের বলুন: 'ক' তে সংজ্ঞা আসে, 'খ' তে পার্থক্য বা ব্যাখ্যা, আর 'গ' ও 'ঘ' এর ৯০% ক্ষেত্রে টেবিল তৈরি অথবা লিস্ট এবং লিংকের কোড লিখতে বলা হয়। কাঠামো বিশ্লেষণও ঘ তে খুব জনপ্রিয়।",
    html: `
      <div class="grid-2col">
        <div class="info-panel glass-card">
          <h3 class="panel-header text-gold">📌 সৃজনশীল প্রশ্ন (CQ) কাঠামো</h3>
          <ul class="styled-list">
            <li>
              <strong>'ক' (জ্ঞানমূলক — ১ নম্বর):</strong> 
              <p>ওয়েবপেজ, IP Address, ডোমেইন নেম, DNS, সার্চ ইঞ্জিন, ট্যাগ, অ্যাট্রিবিউট ইত্যাদির সংজ্ঞা।</p>
            </li>
            <li>
              <strong>'খ' (অনুধাবনমূলক — ২ নম্বর):</strong> 
              <p>ব্রাউজার বনাম সার্চ ইঞ্জিন, IP এর চেয়ে ডোমেইন সুবিধাজনক কেন, স্ট্যাটিক বনাম ডাইনামিক, ওয়েবসাইট কাঠামোর তুলনা।</p>
            </li>
            <li>
              <strong>'গ' ও 'ঘ' (প্রয়োগ ও উচ্চতর দক্ষতা — ৩+৪ = ৭ নম্বর):</strong> 
              <p class="highlight-text">★ HTML টেবিল (Colspan, Rowspan) তৈরি করার সম্পূর্ণ কোড</p>
              <p>★ অর্ডারড/আনঅর্ডারড লিস্ট এবং হাইপারলিংক সংযোজন</p>
              <p>★ ওয়েবসাইট কাঠামোর তুলনামূলক বিশ্লেষণ ও উদ্দীপক ব্যাখ্যা</p>
            </li>
          </ul>
        </div>

        <div class="info-panel glass-card">
          <h3 class="panel-header text-cyan">🎯 শিক্ষার্থীদের জন্য সাফল্যের টিপস</h3>
          <div class="tip-box">
            <span class="tip-badge">সতর্কতা ১</span>
            <p>HTML ট্যাগ লেখার সময় ওপেনিং ট্যাগ (<tag>) দিলে অবশ্যই ক্লোজিং ট্যাগ (</tag>) দিতে ভুলবেন না।</p>
          </div>
          <div class="tip-box">
            <span class="tip-badge">সতর্কতা ২</span>
            <p>টেবিল কোড করার সময় <code>border="1"</code> অ্যাট্রিবিউট দিতে কখনো ভুলবেন না, অন্যথায় আউটপুটে বর্ডার আসবে না।</p>
          </div>
          <div class="tip-box">
            <span class="tip-badge">সতর্কতা ৩</span>
            <p>Rowspan ও Colspan এর সংখ্যা গণনা করতে অনেকে ভুল করে। ক্লাসে দেওয়া টেকনিক খেয়াল রাখুন!</p>
          </div>
        </div>
      </div>
    `
  },

  // ==========================================
  // MODULE 2: ওয়েব ডিজাইনের মৌলিক ধারণা
  // ==========================================
  {
    id: 3,
    module: "Web Fundamentals",
    category: "মৌলিক ধারণা",
    title: "ওয়েবপেজ (Webpage) ও ওয়েবসাইট (Website)",
    subtitle: "ইন্টারনেটের মূল ভিত্তি",
    layout: "content-split",
    teacherNotes: "ওয়েবপেজকে একটি বইয়ের পাতার সাথে এবং ওয়েবসাইটকে পুরো বইয়ের সাথে তুলনা করে বোঝান। ছাত্ররা খুব সহজে মনে রাখতে পারবে।",
    html: `
      <div class="compare-container">
        <div class="card-box">
          <div class="badge-title bg-blue">ওয়েবপেজ (Webpage)</div>
          <p class="def-text">ইন্টারনেট বা ওয়েব ব্যবহারকারীদের দেখার উপযোগী <strong>HTML (HyperText Markup Language)</strong> ভাষায় লিখিত বিশেষ ধরনের ইলেকট্রনিক ডকুমেন্টকে ওয়েবপেজ বলে।</p>
          <div class="feature-tag-list">
            <span class="tag">টেক্সট (Text)</span>
            <span class="tag">ছবি (Images)</span>
            <span class="tag">অডিও (Audio)</span>
            <span class="tag">ভিডিও (Video)</span>
            <span class="tag">হাইপারলিংক (Hyperlinks)</span>
          </div>
          <div class="analogy-box">📖 <em>উপমা: বইয়ের একটি একক পাতা</em></div>
        </div>

        <div class="card-box highlight-border">
          <div class="badge-title bg-gold">ওয়েবসাইট (Website)</div>
          <p class="def-text">একই ডোমেইন বা আইপি অ্যাড্রেসের অধীনে ইন্টারনেটের সাথে যুক্ত কোনো ওয়েব সার্ভারে সংরক্ষিত পরস্পর সম্পর্কযুক্ত <strong>একাধিক ওয়েবপেজের সমষ্টিকে</strong> ওয়েবসাইট বলে।</p>
          <div class="feature-tag-list">
            <span class="tag">হোমপেজ (Home Page)</span>
            <span class="tag">মুল পেজ (Main Page)</span>
            <span class="tag">উপ-পেজ (Sub Pages)</span>
            <span class="tag">সার্ভারে সংরক্ষিত</span>
          </div>
          <div class="analogy-box">📚 <em>উপমা: একাধিক পাতা মিলিয়ে তৈরি সম্পূর্ণ বই</em></div>
        </div>
      </div>

      <div class="keypoint-strip">
        <strong>🌐 জেনে রাখা ভালো:</strong> পৃথিবীর সর্বপ্রথম তৈরি ওয়েবসাইট ছিল <code>http://info.cern.ch</code> যা ১৯৯১ সালে টিম বার্নার্স-লি প্রকাশ করেন।
      </div>
    `
  },

  {
    id: 4,
    module: "Web Fundamentals",
    category: "ওয়েবসাইট স্তর",
    title: "ওয়েবসাইটের পেজসমূহের স্তরবিন্যাস",
    subtitle: "Home Page, Main Sections, Sub Sections",
    layout: "hierarchy-view",
    teacherNotes: "হোমপেজের কাজ কী তা ছাত্রদের জিজ্ঞেস করুন। যে কোনো ওয়েবসাইটের প্রথম পেজটিই হচ্ছে হোমপেজ। এর ডিফল্ট নাম index.html রাখা হয় কেন তা ব্যাখ্যা করুন।",
    html: `
      <div class="hierarchy-tree-visual">
        <div class="tree-node root-node">
          <div class="node-badge">স্তর ১</div>
          <h4>হোমপেজ (Home Page / Index Page)</h4>
          <p>ওয়েবসাইটে ঢুকলে সর্বপ্রথম যে পেজটি প্রদর্শিত হয়। সাধারণত এর ফাইলের নাম <code>index.html</code> থাকে।</p>
        </div>

        <div class="tree-connector-down">↓</div>

        <div class="tree-children-row">
          <div class="tree-node child-node">
            <div class="node-badge">স্তর ২</div>
            <h4>মূল সেকশন (Main Sections)</h4>
            <p>About Us, Courses, Admission, Notice</p>
          </div>
          <div class="tree-node child-node">
            <div class="node-badge">স্তর ২</div>
            <h4>একাডেমিক শাখা (Academic)</h4>
            <p>HSC ICT, Physics, Chemistry, Math</p>
          </div>
          <div class="tree-node child-node">
            <div class="node-badge">স্তর ২</div>
            <h4>যোগাযোগ (Contact)</h4>
            <p>Contact Form, Google Map, Socials</p>
          </div>
        </div>

        <div class="tree-connector-down">↓</div>

        <div class="tree-node leaf-node">
          <div class="node-badge">স্তর ৩</div>
          <h4>সাব-পেজ বা বিস্তারিত পেজ (Sub Pages / Detail Pages)</h4>
          <p>লেকচার শিট ডাউনলোড, CQ/MCQ সলভ ক্লাস, ফর্ম ফিলাপ ইত্যাদি নির্দিষ্ট পেজসমূহ।</p>
        </div>
      </div>
    `
  },

  {
    id: 5,
    module: "Web Fundamentals",
    category: "সফটওয়্যার",
    title: "ওয়েব ব্রাউজার (Web Browser) কী ও এর কাজ",
    subtitle: "এইচটিএমএল কোডকে দৃষ্টিনন্দন ওয়েবপেজে রূপান্তরকারী অ্যাপ্লিকেশন",
    layout: "content-grid",
    teacherNotes: "ছাত্রদের প্রশ্ন করুন: 'আমরা যে কোড লিখি তা ব্রাউজার কীভাবে দেখায়?' ব্রাউজার মূলত একটি অনুবাদক (Interpreter), যা HTML, CSS এবং JS কোড পড়ে মানুষের উপযোগী ভিজ্যুয়াল ইন্টারফেস তৈরি করে।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">💡 ওয়েব ব্রাউজারের সংজ্ঞা</h3>
          <p class="body-p">ওয়েব ব্রাউজার হলো একটি বিশেষ <strong>অ্যাপ্লিকেশন সফটওয়্যার</strong> যার সাহায্যে ইন্টারনেটের ওয়েব সার্ভারে সংরক্ষিত ওয়েবপেজগুলো প্রদর্শন বা ব্রাউজ করা যায়।</p>
          <div class="bullet-box">
            <strong>মূল কাজসমূহ:</strong>
            <ul>
              <li>HTTP/HTTPS প্রোটোকলের মাধ্যমে ওয়েব সার্ভারের কাছে রিকোয়েস্ট পাঠানো।</li>
              <li>সার্ভার থেকে প্রাপ্ত HTML, CSS ও JS কোড অনুবাদ (Render) করা।</li>
              <li>ওয়েবপেজে ছবি, টেক্সট, অডিও ও ভিডিও ফুটিয়ে তোলা।</li>
            </ul>
          </div>
        </div>

        <div class="glass-card">
          <h3 class="panel-header text-cyan">🌐 জনপ্রিয় কিছু ওয়েব ব্রাউজার</h3>
          <div class="browser-grid-icons">
            <div class="browser-pill"><span class="icon">🟢</span> Google Chrome (বিশ্বের সর্বাধিক ব্যবহৃত)</div>
            <div class="browser-pill"><span class="icon">🦊</span> Mozilla Firefox (ওপেন সোর্স)</div>
            <div class="browser-pill"><span class="icon">🧭</span> Apple Safari (iOS / macOS)</div>
            <div class="browser-pill"><span class="icon">🌀</span> Microsoft Edge (Windows)</div>
            <div class="browser-pill"><span class="icon">⭕</span> Opera / Opera Mini</div>
          </div>
          <div class="exam-note">
            ⚠️ <strong>MCQ টিপ:</strong> পৃথিবীর সর্বপ্রথম গ্রাফিক্যাল ওয়েব ব্রাউজার ছিল <strong>Mosaic (মোজাইক)</strong>, যা ১৯৯৩ সালে তৈরি হয়।
          </div>
        </div>
      </div>
    `
  },

  {
    id: 6,
    module: "Web Fundamentals",
    category: "সার্চ ইঞ্জিন",
    title: "সার্চ ইঞ্জিন (Search Engine) কী ও এর কাজ",
    subtitle: "তথ্য খুঁজে বের করার স্বয়ংক্রিয় সফটওয়্যার ব্যবস্থা",
    layout: "content-grid",
    teacherNotes: "ছাত্রদের সবচেয়ে বড় বিভ্রান্তি হলো তারা গুগলকে ব্রাউজার মনে করে। স্পষ্ট করে দিন যে Google Chrome হলো ব্রাউজার, আর Google.com হলো সার্চ ইঞ্জিন।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">🔍 সার্চ ইঞ্জিনের সংজ্ঞা</h3>
          <p class="body-p">সার্চ ইঞ্জিন হলো এমন একটি সফটওয়্যার বা প্রোগ্রাম যা ইন্টারনেটে থাকা কোটি কোটি ওয়েবপেজ থেকে ব্যবহারকারীর কাঙ্ক্ষিত কি-ওয়ার্ডের (Keyword) ভিত্তিতে দ্রুত তথ্য খুঁজে বের করে দেয়।</p>
          <div class="bullet-box">
            <strong>সার্চ ইঞ্জিন যেভাবে কাজ করে:</strong>
            <ol>
              <li><strong>ক্রলিং (Crawling):</strong> বট বা স্পাইডারের মাধ্যমে ওয়েব তথ্য সংগ্রহ।</li>
              <li><strong>ইনডেক্সিং (Indexing):</strong> প্রাপ্ত তথ্য সুবিন্যস্তভাবে ডাটাবেজে সাজানো।</li>
              <li><strong>র‍্যাংকিং (Ranking):</strong> ব্যবহারকারীর কিওয়ার্ডের প্রাসঙ্গিক ফলাফলের তালিকা প্রদর্শন।</li>
            </ol>
          </div>
        </div>

        <div class="glass-card">
          <h3 class="panel-header text-cyan">⚡ জনপ্রিয় সার্চ ইঞ্জিনসমূহ</h3>
          <div class="browser-grid-icons">
            <div class="browser-pill"><span class="icon">🔎</span> <strong>Google</strong> (বিশ্বের বৃহত্তম সার্চ ইঞ্জিন)</div>
            <div class="browser-pill"><span class="icon">🌐</span> <strong>Microsoft Bing</strong></div>
            <div class="browser-pill"><span class="icon">🟣</span> <strong>Yahoo Search</strong></div>
            <div class="browser-pill"><span class="icon">🦆</span> <strong>DuckDuckGo</strong> (প্রাইভেসি কেন্দ্রিক)</div>
            <div class="browser-pill"><span class="icon">🇧🇩</span> <strong>পিপীলিকা (Pipilika)</strong> (প্রথম বাংলা সার্চ ইঞ্জিন)</div>
          </div>
          <div class="exam-note">
            🇧🇩 <strong>জেনে রাখো:</strong> 'পিপীলিকা' শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের (SUST) গবেষকরা তৈরি করেছিলেন।
          </div>
        </div>
      </div>
    `
  },

  {
    id: 7,
    module: "Web Fundamentals",
    category: "বোর্ড স্পেশাল 'খ'",
    title: "তুলনামূলক বিশ্লেষণ: ওয়েব ব্রাউজার বনাম সার্চ ইঞ্জিন",
    subtitle: "বোর্ড পরীক্ষার অত্যন্ত জনপ্রিয় ২ নম্বরের অনুধাবনমূলক প্রশ্ন",
    layout: "comparison-table",
    teacherNotes: "এই ছকটি ছাত্রদের মুখস্থ রাখতে বলুন। 'ওয়েব ব্রাউজার ও সার্চ ইঞ্জিন এক নয় — ব্যাখ্যা কর' শীর্ষক প্রশ্নটি অন্তত ৮ বার বিভিন্ন বোর্ডে এসেছে।",
    html: `
      <div class="table-card">
        <table class="presentation-table">
          <thead>
            <tr>
              <th>তুলনার বিষয়</th>
              <th>🌐 ওয়েব ব্রাউজার (Web Browser)</th>
              <th>🔍 সার্চ ইঞ্জিন (Search Engine)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>সংজ্ঞা</strong></td>
              <td>এটি একটি অ্যাপ্লিকেশন সফটওয়্যার যা ওয়েবপেজ ওপেন বা প্রদর্শন করে।</td>
              <td>এটি একটি বিশেষ ওয়েবসাইট বা প্রোগ্রাম যা ইন্টারনেটে তথ্য খোঁজে।</td>
            </tr>
            <tr>
              <td><strong>ইনস্টলেশন</strong></td>
              <td>ডিভাইসে (কম্পিউটার/মোবাইল) ইনস্টল থাকা আবশ্যক।</td>
              <td>ইনস্টল করার প্রয়োজন নেই, ব্রাউজারের মাধ্যমেই এতে ঢোকা যায়।</td>
            </tr>
            <tr>
              <td><strong>নির্ভরশীলতা</strong></td>
              <td>সার্চ ইঞ্জিন ব্যবহারের জন্য ব্রাউজার থাকা বাধ্যতামূলক।</td>
              <td>ব্রাউজার ব্যবহার করতে সার্চ ইঞ্জিনের বাধ্যবাধকতা নেই।</td>
            </tr>
            <tr>
              <td><strong>উদাহরণ</strong></td>
              <td>Google Chrome, Safari, Firefox, Edge, Opera</td>
              <td>Google, Bing, Yahoo, DuckDuckGo, Baidu, পিপীলিকা</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="teacher-takeaway">
        💡 <strong>সংক্ষেপে মনে রাখার টেকনিক:</strong> 'ব্রাউজার হলো চশমা, যার মাধ্যমে তুমি ইন্টারনেটের দুনিয়া দেখবে; আর সার্চ ইঞ্জিন হলো লাইব্রেরিয়ান, যে তোমাকে বই খুঁজে এনে দেবে।'
      </div>
    `
  },

  {
    id: 8,
    module: "Web Fundamentals",
    category: "আইপি অ্যাড্রেস",
    title: "আইপি অ্যাড্রেস (IP Address) কী ও এর গঠন",
    subtitle: "ইন্টারনেটে প্রতিটি ডিভাইসের অনন্য সাংখ্যিক পরিচয়পত্র",
    layout: "content-grid",
    teacherNotes: "আইপি অ্যাড্রেসকে বাড়ির ঠিকানার সাথে তুলনা করুন। যেমন প্রত্যেকের বাড়ির আলাদা ঠিকানা থাকে, ইন্টারনেটে প্রতিটি ডিভাইসের আইপি থাকে। IPv4 বনাম IPv6 এর পার্থক্য বোর্ডের হট টপিক।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">📌 IP Address (Internet Protocol Address)</h3>
          <p class="body-p">ইন্টারনেট বা নেটওয়ার্কে যুক্ত প্রতিটি কম্পিউটার বা ডিভাইসের একটি নির্দিষ্ট ও অদ্বিতীয় (Unique) সাংখ্যিক পরিচয়পত্র থাকে, একে <strong>IP Address</strong> বলে।</p>
          <div class="ip-display-box">
            <span class="label">IPv4 ঠিকানার উদাহরণ:</span>
            <span class="ip-code">192 . 168 . 1 . 100</span>
          </div>
          <div class="ip-octets-breakdown">
            <div class="octet">1st Octet (8 bit)</div>
            <div class="octet">2nd Octet (8 bit)</div>
            <div class="octet">3rd Octet (8 bit)</div>
            <div class="octet">4th Octet (8 bit)</div>
          </div>
          <p class="small-muted">মোট ৪টি অক্টেট = ৪ × ৮ = <strong>৩২ বিট</strong> (ডট বা বিন্দু দ্বারা বিভক্ত)। প্রতিটি অক্টেটের মান ০ থেকে ২৫৫ পর্যন্ত হতে পারে।</p>
        </div>

        <div class="glass-card">
          <h3 class="panel-header text-cyan">⚖️ IPv4 বনাম IPv6 তুলনা</h3>
          <div class="bullet-box">
            <ul>
              <li><strong>IPv4 (৩২ বিট):</strong> ৪টি ভাগে বিভক্ত। মোট ঠিকানা তৈরি সম্ভব $2^{32}$ বা প্রায় ৪৩০ কোটি (যা প্রায় ফুরিয়ে গেছে)।</li>
              <li><strong>IPv6 (১২৮ বিট):</strong> ৮টি ভাগে কোলন (:) দ্বারা বিভক্ত হেক্সাডেসিমেল পদ্ধতিতে লিখিত। মোট ঠিকানা সম্ভব $2^{128}$ টি (অসীম পরিমাণ)।</li>
            </ul>
          </div>
          <div class="ip-display-box v6">
            <span class="label">IPv6 উদাহরণ:</span>
            <span class="ip-code small">2001:0db8:85a3:0000:0000:8a2e:0370:7334</span>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 9,
    module: "Web Fundamentals",
    category: "ডোমেইন ও ডিএনএস",
    title: "ডোমেইন নেম (Domain Name) ও DNS এর কার্যপ্রণালী",
    subtitle: "মানুষের স্মৃতিশক্তির সহায়ক আলফানিউমেরিক নাম",
    layout: "content-grid",
    teacherNotes: "মানুষের নাম বনাম মোবাইল নম্বরের উপমা দিন। আমরা কারো মোবাইল নম্বর মুখস্থ রাখি না, নাম সেভ করে রাখি। ডায়াল করলে মোবাইল নিজে নম্বর বের করে নেয়। ঠিক তেমনি ডোমেইন হলো নাম, আর আইপি হলো নম্বর।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">🏷️ ডোমেইন নেম (Domain Name)</h3>
          <p class="body-p">আইপি অ্যাড্রেস হলো সংখ্যাভিত্তিক, যা মানুষের মনে রাখা অত্যন্ত কষ্টসাধ্য। তাই আইপি অ্যাড্রেসের পরিবর্তে ক্যারেক্টার বা অক্ষরের সমন্বয়ে তৈরি যে সহজবোধ্য নাম ব্যবহার করা হয়, তাকে <strong>Domain Name</strong> বলে।</p>
          <div class="analogy-box">
            <strong>উৎস:</strong> IP: <code>142.250.190.46</code> ➔ Domain: <code>google.com</code>
          </div>
          <p class="small-muted">বিশ্বব্যাপী ডোমেইন নেম এবং আইপি অ্যাড্রেস নিয়ন্ত্রণকারী আন্তর্জাতিক সংস্থা হলো <strong>ICANN</strong> (Internet Corporation for Assigned Names and Numbers)।</p>
        </div>

        <div class="glass-card">
          <h3 class="panel-header text-cyan">🔄 DNS (Domain Name System)</h3>
          <p class="body-p">DNS হলো একটি সার্ভার ও ডাটাবেজ সিস্টেম যা কোনো ডোমেইন নেমকে তার সংশ্লিষ্ট সাংখ্যিক IP Address-এ রূপান্তর (Translate) করে।</p>
          <div class="dns-flow-diagram">
            <div class="flow-step">👤 ইউজার লিখে: <code>facebook.com</code></div>
            <div class="flow-arrow">➔ [DNS সার্ভার খোঁজ করে] ➔</div>
            <div class="flow-step">🖥️ আইপি বের করে: <code>157.240.241.35</code></div>
          </div>
          <div class="exam-note">
            ⭐ <strong>বোর্ড প্রশ্ন:</strong> "আইপি অ্যাড্রেসের চেয়ে ডোমেইন নেম ব্যবহার সুবিধাজনক কেন?" — কারণ সংখ্যা মনে রাখা কঠিন, কিন্তু প্রাসঙ্গিক নাম সহজে মনে রাখা যায়।
          </div>
        </div>
      </div>
    `
  },

  {
    id: 10,
    module: "Web Fundamentals",
    category: "ডোমেইন প্রকারভেদ",
    title: "টপ লেভেল ডোমেইন (Top Level Domain - TLD)",
    subtitle: "জেনেরিক TLD বনাম কান্ট্রি কোড TLD",
    layout: "content-grid",
    teacherNotes: "বিভিন্ন বোর্ডের এমসিকিউতে আসে: বাণিজ্যিক প্রতিষ্ঠানের ডোমেইন কোনটি? সরকারি প্রতিষ্ঠানের কোনটি? ইত্যাদি। নিচের তালিকাটি ক্লাসে মুখস্থ করিয়ে নিন।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">🌐 জেনেরিক টপ লেভেল ডোমেইন (gTLD)</h3>
          <div class="tld-list">
            <div class="tld-item"><span class="badge">.com</span> বাণিজ্যিক প্রতিষ্ঠান (Commercial)</div>
            <div class="tld-item"><span class="badge">.edu</span> শিক্ষাপ্রতিষ্ঠান (Educational)</div>
            <div class="tld-item"><span class="badge">.gov</span> সরকারি প্রতিষ্ঠান (Government)</div>
            <div class="tld-item"><span class="badge">.org</span> অলাভজনক সংস্থা (Non-Profit Org)</div>
            <div class="tld-item"><span class="badge">.mil</span> সামরিক বাহিনী (Military)</div>
            <div class="tld-item"><span class="badge">.net</span> নেটওয়ার্ক সেবাদাতা প্রতিষ্ঠান (Network)</div>
          </div>
        </div>

        <div class="glass-card">
          <h3 class="panel-header text-cyan">🗺️ কান্ট্রি কোড টপ লেভেল ডোমেইন (ccTLD)</h3>
          <p class="small-muted">নির্দিষ্ট ভৌগোলিক দেশ চিহ্নিত করার জন্য ২ অক্ষরের কোড ব্যবহৃত হয়:</p>
          <div class="tld-list">
            <div class="tld-item"><span class="badge">.bd</span> বাংলাদেশ (Bangladesh)</div>
            <div class="tld-item"><span class="badge">.in</span> ভারত (India)</div>
            <div class="tld-item"><span class="badge">.uk</span> যুক্তরাজ্য (United Kingdom)</div>
            <div class="tld-item"><span class="badge">.us</span> যুক্তরাষ্ট্র (United States)</div>
            <div class="tld-item"><span class="badge">.ca</span> কানাডা (Canada)</div>
            <div class="tld-item"><span class="badge">.au</span> অস্ট্রেলিয়া (Australia)</div>
          </div>
        </div>
      </div>
      <div class="teacher-takeaway">
        🔎 <strong>উদাহরণ:</strong> <code>www.moedu.gov.bd</code> — এখানে <strong>.gov</strong> নির্দেশ করে এটি সরকারি প্রতিষ্ঠান এবং <strong>.bd</strong> নির্দেশ করে এটি বাংলাদেশের।
      </div>
    `
  },

  {
    id: 11,
    module: "Web Fundamentals",
    category: "ইউআরএল",
    title: "একটি পূর্ণাঙ্গ URL (Uniform Resource Locator) এর ব্যবচ্ছেদ",
    subtitle: "ওয়েব রিসোর্সের সুনির্দিষ্ট অবস্থান ও উপাদানসমূহ",
    layout: "url-breakdown",
    teacherNotes: "বোর্ডে প্রশ্ন আসে: একটি ইউআরএলে কয়টি অংশ থাকে? প্রধান ৪টি অংশ: Protocol, Domain, Path, File name। স্লাইডের ইন্টারেক্টিভ ব্যবচ্ছেদটি দেখান।",
    html: `
      <div class="url-hero-box">
        <div class="url-text-styled">
          <span class="url-part p-proto">https://</span>
          <span class="url-part p-sub">www.</span>
          <span class="url-part p-domain">ictcoach.com</span>
          <span class="url-part p-port">:443</span>
          <span class="url-part p-path">/hsc/chapter4/</span>
          <span class="url-part p-file">lecture.html</span>
        </div>
      </div>

      <div class="url-parts-grid">
        <div class="part-card c-proto">
          <div class="part-name">১. Protocol (প্রোটোকল)</div>
          <div class="part-val">https://</div>
          <p>ডাটা আদান-প্রদানের নিয়মাবলী (Hypertext Transfer Protocol Secure)।</p>
        </div>
        <div class="part-card c-sub">
          <div class="part-name">২. Sub-domain (হোস্ট)</div>
          <div class="part-val">www.</div>
          <p>ওয়ার্ল্ড ওয়াইড ওয়েব নির্দেশক সাব-ডোমেইন।</p>
        </div>
        <div class="part-card c-domain">
          <div class="part-name">৩. Domain Name</div>
          <div class="part-val">ictcoach.com</div>
          <p>সার্ভারের মূল নিবন্ধিত নাম ও TLD।</p>
        </div>
        <div class="part-card c-path">
          <div class="part-name">৪. Path / Directory</div>
          <div class="part-val">/hsc/chapter4/</div>
          <p>সার্ভারের ভেতর ফোল্ডারের সুনির্দিষ্ট অবস্থান।</p>
        </div>
        <div class="part-card c-file">
          <div class="part-name">৫. File Name & Ext</div>
          <div class="part-val">lecture.html</div>
          <p>কাঙ্ক্ষিত নির্দিষ্ট ফাইল এবং তার ফরম্যাট (.html)।</p>
        </div>
      </div>
    `
  },

  {
    id: 12,
    module: "Web Fundamentals",
    category: "পার্থক্য ও তুলনা",
    title: "স্ট্যাটিক বনাম ডাইনামিক ওয়েবসাইট",
    subtitle: "বোর্ড পরীক্ষার অত্যন্ত জনপ্রিয় প্রশ্ন",
    layout: "comparison-table",
    teacherNotes: "স্ট্যাটিক ও ডাইনামিক এর পার্থক্য পরীক্ষায় প্রতি বছর কোনো না কোনো বোর্ডে আসে। শিক্ষার্থীদের বোঝান: স্ট্যাটিকে কোনো ডাটাবেজ থাকে না এবং ব্যবহারকারী তথ্য পরিবর্তন করতে পারে না (যেমন সাধারণ নোটিশ বোর্ড), কিন্তু ফেসবুকে পোস্ট করা বা লগইন করা ডাইনামিক।",
    html: `
      <div class="table-card">
        <table class="presentation-table">
          <thead>
            <tr>
              <th>বৈশিষ্ট্য</th>
              <th>📄 স্ট্যাটিক ওয়েবসাইট (Static Website)</th>
              <th>⚡ ডাইনামিক ওয়েবসাইট (Dynamic Website)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>কন্টেন্ট পরিবর্তন</strong></td>
              <td>পেজের তথ্য সাধারণত অপরিবর্তিত থাকে। পরিবর্তন করতে হলে কোড এডিট করতে হয়।</td>
              <td>ব্যবহারকারীর চাহিদা বা রিকোয়েস্ট অনুযায়ী কন্টেন্ট স্বয়ংক্রিয়ভাবে পরিবর্তিত হয়।</td>
            </tr>
            <tr>
              <td><strong>ডাটাবেজ</strong></td>
              <td>কোনো ডাটাবেজ সংযোগ থাকে না।</td>
              <td>ডাটাবেজ (MySQL, Oracle, MongoDB ইত্যাদি) সংযোগ থাকে।</td>
            </tr>
            <tr>
              <td><strong>ব্যবহৃত ভাষা</strong></td>
              <td>কেবলমাত্র HTML, CSS এবং বেসিক JavaScript।</td>
              <td>PHP, Python, ASP.NET, Node.js + ডাটাবেজ।</td>
            </tr>
            <tr>
              <td><strong>গতি ও খরচ</strong></td>
              <td>খুব দ্রুত লোড হয় এবং তৈরি/হোস্টিং খরচ খুব কম।</td>
              <td>ডাটাবেজ কোয়েরির কারণে ধীর হতে পারে, খরচ তুলনামূলক বেশি।</td>
            </tr>
            <tr>
              <td><strong>ইন্টারেক্টিভিটি</strong></td>
              <td>ব্যবহারকারী কোনো ইনপুট বা মন্তব্য দিতে পারে না।</td>
              <td>ব্যবহারকারী লগইন, রেজিস্ট্রেশন, সার্চ, কমেন্ট করতে পারে।</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  // ==========================================
  // MODULE 3: ওয়েবসাইটের কাঠামো (Website Structure)
  // ==========================================
  {
    id: 13,
    module: "Website Structure",
    category: "কাঠামো পরিচিতি",
    title: "ওয়েবসাইট কাঠামো (Website Structure) কী ও প্রকারভেদ",
    subtitle: "ওয়েবপেজসমূহের আন্তঃসংযোগ ও বিন্যাস পদ্ধতি",
    layout: "content-grid",
    teacherNotes: "ওয়েবসাইটের কাঠামো ৪ প্রকার। বোর্ডে উদ্দীপকে ছবি দেওয়া থাকে এবং বলা হয় 'উদ্দীপকের কাঠামোটি চিহ্নিত কর এবং এর সুবিধা লিখ'। এই চারটি কাঠামোর ডায়াগ্রাম ছাত্রদের ভালো করে আঁকা শেখান।",
    html: `
      <div class="structure-overview-grid">
        <div class="struct-card">
          <div class="struct-num">১</div>
          <h4>ট্রি বা হায়ারার্কিক্যাল কাঠামো</h4>
          <span class="eng-lbl">(Tree / Hierarchical Structure)</span>
          <p>শাখাপ্রশাখাযুক্ত কাঠামো। সবচেয়ে জনপ্রিয় ও বহুল ব্যবহৃত।</p>
        </div>

        <div class="struct-card">
          <div class="struct-num">২</div>
          <h4>লিনিয়ার বা সিকোয়েন্সিয়াল কাঠামো</h4>
          <span class="eng-lbl">(Linear / Sequential Structure)</span>
          <p>ধারাবাহিক একমুখী বা দ্বিমুখী ক্রম অনুযায়ী বিন্যস্ত পেজসমূহ।</p>
        </div>

        <div class="struct-card">
          <div class="struct-num">৩</div>
          <h4>নেটওয়ার্ক বা ওয়েব-লিংকড কাঠামো</h4>
          <span class="eng-lbl">(Network / Web-Linked Structure)</span>
          <p>সবগুলো পেজ একে অপরের সাথে সরাসরি সংযুক্ত থাকে।</p>
        </div>

        <div class="struct-card">
          <div class="struct-num">৪</div>
          <h4>কম্বিনেশন বা হাইব্রিড কাঠামো</h4>
          <span class="eng-lbl">(Hybrid / Combination Structure)</span>
          <p>একাধিক কাঠামোর সংমিশ্রণে গঠিত আধুনিক ওয়েবসাইট কাঠামো।</p>
        </div>
      </div>
    `
  },

  {
    id: 14,
    module: "Website Structure",
    category: "কাঠামো ১",
    title: "ট্রি বা হায়ারার্কিক্যাল কাঠামো (Tree Structure)",
    subtitle: "বোর্ড উদ্দীপকে সর্বাধিক আসা কাঠামো",
    layout: "struct-detail",
    teacherNotes: "গাছের কাণ্ড ও ডালপালার উদাহরণ দিন। কলেজ, বিশ্ববিদ্যালয়, বা ই-কমার্স সাইটের জন্য এটি সবচেয়ে উপযোগী কারণ এখানে ক্যাটাগরি ও সাব-ক্যাটাগরি সাজানো যায়।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">🌳 বৈশিষ্ট্যাবলী</h3>
          <ul class="styled-list">
            <li>এ কাঠামোতে ওয়েবসাইটের পেজগুলো গাছের ডালপালার মতো সাজানো থাকে।</li>
            <li>হোমপেজ থাকে শীর্ষে, সেখান থেকে মূল মেন্যু এবং মেন্যু থেকে সাব-মেন্যুর পেজসমূহে যাওয়া যায়।</li>
            <li><strong>উপযোগিতা:</strong> কলেজ, বিশ্ববিদ্যালয়, বহুজাতিক কোম্পানি, সরকারি পোর্টাল।</li>
            <li><strong>সুবিধা:</strong> তথ্য খোঁজা সহজ, সুশৃঙ্খল এবং নতুন পেজ যুক্ত করা অত্যন্ত সহজ।</li>
          </ul>
        </div>

        <div class="glass-card center-content">
          <h4 class="diagram-caption">🎨 ডায়াগ্রাম রূপরেখা</h4>
          <div class="diagram-svg-box">
            <svg viewBox="0 0 400 220" width="100%" height="200">
              <rect x="140" y="10" width="120" height="40" rx="8" fill="#ffaa00" />
              <text x="200" y="35" text-anchor="middle" fill="#000" font-weight="bold">Home Page</text>
              <line x1="200" y1="50" x2="200" y2="80" stroke="#ffaa00" stroke-width="2" />
              <line x1="70" y1="80" x2="330" y2="80" stroke="#ffaa00" stroke-width="2" />
              <line x1="70" y1="80" x2="70" y2="110" stroke="#ffaa00" stroke-width="2" />
              <line x1="200" y1="80" x2="200" y2="110" stroke="#ffaa00" stroke-width="2" />
              <line x1="330" y1="80" x2="330" y2="110" stroke="#ffaa00" stroke-width="2" />
              <rect x="20" y="110" width="100" height="35" rx="6" fill="#00b4d8" />
              <text x="70" y="132" text-anchor="middle" fill="#fff" font-size="12">Section A</text>
              <rect x="150" y="110" width="100" height="35" rx="6" fill="#00b4d8" />
              <text x="200" y="132" text-anchor="middle" fill="#fff" font-size="12">Section B</text>
              <rect x="280" y="110" width="100" height="35" rx="6" fill="#00b4d8" />
              <text x="330" y="132" text-anchor="middle" fill="#fff" font-size="12">Section C</text>
              <line x1="70" y1="145" x2="70" y2="175" stroke="#00b4d8" stroke-width="2" />
              <line x1="200" y1="145" x2="200" y2="175" stroke="#00b4d8" stroke-width="2" />
              <rect x="30" y="175" width="80" height="30" rx="4" fill="#1c212c" stroke="#00b4d8" />
              <text x="70" y="195" text-anchor="middle" fill="#00b4d8" font-size="11">Sub 1</text>
              <rect x="160" y="175" width="80" height="30" rx="4" fill="#1c212c" stroke="#00b4d8" />
              <text x="200" y="195" text-anchor="middle" fill="#00b4d8" font-size="11">Sub 2</text>
            </svg>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 15,
    module: "Website Structure",
    category: "কাঠামো ২",
    title: "লিনিয়ার বা সিকোয়েন্সিয়াল কাঠামো (Linear Structure)",
    subtitle: "ধারাবাহিক ক্রম অনুসারে পেজ পরিদর্শন",
    layout: "struct-detail",
    teacherNotes: "বইয়ের এক পৃষ্ঠা পড়ে পরের পৃষ্ঠায় যাওয়ার মতো। অথবা পরীক্ষার রেজিস্ট্রেশনের Step 1 -> Step 2 -> Step 3। এ কাঠামোতে Next এবং Previous বাটন থাকে।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">➡️ বৈশিষ্ট্যাবলী</h3>
          <ul class="styled-list">
            <li>এ কাঠামোতে কোনো নির্দিষ্ট পেজের পর কেবল পরবর্তী (Next) বা পূর্ববর্তী (Previous) পেজে যাওয়া যায়।</li>
            <li>মাঝখানের কোনো পেজ ডিঙিয়ে সরাসরি শেষের পেজে যাওয়া যায় না।</li>
            <li><strong>ব্যবহার:</strong> অনলাইন প্রশিক্ষণ/টিউটোরিয়াল, বই বা উপন্যাসের অনলাইন রিডার, স্টেপ-বাই-স্টেপ ফর্ম ফিলআপ।</li>
            <li><strong>সুবিধা:</strong> ব্যবহারকারী ভুল পথে যাওয়ার সুযোগ থাকে না।</li>
          </ul>
        </div>

        <div class="glass-card center-content">
          <h4 class="diagram-caption">🎨 ডায়াগ্রাম রূপরেখা</h4>
          <div class="diagram-svg-box">
            <svg viewBox="0 0 400 120" width="100%" height="120">
              <rect x="10" y="40" width="70" height="40" rx="6" fill="#ffaa00" />
              <text x="45" y="65" text-anchor="middle" fill="#000" font-weight="bold" font-size="12">Page 1</text>
              <line x1="80" y1="55" x2="110" y2="55" stroke="#00b4d8" stroke-width="2" />
              <line x1="110" y1="65" x2="80" y2="65" stroke="#ffaa00" stroke-width="2" />
              <rect x="110" y="40" width="70" height="40" rx="6" fill="#00b4d8" />
              <text x="145" y="65" text-anchor="middle" fill="#fff" font-size="12">Page 2</text>
              <line x1="180" y1="60" x2="210" y2="60" stroke="#00b4d8" stroke-width="2" />
              <rect x="210" y="40" width="70" height="40" rx="6" fill="#00b4d8" />
              <text x="245" y="65" text-anchor="middle" fill="#fff" font-size="12">Page 3</text>
              <line x1="280" y1="60" x2="310" y2="60" stroke="#00b4d8" stroke-width="2" />
              <rect x="310" y="40" width="70" height="40" rx="6" fill="#00e676" />
              <text x="345" y="65" text-anchor="middle" fill="#000" font-weight="bold" font-size="12">Page 4</text>
            </svg>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 16,
    module: "Website Structure",
    category: "কাঠামো ৩",
    title: "নেটওয়ার্ক বা ওয়েব-লিংকড কাঠামো (Network Structure)",
    subtitle: "পরস্পর সংযুক্ত উন্মুক্ত কাঠামো",
    layout: "struct-detail",
    teacherNotes: "উইকিপিডিয়া বা সোশ্যাল মিডিয়ার মতো, যেখানে যেকোনো পেজ থেকে যেকোনো পেজে হাইপারলিংকের মাধ্যমে সরাসরি যাওয়া যায়।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">🕸️ বৈশিষ্ট্যাবলী</h3>
          <ul class="styled-list">
            <li>এ কাঠামোতে প্রতিটি ওয়েবপেজ অপর সমস্ত পেজের সাথে সরাসরি হাইপারলিংক দ্বারা যুক্ত থাকে।</li>
            <li>ব্যবহারকারী যেকোনো পেজ থেকে সরাসরি অন্য যেকোনো পেজে লাফিয়ে যেতে পারেন।</li>
            <li><strong>ব্যবহার:</strong> উইকিপিডিয়া, সোশ্যাল মিডিয়া, সাধারণ পোর্টাল।</li>
            <li><strong>অসুবিধা:</strong> পেজের সংখ্যা অনেক বেশি হলে লিংক ব্যবস্থাপনা জটিল ও বিশৃঙ্খল হয়ে পড়ে।</li>
          </ul>
        </div>

        <div class="glass-card center-content">
          <h4 class="diagram-caption">🎨 ডায়াগ্রাম রূপরেখা</h4>
          <div class="diagram-svg-box">
            <svg viewBox="0 0 300 180" width="100%" height="160">
              <line x1="80" y1="40" x2="220" y2="40" stroke="rgba(255,255,255,0.4)" stroke-dasharray="3,3" />
              <line x1="80" y1="40" x2="150" y2="150" stroke="rgba(255,255,255,0.4)" stroke-dasharray="3,3" />
              <line x1="220" y1="40" x2="150" y2="150" stroke="rgba(255,255,255,0.4)" stroke-dasharray="3,3" />
              <circle cx="80" cy="40" r="22" fill="#ffaa00" />
              <text x="80" y="44" text-anchor="middle" fill="#000" font-weight="bold" font-size="11">P1</text>
              <circle cx="220" cy="40" r="22" fill="#00b4d8" />
              <text x="220" y="44" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">P2</text>
              <circle cx="150" cy="150" r="22" fill="#00e676" />
              <text x="150" y="154" text-anchor="middle" fill="#000" font-weight="bold" font-size="11">P3</text>
            </svg>
          </div>
        </div>
      </div>
    `
  },

  // ==========================================
  // MODULE 4: HTML এর সূচনা ও কাজের পরিবেশ (Step-by-Step)
  // ==========================================
  {
    id: 17,
    module: "HTML Basics",
    category: "প্রাথমিক ধারণা",
    title: "HTML কী এবং এটি কীভাবে কাজ করে?",
    subtitle: "ওয়েব ডেভেলপমেন্টের প্রথম পাঠ",
    layout: "content-grid",
    teacherNotes: "শিক্ষার্থীদের আশ্বস্ত করুন: HTML কোনো সি প্রোগ্রামিং বা জাভার মতো জটিল লজিক্যাল প্রোগ্রামিং ভাষা নয়। এটি অত্যন্ত সহজ একটি মার্কআপ ভাষা। ট্যাগগুলো ইংরেজি শব্দের সংক্ষিপ্ত রূপ।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">🔍 HTML এর পূর্ণরূপ ও ধারণা</h3>
          <p class="body-p"><strong>HTML = HyperText Markup Language</strong></p>
          <ul class="styled-list">
            <li><strong>HyperText:</strong> যে টেক্সটের সাথে অন্য টেক্সট বা ডকুমেন্টের লিংক (Hyperlink) থাকে।</li>
            <li><strong>Markup:</strong> বিশেষ কিছু চিহ্ন বা ট্যাগ ব্যবহার করে টেক্সটকে সুনির্দিষ্ট রূপ দেওয়া।</li>
            <li><strong>Language:</strong> ব্রাউজারের সাথে যোগাযোগের সাংকেতিক ভাষা।</li>
          </ul>
          <div class="analogy-box mt-3">
            💡 <strong>উপমা:</strong> যেমন মানুষ পোশাক পরলে সুন্দর দেখায়, তেমনি সাধারণ লেখার দুইপাশে ট্যাগ বসালেই তা ওয়েবপেজে শিরোনাম, টেবিল বা ছবিতে রূপ নেয়!
          </div>
        </div>

        <div class="glass-card">
          <h3 class="panel-header text-cyan">⚡ ব্রাউজারের ভূমিকা</h3>
          <p class="body-p">ওয়েব ব্রাউজার (Chrome, Firefox) হলো একজন অনুবাদক।</p>
          <div class="dns-flow-diagram">
            <div class="flow-step">তুমি লিখলে: <code>&lt;b&gt;ICT&lt;/b&gt;</code></div>
            <div class="flow-arrow">➔ ব্রাউজার ট্যাগগুলো লুকিয়ে ফেলল ➔</div>
            <div class="flow-step">স্ক্রিনে দেখাল: <strong>ICT</strong></div>
          </div>
          <div class="exam-note">
            ⚠️ <strong>মনে রাখবে:</strong> ব্রাউজার কখনোই ট্যাগগুলোকে ব্যবহারকারীর সামনে প্রদর্শন করে না, কেবল ট্যাগের কার্যকারিতা ফুটিয়ে তোলে।
          </div>
        </div>
      </div>
    `
  },

  {
    id: 18,
    module: "HTML Basics",
    category: "হ্যান্ডস-অন গাইড",
    title: "HTML কোড কীভাবে লিখতে হয় ও সেভ করতে হয়?",
    subtitle: "শিক্ষার্থীদের প্রথম প্র্যাকটিক্যাল ধাপ",
    layout: "content-grid",
    teacherNotes: "ছাত্ররা প্রায়ই .txt ফাইলে কোড লিখে রেখে বলে স্যার আউটপুট আসে না কেন। স্পষ্ট করে দিন যে Notepad এ লেখার পর File -> Save As দিয়ে ফাইলের শেষে অবশ্যই .html দিতে হবে এবং Encoding UTF-8 সিলেক্ট করতে হবে।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">📝 কোড লেখার ৪টি সহজ ধাপ</h3>
          <ol class="styled-list">
            <li><strong>ধাপ ১:</strong> কম্পিউটারের <strong>Notepad</strong> (বা VS Code) ওপেন করো।</li>
            <li><strong>ধাপ ২:</strong> প্রয়োজনীয় HTML ট্যাগ ও কন্টেন্ট টাইপ করো।</li>
            <li><strong>ধাপ ৩:</strong> মেন্যু থেকে <strong>File ➔ Save As</strong>-এ ক্লিক করো।</li>
            <li><strong>ধাপ ৪:</strong> File name-এর ঘরে নাম দাও (যেমন: <code>first.html</code> বা <code>index.html</code>)।</li>
          </ol>
        </div>

        <div class="glass-card">
          <h3 class="panel-header text-cyan">💾 সেভ করার সতর্কবার্তা</h3>
          <div class="tip-box">
            <span class="tip-badge">জরুরি নিয়ম ১</span>
            <p>ফাইলের এক্সটেনশন অবশ্যই <strong>.html</strong> অথবা <strong>.htm</strong> হতে হবে। কখনো <code>.txt</code> রাখা যাবে না।</p>
          </div>
          <div class="tip-box">
            <span class="tip-badge">জরুরি নিয়ম ২</span>
            <p>Save as type: <strong>All Files (*.*)</strong> সিলেক্ট করতে হবে।</p>
          </div>
          <div class="tip-box">
            <span class="tip-badge">রান করার নিয়ম</span>
            <p>সেভ করা ফাইলটিতে ডাবল ক্লিক করলেই ডিফল্ট ব্রাউজারে তোমার সুন্দর ওয়েবপেজ ওপেন হয়ে যাবে!</p>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 19,
    module: "HTML Basics",
    category: "বেসিক কাঠামো",
    title: "HTML ডকুমেন্টের মৌলিক কঙ্কাল (Basic Skeleton)",
    subtitle: "যেকোনো এইচটিএমএল পেজের ৪টি আবশ্যকীয় অংশ",
    layout: "interactive-code",
    teacherNotes: "মানুষের শরীর দিয়ে উদাহরণ দিন: মাথা (Head) যেখানে ব্রেনের তথ্য থাকে এবং শরীর (Body) যা সবাই দেখতে পায়।",
    html: `
      <div class="code-and-preview-container">
        <div class="code-editor-box">
          <div class="editor-header">
            <span>basic_skeleton.html</span>
          </div>
          <pre class="code-snippet"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;পেজের শিরোনাম&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;আমার প্রথম ওয়েবপেজ&lt;/h1&gt;
    &lt;p&gt;ওয়েব ডেভেলপমেন্ট খুব সহজ!&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
        </div>

        <div class="code-explanation-box">
          <h4 class="text-gold">কঙ্কালের ৪টি মূল ভিত্তি:</h4>
          <div class="expl-item">
            <code>1. &lt;!DOCTYPE html&gt;</code>
            <span>এটি কোনো ট্যাগ নয়, এটি ব্রাউজারকে ঘোষণা দেয় যে ফাইলটি HTML5 সংস্করণে লিখিত।</span>
          </div>
          <div class="expl-item">
            <code>2. &lt;html&gt;...&lt;/html&gt;</code>
            <span>রুট (Root) ট্যাগ; সমস্ত কোড এর ভেতরেই অবস্থান করে।</span>
          </div>
          <div class="expl-item">
            <code>3. &lt;head&gt;...&lt;/head&gt;</code>
            <span>মাথা বা মেটাডাটা সেকশন (ব্রাউজার ট্যাবের টাইটেল ও সিএসএস লিংক ধারণ করে)।</span>
          </div>
          <div class="expl-item">
            <code>4. &lt;body&gt;...&lt;/body&gt;</code>
            <span>শরীর বা মূল দৃশ্যমান এলাকা (টেক্সট, ছবি, টেবিল যা কিছু স্ক্রিনে দেখি)।</span>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 20,
    module: "HTML Basics",
    category: "ট্যাগ ব্যাকরণ",
    title: "ট্যাগের শারীরস্থান (Tag Anatomy) ও উপাদান (Element)",
    subtitle: "ওপেনিং ট্যাগ, কন্টেন্ট এবং ক্লোজিং ট্যাগ",
    layout: "anatomy-view",
    teacherNotes: "ট্যাগ এবং এলিমেন্টের পার্থক্য প্রায়ই ভাইভায় বা এমসিকিউতে আসে। ট্যাগ হলো কেবল নির্দেশক শব্দ, আর শুরু থেকে শেষ পর্যন্ত পুরো প্যাকেজটি হলো একটি উপাদান (Element)।",
    html: `
      <div class="anatomy-visual-container">
        <div class="tag-anatomy-card">
          <div class="anatomy-header">HTML Element এর ৩টি অংশ</div>
          <div class="anatomy-formula">
            <span class="an-part an-open">&lt;p&gt;</span>
            <span class="an-part an-content">আমি একজন আইসিটি শিক্ষার্থী</span>
            <span class="an-part an-close">&lt;/p&gt;</span>
          </div>
          <div class="anatomy-labels">
            <span class="lbl-open">১. প্রারম্ভিক ট্যাগ (Opening)</span>
            <span class="lbl-content">২. বিষয়বস্তু (Content)</span>
            <span class="lbl-close">৩. সমাপ্তি ট্যাগ (Closing)</span>
          </div>
        </div>
      </div>

      <div class="teacher-takeaway mt-4">
        🔍 <strong>মনে রাখার গোল্ডেন রুল:</strong> ক্লোজিং ট্যাগে একটি স্ল্যাশ <code>/</code> চিহ্ন থাকা বাধ্যতামূলক (যেমন: <code>&lt;/p&gt;</code>, <code>&lt;/h1&gt;</code>, <code>&lt;/table&gt;</code>)। স্ল্যাশ না দিলে ব্রাউজার মনে করবে আগের ট্যাগ এখনো শেষ হয়নি!
      </div>
    `
  },

  {
    id: 21,
    module: "HTML Basics",
    category: "ট্যাগের প্রকারভেদ",
    title: "কন্টেইনার ট্যাগ বনাম এম্পটি ট্যাগ (Container vs Empty Tag)",
    subtitle: "বোর্ড পরীক্ষার ১ নম্বরের সবচেয়ে প্রিয় প্রশ্ন",
    layout: "comparison-table",
    teacherNotes: "এম্পটি ট্যাগের ভেতরে কোনো লেখা রাখা যায় না। যেমন লাইনের মাঝে ব্রেক দিতে <br> ব্যবহার করা হয়, এর পেছনে আর ক্লোজিং ট্যাগের দরকার নেই।",
    html: `
      <div class="table-card">
        <table class="presentation-table">
          <thead>
            <tr>
              <th>বৈশিষ্ট্য</th>
              <th>📦 কন্টেইনার ট্যাগ (Container Tag)</th>
              <th>🚫 এম্পটি ট্যাগ (Empty Tag)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>সংজ্ঞা</strong></td>
              <td>যেসব ট্যাগের শুরু, কন্টেন্ট এবং সমাপ্তি ট্যাগ থাকে।</td>
              <td>যেসব ট্যাগের শুধু শুরুর ট্যাগ থাকে, কোনো সমাপ্তি ট্যাগ বা কন্টেন্ট থাকে না।</td>
            </tr>
            <tr>
              <td><strong>গঠন</strong></td>
              <td><code>&lt;ট্যাগ&gt; লেখা &lt;/ট্যাগ&gt;</code></td>
              <td><code>&lt;ট্যাগ&gt;</code> বা <code>&lt;ট্যাগ /&gt;</code></td>
            </tr>
            <tr>
              <td><strong>উদাহরণ</strong></td>
              <td><code>&lt;html&gt;</code>, <code>&lt;body&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;b&gt;</code>, <code>&lt;table&gt;</code></td>
              <td><code>&lt;br&gt;</code> (Line break), <code>&lt;hr&gt;</code> (Horizontal rule), <code>&lt;img&gt;</code> (Image), <code>&lt;input&gt;</code>, <code>&lt;meta&gt;</code></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="exam-note">
        ⭐ <strong>শর্টকাট টেকনিক:</strong> বোর্ড পরীক্ষায় সবচেয়ে বেশি আসা ৫টি এম্পটি ট্যাগ: <strong>&lt;br&gt;</strong>, <strong>&lt;hr&gt;</strong>, <strong>&lt;img&gt;</strong>, <strong>&lt;input&gt;</strong>, <strong>&lt;meta&gt;</strong>!
      </div>
    `
  },

  {
    id: 22,
    module: "HTML Basics",
    category: "অ্যাট্রিবিউট",
    title: "অ্যাট্রিবিউট (Attribute) কী ও কীভাবে লিখতে হয়?",
    subtitle: "ট্যাগের বৈশিষ্ট্য ও অতিরিক্ত তথ্যের কারিগর",
    layout: "content-grid",
    teacherNotes: "অ্যাট্রিবিউট লেখার গঠনটি বোর্ডে বারবার লেখান: name='value'। যেমন align='center'। ওপেনিং ট্যাগের নাম ও অ্যাট্রিবিউটের মাঝে স্পেস দিতে হয়।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">⚙️ অ্যাট্রিবিউটের গঠন</h3>
          <p class="body-p">অ্যাট্রিবিউট হলো এমন কিছু নির্দেশিকা যা কোনো ট্যাগের বৈশিষ্ট্য (যেমন: রঙ, অবস্থান, মাপ, লিংক ইত্যাদি) নির্ধারণ করে দেয়।</p>
          <div class="ip-display-box">
            <span class="label">সিনট্যাক্স:</span>
            <span class="ip-code small">&lt;ট্যাগ নাম <span style="color:#00e5ff;">name</span>="<span style="color:#ffeb3b;">value</span>"&gt;</span>
          </div>
          <div class="tip-box">
            <span class="tip-badge">উদাহরণ:</span>
            <code>&lt;p align="center"&gt;মাঝখানে প্রদর্শিত লেখা&lt;/p&gt;</code>
            <p>এখানে <strong>align</strong> হলো অ্যাট্রিবিউটের নাম এবং <strong>center</strong> হলো তার ভ্যালু।</p>
          </div>
        </div>

        <div class="glass-card">
          <h3 class="panel-header text-cyan">📜 অ্যাট্রিবিউট লেখার ৪টি নিয়ম</h3>
          <ul class="styled-list">
            <li><strong>নিয়ম ১:</strong> অ্যাট্রিবিউট <strong>সবসময় ওপেনিং ট্যাগের মধ্যে</strong> লিখতে হয় (ক্লোজিং ট্যাগে কখনোই নয়)।</li>
            <li><strong>নিয়ম ২:</strong> ট্যাগের নামের পর কমপক্ষে একটি স্পেস দিয়ে অ্যাট্রিবিউট লিখতে হয়।</li>
            <li><strong>নিয়ম ৩:</strong> অ্যাট্রিবিউটের মানকে সাধারণত ডাবল কোটেশন ("...") এর মধ্যে রাখতে হয়।</li>
            <li><strong>নিয়ম ৪:</strong> একটি ট্যাগে একাধিক অ্যাট্রিবিউট স্পেস দিয়ে লেখা যায় (যেমন: <code>&lt;img src="pic.jpg" width="100"&gt;</code>)।</li>
          </ul>
        </div>
      </div>
    `
  },

  // ==========================================
  // MODULE 5: টেক্সট ফরম্যাটিং ও হেডিং (Step-by-Step)
  // ==========================================
  {
    id: 23,
    module: "Formatting",
    category: "হেডিং ট্যাগ",
    title: "হেডিং ট্যাগসমূহ: &lt;h1&gt; থেকে &lt;h6&gt;",
    subtitle: "ওয়েবপেজের বিভিন্ন স্তরের শিরোনাম বিন্যাস",
    layout: "live-demo",
    teacherNotes: "h1 থেকে h6 এর সাইজ এবং অগ্রাধিকার তুলনামূলক দেখান। মনে করিয়ে দিন: h1 সবচেয়ে বড়, h6 সবচেয়ে ছোট।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">💻 HTML কোড</h3>
          <pre class="code-snippet"><code>&lt;h1&gt;Heading 1 (সর্বোচ্চ গুরুত্ব ও আকার)&lt;/h1&gt;
&lt;h2&gt;Heading 2&lt;/h2&gt;
&lt;h3&gt;Heading 3&lt;/h3&gt;
&lt;h4&gt;Heading 4&lt;/h4&gt;
&lt;h5&gt;Heading 5&lt;/h5&gt;
&lt;h6&gt;Heading 6 (সর্বনিম্ন গুরুত্ব ও আকার)&lt;/h6&gt;</code></pre>
        </div>

        <div class="glass-card">
          <h3 class="panel-header text-cyan">🖥️ ব্রাউজার আউটপুট</h3>
          <div class="browser-rendered-box">
            <h1 style="font-size:24px; color:#ffaa00; margin-bottom:4px;">Heading 1 (সর্বোচ্চ আকার)</h1>
            <h2 style="font-size:20px; color:#fff; margin-bottom:4px;">Heading 2</h2>
            <h3 style="font-size:17px; color:#ddd; margin-bottom:4px;">Heading 3</h3>
            <h4 style="font-size:15px; color:#bbb; margin-bottom:4px;">Heading 4</h4>
            <h5 style="font-size:13px; color:#999; margin-bottom:4px;">Heading 5</h5>
            <h6 style="font-size:11px; color:#777; margin-bottom:4px;">Heading 6 (সর্বনিম্ন আকার)</h6>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 24,
    module: "Formatting",
    category: "প্যারাগ্রাফ ও ব্রেক",
    title: "প্যারাগ্রাফ (&lt;p&gt;), লাইন ব্রেক (&lt;br&gt;) ও অনুভূমিক রেখা (&lt;hr&gt;)",
    subtitle: "কেন Notepad-এ Enter চাপলে HTML-এ নতুন লাইন হয় না?",
    layout: "content-grid",
    teacherNotes: "সবচেয়ে কমন ভুল: ছাত্ররা ভাবেন কোডে ১০ বার Enter দিলে আউটপুটেও ফাঁকা হবে। কিন্তু ব্রাউজার অতিরিক্ত স্পেস বা এন্টার গ্রহণ করে না। তাই নতুন লাইন দিতে অবশ্যই <br> দিতে হবে।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">💡 &lt;p&gt; বনাম &lt;br&gt; এর কাজ</h3>
          <div class="tip-box">
            <span class="tip-badge">&lt;p&gt; (Paragraph ট্যাগ)</span>
            <p>একটি স্বতন্ত্র অনুচ্ছেদ তৈরি করে এবং স্বয়ংক্রিয়ভাবে উপরে ও নিচে এক লাইনের ফাঁকা জায়গা রাখে।</p>
            <code>&lt;p align="justify"&gt;লেখা...&lt;/p&gt;</code>
          </div>
          <div class="tip-box mt-3">
            <span class="tip-badge">&lt;br&gt; (Line Break ট্যাগ)</span>
            <p>একটি এম্পটি ট্যাগ। নতুন অনুচ্ছেদ তৈরি না করে কেবল একই অনুচ্ছেদে লেখা পরবর্তী লাইনে নামিয়ে দেয়।</p>
          </div>
          <div class="tip-box mt-3">
            <span class="tip-badge">&lt;hr&gt; (Horizontal Rule)</span>
            <p>ওয়েবপেজে আড়াআড়ি একটি অনুভূমিক রেখা বা দাগ টানে।</p>
          </div>
        </div>

        <div class="glass-card">
          <h3 class="panel-header text-cyan">💻 কোড ও লাইভ আউটপুট</h3>
          <pre class="code-snippet"><code>&lt;p&gt;ঢাকা বাংলাদেশের রাজধানী।&lt;br&gt;
এটি একটি ঐতিহাসিক শহর।&lt;/p&gt;
&lt;hr color="gold"&gt;
&lt;p&gt;নতুন অনুচ্ছেদ শুরু হলো।&lt;/p&gt;</code></pre>
          <div class="browser-rendered-box mt-3">
            <p style="color:#fff; font-size:14px; margin:0;">ঢাকা বাংলাদেশের রাজধানী。<br>এটি একটি ঐতিহাসিক শহর।</p>
            <hr style="border-color:#ffaa00; margin:10px 0;">
            <p style="color:#00e5ff; font-size:14px; margin:0;">নতুন অনুচ্ছেদ শুরু হলো।</p>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 25,
    module: "Formatting",
    category: "টেক্সট স্টাইলিং",
    title: "মৌলিক টেক্সট স্টাইলিং: বোল্ড, ইতালিক ও আন্ডারলাইন",
    subtitle: "লেখাকে দৃষ্টিনন্দন করার প্রাথমিক ট্যাগসমূহ",
    layout: "live-demo",
    teacherNotes: "b ও strong এবং i ও em এর পার্থক্য বলুন: ভিজ্যুয়ালি একই কিন্তু strong এবং em সার্চ ইঞ্জিনে টেক্সটের গুরুত্ব নির্দেশ করে।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">💻 HTML কোড</h3>
          <pre class="code-snippet"><code>&lt;!-- বোল্ড বা মোটা লেখা --&gt;
&lt;b&gt;ICT Coach&lt;/b&gt;
&lt;strong&gt;Important&lt;/strong&gt;

&lt;!-- ইতালিক বা বাঁকা লেখা --&gt;
&lt;i&gt;Online Lecture&lt;/i&gt;
&lt;em&gt;Special Note&lt;/em&gt;

&lt;!-- আন্ডারলাইন বা নিচের দাগ --&gt;
&lt;u&gt;HSC ICT Chapter 4&lt;/u&gt;

&lt;!-- সবগুলো একসাথে নেস্টিং --&gt;
&lt;b&gt;&lt;i&gt;&lt;u&gt;বোল্ড, ইতালিক ও আন্ডারলাইন&lt;/u&gt;&lt;/i&gt;&lt;/b&gt;</code></pre>
        </div>

        <div class="glass-card">
          <h3 class="panel-header text-cyan">🖥️ ব্রাউজার আউটপুট</h3>
          <div class="browser-rendered-box" style="gap:10px;">
            <div><strong>ICT Coach</strong> (বোল্ড)</div>
            <div><em>Online Lecture</em> (ইতালিক)</div>
            <div><u>HSC ICT Chapter 4</u> (আন্ডারলাইন)</div>
            <div style="margin-top:8px; color:#ffaa00;"><strong><em><u>বোল্ড, ইতালিক ও আন্ডারলাইন একসাথে</u></em></strong></div>
          </div>
          <div class="exam-note mt-3">
            📌 <strong>নেস্টিং রুল:</strong> যে ট্যাগ সবার শেষে শুরু হবে, সেটিকে সবার প্রথমে ক্লোজ করতে হবে! (First In Last Out)।
          </div>
        </div>
      </div>
    `
  },

  {
    id: 26,
    module: "Formatting",
    category: "বিশেষ ফরম্যাটিং",
    title: "কাটা দাগ (&lt;del&gt;), হাইলাইট (&lt;mark&gt;) ও ছোট/বড় লেখা",
    subtitle: "বিশেষ ইফেক্ট তৈরির ট্যাগসমূহ",
    layout: "live-demo",
    teacherNotes: "ই-কমার্সে আগের দাম কেটে নতুন দাম দেখানোর জন্য <del> বা <s> ব্যবহৃত হয় (যেমন: ৫০০ টাকার বদলে ৩০০ টাকা)।",
    html: `
      <div class="table-card">
        <table class="presentation-table">
          <thead>
            <tr>
              <th>ট্যাগ</th>
              <th>কাজ</th>
              <th>HTML কোড</th>
              <th>আউটপুট</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>&lt;del&gt;</code> বা <code>&lt;s&gt;</code></td>
              <td>লেখার মাঝখান দিয়ে দাগ টেনে কাটা</td>
              <td><code>&lt;del&gt;১০০০ টাকা&lt;/del&gt; ৭০০ টাকা</code></td>
              <td><del style="color:#ff3366;">১০০০ টাকা</del> ৭০০ টাকা</td>
            </tr>
            <tr>
              <td><code>&lt;mark&gt;</code></td>
              <td>হলুদ রঙ দিয়ে লেখা হাইলাইট করা</td>
              <td><code>&lt;mark&gt;বোর্ড পরীক্ষায় আসবে&lt;/mark&gt;</code></td>
              <td><mark style="background:#ffeb3b; color:#000; padding:1px 6px; font-weight:bold;">বোর্ড পরীক্ষায় আসবে</mark></td>
            </tr>
            <tr>
              <td><code>&lt;small&gt;</code></td>
              <td>স্বাভাবিকের চেয়ে ছোট আকারের লেখা</td>
              <td><code>স্বাভাবিক &lt;small&gt;ছোট লেখা&lt;/small&gt;</code></td>
              <td>স্বাভাবিক <small style="color:#94a3b8;">ছোট লেখা</small></td>
            </tr>
            <tr>
              <td><code>&lt;tt&gt;</code> বা <code>&lt;code&gt;</code></td>
              <td>টাইপরাইটার বা কোডিং ফন্ট</td>
              <td><code>&lt;code&gt;print("Hello")&lt;/code&gt;</code></td>
              <td><code style="color:#00e5ff;">print("Hello")</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  {
    id: 27,
    module: "Formatting",
    category: "সমীকরণ ও সূত্র",
    title: "রসায়নের সংকেত: সাবস্ক্রিপ্ট ট্যাগ (&lt;sub&gt;)",
    subtitle: "লেখার নিচে ছোট হরফে সংখ্যা বা বর্ণ বসানো",
    layout: "live-demo",
    teacherNotes: "পানির সংকেত H2O লেখার সময় 2 নিচে থাকে। তাই কেবল 2-কে <sub> ট্যাগের পেটে রাখতে হবে। H এবং O বাইরে থাকবে।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">🧪 রাসায়নিক সমীকরণ কোড</h3>
          <pre class="code-snippet"><code>&lt;!-- পানির সংকেত: H2O --&gt;
H&lt;sub&gt;2&lt;/sub&gt;O

&lt;!-- কার্বন ডাই-অক্সাইড: CO2 --&gt;
CO&lt;sub&gt;2&lt;/sub&gt;

&lt;!-- সালফিউরিক এসিড: H2SO4 --&gt;
H&lt;sub&gt;2&lt;/sub&gt;SO&lt;sub&gt;4&lt;/sub&gt;

&lt;!-- গ্লুকোজ: C6H12O6 --&gt;
C&lt;sub&gt;6&lt;/sub&gt;H&lt;sub&gt;12&lt;/sub&gt;O&lt;sub&gt;6&lt;/sub&gt;</code></pre>
        </div>

        <div class="glass-card center-content">
          <h3 class="panel-header text-cyan">🖥️ ব্রাউজার আউটপুট</h3>
          <div class="browser-rendered-box" style="font-size:24px; color:#fff; text-align:center; gap:14px;">
            <div>পানির সংকেত: <span style="color:#00e5ff; font-weight:bold;">H<sub>2</sub>O</span></div>
            <div>সালফিউরিক এসিড: <span style="color:#ffaa00; font-weight:bold;">H<sub>2</sub>SO<sub>4</sub></span></div>
            <div>গ্লুকোজ: <span style="color:#00e676; font-weight:bold;">C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></span></div>
          </div>
          <div class="teacher-takeaway mt-3">
            💡 <strong>মনে রাখার টেকনিক:</strong> <strong>Sub</strong> ➔ <em>Submarine</em> পানির <strong>নিচে</strong> ডুব দেয় ➔ তাই লেখার বেসলাইনে নিচে নামবে!
          </div>
        </div>
      </div>
    `
  },

  {
    id: 28,
    module: "Formatting",
    category: "সমীকরণ ও সূত্র",
    title: "গণিতের সূত্র ও পাওয়ার: সুপারস্ক্রিপ্ট ট্যাগ (&lt;sup&gt;)",
    subtitle: "লেখার উপরে ঘাত বা পাওয়ার বসানো",
    layout: "live-demo",
    teacherNotes: "(a+b)^2 লেখার সময় 2 উপরে থাকে, তাই 2-কে <sup> এর মধ্যে রাখতে হবে। সাবস্ক্রিপ্ট ও সুপারস্ক্রিপ্টের সম্মিলিত প্র্যাকটিস এরপরের স্লাইডে আসবে।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">📐 গাণিতিক সূত্র কোড</h3>
          <pre class="code-snippet"><code>&lt;!-- সূত্র: (a+b)^2 = a^2 + 2ab + b^2 --&gt;
(a+b)&lt;sup&gt;2&lt;/sup&gt; = a&lt;sup&gt;2&lt;/sup&gt; + 2ab + b&lt;sup&gt;2&lt;/sup&gt;

&lt;!-- ঘনকের সূত্র: (x-y)^3 --&gt;
(x-y)&lt;sup&gt;3&lt;/sup&gt; = x&lt;sup&gt;3&lt;/sup&gt; - 3x&lt;sup&gt;2&lt;/sup&gt;y + 3xy&lt;sup&gt;2&lt;/sup&gt; - y&lt;sup&gt;3&lt;/sup&gt;

&lt;!-- তারিখ: 1st, 2nd, 21st --&gt;
21&lt;sup&gt;st&lt;/sup&gt; February</code></pre>
        </div>

        <div class="glass-card center-content">
          <h3 class="panel-header text-cyan">🖥️ ব্রাউজার আউটপুট</h3>
          <div class="browser-rendered-box" style="font-size:20px; color:#fff; text-align:center; gap:16px;">
            <div>(a+b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup></div>
            <div style="color:#ffaa00;">(x-y)<sup>3</sup> = x<sup>3</sup> - 3x<sup>2</sup>y + 3xy<sup>2</sup> - y<sup>3</sup></div>
            <div style="color:#00e5ff;">21<sup>st</sup> February (আন্তর্জাতিক মাতৃভাষা দিবস)</div>
          </div>
          <div class="teacher-takeaway mt-3">
            💡 <strong>মনে রাখার টেকনিক:</strong> <strong>Sup</strong> ➔ <em>Superman</em> আকাশে <strong>উপরে</strong> ওড়ে ➔ তাই পাওয়ারের মতো উপরে উঠবে!
          </div>
        </div>
      </div>
    `
  },

  {
    id: 29,
    module: "Formatting",
    category: "বোর্ড স্পেশাল সমীকরণ",
    title: "মাস্টার প্র্যাকটিস: সাব ও সুপার একসাথে ($a_1^2 + b_1^2$)",
    subtitle: "বোর্ড পরীক্ষার বহুল জিজ্ঞাসিত ট্রিকি প্রশ্ন",
    layout: "live-demo",
    teacherNotes: "ছাত্ররা ঘাবড়ে যায় যখন একই অক্ষরে সাবস্ক্রিপ্ট ও সুপারস্ক্রিপ্ট উভয়ই থাকে। স্পষ্ট করে দেখান: আগে sub তারপর sup, অথবা আগে sup তারপর sub—উভয়ভাবেই লেখা যায়।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">💻 সমন্বিত কোড</h3>
          <pre class="code-snippet"><code>&lt;!-- লক্ষ্য: a1^2 + b1^2 = c1^2 --&gt;
&lt;p&gt;
  a&lt;sub&gt;1&lt;/sub&gt;&lt;sup&gt;2&lt;/sup&gt; + 
  b&lt;sub&gt;1&lt;/sub&gt;&lt;sup&gt;2&lt;/sup&gt; = 
  c&lt;sub&gt;1&lt;/sub&gt;&lt;sup&gt;2&lt;/sup&gt;
&lt;/p&gt;</code></pre>
          <div class="tip-box mt-3">
            <span class="tip-badge">কীভাবে বিশ্লেষণ করবে?</span>
            <p>1 আছে অক্ষরের <strong>নিচে</strong> ➔ তাই <code>&lt;sub&gt;1&lt;/sub&gt;</code>।<br>
            2 আছে 1-এর <strong>উপরে</strong> বা ঘাত ➔ তাই <code>&lt;sup&gt;2&lt;/sup&gt;</code>।</p>
          </div>
        </div>

        <div class="glass-card center-content">
          <h3 class="panel-header text-cyan">🖥️ ব্রাউজার রেন্ডার</h3>
          <div class="browser-rendered-box" style="font-size:28px; color:#ffaa00; font-weight:bold; text-align:center;">
            a<sub>1</sub><sup>2</sup> + b<sub>1</sub><sup>2</sup> = c<sub>1</sub><sup>2</sup>
          </div>
          <div class="exam-note mt-3">
            🎯 <strong>বোর্ড প্রশ্ন:</strong> "ব্রাউজারে $a_1^2$ প্রদর্শনের জন্য HTML কোড কী হবে?" — এটি পরীক্ষায় প্রায়ই ৩ নম্বরের 'গ' তে আসে!
          </div>
        </div>
      </div>
    `
  },

  {
    id: 30,
    module: "Formatting",
    category: "ফন্ট ট্যাগ",
    title: "ফন্ট ট্যাগ (&lt;font&gt;) ও এর ৩টি মূল অ্যাট্রিবিউট",
    subtitle: "লেখার রঙ, আকার ও ফন্ট ফ্যামিলি পরিবর্তন",
    layout: "live-demo",
    teacherNotes: "HTML5-এ ফন্ট ট্যাগের বদলে CSS ব্যবহার উৎসাহিত করা হয়, কিন্তু এইচএসসি বোর্ড পরীক্ষায় এখনও ফন্ট ট্যাগের প্রশ্ন আসে। তাই এর color, size (1 থেকে 7) এবং face অ্যাট্রিবিউট অবশ্যই শিখতে হবে।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">💻 ফন্ট ট্যাগের কোড</h3>
          <pre class="code-snippet"><code>&lt;!-- color, size ও face অ্যাট্রিবিউট --&gt;
&lt;font color="red" size="5" face="Arial"&gt;
  লাল রঙের এরিয়াল ফন্ট
&lt;/font&gt;

&lt;font color="#00e5ff" size="6" face="Courier New"&gt;
  সায়ান রঙের কোডিং ফন্ট
&lt;/font&gt;</code></pre>
          <div class="bullet-box mt-3">
            <strong>অ্যাট্রিবিউটসমূহের কাজ:</strong>
            <ul>
              <li><strong>color:</strong> লেখার রঙ নির্ধারণ করে (নাম বা হেক্স কোড)।</li>
              <li><strong>size:</strong> লেখার আকার নির্ধারণ করে (১ থেকে ৭ পর্যন্ত, ডিফল্ট ৩)।</li>
              <li><strong>face:</strong> ফন্টের নাম নির্ধারণ করে (যেমন: Arial, Times New Roman, Vrinda)।</li>
            </ul>
          </div>
        </div>

        <div class="glass-card center-content">
          <h3 class="panel-header text-cyan">🖥️ ব্রাউজার আউটপুট</h3>
          <div class="browser-rendered-box" style="gap:14px; text-align:center;">
            <div style="color:red; font-size:22px; font-family:Arial;">লাল রঙের এরিয়াল ফন্ট</div>
            <div style="color:#00e5ff; font-size:26px; font-family:'Courier New', monospace;">সায়ান রঙের কোডিং ফন্ট</div>
          </div>
        </div>
      </div>
    `
  },

  // ==========================================
  // MODULE 6: হাইপারলিংক ও ইমেজ (Step-by-Step)
  // ==========================================
  {
    id: 31,
    module: "Links & Images",
    category: "হাইপারলিংক",
    title: "হাইপারলিংক: নোঙ্গর ট্যাগ (Anchor Tag &lt;a&gt;) এর গঠন",
    subtitle: "এক পেজ থেকে অন্য পেজে সংযোগ স্থাপনের মূল চাবিকাঠি",
    layout: "content-grid",
    teacherNotes: "অ্যাঙ্কর ট্যাগের সবচেয়ে প্রধান অ্যাট্রিবিউট হলো href (Hypertext Reference)। target='_blank' দিলে নতুন ট্যাবে ওপেন হয়, এটি বোঝান।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">🔗 হাইপারলিংক সিনট্যাক্স</h3>
          <pre class="code-snippet"><code>&lt;a href="URL" target="_blank"&gt;লিংক টেক্সট&lt;/a&gt;</code></pre>
          <ul class="styled-list mt-3">
            <li><strong>&lt;a&gt;:</strong> Anchor বা নোঙ্গর ট্যাগ (কন্টেইনার ট্যাগ)।</li>
            <li><strong>href:</strong> Hypertext Reference (গন্তব্য ওয়েব ঠিকানার অ্যাট্রিবিউট)।</li>
            <li><strong>target="_blank":</strong> লিংকটি ব্রাউজারের নতুন ট্যাবে ওপেন করার জন্য।</li>
          </ul>
        </div>

        <div class="glass-card">
          <h3 class="panel-header text-cyan">💡 বাস্তব কোড উদাহরণসমূহ</h3>
          <pre class="code-snippet"><code>&lt;!-- বাহ্যিক লিংক --&gt;
&lt;a href="https://www.google.com" target="_blank"&gt;গুগলে যান&lt;/a&gt;

&lt;!-- অভ্যন্তরীণ লিংক --&gt;
&lt;a href="contact.html"&gt;আমাদের সাথে যোগাযোগ&lt;/a&gt;

&lt;!-- ইমেইল পাঠানোর লিংক --&gt;
&lt;a href="mailto:info@ictcoach.com"&gt;মেইল করুন&lt;/a&gt;</code></pre>
        </div>
      </div>
    `
  },

  {
    id: 32,
    module: "Links & Images",
    category: "ইমেজ ট্যাগ",
    title: "ছবি সংযোজন: ইমেজ ট্যাগ (&lt;img&gt;) ও এর ৪টি অ্যাট্রিবিউট",
    subtitle: "ওয়েবপেজে ছবি যুক্ত করার এম্পটি ট্যাগ",
    layout: "content-grid",
    teacherNotes: "img হলো একটি এম্পটি ট্যাগ। এর আবশ্যক অ্যাট্রিবিউট src (Source)। alt এর পূর্ণরূপ Alternate Text, ছবি লোড না হলে লেখা দেখায়।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">🖼️ ইমেজ ট্যাগ সিনট্যাক্স ও অ্যাট্রিবিউট</h3>
          <pre class="code-snippet"><code>&lt;img src="photo.jpg" alt="ICT Logo" width="300" height="200"&gt;</code></pre>
          <div class="bullet-box">
            <strong>গুরুত্বপূর্ণ অ্যাট্রিবিউটসমূহ:</strong>
            <ul>
              <li><strong>src (Source):</strong> ছবির ফাইলের নাম বা ইন্টারনেট লিংক (বাধ্যতামূলক)।</li>
              <li><strong>alt (Alternative):</strong> কোনো কারণে ছবি লোড না হলে বিকল্প লেখা প্রদর্শন করে।</li>
              <li><strong>width ও height:</strong> ছবির প্রস্থ ও উচ্চতা (পিক্সেলে বা শতাংশে)।</li>
              <li><strong>align:</strong> ছবির অবস্থান নির্ধারণ (left, right, middle)।</li>
            </ul>
          </div>
        </div>

        <div class="glass-card">
          <h3 class="panel-header text-cyan">🎯 ছবিতে ক্লিক করলে পেজ ওপেন (Image as Link)</h3>
          <p class="small-muted">বোর্ড পরীক্ষায় প্রায়ই আসে: একটি ছবিতে ক্লিক করলে নির্দিষ্ট ওয়েবসাইটে চলে যাবে। কোড কেমন হবে?</p>
          <pre class="code-snippet"><code>&lt;!-- ছবিতে ক্লিক করলে গুগল ওপেন হবে --&gt;
&lt;a href="https://www.google.com" target="_blank"&gt;
  &lt;img src="logo.png" alt="Google Logo" width="150"&gt;
&lt;/a&gt;</code></pre>
          <div class="teacher-takeaway">
            💡 <strong>মনে রাখুন:</strong> &lt;a&gt; ট্যাগের ভেতরে &lt;img&gt; ট্যাগ বসালেই ছবি ক্লিকেবল লিংকে পরিণত হয়!
          </div>
        </div>
      </div>
    `
  },

  // ==========================================
  // MODULE 7: এইচটিএমএল লিস্ট (Step-by-Step)
  // ==========================================
  {
    id: 33,
    module: "Lists",
    category: "লিস্ট পরিচিতি",
    title: "এইচটিএমএল লিস্ট (Lists) কী ও এর ৩টি প্রকারভেদ",
    subtitle: "তথ্যকে ক্রমানুসারে বা বুলেট আকারে সাজানোর পদ্ধতি",
    layout: "content-grid",
    teacherNotes: "লিস্ট ৩ প্রকার: Ordered List (<ol>), Unordered List (<ul>), এবং Definition/Description List (<dl>)। বোর্ডে <ol> এবং <ul> সবচেয়ে বেশি আসে।",
    html: `
      <div class="structure-overview-grid" style="grid-template-columns: repeat(3, 1fr);">
        <div class="struct-card">
          <div class="struct-num">১</div>
          <h4>অর্ডারড লিস্ট</h4>
          <span class="eng-lbl">&lt;ol&gt; (Ordered List)</span>
          <p>সংখ্যা, বর্ণ বা রোমান সংখ্যার ক্রমানুসারে সাজানো তালিকা (1, 2, 3 বা A, B, C)।</p>
        </div>

        <div class="struct-card">
          <div class="struct-num">২</div>
          <h4>আনঅর্ডারড লিস্ট</h4>
          <span class="eng-lbl">&lt;ul&gt; (Unordered List)</span>
          <p>বুলেট চিহ্ন দিয়ে সাজানো তালিকা (বৃত্ত, ভরাট বৃত্ত বা চারকোনা বাক্স)।</p>
        </div>

        <div class="struct-card">
          <div class="struct-num">৩</div>
          <h4>বিবরণী তালিকা</h4>
          <span class="eng-lbl">&lt;dl&gt; (Description List)</span>
          <p>শব্দ ও তার সংজ্ঞার তালিকা তৈরির জন্য (&lt;dt&gt; ও &lt;dd&gt;)।</p>
        </div>
      </div>
      <div class="teacher-takeaway mt-4">
        📌 <strong>মনে রাখবেন:</strong> তালিকার প্রতিটি আইটেম লেখার জন্য <code>&lt;li&gt;</code> (List Item) ট্যাগ ব্যবহৃত হয়।
      </div>
    `
  },

  {
    id: 34,
    module: "Lists",
    category: "অর্ডারড লিস্ট",
    title: "ক্রমানুসারী তালিকা বা অর্ডারড লিস্ট (&lt;ol&gt;)",
    subtitle: "type এবং start অ্যাট্রিবিউটের জাদু",
    layout: "live-demo",
    teacherNotes: "ol ট্যাগের দুটি গুরুত্বপূর্ণ অ্যাট্রিবিউট: type (1, A, a, I, i) এবং start (কোন সংখ্যা থেকে শুরু হবে)। বোর্ডে Roman numeral বা 'C' থেকে শুরু হওয়া লিস্ট অনেক আসে।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">💻 HTML কোড</h3>
          <pre class="code-snippet"><code>&lt;!-- রোমান সংখ্যায় ৩ থেকে শুরু --&gt;
&lt;ol type="I" start="3"&gt;
  &lt;li&gt;বাংলা&lt;/li&gt;
  &lt;li&gt;ইংরেজি&lt;/li&gt;
  &lt;li&gt;আইসিটি&lt;/li&gt;
&lt;/ol&gt;</code></pre>
          <div class="bullet-box mt-3">
            <strong>type এর মানসমূহ:</strong>
            <ul>
              <li><code>type="1"</code> ➔ 1, 2, 3 (ডিফল্ট)</li>
              <li><code>type="A"</code> ➔ A, B, C</li>
              <li><code>type="a"</code> ➔ a, b, c</li>
              <li><code>type="I"</code> ➔ I, II, III</li>
              <li><code>type="i"</code> ➔ i, ii, iii</li>
            </ul>
          </div>
        </div>

        <div class="glass-card">
          <h3 class="panel-header text-cyan">🖥️ ব্রাউজার আউটপুট</h3>
          <div class="browser-rendered-box">
            <ol type="I" start="3" style="color:#ffaa00; font-size:18px; padding-left:25px;">
              <li><span style="color:#fff;">বাংলা</span></li>
              <li><span style="color:#fff;">ইংরেজি</span></li>
              <li><span style="color:#fff;">আইসিটি</span></li>
            </ol>
          </div>
          <div class="exam-note mt-4">
            ⭐ <strong>সতর্কতা:</strong> start অ্যাট্রিবিউটে সবসময় <strong>দশমিক সংখ্যা</strong> (যেমন start="3") দিতে হয়, কখনো start="C" বা start="III" দেওয়া যায় না!
          </div>
        </div>
      </div>
    `
  },

  {
    id: 35,
    module: "Lists",
    category: "আনঅর্ডারড ও নেস্টেড লিস্ট",
    title: "আনঅর্ডারড লিস্ট (&lt;ul&gt;) ও নেস্টেড লিস্ট",
    subtitle: "চিহ্নভিত্তিক ও বহুমাত্রিক তালিকা",
    layout: "live-demo",
    teacherNotes: "ul এর ৩টি টাইপ: disc (ভরাট বৃত্ত), circle (খালি বৃত্ত), square (বর্গক্ষেত্র)। নেস্টেড লিস্ট মানে তালিকার পেটে আরেক তালিকা।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">💻 নেস্টেড লিস্ট কোড</h3>
          <pre class="code-snippet"><code>&lt;ul type="square"&gt;
  &lt;li&gt;বিজ্ঞান বিভাগ
    &lt;ol type="1"&gt;
      &lt;li&gt;পদার্থবিজ্ঞান&lt;/li&gt;
      &lt;li&gt;রসায়ন&lt;/li&gt;
    &lt;/ol&gt;
  &lt;/li&gt;
  &lt;li&gt;ব্যবসায় শিক্ষা
    &lt;ol type="1"&gt;
      &lt;li&gt;হিসাববিজ্ঞান&lt;/li&gt;
    &lt;/ol&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
        </div>

        <div class="glass-card">
          <h3 class="panel-header text-cyan">🖥️ ব্রাউজার আউটপুট</h3>
          <div class="browser-rendered-box">
            <ul type="square" style="color:#00b4d8; font-size:16px; padding-left:20px;">
              <li><span style="color:#fff; font-weight:bold;">বিজ্ঞান বিভাগ</span>
                <ol type="1" style="color:#ffaa00; font-size:15px; padding-left:20px; margin-top:4px;">
                  <li><span style="color:#ddd;">পদার্থবিজ্ঞান</span></li>
                  <li><span style="color:#ddd;">রসায়ন</span></li>
                </ol>
              </li>
              <li style="margin-top:8px;"><span style="color:#fff; font-weight:bold;">ব্যবসায় শিক্ষা</span>
                <ol type="1" style="color:#ffaa00; font-size:15px; padding-left:20px; margin-top:4px;">
                  <li><span style="color:#ddd;">হিসাববিজ্ঞান</span></li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `
  },

  // ==========================================
  // MODULE 8: এইচটিএমএল টেবিল মাস্টারক্লাস (The Core for CQ)
  // ==========================================
  {
    id: 36,
    module: "Tables",
    category: "টেবিল গুরুত্ব",
    title: "কেন এইচটিএমএল টেবিল বোর্ড পরীক্ষার জন্য সর্বাধিক গুরুত্বপূর্ণ?",
    subtitle: "বোর্ড পরীক্ষার 'গ' ও 'ঘ' এর ৮০% প্রশ্ন টেবিল কেন্দ্রিক",
    layout: "content-grid",
    teacherNotes: "শিক্ষার্থীদের বলুন: যারা টেবিল কোড করতে পারে, তারা এইচএসসির অধ্যায় ৪-এ নিশ্চিত পূর্ণ নম্বর পায়। টেবিল কোড একদম ম্যাথমেটিক্যাল নিয়মে হয়।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">📊 কেন টেবিল এত কমন?</h3>
          <ul class="styled-list">
            <li>বোর্ডের উদ্দীপকে প্রায় প্রতি বছর কোনো না কোনো কলেজ রুটিন, রেজাল্ট শিট বা পণ্যের মূল্যতালিকা দেওয়া থাকে।</li>
            <li>এতে একই সাথে ট্যাগ, অ্যাট্রিবিউট, সেল মার্জিং এবং লিংকিংয়ের দক্ষতা যাচাই করা যায়।</li>
            <li>টেবিল থেকে ৩ নম্বরের 'গ' এবং ৪ নম্বরের 'ঘ' উভয়ই আসে!</li>
          </ul>
        </div>

        <div class="glass-card">
          <h3 class="panel-header text-cyan">🧱 টেবিল তৈরির গোল্ডেন ২ ধাপ</h3>
          <div class="tip-box">
            <span class="tip-badge">ধাপ ১: সারি (Row) গণনা</span>
            <p>উদ্দীপকের টেবিলে মোট কয়টি অনুভূমিক সারি বা Row আছে তা গুণো। যতটি সারি, ততটি <code>&lt;tr&gt;...&lt;/tr&gt;</code> ব্লক হবে।</p>
          </div>
          <div class="tip-box mt-3">
            <span class="tip-badge">ধাপ ২: প্রতিটি সারির সেল গণনা</span>
            <p>প্রতিটি সারির ভেতরে কয়টি ঘর বা সেল আছে? হেডার হলে <code>&lt;th&gt;</code> এবং সাধারণ ডাটা হলে <code>&lt;td&gt;</code> বসবে।</p>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 37,
    module: "Tables",
    category: "টেবিল বেসিক",
    title: "টেবিলের মৌলিক ৪টি ট্যাগ ও তাদের পূর্ণরূপ",
    subtitle: "&lt;table&gt;, &lt;tr&gt;, &lt;th&gt;, &lt;td&gt;",
    layout: "content-grid",
    teacherNotes: "টেবিল তৈরি শেখানোর সময় প্রতিটি ট্যাগের পূর্ণরূপ স্পষ্ট করে দিন: tr = table row, th = table header, td = table data। border না দিলে কোনো বর্ডার আসবে না।",
    html: `
      <div class="table-card">
        <table class="presentation-table">
          <thead>
            <tr>
              <th>ট্যাগ</th>
              <th>পূর্ণরূপ</th>
              <th>কাজ ও বৈশিষ্ট্য</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>&lt;table&gt;</code></td>
              <td>Table</td>
              <td>সম্পূর্ণ টেবিল নির্দেশ করে। এর সাথে <code>border="1"</code> দেওয়া জরুরি।</td>
            </tr>
            <tr>
              <td><code>&lt;tr&gt;</code></td>
              <td>Table Row</td>
              <td>টেবিলের একটি অনুভূমিক সারি বা রো তৈরি করে।</td>
            </tr>
            <tr>
              <td><code>&lt;th&gt;</code></td>
              <td>Table Header</td>
              <td>টেবিল হেডিং সেল (লেখা স্বয়ংক্রিয়ভাবে <strong>বোল্ড</strong> ও <strong>মাঝখানে</strong> থাকে)।</td>
            </tr>
            <tr>
              <td><code>&lt;td&gt;</code></td>
              <td>Table Data</td>
              <td>টেবিলের সাধারণ ডাটা সেল (লেখা সাধারণ এবং বামে বিন্যস্ত থাকে)।</td>
            </tr>
            <tr>
              <td><code>&lt;caption&gt;</code></td>
              <td>Caption</td>
              <td>টেবিলের শিরোনাম নির্ধারণ করে (টেবিলের ঠিক উপরে প্রদর্শিত হয়)।</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  {
    id: 38,
    module: "Tables",
    category: "ধাপে ধাপে কোডিং",
    title: "ধাপ ১: একটি সাধারণ ২x২ টেবিল তৈরি (Step-by-Step)",
    subtitle: "একেবারে প্রাথমিক স্তর থেকে শুরু করা যাক",
    layout: "interactive-code",
    teacherNotes: "শিক্ষার্থীদের সাথে সাথে কোড করান। দেখান কীভাবে tr দিয়ে রো শুরু হয় এবং td দিয়ে সেল ভরে tr শেষ করতে হয়।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">💻 কোড রূপরেখা</h3>
          <pre class="code-snippet"><code>&lt;table border="1"&gt;
  &lt;caption&gt;Student List&lt;/caption&gt;
  &lt;!-- ১ম সারি (হেডার) --&gt;
  &lt;tr&gt;
    &lt;th&gt;Roll&lt;/th&gt;
    &lt;th&gt;Name&lt;/th&gt;
  &lt;/tr&gt;
  &lt;!-- ২য় সারি (ডাটা) --&gt;
  &lt;tr&gt;
    &lt;td&gt;101&lt;/td&gt;
    &lt;td&gt;Rahim&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
        </div>

        <div class="glass-card center-content">
          <h3 class="panel-header text-cyan">🖥️ ব্রাউজার আউটপুট</h3>
          <table style="border-collapse:collapse; width:85%; margin:15px auto; border:2px solid #fff; text-align:center;">
            <caption style="color:#ffaa00; font-weight:bold; margin-bottom:8px;">Student List</caption>
            <tr style="background:#1c212c;">
              <th style="border:1px solid #888; padding:8px; color:#ffeb3b;">Roll</th>
              <th style="border:1px solid #888; padding:8px; color:#ffeb3b;">Name</th>
            </tr>
            <tr>
              <td style="border:1px solid #888; padding:8px; color:#fff;">101</td>
              <td style="border:1px solid #888; padding:8px; color:#fff;">Rahim</td>
            </tr>
          </table>
          <div class="exam-note mt-3">
            ⚠️ <strong>সতর্কতা:</strong> যদি <code>border="1"</code> না লেখো, তাহলে টেবিলের চারপাশের দাগ বা রেখা সম্পূর্ণ অদৃশ্য থাকবে!
          </div>
        </div>
      </div>
    `
  },

  {
    id: 39,
    module: "Tables",
    category: "টেবিল অ্যাট্রিবিউট",
    title: "টেবিল অ্যাট্রিবিউটসমূহ: cellpadding বনাম cellspacing",
    subtitle: "টেবিলের ভেতরের ও বাইরের ব্যবধান নিয়ন্ত্রণ",
    layout: "content-grid",
    teacherNotes: "সেলস্পেসিং এবং সেলপ্যাডিং এর পার্থক্য চিত্রসহ দেখান: সেলস্পেসিং হলো দুই সেলের মধ্যবর্তী দূরত্ব, আর সেলপ্যাডিং হলো সেলের বর্ডার থেকে লেখার দূরত্ব।",
    html: `
      <div class="table-card">
        <table class="presentation-table">
          <thead>
            <tr>
              <th>অ্যাট্রিবিউট</th>
              <th>কাজ বা উদ্দেশ্য</th>
              <th>উদাহরণ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>border="1"</code></td>
              <td>টেবিলের সীমানা বা বর্ডারের পুরুত্ব নির্ধারণ।</td>
              <td><code>&lt;table border="2"&gt;</code></td>
            </tr>
            <tr>
              <td><code>cellpadding="10"</code></td>
              <td>সেলের বর্ডার ও লেখার ভেতরের ফাঁকা জায়গা (Padding)।</td>
              <td><code>&lt;table cellpadding="10"&gt;</code></td>
            </tr>
            <tr>
              <td><code>cellspacing="5"</code></td>
              <td>পাশাপাশি দুটি সেলের মধ্যবর্তী ফাঁকা জায়গা (Spacing)।</td>
              <td><code>&lt;table cellspacing="5"&gt;</code></td>
            </tr>
            <tr>
              <td><code>width="80%"</code></td>
              <td>টেবিলের প্রস্থ বা চওড়া নির্ধারণ।</td>
              <td><code>&lt;table width="400"&gt;</code></td>
            </tr>
            <tr>
              <td><code>align="center"</code></td>
              <td>স্ক্রিনের মাঝে টেবিল স্থাপন।</td>
              <td><code>&lt;table align="center"&gt;</code></td>
            </tr>
            <tr>
              <td><code>bgcolor="yellow"</code></td>
              <td>টেবিল বা সেলের পটভূমির রঙ নির্ধারণ।</td>
              <td><code>&lt;tr bgcolor="#1c212c"&gt;</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  {
    id: 40,
    module: "Tables",
    category: "সেল মার্জিং ১",
    title: "সেল মার্জিং ১: Colspan অ্যাট্রিবিউট (কলাম বিস্তার)",
    subtitle: "পাশাপাশি একাধিক কলামকে একটি সেলে রূপান্তর",
    layout: "live-demo",
    teacherNotes: "Colspan মানে Column Span (কলামের বিস্তার)। যখন একটি সেল ডানে আরও কলামের জায়গা দখল করে। উদাহরণ: Student Info যদি ২টি কলাম জুড়ে থাকে, তাহলে colspan='2'।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">💻 Colspan কোড</h3>
          <pre class="code-snippet"><code>&lt;table border="1"&gt;
  &lt;tr&gt;
    &lt;!-- ২টি কলাম জুড়ে একটি সেল --&gt;
    &lt;th colspan="2"&gt;Student Info&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Roll: 101&lt;/td&gt;
    &lt;td&gt;Name: Rahul&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
          <div class="exam-note mt-3">
            📌 <strong>নিয়ম:</strong> যে সেলে <code>colspan="2"</code> দেওয়া হয়েছে, সেই সারিতে পরবর্তী একটি <code>&lt;td&gt;</code> কম লিখতে হবে!
          </div>
        </div>

        <div class="glass-card center-content">
          <h3 class="panel-header text-cyan">🖥️ টেবিল আউটপুট</h3>
          <table style="border-collapse:collapse; width:80%; margin:20px auto; border:2px solid #ffaa00; text-align:center;">
            <tr>
              <th colspan="2" style="border:2px solid #ffaa00; background:rgba(255,170,0,0.2); padding:10px; color:#ffaa00;">Student Info (colspan="2")</th>
            </tr>
            <tr>
              <td style="border:1px solid #555; padding:8px; color:#fff;">Roll: 101</td>
              <td style="border:1px solid #555; padding:8px; color:#fff;">Name: Rahul</td>
            </tr>
          </table>
        </div>
      </div>
    `
  },

  {
    id: 41,
    module: "Tables",
    category: "সেল মার্জিং ২",
    title: "সেল মার্জিং ২: Rowspan অ্যাট্রিবিউট (সারি বিস্তার)",
    subtitle: "উপর-নিচে একাধিক সারির স্থান দখল করা",
    layout: "live-demo",
    teacherNotes: "Rowspan মানে Row Span। যখন একটি সেল নিচের সারির জায়গা দখল করে। নিচের সারিতে কোড লেখার সময় ওই সেলের জন্য td লিখতে হয় না।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">💻 Rowspan কোড</h3>
          <pre class="code-snippet"><code>&lt;table border="1"&gt;
  &lt;tr&gt;
    &lt;!-- ২টি সারি জুড়ে একটি সেল --&gt;
    &lt;th rowspan="2"&gt;Subject&lt;/th&gt;
    &lt;td&gt;Paper 1&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;!-- এখানে প্রথম কলাম আর লিখতে হবে না --&gt;
    &lt;td&gt;Paper 2&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
        </div>

        <div class="glass-card center-content">
          <h3 class="panel-header text-cyan">🖥️ টেবিল আউটপুট</h3>
          <table style="border-collapse:collapse; width:80%; margin:20px auto; border:2px solid #00b4d8; text-align:center;">
            <tr>
              <th rowspan="2" style="border:2px solid #00b4d8; background:rgba(0,180,216,0.2); padding:12px; color:#00b4d8;">Subject<br>(rowspan="2")</th>
              <td style="border:1px solid #555; padding:8px; color:#fff;">Paper 1</td>
            </tr>
            <tr>
              <td style="border:1px solid #555; padding:8px; color:#fff;">Paper 2</td>
            </tr>
          </table>
        </div>
      </div>
    `
  },

  {
    id: 42,
    module: "Tables",
    category: "সাধারণ ভুল",
    title: "শিক্ষার্থীদের সাধারণ ভুল: Rowspan-এ অতিরিক্ত সেল লেখা!",
    subtitle: "কেন টেবিলের ডিজাইন ভেঙে যায়?",
    layout: "content-grid",
    teacherNotes: "বোর্ড খাতা দেখার অভিজ্ঞতায় দেখা যায়: ছাত্ররা rowspan='2' লেখার পরও পরের লাইনে প্রথম সেলটি লিখে ফেলে। ফলে টেবিলটি ডানে বাড়তি হয়ে বেরিয়ে যায়। এই ভুলটি সতর্কতার সাথে বোঝান।",
    html: `
      <div class="grid-2col">
        <div class="glass-card" style="border-color:rgba(255,51,102,0.4);">
          <h3 class="panel-header" style="color:#ff3366;">❌ ভুল কোড (Common Mistake)</h3>
          <pre class="code-snippet" style="border-color:#ff3366;"><code>&lt;tr&gt;
  &lt;td rowspan="2"&gt;A&lt;/td&gt;
  &lt;td&gt;B&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
  &lt;!-- এখানে A এর নিচে সেল লিখে ফেললে ভুল! --&gt;
  &lt;td&gt;ভুল সেল&lt;/td&gt; 
  &lt;td&gt;C&lt;/td&gt;
&lt;/tr&gt;</code></pre>
          <p class="small-muted mt-2" style="color:#fecdd3;">ফলাফল: নিচের সারিতে মোট ৩টি ঘর হয়ে যাবে এবং টেবিল ভেঙে যাবে!</p>
        </div>

        <div class="glass-card" style="border-color:rgba(0,230,118,0.4);">
          <h3 class="panel-header" style="color:#00e676;">✅ সঠিক কোড (Correct Technique)</h3>
          <pre class="code-snippet" style="border-color:#00e676;"><code>&lt;tr&gt;
  &lt;td rowspan="2"&gt;A&lt;/td&gt;
  &lt;td&gt;B&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
  &lt;!-- A এর জন্য আর কোনো td লেখা যাবে না --&gt;
  &lt;td&gt;C&lt;/td&gt;
&lt;/tr&gt;</code></pre>
          <p class="small-muted mt-2" style="color:#a7f3d0;">ফলাফল: উপরের 'A' সেলটি নিচের ঘরের জায়গা আগেই দখল করে নিয়েছে, তাই নিচে কেবল ১টি সেল থাকবে।</p>
        </div>
      </div>
    `
  },

  {
    id: 43,
    module: "Tables",
    category: "মাস্টার টেবিল",
    title: "মাস্টার টেবিল চ্যালেঞ্জ: Colspan + Rowspan + Image + Link একসাথে",
    subtitle: "বোর্ড স্ট্যান্ডার্ড উচ্চতর দক্ষতার জটিল টেবিল সমাধান",
    layout: "interactive-code",
    teacherNotes: "এই স্লাইডটি খুবই গুরুত্বপূর্ণ। বোর্ড পরীক্ষায় প্রায়ই এমন জটিল টেবিল আসে যেখানে একই সাথে Colspan, Rowspan, ছবি এবং লিংক থাকে। পুরো কোডটি ছাত্রদের মনোযোগ দিয়ে দেখতে বলুন।",
    html: `
      <div class="grid-2col">
        <div class="glass-card">
          <h3 class="panel-header text-gold">💻 সম্পূর্ণ HTML কোড</h3>
          <pre class="code-snippet" style="max-height:280px; overflow-y:auto;"><code>&lt;table border="1" align="center"&gt;
  &lt;caption&gt;HSC ICT Result Sheet&lt;/caption&gt;
  &lt;tr&gt;
    &lt;th rowspan="2"&gt;Photo&lt;/th&gt;
    &lt;th colspan="2"&gt;Student Details&lt;/th&gt;
    &lt;th rowspan="2"&gt;Action&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;th&gt;Roll&lt;/th&gt;
    &lt;th&gt;Name&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;&lt;img src="pic.jpg" width="50"&gt;&lt;/td&gt;
    &lt;td&gt;101&lt;/td&gt;
    &lt;td&gt;Tanvir&lt;/td&gt;
    &lt;td&gt;&lt;a href="details.html"&gt;View&lt;/a&gt;&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
        </div>

        <div class="glass-card center-content">
          <h3 class="panel-header text-cyan">🖥️ ব্রাউজার রেন্ডার রূপ</h3>
          <table style="border-collapse:collapse; width:95%; margin:15px auto; border:2px solid #fff; text-align:center; font-size:13px;">
            <caption style="color:#ffaa00; font-weight:bold; margin-bottom:6px;">HSC ICT Result Sheet</caption>
            <tr style="background:#1c212c;">
              <th rowspan="2" style="border:1px solid #888; padding:6px; color:#00e5ff;">Photo</th>
              <th colspan="2" style="border:1px solid #888; padding:6px; color:#ffeb3b;">Student Details</th>
              <th rowspan="2" style="border:1px solid #888; padding:6px; color:#00e5ff;">Action</th>
            </tr>
            <tr style="background:#1c212c;">
              <th style="border:1px solid #888; padding:6px;">Roll</th>
              <th style="border:1px solid #888; padding:6px;">Name</th>
            </tr>
            <tr>
              <td style="border:1px solid #888; padding:6px;">🖼️ 50x50</td>
              <td style="border:1px solid #888; padding:6px;">101</td>
              <td style="border:1px solid #888; padding:6px;">Tanvir</td>
              <td style="border:1px solid #888; padding:6px;"><a href="#" style="color:#00b4d8;">View</a></td>
            </tr>
          </table>
        </div>
      </div>
    `
  },

  // ==========================================
  // MODULE 9: এইচটিএমএল ফর্ম (HTML Forms)
  // ==========================================
  {
    id: 44,
    module: "Forms",
    category: "ফর্ম পরিচিতি",
    title: "এইচটিএমএল ফর্ম (&lt;form&gt;) ও ইনপুট ট্যাগসমূহ",
    subtitle: "ব্যবহারকারীর তথ্য ও ইনপুট সংগ্রহের মাধ্যম",
    layout: "content-grid",
    teacherNotes: "ফর্মের মৌলিক ট্যাগ <form> এবং সবচেয়ে বহুমুখী ট্যাগ হলো <input>। input এর type অ্যাট্রিবিউট দিয়েই নির্ধারণ করা হয় এটি সাধারণ টেক্সট বক্স, পাসওয়ার্ড বক্স, রেডিও বাটন না চেকবক্স।",
    html: `
      <div class="table-card">
        <table class="presentation-table">
          <thead>
            <tr>
              <th>ইনপুট টাইপ</th>
              <th>কাজ ও উদ্দেশ্য</th>
              <th>কোড সিনট্যাক্স</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>type="text"</code></td>
              <td>এক লাইনের সাধারণ টেক্সট (যেমন: নাম)।</td>
              <td><code>&lt;input type="text" name="uname"&gt;</code></td>
            </tr>
            <tr>
              <td><code>type="password"</code></td>
              <td>গোপন কোড (অক্ষরগুলো ডট বা স্টার আকারে লুকিয়ে রাখে)।</td>
              <td><code>&lt;input type="password" name="pass"&gt;</code></td>
            </tr>
            <tr>
              <td><code>type="radio"</code></td>
              <td>একাধিক অপশন থেকে যেকোনো <strong>একটি</strong> বাছাই (যেমন: জেন্ডার)।</td>
              <td><code>&lt;input type="radio" name="gender"&gt; Male</code></td>
            </tr>
            <tr>
              <td><code>type="checkbox"</code></td>
              <td>একাধিক অপশন থেকে <strong>একাধিক</strong> বাছাই (যেমন: শখ)।</td>
              <td><code>&lt;input type="checkbox" name="hobby"&gt; Reading</code></td>
            </tr>
            <tr>
              <td><code>type="submit"</code></td>
              <td>ফর্মের ডাটা সার্ভারে পাঠানোর বাটন।</td>
              <td><code>&lt;input type="submit" value="Submit"&gt;</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  // ==========================================
  // MODULE 10: বোর্ড সৃজনশীল প্রশ্ন (Board CQ Solved)
  // ==========================================
  {
    id: 45,
    module: "Board CQ",
    category: "CQ সলভ ১",
    title: "বোর্ড CQ সমাধান ১ — কুমিল্লা বোর্ড ২০২৩",
    subtitle: "উদ্দীপক বিশ্লেষণ ও ধাপে ধাপে আদর্শ উত্তর",
    layout: "cq-interactive",
    teacherNotes: "শিক্ষার্থীদের প্রথমে প্রশ্নটি পড়ে চিন্তা করতে দিন। তারপর নিচে 'উত্তর দেখুন' বাটনে ক্লিক করে ধাপে ধাপে সমাধানটি স্ক্রিনে প্রদর্শন করুন।",
    html: `
      <div class="cq-container glass-card">
        <div class="cq-stem">
          <div class="stem-badge">উদ্দীপক (কুমিল্লা বোর্ড ২০২৩)</div>
          <p>সাদাফ তার কলেজের ওয়েবপেজ তৈরি করার সময় নিম্নোক্ত ৩ কলাম বিশিষ্ট একটি টেবিল যুক্ত করল:</p>
          <table style="border-collapse:collapse; width:80%; margin:10px auto; border:1px solid #aaa; text-align:center; font-size:13px;">
            <tr style="background:#222; color:#ffaa00;">
              <th style="border:1px solid #aaa; padding:5px;">Science</th>
              <th style="border:1px solid #aaa; padding:5px;">Commerce</th>
              <th style="border:1px solid #aaa; padding:5px;">Humanities</th>
            </tr>
            <tr>
              <td style="border:1px solid #aaa; padding:5px;">Physics</td>
              <td style="border:1px solid #aaa; padding:5px;">Accounting</td>
              <td style="border:1px solid #aaa; padding:5px;">History</td>
            </tr>
          </table>
        </div>

        <div class="cq-questions-accordion">
          <div class="cq-item">
            <div class="cq-q-bar"><strong>(ক) ডাইনামিক ওয়েবসাইট কী? [১]</strong> <button class="btn-reveal" onclick="toggleCQAnswer(this)">উত্তর দেখুন</button></div>
            <div class="cq-ans-box" style="display:none;">
              <p><strong>উত্তর:</strong> যে সকল ওয়েবসাইটের কন্টেন্ট বা তথ্য ব্যবহারকারীর চাহিদা ও ডাটাবেজের ওপর ভিত্তি করে রানটাইমে স্বয়ংক্রিয়ভাবে পরিবর্তিত হয়, তাকে ডাইনামিক ওয়েবসাইট বলে।</p>
            </div>
          </div>

          <div class="cq-item">
            <div class="cq-q-bar"><strong>(খ) "ডোমেইন নেম আইপি অ্যাড্রেসের পরিপূরক" — ব্যাখ্যা কর। [২]</strong> <button class="btn-reveal" onclick="toggleCQAnswer(this)">উত্তর দেখুন</button></div>
            <div class="cq-ans-box" style="display:none;">
              <p><strong>উত্তর:</strong> ইন্টারনেটে প্রতিটি ওয়েব সার্ভারের একটি সাংখ্যিক IP Address থাকে। কিন্তু বিপুল পরিমাণ গাণিতিক সংখ্যা মানুষের স্মৃতিতে রাখা কঠিন। অপরদিকে ডোমেইন নেম হলো একটি অর্থপূর্ণ ও সহজে মনে রাখার মতো আলফানিউমেরিক নাম। DNS সার্ভার ডোমেইন নেমকে আইপি অ্যাড্রেসে অনুবাদ করে সংযোগ স্থাপন করে। সুতরাং ডোমেইন নেম ব্যবহারকারীর স্মৃতিশক্তির সীমাবদ্ধতা দূর করে আইপির পরিপূরক হিসেবে কাজ করে।</p>
            </div>
          </div>

          <div class="cq-item">
            <div class="cq-q-bar"><strong>(গ) উদ্দীপকের টেবিলটি তৈরির জন্য HTML কোড লেখ। [৩]</strong> <button class="btn-reveal" onclick="toggleCQAnswer(this)">কোড দেখুন</button></div>
            <div class="cq-ans-box" style="display:none;">
              <pre class="code-snippet"><code>&lt;table border="1"&gt;
  &lt;tr&gt;
    &lt;th&gt;Science&lt;/th&gt;
    &lt;th&gt;Commerce&lt;/th&gt;
    &lt;th&gt;Humanities&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Physics&lt;/td&gt;
    &lt;td&gt;Accounting&lt;/td&gt;
    &lt;td&gt;History&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 46,
    module: "Board CQ",
    category: "CQ সলভ ২",
    title: "বোর্ড CQ সমাধান ২ — চট্টগ্রাম বোর্ড ২০১৯",
    subtitle: "ওয়েবসাইট কাঠামো ও ইমেজ/হাইপারলিংক উদ্দীপক",
    layout: "cq-interactive",
    teacherNotes: "চট্টগ্রাম বোর্ডের প্রশ্নে শাপলা ফুলের ছবির উদ্দীপক এবং লিনিয়ার কাঠামোর চিত্র এসেছিল। চিত্র-১ এর ছবির হাইপারলিংক এবং চিত্র-২ এর কাঠামোর ব্যাখ্যা বুঝিয়ে দিন।",
    html: `
      <div class="cq-container glass-card">
        <div class="cq-stem">
          <div class="stem-badge">উদ্দীপক (চট্টগ্রাম বোর্ড ২০১৯)</div>
          <p>চিত্র-১: "This is our national flower" শিরোনামের নিচে <code>flower.jpg</code> ছবি এবং ক্লিক করলে <code>flower.com</code> এ যাওয়ার ব্যবস্থা।</p>
          <p>চিত্র-২: পেজগুলো পরপর ক্রমানুসারে তীরচিহ্ন দিয়ে যুক্ত: [Page 1] ➔ [Page 2] ➔ [Page 3]</p>
        </div>

        <div class="cq-questions-accordion">
          <div class="cq-item">
            <div class="cq-q-bar"><strong>(ক) আইপি অ্যাড্রেস কী? [১]</strong> <button class="btn-reveal" onclick="toggleCQAnswer(this)">উত্তর দেখুন</button></div>
            <div class="cq-ans-box" style="display:none;">
              <p><strong>উত্তর:</strong> ইন্টারনেটে যুক্ত প্রতিটি ডিভাইসের অদ্বিতীয় সাংখ্যিক পরিচয়পত্রকে আইপি অ্যাড্রেস বলে।</p>
            </div>
          </div>

          <div class="cq-item">
            <div class="cq-q-bar"><strong>(গ) চিত্র-১ ব্রাউজারে প্রদর্শনের জন্য প্রয়োজনীয় HTML কোড লেখ। [৩]</strong> <button class="btn-reveal" onclick="toggleCQAnswer(this)">কোড দেখুন</button></div>
            <div class="cq-ans-box" style="display:none;">
              <pre class="code-snippet"><code>&lt;h3&gt;This is our national flower&lt;/h3&gt;
&lt;a href="http://www.flower.com"&gt;
  &lt;img src="flower.jpg" alt="Water Lily" width="200" height="150"&gt;
&lt;/a&gt;</code></pre>
            </div>
          </div>

          <div class="cq-item">
            <div class="cq-q-bar"><strong>(ঘ) "চিত্র-২ এর কাঠামোটি বড় ওয়েবসাইটের জন্য উপযোগী নয়" — বিশ্লেষণ কর। [৪]</strong> <button class="btn-reveal" onclick="toggleCQAnswer(this)">ব্যাখ্যা দেখুন</button></div>
            <div class="cq-ans-box" style="display:none;">
              <p><strong>উত্তর:</strong> উদ্দীপকের চিত্র-২ হলো <strong>লিনিয়ার বা সিকোয়েন্সিয়াল কাঠামো</strong>। বড় ওয়েবসাইটে হাজার হাজার পেজ থাকে। লিনিয়ার কাঠামোতে কোনো পেজে যেতে হলে আগের সব পেজ পার হয়ে যেতে হয়। ফলে ব্যবহারকারীর প্রচুর সময় নষ্ট হয়। বড় ওয়েবসাইটের জন্য <strong>ট্রি বা হায়ারার্কিক্যাল কাঠামো</strong> সবচেয়ে উপযোগী, যেখানে সহজে ক্যাটাগরি ও সাব-ক্যাটাগরির মাধ্যমে যেকোনো পেজে সরাসরি যাওয়া যায়।</p>
            </div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 47,
    module: "Board CQ",
    category: "CQ সলভ ৩",
    title: "বোর্ড CQ সমাধান ৩ — যশোর বোর্ড ২০১৭",
    subtitle: "লিস্ট ও ফরম্যাটিং সমন্বিত বোর্ড প্রশ্ন",
    layout: "cq-interactive",
    teacherNotes: "অর্ডারড লিস্টে Available Honor's Subject এর তালিকা এবং ওয়েবপেজ ও ডোমেইনের গুরুত্ব সংক্রান্ত প্রশ্ন।",
    html: `
      <div class="cq-container glass-card">
        <div class="cq-stem">
          <div class="stem-badge">উদ্দীপক (যশোর বোর্ড ২০১৭)</div>
          <div class="mock-browser-stem">
            <h3>XYZ College, Dhaka</h3>
            <p><strong>Available Honor's Subject:</strong></p>
            <ol>
              <li>Bangla</li>
              <li>English</li>
              <li>Mathematics</li>
              <li>Accounting</li>
            </ol>
          </div>
        </div>

        <div class="cq-questions-accordion">
          <div class="cq-item">
            <div class="cq-q-bar"><strong>(ক) ওয়েবপেজ কী? [১]</strong> <button class="btn-reveal" onclick="toggleCQAnswer(this)">উত্তর দেখুন</button></div>
            <div class="cq-ans-box" style="display:none;">
              <p><strong>উত্তর:</strong> ইন্টারনেটের সাথে যুক্ত কোনো ওয়েব সার্ভারে সংরক্ষিত এইচটিএমএল লিখিত ইলেকট্রনিক ডকুমেন্টকে ওয়েবপেজ বলে।</p>
            </div>
          </div>

          <div class="cq-item">
            <div class="cq-q-bar"><strong>(গ) উদ্দীপকটি কলেজের হোমপেজে প্রদর্শনের জন্য HTML কোড লেখ। [৩]</strong> <button class="btn-reveal" onclick="toggleCQAnswer(this)">কোড দেখুন</button></div>
            <div class="cq-ans-box" style="display:none;">
              <pre class="code-snippet"><code>&lt;h2&gt;XYZ College, Dhaka&lt;/h2&gt;
&lt;p&gt;&lt;b&gt;Available Honor's Subject:&lt;/b&gt;&lt;/p&gt;
&lt;ol type="1"&gt;
  &lt;li&gt;Bangla&lt;/li&gt;
  &lt;li&gt;English&lt;/li&gt;
  &lt;li&gt;Mathematics&lt;/li&gt;
  &lt;li&gt;Accounting&lt;/li&gt;
&lt;/ol&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // ==========================================
  // MODULE 11: জ্ঞানমূলক ও অনুধাবনমূলক প্রশ্নব্যাংক
  // ==========================================
  {
    id: 48,
    module: "Question Bank",
    category: "জ্ঞানমূলক 'ক'",
    title: "বোর্ড পরীক্ষার সেরা ১০টি জ্ঞানমূলক 'ক' প্রশ্নোত্তর",
    subtitle: "১ নম্বরের জন্য যা পড়লেই কমন পাওয়া নিশ্চিত",
    layout: "content-grid",
    teacherNotes: "এই ১০টি সংজ্ঞা ছাত্রদের মুখস্থ লিখে পরীক্ষা নিতে পারেন। প্রতি বছর ঘুরিয়ে-ফিরিয়ে এই ১০টি সংজ্ঞাই আসে।",
    html: `
      <div class="qbank-grid">
        <div class="qbank-item">
          <div class="q-title">১. ওয়েব হোস্টিং কী?</div>
          <div class="q-ans">ওয়েবপেজ বা ওয়েবসাইটকে বিশ্বব্যাপী ব্যবহারের জন্য কোনো ইন্টারনেটে যুক্ত সার্ভারে স্পেস বা মেমোরি সংরক্ষণ করাকে হোস্টিং বলে।</div>
        </div>
        <div class="qbank-item">
          <div class="q-title">২. HTML কী?</div>
          <div class="q-ans">HTML হলো একটি হাইপারটেক্সট মার্কআপ ল্যাঙ্গুয়েজ, যা ওয়েবপেজের মৌলিক গঠন বা কঙ্কাল তৈরিতে ব্যবহৃত হয়।</div>
        </div>
        <div class="qbank-item">
          <div class="q-title">৩. ট্যাগ কী?</div>
          <div class="q-ans">ট্যাগ হলো এইচটিএমএল-এর কিছু সংরক্ষিত কী-ওয়ার্ড, যা &lt; &gt; অ্যাঙ্গেল ব্র্যাকেটের মধ্যে অবস্থান করে নির্দেশনা দেয়।</div>
        </div>
        <div class="qbank-item">
          <div class="q-title">৪. সার্চ ইঞ্জিন কী?</div>
          <div class="q-ans">সার্চ ইঞ্জিন হলো এমন একটি সফটওয়্যার সিস্টেম যা ইন্টারনেটের ওয়েব সার্ভারসমূহ থেকে কি-ওয়ার্ডের ভিত্তিতে তথ্য খুঁজে দেয়।</div>
        </div>
        <div class="qbank-item">
          <div class="q-title">৫. হাইপারলিংক কী?</div>
          <div class="q-ans">এক ওয়েবপেজের সাথে অন্য ওয়েবপেজ বা ডকুমেন্টের সংযোগ স্থাপনকারী ইলেকট্রনিক লিংককে হাইপারলিংক বলে।</div>
        </div>
        <div class="qbank-item">
          <div class="q-title">৬. ডোমেইন নেম কী?</div>
          <div class="q-ans">সাংখ্যিক আইপি অ্যাড্রেসের পরিবর্তে মানুষের মনে রাখার উপযোগী যে আলফানিউমেরিক নাম ব্যবহার করা হয়, তাকে ডোমেইন নেম বলে।</div>
        </div>
      </div>
    `
  },

  {
    id: 49,
    module: "Question Bank",
    category: "অনুধাবনমূলক 'খ'",
    title: "বোর্ড পরীক্ষার সেরা ৫টি অনুধাবনমূলক 'খ' প্রশ্নোত্তর",
    subtitle: "২ নম্বরের জন্য গোছানো ও আদর্শ ব্যাখ্যা",
    layout: "content-grid",
    teacherNotes: "অনুধাবনমূলক প্রশ্নে দুটি প্যারা করে লিখলে পুরো ২ নম্বর পাওয়া যায়: প্রথম প্যারায় ১ লাইনে মূল উত্তর, দ্বিতীয় প্যারায় ৩-৪ লাইনে স্পষ্ট ব্যাখ্যা।",
    html: `
      <div class="qbank-accordion">
        <div class="qa-card">
          <h4 class="text-gold">প্রশ্ন ১: "ওয়েব ব্রাউজার ও সার্চ ইঞ্জিন এক নয়" — ব্যাখ্যা কর।</h4>
          <p class="body-p"><strong>উত্তর:</strong> ওয়েব ব্রাউজার হলো ডিভাইসে ইনস্টল করা অ্যাপ্লিকেশন সফটওয়্যার যা ওয়েবপেজ প্রদর্শন করে (যেমন: Chrome)। অন্যদিকে সার্চ ইঞ্জিন হলো একটি বিশেষ ওয়েবসাইট ও সফটওয়্যার যা ইন্টারনেটের তথ্য খুঁজে দেয় (যেমন: Google)। ব্রাউজার ছাড়া সার্চ ইঞ্জিন চালানো যায় না, কিন্তু সার্চ ইঞ্জিন ছাড়াও ব্রাউজার দিয়ে যেকোনো ওয়েবসাইট দেখা যায়।</p>
        </div>

        <div class="qa-card mt-3">
          <h4 class="text-gold">প্রশ্ন ২: "IP Address এর চেয়ে Domain Name সুবিধাজনক কেন?" — ব্যাখ্যা কর।</h4>
          <p class="body-p"><strong>উত্তর:</strong> আইপি অ্যাড্রেস হলো গাণিতিক সংখ্যার সমন্বয়ে গঠিত (যেমন: 192.168.1.1), যা মনে রাখা মানুষের জন্য অত্যন্ত কঠিন। অপরদিকে ডোমেইন নেম অর্থপূর্ণ শব্দ দিয়ে গঠিত (যেমন: ictcoach.com), যা সহজে মনে থাকে। তাই ডোমেইন নেম ব্যবহার সুবিধাজনক।</p>
        </div>

        <div class="qa-card mt-3">
          <h4 class="text-gold">প্রশ্ন ৩: "কন্টেইনার ট্যাগ ও এম্পটি ট্যাগের মধ্যে মূল পার্থক্য কী?"</h4>
          <p class="body-p"><strong>উত্তর:</strong> কন্টেইনার ট্যাগের প্রারম্ভিক ট্যাগ, কন্টেন্ট এবং সমাপ্তি ট্যাগ থাকে (যেমন: &lt;p&gt;Text&lt;/p&gt;)। অন্যদিকে এম্পটি ট্যাগের কেবল শুরুর ট্যাগ থাকে, এর কোনো ক্লোজিং ট্যাগ বা বিষয়বস্তু থাকে না (যেমন: &lt;br&gt;, &lt;img&gt;)।</p>
        </div>
      </div>
    `
  },

  // ==========================================
  // MODULE 12: ইন্টারেক্টিভ বহুনির্বাচনী কুইজ (MCQ Quiz)
  // ==========================================
  {
    id: 50,
    module: "MCQ Quiz",
    category: "বোর্ড কুইজ ১",
    title: "ইন্টারেক্টিভ কুইজ: ওয়েব কনসেপ্ট ও ব্রাউজার",
    subtitle: "সঠিক উত্তরে ক্লিক করে যাচাই করুন",
    layout: "quiz-interactive",
    teacherNotes: "শিক্ষার্থীদের অপশনগুলো দেখে উত্তর দিতে বলুন। ক্লিক করলেই সবুজ/লাল আলো জ্বলবে এবং নিচের ব্যাখ্যাটি দেখা যাবে।",
    quiz: {
      question: "১. পৃথিবীর সর্বপ্রথম উদ্ভাবিত ওয়েব ব্রাউজার কোনটি?",
      options: [
        { label: "ক", text: "Google Chrome", correct: false },
        { label: "খ", text: "Mosaic", correct: false },
        { label: "গ", text: "WorldWideWeb (পরবর্তীতে Nexus)", correct: true },
        { label: "ঘ", text: "Internet Explorer", correct: false }
      ],
      explanation: "টিম বার্নার্স-লি ১৯৯০ সালে সর্বপ্রথম যে ব্রাউজারটি তৈরি করেছিলেন তার নাম ছিল 'WorldWideWeb'। আর প্রথম জনপ্রিয় গ্রাফিক্যাল ব্রাউজার ছিল 'Mosaic' (১৯৯৩)।"
    }
  },

  {
    id: 51,
    module: "MCQ Quiz",
    category: "বোর্ড কুইজ ২",
    title: "ইন্টারেক্টিভ কুইজ: আইপি অ্যাড্রেস ও ডোমেইন",
    subtitle: "বোর্ড পরীক্ষায় আসা গুরুত্বপূর্ণ প্রশ্ন",
    layout: "quiz-interactive",
    teacherNotes: "IPv4 এর মোট বিট সংখ্যা কত? এটি প্রায় প্রতি বছর বোর্ডে বা কোনো না কোনো কলেজে আসে।",
    quiz: {
      question: "২. IPv4 অ্যাড্রেস কত বিটের হয়ে থাকে?",
      options: [
        { label: "ক", text: "১৬ বিট", correct: false },
        { label: "খ", text: "৩২ বিট", correct: true },
        { label: "গ", text: "৬৪ বিট", correct: false },
        { label: "ঘ", text: "১২৮ বিট", correct: false }
      ],
      explanation: "IPv4 অ্যাড্রেসে ৪টি অক্টেট থাকে। প্রতিটি অক্টেট ৮ বিটের, সুতরাং ৪ × ৮ = ৩২ বিট। অপরদিকে IPv6 অ্যাড্রেস হলো ১২৮ বিটের।"
    }
  },

  {
    id: 52,
    module: "MCQ Quiz",
    category: "বোর্ড কুইজ ৩",
    title: "ইন্টারেক্টিভ কুইজ: এইচটিএমএল ট্যাগ ও অ্যাট্রিবিউট",
    subtitle: "ট্যাগ শনাক্তকরণ প্রশ্ন",
    layout: "quiz-interactive",
    teacherNotes: "এম্পটি ট্যাগ কোনটি? শিক্ষার্থীদের কনফিউজড না হয়ে সঠিক চিহ্নিত করতে বলুন।",
    quiz: {
      question: "৩. নিচের কোনটি একটি এম্পটি (Empty) ট্যাগ?",
      options: [
        { label: "ক", text: "<p>", correct: false },
        { label: "খ", text: "<b>", correct: false },
        { label: "গ", text: "<hr>", correct: true },
        { label: "ঘ", text: "<th>", correct: false }
      ],
      explanation: "<hr> (Horizontal Rule) একটি এম্পটি ট্যাগ, কারণ এর কোনো ক্লোজিং ট্যাগ বা মধ্যবর্তী বিষয়বস্তু থাকে না। বাকি সবগুলোই কন্টেইনার ট্যাগ।"
    }
  },

  {
    id: 53,
    module: "MCQ Quiz",
    category: "বোর্ড কুইজ ৪",
    title: "ইন্টারেক্টিভ কুইজ: টেবিল ও সেল মার্জিং",
    subtitle: "ঢাকা বোর্ড ২০২২ সালের প্রশ্ন",
    layout: "quiz-interactive",
    teacherNotes: "কলাম একত্র করার অ্যাট্রিবিউট কী? Colspan ও Rowspan নিয়ে যেন কোনো বিভ্রান্তি না থাকে।",
    quiz: {
      question: "৪. পাশাপাশি দুটি বা ততোধিক কলামকে একত্রিত করার জন্য কোন অ্যাট্রিবিউট ব্যবহৃত হয়?",
      options: [
        { label: "ক", text: "rowspan", correct: false },
        { label: "খ", text: "colspan", correct: true },
        { label: "গ", text: "cellpadding", correct: false },
        { label: "ঘ", text: "cellspacing", correct: false }
      ],
      explanation: "কলাম মার্জ করতে 'colspan' এবং সারি (রো) মার্জ করতে 'rowspan' অ্যাট্রিবিউট ব্যবহৃত হয়।"
    }
  },

  // ==========================================
  // MODULE 13: ক্লাসের সমাপ্তি ও শুভকামনা
  // ==========================================
  {
    id: 54,
    module: "Summary",
    category: "সমাপ্তি",
    title: "অধ্যায় ৪ রিভিশন চেক-লিস্ট ও শুভকামনা",
    subtitle: "বোর্ড পরীক্ষায় নিশ্চিত ১০০% প্রস্তুতির রোডম্যাপ",
    layout: "hero-title",
    teacherNotes: "ক্লাস শেষে শিক্ষার্থীদের উদ্বুদ্ধ করুন। হ্যান্ডস-অন প্র্যাকটিস করার পরামর্শ দিন এবং কোনো প্রশ্ন থাকলে জিজ্ঞেস করতে বলুন।",
    html: `
      <div class="slide-hero-badge">HSC ICT অধ্যায় ৪ সম্পূর্ণ প্রস্তুত!</div>
      <h2 class="slide-main-title">অভিনন্দন! <span class="gradient-text">Master Class</span> সমাপ্ত</h2>
      
      <div class="checklist-grid">
        <div class="check-item">✅ ওয়েবপেজ, ব্রাউজার ও সার্চ ইঞ্জিনের পার্থক্য স্পষ্ট</div>
        <div class="check-item">✅ আইপি অ্যাড্রেস ও ডোমেইন নেম সিস্টেম ধারণা প্রস্তুত</div>
        <div class="check-item">✅ ৪টি ওয়েবসাইট কাঠামোর ডায়াগ্রাম ও বৈশিষ্ট্য আয়ত্তে</div>
        <div class="check-item">✅ টেক্সট ফরম্যাটিং, হেডিং, লিস্ট ও হাইপারলিংক কোডিং ক্লিয়ার</div>
        <div class="check-item">✅ জটিল টেবিলের Colspan ও Rowspan কোড প্র্যাকটিস সম্পন্ন</div>
        <div class="check-item">✅ বিগত বছরের বোর্ড CQ ও MCQ সমাধান সম্পন্ন</div>
      </div>

      <div class="closing-banner">
        <div class="close-quote">"HTML মুখস্থ করার বিষয় নয়, নিয়ম বুঝে একবার কোড করলেই আজীবন মনে থাকবে।"</div>
        <div class="close-credit">🎓 <strong>ICT Coach — তোমার স্বপ্নজয়ের সারথি</strong></div>
      </div>
    `
  }
];
