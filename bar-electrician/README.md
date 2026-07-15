# בר החשמלאי — אתר סטטי

אתר תדמית לעסק "בר החשמלאי" — HTML/CSS/JS טהור, ללא תלויות בבנייה.

## מבנה
- `index.html` — עמוד ראשי (שורש)
- `style.css` — עיצוב מלא
- `script.js` — לוגיקה (תפריט מובייל, FAQ, קישורי WhatsApp)
- `assets/` — תמונות (hero + why)
- `.nojekyll` — מבטל עיבוד Jekyll ב-GitHub Pages

## בדיקה מקומית
פשוט לחצו פעמיים על `index.html`, או:
```bash
python3 -m http.server 8000
```

## העלאה ל-GitHub Pages
1. צרו repository חדש (למשל `bar-electrician`).
2. העלו את כל התוכן של תיקייה זו לשורש ה-repository.
3. Settings → Pages → Deploy from a branch → `main` / `root` → Save.
4. לאחר דקה-שתיים האתר יעלה בכתובת: `https://<username>.github.io/<repo>/`

כל הנתיבים יחסיים (`./assets/...`) ולכן האתר יעבוד גם בשורש הדומיין וגם בתת-נתיב.

## פרטי קשר בקוד
- טלפון: `tel:0502292915`
- WhatsApp: `https://wa.me/972502292915`

לעדכון: חפשו והחליפו בקבצים `index.html` ו-`script.js`.
