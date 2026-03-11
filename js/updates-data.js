/**
 * =============================================
 * ARTISTRAY SALON — UPDATES DATA
 * =============================================
 * HOW TO ADD A NEW UPDATE:
 * 1. Copy the template below
 * 2. Paste it at the TOP of the `UPDATES` array
 * 3. Fill in your details
 * 4. Save the file — it will reflect on the website instantly
 *
 * TEMPLATE:
 * {
 *   id: "unique-id",
 *   date: "Month DD, YYYY",
 *   title: "Your Update Title",
 *   excerpt: "Short description (1-2 lines).",
 *   category: "Offer | New Service | Event | Product | News",
 *   image: "../images/updates/your-image.jpg",   // Add your image here
 *   link: "#"   // Optional: link to more details
 * },
 * =============================================
 */

const UPDATES = [
  {
    id: "update-1",
    date: "March 2025",
    title: "Summer Glow Package — Limited Time Offer!",
    excerpt: "Get 20% off on our full facial + hair colour combo this summer. Book before slots fill up.",
    category: "Offer",
    image: "../images/updates/update-1.jpg",
    link: "../pages/booking.html"
  },
  {
    id: "update-2",
    date: "February 2025",
    title: "New: Keratin Smoothing Treatment Now Available",
    excerpt: "Introducing professional keratin treatment for smooth, frizz-free hair. Ask us about it at your next visit.",
    category: "New Service",
    image: "../images/updates/update-2.jpg",
    link: "../pages/services.html"
  },
  {
    id: "update-3",
    date: "January 2025",
    title: "Bridal Season Bookings Now Open",
    excerpt: "Planning your big day? Our bridal packages are now open for booking. Early birds get a complimentary hair trial.",
    category: "Event",
    image: "../images/updates/update-3.jpg",
    link: "../pages/booking.html"
  },
  {
    id: "update-4",
    date: "December 2024",
    title: "New Beauty Products Now In Store",
    excerpt: "We've added a fresh range of women's beauty products. Come in and explore our curated selection.",
    category: "Product",
    image: "../images/updates/update-4.jpg",
    link: "../pages/products.html"
  },
  {
    id: "update-5",
    date: "November 2024",
    title: "Extended Hours for the Festive Season",
    excerpt: "During Navratri & Diwali, we'll be open from 9 AM to 9 PM. No extra booking required.",
    category: "News",
    image: "../images/updates/update-5.jpg",
    link: "#"
  },
  {
    id: "update-6",
    date: "October 2024",
    title: "Grand Opening — Artistray Salon is Live!",
    excerpt: "We're thrilled to open our doors at F-105, Lotus Elite, Gotri Road, Vadodara. Thank you for your love and support!",
    category: "News",
    image: "../images/updates/update-6.jpg",
    link: "../pages/about.html"
  }
];

// =============================================
// DO NOT EDIT BELOW THIS LINE
// =============================================

function renderUpdates(containerId, limit) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const items = limit ? UPDATES.slice(0, limit) : UPDATES;
  container.innerHTML = '';
  items.forEach(update => {
    const categoryColor = {
      'Offer': '#B8965A',
      'New Service': '#6B9E78',
      'Event': '#9B7EB8',
      'Product': '#D47B6A',
      'News': '#5B8FBE'
    }[update.category] || '#B8965A';

    container.innerHTML += `
      <div class="update-card">
        <div class="update-img">
          <div class="img-placeholder-box">
            <img src="${update.image}" alt="${update.title}" onerror="this.parentElement.classList.add('placeholder-active')"/>
            <div class="placeholder-label">📸 Update Photo</div>
          </div>
        </div>
        <div class="update-body">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
            <span style="background:${categoryColor};color:#fff;font-size:0.65rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;padding:3px 10px;border-radius:100px;">${update.category}</span>
            <span class="update-date">${update.date}</span>
          </div>
          <div class="update-title">${update.title}</div>
          <div class="update-excerpt">${update.excerpt}</div>
          ${update.link && update.link !== '#' ? `<a href="${update.link}" style="display:inline-block;margin-top:12px;font-size:0.78rem;color:#B8965A;letter-spacing:0.08em;text-transform:uppercase;font-weight:500;">Learn More →</a>` : ''}
        </div>
      </div>
    `;
  });
}
