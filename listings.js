// listings.js

// Sample data: service providers by category
const providers = {
  "makeup-artists": [
    { name: "Amina Beauty", phone: "0712345678", location: "Nairobi" },
    { name: "Lilian Makeup Studio", phone: "0723456789", location: "Mombasa" },
  ],
  plumbers: [
    { name: "Kwame Plumbing", phone: "0700123456", location: "Nairobi" },
    { name: "Peter's Pipes", phone: "0734567890", location: "Kisumu" },
  ],
  photographers: [
    { name: "FlashPro Studios", phone: "0711122233", location: "Nairobi" },
    { name: "Moments Captured", phone: "0722233344", location: "Nakuru" },
  ],
  "graphic-designers": [
    { name: "Creative Minds", phone: "0700555666", location: "Nairobi" },
    { name: "Design Hub", phone: "0711666777", location: "Eldoret" },
  ],
  tutors: [
    { name: "Maths with Jane", phone: "0700999888", location: "Nairobi" },
    { name: "Science Tutors Kenya", phone: "0720888777", location: "Thika" },
  ],
  cleaners: [
    { name: "Sparkle Cleaners", phone: "0712333444", location: "Nairobi" },
    { name: "Fresh & Clean", phone: "0733444555", location: "Nairobi" },
  ],
  electricians: [
    { name: "Bright Sparks", phone: "0705666777", location: "Nairobi" },
    { name: "Electric Pros", phone: "0725666777", location: "Nakuru" },
  ],
  hairdressers: [
    { name: "Glamour Hair", phone: "0711444555", location: "Mombasa" },
    { name: "Style Studio", phone: "0721444666", location: "Nairobi" },
  ],
};

// Helper: Get URL parameter
function getCategoryFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("category");
}

// Helper: Capitalize and format category name nicely
function formatCategoryName(cat) {
  if (!cat) return "";
  return cat
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Render listings based on category
function renderListings(category) {
  const container = document.getElementById("listings-container");
  container.innerHTML = ""; // Clear previous

  const list = providers[category];

  if (!list || list.length === 0) {
    container.innerHTML = `<p>No service providers found for "${formatCategoryName(category)}".</p>`;
    return;
  }

  list.forEach((provider) => {
    const card = document.createElement("div");
    card.className = "provider-card";
    card.innerHTML = `
      <h3>${provider.name}</h3>
      <p><strong>Phone:</strong> ${provider.phone}</p>
      <p><strong>Location:</strong> ${provider.location}</p>
    `;
    container.appendChild(card);
  });
}

function init() {
  const category = getCategoryFromUrl();

  // Set the page title heading
  const titleEl = document.getElementById("category-title");
  titleEl.textContent = category
    ? `Service Providers: ${formatCategoryName(category)}`
    : "Service Providers";

  // Render providers for this category
  renderListings(category);
}

// Run after DOM loads
document.addEventListener("DOMContentLoaded", init);
