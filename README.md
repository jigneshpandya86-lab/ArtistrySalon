# Artistray Salon Website

**F-105, 106 Lotus Elite, Gotri – Sevasi Rd, Vadodara, Gujarat 390021**  
📞 +91 95108 81863 | ⏰ 10:00 AM – 08:00 PM

---

## 🌐 How to Deploy on GitHub Pages

1. Create a new GitHub repository (e.g. `artistray-salon`)
2. Upload all files from this folder into the repo
3. Go to **Settings → Pages**
4. Under "Source", select `main` branch → `/ (root)` → Save
5. Your site will be live at: `https://yourusername.github.io/artistray-salon/`

---

## 📁 Folder Structure

```
artistray-salon/
├── index.html              ← Home page
├── css/
│   ├── style.css           ← Main stylesheet
│   └── pages.css           ← Inner page styles
├── js/
│   ├── main.js             ← Core interactions
│   └── updates-data.js     ← ⭐ EDIT THIS for new updates
├── pages/
│   ├── services.html       ← All services
│   ├── products.html       ← Products + Order via WhatsApp
│   ├── gallery.html        ← Photo gallery
│   ├── booking.html        ← Appointment booking
│   ├── updates.html        ← Latest offers & news
│   └── about.html          ← About & team
└── images/
    ├── hero/               ← Banner images
    ├── services/           ← Service photos
    ├── products/           ← Product photos
    ├── gallery/            ← Gallery photos
    ├── team/               ← Team/owner photos
    └── updates/            ← Update post images
```

---

## 📸 Adding Your Photos

All image placeholders are clearly labeled on the website. To replace them:

1. Add your photo files to the correct folder inside `images/`
2. Make sure the filename matches what's in the HTML (e.g. `hero-main.jpg`)
3. Push to GitHub — the site will auto-update

### Recommended Photo Sizes:
| Location | Recommended Size |
|---|---|
| Hero banners | 1920×1080px |
| Service/gallery photos | 800×600px |
| Product photos | 600×600px (square) |
| Team photos | 500×600px (portrait) |
| Update post photos | 800×500px |

---

## ✏️ How to Add New Updates/Offers

Open `js/updates-data.js` and add a new entry at the TOP of the `UPDATES` array:

```js
{
  id: "update-7",
  date: "April 2025",
  title: "Your Offer Title",
  excerpt: "Short description of the offer.",
  category: "Offer",       // Options: Offer | New Service | Event | Product | News
  image: "../images/updates/your-image.jpg",
  link: "../pages/booking.html"
},
```

Save → push to GitHub → it appears on the website automatically! ✅

---

## 📦 How Product Orders Work

Each product has an **"Order via WhatsApp"** button.  
When clicked, it opens WhatsApp with a pre-filled message to **+91 95108 81863**.

To add a new product, copy an existing product block in `pages/products.html` and update:
- The placeholder label
- The product name (in `onclick="handleOrder('Product Name')"`)
- The image path

---

## 📅 Booking System

Appointments are handled via WhatsApp. When a client fills the booking form:
1. They click "Send Booking Request via WhatsApp"
2. Their details (name, service, date, time) are pre-filled into a WhatsApp message
3. Message is sent directly to **+91 95108 81863**

---

## 🖌️ Customization

| What to change | Where |
|---|---|
| Colors, fonts | `css/style.css` → `:root` variables |
| Business hours | Search "10:00 AM" in HTML files |
| Phone number | Search "9510881863" in all files |
| Address | Search "Lotus Elite" in all files |
| Social media links | `index.html` → footer `.social-links` |

---

*Built with ❤️ for Artistray Salon, Vadodara*
