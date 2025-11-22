import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { menuCategories } from "../client/src/data/menuData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, "../client/public/images/menu");
fs.mkdirSync(outputDir, { recursive: true });

const categoryStyles = {
  coffee: { bg: "#2f1810", accent: "#8c4a2f", highlight: "#f6c87a" },
  "cold-drinks": { bg: "#0f3b63", accent: "#1d6fa3", highlight: "#7dd3fc" },
  "hot-drinks": { bg: "#5a1f1f", accent: "#a23c3c", highlight: "#f3a683" },
  shake: { bg: "#a33263", accent: "#ec4899", highlight: "#fde68a" },
  "tea-herbal": { bg: "#1c4532", accent: "#2f855a", highlight: "#a3e635" },
  mocktail: { bg: "#581c87", accent: "#c026d3", highlight: "#f472b6" },
  juice: { bg: "#7c2d12", accent: "#ea580c", highlight: "#facc15" },
  cake: { bg: "#4c1d95", accent: "#7c3aed", highlight: "#fbcfe8" },
  breakfast: { bg: "#78350f", accent: "#d97706", highlight: "#fcd34d" },
  gym: { bg: "#0f766e", accent: "#14b8a6", highlight: "#bbf7d0" },
  snaks: { bg: "#713f12", accent: "#ca8a04", highlight: "#facc15" },
  main: { bg: "#7f1d1d", accent: "#dc2626", highlight: "#f97316" },
};

const details = {
  "espresso-special": {
    title: "Espresso Special",
    subtitle: "Premium arabica crema",
    emoji: "☕",
    accent: "#b36a2e",
    highlight: "#f7c77d",
  },
  "espresso-commercial": {
    title: "Espresso Classic",
    subtitle: "Balanced daily shot",
    emoji: "☕",
    accent: "#9a5526",
    highlight: "#f1b87a",
  },
  americano: {
    title: "Americano",
    subtitle: "Espresso with hot water",
    emoji: "☕",
    accent: "#274766",
    highlight: "#9ac3de",
    bg: "#1b2a38",
  },
  cappuccino: {
    title: "Cappuccino",
    subtitle: "Silky milk foam crown",
    emoji: "☕",
    accent: "#d9a066",
    highlight: "#fff4d6",
  },
  "caramel-macchiato": {
    title: "Caramel Macchiato",
    subtitle: "Caramel drizzle & espresso",
    emoji: "🍮",
    accent: "#d97706",
    highlight: "#fde68a",
  },
  mocha: {
    title: "Caffè Mocha",
    subtitle: "Chocolate espresso treat",
    emoji: "🍫",
    accent: "#7f4f24",
    highlight: "#f8c8a0",
  },
  latte: {
    title: "Caffè Latte",
    subtitle: "Creamy microfoam",
    emoji: "🥛",
    accent: "#c9ada7",
    highlight: "#fff1e6",
  },
  "latte-nutts": {
    title: "Hazelnut Latte",
    subtitle: "Nutty caramel warmth",
    emoji: "🌰",
    accent: "#9c6644",
    highlight: "#f3d5b5",
  },
  "latte-coconut": {
    title: "Coconut Latte",
    subtitle: "Tropical coconut cream",
    emoji: "🥥",
    accent: "#2dd4bf",
    highlight: "#ccfbf1",
    bg: "#0f766e",
  },
  "latte-spirolina": {
    title: "Spirulina Latte",
    subtitle: "Green superfood boost",
    emoji: "🌿",
    accent: "#3f6212",
    highlight: "#bef264",
    bg: "#1a2e05",
  },
  "turkish-coffee": {
    title: "Turkish Coffee",
    subtitle: "Traditional cezve brew",
    emoji: "🧿",
    accent: "#a16207",
    highlight: "#fde68a",
  },
  "french-coffe": {
    title: "French Press",
    subtitle: "Slow-pressed extraction",
    emoji: "🫗",
    accent: "#5f6f52",
    highlight: "#cbd5b1",
    bg: "#2e3a25",
  },
  ingredients: {
    title: "Flavor Shots",
    subtitle: "Syrups & toppings",
    emoji: "🍯",
    accent: "#c26d26",
    highlight: "#fde1a8",
  },
  "ice-americano": {
    title: "Iced Americano",
    subtitle: "Chilled espresso lift",
    emoji: "🧊",
    accent: "#0ea5e9",
    highlight: "#bae6fd",
  },
  "ice-latte": {
    title: "Iced Latte",
    subtitle: "Cold milk & crema",
    emoji: "🥤",
    accent: "#38bdf8",
    highlight: "#e0f2fe",
  },
  "iceLatte-coconut": {
    title: "Iced Coconut Latte",
    subtitle: "Coconut, espresso, ice",
    emoji: "🥥",
    accent: "#14b8a6",
    highlight: "#ccfbf1",
  },
  "frape-caramel": {
    title: "Caramel Frappe",
    subtitle: "Blended caramel chill",
    emoji: "🍨",
    accent: "#f97316",
    highlight: "#fed7aa",
  },
  "frape-chocolate": {
    title: "Chocolate Frappe",
    subtitle: "Cocoa blended treat",
    emoji: "🍫",
    accent: "#7f1d1d",
    highlight: "#f8c8a0",
  },
  "orange-iceCoffee": {
    title: "Orange Iced Coffee",
    subtitle: "Citrus espresso spark",
    emoji: "🍊",
    accent: "#fb923c",
    highlight: "#fef3c7",
  },
  affogato: {
    title: "Affogato",
    subtitle: "Gelato with espresso",
    emoji: "🍨",
    accent: "#f59e0b",
    highlight: "#fef08a",
  },
  "hot-chocolate": {
    title: "Hot Chocolate",
    subtitle: "Velvety cocoa comfort",
    emoji: "🍫",
    accent: "#8b4513",
    highlight: "#f6ad55",
  },
  "hot-chocolate-marshmallow": {
    title: "Marshmallow Cocoa",
    subtitle: "Toasted mallow cloud",
    emoji: "☁️",
    accent: "#fbbf24",
    highlight: "#fef3c7",
  },
  "hot-chocolate-nutts": {
    title: "Hazelnut Cocoa",
    subtitle: "Nutty hot chocolate",
    emoji: "🌰",
    accent: "#9a3412",
    highlight: "#f5d0c5",
  },
  "white-chocolate": {
    title: "White Hot Chocolate",
    subtitle: "Creamy vanilla cocoa",
    emoji: "🍥",
    accent: "#eab308",
    highlight: "#fef9c3",
  },
  "pink-chocolate": {
    title: "Pink Hot Chocolate",
    subtitle: "Berry-tinted sweetness",
    emoji: "🍓",
    accent: "#ec4899",
    highlight: "#fbcfe8",
  },
  masala: {
    title: "Masala Latte",
    subtitle: "Spiced chai blend",
    emoji: "🫚",
    accent: "#b45309",
    highlight: "#fde68a",
  },
  classic: {
    title: "Classic Shake",
    subtitle: "Choose your flavor",
    emoji: "🥤",
    accent: "#ec4899",
    highlight: "#fdf2f8",
  },
  "shake-peanut": {
    title: "Peanut Shake",
    subtitle: "Crunchy peanut butter",
    emoji: "🥜",
    accent: "#d97706",
    highlight: "#fde68a",
  },
  "shake-hobby": {
    title: "Hobby Shake",
    subtitle: "Chocolate bar indulgence",
    emoji: "🍫",
    accent: "#a855f7",
    highlight: "#f3e8ff",
  },
  "shake-lotus": {
    title: "Lotus Shake",
    subtitle: "Biscoff caramel swirl",
    emoji: "🍪",
    accent: "#d97706",
    highlight: "#fde68a",
  },
  "shake-masala": {
    title: "Masala Shake",
    subtitle: "Chai spice fusion",
    emoji: "🫚",
    accent: "#f97316",
    highlight: "#fed7aa",
  },
  "dark-tea": {
    title: "Black Tea Service",
    subtitle: "Brewed with sweets",
    emoji: "🫖",
    accent: "#166534",
    highlight: "#bbf7d0",
  },
  "green-tea": {
    title: "Green Tea",
    subtitle: "Gentle antioxidant brew",
    emoji: "🍃",
    accent: "#22c55e",
    highlight: "#d9f99d",
  },
  "chamomile-tea": {
    title: "Chamomile Tea",
    subtitle: "Floral relaxation cup",
    emoji: "🌼",
    accent: "#facc15",
    highlight: "#fef08a",
  },
  "energy-tea": {
    title: "Energy Herbal Tea",
    subtitle: "Ginger & cinnamon lift",
    emoji: "⚡",
    accent: "#f97316",
    highlight: "#fed7aa",
  },
  "relax-tea": {
    title: "Calming Herbal Tea",
    subtitle: "Borage & citrus blossoms",
    emoji: "💤",
    accent: "#0ea5e9",
    highlight: "#bae6fd",
  },
  "apple-tea": {
    title: "Apple Cinnamon Tea",
    subtitle: "Spiced orchard infusion",
    emoji: "🍎",
    accent: "#ef4444",
    highlight: "#fecaca",
  },
  "spring-tea": {
    title: "Spring Blossom Tea",
    subtitle: "Rose & citrus aroma",
    emoji: "🌸",
    accent: "#f472b6",
    highlight: "#fbcfe8",
  },
  "sour-tea": {
    title: "Hibiscus Tea",
    subtitle: "Tart crimson infusion",
    emoji: "🌺",
    accent: "#f43f5e",
    highlight: "#fecdd3",
  },
  limonade: {
    title: "Homemade Lemonade",
    subtitle: "Fresh citrus & soda",
    emoji: "🍋",
    accent: "#facc15",
    highlight: "#fef08a",
  },
  mojito: {
    title: "Classic Mojito",
    subtitle: "Minty lime sparkle",
    emoji: "🌿",
    accent: "#34d399",
    highlight: "#bbf7d0",
  },
  "red-mojito": {
    title: "Red Mojito",
    subtitle: "Strawberry mint cooler",
    emoji: "🍓",
    accent: "#ef4444",
    highlight: "#fecdd3",
  },
  "jungle-berry": {
    title: "Jungle Berry",
    subtitle: "Mixed berry burst",
    emoji: "🫐",
    accent: "#7c3aed",
    highlight: "#ddd6fe",
  },
  pink: {
    title: "Pink Aloe Cooler",
    subtitle: "Aloe & raspberry fizz",
    emoji: "🌺",
    accent: "#ec4899",
    highlight: "#fbcfe8",
  },
  pinacolada: {
    title: "Piña Colada",
    subtitle: "Pineapple coconut dream",
    emoji: "🍍",
    accent: "#facc15",
    highlight: "#fef08a",
  },
  "blue-sky": {
    title: "Blue Sky",
    subtitle: "Citrus blue curaçao",
    emoji: "💧",
    accent: "#38bdf8",
    highlight: "#bae6fd",
  },
  fereshte: {
    title: "Fereshteh Sharbat",
    subtitle: "Mint, rosewater & seeds",
    emoji: "🌿",
    accent: "#22c55e",
    highlight: "#d9f99d",
  },
  golestan: {
    title: "Golestan Sharbat",
    subtitle: "Saffron & blossoms",
    emoji: "🌼",
    accent: "#facc15",
    highlight: "#fde68a",
  },
  aramesh: {
    title: "Aramesh Sharbat",
    subtitle: "Hibiscus & lime calm",
    emoji: "🌺",
    accent: "#f97316",
    highlight: "#fed7aa",
  },
  behesht: {
    title: "Behesht Sharbat",
    subtitle: "Rose & saffron bliss",
    emoji: "🌹",
    accent: "#e11d48",
    highlight: "#fecdd3",
  },
  "day-cake": {
    title: "Cake of the Day",
    subtitle: "Ask about today's bake",
    emoji: "🍰",
    accent: "#f472b6",
    highlight: "#fbcfe8",
  },
  egg: {
    title: "Sunny-Side Eggs",
    subtitle: "Two eggs with sides",
    emoji: "🍳",
    accent: "#facc15",
    highlight: "#fef3c7",
  },
  omlet: {
    title: "Persian Omelette",
    subtitle: "Tomato braised eggs",
    emoji: "🍅",
    accent: "#ef4444",
    highlight: "#fecaca",
  },
  "sausage-egg": {
    title: "Sausage & Eggs",
    subtitle: "Grilled sausage & bread",
    emoji: "🌭",
    accent: "#f97316",
    highlight: "#fed7aa",
  },
  "sausage-omlet": {
    title: "Sausage Omelette",
    subtitle: "Tomato omelette mix",
    emoji: "🌭",
    accent: "#fb923c",
    highlight: "#fee2c5",
  },
  "date-egg": {
    title: "Date Omelette",
    subtitle: "Sweet dates & eggs",
    emoji: "🍯",
    accent: "#d97706",
    highlight: "#fde68a",
  },
  "ton-egg": {
    title: "Tuna Eggs",
    subtitle: "Tuna & herb garnish",
    emoji: "🐟",
    accent: "#0ea5e9",
    highlight: "#bae6fd",
  },
  "cheese-egg": {
    title: "Cheese Eggs",
    subtitle: "Lighvan cheese & eggs",
    emoji: "🧀",
    accent: "#facc15",
    highlight: "#fef08a",
  },
  "toast-cheese": {
    title: "Cheese Toast",
    subtitle: "Fresh veg & soft cheese",
    emoji: "🥪",
    accent: "#f97316",
    highlight: "#fed7aa",
  },
  "toast-bannana-peanut": {
    title: "Banana Peanut Toast",
    subtitle: "Crunchy protein boost",
    emoji: "🍌",
    accent: "#facc15",
    highlight: "#fef08a",
  },
  "toast-egg": {
    title: "Egg Protein Toast",
    subtitle: "Soft-boiled egg & greens",
    emoji: "🥚",
    accent: "#22c55e",
    highlight: "#bbf7d0",
  },
  "toast-chicken": {
    title: "Grilled Chicken Toast",
    subtitle: "Marinated fillet & veg",
    emoji: "🍗",
    accent: "#f97316",
    highlight: "#fed7aa",
  },
  "potato-egg": {
    title: "Potato & Egg Bowl",
    subtitle: "Baked potato protein",
    emoji: "🥔",
    accent: "#ca8a04",
    highlight: "#fde68a",
  },
  snak: {
    title: "Cafe Snack",
    subtitle: "Ham, chips & gouda",
    emoji: "🥪",
    accent: "#fb923c",
    highlight: "#fed7aa",
  },
  "potato-fries": {
    title: "Classic Fries",
    subtitle: "Crispy golden potatoes",
    emoji: "🍟",
    accent: "#facc15",
    highlight: "#fef08a",
  },
  "costume-potato": {
    title: "Loaded Fries",
    subtitle: "Build-your-own toppings",
    emoji: "🥘",
    accent: "#f97316",
    highlight: "#fed7aa",
  },
  pasta: {
    title: "Chicken Alfredo",
    subtitle: "Creamy mushroom sauce",
    emoji: "🍝",
    accent: "#f97316",
    highlight: "#fcd34d",
  },
  hamburger: {
    title: "Classic Burger",
    subtitle: "Beef patty & fries",
    emoji: "🍔",
    accent: "#ef4444",
    highlight: "#fda4af",
  },
  cheeseburger: {
    title: "Cheeseburger",
    subtitle: "Gouda melt & fries",
    emoji: "🧀",
    accent: "#facc15",
    highlight: "#fef08a",
  },
  mushroomburger: {
    title: "Mushroom Burger",
    subtitle: "Savory mushroom sauce",
    emoji: "🍄",
    accent: "#22c55e",
    highlight: "#bbf7d0",
  },
};

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function mixWithWhite(hex, amount) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  const mix = channel => Math.round(channel + (255 - channel) * amount);
  return `#${[mix(r), mix(g), mix(b)]
    .map(val => val.toString(16).padStart(2, "0"))
    .join("")}`;
}

const width = 1200;
const height = 800;

for (const category of menuCategories) {
  for (const item of category.items) {
    const meta = details[item.id];
    if (!meta) {
      throw new Error(`Missing illustration metadata for item: ${item.id}`);
    }
    const baseStyle = categoryStyles[category.id] ?? {
      bg: "#1f2937",
      accent: "#4b5563",
      highlight: "#9ca3af",
    };
    const bg = meta.bg ?? baseStyle.bg;
    const accent = meta.accent ?? baseStyle.accent;
    const highlight = meta.highlight ?? baseStyle.highlight;
    const softAccent = mixWithWhite(accent, 0.35);
    const softHighlight = mixWithWhite(highlight, 0.45);

    const emoji = meta.emoji;
    const title = escapeXml(meta.title);
    const subtitle = escapeXml(meta.subtitle);
    const persianName = escapeXml(item.name);

    const circle1 = {
      cx: (width * 0.28).toFixed(2),
      cy: (height * 0.68).toFixed(2),
      r: (height * 0.55).toFixed(2),
    };
    const circle2 = {
      cx: (width * 0.82).toFixed(2),
      cy: (height * 0.2).toFixed(2),
      r: (height * 0.4).toFixed(2),
    };
    const waveY = (height * 0.7).toFixed(2);
    const controlY = (height * 0.55).toFixed(2);

    const svg =
      `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title-${item.id}">\n` +
      `  <title id="title-${item.id}">${title} illustration</title>\n` +
      `  <rect width="100%" height="100%" fill="${bg}"/>\n` +
      `  <circle cx="${circle1.cx}" cy="${circle1.cy}" r="${circle1.r}" fill="${softAccent}" opacity="0.85"/>\n` +
      `  <circle cx="${circle2.cx}" cy="${circle2.cy}" r="${circle2.r}" fill="${softHighlight}" opacity="0.6"/>\n` +
      `  <path d="M0 ${waveY} Q ${(width * 0.32).toFixed(2)} ${controlY}, ${(width * 0.62).toFixed(2)} ${(height * 0.8).toFixed(2)} T ${width} ${waveY} V ${height} H 0 Z" fill="${mixWithWhite(highlight, 0.25)}" opacity="0.35"/>\n` +
      `  <text x="${(width * 0.26).toFixed(2)}" y="${(height * 0.58).toFixed(2)}" font-family="'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji','DejaVu Sans',sans-serif" font-size="${(height * 0.38).toFixed(2)}" text-anchor="middle">${emoji}</text>\n` +
      `  <text x="${(width * 0.58).toFixed(2)}" y="${(height * 0.42).toFixed(2)}" fill="#ffffff" font-family="'Vazirmatn','IRANSans','Tahoma','Arial',sans-serif" font-size="${(height * 0.1).toFixed(2)}" font-weight="700">${title}</text>\n` +
      `  <text x="${(width * 0.58).toFixed(2)}" y="${(height * 0.52).toFixed(2)}" fill="#fdf2f8" font-family="'Vazirmatn','IRANSans','Tahoma','Arial',sans-serif" font-size="${(height * 0.05).toFixed(2)}" font-weight="400">${subtitle}</text>\n` +
      `  <text x="${(width * 0.58).toFixed(2)}" y="${(height * 0.6).toFixed(2)}" fill="#ffffff" font-family="'Vazirmatn','IRANSans','Tahoma','Arial',sans-serif" font-size="${(height * 0.06).toFixed(2)}" font-weight="600">${persianName}</text>\n` +
      `</svg>\n`;

    const filePath = path.join(outputDir, `${item.id}.svg`);
    fs.writeFileSync(filePath, svg, "utf8");
  }
}

console.log(
  "Generated menu illustrations in",
  path.relative(process.cwd(), outputDir)
);
