// VibeDate — Bhopal Venues & Mock Data
// All prices in INR ₹

export const BUDGET_MIN = 500;
export const BUDGET_MAX = 10000;
export const BUDGET_DEFAULT = 3000;

// ─── VENUES ─────────────────────────────────────────────────────────────────

export const VIBES = [
  { id: 'romantic', label: 'Romantic', emoji: '🌹', color: 'crimson' },
  { id: 'cozy',     label: 'Cozy',     emoji: '☕', color: 'rose'    },
  { id: 'vibrant',  label: 'Vibrant',  emoji: '🎉', color: 'lime'    },
  { id: 'casual',   label: 'Casual',   emoji: '😊', color: 'pink'    },
];

export const VENUES = [
  // ── ROMANTIC ────────────────────────────────────────────────────────────
  {
    id: 'under-the-mango-tree',
    name: 'Under the Mango Tree',
    vibe: 'romantic',
    location: 'Shyamla Hills, Bhopal',
    rating: 4.6,
    priceRange: '₹₹₹',
    description: 'A lush, candlelit open-air restaurant nestled under a canopy of mango trees. Perfect for a slow, intimate dinner with fairy lights and soft acoustic music.',
    ambience: 'Open-air, candlelit, fairy lights',
    dresscode: 'Smart Casual to Formal',
    coverCharge: 200,
    tags: ['candlelit', 'outdoor', 'live music', 'couples'],
    image: '🌿',
    menu: {
      appetizers: [
        { id: 'ut-a1', name: 'Bruschetta al Pomodoro', price: 280, desc: 'Toasted sourdough, heirloom tomatoes, fresh basil, EVOO' },
        { id: 'ut-a2', name: 'Crispy Calamari', price: 320, desc: 'Golden fried rings, lemon aioli, micro herbs' },
        { id: 'ut-a3', name: 'Burrata & Prosciutto', price: 450, desc: 'Creamy burrata, parma ham, balsamic glaze, arugula' },
        { id: 'ut-a4', name: 'Soup du Jour', price: 180, desc: "Chef's daily creation, artisan bread" },
      ],
      mains: [
        { id: 'ut-m1', name: 'Grilled Chicken Parmigiana', price: 620, desc: 'Free-range chicken, house-made marinara, mozzarella, pasta' },
        { id: 'ut-m2', name: 'Pan-Seared Salmon', price: 780, desc: 'Atlantic salmon, lemon butter, asparagus, crushed potatoes' },
        { id: 'ut-m3', name: 'Truffle Mushroom Risotto', price: 560, desc: 'Arborio rice, wild mushrooms, truffle oil, parmesan' },
        { id: 'ut-m4', name: 'Lamb Rack Provençal', price: 980, desc: 'Herb-crusted rack, ratatouille, rosemary jus, duchess potatoes' },
      ],
      drinks: [
        { id: 'ut-d1', name: 'Rose Lychee Mocktail', price: 220, desc: 'Fresh lychee, rose syrup, lime, soda, edible flowers' },
        { id: 'ut-d2', name: 'Passion Fruit Cooler', price: 200, desc: 'Passion fruit, mint, honey, sparkling water' },
        { id: 'ut-d3', name: 'Mango Tango Sangria (NA)', price: 260, desc: 'Mango, orange, pomegranate, sparkling water' },
        { id: 'ut-d4', name: 'Classic Lemonade', price: 120, desc: 'Freshly squeezed, mint, himalayan salt' },
      ],
      desserts: [
        { id: 'ut-ds1', name: 'Dark Chocolate Fondant', price: 320, desc: 'Warm molten center, vanilla bean ice cream, raspberry coulis' },
        { id: 'ut-ds2', name: 'Tiramisu Classico', price: 280, desc: 'Mascarpone, espresso-soaked ladyfingers, cocoa dusting' },
        { id: 'ut-ds3', name: 'Crème Brûlée', price: 260, desc: 'Vanilla custard, caramelized sugar crust, seasonal berries' },
      ],
    },
  },

  {
    id: 'lake-view-terrace',
    name: 'Lake View Terrace',
    vibe: 'romantic',
    location: 'Upper Lake, Bhopal',
    rating: 4.5,
    priceRange: '₹₹₹',
    description: 'Breathtaking panoramic view of Bhopal\'s iconic Upper Lake. Rooftop dining with a warm amber glow, perfect for sunset dates and anniversaries.',
    ambience: 'Rooftop, lake view, sunset dining',
    dresscode: 'Smart Casual',
    coverCharge: 0,
    tags: ['lake view', 'rooftop', 'sunset', 'romantic'],
    image: '🌅',
    menu: {
      appetizers: [
        { id: 'lv-a1', name: 'Tandoori Mushroom Tikka', price: 260, desc: 'Button mushrooms, smoky tandoor, mint chutney' },
        { id: 'lv-a2', name: 'Crispy Corn Chaat', price: 180, desc: 'Sweet corn, pomegranate, tamarind drizzle, sev' },
        { id: 'lv-a3', name: 'Hara Bhara Kebab', price: 220, desc: 'Spinach-pea patties, yogurt dip, pickled onions' },
      ],
      mains: [
        { id: 'lv-m1', name: 'Butter Chicken', price: 420, desc: 'Slow-cooked chicken, tomato-butter gravy, roomali roti' },
        { id: 'lv-m2', name: 'Dal Makhani', price: 320, desc: 'Black lentils, overnight-cooked, butter, cream, tandoor' },
        { id: 'lv-m3', name: 'Paneer Lababdar', price: 360, desc: 'Cottage cheese, onion-tomato masala, fenugreek' },
        { id: 'lv-m4', name: 'Fish Curry Bhopal Style', price: 480, desc: 'Local river fish, mustard, coconut, curry leaves' },
      ],
      drinks: [
        { id: 'lv-d1', name: 'Sunset Special Mocktail', price: 180, desc: 'Orange, grenadine, pineapple, garnished with cherry' },
        { id: 'lv-d2', name: 'Masala Chai (Premium)', price: 80, desc: 'Hand-crushed spices, full-cream milk, served in kulhad' },
        { id: 'lv-d3', name: 'Virgin Piña Colada', price: 200, desc: 'Coconut cream, pineapple, crushed ice' },
      ],
      desserts: [
        { id: 'lv-ds1', name: 'Gulab Jamun with Rabri', price: 160, desc: 'Soft dumplings, thick saffron milk, pistachios' },
        { id: 'lv-ds2', name: 'Phirni', price: 140, desc: 'Ground rice pudding, rose water, cardamom, served chilled' },
        { id: 'lv-ds3', name: 'Belgian Waffle', price: 220, desc: 'Crispy waffle, Nutella, strawberries, whipped cream' },
      ],
    },
  },

  // ── COZY ────────────────────────────────────────────────────────────────
  {
    id: 'olivers-cafe',
    name: "Oliver's Café",
    vibe: 'cozy',
    location: 'MP Nagar, Bhopal',
    rating: 4.4,
    priceRange: '₹₹',
    description: 'Bhopal\'s most beloved European-style café. Warm wooden interiors, exposed brick, curated playlists, and an extraordinary coffee selection. Ideal for first dates and long conversations.',
    ambience: 'Indoor, warm lighting, café vibes',
    dresscode: 'Casual / Smart Casual',
    coverCharge: 0,
    tags: ['coffee', 'cozy', 'conversation', 'first date'],
    image: '☕',
    menu: {
      appetizers: [
        { id: 'ol-a1', name: 'Bruschetta Board', price: 220, desc: 'Three varieties — classic tomato, mushroom pesto, smoked cheese' },
        { id: 'ol-a2', name: 'Nachos Supreme', price: 260, desc: 'Corn chips, salsa, sour cream, jalapeños, cheese sauce' },
        { id: 'ol-a3', name: 'Garden Veggie Wrap', price: 200, desc: 'Grilled veggies, hummus, feta, spinach tortilla' },
      ],
      mains: [
        { id: 'ol-m1', name: 'Classic Club Sandwich', price: 280, desc: 'Triple-decker, chicken or veggie, fries on the side' },
        { id: 'ol-m2', name: 'Margherita Pizza (7")', price: 340, desc: 'San Marzano sauce, fresh mozzarella, basil, EVOO' },
        { id: 'ol-m3', name: 'Pasta Arrabbiata', price: 300, desc: 'Penne, spicy tomato, garlic, chilli flakes, parmesan' },
        { id: 'ol-m4', name: 'Eggs Benedict', price: 320, desc: 'Poached eggs, Canadian bacon, hollandaise, toasted muffin' },
      ],
      drinks: [
        { id: 'ol-d1', name: 'Café Latte', price: 120, desc: 'Double shot espresso, steamed milk, latte art' },
        { id: 'ol-d2', name: 'Cold Brew Coffee', price: 160, desc: '18-hour cold-steeped, served over ice' },
        { id: 'ol-d3', name: 'Belgian Hot Chocolate', price: 140, desc: 'Rich dark chocolate, whipped cream, marshmallows' },
        { id: 'ol-d4', name: 'Fresh Orange Juice', price: 100, desc: 'Freshly squeezed, served immediately' },
      ],
      desserts: [
        { id: 'ol-ds1', name: 'New York Cheesecake', price: 220, desc: 'Classic baked, blueberry compote, graham crust' },
        { id: 'ol-ds2', name: 'Chocolate Brownie Sundae', price: 200, desc: 'Warm fudge brownie, vanilla ice cream, chocolate sauce' },
        { id: 'ol-ds3', name: 'Crêpes Suzette', price: 240, desc: 'Thin crêpes, orange butter, flambéed tableside' },
      ],
    },
  },

  {
    id: 'the-reading-room',
    name: 'The Reading Room',
    vibe: 'cozy',
    location: 'Arera Colony, Bhopal',
    rating: 4.3,
    priceRange: '₹₹',
    description: 'A literary café with walls lined with books, vintage armchairs, and the smell of fresh coffee. A unique spot for introverts and book-lovers who want an intellectual date.',
    ambience: 'Bookshelf walls, reading nooks, soft jazz',
    dresscode: 'Casual',
    coverCharge: 0,
    tags: ['books', 'quiet', 'intellectual', 'coffee'],
    image: '📚',
    menu: {
      appetizers: [
        { id: 'rr-a1', name: 'Toast & Hummus Platter', price: 180, desc: 'Whole wheat toast, creamy hummus, olive oil, zaatar' },
        { id: 'rr-a2', name: 'Caprese Skewers', price: 200, desc: 'Cherry tomato, mozzarella, basil, balsamic drizzle' },
      ],
      mains: [
        { id: 'rr-m1', name: 'Avocado Toast', price: 260, desc: 'Sourdough, smashed avocado, poached egg, chilli flakes' },
        { id: 'rr-m2', name: 'Grilled Cheese & Tomato Soup', price: 280, desc: 'Comfort classic, aged cheddar, roasted tomato bisque' },
        { id: 'rr-m3', name: 'Mushroom Quesadilla', price: 240, desc: 'Sautéed mushrooms, peppers, cheese, sour cream' },
      ],
      drinks: [
        { id: 'rr-d1', name: 'Flat White', price: 130, desc: 'Ristretto, microfoam milk, served in ceramic cup' },
        { id: 'rr-d2', name: 'Hibiscus Iced Tea', price: 110, desc: 'Dried hibiscus, honey, lemon, mint, ice' },
        { id: 'rr-d3', name: 'Matcha Latte', price: 150, desc: 'Ceremonial grade matcha, oat milk, honey' },
      ],
      desserts: [
        { id: 'rr-ds1', name: 'Banana Bread Slice', price: 120, desc: 'Warm, house-baked, served with butter and honey' },
        { id: 'rr-ds2', name: 'Chocolate Mousse', price: 180, desc: 'Airy 70% dark chocolate mousse, orange zest' },
      ],
    },
  },

  // ── VIBRANT ─────────────────────────────────────────────────────────────
  {
    id: 'greek-food-brewery',
    name: 'Greek Food & Brewery',
    vibe: 'vibrant',
    location: 'Zone-1, MP Nagar, Bhopal',
    rating: 4.5,
    priceRange: '₹₹₹',
    description: 'Bhopal\'s liveliest Mediterranean restaurant and brewery. Think loud laughter, shared platters, vibrant murals, and the energy of a Mediterranean island taverna. Great for adventurous couples.',
    ambience: 'Lively, murals, open kitchen, DJ on weekends',
    dresscode: 'Smart Casual',
    coverCharge: 0,
    tags: ['mediterranean', 'lively', 'sharing plates', 'vibrant'],
    image: '🎊',
    menu: {
      appetizers: [
        { id: 'gfb-a1', name: 'Greek Mezze Platter', price: 580, desc: 'Hummus, tzatziki, pita, olives, stuffed grape leaves, feta' },
        { id: 'gfb-a2', name: 'Saganaki (Flaming Cheese)', price: 380, desc: 'Pan-fried halloumi, flambéed tableside, honey & thyme' },
        { id: 'gfb-a3', name: 'Calamari Frites', price: 340, desc: 'Crispy squid rings, garlic aioli, lemon wedge' },
        { id: 'gfb-a4', name: 'Spanakopita', price: 280, desc: 'Spinach & feta phyllo triangles, yogurt dip' },
      ],
      mains: [
        { id: 'gfb-m1', name: 'Souvlaki Platter', price: 680, desc: 'Chicken & paneer skewers, pita, tzatziki, Greek salad' },
        { id: 'gfb-m2', name: 'Moussaka', price: 520, desc: 'Layered eggplant, spiced keema/veggies, béchamel, oven-baked' },
        { id: 'gfb-m3', name: 'Seafood Paella', price: 780, desc: 'Saffron rice, prawns, squid, mussels, chorizo, lemon' },
        { id: 'gfb-m4', name: 'Lamb Gyros Bowl', price: 580, desc: 'Slow-roasted lamb, tzatziki rice, pickled onions, fries' },
      ],
      drinks: [
        { id: 'gfb-d1', name: 'Craft Beer (House Brew)', price: 280, desc: 'Microbrewed lager, wheat beer, or IPA — brewed in-house' },
        { id: 'gfb-d2', name: 'Greek Lemonade', price: 160, desc: 'Thick lemon concentrate, honey, oregano, sparkling water' },
        { id: 'gfb-d3', name: 'Ouzo Sour Mocktail', price: 200, desc: 'Anise-inspired, citrus, egg white foam, cherry garnish' },
        { id: 'gfb-d4', name: 'Sangria Blanca (NA)', price: 240, desc: 'White grape, peach, ginger, sparkling lemonade' },
      ],
      desserts: [
        { id: 'gfb-ds1', name: 'Baklava', price: 200, desc: 'Layered phyllo, pistachios, honey syrup, rose water' },
        { id: 'gfb-ds2', name: 'Loukoumades', price: 220, desc: 'Greek honey donuts, cinnamon, sesame, Nutella drizzle' },
        { id: 'gfb-ds3', name: 'Galaktoboureko', price: 240, desc: 'Custard-filled phyllo pastry, lemon syrup' },
      ],
    },
  },

  {
    id: 'the-hub-rooftop',
    name: 'The Hub Rooftop',
    vibe: 'vibrant',
    location: 'New Market, Bhopal',
    rating: 4.3,
    priceRange: '₹₹',
    description: 'A buzzing rooftop bar and grill with city views, neon signs, live DJ sets on weekends, and a global menu that keeps everyone happy. Best for lively, fun-first dates.',
    ambience: 'Rooftop, neon lighting, DJ, city views',
    dresscode: 'Smart Casual',
    coverCharge: 100,
    tags: ['rooftop', 'DJ', 'city view', 'fun'],
    image: '🌆',
    menu: {
      appetizers: [
        { id: 'hub-a1', name: 'Loaded Nachos', price: 320, desc: 'Tortilla chips, nacho cheese, jalapeños, salsa, guacamole' },
        { id: 'hub-a2', name: 'Chicken Wings (6 pcs)', price: 380, desc: 'Buffalo or BBQ, ranch dip, celery sticks' },
        { id: 'hub-a3', name: 'Onion Rings Tower', price: 220, desc: 'Beer-battered, chipotle mayo, ketchup' },
      ],
      mains: [
        { id: 'hub-m1', name: 'Gourmet Burger', price: 460, desc: 'Beef/Paneer patty, lettuce, tomato, pickles, special sauce, fries' },
        { id: 'hub-m2', name: 'BBQ Chicken Pizza', price: 480, desc: 'Smoky BBQ sauce, chicken, caramelized onions, mozzarella' },
        { id: 'hub-m3', name: 'Sizzling Fajitas', price: 520, desc: 'Chicken/paneer, peppers, onions, tortillas, sour cream, guacamole' },
      ],
      drinks: [
        { id: 'hub-d1', name: 'Neon City Mocktail', price: 180, desc: 'Blue curacao, sprite, mint, lemon — glows under UV' },
        { id: 'hub-d2', name: 'Watermelon Slushie', price: 150, desc: 'Blended fresh watermelon, lime, rock salt, chilli' },
        { id: 'hub-d3', name: 'Masala Coke', price: 80, desc: 'Cola, chaat masala, lemon, mint' },
      ],
      desserts: [
        { id: 'hub-ds1', name: 'Churros with Dips', price: 200, desc: 'Cinnamon sugar churros, chocolate & caramel dips' },
        { id: 'hub-ds2', name: 'Brownie Blast', price: 180, desc: 'Double chocolate brownie, ice cream, chocolate sauce' },
      ],
    },
  },

  // ── CASUAL ──────────────────────────────────────────────────────────────
  {
    id: 'sagar-gaire',
    name: 'Sagar Gaire',
    vibe: 'casual',
    location: 'Bittan Market, Bhopal',
    rating: 4.2,
    priceRange: '₹',
    description: 'A beloved Bhopal institution — famous for its authentic Bhopal street food, chaat, and local snacks. Perfect for a relaxed, no-pressure first hangout where the food does all the talking.',
    ambience: 'Outdoor seating, casual, buzzing street vibe',
    dresscode: 'Casual',
    coverCharge: 0,
    tags: ['street food', 'local', 'authentic', 'casual'],
    image: '🌮',
    menu: {
      appetizers: [
        { id: 'sg-a1', name: 'Pani Puri (6 pcs)', price: 60, desc: 'Crispy puris, spiced tamarind water, potato-chickpea filling' },
        { id: 'sg-a2', name: 'Dahi Bhalla', price: 80, desc: 'Soft lentil dumplings, thick yogurt, tamarind & green chutneys' },
        { id: 'sg-a3', name: 'Sev Puri', price: 70, desc: 'Crispy puri, potato, chutneys, onion, fine sev' },
        { id: 'sg-a4', name: 'Bhel Puri', price: 80, desc: 'Puffed rice, sev, raw mango, onion, coriander, chutney' },
      ],
      mains: [
        { id: 'sg-m1', name: 'Bhopal Korma', price: 180, desc: 'Authentic Bhopal-style chicken or veggie korma, sheermal' },
        { id: 'sg-m2', name: 'Palak Poori Sabzi', price: 120, desc: 'Spinach-infused deep-fried bread, spiced potato curry' },
        { id: 'sg-m3', name: 'Kachori Sabzi', price: 100, desc: 'Flaky stuffed kachori, tangy aloo sabzi' },
        { id: 'sg-m4', name: 'Samosa Chaat', price: 90, desc: 'Crispy samosa, chickpeas, chutneys, yogurt, sev' },
      ],
      drinks: [
        { id: 'sg-d1', name: 'Lassi (Sweet / Salty)', price: 60, desc: 'Thick yogurt-based drink, garnished with malai' },
        { id: 'sg-d2', name: 'Shikanji', price: 40, desc: 'Spiced lemonade, cumin, black salt, ice' },
        { id: 'sg-d3', name: 'Sugarcane Juice', price: 50, desc: 'Fresh pressed, ginger, lemon, ice' },
      ],
      desserts: [
        { id: 'sg-ds1', name: 'Jalebi (250g)', price: 80, desc: 'Hot spiral fritters, sugar syrup, best with rabri' },
        { id: 'sg-ds2', name: 'Rabri Jalebi Combo', price: 120, desc: 'Classic combo — crispy jalebi, condensed milk rabri' },
        { id: 'sg-ds3', name: 'Kulfi Falooda', price: 100, desc: 'Creamy kulfi, rose syrup, basil seeds, vermicelli, milk' },
      ],
    },
  },

  {
    id: 'chai-tale',
    name: 'Chai Tale',
    vibe: 'casual',
    location: 'BHEL, Bhopal',
    rating: 4.1,
    priceRange: '₹',
    description: 'A quirky, Instagram-friendly tea café with 50+ varieties of chai, board games, and cozy nooks. Ideal for a relaxed, budget-friendly date that still feels special.',
    ambience: 'Quirky interiors, board games, café',
    dresscode: 'Casual',
    coverCharge: 0,
    tags: ['chai', 'budget-friendly', 'board games', 'casual'],
    image: '🫖',
    menu: {
      appetizers: [
        { id: 'ct-a1', name: 'Maggi Masala', price: 80, desc: 'Buttered Maggi, extra masala, topped with cheese and vegetables' },
        { id: 'ct-a2', name: 'Veg Sandwich (Grilled)', price: 100, desc: 'Cheese, veggies, green chutney, toasted to perfection' },
        { id: 'ct-a3', name: 'Popcorn Basket', price: 70, desc: 'Buttered / cheese / spicy — choose your flavor' },
      ],
      mains: [
        { id: 'ct-m1', name: 'Bread Omelette', price: 100, desc: 'Fluffy egg omelette, butter toast, ketchup' },
        { id: 'ct-m2', name: 'Aloo Paratha (2 pcs)', price: 120, desc: 'Stuffed flatbread, white butter, fresh pickle, yogurt' },
        { id: 'ct-m3', name: 'Veg Roll', price: 130, desc: 'Crispy paratha, spiced veggies, mint chutney' },
      ],
      drinks: [
        { id: 'ct-d1', name: 'Cutting Chai', price: 30, desc: 'Strong, spiced, served in a small glass — classic cutting style' },
        { id: 'ct-d2', name: 'Masala Chai', price: 50, desc: 'Full cup, hand-crushed spices, ginger, cardamom' },
        { id: 'ct-d3', name: 'Rose Tulsi Chai', price: 60, desc: 'Floral and herbaceous, calming blend' },
        { id: 'ct-d4', name: 'Cold Coffee (Thick)', price: 110, desc: 'Blended cold coffee, vanilla ice cream, extra shot' },
      ],
      desserts: [
        { id: 'ct-ds1', name: 'Kesar Chai Cake', price: 120, desc: 'Sponge cake infused with saffron chai flavor' },
        { id: 'ct-ds2', name: 'Chocolate Mousse Cup', price: 100, desc: 'Light and airy, served in a cute ceramic cup' },
      ],
    },
  },
];

// ─── GIFTS ───────────────────────────────────────────────────────────────────

export const GIFTS = [
  // Flowers
  { id: 'g1', category: 'flowers', name: 'Red Rose Bouquet (12)', price: 350, desc: 'Classic long-stemmed red roses, wrapped elegantly', vibes: ['romantic'], emoji: '🌹' },
  { id: 'g2', category: 'flowers', name: 'Mixed Flower Arrangement', price: 280, desc: 'Sunflowers, tulips, lilies — bright & cheerful', vibes: ['casual', 'vibrant'], emoji: '💐' },
  { id: 'g3', category: 'flowers', name: 'Single Stem Rose', price: 80, desc: 'A single perfect red rose — understated romance', vibes: ['romantic', 'cozy'], emoji: '🌹' },
  { id: 'g4', category: 'flowers', name: 'Lavender Bunch', price: 200, desc: 'Fresh lavender, calming and beautiful', vibes: ['cozy'], emoji: '💜' },

  // Chocolates
  { id: 'g5', category: 'chocolates', name: "Ferrero Rocher Box (16 pcs)", price: 450, desc: 'Elegant gold box, premium hazelnut chocolates', vibes: ['romantic', 'cozy'], emoji: '🍫' },
  { id: 'g6', category: 'chocolates', name: 'Cadbury Celebrations Box', price: 280, desc: 'Assorted Cadbury chocolates, great for sharing', vibes: ['casual', 'vibrant'], emoji: '🎁' },
  { id: 'g7', category: 'chocolates', name: 'Handmade Truffle Box (8 pcs)', price: 380, desc: 'Artisan dark chocolate truffles, multiple flavors', vibes: ['romantic'], emoji: '🍫' },
  { id: 'g8', category: 'chocolates', name: 'Lindt Lindor Box', price: 520, desc: 'Swiss milk chocolate truffles, melt-in-mouth', vibes: ['romantic', 'cozy'], emoji: '🍫' },

  // Personalized
  { id: 'g9', category: 'personalized', name: 'Photo Printed Mug', price: 320, desc: 'Custom photo mug — add a memorable picture', vibes: ['cozy', 'casual'], emoji: '☕' },
  { id: 'g10', category: 'personalized', name: 'Name Engraved Keychain', price: 250, desc: 'Metal keychain with name or initials engraved', vibes: ['casual', 'cozy'], emoji: '🔑' },
  { id: 'g11', category: 'personalized', name: 'Custom Perfume Bottle', price: 680, desc: 'Personalized label on a premium fragrance', vibes: ['romantic'], emoji: '🌸' },
  { id: 'g12', category: 'personalized', name: 'Love Letter Scroll Set', price: 180, desc: 'Vintage scroll with pen for a handwritten note', vibes: ['romantic', 'cozy'], emoji: '📜' },

  // Jewelry
  { id: 'g13', category: 'jewelry', name: 'Delicate Silver Bracelet', price: 850, desc: 'Minimalist 925 silver chain bracelet', vibes: ['romantic'], emoji: '✨' },
  { id: 'g14', category: 'jewelry', name: 'Crystal Heart Pendant', price: 650, desc: 'Rose gold chain with crystal heart charm', vibes: ['romantic', 'cozy'], emoji: '💎' },
  { id: 'g15', category: 'jewelry', name: 'Stud Earrings (Pearl)', price: 580, desc: 'Freshwater pearl studs, elegant and timeless', vibes: ['romantic'], emoji: '🌕' },
  { id: 'g16', category: 'jewelry', name: 'Friendship Bracelet Set', price: 350, desc: 'Matching handwoven bracelets for you and them', vibes: ['casual', 'vibrant'], emoji: '🤝' },

  // Budget / Fun
  { id: 'g17', category: 'fun', name: 'Scented Candle', price: 220, desc: 'Luxury soy candle, vanilla & sandalwood', vibes: ['romantic', 'cozy'], emoji: '🕯️' },
  { id: 'g18', category: 'fun', name: 'Polaroid Instant Photo', price: 150, desc: 'Take a polaroid snapshot, frame it together', vibes: ['vibrant', 'casual'], emoji: '📸' },
  { id: 'g19', category: 'fun', name: 'Novelty Card Game', price: 180, desc: '"We\'re Not Really Strangers" - connection card game', vibes: ['cozy', 'casual'], emoji: '🃏' },
  { id: 'g20', category: 'fun', name: 'Mini Succulent Plant', price: 120, desc: 'Cute potted succulent — "low maintenance, like me"', vibes: ['casual'], emoji: '🌵' },
];

// ─── MESSAGES ────────────────────────────────────────────────────────────────

export const MESSAGE_TEMPLATES = {
  askOut: {
    flirty: [
      "Hey, so I've been trying to think of an excuse to talk to you more... then I realized I didn't need one. Want to grab dinner at {venue} this {day}? 😏",
      "I did some serious research and apparently {venue} is the best place for incredible food AND incredible company. One of those is guaranteed. Care to find out about the other? 😉",
      "Hypothetically speaking — if I asked you to {venue} on {day}, and you said yes... how hypothetically amazing would that be? 💭",
    ],
    casual: [
      "Hey! I'm thinking of checking out {venue} on {day}. You should come! 😊",
      "I keep hearing great things about {venue}. Want to try it together on {day}?",
      "Plans for {day}? I was thinking we could hit up {venue} — heard the food is amazing.",
    ],
    direct: [
      "I'd like to take you to dinner at {venue} on {day}. Are you free?",
      "Would you like to go on a date with me to {venue} this {day}?",
      "I'd really like to spend some time with you. How about {venue} on {day}?",
    ],
    cute: [
      "Okay so I may have planned an entire perfect evening... it involves {venue}, {day}, and most importantly — you 🥺✨",
      "Someone told me the secret to a perfect evening is: great food + even better company. {venue} handles the first part. You handle the second? 🌸 {day}?",
      "I've been working up the courage to ask you this... would you want to have a little adventure with me at {venue} on {day}? 🎀",
    ],
  },
  confirmPlans: {
    flirty: [
      "Just confirming our date at {venue} on {day}! Try not to look too good — I'm already nervous enough 😅✨",
      "Date confirmed ✅ {venue}, {day}. Fair warning: I'm going to be my most charming self 😏",
    ],
    casual: [
      "Hey! Just wanted to confirm we're good for {venue} on {day}! Looking forward to it 😊",
      "All set for {venue} on {day}! Can't wait!",
    ],
    direct: [
      "Confirming our plans: {venue}, {day}. See you then.",
      "Just wanted to confirm we're meeting at {venue} on {day}. Looking forward to it.",
    ],
    cute: [
      "Officially excited!! ✨ {venue} on {day} — I've been thinking about it all week 🥺",
      "Can {day} come faster please? {venue} with you sounds like the best evening ever 🌸",
    ],
  },
  postDate: {
    flirty: [
      "So... {venue} was amazing. But honestly? You were the highlight of the evening 😏 Round 2?",
      "Had to text you — tonight was genuinely wonderful. And that's entirely your fault 😄 Same time next week?",
    ],
    casual: [
      "Tonight was really fun! {venue} definitely delivered. We should do this again sometime 😊",
      "Just got home — had such a good time! Thanks for coming out 😄",
    ],
    direct: [
      "I really enjoyed tonight. Would you want to do it again?",
      "I had a great time at {venue}. I'd like to see you again.",
    ],
    cute: [
      "I literally can't stop smiling thinking about tonight 🌸 You made {venue} feel magical ✨",
      "Okay so tonight was *everything* 🥺 Thank you for saying yes. Please say yes again soon?",
    ],
  },
};

// ─── ITINERARY TEMPLATES ─────────────────────────────────────────────────────

export const ITINERARY_TEMPLATES = {
  romantic: [
    { time: '5:30 PM', icon: '🛍️', activity: 'Pick up the flowers & gifts', detail: 'Stop by the florist, have the bouquet ready' },
    { time: '6:00 PM', icon: '🚗', activity: 'Pick up your date', detail: 'Arrive 5 mins early, compliment their outfit genuinely' },
    { time: '6:30 PM', icon: '🌆', activity: 'Sunset stroll', detail: 'Take a short scenic walk before dinner — builds anticipation' },
    { time: '7:00 PM', icon: '🍽️', activity: 'Dinner at {venue}', detail: 'Your reservation is set. Let them order first.' },
    { time: '9:00 PM', icon: '☕', activity: 'After-dinner coffee/dessert', detail: 'Linger over coffee — the best conversations happen here' },
    { time: '9:45 PM', icon: '🚶', activity: 'Evening walk', detail: 'Stroll under the stars, no destination needed' },
    { time: '10:30 PM', icon: '🏠', activity: 'Drop them home', detail: 'Walk them to their door. A warm goodbye is everything.' },
    { time: '10:45 PM', icon: '💬', activity: 'Send the post-date text', detail: '"I had such a great time" — send it within 30 mins' },
  ],
  cozy: [
    { time: '3:00 PM', icon: '🛍️', activity: 'Pick up a small gift', detail: 'Something thoughtful — chocolates or a book they mentioned' },
    { time: '3:30 PM', icon: '☕', activity: 'Arrive at {venue}', detail: 'Find a cozy corner table — arrive a few mins early' },
    { time: '4:00 PM', icon: '📚', activity: 'Coffee & conversation', detail: 'Ask open-ended questions, put your phone away' },
    { time: '5:00 PM', icon: '🃏', activity: 'Play a card game or board game', detail: 'Keeps things light and fun, great conversation starter' },
    { time: '6:00 PM', icon: '🍰', activity: 'Share a dessert', detail: '"One dessert, two forks" — classic move 😄' },
    { time: '7:00 PM', icon: '🚶', activity: 'Evening walk nearby', detail: 'Keep the energy going — explore the neighbourhood' },
    { time: '8:00 PM', icon: '🏠', activity: 'Wrap up the evening', detail: 'Leave them wanting more. Quality > quantity.' },
  ],
  vibrant: [
    { time: '6:00 PM', icon: '👗', activity: 'Get ready — look sharp!', detail: 'This is the fun, lively venue — dress to impress + feel good' },
    { time: '7:00 PM', icon: '🎉', activity: 'Arrive at {venue}', detail: 'Request a good table — near the energy, not too loud to talk' },
    { time: '7:15 PM', icon: '🥂', activity: 'Welcome drinks & share starters', detail: 'Order sharing platters — eating together is bonding' },
    { time: '8:00 PM', icon: '🍽️', activity: 'Main course', detail: 'Try something neither of you has had before' },
    { time: '9:00 PM', icon: '💃', activity: 'Dance or explore', detail: 'If there\'s a DJ, hit the floor. Life is short!' },
    { time: '10:00 PM', icon: '🌃', activity: 'After-party / rooftop views', detail: 'Take in the city lights together' },
    { time: '11:00 PM', icon: '🏠', activity: 'Drop them home', detail: 'End the night on a high note — plans for next time?' },
  ],
  casual: [
    { time: '5:00 PM', icon: '🤝', activity: 'Meet at {venue}', detail: 'Keep it relaxed — no pressure, just good vibes' },
    { time: '5:15 PM', icon: '🍜', activity: 'Order and eat together', detail: 'Try multiple things from the menu, share bites' },
    { time: '6:30 PM', icon: '🚶', activity: 'Take a walk nearby', detail: 'Explore a market or park — keep it spontaneous' },
    { time: '7:30 PM', icon: '🍨', activity: 'Grab some ice cream or chai', detail: 'Low-key dessert run — the conversation is the main event' },
    { time: '8:30 PM', icon: '🌙', activity: 'Wrap up', detail: 'Keep it breezy — make solid plans to meet again!' },
  ],
};

// ─── OUTFIT SUGGESTIONS ──────────────────────────────────────────────────────

export const OUTFIT_SUGGESTIONS = {
  romantic: {
    male: {
      outfit: 'Navy blazer, white dress shirt (tucked), charcoal trousers, Oxford shoes',
      colors: ['#1e3a5f', '#ffffff', '#4a4a4a'],
      colorNames: ['Navy', 'White', 'Charcoal'],
      tips: ['Iron your shirt perfectly', 'Wear a subtle cologne (not too strong)', 'A simple watch adds polish'],
      avoid: ['Casual tees', 'Dirty sneakers', 'Shorts'],
    },
    female: {
      outfit: 'Midi wrap dress in deep red or blush, strappy heels or block heels, minimalist jewelry',
      colors: ['#b91c1c', '#f9a8d4', '#d4af37'],
      colorNames: ['Deep Red', 'Blush', 'Gold Accent'],
      tips: ['A wrap dress flatters all body types', 'Keep makeup polished but natural', 'Carry a small clutch'],
      avoid: ['Heavy chunky jewelry', 'Very casual denim', 'Platform sneakers'],
    },
  },
  cozy: {
    male: {
      outfit: 'Fitted chino or dark jeans, a well-fitted crew-neck sweater or Oxford shirt, white sneakers or loafers',
      colors: ['#d97706', '#f3f4f6', '#374151'],
      colorNames: ['Warm Amber', 'Light Grey', 'Slate'],
      tips: ['Layer with a denim jacket if needed', 'Keep it clean and fresh', 'Subtle cologne works great here'],
      avoid: ['Wrinkled clothes', 'Athletic wear', 'Old torn jeans'],
    },
    female: {
      outfit: 'Cozy knit sweater, high-waist mom jeans or a cute corduroy skirt, ankle boots or Chelsea boots',
      colors: ['#d1fae5', '#fef3c7', '#78350f'],
      colorNames: ['Sage Green', 'Warm Cream', 'Brown'],
      tips: ['A scarf or beanie adds a cute touch', 'Keep makeup natural and fresh', 'Comfortable yet stylish is the goal'],
      avoid: ['Overdressing (ballgowns etc)', 'Uncomfortable shoes', 'Anything too revealing for a café'],
    },
  },
  vibrant: {
    male: {
      outfit: 'Bold patterned shirt or bright solid (think burgundy, teal), slim dark jeans, clean white/black sneakers or boots',
      colors: ['#7c3aed', '#dc2626', '#0891b2'],
      colorNames: ['Vibrant Purple', 'Bold Red', 'Teal'],
      tips: ['Express yourself — this is the night for personality!', 'A subtle accessory — rings, chains — adds flair', 'Make sure your shoes are clean'],
      avoid: ['Bland, washed-out colors', 'Overly formal suit (too stiff)', 'Wrinkled or unironed pieces'],
    },
    female: {
      outfit: 'A statement mini dress or co-ord set in a bold color, heeled boots or strappy sandals, bold earrings',
      colors: ['#f59e0b', '#ec4899', '#8b5cf6'],
      colorNames: ['Electric Gold', 'Hot Pink', 'Electric Violet'],
      tips: ['Own the look with confidence — it\'s the best accessory', 'A bold lip or eye — pick one, not both', 'Dancing-friendly shoes are a must!'],
      avoid: ['Anything too restricting for dancing', 'Playing it too safe', 'Over-accessorizing'],
    },
  },
  casual: {
    male: {
      outfit: 'Clean t-shirt (solid or simple graphic), comfortable jeans, fresh white sneakers, optional overshirt',
      colors: ['#6b7280', '#1f2937', '#f9fafb'],
      colorNames: ['Grey', 'Dark Denim', 'White'],
      tips: ['Freshly laundered clothes make a huge difference', 'Grooming > expensive clothes', 'Cologne is optional but nice'],
      avoid: ['Holes or stains', 'Crumpled clothes', 'Too-casual gym wear'],
    },
    female: {
      outfit: 'Casual sundress or high-waist jeans with a cute top, sneakers or flats, simple accessories',
      colors: ['#fde68a', '#a7f3d0', '#fca5a5'],
      colorNames: ['Sunny Yellow', 'Mint Green', 'Peach'],
      tips: ['Cute and effortless is the goal', 'Lip gloss and clear mascara = perfect casual makeup', 'A cute tote bag ties it together'],
      avoid: ['Overdressing (heels for street food)', 'Heavy makeup', 'Too many accessories'],
    },
  },
};

// ─── CONVERSATION DECK ───────────────────────────────────────────────────────

export const CONVERSATION_CARDS = [
  { id: 1, category: 'Light', question: "If you could only eat one cuisine for the rest of your life, what would it be and why?", emoji: '🍜' },
  { id: 2, category: 'Light', question: "What's the most spontaneous thing you've ever done?", emoji: '⚡' },
  { id: 3, category: 'Light', question: "If you could instantly become an expert in something, what would you choose?", emoji: '🧠' },
  { id: 4, category: 'Light', question: "What's a movie or show you can re-watch endlessly and never get bored of?", emoji: '🎬' },
  { id: 5, category: 'Light', question: "If you could have dinner with any 3 people (dead or alive), who would they be?", emoji: '🍽️' },
  { id: 6, category: 'Medium', question: "What's something you're genuinely passionate about that most people wouldn't expect from you?", emoji: '🔥' },
  { id: 7, category: 'Medium', question: "What does your perfect weekend look like?", emoji: '📅' },
  { id: 8, category: 'Medium', question: "What's a goal you're currently working toward that you're really excited about?", emoji: '🎯' },
  { id: 9, category: 'Medium', question: "What's the best piece of advice you've ever received? Did you follow it?", emoji: '💡' },
  { id: 10, category: 'Medium', question: "What kind of travel experience excites you more — luxury resort or backpacking adventure?", emoji: '✈️' },
  { id: 11, category: 'Deep', question: "What's something you believe that most people around you disagree with?", emoji: '🤔' },
  { id: 12, category: 'Deep', question: "When did you last feel truly proud of yourself, and what was it for?", emoji: '🏆' },
  { id: 13, category: 'Deep', question: "What does 'home' mean to you — is it a place, people, or a feeling?", emoji: '🏡' },
  { id: 14, category: 'Deep', question: "If you could change one thing about how you were raised, what would it be?", emoji: '🌱' },
  { id: 15, category: 'Deep', question: "What quality in a person do you find genuinely rare and deeply attractive?", emoji: '💎' },
  { id: 16, category: 'Fun', question: "You get to plan the perfect 48-hour city trip — where and what's on the itinerary?", emoji: '🗺️' },
  { id: 17, category: 'Fun', question: "What's your totally useless but amazing hidden talent?", emoji: '🎪' },
  { id: 18, category: 'Fun', question: "Hot take: give me your most controversial food opinion.", emoji: '🌶️' },
  { id: 19, category: 'Fun', question: "You win ₹1 crore tomorrow. What's the first thing you do?", emoji: '💰' },
  { id: 20, category: 'Fun', question: "Netflix, books, or music? And what's your current obsession?", emoji: '📱' },
];

// ─── WINGMAN RESPONSES ────────────────────────────────────────────────────────

export const WINGMAN_TOPICS = {
  etiquette: {
    keywords: ['etiquette', 'manners', 'behave', 'how to act', 'rude', 'table manners', 'polite'],
    responses: [
      "**Date Etiquette 101:** Put your phone face-down or away entirely. Arrive 5 minutes early — it shows you value their time. Listen more than you talk (60/40 ratio). Don't ask about exes on a first date. Split the bill or offer to pay — read the room. And always walk on the road side of the pavement. 🎩",
      "**Golden rules:** Make eye contact (not staring!), laugh genuinely, be present. Small things like pulling out a chair or holding a door open — without being performative about it — go a long way. And please, put the phone away.",
    ],
  },
  conversation: {
    keywords: ['conversation', 'talk', 'what to say', 'silent', 'awkward', 'topics', 'questions'],
    responses: [
      "**Avoid awkward silences with this:** Ask open-ended questions that start with 'What', 'How', or 'Tell me about...'. Avoid Yes/No questions. Great topics: travel, passions, childhood memories, bucket lists, funny stories. Avoid: exes, salary, politics (first date!), and anything too intense too soon. 💬",
      "**The magic formula:** Share something about yourself, then ask them a similar question. It creates natural back-and-forth. If silence happens — it's okay! A confident smile and 'this is nice' is perfectly charming.",
    ],
  },
  outfit: {
    keywords: ['outfit', 'wear', 'dress', 'clothes', 'attire', 'style', 'look'],
    responses: [
      "**Style advice:** Match the venue vibe (check the Outfit Coordinator section!). The most important rule: wear something you feel confident in. Confidence > expensive clothes. Make sure everything is clean, ironed, and fits well. Fresh breath and light cologne/perfume — non-negotiable. ✨",
      "**Quick outfit rule:** Dress one level up from the venue's dress code. If it's casual — smart casual. If smart casual — business casual. You look put-together, they feel you made an effort. Win-win.",
    ],
  },
  gift: {
    keywords: ['gift', 'flowers', 'present', 'bring', 'chocolates', 'surprise'],
    responses: [
      "**Gift strategy:** A single red rose + a small box of quality chocolates is timeless and never feels 'too much'. Check the Gift Suggester section for budget-matched ideas. The thought matters most — something that shows you listened to what they like is worth 10x more than an expensive generic gift. 🌹",
      "**Pro tip:** If they mentioned a favorite chocolate, book, or something they wanted — THAT is your gift. Memory-based gifts are the most romantic thing you can do.",
    ],
  },
  compliment: {
    keywords: ['compliment', 'praise', 'nice things', 'what to say to her', 'what to say to him'],
    responses: [
      "**Complimenting right:** Be specific. 'You look nice' is weak. 'That color looks incredible on you' or 'I love how you laughed at that — it's infectious' is memorable. Compliment their character, not just looks: 'You're so easy to talk to' hits different. 💫",
      "**One rule:** Only say it if you mean it. Authenticity is detected immediately. A genuine, specific compliment once > five generic ones. And smile when you say it!",
    ],
  },
  nervous: {
    keywords: ['nervous', 'anxious', 'scared', 'nervous wreck', 'butterflies', 'calm down', 'relax'],
    responses: [
      "**Managing nerves:** Deep breath — this is supposed to be fun! Remember: they said yes, which means they want to be there too. Focus on making THEM comfortable, not on how you're coming across. Curiosity beats performance anxiety every time. You've got this! 💪",
      "**Reframe nervousness:** Your body's excitement and nervousness feel the same — just relabel it as excitement. Do a power pose for 2 mins before meeting them (seriously, science backs this). And smile — it relaxes both of you.",
    ],
  },
  firstDate: {
    keywords: ['first date', 'tips', 'advice', 'help', 'how to', 'what to do', 'impress'],
    responses: [
      "**First Date Masterclass:** 1) Be present (no phone). 2) Listen actively — remember what they say. 3) Make them laugh. 4) Be genuinely curious, not interrogating. 5) Don't over-plan — let conversations flow. 6) End on a high note — leave them wanting more. You're already planning this thoughtfully, which means you're already ahead! 🎯",
      "**The secret to a great first date?** It's not about being impressive — it's about making them feel comfortable and seen. Ask about their life with genuine interest. Remember one detail they mention, and reference it later. That's the move. ✨",
    ],
  },
  default: [
    "I'm your AI Wingman! 🤵 Ask me about: date etiquette, conversation tips, what to wear, gift ideas, how to compliment them, managing nerves, or general first-date advice. I've got you covered!",
    "Great question! Here's my take: The most attractive quality on any date is genuine presence and interest. Put the phone down, look them in the eye, and ask questions that show you actually care. Everything else is details. 💫",
  ],
};
