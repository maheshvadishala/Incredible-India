// Centralized Tour Packages Database for "Explore Incredible India"

const tourPackagesData = {
  "golden-triangle-tour": {
    id: "golden-triangle-tour",
    name: "Golden Triangle Tour",
    duration: "6 Days / 5 Nights",
    cities: "Delhi + Agra + Jaipur",
    badge: "Cultural Heritage",
    popularBadge: "Best Seller",
    price: 28500,
    priceStr: "₹28,500",
    rating: 4.9,
    reviews: 124,
    category: "heritage",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1200",
    description: "Experience India's historical crown jewels. This tour takes you through old Mughal grandeur, the eternal monument of love, and the royal pink stone fortresses of Rajasthan.",
    whyChoose: [
      "Walk through three of India's most iconic historical hubs in one seamless journey",
      "Witness a breathtaking sunrise at the majestic Taj Mahal with a private researcher",
      "Bespoke luxury stays at ITC Mughal / Radisson Blu and private heritage Havelis",
      "Private air-conditioned sedan transit with an experienced English-speaking chauffeur"
    ],
    bestTime: "October to March",
    suitableFor: "Family, Couples, Culture Lovers",
    inclusions: [
      "5 Nights accommodation in selected 4/5-star properties",
      "Daily gourmet breakfast at hotel buffets",
      "Private AC Sedan for all transfers, excursions, and intercity travel",
      "Private local English-speaking guides at each historical monument",
      "Sunrise entry tickets to the Taj Mahal",
      "Chokhi Dhani traditional dinner experience in Jaipur",
      "All toll taxes, parking fees, and driver allowances"
    ],
    exclusions: [
      "Airfare or train tickets to Delhi / from Jaipur",
      "Lunch and dinners (except specified Chokhi Dhani dinner)",
      "Camera fees, tips, laundry, and items of personal nature",
      "Any activities or monument entrance fees not listed in inclusions"
    ],
    hotelInfo: "Stay in ultra-premium hotels: Radisson Blu CP (Delhi), ITC Mughal (Agra), and Trident Palace (Jaipur). Options include heritage suites with pool access.",
    transportInfo: "Travel in comfort with a dedicated private air-conditioned Toyota sedan. Chauffeur is uniformed, professional, and knowledgeable about local routes.",
    mealsInfo: "Daily breakfast buffets featuring continental, South Indian, and traditional North Indian cuisines. One special cultural Rajasthani dinner in Jaipur is included.",
    sightseeingInfo: "Delhi: Red Fort, Qutub Minar, Humayun's Tomb, India Gate. Agra: Taj Mahal, Agra Fort, Fatehpur Sikri. Jaipur: Amber Fort, Hawa Mahal, City Palace, Jantar Mantar.",
    gallery: [
      "https://images.unsplash.com/photo-1585464297275-2d076f9fda64?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=600"
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9997268874136!2d77.21672151508246!3d28.629762982420078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37e1a384df%3A0xe510e193cd5c9bf5!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1624021319234!5m2!1sen!2sin",
    travelTips: [
      "Carry light cotton clothing. A light jacket is recommended for winter mornings (Dec-Jan).",
      "Taj Mahal is closed on Fridays. Itinerary will adjust automatically to accommodate this.",
      "Wear slip-on shoes for visiting shrines; socks are recommended as shoes must be removed."
    ],
    cancellationPolicy: "Cancel up to 14 days before departure for a full refund (minus a 5% handling fee). Cancellations within 7-13 days receive a 50% refund. No refunds will be provided for cancellations within 7 days.",
    itinerary: [
      {
        day: 1,
        title: "Welcome to Delhi - Imperial Capital tour",
        desc: "Upon arrival at Indira Gandhi International Airport, receive a traditional VIP welcome. Transfer to your luxury hotel. In the afternoon, tour Old Delhi, including the bustling bazaars of Chandni Chowk, Jama Masjid, and a drive-past of the majestic Red Fort. Return to hotel for a welcome dinner.",
        meals: "Dinner Included",
        hotel: "Radisson Blu, New Delhi"
      },
      {
        day: 2,
        title: "New Delhi Sightseeing & Travel to Agra",
        desc: "Explore New Delhi's wide boulevards. Visit the soaring Qutub Minar, a UNESCO World Heritage site, and the gorgeous garden tomb of Humayun. Pay respects at India Gate and drive by the Parliament House. In the afternoon, take a scenic 3-hour drive via the Yamuna Expressway to Agra. Check in to your luxury hotel.",
        meals: "Breakfast Included",
        hotel: "ITC Mughal, Agra"
      },
      {
        day: 3,
        title: "Sunrise at Taj Mahal & Agra Fort",
        desc: "Experience a magical sunrise over the ivory-white marble domes of the Taj Mahal, the legendary monument built by Shah Jahan. Return to hotel for breakfast. Afterwards, visit Agra Fort, a massive red sandstone fortress containing gorgeous palace halls. Evening shopping tour for local marble inlay art.",
        meals: "Breakfast Included",
        hotel: "ITC Mughal, Agra"
      },
      {
        day: 4,
        title: "Fatehpur Sikri Excursion & Journey to Jaipur",
        desc: "Depart Agra for Jaipur. En route, explore Fatehpur Sikri, the magnificent abandoned red sandstone capital built by Emperor Akbar in the late 16th century. Continue your drive to Jaipur, the 'Pink City' of Rajasthan. Check in to your heritage palace hotel. Spend the evening exploring local handicraft markets.",
        meals: "Breakfast Included",
        hotel: "Trident Palace, Jaipur"
      },
      {
        day: 5,
        title: "Amer Fort Palace & Pink City Exploration",
        desc: "Visit Amer Fort, towering above Maota Lake. Ascend the fortress gates via a private open-top jeep. Tour the exquisite Sheesh Mahal (Hall of Mirrors). Afternoon photo stop at Jal Mahal (Water Palace) and tour the central City Palace complex and Hawa Mahal. In the evening, enjoy a traditional Rajasthani dinner at Chokhi Dhani with folk music, camel rides, and local puppet shows.",
        meals: "Breakfast & Dinner Included",
        hotel: "Trident Palace, Jaipur"
      },
      {
        day: 6,
        title: "Bazaars & Final Departure",
        desc: "Enjoy a leisurely breakfast. Indulge in some last-minute shopping for Jaipur gemstones, blue pottery, and bandhani textiles. Chauffeur transfers you to Jaipur Airport or drives you back to Delhi Airport for your return flight.",
        meals: "Breakfast Included",
        hotel: "N/A - Departure"
      }
    ]
  },
  "royal-rajasthan-tour": {
    id: "royal-rajasthan-tour",
    name: "Royal Rajasthan Tour",
    duration: "7 Days / 6 Nights",
    cities: "Jaipur + Jodhpur + Udaipur + Jaisalmer",
    badge: "Royal Royalty",
    popularBadge: "Limited Seats",
    price: 42000,
    priceStr: "₹42,000",
    rating: 4.9,
    reviews: 95,
    category: "heritage",
    image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&q=80&w=1200",
    description: "Explore the legendary desert kingdoms of Rajasthan. Walk the blue streets of Jodhpur, enjoy private cruises in romantic Udaipur, and experience luxury camping under the starry dunes of Jaisalmer.",
    whyChoose: [
      "Bespoke luxury stays at historic heritage Haveli resorts and golden desert camps",
      "Private boat cruise on Lake Pichola with access to Jag Mandir island palace",
      "Camel safari at sunset followed by luxury camping and Rajasthani folk dances",
      "Private Toyota Innova SUV with a dedicated chauffeur for all destinations"
    ],
    bestTime: "November to February",
    suitableFor: "Couples, Families, Adventure Enthusiasts",
    inclusions: [
      "6 Nights accommodation in premium heritage Havelis and luxury desert camps",
      "Daily breakfast at hotels plus full dinner at the desert camp",
      "Private Toyota Innova SUV for all city transfers and sightseeing tours",
      "Local site guides at major forts and palaces",
      "Sunset boat ride at Udaipur's Lake Pichola",
      "Camel safari and jeep dune bashing in Jaisalmer Sam Dunes"
    ],
    exclusions: [
      "Airfare to Jaipur and from Udaipur / Jodhpur",
      "Monument entry fees and camera charges",
      "Lunch on all days",
      "Tips, phone bills, drinks, laundry"
    ],
    hotelInfo: "Stay in heritage luxury properties: Alsisar Haveli (Jaipur), Ajit Bhawan (Jodhpur), Serai Desert Camp (Jaisalmer), and Radisson Blu Udaipur Lake Resort.",
    transportInfo: "Travel across Rajasthan in a spacious private Toyota Innova SUV, fully air-conditioned and stocked with fresh water and travel refreshments.",
    mealsInfo: "Daily breakfast buffets. One traditional dune buffet dinner in Sam sand dunes. Special Rajasthani Laal Maas tastings can be organized.",
    sightseeingInfo: "Amer Fort, City Palace Jaipur, Mehrangarh Fort, Jaswant Thada, Sam Sand Dunes Jaisalmer, Lake Pichola, City Palace Udaipur, Jag Mandir.",
    gallery: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=600"
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.487211111111!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db42333333333%3A0x3333333333333333!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1624021319234!5m2!1sen!2sin",
    travelTips: [
      "Pack sunglasses, high SPF sunscreen, and a wide-brimmed hat for desert heat.",
      "Bring warm clothes for nights in Jaisalmer as temperatures drop sharply in winter.",
      "Support local artisans by buying authentic block-prints and camel-leather goods."
    ],
    cancellationPolicy: "Cancel up to 21 days before departure for a full refund. Cancellations made 10-20 days prior receive a 50% refund. Cancellations within 10 days are non-refundable.",
    itinerary: [
      {
        day: 1,
        title: "Jaipur Arrival & Local Explorations",
        desc: "Arrive in Jaipur and check in at a gorgeous heritage Haveli. Afternoon visit to the unique Jantar Mantar observatory and the beautiful pink Hawa Mahal. Enjoy a sunset dinner overlooking the illuminated city skyline.",
        meals: "Welcome Dinner Included",
        hotel: "Alsisar Haveli, Jaipur"
      },
      {
        day: 2,
        title: "Jaipur Palaces & Travel to Jodhpur",
        desc: "Morning tour of the mighty Amer Fort with an open-jeep ride. Drive 5 hours across scenic rural landscapes to the 'Blue City' of Jodhpur. Check in to Ajit Bhawan, a premium palace resort. Enjoy an evening at leisure.",
        meals: "Breakfast Included",
        hotel: "Ajit Bhawan Palace, Jodhpur"
      },
      {
        day: 3,
        title: "Jodhpur Blue City Tour & Travel to Jaisalmer",
        desc: "Explore Mehrangarh Fort, a giant palace complex rising 400 feet above the city. Visit Jaswant Thada, a royal white marble cenotaph. Afterwards, embark on a 5-hour drive to Jaisalmer, the Golden City in the heart of the Thar Desert. Check in to your luxury resort.",
        meals: "Breakfast Included",
        hotel: "Desert Palace, Jaisalmer"
      },
      {
        day: 4,
        title: "Golden Fort & Thar Sand Dunes Camping",
        desc: "Tour the famous living fortress of Jaisalmer Fort (Sonar Qila) and the carved facades of Patwon-ki-Haveli. In the afternoon, transfer to Sam Sand Dunes. Enjoy a traditional camel safari, witness the sunset on the dunes, followed by Rajasthani folk dances and a buffet dinner under the stars at your luxury camp.",
        meals: "Breakfast & Dinner Included",
        hotel: "Serai Luxury Desert Camp, Sam Sam Dunes"
      },
      {
        day: 5,
        title: "Drive to Udaipur (City of Lakes)",
        desc: "After breakfast, depart the desert for the romantic city of Udaipur. Check in to a premium resort bordering the scenic Lake Pichola. Spend the evening relaxing by the pool or enjoying lakeside dining.",
        meals: "Breakfast Included",
        hotel: "Radisson Blu Udaipur Lake Resort"
      },
      {
        day: 6,
        title: "Udaipur City Palace & Lake Pichola Cruise",
        desc: "Explore Udaipur's royal City Palace, the largest palace complex in Rajasthan, and Jagdish Temple. In the afternoon, embark on a scenic private cruise on Lake Pichola, visiting Jag Mandir Island. Stroll through the fountains at Saheliyon-ki-Bari (Courtyard of Maidens).",
        meals: "Breakfast Included",
        hotel: "Radisson Blu Udaipur Lake Resort"
      },
      {
        day: 7,
        title: "Udaipur Departure",
        desc: "Enjoy a final gourmet breakfast at the resort. Spend the morning shopping for Udaipur miniature paintings and local silver jewelry. Chauffeur transfers you to Udaipur Airport for departure.",
        meals: "Breakfast Included",
        hotel: "N/A - Departure"
      }
    ]
  },
  "south-india-explorer": {
    id: "south-india-explorer",
    name: "South India Explorer",
    duration: "8 Days / 7 Nights",
    cities: "Hyderabad + Chennai + Pondicherry + Ooty + Mysuru",
    badge: "Heritage & Hills",
    popularBadge: "Trending",
    price: 39500,
    priceStr: "₹39,500",
    rating: 4.8,
    reviews: 78,
    category: "heritage",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1200",
    description: "Discover the breathtaking cultural transitions of Southern India. Stroll past French colonial pastel villas in Pondicherry, tour Nizami palaces in Hyderabad, and breathe the fresh mountain air of Ooty.",
    whyChoose: [
      "Stately luxury stays including Taj Krishna (Hyderabad) and premium mountain cottages",
      "Private tea estate walking tours in Ooty with a tea-tasting sommelier",
      "Explore the UNESCO heritage ruins of ancient temples and French quarters",
      "Chauffeur-driven luxury SUV for the entire tour route"
    ],
    bestTime: "September to March",
    suitableFor: "Families, Seniors, Photography Lovers",
    inclusions: [
      "7 Nights accommodation in premium 4-star properties",
      "Daily breakfast and four multi-course dinner feasts",
      "Private AC Chauffeur SUV (Toyota Innova) for all transit",
      "Local monument guides at Pondicherry, Mysore Palace, and Golconda Fort",
      "Toy Train ride tickets in Ooty (Nilgiri Mountain Railway)"
    ],
    exclusions: [
      "Flight tickets to Hyderabad / from Bengaluru",
      "Personal expenses, room service, laundry",
      "Monument entry tickets and guide tips",
      "Lunches on all days"
    ],
    hotelInfo: "Accommodations include Taj Krishna (Hyderabad), Savoy IHCL (Ooty), Radisson Resort (Pondicherry), and Grand Mercure (Mysuru).",
    transportInfo: "Spacious private Toyota Innova SUV with high-end safety features, air-conditioning, professional driver, and toll/parking clearances.",
    mealsInfo: "Daily breakfast buffets. Four premium dinners showcasing traditional Nizami Biryani, Chettinad spices, and Mysore royal dessert delicacies.",
    sightseeingInfo: "Golconda Fort, Charminar, Mahabalipuram temples, Pondicherry French Colony, Ooty Lake, Dodabetta Peak, Mysore Palace, Chamundi Hills.",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1590050752117-238cb0612b1b?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&q=80&w=600"
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0000000000005!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d333f%3A0xe333333333333333!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1624021319234!5m2!1sen!2sin",
    travelTips: [
      "Dress conservatively when visiting South Indian temples (shoulders and knees covered).",
      "Pack light woolens for Ooty, as evening temperatures can fall below 12°C.",
      "Indulge in authentic filter coffee and traditional coconut water at roadside stalls."
    ],
    cancellationPolicy: "Cancellations made 15 days or more before departure receive a full refund. Cancellations made 7-14 days prior receive a 50% refund. Cancellations within 7 days are non-refundable.",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Hyderabad - City of Nizams",
        desc: "Arrive at Hyderabad Airport. Chauffeur transfers you to your premium hotel Taj Krishna. Afternoon tour of the majestic Charminar and the historic Laad Bazaar. Enjoy a welcome dinner featuring traditional Hyderabadi Biryani.",
        meals: "Dinner Included",
        hotel: "Taj Krishna, Hyderabad"
      },
      {
        day: 2,
        title: "Golconda Fort & Qutub Shahi Tombs",
        desc: "Explore Golconda Fort, a medieval fortress famous for its acoustic echoes. In the afternoon, visit the magnificent Qutub Shahi Tombs. In the evening, watch the sound & light show showcasing local history.",
        meals: "Breakfast Included",
        hotel: "Taj Krishna, Hyderabad"
      },
      {
        day: 3,
        title: "Flight to Chennai & Travel to Pondicherry",
        desc: "Take a morning flight to Chennai. Meet your driver and drive 3 hours along the East Coast Road to Pondicherry. Check in at your boutique resort. Spend the evening walking the Promenade Beach and viewing French-style architecture.",
        meals: "Breakfast Included",
        hotel: "Radisson Resort, Pondicherry"
      },
      {
        day: 4,
        title: "French Colony & Auroville Excursion",
        desc: "Tour the beautiful pastel villas, boutiques, and bakeries in the French Quarter. In the afternoon, visit Auroville, an experimental township. Check out the golden Matrimandir dome structure.",
        meals: "Breakfast Included",
        hotel: "Radisson Resort, Pondicherry"
      },
      {
        day: 5,
        title: "Scenic Train to Ooty Hills",
        desc: "Depart Pondicherry early for a drive to Mettupalayam. Board the historic Nilgiri Mountain Toy Train, a UNESCO World Heritage site, for a scenic ride to Ooty. Check in to your heritage mountain lodge.",
        meals: "Breakfast Included",
        hotel: "Savoy IHCL Heritage Hotel, Ooty"
      },
      {
        day: 6,
        title: "Ooty Peak Views & Tea Estate Walk",
        desc: "Visit Dodabetta Peak, the highest point in South India, for panoramic views. Stroll through the Botanical Gardens, and enjoy a private guided walk through a lush tea plantation with a tasting session.",
        meals: "Breakfast & Dinner Included",
        hotel: "Savoy IHCL Heritage Hotel, Ooty"
      },
      {
        day: 7,
        title: "Drive to Mysuru & Mysore Palace Tour",
        desc: "Drive 4 hours to the royal city of Mysuru. Check in at a luxury hotel. Tour the grand Mysore Palace, decorated with thousands of yellow lights in the evening. Explore the local sandalwood oil and silk silk markets.",
        meals: "Breakfast & Dinner Included",
        hotel: "Grand Mercure, Mysuru"
      },
      {
        day: 8,
        title: "Chamundi Hills & Departure via Bengaluru",
        desc: "Morning drive up Chamundi Hills to visit the Chamundeshwari Temple. Drive 3 hours to Bengaluru Airport for your flight back home, carrying memorable souvenirs.",
        meals: "Breakfast Included",
        hotel: "N/A - Departure"
      }
    ]
  },
  "kerala-paradise": {
    id: "kerala-paradise",
    name: "Kerala Paradise",
    duration: "6 Days / 5 Nights",
    cities: "Kochi + Munnar + Thekkady + Alleppey",
    badge: "Tropical Retreat",
    popularBadge: "Best Seller",
    price: 34000,
    priceStr: "₹34,000",
    rating: 4.9,
    reviews: 112,
    category: "nature",
    image: "https://images.unsplash.com/photo-1593693411515-c202e974fe08?auto=format&fit=crop&q=80&w=1200",
    description: "Breathe in the tropical serenity of Kerala. Walk through high-altitude tea plantations in Munnar, tour spice hills in Thekkady, and cruise palm-fringed backwaters on a private luxury houseboat.",
    whyChoose: [
      "Premium eco-luxury stays including a private luxury wooden houseboat overnight stay",
      "Complimentary rejuvenation therapy (Full Body Ayurvedic Abhyanga Massage)",
      "Watch traditional Kathakali dance and Kalaripayattu martial arts show in Thekkady",
      "Private AC vehicle with a local driver who handles all sightseeing excursions"
    ],
    bestTime: "September to March",
    suitableFor: "Couples, Honeymooners, Nature Enthusiasts",
    inclusions: [
      "4 Nights stay at premium 4/5-star resorts and 1 Night on a Private AC Houseboat",
      "All meals on the houseboat (lunch, evening tea, dinner, breakfast)",
      "Daily breakfast buffets at Munnar, Kochi, and Thekkady resorts",
      "Complimentary 60-min Ayurvedic Spa Therapy session",
      "Guided Spice Plantation walk in Thekkady",
      "Tickets to local cultural shows (Kathakali and Kalaripayattu)"
    ],
    exclusions: [
      "Airfare or train tickets to Kochi Airport / railway station",
      "Monument fees, boating tickets, national park permits",
      "Lunch and dinner (except on the houseboat)",
      "Personal items, laundry, telephone, tips"
    ],
    hotelInfo: "Stays include Fragrant Nature (Kochi), Blanket Hotel & Spa (Munnar), Elephant Court (Thekkady), and a premium private bedroom cruise houseboat.",
    transportInfo: "Dedicated air-conditioned private sedan or SUV depending on group size. Driver is highly experienced with mountain hairpins and local attractions.",
    mealsInfo: "Daily breakfast buffets. Houseboat stay includes all meals prepared on-board by a private chef, featuring traditional Kerala fish curry and local banana fritters.",
    sightseeingInfo: "Chinese Fishing Nets Fort Kochi, Munnar Tea Estates, Eravikulam National Park, Periyar National Park, Alleppey Backwaters, Marari Beach.",
    gallery: [
      "https://images.unsplash.com/photo-1593693411515-c202e974fe08?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1593693411515-c202e974fe08?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=600"
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8415!2d76.2673!3d9.9312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d08bc7b229d%3A0xe510e193cd5c9bf5!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1624021319234!5m2!1sen!2sin",
    travelTips: [
      "Bring comfortable shoes for trekking tea plantations and spice farms.",
      "Houseboat air-conditioning is active from 9:00 PM to 6:00 AM (during sleep hours) for eco-preservation.",
      "Mosquito repellent is essential for backwater areas."
    ],
    cancellationPolicy: "Full refund if cancelled up to 14 days before travel. 50% refund for cancellations within 7-13 days. No refunds within 7 days of departure.",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Kochi & Historic Sightseeing",
        desc: "Arrive at Kochi Airport. Check in to your luxury hotel in Fort Kochi. Afternoon sightseeing tour including the 500-year-old Chinese Fishing Nets, St. Francis Church, Santa Cruz Basilica, and Jewish Town. Evening leisure stroll.",
        meals: "Welcome Dinner Included",
        hotel: "Fragrant Nature Hotel, Kochi"
      },
      {
        day: 2,
        title: "Scenic Ride to Munnar Tea Hills",
        desc: "Drive 4 hours to Munnar, winding through valleys, pine forests, and past the Valara and Cheeyappara waterfalls. Check in to your premium tea resort. Relax and enjoy views of the rolling green hills.",
        meals: "Breakfast Included",
        hotel: "Blanket Hotel & Spa, Munnar"
      },
      {
        day: 3,
        title: "Munnar Tea Estate & Park Trek",
        desc: "Visit Eravikulam National Park to spot the rare Nilgiri Tahr mountain goat. Visit the Tea Museum, and take a stroll in the local tea gardens. Take in the scenic views at Echo Point and Mattupetty Dam.",
        meals: "Breakfast Included",
        hotel: "Blanket Hotel & Spa, Munnar"
      },
      {
        day: 4,
        title: "Drive to Thekkady & Spice Garden Tour",
        desc: "Drive 3 hours to Thekkady, the spice center of Kerala. Check in at your luxury forest resort. In the afternoon, enjoy a guided spice garden walk, smelling cardamom, pepper, and cinnamon. In the evening, watch a Kathakali performance.",
        meals: "Breakfast Included",
        hotel: "The Elephant Court, Thekkady"
      },
      {
        day: 5,
        title: "Luxury Alleppey Backwater Houseboat",
        desc: "Drive 3.5 hours to Alleppey. Board your private luxury air-conditioned wooden Houseboat. Cruise along the backwaters, through coconut groves and rural villages. Enjoy delicious meals prepared on-board by your private chef.",
        meals: "Breakfast, Lunch & Dinner Included",
        hotel: "Private Premium Houseboat, Alleppey"
      },
      {
        day: 6,
        title: "Ayurveda Spa Session & Departure via Kochi",
        desc: "Enjoy breakfast on the boat. Transfer back to Kochi. Indulge in a relaxing 60-minute Ayurvedic Full Body massage. Chauffeur transfers you to Kochi Airport for departure.",
        meals: "Breakfast Included",
        hotel: "N/A - Departure"
      }
    ]
  },
  "kashmir-delight": {
    id: "kashmir-delight",
    name: "Kashmir Delight",
    duration: "7 Days / 6 Nights",
    cities: "Srinagar + Gulmarg + Sonmarg + Pahalgam",
    badge: "Alpine Bliss",
    popularBadge: "Best Seller",
    price: 36999,
    priceStr: "₹36,999",
    rating: 4.9,
    reviews: 142,
    category: "mountains",
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&q=80&w=1200",
    description: "Immerse yourself in alpine wonder. Relax on beautiful hand-carved houseboats on Dal Lake, ride the iconic Gulmarg Gondola over pine forests, and walk mountain glaciers in Sonmarg.",
    whyChoose: [
      "Stay in an ultra-luxury hand-carved wooden houseboat on Dal Lake",
      "Included passes for the Gulmarg Gondola Cable Car Ride (Phase 1)",
      "Private romantic sunset Shikara ride across floating gardens",
      "Private 4x4 SUV (Toyota Fortuner / Innova) for the entire high-altitude route"
    ],
    bestTime: "April to October (Greenery) or Dec to Feb (Snow)",
    suitableFor: "Couples, Honeymooners, Families",
    inclusions: [
      "1 Night on a premium Houseboat and 5 Nights in luxury mountain resorts",
      "Daily breakfast and dinner at the hotels",
      "Private AC SUV (Innova / Fortuner) for transfers and local transport",
      "Romantic 2-hour Shikara ride on Dal Lake",
      "Pre-booked tickets for the Gulmarg Gondola (Phase 1)"
    ],
    exclusions: [
      "Airfare to / from Srinagar",
      "Pony rides in Gulmarg, Sonmarg, or Pahalgam",
      "Union taxi fees in Pahalgam / Sonmarg (due to local union guidelines)",
      "Lunch, snacks, personal expenses, tips"
    ],
    hotelInfo: "Stays include Royal Palace Group of Houseboats (Srinagar), The Khyber Himalayan Resort (Gulmarg), and Grand Mumtaz (Pahalgam).",
    transportInfo: "Premium 4x4 SUV (Toyota Innova or equivalent) with local mountain-cleared drivers, providing safety on high-altitude passes.",
    mealsInfo: "Daily breakfast and buffet dinners. Traditional Kashmiri Wazwan tasting dinner is included at Srinagar houseboats.",
    sightseeingInfo: "Dal Lake, Mughal Gardens, Gulmarg Gondola, Khilanmarg, Betaab Valley, Aru Valley, Thajiwas Glacier Sonmarg.",
    gallery: [
      "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1589979482837-e74f2e145060?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=600"
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.21!2d74.7973!3d34.0837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1853a7b534d0b%3A0xe510e193cd5c9bf5!2sSrinagar%2C%20Jammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1624021319234!5m2!1sen!2sin",
    travelTips: [
      "Carry woolens even in summer as evenings in Gulmarg and Sonmarg can be chilly.",
      "Prepaid mobile connections from outside J&K do not work in the valley; carry a postpaid SIM.",
      "Maintain a friendly bargain for local pony rides and Kashmiri shawl markets."
    ],
    cancellationPolicy: "Full refund if cancelled up to 21 days before departure. 50% refund for cancellations between 10-20 days. No refunds within 10 days of travel.",
    itinerary: [
      {
        day: 1,
        title: "Srinagar Arrival & Romantic Shikara Cruise",
        desc: "Arrive at Srinagar Airport. Receive a warm welcome and transfer to a luxury hand-carved Houseboat on Dal Lake. In the afternoon, enjoy a romantic 2-hour Shikara ride across the calm lake waters, visiting floating flower markets. Traditional Kashmiri Wazwan dinner on-board.",
        meals: "Welcome Dinner Included",
        hotel: "Royal Palace Group of Houseboats, Srinagar"
      },
      {
        day: 2,
        title: "Mughal Gardens Tour & Local Srinagar",
        desc: "Check out from the houseboat and check in at your hotel. Explore the famous Mughal Gardens: Nishat Bagh (Garden of Pleasure), Shalimar Bagh (Abode of Love), and the beautiful fountains of Chashme Shahi. Visit Shankaracharya Temple in the evening.",
        meals: "Breakfast & Dinner Included",
        hotel: "Grand Mumtaz Resort, Srinagar"
      },
      {
        day: 3,
        title: "Sonmarg Glacier Day Excursion",
        desc: "Take a day excursion to Sonmarg, the 'Meadow of Gold'. Drive along the scenic Sindh River. Hire local ponies to visit the majestic Thajiwas Glacier, where snow remains year-round. Return to Srinagar for dinner.",
        meals: "Breakfast & Dinner Included",
        hotel: "Grand Mumtaz Resort, Srinagar"
      },
      {
        day: 4,
        title: "Drive to Gulmarg (Meadow of Flowers)",
        desc: "Drive 2 hours to Gulmarg, winding past scenic pine hills. Check in at your luxury resort. Enjoy local walks and take a ride on the famous high-altitude Gulmarg Gondola Cable Car (Phase 1 tickets included) to view the peaks.",
        meals: "Breakfast & Dinner Included",
        hotel: "The Khyber Himalayan Resort, Gulmarg"
      },
      {
        day: 5,
        title: "Drive to Pahalgam (Valley of Shepherds)",
        desc: "Check out and drive 4 hours to Pahalgam. En route, visit the beautiful saffron fields of Pampore and the ancient ruins of Avantipura temple. Check in at your luxury hotel bordering the Lidder River.",
        meals: "Breakfast & Dinner Included",
        hotel: "Grand Mumtaz, Pahalgam"
      },
      {
        day: 6,
        title: "Betaab Valley & Scenic Pahalgam Meadows",
        desc: "Explore Pahalgam's alpine beauties. Take local union taxis to visit Betaab Valley (named after a famous Bollywood film), Aru Valley, and the pine forests of Chandanwari. Spend the evening walking the town markets.",
        meals: "Breakfast & Dinner Included",
        hotel: "Grand Mumtaz, Pahalgam"
      },
      {
        day: 7,
        title: "Departure from Srinagar",
        desc: "Enjoy breakfast overlooking the river. Pack your bags and drive 2 hours back to Srinagar Airport for your departure flight.",
        meals: "Breakfast Included",
        hotel: "N/A - Departure"
      }
    ]
  },
  "goa-mumbai-escape": {
    id: "goa-mumbai-escape",
    name: "Goa & Mumbai Escape",
    duration: "5 Days / 4 Nights",
    cities: "Mumbai + Goa",
    badge: "Coastal & City",
    popularBadge: "Trending",
    price: 31500,
    priceStr: "₹31,500",
    rating: 4.7,
    reviews: 64,
    category: "beaches",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200",
    description: "Combine the colonial charm of India's commercial capital with the sandy beach bliss of Goa. Stroll marine drives, tour old forts, and cruise sunset waters on a luxury yacht.",
    whyChoose: [
      "5-Star beachfront resort stay in Goa (Taj Exotica / Caravela) with pool access",
      "Private luxury sunset yacht charter cruise on the Mandovi River with champagne",
      "One-way flight tickets from Mumbai to Goa included in the package package",
      "Chauffeur-driven private sedan for all local sightseeing and airport runs"
    ],
    bestTime: "November to April",
    suitableFor: "Friends, Couples, Solo Travelers",
    inclusions: [
      "1 Night luxury stay in Mumbai and 3 Nights beachfront stay in Goa",
      "Daily breakfast buffets and one beachside candle-lit seafood dinner",
      "One-way flight ticket from Mumbai to Goa (Economy Class)",
      "Private AC Sedan for transfers and tours in both cities",
      "2-Hour Private Sunset Yacht Cruise on Mandovi River"
    ],
    exclusions: [
      "Inbound flight to Mumbai and outbound flight from Goa",
      "Water sports activities (scuba, parasailing, jet ski) - can be booked optionally",
      "Monument and site entry fees",
      "Lunches and dinners (except beachside candle-lit dinner)"
    ],
    hotelInfo: "Stay at Taj Lands End (Mumbai) and Caravela Beach Resort (Goa) in sea-view rooms.",
    transportInfo: "Private air-conditioned sedan (Honda City or Toyota Etios) for transfers, sightseeing, and nightlife outings.",
    mealsInfo: "Daily breakfast buffets. One beachside candle-lit seafood dinner in Goa is included.",
    sightseeingInfo: "Gateway of India, Marine Drive, Haji Ali, Fontainhas Old Latin Quarter, Basilica of Bom Jesus, Baga Beach, Palolem Beach.",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1593693411515-c202e974fe08?auto=format&fit=crop&q=80&w=600"
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.82!2d73.818!3d15.496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc39999999999%3A0xe510e193cd5c9bf5!2sPanaji%2C%20Goa!5e0!3m2!1sen!2sin!4v1624021319234!5m2!1sen!2sin",
    travelTips: [
      "Carry swimwear, flip-flops, sunglasses, and high-quality sun cream.",
      "Rent a scooter for half a day to explore narrow Goa back-roads on your own.",
      "Reservations at top restaurants in Goa (e.g. Gunpowder, Thalassa) should be made in advance."
    ],
    cancellationPolicy: "Cancel up to 14 days before departure for a full refund (less flight ticket cancellation charge). Cancellations made 7-13 days prior receive 50% refund. Cancellations within 7 days are non-refundable.",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Mumbai & Gateway Sightseeing",
        desc: "Arrive at Mumbai Airport and check in to Taj Lands End. Afternoon tour of the Gateway of India, Mani Bhavan, and a drive-past of Marine Drive and Victoria Terminus. Enjoy evening drinks overlooking the sea.",
        meals: "Welcome Dinner Included",
        hotel: "Taj Lands End, Mumbai"
      },
      {
        day: 2,
        title: "Fly to Goa & Beach Sunset Check-in",
        desc: "Transfer to airport for your morning flight to Goa. Arrive in Goa and check in to your premium beachfront resort. Spend the afternoon relaxing under the beach shacks. Sunset stroll on the sandy shore.",
        meals: "Breakfast Included",
        hotel: "Caravela Beach Resort, Goa"
      },
      {
        day: 3,
        title: "Fontainhas Latin Quarter & Private Yacht Cruise",
        desc: "Tour Fontainhas, the colorful Portuguese old quarter in Panaji. Visit the historical Basilica of Bom Jesus in Old Goa. In the evening, board your private luxury yacht on the Mandovi River for a sunset cruise with champagne.",
        meals: "Breakfast Included",
        hotel: "Caravela Beach Resort, Goa"
      },
      {
        day: 4,
        title: "North Goa Beaches & Water Sports",
        desc: "Spend the day enjoying North Goa beaches (Calangute, Anjuna, Vagator). Option to book parasailing, jet ski, and bumper rides. In the evening, enjoy a special candle-lit seafood dinner set right on the beach sand.",
        meals: "Breakfast & Beach Dinner Included",
        hotel: "Caravela Beach Resort, Goa"
      },
      {
        day: 5,
        title: "Resort Spa & Final Departure",
        desc: "Enjoy a final breakfast. Spend the morning at the resort pool or indulge in a signature spa therapy. Transfer to Mopa/Dabolim Airport in Goa for your departure flight.",
        meals: "Breakfast Included",
        hotel: "N/A - Departure"
      }
    ]
  },
  "himalayan-adventure": {
    id: "himalayan-adventure",
    name: "Himalayan Adventure",
    duration: "6 Days / 5 Nights",
    cities: "Shimla + Manali + Kasol",
    badge: "Mountain Thrills",
    popularBadge: "Trending",
    price: 29000,
    priceStr: "₹29,000",
    rating: 4.8,
    reviews: 88,
    category: "mountains",
    image: "https://images.unsplash.com/photo-1562979314-bee7453e911c?auto=format&fit=crop&q=80&w=1200",
    description: "Explore the scenic mountain paths of Himachal Pradesh. Stroll Mall Road in Shimla, enjoy paragliding in Solang Valley, and trek the gorgeous pine woods along the Parvati River in Kasol.",
    whyChoose: [
      "Stays in premium mountain chalets and riverside wooden cottages in Kasol",
      "Included paragliding experience in Solang Valley with certified flyers",
      "Private cozy bonfire night and local trout barbecue experience in Manali",
      "Dedicated high-ground SUV with an experienced hill chauffeur"
    ],
    bestTime: "March to June (Summer) or Dec to Feb (Snow)",
    suitableFor: "Young Adults, Adventure Lovers, Group Stays",
    inclusions: [
      "5 Nights stay in premium chalets and cottages",
      "Daily breakfast and dinner at the accommodations",
      "Private AC Sedan/SUV for transfers and sightseeing",
      "Guided paragliding experience in Solang Valley",
      "Riverside bonfire and barbecue dinner in Kasol"
    ],
    exclusions: [
      "Airfare or train to Chandigarh / Shimla / Kullu",
      "Atal Tunnel vehicle tolls (if applicable)",
      "Sightseeing entry charges and guide tips",
      "Lunches and beverages"
    ],
    hotelInfo: "Stay in luxury properties: Radisson Hotel (Shimla), Solang Valley Resort (Manali), and The River View Cottages (Kasol).",
    transportInfo: "Comfortable private Sedan or SUV (Innova) with a professional driver who has extensive mountain pass experience.",
    mealsInfo: "Daily breakfast and dinner buffets. One special Himachali Dham (traditional feast) and one riverside trout barbecue are included.",
    sightseeingInfo: "Mall Road Shimla, Jakhoo Temple, Solang Valley, Rohtang Pass (optional), Manikaran Sahib, Parvati River Valley Kasol.",
    gallery: [
      "https://images.unsplash.com/photo-1562979314-bee7453e911c?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1589979482837-e74f2e145060?auto=format&fit=crop&q=80&w=600"
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7725!2d77.1724!3d31.1048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390578e3e3333333%3A0xe510e193cd5c9bf5!2sShimla%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1624021319234!5m2!1sen!2sin",
    travelTips: [
      "Bring warm jackets and layering, as weather shifts quickly in the high altitude.",
      "Keep standard motion sickness tablets ready if you are sensitive to winding roads.",
      "Check availability of Rohtang Pass permits in advance (requires direct application)."
    ],
    cancellationPolicy: "Cancel up to 14 days prior to travel for a full refund. Cancellations made 7-13 days before travel receive a 50% refund. Cancellations within 7 days are non-refundable.",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Shimla - Summer Capital",
        desc: "Arrive in Shimla via transfer from Chandigarh. Check in at your luxury mountain chalet. In the evening, stroll along Mall Road, visit Christ Church, and take in the panoramic sunset views from the Ridge.",
        meals: "Welcome Dinner Included",
        hotel: "Radisson Hotel, Shimla"
      },
      {
        day: 2,
        title: "Kufri Valley Excursion & Travel to Manali",
        desc: "Excursion to Kufri, a scenic alpine meadow. Afterwards, embark on a scenic 7-hour drive to Manali, passing past Beas River and local apple orchards. Check in at Solang Valley Resort.",
        meals: "Breakfast & Dinner Included",
        hotel: "Solang Valley Resort, Manali"
      },
      {
        day: 3,
        title: "Solang Valley Paragliding & Adventure",
        desc: "Spend the day in Solang Valley. Enjoy a guided paragliding flight over the valley, and try other sports like quad-biking or zorbing. In the evening, enjoy a cozy bonfire and Himachali feast at the resort.",
        meals: "Breakfast & Dinner Included",
        hotel: "Solang Valley Resort, Manali"
      },
      {
        day: 4,
        title: "Atal Tunnel Excursion & Drive to Kasol",
        desc: "Drive through the engineering marvel of Atal Tunnel to see the snow peaks of Lahaul Valley. Afterwards, drive 2 hours to Kasol, a beautiful hamlet on the banks of the Parvati River. Check in to your riverside cottage.",
        meals: "Breakfast Included",
        hotel: "The River View Cottages, Kasol"
      },
      {
        day: 5,
        title: "Chalal Pine Forest Trek & Manikaran",
        desc: "Take a morning trek through pine trees to the scenic village of Chalal. In the afternoon, visit Manikaran Sahib, a holy Sikh shrine known for its hot springs and langar meal. Evening trout barbecue dinner.",
        meals: "Breakfast & Dinner Included",
        hotel: "The River View Cottages, Kasol"
      },
      {
        day: 6,
        title: "Departure to Chandigarh",
        desc: "After breakfast, check out of your cottage and take a 7-hour drive back to Chandigarh Airport / Station for your return flight.",
        meals: "Breakfast Included",
        hotel: "N/A - Departure"
      }
    ]
  },
  "north-east-wonders": {
    id: "north-east-wonders",
    name: "North East Wonders",
    duration: "5 Days / 4 Nights",
    cities: "Gangtok + Darjeeling",
    badge: "Scenic Eastern Hills",
    popularBadge: "Limited Seats",
    price: 26500,
    priceStr: "₹26,500",
    rating: 4.8,
    reviews: 72,
    category: "nature",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1200",
    description: "Witness the majestic peak of Mount Kangchenjunga at sunrise in Darjeeling. Visit Buddhist monasteries, ride local cable cars, and explore organic valleys in Gangtok.",
    whyChoose: [
      "Premium stays in boutique heritage resorts and mountain lodges",
      "Included early morning excursion to Tiger Hill to watch the sunrise",
      "Ride the famous Toy Train (Darjeeling Himalayan Railway) - tickets included",
      "Private luxury 4WD vehicle for all winding hill routes"
    ],
    bestTime: "October to May",
    suitableFor: "Families, Nature Lovers, Couples",
    inclusions: [
      "4 Nights stay in boutique mountain resorts",
      "Daily breakfast and dinner at the hotels",
      "Private AC Sedan/SUV for transfers and sightseeing tours",
      "Early morning Tiger Hill sunrise excursion tickets",
      "Darjeeling Himalayan Railway Toy Train tickets"
    ],
    exclusions: [
      "Airfare or train tickets to Bagdogra / from New Jalpaiguri",
      "Nathu La Pass entry permits (must be requested directly due to security)",
      "Site entry tickets and guide fees",
      "Lunches and personal bills"
    ],
    hotelInfo: "Stay in luxury properties: Elgin Nor-Khill (Gangtok) and Windamere Hotel (Darjeeling). Both are premium properties with colonial charm.",
    transportInfo: "Travel in a private luxury SUV (Innova) suitable for the winding mountain roads of West Bengal and Sikkim.",
    mealsInfo: "Daily breakfast and buffet dinners showcasing local Tibetan, Nepalese, and Continental specialties. Tea tastings are included.",
    sightseeingInfo: "Tsomgo Lake, Rumtek Monastery, Tiger Hill sunrise, Batasia Loop, Ghoom Monastery, organic tea plantations Darjeeling.",
    gallery: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600"
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.45!2d88.612!3d27.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a5fcd2cc9d97%3A0xe510e193cd5c9bf5!2sGangtok%2C%20Sikkim!5e0!3m2!1sen!2sin!4v1624021319234!5m2!1sen!2sin",
    travelTips: [
      "Carry photo IDs and passport copies, as travel in Sikkim requires permit checks.",
      "Tiger Hill sunrise excursion requires waking up at 3:30 AM; pack heavy woolens.",
      "Shop for authentic Darjeeling tea from government-approved stores."
    ],
    cancellationPolicy: "Cancel up to 14 days before travel for a full refund. Cancellations made 7-13 days prior receive a 50% refund. Cancellations within 7 days are non-refundable.",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Gangtok - Gateway to Sikkim",
        desc: "Arrive at Bagdogra Airport. Drive 4.5 hours through valleys and along the Teesta River to Gangtok, the capital of Sikkim. Check in to your luxury resort and enjoy local Sikkimese dinners.",
        meals: "Welcome Dinner Included",
        hotel: "Elgin Nor-Khill, Gangtok"
      },
      {
        day: 2,
        title: "Tsomgo Lake & Baba Mandir Excursion",
        desc: "Take an excursion to the sacred, high-altitude Tsomgo Lake (12,400 ft) and Baba Harbhajan Singh Memorial Temple. Enjoy scenic views of snow-capped mountains. Return to Gangtok for evening leisure.",
        meals: "Breakfast Included",
        hotel: "Elgin Nor-Khill, Gangtok"
      },
      {
        day: 3,
        title: "Gangtok Sightseeing & Drive to Darjeeling",
        desc: "Explore Rumtek Monastery, Do Drul Chorten stupa, and the local ropeway cable car. In the afternoon, drive 4 hours through scenic green valleys to the historic hill town of Darjeeling. Check in to Windamere Hotel.",
        meals: "Breakfast Included",
        hotel: "Windamere Hotel, Darjeeling"
      },
      {
        day: 4,
        title: "Tiger Hill Sunrise & Himalayan Toy Train",
        desc: "Wake up at 3:45 AM for an excursion to Tiger Hill. Witness the sun rise over Mt. Kangchenjunga, painting the snow peaks gold. On the way back, visit Ghoom Monastery and Batasia Loop. After breakfast, ride the famous Himalayan Toy Train, and tour a tea plantation.",
        meals: "Breakfast & Dinner Included",
        hotel: "Windamere Hotel, Darjeeling"
      },
      {
        day: 5,
        title: "Darjeeling Bazaars & Final Departure",
        desc: "After breakfast, check out of your hotel. Chauffeur transfers you down the hills (3.5 hours) to Bagdogra Airport for your departure flight.",
        meals: "Breakfast Included",
        hotel: "N/A - Departure"
      }
    ]
  }
};
