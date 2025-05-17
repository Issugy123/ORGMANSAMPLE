// Products functionality
document.addEventListener("DOMContentLoaded", () => {
  // Load products from JavaScript data
  loadProductsFromData()

  // Set up event listeners for product filtering
  setupProductFilters()

  // Set up search functionality
  setupSearch()
})

/**
 * Load products from JavaScript data
 */
function loadProductsFromData() {
  // Products data
  const productsData = [
    // LIPS CATEGORY
    {
      id: 1,
      name: "Velvet Bloom Lipstick",
      description: "Matte Red Lipstick",
      price: 18.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Velvet+Bloom",
      rating: 4.8,
      category: "lips",
      stock: 15,
      is_new: false,
    },
    {
      id: 2,
      name: "Peach Shimmer Gloss",
      description: "Glossy Peach Lip Gloss",
      price: 14.99,
      sale_price: 12.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Peach+Shimmer",
      rating: 4.5,
      category: "lips",
      stock: 20,
      is_new: true,
    },
    {
      id: 3,
      name: "Bare Whisper Liner",
      description: "Nude Lip Liner",
      price: 12.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Bare+Whisper",
      rating: 4.3,
      category: "lips",
      stock: 25,
      is_new: false,
    },
    {
      id: 4,
      name: "Berry Dew Balm",
      description: "Berry Tinted Lip Balm",
      price: 10.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Berry+Dew",
      rating: 4.7,
      category: "lips",
      stock: 30,
      is_new: false,
    },
    {
      id: 5,
      name: "Plush Pout Gloss",
      description: "Plumping Lip Gloss",
      price: 16.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Plush+Pout",
      rating: 4.6,
      category: "lips",
      stock: 18,
      is_new: true,
    },
    {
      id: 6,
      name: "Rose Gleam Lipstick",
      description: "Metallic Rose Lipstick",
      price: 19.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Rose+Gleam",
      rating: 4.4,
      category: "lips",
      stock: 22,
      is_new: false,
    },
    {
      id: 7,
      name: "Infinite Kiss Liquid Lip",
      description: "Long-Lasting Liquid Lipstick",
      price: 21.99,
      sale_price: 18.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Infinite+Kiss",
      rating: 4.9,
      category: "lips",
      stock: 15,
      is_new: true,
    },
    {
      id: 8,
      name: "Coral Veil Stain",
      description: "Sheer Coral Lip Stain",
      price: 15.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Coral+Veil",
      rating: 4.2,
      category: "lips",
      stock: 20,
      is_new: false,
    },
    {
      id: 9,
      name: "Mint Frost Scrub",
      description: "Minty Lip Scrub",
      price: 13.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Mint+Frost",
      rating: 4.6,
      category: "lips",
      stock: 25,
      is_new: false,
    },
    {
      id: 10,
      name: "Moonlit Lip Mask",
      description: "Lip Mask Overnight Treatment",
      price: 22.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Moonlit+Mask",
      rating: 4.8,
      category: "lips",
      stock: 18,
      is_new: true,
    },

    // CHEEKS CATEGORY
    {
      id: 11,
      name: "Blush Petal",
      description: "Soft Pink Blush",
      price: 19.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Blush+Petal",
      rating: 4.9,
      category: "cheeks",
      stock: 22,
      is_new: false,
    },
    {
      id: 12,
      name: "Peach Glow Cream",
      description: "Cream Peach Blush",
      price: 21.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Peach+Glow",
      rating: 4.7,
      category: "cheeks",
      stock: 15,
      is_new: true,
    },
    {
      id: 13,
      name: "Sunlit Bronzer",
      description: "Shimmer Bronzer",
      price: 24.99,
      sale_price: 19.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Sunlit+Bronzer",
      rating: 4.8,
      category: "cheeks",
      stock: 18,
      is_new: false,
    },
    {
      id: 14,
      name: "Rosy Veil Tint",
      description: "Rosy Cheek Tint",
      price: 17.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Rosy+Veil",
      rating: 4.5,
      category: "cheeks",
      stock: 20,
      is_new: false,
    },
    {
      id: 15,
      name: "Sculpted Glow Palette",
      description: "Contour Palette",
      price: 34.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Sculpted+Glow",
      rating: 4.9,
      category: "cheeks",
      stock: 12,
      is_new: true,
    },
    {
      id: 16,
      name: "Radiant Beam Duo",
      description: "Highlighter Duo",
      price: 28.99,
      sale_price: 24.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Radiant+Beam",
      rating: 4.7,
      category: "cheeks",
      stock: 15,
      is_new: false,
    },
    {
      id: 17,
      name: "Mauve Mist Stick",
      description: "Mauve Blush Stick",
      price: 18.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Mauve+Mist",
      rating: 4.4,
      category: "cheeks",
      stock: 22,
      is_new: false,
    },
    {
      id: 18,
      name: "Golden Aura Illuminator",
      description: "Golden Illuminator",
      price: 26.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Golden+Aura",
      rating: 4.8,
      category: "cheeks",
      stock: 18,
      is_new: true,
    },
    {
      id: 19,
      name: "Terracotta Glow Blush",
      description: "Matte Terracotta Blush",
      price: 19.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Terracotta+Glow",
      rating: 4.6,
      category: "cheeks",
      stock: 20,
      is_new: false,
    },
    {
      id: 20,
      name: "Blush & Beam Combo",
      description: "Blush and Highlighter Combo",
      price: 32.99,
      sale_price: 27.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Blush+Beam",
      rating: 4.9,
      category: "cheeks",
      stock: 15,
      is_new: true,
    },

    // BASE CATEGORY
    {
      id: 21,
      name: "Luminous Veil Foundation",
      description: "Full Coverage Foundation",
      price: 32.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Luminous+Veil",
      rating: 4.9,
      category: "base",
      stock: 20,
      is_new: true,
    },
    {
      id: 22,
      name: "Dew Dream Tint",
      description: "Tinted Moisturizer",
      price: 28.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Dew+Dream",
      rating: 4.6,
      category: "base",
      stock: 25,
      is_new: false,
    },
    {
      id: 23,
      name: "Cloud Matte Primer",
      description: "Matte Primer",
      price: 22.99,
      sale_price: 18.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Cloud+Matte",
      rating: 4.7,
      category: "base",
      stock: 30,
      is_new: false,
    },
    {
      id: 24,
      name: "Radiant Beam CC Cream",
      description: "Radiant CC Cream",
      price: 26.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Radiant+Beam+CC",
      rating: 4.5,
      category: "base",
      stock: 22,
      is_new: false,
    },
    {
      id: 25,
      name: "Perfect Glow Concealer Palette",
      description: "Concealer Palette",
      price: 29.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Perfect+Glow",
      rating: 4.8,
      category: "base",
      stock: 18,
      is_new: true,
    },
    {
      id: 26,
      name: "Ethereal Mist Setting Spray",
      description: "Setting Spray",
      price: 24.99,
      sale_price: 21.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Ethereal+Mist",
      rating: 4.9,
      category: "base",
      stock: 25,
      is_new: false,
    },
    {
      id: 27,
      name: "Soft Focus Powder",
      description: "Powder Foundation",
      price: 27.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Soft+Focus",
      rating: 4.6,
      category: "base",
      stock: 20,
      is_new: false,
    },
    {
      id: 28,
      name: "Starlight Primer",
      description: "Illuminating Primer",
      price: 23.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Starlight+Primer",
      rating: 4.7,
      category: "base",
      stock: 22,
      is_new: true,
    },
    {
      id: 29,
      name: "Cushion Glow Compact",
      description: "Cushion Compact",
      price: 34.99,
      sale_price: 29.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Cushion+Glow",
      rating: 4.8,
      category: "base",
      stock: 15,
      is_new: true,
    },
    {
      id: 30,
      name: "Prism Glow Drops",
      description: "Color Correcting Drops",
      price: 25.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Prism+Glow",
      rating: 4.5,
      category: "base",
      stock: 20,
      is_new: false,
    },

    // EYES CATEGORY
    {
      id: 31,
      name: "Twilight Haze Palette",
      description: "Smoky Eye Palette",
      price: 38.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Twilight+Haze",
      rating: 4.9,
      category: "eyes",
      stock: 15,
      is_new: true,
    },
    {
      id: 32,
      name: "Endless Lash Mascara",
      description: "Waterproof Mascara",
      price: 18.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Endless+Lash",
      rating: 4.8,
      category: "eyes",
      stock: 30,
      is_new: false,
    },
    {
      id: 33,
      name: "Metallic Gleam Liner",
      description: "Metallic Liquid Eyeliner",
      price: 16.99,
      sale_price: 14.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Metallic+Gleam",
      rating: 4.5,
      category: "eyes",
      stock: 25,
      is_new: false,
    },
    {
      id: 34,
      name: "Neutral Glow Stick",
      description: "Neutral Eyeshadow Stick",
      price: 17.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Neutral+Glow",
      rating: 4.6,
      category: "eyes",
      stock: 22,
      is_new: false,
    },
    {
      id: 35,
      name: "Feather Lash Wispy",
      description: "False Lashes - Wispy Style",
      price: 14.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Feather+Lash",
      rating: 4.7,
      category: "eyes",
      stock: 20,
      is_new: true,
    },
    {
      id: 36,
      name: "Brow Sculpt Pomade",
      description: "Eyebrow Pomade",
      price: 19.99,
      sale_price: 16.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Brow+Sculpt",
      rating: 4.8,
      category: "eyes",
      stock: 18,
      is_new: false,
    },
    {
      id: 37,
      name: "Starlight Topper",
      description: "Glitter Eyeshadow Topper",
      price: 15.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Starlight+Topper",
      rating: 4.5,
      category: "eyes",
      stock: 22,
      is_new: true,
    },
    {
      id: 38,
      name: "Lash Lift Curler",
      description: "Eyelash Curler",
      price: 12.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Lash+Lift",
      rating: 4.4,
      category: "eyes",
      stock: 30,
      is_new: false,
    },
    {
      id: 39,
      name: "Gel Glide Liner",
      description: "Gel Eyeliner Pencil",
      price: 14.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Gel+Glide",
      rating: 4.6,
      category: "eyes",
      stock: 25,
      is_new: false,
    },
    {
      id: 40,
      name: "Bright Beam Concealer",
      description: "Eye Brightening Concealer",
      price: 21.99,
      sale_price: 18.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Bright+Beam",
      rating: 4.7,
      category: "eyes",
      stock: 20,
      is_new: true,
    },

    // SKINCARE CATEGORY
    {
      id: 41,
      name: "Dew Drop Serum",
      description: "Hydrating Face Serum",
      price: 42.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Dew+Drop",
      rating: 4.9,
      category: "skincare",
      stock: 20,
      is_new: true,
    },
    {
      id: 42,
      name: "Charcoal Cloud Mask",
      description: "Charcoal Detox Mask",
      price: 28.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Charcoal+Cloud",
      rating: 4.7,
      category: "skincare",
      stock: 25,
      is_new: false,
    },
    {
      id: 43,
      name: "Citrus Glow Cream",
      description: "Vitamin C Brightening Cream",
      price: 36.99,
      sale_price: 29.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Citrus+Glow",
      rating: 4.8,
      category: "skincare",
      stock: 18,
      is_new: false,
    },
    {
      id: 44,
      name: "Gentle Breeze Cleanser",
      description: "Gentle Foaming Cleanser",
      price: 24.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Gentle+Breeze",
      rating: 4.6,
      category: "skincare",
      stock: 30,
      is_new: false,
    },
    {
      id: 45,
      name: "Moonlight Repair Cream",
      description: "Overnight Repair Cream",
      price: 38.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Moonlight+Repair",
      rating: 4.9,
      category: "skincare",
      stock: 15,
      is_new: true,
    },
    {
      id: 46,
      name: "Sunbeam Shield SPF",
      description: "SPF 50 Sunscreen",
      price: 26.99,
      sale_price: 22.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Sunbeam+Shield",
      rating: 4.8,
      category: "skincare",
      stock: 25,
      is_new: false,
    },
    {
      id: 47,
      name: "Glow Renew Toner",
      description: "Exfoliating Toner",
      price: 22.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Glow+Renew",
      rating: 4.7,
      category: "skincare",
      stock: 20,
      is_new: false,
    },
    {
      id: 48,
      name: "Aloe Mist Gel",
      description: "Aloe Vera Gel",
      price: 18.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Aloe+Mist",
      rating: 4.5,
      category: "skincare",
      stock: 30,
      is_new: false,
    },
    {
      id: 49,
      name: "Youthful Beam Eye Cream",
      description: "Anti-Aging Eye Cream",
      price: 32.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Youthful+Beam",
      rating: 4.8,
      category: "skincare",
      stock: 18,
      is_new: true,
    },
    {
      id: 50,
      name: "Clay Glow Mask",
      description: "Clay Face Mask",
      price: 27.99,
      sale_price: 23.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Clay+Glow",
      rating: 4.6,
      category: "skincare",
      stock: 22,
      is_new: false,
    },

    // HAIR CATEGORY
    {
      id: 51,
      name: "Volume Bloom Shampoo",
      description: "Volumizing Shampoo",
      price: 24.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Volume+Bloom",
      rating: 4.6,
      category: "hair",
      stock: 30,
      is_new: false,
    },
    {
      id: 52,
      name: "Hydra Glow Mask",
      description: "Hydrating Hair Mask",
      price: 32.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Hydra+Glow",
      rating: 4.8,
      category: "hair",
      stock: 20,
      is_new: true,
    },
    {
      id: 53,
      name: "Heat Shield Mist",
      description: "Heat Protectant Spray",
      price: 18.99,
      sale_price: 15.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Heat+Shield",
      rating: 4.7,
      category: "hair",
      stock: 25,
      is_new: false,
    },
    {
      id: 54,
      name: "Beachy Wave Spray",
      description: "Texturizing Sea Salt Spray",
      price: 19.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Beachy+Wave",
      rating: 4.5,
      category: "hair",
      stock: 28,
      is_new: false,
    },
    {
      id: 55,
      name: "Lush Growth Serum",
      description: "Hair Growth Serum",
      price: 36.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Lush+Growth",
      rating: 4.9,
      category: "hair",
      stock: 15,
      is_new: true,
    },
    {
      id: 56,
      name: "Silken Glow Oil",
      description: "Smoothing Hair Oil",
      price: 28.99,
      sale_price: 24.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Silken+Glow",
      rating: 4.8,
      category: "hair",
      stock: 20,
      is_new: false,
    },
    {
      id: 57,
      name: "Fresh Breeze Dry Shampoo",
      description: "Dry Shampoo",
      price: 21.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Fresh+Breeze",
      rating: 4.6,
      category: "hair",
      stock: 25,
      is_new: false,
    },
    {
      id: 58,
      name: "Color Glow Conditioner",
      description: "Color-Protecting Conditioner",
      price: 26.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Color+Glow",
      rating: 4.7,
      category: "hair",
      stock: 22,
      is_new: true,
    },
    {
      id: 59,
      name: "Curl Beam Cream",
      description: "Curl Defining Cream",
      price: 23.99,
      sale_price: 19.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Curl+Beam",
      rating: 4.8,
      category: "hair",
      stock: 18,
      is_new: false,
    },
    {
      id: 60,
      name: "Scalp Renew Scrub",
      description: "Scalp Exfoliator",
      price: 25.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Scalp+Renew",
      rating: 4.5,
      category: "hair",
      stock: 20,
      is_new: true,
    },

    // TOOLS & ACCESSORIES CATEGORY
    {
      id: 61,
      name: "Cloud Blend Sponge",
      description: "Makeup Blending Sponge",
      price: 12.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Cloud+Blend",
      rating: 4.9,
      category: "tools",
      stock: 40,
      is_new: false,
    },
    {
      id: 62,
      name: "Glow Sculpt Brush",
      description: "Angled Contour Brush",
      price: 16.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Glow+Sculpt",
      rating: 4.8,
      category: "tools",
      stock: 35,
      is_new: true,
    },
    {
      id: 63,
      name: "Lash Beam Applicator",
      description: "Eyelash Applicator Tool",
      price: 9.99,
      sale_price: 7.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Lash+Beam",
      rating: 4.6,
      category: "tools",
      stock: 30,
      is_new: false,
    },
    {
      id: 64,
      name: "Dream Organizer Case",
      description: "Makeup Organizer Case",
      price: 29.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Dream+Organizer",
      rating: 4.7,
      category: "tools",
      stock: 20,
      is_new: false,
    },
    {
      id: 65,
      name: "Smooth Clean Pad",
      description: "Silicone Makeup Brush Cleaner",
      price: 8.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Smooth+Clean",
      rating: 4.5,
      category: "tools",
      stock: 45,
      is_new: true,
    },
    {
      id: 66,
      name: "Glow On-The-Go Bag",
      description: "Travel Makeup Bag",
      price: 24.99,
      sale_price: 19.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Glow+On-The-Go",
      rating: 4.8,
      category: "tools",
      stock: 25,
      is_new: false,
    },
    {
      id: 67,
      name: "Lash Lift Refills",
      description: "Eyelash Curler Refill Pads",
      price: 6.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Lash+Lift+Refills",
      rating: 4.4,
      category: "tools",
      stock: 50,
      is_new: false,
    },
    {
      id: 68,
      name: "Radiant Brush Set",
      description: "Makeup Brush Set",
      price: 48.99,
      sale_price: 39.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Radiant+Brush+Set",
      rating: 4.9,
      category: "tools",
      stock: 15,
      is_new: true,
    },
    {
      id: 69,
      name: "Jade Glow Roller",
      description: "Jade Roller",
      price: 18.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Jade+Glow",
      rating: 4.7,
      category: "tools",
      stock: 22,
      is_new: false,
    },
    {
      id: 70,
      name: "Magnetic Glow Palette",
      description: "Makeup Palette Magnet Sheet",
      price: 14.99,
      sale_price: 11.99,
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Magnetic+Glow",
      rating: 4.5,
      category: "tools",
      stock: 30,
      is_new: true,
    },
  ]

  // Display featured products on homepage
  const featuredContainer = document.getElementById("featured-products")
  if (featuredContainer) {
    // Select a few products to feature (e.g., ones with high ratings or marked as new)
    const featuredProducts = productsData.filter((p) => p.is_new || p.rating >= 4.8).slice(0, 4)
    displayProducts(featuredProducts, featuredContainer)
  }

  // Display all products on products page
  const productsContainer = document.getElementById("products-container")
  if (productsContainer) {
    displayProducts(productsData, productsContainer)
  }

  // Display featured products on products page
  const featuredProductsPageContainer = document.getElementById("featured-products-container")
  if (featuredProductsPageContainer) {
    const featuredProducts = productsData.filter((p) => p.is_new || p.rating >= 4.8).slice(0, 4)
    displayProducts(featuredProducts, featuredProductsPageContainer)
  }

  // Display categories
  const categoriesContainer = document.getElementById("categories-container")
  if (categoriesContainer) {
    const categories = [
      {
        name: "All Products",
        image: "https://placehold.co/200x200/f0f9ff/569DAA?text=All",
        slug: "all",
      },
      {
        name: "Lips",
        image: "https://placehold.co/200x200/f0f9ff/569DAA?text=Lips",
        slug: "lips",
      },
      {
        name: "Cheeks",
        image: "https://placehold.co/200x200/f0f9ff/569DAA?text=Cheeks",
        slug: "cheeks",
      },
      {
        name: "Base",
        image: "https://placehold.co/200x200/f0f9ff/569DAA?text=Base",
        slug: "base",
      },
      {
        name: "Eyes",
        image: "https://placehold.co/200x200/f0f9ff/569DAA?text=Eyes",
        slug: "eyes",
      },
      {
        name: "Skincare",
        image: "https://placehold.co/200x200/f0f9ff/569DAA?text=Skincare",
        slug: "skincare",
      },
      {
        name: "Hair",
        image: "https://placehold.co/200x200/f0f9ff/569DAA?text=Hair",
        slug: "hair",
      },
      {
        name: "Tools",
        image: "https://placehold.co/200x200/f0f9ff/569DAA?text=Tools",
        slug: "tools",
      },
    ]

    renderCategories(categories, categoriesContainer)
  }

  // Return the products data for other functions to use
  return productsData
}

/**
 * Display products in the container
 * @param {Array} products - Array of product objects
 * @param {HTMLElement} container - Container element to display products in
 */
function displayProducts(products, container) {
  // Clear container
  container.innerHTML = ""

  // If no products found
  if (products.length === 0) {
    container.innerHTML = '<div class="no-products">No products found.</div>'
    return
  }

  // Create product cards
  products.forEach((product) => {
    const productCard = createProductCard(product)
    container.appendChild(productCard)
  })

  // Set up event listeners for product cards (delegated)
  setupProductCardListeners(container)
}

/**
 * Create a product card element
 * @param {Object} product - Product object
 * @returns {HTMLElement} - Product card element
 */
function createProductCard(product) {
  const productCard = document.createElement("div")
  productCard.className = "product-card"
  productCard.dataset.productId = product.id

  // Calculate discount percentage if on sale
  let discountBadge = ""
  if (product.sale_price && product.sale_price < product.price) {
    const discountPercent = Math.round((1 - product.sale_price / product.price) * 100)
    discountBadge = `<span class="discount-badge">-${discountPercent}%</span>`
  }

  // New product badge
  const newBadge = product.is_new ? '<span class="new-badge">New</span>' : ""

  // Format prices
  const regularPrice = Number.parseFloat(product.price).toFixed(2)
  const salePrice = product.sale_price ? Number.parseFloat(product.sale_price).toFixed(2) : null

  // Build price HTML
  let priceHtml = ""
  if (salePrice) {
    priceHtml = `
            <span class="regular-price strikethrough">$${regularPrice}</span>
            <span class="sale-price">$${salePrice}</span>
        `
  } else {
    priceHtml = `<span class="regular-price">$${regularPrice}</span>`
  }

  // Build product card HTML
  productCard.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${discountBadge}
            ${newBadge}
            <div class="product-actions">
                <button class="wishlist-btn" aria-label="Add to wishlist">
                    <i class="far fa-heart"></i>
                </button>
                <button class="add-to-cart-btn" aria-label="Add to cart">
                    <i class="fas fa-shopping-bag"></i>
                    <span>Add to Cart</span>
                </button>
                <button class="quick-view-btn" aria-label="Quick view">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                ${priceHtml}
            </div>
            <div class="product-rating">
                ${generateRatingStars(product.rating)}
            </div>
        </div>
    `

  return productCard
}

/**
 * Generate HTML for rating stars
 * @param {number} rating - Product rating (0-5)
 * @returns {string} - HTML for rating stars
 */
function generateRatingStars(rating) {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

  let starsHtml = ""

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<i class="fas fa-star"></i>'
  }

  // Add half star if needed
  if (halfStar) {
    starsHtml += '<i class="fas fa-star-half-alt"></i>'
  }

  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    starsHtml += '<i class="far fa-star"></i>'
  }

  return starsHtml
}

/**
 * Set up event listeners for product cards using event delegation
 * @param {HTMLElement} container - The container with product cards
 */
function setupProductCardListeners(container) {
  // Prevent adding multiple listeners
  if (container._hasProductListener) return;
  container._hasProductListener = true;

  container.addEventListener("click", function (e) {
    const target = e.target

    // Product image or name click
    if (
      target.matches(".product-image img") ||
      target.matches(".product-name")
    ) {
      const productCard = target.closest(".product-card")
      if (productCard) {
        const productId = productCard.dataset.productId
        viewProductDetails(productId)
      }
    }

    // Wishlist button click
    if (target.closest(".wishlist-btn")) {
      e.preventDefault()
      const button = target.closest(".wishlist-btn")
      const icon = button.querySelector("i")
      if (icon.classList.contains("far")) {
        icon.classList.remove("far")
        icon.classList.add("fas")
        showToast("Product added to wishlist!")
      } else {
        icon.classList.remove("fas")
        icon.classList.add("far")
        showToast("Product removed from wishlist!")
      }
    }

    // Add to cart button click
    if (target.closest(".add-to-cart-btn")) {
      e.preventDefault()
      const button = target.closest(".add-to-cart-btn")
      const productCard = button.closest(".product-card")
      const productId = productCard.dataset.productId
      const product = findProductById(productId)
      if (product) {
        if (typeof window.addToCart === "function") {
          window.addToCart(product)
        } else {
          const event = new CustomEvent("add-to-cart", { detail: { product } })
          document.dispatchEvent(event)
        }
        showToast("Product added to cart!")
      }
    }

    // Quick view button click
    if (target.closest(".quick-view-btn")) {
      e.preventDefault()
      const button = target.closest(".quick-view-btn")
      const productCard = button.closest(".product-card")
      const productId = productCard.dataset.productId
      openQuickView(productId)
    }
  });
}

/**
 * Find product by ID
 * @param {string|number} productId - Product ID
 * @returns {Object|null} - Product object or null if not found
 */
function findProductById(productId) {
  const productsData = loadProductsFromData()
  return productsData.find((p) => p.id == productId) || null
}

/**
 * Set up event listeners for product filtering
 */
function setupProductFilters() {
  // Category filter buttons
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()

      // Remove active class from all buttons
      document.querySelectorAll("[data-filter]").forEach((btn) => {
        btn.classList.remove("active")
      })

      // Add active class to clicked button
      this.classList.add("active")

      // Get category
      const category = this.dataset.filter

      // Get products container
      const productsContainer = document.getElementById("products-container")
      if (!productsContainer) return

      // Get all products
      const productsData = loadProductsFromData()

      // Filter products
      const filteredProducts = category === "all" ? productsData : productsData.filter((p) => p.category === category)

      // Display filtered products
      displayProducts(filteredProducts, productsContainer)
    })
  })

  // Sort buttons
  document.querySelectorAll("[data-sort]").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()

      // Remove active class from all buttons
      document.querySelectorAll("[data-sort]").forEach((btn) => {
        btn.classList.remove("active")
      })

      // Add active class to clicked button
      this.classList.add("active")

      // Get sort option
      const sortOption = this.dataset.sort

      // Get current products
      const productsContainer = document.getElementById("products-container")
      if (!productsContainer) return

      // Get active filter category
      const activeFilter = document.querySelector("[data-filter].active")
      const category = activeFilter ? activeFilter.dataset.filter : "all"

      // Get all products
      const productsData = loadProductsFromData()

      // Filter products by active category
      const filteredProducts =
        category === "all" ? [...productsData] : productsData.filter((p) => p.category === category)

      // Sort products
      switch (sortOption) {
        case "price-low":
          filteredProducts.sort((a, b) => {
            const priceA = a.sale_price || a.price
            const priceB = b.sale_price || b.price
            return priceA - priceB
          })
          break
        case "price-high":
          filteredProducts.sort((a, b) => {
            const priceA = a.sale_price || a.price
            const priceB = b.sale_price || b.price
            return priceB - priceA
          })
          break
        case "name":
          filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
          break
        case "featured":
        default:
          // For featured, prioritize new items and high ratings
          filteredProducts.sort((a, b) => {
            if (a.is_new && !b.is_new) return -1
            if (!a.is_new && b.is_new) return 1
            return b.rating - a.rating
          })
          break
      }

      // Display sorted products
      displayProducts(filteredProducts, productsContainer)
    })
  })
}

/**
 * Set up search functionality
 */
function setupSearch() {
  const searchForm = document.querySelector(".search-form")
  const productSearch = document.getElementById("product-search")

  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const searchInput = this.querySelector('input[type="search"]') || this.querySelector('input[type="text"]')
      const searchTerm = searchInput.value.trim()

      if (searchTerm) {
        // Store search term in session storage
        sessionStorage.setItem("searchTerm", searchTerm)

        // If on products page, load filtered products
        if (window.location.pathname.includes("products.html")) {
          searchProducts(searchTerm)

          // Close search overlay if it exists
          const searchOverlay = document.getElementById("search-overlay")
          if (searchOverlay) {
            searchOverlay.classList.remove("active")
          }
        } else {
          // Redirect to products page with search term
          window.location.href = "products.html?search=" + encodeURIComponent(searchTerm)
        }
      }
    })
  }

  // Product search on products page
  if (productSearch) {
    productSearch.addEventListener("input", function () {
      const searchTerm = this.value.trim()
      searchProducts(searchTerm)
    })
  }

  // Check for search parameter in URL on products page
  if (window.location.pathname.includes("products.html")) {
    const urlParams = new URLSearchParams(window.location.search)
    const searchTerm = urlParams.get("search") || sessionStorage.getItem("searchTerm") || ""

    if (searchTerm) {
      // Update search input
      const searchInput =
        document.querySelector('.search-form input[type="search"]') || document.getElementById("product-search")
      if (searchInput) {
        searchInput.value = searchTerm
      }

      // Search products
      searchProducts(searchTerm)
    }
  }
}

/**
 * Search products by term
 * @param {string} searchTerm - Search term
 */
function searchProducts(searchTerm) {
  const productsContainer = document.getElementById("products-container")
  if (!productsContainer) return

  // Get all products
  const productsData = loadProductsFromData()

  if (searchTerm === "") {
    // Show all products if search term is empty
    displayProducts(productsData, productsContainer)
  } else {
    // Filter products by search term
    const filteredProducts = productsData.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    // Display filtered products
    displayProducts(filteredProducts, productsContainer)
  }
}

/**
 * View product details
 * @param {string} productId - Product ID
 */
function viewProductDetails(productId) {
  window.location.href = `product-detail.html?id=${productId}`;
}

/**
 * Open quick view modal
 * @param {string} productId - Product ID
 */
function openQuickView(productId) {
  // Find product
  const product = findProductById(productId)

  if (!product) {
    showToast("Product not found", "error")
    return
  }

  // Create quick view modal
  const modal = document.createElement("div")
  modal.className = "quick-view-modal"

  modal.innerHTML = `
    <div class="quick-view-content">
      <button class="close-modal">&times;</button>
      <div class="quick-view-grid">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-details">
          <h2>${product.name}</h2>
          <div class="product-rating">
            ${generateRatingStars(product.rating)}
          </div>
          <div class="product-price">
            ${
              product.sale_price
                ? `<span class="regular-price strikethrough">$${Number.parseFloat(product.price).toFixed(2)}</span>
                  <span class="sale-price">$${Number.parseFloat(product.sale_price).toFixed(2)}</span>`
                : `<span class="regular-price">$${Number.parseFloat(product.price).toFixed(2)}</span>`
            }
          </div>
          <div class="product-description">
            <p>${product.description}</p>
          </div>
          <div class="product-actions">
            <div class="quantity">
              <button class="quantity-btn minus">-</button>
              <input type="number" value="1" min="1" max="${product.stock || 10}">
              <button class="quantity-btn plus">+</button>
            </div>
            <button class="add-to-cart-btn">
              <i class="fas fa-shopping-bag"></i>
              <span>Add to Cart</span>
            </button>
            <button class="wishlist-btn">
              <i class="far fa-heart"></i>
            </button>
          </div>
          <div class="product-meta">
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Availability:</strong> ${product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
          </div>
        </div>
      </div>
    </div>
  `

  // Add modal to body
  document.body.appendChild(modal)

  // Prevent body scrolling
  document.body.style.overflow = "hidden"

  // Add event listeners
  setupQuickViewListeners(modal, product)

  // Show modal with animation
  setTimeout(() => {
    modal.classList.add("active")
  }, 10)
}

/**
 * Set up event listeners for quick view modal
 * @param {HTMLElement} modal - Quick view modal element
 * @param {Object} product - Product object
 */
function setupQuickViewListeners(modal, product) {
  // Close button
  const closeButton = modal.querySelector(".close-modal")
  closeButton.addEventListener("click", () => {
    closeQuickView(modal)
  })

  // Close on background click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeQuickView(modal)
    }
  })

  // Quantity buttons
  const quantityInput = modal.querySelector(".quantity input")
  const minusButton = modal.querySelector(".quantity-btn.minus")
  const plusButton = modal.querySelector(".quantity-btn.plus")

  minusButton.addEventListener("click", () => {
    const value = Number.parseInt(quantityInput.value)
    if (value > 1) {
      quantityInput.value = value - 1
    }
  })

  plusButton.addEventListener("click", () => {
    const value = Number.parseInt(quantityInput.value)
    if (value < (product.stock || 10)) {
      quantityInput.value = value + 1
    }
  })

  // Add to cart button
  const addToCartButton = modal.querySelector(".add-to-cart-btn")
  addToCartButton.addEventListener("click", () => {
    const quantity = Number.parseInt(quantityInput.value)

    // Add product to cart with quantity
    const cartProduct = { ...product, quantity }

    if (typeof window.addToCart === "function") {
      window.addToCart(cartProduct)
    } else {
      // Dispatch event for cart.js to handle
      const event = new CustomEvent("add-to-cart", { detail: { product: cartProduct } })
      document.dispatchEvent(event)
    }

    showToast("Product added to cart!")
    closeQuickView(modal)
  })

  // Wishlist button
  const wishlistButton = modal.querySelector(".wishlist-btn")
  wishlistButton.addEventListener("click", () => {
    const icon = wishlistButton.querySelector("i")

    // Toggle wishlist icon
    if (icon.classList.contains("far")) {
      icon.classList.remove("far")
      icon.classList.add("fas")
      showToast("Product added to wishlist!")
    } else {
      icon.classList.remove("fas")
      icon.classList.add("far")
      showToast("Product removed from wishlist!")
    }
  })
}

/**
 * Close quick view modal
 * @param {HTMLElement} modal - Quick view modal element
 */
function closeQuickView(modal) {
  // Hide modal with animation
  modal.classList.remove("active")

  // Remove modal after animation
  setTimeout(() => {
    document.body.removeChild(modal)

    // Restore body scrolling
    document.body.style.overflow = ""
  }, 300)
}

/**
 * Show toast notification
 * @param {string} message - Toast message
 * @param {string} type - Toast type (success, error, warning)
 */
function showToast(message, type = "success") {
  // Create toast element
  const toast = document.createElement("div")
  toast.className = `toast ${type}`
  toast.innerHTML = message

  // Add toast to body
  document.body.appendChild(toast)

  // Show toast with animation
  setTimeout(() => {
    toast.classList.add("active")
  }, 10)

  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("active")

    // Remove toast after animation
    setTimeout(() => {
      document.body.removeChild(toast)
    }, 300)
  }, 3000)
}

/**
 * Render categories
 * @param {Array} categories - Array of category objects
 * @param {HTMLElement} container - Container element to display categories in
 */
function renderCategories(categories, container) {
  // Clear container
  container.innerHTML = ""

  // Create category items
  categories.forEach((category) => {
    const categoryItem = document.createElement("div")
    categoryItem.className = "category-item"
    categoryItem.dataset.category = category.slug

    categoryItem.innerHTML = `
      <div class="category-image">
        <img src="${category.image}" alt="${category.name}">
      </div>
      <h3>${category.name}</h3>
    `

    container.appendChild(categoryItem)

    // Add click event to filter products by category
    categoryItem.addEventListener("click", function () {
      const categorySlug = this.dataset.category

      // Update filter dropdown active state
      const filterLinks = document.querySelectorAll("[data-filter]")
      filterLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.dataset.filter === categorySlug) {
          link.classList.add("active")
        }
      })

      // Filter products
      const productsContainer = document.getElementById("products-container")
      if (productsContainer) {
        // Get all products
        const productsData = loadProductsFromData()

        // Filter products
        const filteredProducts =
          categorySlug === "all" ? productsData : productsData.filter((p) => p.category === categorySlug)

        // Display filtered products
        displayProducts(filteredProducts, productsContainer)
      }

      // Scroll to products section
      document.querySelector(".product-section").scrollIntoView({ behavior: "smooth" })
    })
  })
}

// Define addToCart function if it doesn't exist
if (typeof window.addToCart !== "function") {
  window.addToCart = (product) => {
    console.log("Adding to cart:", product)

    // Get cart items from localStorage or initialize empty array
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []

    // Check if product already exists in cart
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id)

    if (existingItemIndex !== -1) {
      // Update quantity if product already in cart
      cartItems[existingItemIndex].quantity += product.quantity || 1
    } else {
      // Add new product to cart
      cartItems.push({
        ...product,
        quantity: product.quantity || 1,
      })
    }

    // Save updated cart to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems))

    // Update cart count
    updateCartCount()

    // Show toast
    showToast(`Added ${product.name} to cart!`)
  }
}

/**
 * Update cart count in header
 */
function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
  const cartCount = document.querySelector(".cart-count")

  if (cartCount) {
    // Calculate total quantity
    const totalQuantity = cartItems.reduce((total, item) => total + (item.quantity || 1), 0)
    cartCount.textContent = totalQuantity
  }
}

// Initialize cart count on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount()
})
