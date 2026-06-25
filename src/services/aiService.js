import { GoogleGenerativeAI } from "@google/generative-ai";

// Comprehensive portfolio context
const PORTFOLIO_CONTEXT = `
You are Olaniyi's professional AI assistant. You help visitors by answering questions about Olaniyi's work, skills, projects, and how to connect with him.

IMPORTANT RULES:
1. ALWAYS answer the user's specific question directly
2. NEVER give the same generic response twice in a row
3. If someone asks about WooCommerce, give specific WooCommerce details
4. If someone says "Freelance", give specific freelance details
5. Use "Absolutely!" or "Yes!" instead of "That's a great question!"

ABOUT OLANIYI:
- Name: Olaniyi Kamal
- Title: Software Engineer & Full Stack Developer
- Experience: 3+ years
- Email: olaniyikam@gmail.com
- Phone: +234 8124016354

WOOCOMMERCE EXPERTISE:
- Full WooCommerce store setup
- Payment integration (Stripe, PayPal, Flutterwave)
- Custom product types and variations
- Shipping configuration
- Performance optimization
- Custom theme development

FREELANCE DETAILS:
- Available for new projects
- Offers free consultation
- Rates: $50-75/hour or fixed project pricing
- Quick response within 24 hours
- Works with clients worldwide

RESPONSE EXAMPLES:
User: "Can he create a woocommerce store?"
AI: "Absolutely! Olaniyi has extensive experience building WooCommerce stores. 🛒

He can help you with:
• Full store setup from scratch
• Payment gateway integration (Stripe, PayPal, Flutterwave)
• Custom product types and variations
• Shipping and tax configuration
• Performance optimization for fast loading
• Custom theme design to match your brand

**Timeline:** 4-6 weeks for a standard store
**Pricing:** Starting at $2,000 - $5,000

Would you like to schedule a free consultation to discuss your store requirements? You can reach Olaniyi at olaniyikam@gmail.com or call +234 8124016354. 📞"

User: "Freelance"
AI: "Yes, Olaniyi is actively available for freelance work! 💼

Here's what he offers:
• Website design and development
• Full-stack application development
• WooCommerce & WordPress development
• UI/UX design
• System architecture consulting
• Maintenance and support

**Next steps:**
1. Schedule a free consultation call
2. Discuss your project needs
3. Receive a detailed proposal and timeline
4. Start building!

To get started, reach out to Olaniyi at olaniyikam@gmail.com or call +234 8124016354. He typically responds within 24 hours. 📞
`;

let aiModel = null;
let useFallback = false;
let lastResponse = "";

const initializeAI = async () => {
  try {
    let apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (!apiKey && typeof process !== 'undefined') {
      apiKey = process.env.VITE_GEMINI_API_KEY;
    }
    
    console.log("🔑 API Key exists:", !!apiKey);
    
    if (!apiKey) {
      console.warn("⚠️ No API key found. Using fallback responses.");
      useFallback = true;
      return null;
    }
    
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-pro",
      systemInstruction: PORTFOLIO_CONTEXT,
    });
    
    console.log("✅ Gemini AI initialized successfully!");
    return model;
  } catch (error) {
    console.error("❌ Failed to initialize AI:", error);
    useFallback = true;
    return null;
  }
};

export const getAIResponse = async (userMessage) => {
  // Force using fallback if we've had issues or no API key
  if (useFallback) {
    console.log("📝 Using fallback responses");
    return getFallbackResponse(userMessage);
  }

  try {
    if (!aiModel) {
      aiModel = await initializeAI();
    }

    if (aiModel) {
      console.log("🤖 Sending request to Gemini AI...");
      const result = await aiModel.generateContent(userMessage);
      const response = await result.response;
      const text = response.text();
      console.log("✅ Gemini response received!");
      lastResponse = text;
      return text;
    }
    
    console.warn("⚠️ Using fallback responses");
    useFallback = true;
    return getFallbackResponse(userMessage);
    
  } catch (error) {
    console.error("❌ AI Error:", error);
    useFallback = true;
    return getFallbackResponse(userMessage);
  }
};

// Improved fallback responses with conversation context
const getFallbackResponse = (message) => {
  const msg = message.toLowerCase().trim();

  // WooCommerce
  if (msg.includes("woocommerce") || msg.includes("woo") || msg.includes("ecommerce") || msg.includes("e-commerce") || msg.includes("store")) {
    if (msg.includes("create") || msg.includes("build") || msg.includes("make") || msg.includes("can")) {
      return "Absolutely! Olaniyi has extensive experience building WooCommerce stores. 🛒\n\nHe can help you with:\n\n• **Full store setup** from scratch\n• **Payment gateway integration** (Stripe, PayPal, Flutterwave)\n• **Custom product types** and variations\n• **Shipping and tax configuration**\n• **Performance optimization** for fast loading\n• **Custom theme design** to match your brand\n\n**Timeline:** 4-6 weeks for a standard store\n**Pricing:** Starting at $2,000 - $5,000 depending on complexity\n\nWould you like to schedule a free consultation to discuss your store requirements? You can reach Olaniyi at olaniyikam@gmail.com or call +234 8124016354. 📞";
    }
  }

  // Freelance
  if (msg.includes("freelance") || msg.includes("available") || msg.includes("hire") || msg.includes("work with") || msg.includes("collaborate")) {
    return "Yes, Olaniyi is actively available for freelance work! 💼\n\nHere's what he offers:\n\n• Website design and development\n• Full-stack application development\n• WooCommerce & WordPress development\n• UI/UX design\n• System architecture consulting\n• Maintenance and support\n\n**Next steps:**\n1️⃣ Schedule a free consultation call\n2️⃣ Discuss your project needs\n3️⃣ Receive a detailed proposal and timeline\n4️⃣ Start building!\n\nTo get started, reach out to Olaniyi at olaniyikam@gmail.com or call +234 8124016354. He typically responds within 24 hours. 📞";
  }

  // Projects
  if (msg.includes("project") || msg.includes("work") || msg.includes("build") || msg.includes("portfolio")) {
    if (msg.includes("show") || msg.includes("see") || msg.includes("view") || msg.includes("what")) {
      return "Olaniyi has built several impressive projects! 🚀\n\n**Here are the highlights:**\n\n🛒 **E-Commerce Platform** - Full-stack with React, Node.js, MongoDB, Stripe\n📋 **Task Management App** - Real-time collaboration with Firebase\n🌤️ **Weather Dashboard** - Live data with JavaScript and Chart.js\n🎨 **Portfolio Website** - This site with dark/light mode\n\n**I'll take you to the Projects page to see them all!** 📍\n\nWould you like to know more about a specific project or schedule a call with Olaniyi? 📞";
    }
  }

  // Skills
  if (msg.includes("skill") || msg.includes("tech") || msg.includes("technology") || msg.includes("stack")) {
    return "Olaniyi is a full-stack developer with a modern tech stack! 💡\n\n**Frontend:**\n• React, Next.js, TypeScript\n• Tailwind CSS, Material UI\n• Framer Motion, Three.js\n\n**Backend:**\n• Java Spring Boot\n• Node.js, NestJS\n• REST APIs, WebSocket\n\n**Database & Cloud:**\n• PostgreSQL, MongoDB, Firebase\n• Vercel, AWS\n\n**Specialized:**\n• WooCommerce, WordPress\n• AI Integration (Gemini, OpenAI)\n\n**I'll take you to the Skills section to see everything in detail!** 📍\n\nWhich technology are you most interested in? 😊";
  }

  // Contact
  if (msg.includes("contact") || msg.includes("email") || msg.includes("reach") || msg.includes("connect") || msg.includes("call")) {
    return "I'd love to connect you with Olaniyi! 🤝\n\n📧 **Email**: olaniyikam@gmail.com\n📱 **Phone/WhatsApp**: +234 8124016354\n💼 **LinkedIn**: linkedin.com/in/olaniyikam\n\n**I'll take you to the Contact page where you can send a message!** 📍\n\nWhat's the best way for Olaniyi to reach you? He typically responds within 24 hours! 💬";
  }

  // About/Experience
  if (msg.includes("about") || msg.includes("experience") || msg.includes("background") || msg.includes("who")) {
    return "Olaniyi Kamal is a passionate Software Engineer with 3+ years of experience! 👨‍💻\n\n**His Journey:**\n• Started with HTML/CSS and JavaScript\n• Moved to React and modern frontend\n• Expanded to backend with Node.js and Java\n• Now builds complete, production-ready applications\n\n**His Philosophy:**\nHe believes in creating applications that are not just functional but also delightful to use—with clean code, thoughtful design, and exceptional user experiences.\n\n**I'll take you to the About page to learn more!** 📍\n\nWould you like to know more about his specific experience? 📞";
  }

  // Hello/greetings
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey") || msg.includes("greetings")) {
    return "Hello there! 👋 Welcome to Olaniyi's portfolio.\n\nI'm here to help you learn about Olaniyi's work and how he can bring your ideas to life.\n\n📁 **Projects** - See what he's built\n💡 **Skills** - Learn about his expertise\n👨‍💻 **About** - Discover his journey\n📞 **Contact** - Connect with him directly\n\nWhat would you like to know about Olaniyi? 😊";
  }

  // Default - specific and helpful
  return "I'd love to help you learn more about Olaniyi! 😊\n\n**Here's what I can tell you about:**\n\n📁 **Projects** - E-Commerce, Task App, Weather Dashboard\n💡 **Skills** - React, Java, Node.js, WordPress, WooCommerce\n👨‍💻 **Experience** - 3+ years of full-stack development\n📞 **Contact** - Email, phone, or contact form\n💼 **Freelance** - Available for new projects\n\nWhat would you like to know more about? I'm here to help! 💪";
};

export const checkAIStatus = async () => {
  try {
    let apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey && typeof process !== 'undefined') {
      apiKey = process.env.VITE_GEMINI_API_KEY;
    }
    
    if (!apiKey) {
      return { status: 'error', message: 'No API key found. Please add VITE_GEMINI_API_KEY to your .env file' };
    }
    
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent("Hello, are you working?");
    const response = await result.response;
    
    return { status: 'success', message: 'AI is working properly!' };
  } catch (error) {
    return { status: 'error', message: error.message };
  }
};

// Export a function to toggle between Gemini and fallback
export const toggleAI = (useFallbackMode = false) => {
  useFallback = useFallbackMode;
  console.log(`🔄 AI mode: ${useFallbackMode ? 'FALLBACK' : 'GEMINI'}`);
};