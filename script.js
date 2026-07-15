// Bar Electrician — static site behaviour
(function(){
  'use strict';

  var WA_URL = 'https://wa.me/972502292915?text=' + encodeURIComponent('היי בר, הגעתי דרך האתר ויש לי שאלה לגבי עבודת חשמל.');

  // Populate WhatsApp links
  document.querySelectorAll('a[data-wa]').forEach(function(a){ a.href = WA_URL; });

  // Sticky header shadow on scroll
  var header = document.getElementById('header');
  function onScroll(){
    if(window.scrollY > 8) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu toggle
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('navMobile');
  btn.addEventListener('click', function(){
    var open = !nav.hidden;
    nav.hidden = open;
    btn.setAttribute('aria-expanded', String(!open));
  });
  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      nav.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Data
  var mainServices = [
    { t: 'איתור ותיקון קצרים', d: 'איתור מקור הקצר וטיפול מקצועי בתקלה כדי להחזיר את מערכת החשמל לפעילות תקינה ובטוחה.' },
    { t: 'תיקון תקלות חשמל', d: 'איתור וטיפול בתקלות חשמל בדירות, בתים פרטיים, משרדים ועסקים.' },
    { t: 'תיקון וטיפול בלוחות חשמל', d: 'איתור תקלות בלוח החשמל, החלפת רכיבים וביצוע עבודות בהתאם למצב המערכת ולצורך.' },
    { t: 'החלפת שקעים ומפסקים', d: 'תיקון והחלפה של שקעים, מפסקים ורכיבי חשמל שאינם פועלים בצורה תקינה.' },
    { t: 'התקנת נקודות חשמל', d: 'הוספה והתקנה של נקודות חשמל חדשות בהתאם לצורכי הבית, המשרד או העסק.' },
    { t: 'התקנת ותיקון תאורה', d: 'התקנה, החלפה ותיקון של גופי תאורה, נקודות מאור ופתרונות תאורה.' }
  ];
  var extraServices = [
    'איתור תקלות פחת','בדיקות מערכת חשמל','עבודות חשמל בשיפוצים','הכנת תשתיות חשמל',
    'החלפת רכיבי חשמל תקולים','פתרון בעיות עומס חשמלי','התקנת גופי תאורה','תיקוני נקודות מאור',
    'עבודות חשמל למשרדים','שירותי חשמל לעסקים','עבודות חשמל בדירות','עבודות חשמל בבתים פרטיים'
  ];
  var whyItems = [
    { t: 'חשמלאי מוסמך', d: 'עבודות חשמל דורשות ידע, הכשרה והקפדה על עבודה מקצועית ובטיחותית.' },
    { t: 'ניסיון ומקצועיות', d: 'גישה מקצועית לאיתור מקור התקלה ובחירת הפתרון המתאים בהתאם למצב.' },
    { t: 'אחריות על העבודה', d: 'עבודה יסודית עם דגש על איכות, בטיחות ושקט נפשי ללקוח.' },
    { t: 'שירות אישי ואמין', d: 'תקשורת ברורה, יחס אישי והסבר על העבודה הנדרשת.' }
  ];
  var propTypes = [
    { t: 'דירות', d: 'טיפול בתקלות חשמל, קצרים, שקעים, תאורה, לוחות חשמל ועבודות נוספות בדירות.' },
    { t: 'בתים פרטיים', d: 'פתרונות חשמל ותיקונים למערכות חשמל בבתים פרטיים בהתאם לצורך.' },
    { t: 'משרדים', d: 'טיפול בתקלות ועבודות חשמל בסביבת עבודה ובמשרדים.' },
    { t: 'עסקים וחנויות', d: 'שירותי חשמל מקצועיים לעסקים, חנויות ונכסים מסחריים בהתאם לסוג העבודה.' }
  ];
  var steps = [
    { n: '01', t: 'יוצרים קשר', d: 'מתקשרים או שולחים הודעה ב-WhatsApp.' },
    { n: '02', t: 'מסבירים מה התקלה', d: 'מתארים מה קורה וניתן לשלוח תמונה או סרטון אם זה יכול לעזור להבין את המצב.' },
    { n: '03', t: 'מבינים את הבעיה', d: 'בר בודק את הפרטים ומסביר מה הצעד הבא בהתאם לסוג התקלה.' },
    { n: '04', t: 'מטפלים בתקלה', d: 'העבודה מתבצעת בצורה מקצועית, מסודרת ובטיחותית.' }
  ];
  var faqs = [
    { q: 'האם בר הוא חשמלאי מוסמך?', a: 'כן. בר הוא חשמלאי מוסמך ומבצע עבודות ותיקוני חשמל בצורה מקצועית ובטיחותית.' },
    { q: 'באילו סוגי נכסים ניתן לקבל שירות?', a: 'השירות מתאים לדירות, בתים פרטיים, משרדים, חנויות ועסקים.' },
    { q: 'באילו תקלות ניתן לטפל?', a: 'ניתן לפנות בנוגע לקצרים, תקלות חשמל, בעיות בלוח החשמל, שקעים ומפסקים, תאורה, נקודות חשמל ועבודות חשמל נוספות.' },
    { q: 'אפשר לשלוח תמונה או סרטון של התקלה?', a: 'כן. במקרים רבים ניתן לשלוח תמונה או סרטון ב-WhatsApp כדי להסביר בצורה ברורה יותר מה קורה.' },
    { q: 'האם ניתן להזמין עבודות חשמל במהלך שיפוץ?', a: 'כן. ניתן ליצור קשר ולבדוק את סוג העבודה הנדרשת בהתאם לפרויקט ולצרכים בנכס.' },
    { q: 'איך יוצרים קשר?', a: 'ניתן ליצור קשר עם בר בטלפון 050-229-2915 או לשלוח הודעה ישירות דרך WhatsApp.' }
  ];

  function esc(s){ return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }

  // Render services
  document.getElementById('mainServices').innerHTML = mainServices.map(function(s,i){
    return '<article class="svc-card">'
      + '<div class="top"><span class="svc-icon"><svg class="i sm"><use href="#i-bolt"/></svg></span>'
      + '<span class="svc-num">0' + (i+1) + '</span></div>'
      + '<h3>' + esc(s.t) + '</h3><p>' + esc(s.d) + '</p></article>';
  }).join('');

  document.getElementById('extraServices').innerHTML = extraServices.map(function(e){
    return '<li><span class="tick"><svg class="i xxs"><use href="#i-check"/></svg></span>' + esc(e) + '</li>';
  }).join('');

  document.getElementById('whyItems').innerHTML = whyItems.map(function(i){
    return '<div class="why-card"><div class="h"><svg class="i sm"><use href="#i-check"/></svg><h3>' + esc(i.t) + '</h3></div><p>' + esc(i.d) + '</p></div>';
  }).join('');

  document.getElementById('propTypes').innerHTML = propTypes.map(function(i){
    return '<div class="prop-card"><h3>' + esc(i.t) + '</h3><p>' + esc(i.d) + '</p></div>';
  }).join('');

  document.getElementById('processSteps').innerHTML = steps.map(function(s){
    return '<div class="step"><div class="step-num">' + esc(s.n) + '</div><h3>' + esc(s.t) + '</h3><p>' + esc(s.d) + '</p></div>';
  }).join('');

  // FAQ
  var faqList = document.getElementById('faqList');
  faqList.innerHTML = faqs.map(function(f,i){
    return '<div class="faq-item' + (i===0?' open':'') + '">'
      + '<button class="faq-q" aria-expanded="' + (i===0?'true':'false') + '">'
      + '<span class="q">' + esc(f.q) + '</span>'
      + '<span class="faq-plus"><svg class="i xs"><use href="#i-plus"/></svg></span>'
      + '</button>'
      + '<div class="faq-a"><p>' + esc(f.a) + '</p></div>'
      + '</div>';
  }).join('');
  faqList.querySelectorAll('.faq-item').forEach(function(item){
    var q = item.querySelector('.faq-q');
    q.addEventListener('click', function(){
      var isOpen = item.classList.toggle('open');
      q.setAttribute('aria-expanded', String(isOpen));
    });
  });
})();
