/*
=========================================
  EXPLORE INCREDIBLE INDIA - JAVASCRIPT
  Premium Client-Side Logic & Integrations
=========================================
*/

// Safeguard for pages that do not load packages-data.js
if (typeof tourPackagesData === 'undefined') {
  window.tourPackagesData = {};
}

// Dynamically load EmailJS SDK
(function() {
  const s = document.createElement('script');
  s.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
  s.onload = function() {
    // Initializing with test key. Swap with your EmailJS Public Key.
    emailjs.init("user_mock_public_key_123");
  };
  document.head.appendChild(s);
})();


document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initThemeToggle();
  initStickyNavbar();
  initScrollProgress();
  initCounters();
  initAiPlanner();
  initDestinationFilters();
  initGalleryLightbox();
  
  // Custom Upgraded Features
  initContactForm();
  initBookingForm();
  initPackagesFilteringAndSorting();
  initPackagesComparison();
  initPackageDetailsLoader();
  highlightActiveMenu();
});

// =========================================
// 1. Preloader Screen
// =========================================
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    });
    // Fallback if load event already fired or delayed
    setTimeout(() => {
      if (preloader.style.display !== 'none') {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }
    }, 2000);
  }
}

// =========================================
// 2. Dark/Light Theme Toggle
// =========================================
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;
  
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle i');
  if (icon) {
    if (theme === 'light') {
      icon.className = 'fas fa-moon';
    } else {
      icon.className = 'fas fa-sun';
    }
  }
}

// =========================================
// 3. Sticky Navbar & Back to Top Button
// =========================================
function initStickyNavbar() {
  const navbar = document.querySelector('.navbar-custom');
  const backToTopBtn = document.getElementById('back-to-top');

  // Trigger on load in case page starts scrolled
  if (window.scrollY > 50) {
    if (navbar) navbar.classList.add('scrolled');
    if (backToTopBtn) backToTopBtn.classList.add('show');
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      if (navbar) navbar.classList.add('scrolled');
      if (backToTopBtn) backToTopBtn.classList.add('show');
    } else {
      if (navbar) navbar.classList.remove('scrolled');
      if (backToTopBtn) backToTopBtn.classList.remove('show');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// =========================================
// 4. Scroll Progress Bar
// =========================================
function initScrollProgress() {
  const scrollProgress = document.getElementById('scroll-progress');
  if (!scrollProgress) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const percentage = (window.scrollY / totalHeight) * 100;
      scrollProgress.style.width = percentage + '%';
    }
  });
}

// =========================================
// 5. Statistics Counters
// =========================================
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  if (counters.length === 0) return;

  const countUp = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    const suffix = counter.getAttribute('data-suffix') || '';
    let count = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // ~60fps

    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count).toLocaleString() + suffix;
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target.toLocaleString() + suffix;
      }
    };
    updateCount();
  };

  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
}

// =========================================
// 6. Testimonials & Destinations Swipers
// =========================================
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightbox-modal');
  
  if (galleryItems.length === 0 || !lightboxModal) return;

  const lightboxImg = lightboxModal.querySelector('.lightbox-img');
  const lightboxCaption = lightboxModal.querySelector('.lightbox-caption');
  const closeBtn = lightboxModal.querySelector('.lightbox-close');
  const prevBtn = lightboxModal.querySelector('.lightbox-prev');
  const nextBtn = lightboxModal.querySelector('.lightbox-next');

  let currentIndex = 0;
  let visibleImages = [];

  const getVisibleImages = () => {
    return Array.from(galleryItems).filter(item => {
      const parentCol = item.closest('.gallery-col');
      return parentCol ? parentCol.style.display !== 'none' : true;
    });
  };

  const updateLightboxImage = (index) => {
    if (index < 0 || index >= visibleImages.length) return;
    currentIndex = index;
    const img = visibleImages[currentIndex].querySelector('.gallery-img');
    const title = visibleImages[currentIndex].querySelector('.gallery-item-title').textContent;
    
    lightboxImg.src = img.src;
    lightboxCaption.textContent = title;
  };

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      visibleImages = getVisibleImages();
      currentIndex = visibleImages.indexOf(item);
      
      updateLightboxImage(currentIndex);
      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  };
  
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      let prevIndex = currentIndex - 1;
      if (prevIndex < 0) prevIndex = visibleImages.length - 1;
      updateLightboxImage(prevIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      let nextIndex = currentIndex + 1;
      if (nextIndex >= visibleImages.length) nextIndex = 0;
      updateLightboxImage(nextIndex);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
  });

  // Category Filtering for Gallery
  const catBtns = document.querySelectorAll('.gallery-cat-btn');
  const galleryCols = document.querySelectorAll('.gallery-col');

  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryCols.forEach(col => {
        const itemCat = col.querySelector('.gallery-item').getAttribute('data-category');
        if (filterValue === 'all' || itemCat === filterValue) {
          col.style.display = 'block';
          col.classList.add('aos-animate');
        } else {
          col.style.display = 'none';
        }
      });
    });
  });
}

// =========================================
// 7. AI Trip Planner Generator
// =========================================
function initAiPlanner() {
  const form = document.getElementById('ai-planner-form');
  const resultDiv = document.getElementById('ai-result');
  if (!form || !resultDiv) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const startLoc = document.getElementById('start-location').value;
    const preferredDest = document.getElementById('preferred-destination').value;
    const budget = document.getElementById('trip-budget').value;
    const days = parseInt(document.getElementById('trip-days').value, 10);
    const travelType = document.getElementById('travel-type').value;

    if (!startLoc || !preferredDest || !budget || !days || !travelType) {
      alert('Please fill out all the fields to generate your trip.');
      return;
    }

    resultDiv.innerHTML = `
      <div class="text-center py-5">
        <div class="spinner-border text-warning mb-3" role="status"></div>
        <p class="font-serif text-gold text-lg">Designing Your Luxurious Itinerary using AI...</p>
        <span class="text-muted">Optimizing locations, routes, and hotel reservations...</span>
      </div>
    `;
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    setTimeout(() => {
      const plan = generateItinerary(startLoc, preferredDest, budget, days, travelType);
      
      resultDiv.innerHTML = `
        <div class="ai-result-card glass-panel text-start p-4 rounded-3" data-aos="fade-up">
          <div class="ai-result-header border-bottom border-secondary pb-3 mb-3">
            <h3 class="font-serif text-gold mb-2"><i class="fas fa-magic me-2"></i>AI Generated Premium Plan</h3>
            <h4 class="mb-0 text-white">${startLoc} to ${plan.destName} (${plan.days} Days / ${plan.days - 1} Nights)</h4>
            <span class="badge bg-gold text-dark mt-2">${travelType} Itinerary</span>
          </div>
          
          <div class="ai-result-meta row g-2 mb-4">
            <div class="col-sm-6 text-white"><i class="fas fa-wallet text-gold me-2"></i>Budget Tier: <strong>${budget}</strong></div>
            <div class="col-sm-6 text-white"><i class="fas fa-tag text-gold me-2"></i>Est. Cost: <strong>${plan.cost}</strong></div>
            <div class="col-sm-6 text-white"><i class="fas fa-calendar-alt text-gold me-2"></i>Best Time: <strong>${plan.bestTime}</strong></div>
            <div class="col-sm-6 text-white"><i class="fas fa-hotel text-gold me-2"></i>Hotel Category: <strong>${plan.hotels}</strong></div>
          </div>

          <div class="mb-4">
            <h5 class="text-gold mb-3 font-serif"><i class="fas fa-route me-2"></i>Day-by-Day Customized Experience</h5>
            <div class="itinerary-days-list">
              ${plan.itinerary.map((dayText, i) => `
                <div class="itinerary-day border-start border-gold ps-3 pb-3 mb-2" style="position: relative;">
                  <div class="itinerary-day-bullet bg-gold" style="width:10px; height:10px; border-radius:50%; position:absolute; left:-6px; top:6px;"></div>
                  <div class="itinerary-day-title text-white fw-bold">Day ${i + 1}: ${dayText.title}</div>
                  <p class="text-secondary mb-0 small">${dayText.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
          
          <div class="border-top border-secondary pt-3 mt-4 d-flex justify-content-between align-items-center flex-wrap gap-3">
            <span class="text-secondary small"><i class="fas fa-info-circle me-1 text-gold"></i>Includes VIP Private Transit and Guided Site Tours.</span>
            <a href="booking.html?package=Custom Itinerary&destination=${encodeURIComponent(plan.destName)}&requirements=AI Generated Plan: ${encodeURIComponent(plan.destName)} for ${plan.days} days." class="btn btn-premium btn-sm">Book This Custom Trip</a>
          </div>
        </div>
      `;
      
      resultDiv.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  });
}

function generateItinerary(start, dest, budget, days, type) {
  let destName = dest;
  let bestTime = "October to March";
  let cost = "₹35,000 per person";
  let hotels = "4-Star Boutique Hotels";
  let itinerary = [];

  if (budget === "Luxury") {
    cost = "₹75,000 - ₹1,20,000 per person";
    hotels = "5-Star Heritage Palaces (Taj / Oberoi)";
  } else if (budget === "Mid-Range") {
    cost = "₹40,000 - ₹65,000 per person";
    hotels = "4-Star Premium Resorts";
  } else {
    cost = "₹25,000 - ₹38,000 per person";
    hotels = "3-Star Deluxe Heritage Stays";
  }

  if (dest.toLowerCase().includes("rajasthan") || dest.toLowerCase().includes("jaipur")) {
    destName = "Jaipur & Udaipur (Royal Rajasthan)";
    bestTime = "November to February";
    itinerary = [
      { title: "Arrival in the Pink City", desc: "VIP reception at Jaipur Airport. Transfer to your premium heritage hotel. In the evening, enjoy a candle-lit dinner at Chokhi Dhani showcasing Rajasthani folk dances and local cuisines." },
      { title: "Explore Forts & Palaces", desc: "Visit the Amber Fort with an elephant/jeep ride, stop for photographs at Jal Mahal (Water Palace), explore Hawa Mahal (Palace of Winds), and view the astronomical instruments at Jantar Mantar." },
      { title: "Journey to Udaipur", desc: "Private luxury transfer from Jaipur to Udaipur. Stop en route to explore Chittorgarh Fort, a UNESCO World Heritage Site reflecting legendary Rajput valor. Check in to your lakeside resort." },
      { title: "The City of Lakes", desc: "Visit the spectacular City Palace complex and Jagdish Temple. In the afternoon, enjoy a private royal solar-boat cruise on Lake Pichola, visiting Jag Mandir Island Palace." },
      { title: "Departure with Royal Memories", desc: "Visit Saheliyon-ki-Bari (Courtyard of Maidens) and vintage car museum. Private transfer to Udaipur Airport for your return flight." }
    ];
  } else if (dest.toLowerCase().includes("kerala") || dest.toLowerCase().includes("munnar")) {
    destName = "Kochi, Munnar & Alleppey (God's Own Country)";
    bestTime = "September to March";
    itinerary = [
      { title: "Arrival in Kochi & Heritage Sightseeing", desc: "Arrive at Kochi. Tour Fort Kochi, view Chinese Fishing Nets, visit St. Francis Church and the Dutch Palace. Evening Kathakali dance performance." },
      { title: "Scenic Drive to Munnar Tea Hills", desc: "Travel to Munnar, driving through scenic valleys, pine forests, and Cheeyappara Waterfalls. Check in to your luxury tea plantation resort." },
      { title: "Munnar Tea Estate Exploration", desc: "Explore Eravikulam National Park to spot the Nilgiri Tahr, visit the Tea Museum, and enjoy panoramic views from Top Station and Echo Point." },
      { title: "Luxury Alleppey Houseboat Cruise", desc: "Drive to Alleppey. Board your private luxury floating houseboat. Cruise along scenic coconut-fringed backwaters. Full board meals included on-deck." },
      { title: "Departure via Kochi", desc: "Enjoy breakfast on the backwaters. Private AC transfer back to Kochi Airport for departure." }
    ];
  } else if (dest.toLowerCase().includes("kashmir") || dest.toLowerCase().includes("srinagar")) {
    destName = "Srinagar & Gulmarg (Kashmir Delight)";
    bestTime = "April to September (Summer) or Dec to Feb (Snow)";
    itinerary = [
      { title: "Welcome to Srinagar Shikara Ride", desc: "Arrive at Srinagar. Check in to a premium luxury wooden Houseboat on Dal Lake. Enjoy a romantic sunset Shikara ride across floating gardens." },
      { title: "Mughal Gardens Tour", desc: "Tour the beautiful Shalimar Bagh, Nishat Bagh (Garden of Joy), and Chashme Shahi. Enjoy lunch overlooking the Zabarwan mountain range." },
      { title: "Meadow of Flowers - Gulmarg", desc: "Drive to Gulmarg. Ride the famous Gondola Cable Car (Phase 1 & 2) up to 14,000 feet. Experience walking on snow and skiing slopes." },
      { title: "Valley of Shepherds - Pahalgam", desc: "Drive to Pahalgam. En route visit saffron fields and Avantipura ruins. Visit Betaab Valley, Aru Valley, and enjoy pony riding near Lidder River." },
      { title: "Departure", desc: "Check out from hotel, shop for premium Pashmina shawls and walnuts. Private transfer to Srinagar Airport." }
    ];
  } else if (dest.toLowerCase().includes("goa") || dest.toLowerCase().includes("beach")) {
    destName = "Goa Luxury Escape";
    bestTime = "November to April";
    itinerary = [
      { title: "Arrival in North Goa Resort", desc: "Arrive in Goa. Private luxury sedan transfer to your beachfront boutique resort. Spend the evening relaxing at Baga beach or dining at a shack." },
      { title: "Heritage Latin Quarter & Spice Plantation", desc: "Take a walking tour of Fontainhas (Latin Quarter in Panaji), visit the Basilica of Bom Jesus. Enjoy a traditional Goan buffet lunch at a Spice Plantation." },
      { title: "Water Sports & Yacht Cruise", desc: "Enjoy scuba diving, parasailing, and jet ski rides at Calangute. In the evening, charter a private luxury yacht cruise on Mandovi River with champagne." },
      { title: "South Goa Scenic Beaches", desc: "Relax at Palolem Beach, watch the sunset at Cabo de Rama Fort, and explore the gorgeous architectural heritage of Portuguese mansions." },
      { title: "Departure", desc: "Morning spa treatment at resort. Check out and private transfer to Dabolim/Mopa airport." }
    ];
  } else {
    destName = "Delhi & Agra (Golden Triangle)";
    bestTime = "October to April";
    itinerary = [
      { title: "Imperial Delhi Tour", desc: "VIP pick-up. Visit Qutub Minar, Humayun's Tomb, and drive past India Gate and Rashtrapati Bhavan. Evening dinner at Connaught Place." },
      { title: "Express Transit to Agra & Fort Tour", desc: "Drive to Agra via Yamuna Expressway. Check in at your luxury hotel. Explore the majestic red sandstone walls of Agra Fort." },
      { title: "Sunrise over the Taj Mahal", desc: "Early morning guided tour of the iconic Taj Mahal during sunrise. Return to hotel for breakfast, followed by shopping for marble handicrafts." },
      { title: "Fatehpur Sikri & Return", desc: "Explore the ghost city of Emperor Akbar - Fatehpur Sikri and Buland Darwaza. Drive back to Delhi." },
      { title: "Departure", desc: "Shop at Chandni Chowk for spices and traditional clothing. Transfer to Indira Gandhi International Airport." }
    ];
  }

  if (days < itinerary.length) {
    itinerary = itinerary.slice(0, days);
  } else if (days > itinerary.length) {
    const diff = days - itinerary.length;
    for (let i = 0; i < diff; i++) {
      itinerary.push({
        title: `Extended Exploration & Leisure`,
        desc: "Relax in your premium resort, book an ayurvedic spa massage, explore local markets for handicrafts, or organize a candle-lit culinary experience."
      });
    }
  }

  return { destName, bestTime, cost, hotels, days, itinerary };
}

// =========================================
// 8. Destinations Page Filters & Search
// =========================================
function initDestinationFilters() {
  const searchInput = document.getElementById('dest-search');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const destCards = document.querySelectorAll('.destination-card-item');

  if (destCards.length === 0) return;

  let activeCategory = 'all';
  let searchQuery = '';

  const filterCards = () => {
    destCards.forEach(card => {
      const title = card.querySelector('.dest-title').textContent.toLowerCase();
      const desc = card.querySelector('.dest-desc').textContent.toLowerCase();
      const category = card.getAttribute('data-category');

      const matchesSearch = title.includes(searchQuery) || desc.includes(searchQuery);
      const matchesCategory = activeCategory === 'all' || category === activeCategory;

      if (matchesSearch && matchesCategory) {
        card.style.display = 'block';
        card.classList.add('aos-animate');
      } else {
        card.style.display = 'none';
      }
    });
  };

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterCards();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter');
      filterCards();
    });
  });
}

// ==========================================================================
// 9. UPGRADED: Contact Form Validation (contact.html)
// ==========================================================================
function initContactForm() {
  const form = document.getElementById('contact-support-form');
  const toast = document.getElementById('contact-success-toast');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Reset validations
    form.classList.remove('was-validated');
    
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    
    // Check validation rules
    let isValid = true;
    
    if (!name) {
      isValid = false;
      document.getElementById('contact-name').classList.add('is-invalid');
    } else {
      document.getElementById('contact-name').classList.remove('is-invalid');
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      isValid = false;
      document.getElementById('contact-email').classList.add('is-invalid');
    } else {
      document.getElementById('contact-email').classList.remove('is-invalid');
    }
    
    if (!subject) {
      isValid = false;
      document.getElementById('contact-subject').classList.add('is-invalid');
    } else {
      document.getElementById('contact-subject').classList.remove('is-invalid');
    }
    
    if (!message) {
      isValid = false;
      document.getElementById('contact-message').classList.add('is-invalid');
    } else {
      document.getElementById('contact-message').classList.remove('is-invalid');
    }
    
    if (!isValid) {
      form.classList.add('was-validated');
      return;
    }
    
    // Trigger Success Toast
    if (toast) {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 5000);
    }
    
    form.reset();
    form.classList.remove('was-validated');
  });
}

// ==========================================================================
// 10. UPGRADED: Booking Form Validation & WhatsApp Integration (booking.html)
// ==========================================================================
function initBookingForm() {
  const form = document.getElementById('tour-booking-form');
  const step1 = document.getElementById('booking-step-1');
  const step2 = document.getElementById('booking-step-2');
  const ind1 = document.getElementById('step-indicator-1');
  const ind2 = document.getElementById('step-indicator-2');
  const successModal = document.getElementById('booking-success-modal');
  
  if (!form) return;
  
  const proceedBtn = document.getElementById('proceed-to-summary-btn');
  const editBtn = document.getElementById('edit-booking-btn');
  const confirmBtn = document.getElementById('confirm-booking-btn');
  
  // Prefill details from URL query params
  const urlParams = new URLSearchParams(window.location.search);
  const destParam = urlParams.get('destination');
  const pkgParam = urlParams.get('package');
  const reqsParam = urlParams.get('requirements');
  
  if (destParam) {
    const destSelect = document.getElementById('book-destination');
    if (destSelect) {
      // Find matching option text or value
      for (let opt of destSelect.options) {
        if (opt.value === destParam || opt.text.includes(destParam)) {
          destSelect.value = opt.value;
          break;
        }
      }
    }
  }
  if (pkgParam) {
    const pkgSelect = document.getElementById('book-package');
    if (pkgSelect) {
      for (let opt of pkgSelect.options) {
        if (opt.value === pkgParam || opt.text.includes(pkgParam)) {
          pkgSelect.value = opt.value;
          break;
        }
      }
    }
  }
  if (reqsParam) {
    const reqsArea = document.getElementById('book-requirements');
    if (reqsArea) reqsArea.value = decodeURIComponent(reqsParam);
  }

  // Set minimum date to today
  const dateInput = document.getElementById('book-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }
  
  // Step 1 -> Step 2 transition
  if (proceedBtn) {
    proceedBtn.addEventListener('click', () => {
      form.classList.remove('was-validated');
      
      const name = document.getElementById('book-name').value.trim();
      const phone = document.getElementById('book-phone').value.trim();
      const email = document.getElementById('book-email').value.trim();
      const dest = document.getElementById('book-destination').value;
      const pkg = document.getElementById('book-package').value;
      const date = document.getElementById('book-date').value;
      const travelers = parseInt(document.getElementById('book-travelers').value, 10);
      const budget = document.getElementById('book-budget').value;
      const requirements = document.getElementById('book-requirements').value.trim();
      
      let isValid = true;
      
      // Name
      if (!name) {
        isValid = false;
        document.getElementById('book-name').classList.add('is-invalid');
      } else {
        document.getElementById('book-name').classList.remove('is-invalid');
      }
      
      // Phone (regex 10 digits)
      const phoneRegex = /^[0-9]{10}$/;
      if (!phone || !phoneRegex.test(phone)) {
        isValid = false;
        document.getElementById('book-phone').classList.add('is-invalid');
      } else {
        document.getElementById('book-phone').classList.remove('is-invalid');
      }
      
      // Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        isValid = false;
        document.getElementById('book-email').classList.add('is-invalid');
      } else {
        document.getElementById('book-email').classList.remove('is-invalid');
      }
      
      // Dropdowns
      if (!dest) {
        isValid = false;
        document.getElementById('book-destination').classList.add('is-invalid');
      } else {
        document.getElementById('book-destination').classList.remove('is-invalid');
      }
      
      if (!pkg) {
        isValid = false;
        document.getElementById('book-package').classList.add('is-invalid');
      } else {
        document.getElementById('book-package').classList.remove('is-invalid');
      }
      
      // Date
      if (!date) {
        isValid = false;
        document.getElementById('book-date').classList.add('is-invalid');
      } else {
        document.getElementById('book-date').classList.remove('is-invalid');
      }
      
      // Travelers
      if (isNaN(travelers) || travelers < 1 || travelers > 50) {
        isValid = false;
        document.getElementById('book-travelers').classList.add('is-invalid');
      } else {
        document.getElementById('book-travelers').classList.remove('is-invalid');
      }
      
      // Budget
      if (!budget) {
        isValid = false;
        document.getElementById('book-budget').classList.add('is-invalid');
      } else {
        document.getElementById('book-budget').classList.remove('is-invalid');
      }
      
      if (!isValid) {
        form.classList.add('was-validated');
        return;
      }
      
      // Populate Summary Receipt fields
      document.getElementById('receipt-id').innerText = 'ID: CP-' + Math.floor(100000 + Math.random() * 900000);
      document.getElementById('summary-name').innerText = name;
      document.getElementById('summary-contact').innerText = `${phone} | ${email}`;
      document.getElementById('summary-dest').innerText = dest;
      document.getElementById('summary-package').innerText = pkg;
      document.getElementById('summary-date').innerText = date;
      document.getElementById('summary-travelers').innerText = `${travelers} Person(s)`;
      document.getElementById('summary-budget').innerText = budget;
      document.getElementById('summary-requirements').innerText = requirements || 'None specified';
      
      // Swap panel view
      step1.style.display = 'none';
      step2.style.display = 'block';
      if (ind1) ind1.classList.remove('active');
      if (ind2) ind2.classList.add('active');
      
      window.scrollTo({ top: 200, behavior: 'smooth' });
    });
  }
  
  // Step 2 Edit Button
  if (editBtn) {
    editBtn.addEventListener('click', () => {
      step2.style.display = 'none';
      step1.style.display = 'block';
      if (ind2) ind2.classList.remove('active');
      if (ind1) ind1.classList.add('active');
      window.scrollTo({ top: 200, behavior: 'smooth' });
    });
  }
  
  // Step 2 Confirm Submit (WhatsApp Redirect)
  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      const name = document.getElementById('book-name').value;
      const phone = document.getElementById('book-phone').value;
      const email = document.getElementById('book-email').value;
      const dest = document.getElementById('book-destination').value;
      const pkg = document.getElementById('book-package').value;
      const date = document.getElementById('book-date').value;
      const travelers = document.getElementById('book-travelers').value;
      const budget = document.getElementById('book-budget').value;
      const requirements = document.getElementById('book-requirements').value.trim() || 'None';
      const receiptIdText = document.getElementById('receipt-id').innerText;
      const bookingId = receiptIdText.replace('ID: ', '').trim();
      
      // 1. Save booking to local database (localStorage)
      const bookingObject = {
        id: bookingId,
        name: name,
        phone: phone,
        email: email,
        destination: dest,
        package: pkg,
        date: date,
        travelers: travelers,
        budget: budget,
        requirements: requirements,
        status: "Pending",
        timestamp: new Date().toLocaleString()
      };
      
      const existingStr = localStorage.getItem('incredible_india_bookings') || '[]';
      const existing = JSON.parse(existingStr);
      existing.push(bookingObject);
      localStorage.setItem('incredible_india_bookings', JSON.stringify(existing));

      // Firebase Firestore Integration Hook:
      /*
      db.collection("bookings").doc(bookingObject.id).set(bookingObject)
        .then(() => console.log("Firestore cloud sync successful"))
        .catch(err => console.error("Firestore cloud sync failed: ", err));
      */

      // 2. Send Customer & Admin Emails via EmailJS
      if (typeof emailjs !== 'undefined') {
        // Send customer confirmation
        emailjs.send("service_travel", "template_customer", {
          booking_id: bookingObject.id,
          customer_name: name,
          package_name: pkg,
          destination: dest,
          travel_date: date,
          travelers: travelers,
          budget: budget,
          requirements: requirements,
          customer_email: email,
          whatsapp_number: "+919876543210"
        }).then(
          (res) => console.log("Customer email sent successfully", res.status, res.text),
          (err) => console.error("Customer email failed: ", err)
        );

        // Send admin notification
        emailjs.send("service_travel", "template_admin", {
          booking_id: bookingObject.id,
          customer_name: name,
          customer_phone: phone,
          customer_email: email,
          destination: dest,
          package_name: pkg,
          travel_date: date,
          travelers: travelers,
          budget: budget,
          requirements: requirements,
          timestamp: bookingObject.timestamp
        }).then(
          (res) => console.log("Admin email sent successfully", res.status, res.text),
          (err) => console.error("Admin email failed: ", err)
        );
      }

      // 3. Compose WhatsApp Details and open link
      const message = `🌟 *EXPLORE INCREDIBLE INDIA - RESERVATION* 🌟\n\n` +
                      `🧾 *Booking Ref:* ${bookingObject.id}\n` +
                      `👤 *Lead Traveler:* ${name}\n` +
                      `📞 *Phone Number:* ${phone}\n` +
                      `✉️ *Email Address:* ${email}\n\n` +
                      `✈️ *Itinerary Details:*\n` +
                      `- *Destination:* ${dest}\n` +
                      `- *Tour Package:* ${pkg}\n` +
                      `- *Travel Date:* ${date}\n` +
                      `- *Travelers Count:* ${travelers} Persons\n` +
                      `- *Accommodation:* ${budget}\n\n` +
                      `📝 *Special Customizations:*\n` +
                      `_${requirements}_\n\n` +
                      `Thank you! Looking forward to confirming my booking.`;
                      
      const encodedMsg = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/919876543210?text=${encodedMsg}`;
      
      // Attempt to open WhatsApp in a new tab
      window.open(whatsappURL, '_blank');

      // 4. Redirect to dedicated Booking Success Page
      window.location.href = `booking-success.html?id=${bookingObject.id}&name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&email=${encodeURIComponent(email)}&destination=${encodeURIComponent(dest)}&package=${encodeURIComponent(pkg)}&date=${encodeURIComponent(date)}&travelers=${encodeURIComponent(travelers)}&budget=${encodeURIComponent(budget)}&requirements=${encodeURIComponent(requirements)}`;
    });
  }
  
  // Close Modal buttons
  const modalCloseBtn = document.getElementById('modal-close-btn');
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      if (successModal) successModal.classList.remove('active');
      document.body.style.overflow = 'auto';
      // Reset page back to step 1
      form.reset();
      step2.style.display = 'none';
      step1.style.display = 'block';
      if (ind2) ind2.classList.remove('active');
      if (ind1) ind1.classList.add('active');
      window.location.href = "packages.html";
    });
  }
}

// ==========================================================================
// 11. UPGRADED: Tour Packages Filters, Sort, Search (packages.html)
// ==========================================================================
function initPackagesFilteringAndSorting() {
  const searchInput = document.getElementById('package-search-input');
  const sortSelect = document.getElementById('package-sort-select');
  const filterPills = document.querySelectorAll('.filter-pill');
  const packageCardsWrap = document.getElementById('packages-list-wrap');
  
  if (!packageCardsWrap) return;
  const cards = Array.from(packageCardsWrap.querySelectorAll('.package-item-card'));
  if (cards.length === 0) return;

  let activeCategory = 'all';
  let searchQuery = '';
  let activeSort = 'featured';

  const updateDisplay = () => {
    // 1. Filter
    let visibleCards = [];
    cards.forEach(card => {
      const name = card.getAttribute('data-name').toLowerCase();
      const cities = card.querySelector('.package-meta').textContent.toLowerCase();
      const desc = card.querySelector('.package-desc').textContent.toLowerCase();
      const category = card.getAttribute('data-category');

      const matchesSearch = name.includes(searchQuery) || cities.includes(searchQuery) || desc.includes(searchQuery);
      const matchesCategory = activeCategory === 'all' || category === activeCategory;

      if (matchesSearch && matchesCategory) {
        card.style.display = 'block';
        card.classList.add('aos-animate');
        visibleCards.push(card);
      } else {
        card.style.display = 'none';
      }
    });

    // 2. Sort visible cards
    if (activeSort !== 'featured') {
      visibleCards.sort((a, b) => {
        const priceA = parseInt(a.getAttribute('data-price'), 10);
        const priceB = parseInt(b.getAttribute('data-price'), 10);
        const daysA = parseInt(a.getAttribute('data-days'), 10);
        const daysB = parseInt(b.getAttribute('data-days'), 10);

        if (activeSort === 'price-asc') return priceA - priceB;
        if (activeSort === 'price-desc') return priceB - priceA;
        if (activeSort === 'days-asc') return daysA - daysB;
        if (activeSort === 'days-desc') return daysB - daysA;
        return 0;
      });

      // Re-append sorted cards in wrapping division
      visibleCards.forEach(card => {
        packageCardsWrap.appendChild(card);
      });
    } else {
      // Re-append in original DOM order
      cards.forEach(card => {
        if (card.style.display === 'block') {
          packageCardsWrap.appendChild(card);
        }
      });
    }
  };

  // Search input change
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      updateDisplay();
    });
  }

  // Sort option change
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeSort = e.target.value;
      updateDisplay();
    });
  }

  // Category filter pills click
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-category');
      updateDisplay();
    });
  });
}

// ==========================================================================
// 12. UPGRADED: Tour Package Comparison System (packages.html)
// ==========================================================================
function initPackagesComparison() {
  const compareCheckboxes = document.querySelectorAll('.package-compare-checkbox');
  const drawer = document.getElementById('compare-drawer');
  const compareList = document.getElementById('compare-items-list');
  const triggerBtn = document.getElementById('trigger-compare-btn');
  const clearBtn = document.getElementById('clear-compare-btn');
  const compareModal = document.getElementById('compare-modal');
  const closeX = document.getElementById('close-compare-modal-x');
  const closeBtn = document.getElementById('close-compare-modal-btn');
  
  if (!drawer || compareCheckboxes.length === 0) return;

  let selectedPool = [];

  const updateDrawerState = () => {
    // Clear list children
    compareList.innerHTML = '';
    
    if (selectedPool.length > 0) {
      drawer.classList.add('show');
      
      selectedPool.forEach(pkgId => {
        // Find corresponding name matching package database
        const pkgData = tourPackagesData[pkgId];
        const name = pkgData ? pkgData.name : pkgId;
        
        const chip = document.createElement('div');
        chip.className = 'compare-chip d-flex align-items-center gap-2 bg-gold text-dark px-2 py-1 rounded';
        chip.style.fontSize = '0.85rem';
        chip.innerHTML = `
          <span>${name}</span>
          <button class="remove-chip-btn bg-transparent border-0 text-dark p-0" data-id="${pkgId}"><i class="fas fa-times-circle"></i></button>
        `;
        compareList.appendChild(chip);
      });
      
      // Set compare button disabled if less than 2 selected
      if (selectedPool.length >= 2) {
        triggerBtn.removeAttribute('disabled');
        triggerBtn.innerText = `Compare (${selectedPool.length})`;
      } else {
        triggerBtn.setAttribute('disabled', 'true');
        triggerBtn.innerText = 'Select Min 2';
      }
      
      // Limit pool to max 3
      if (selectedPool.length >= 3) {
        compareCheckboxes.forEach(cb => {
          if (!cb.checked) cb.setAttribute('disabled', 'true');
        });
      } else {
        compareCheckboxes.forEach(cb => cb.removeAttribute('disabled'));
      }
    } else {
      drawer.classList.remove('show');
      compareCheckboxes.forEach(cb => cb.removeAttribute('disabled'));
    }
  };

  // Manage check events
  compareCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const val = checkbox.value;
      if (checkbox.checked) {
        if (!selectedPool.includes(val) && selectedPool.length < 3) {
          selectedPool.push(val);
        } else {
          checkbox.checked = false;
        }
      } else {
        selectedPool = selectedPool.filter(id => id !== val);
      }
      updateDrawerState();
    });
  });

  // Chip remove event
  compareList.addEventListener('click', (e) => {
    const btn = e.target.closest('.remove-chip-btn');
    if (!btn) return;
    const id = btn.getAttribute('data-id');
    selectedPool = selectedPool.filter(item => item !== id);
    
    // Uncheck matching checkbox
    const targetCheckbox = Array.from(compareCheckboxes).find(cb => cb.value === id);
    if (targetCheckbox) targetCheckbox.checked = false;
    
    updateDrawerState();
  });

  // Clear pool
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      selectedPool = [];
      compareCheckboxes.forEach(cb => {
        cb.checked = false;
        cb.removeAttribute('disabled');
      });
      updateDrawerState();
    });
  }

  // Trigger specs comparison modal
  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      if (selectedPool.length < 2) return;

      // Populate dynamic comparison table
      const headRow = document.getElementById('compare-head-row');
      const rowPrice = document.getElementById('compare-row-price');
      const rowDuration = document.getElementById('compare-row-duration');
      const rowCities = document.getElementById('compare-row-cities');
      const rowHotel = document.getElementById('compare-row-hotel');
      const rowTransport = document.getElementById('compare-row-transport');
      const rowMeals = document.getElementById('compare-row-meals');
      const rowRating = document.getElementById('compare-row-rating');
      const rowAction = document.getElementById('compare-row-action');

      // Clear previous columns (except the first labels column)
      const clearRow = (rowEl) => {
        while (rowEl.cells.length > 1) {
          rowEl.deleteCell(1);
        }
      };

      clearRow(headRow);
      clearRow(rowPrice);
      clearRow(rowDuration);
      clearRow(rowCities);
      clearRow(rowHotel);
      clearRow(rowTransport);
      clearRow(rowMeals);
      clearRow(rowRating);
      clearRow(rowAction);

      // Populate details for each selected package
      selectedPool.forEach(pkgId => {
        const data = tourPackagesData[pkgId];
        if (!data) return;

        // Head
        const th = document.createElement('th');
        th.className = 'text-center';
        th.innerHTML = `
          <div class="fw-bold font-serif text-gold">${data.name}</div>
          <small class="text-secondary">${data.badge}</small>
        `;
        headRow.appendChild(th);

        // Price
        const tdPrice = document.createElement('td');
        tdPrice.className = 'text-center fw-bold text-white';
        tdPrice.innerText = data.priceStr;
        rowPrice.appendChild(tdPrice);

        // Duration
        const tdDur = document.createElement('td');
        tdDur.className = 'text-center text-secondary';
        tdDur.innerText = data.duration;
        rowDuration.appendChild(tdDur);

        // Cities
        const tdCities = document.createElement('td');
        tdCities.className = 'text-center text-secondary small';
        tdCities.innerText = data.cities;
        rowCities.appendChild(tdCities);

        // Hotel
        const tdHotel = document.createElement('td');
        tdHotel.className = 'text-center text-secondary small';
        tdHotel.innerText = data.hotelInfo;
        rowHotel.appendChild(tdHotel);

        // Transport
        const tdTransport = document.createElement('td');
        tdTransport.className = 'text-center text-secondary small';
        tdTransport.innerText = data.transportInfo;
        rowTransport.appendChild(tdTransport);

        // Meals
        const tdMeals = document.createElement('td');
        tdMeals.className = 'text-center text-secondary small';
        tdMeals.innerText = data.mealsInfo;
        rowMeals.appendChild(tdMeals);

        // Rating
        const tdRating = document.createElement('td');
        tdRating.className = 'text-center text-warning';
        tdRating.innerHTML = `<i class="fas fa-star me-1"></i>${data.rating} <small class="text-secondary">(${data.reviews} reviews)</small>`;
        rowRating.appendChild(tdRating);

        // Actions button
        const tdAction = document.createElement('td');
        tdAction.className = 'text-center';
        tdAction.innerHTML = `
          <div class="d-grid gap-2">
            <a href="package-details.html?package=${data.id}" class="btn btn-premium-outline btn-xs py-1">View Details</a>
            <a href="booking.html?package=${data.name}&destination=${data.cities}" class="btn btn-premium btn-xs py-1">Book Tour</a>
          </div>
        `;
        rowAction.appendChild(tdAction);
      });

      // Show comparison modal
      if (compareModal) {
        compareModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  // Close Compare modal
  const closeCompare = () => {
    if (compareModal) compareModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  if (closeX) closeX.addEventListener('click', closeCompare);
  if (closeBtn) closeBtn.addEventListener('click', closeCompare);
  if (compareModal) {
    compareModal.addEventListener('click', (e) => {
      if (e.target === compareModal) closeCompare();
    });
  }
}

// ==========================================================================
// 13. UPGRADED: Dynamic Details Loader (package-details.html)
// ==========================================================================
function initPackageDetailsLoader() {
  const detailTitle = document.getElementById('detail-package-name');
  if (!detailTitle) return; // Only execute on detail template
  
  const urlParams = new URLSearchParams(window.location.search);
  const pkgId = urlParams.get('package') || 'golden-triangle-tour';
  
  const data = tourPackagesData[pkgId];
  if (!data) {
    // Graceful fallback to packages index
    window.location.href = "packages.html";
    return;
  }

  // Hide custom preloader title
  const loaderText = document.getElementById('preloader-title');
  if (loaderText) loaderText.innerText = data.name.toUpperCase();

  // Populate basic text & head meta tags
  document.getElementById('page-title').innerText = `${data.name} Details | Explore Incredible India`;
  const metaDesc = document.getElementById('page-meta-desc');
  if (metaDesc) metaDesc.setAttribute('content', data.description);

  // Parallax Header
  document.getElementById('detail-package-name').innerText = data.name;
  document.getElementById('detail-package-duration').innerHTML = `<i class="far fa-clock text-gold me-2"></i>${data.duration}`;
  document.getElementById('detail-category-badge').innerText = data.badge;
  
  const banner = document.getElementById('detail-hero-banner');
  if (banner) banner.style.backgroundImage = `url('${data.image}')`;

  // Overview
  document.getElementById('detail-desc').innerText = data.description;
  document.getElementById('detail-best-time').innerText = data.bestTime;
  document.getElementById('detail-suitable').innerText = data.suitableFor;
  document.getElementById('detail-cities').innerText = data.cities;
  
  // Price and rating sidebar
  document.getElementById('detail-price').innerText = data.priceStr;
  const ratingRow = document.getElementById('detail-rating-row');
  if (ratingRow) {
    let stars = '★'.repeat(Math.round(data.rating)) + '☆'.repeat(5 - Math.round(data.rating));
    ratingRow.innerHTML = `<span class="fs-5">${stars}</span> <small class="text-secondary ms-1">(${data.rating} / 5 based on ${data.reviews} reviews)</small>`;
  }

  // Why choose us bullet list
  const whyChooseList = document.getElementById('detail-why-choose-list');
  if (whyChooseList) {
    whyChooseList.innerHTML = data.whyChoose.map(reason => `
      <li class="mb-2"><i class="fas fa-check-circle text-gold me-2"></i>${reason}</li>
    `).join('');
  }

  // Inclusions and Exclusions lists
  const inclusionsList = document.getElementById('detail-inclusions-list');
  if (inclusionsList) {
    inclusionsList.innerHTML = data.inclusions.map(inc => `
      <li class="mb-2">${inc}</li>
    `).join('');
  }

  const exclusionsList = document.getElementById('detail-exclusions-list');
  if (exclusionsList) {
    exclusionsList.innerHTML = data.exclusions.map(exc => `
      <li class="mb-2">${exc}</li>
    `).join('');
  }

  // Hotel, Transport, Meals & Sightseeing text details
  document.getElementById('detail-hotel-info').innerText = data.hotelInfo;
  document.getElementById('detail-transport-info').innerText = data.transportInfo;
  document.getElementById('detail-meals-info').innerText = data.mealsInfo;
  document.getElementById('detail-sightseeing-info').innerText = data.sightseeingInfo;

  // Itinerary Accordion
  const accordionWrap = document.getElementById('itineraryAccordion');
  if (accordionWrap) {
    accordionWrap.innerHTML = data.itinerary.map((dayItem, idx) => `
      <div class="accordion-item glass-card mb-3">
        <h4 class="accordion-header">
          <button class="accordion-button ${idx === 0 ? '' : 'collapsed'} font-serif text-white d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#itinerary-day-${dayItem.day}" aria-expanded="${idx === 0 ? 'true' : 'false'}">
            <span>Day ${dayItem.day}: ${dayItem.title}</span>
          </button>
        </h4>
        <div id="itinerary-day-${dayItem.day}" class="accordion-collapse collapse ${idx === 0 ? 'show' : ''}" data-bs-parent="#itineraryAccordion">
          <div class="accordion-body text-secondary">
            <p class="mb-3">${dayItem.desc}</p>
            <div class="row g-2 border-top border-secondary pt-3 text-white small">
              <div class="col-sm-6"><i class="fas fa-utensils text-gold me-2"></i><strong>Meal Plan:</strong> ${dayItem.meals}</div>
              <div class="col-sm-6"><i class="fas fa-bed text-gold me-2"></i><strong>Overnight:</strong> ${dayItem.hotel}</div>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Package gallery grid
  const galleryGrid = document.getElementById('detail-gallery-grid');
  if (galleryGrid) {
    galleryGrid.innerHTML = data.gallery.map(imgUrl => `
      <div class="col-6 col-md-3">
        <div class="gallery-mini-wrap rounded overflow-hidden">
          <img class="img-fluid w-100 hover-scale" src="${imgUrl}" alt="Destination view" style="height: 150px; object-fit: cover;">
        </div>
      </div>
    `).join('');
  }

  // Location Map embed
  const mapIframe = document.getElementById('detail-map-iframe');
  if (mapIframe && data.mapEmbed) {
    mapIframe.src = data.mapEmbed;
  }

  // Tips and Cancellation
  const tipsList = document.getElementById('detail-tips-list');
  if (tipsList) {
    tipsList.innerHTML = data.travelTips.map(tip => `
      <li class="mb-2">${tip}</li>
    `).join('');
  }
  document.getElementById('detail-cancellation-policy').innerText = data.cancellationPolicy;

  // Book now sidebar redirect pre-filled
  const bookBtn = document.getElementById('detail-book-now-btn');
  if (bookBtn) {
    bookBtn.href = `booking.html?package=${encodeURIComponent(data.name)}&destination=${encodeURIComponent(data.cities)}`;
  }
}

// =========================================
// 14. Active Menu Link Highlighter
// =========================================
function highlightActiveMenu() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link-custom');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
