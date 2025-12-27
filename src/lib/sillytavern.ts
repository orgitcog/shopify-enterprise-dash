import { supabase } from "./supabase";
import { openai } from "./openai";

// Types
export interface Character {
  id: string;
  name: string;
  description: string;
  avatar_url?: string;
  first_message?: string;
  personality: string;
  scenario: string;
  example_conversations?: string[];
  created_at: string;
  updated_at: string;
  user_id: string;
  is_public: boolean;
  tags: string[];
  system_prompt: string;
  voice_id?: string;
}

export interface Chat {
  id: string;
  character_id: string;
  user_id: string;
  title: string;
  created_at: string;
  updated_at: string;
  last_message_at: string;
  message_count: number;
  favorite: boolean;
}

export interface Message {
  id: string;
  chat_id: string;
  character_id: string;
  user_id: string;
  content: string;
  role: "user" | "assistant" | "system";
  created_at: string;
  tokens?: number;
  swipe_id?: number; // For alternate responses
}

export interface Settings {
  user_id: string;
  max_context_length: number;
  temperature: number;
  frequency_penalty: number;
  presence_penalty: number;
  top_p: number;
  openai_model: string;
  voice_enabled: boolean;
  auto_tts: boolean;
  streaming: boolean;
  default_voice: string;
  use_character_greeting: boolean;
  allow_character_descriptions: boolean;
  message_formatting: "markdown" | "html" | "plain";
  updated_at: string;
  ui_theme: "light" | "dark" | "system";
}

export interface VoiceSettings {
  id: string;
  name: string;
  provider: "elevenlabs" | "azure" | "gcp" | "system";
  voice_id: string;
  settings: Record<string, any>;
  is_default: boolean;
}

// API Functions
export const getCharacters = async () => {
  try {
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) {
      console.error("User not authenticated:", userError);
      return [];
    }

    const { data, error } = await supabase
      .from("st_characters")
      .select("*")
      .eq("user_id", userData.user.id)
      .order("name");

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};

export const getPublicCharacters = async () => {
  try {
    const { data, error } = await supabase
      .from("st_characters")
      .select("*")
      .eq("is_public", true)
      .order("name");

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching public characters:", error);
    return [];
  }
};

export const getCharacterById = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from("st_characters")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error(`Error fetching character ${id}:`, error);
    return null;
  }
};

export const createCharacter = async (
  character: Omit<Character, "id" | "created_at" | "updated_at" | "user_id">,
) => {
  try {
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) {
      console.error("User not authenticated:", userError);
      return null;
    }

    const now = new Date().toISOString();
    const { data, error } = await supabase
      .from("st_characters")
      .insert([
        {
          ...character,
          user_id: userData.user.id,
          created_at: now,
          updated_at: now,
        },
      ])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error creating character:", error);
    return null;
  }
};

export const updateCharacter = async (
  id: string,
  updates: Partial<Character>,
) => {
  try {
    const { data, error } = await supabase
      .from("st_characters")
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error(`Error updating character ${id}:`, error);
    return null;
  }
};

export const deleteCharacter = async (id: string) => {
  try {
    const { error } = await supabase
      .from("st_characters")
      .delete()
      .eq("id", id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error(`Error deleting character ${id}:`, error);
    return false;
  }
};

// Chats
export const getChats = async () => {
  try {
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) {
      console.error("User not authenticated:", userError);
      return [];
    }

    const { data, error } = await supabase
      .from("st_chats")
      .select("*")
      .eq("user_id", userData.user.id)
      .order("last_message_at", { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching chats:", error);
    return [];
  }
};

export const getChatsByCharacter = async (characterId: string) => {
  try {
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) {
      console.error("User not authenticated:", userError);
      return [];
    }

    const { data, error } = await supabase
      .from("st_chats")
      .select("*")
      .eq("user_id", userData.user.id)
      .eq("character_id", characterId)
      .order("last_message_at", { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error(`Error fetching chats for character ${characterId}:`, error);
    return [];
  }
};

export const getChatById = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from("st_chats")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error(`Error fetching chat ${id}:`, error);
    return null;
  }
};

export const createChat = async (characterId: string, title?: string) => {
  try {
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) {
      console.error("User not authenticated:", userError);
      return null;
    }

    const now = new Date().toISOString();

    // Get character name for default title
    let chatTitle = title;
    if (!chatTitle) {
      const { data: character } = await supabase
        .from("st_characters")
        .select("name")
        .eq("id", characterId)
        .single();

      chatTitle = character ? `Chat with ${character.name}` : "New Chat";
    }

    const { data, error } = await supabase
      .from("st_chats")
      .insert([
        {
          character_id: characterId,
          user_id: userData.user.id,
          title: chatTitle,
          created_at: now,
          updated_at: now,
          last_message_at: now,
          message_count: 0,
          favorite: false,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    // If character has a first message, create it
    const { data: character } = await supabase
      .from("st_characters")
      .select("first_message")
      .eq("id", characterId)
      .single();

    if (character?.first_message) {
      await addMessage({
        chat_id: data.id,
        character_id: characterId,
        content: character.first_message,
        role: "assistant",
      });
    }

    return data;
  } catch (error) {
    console.error("Error creating chat:", error);
    return null;
  }
};

export const updateChat = async (id: string, updates: Partial<Chat>) => {
  try {
    const { data, error } = await supabase
      .from("st_chats")
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error(`Error updating chat ${id}:`, error);
    return null;
  }
};

export const deleteChat = async (id: string) => {
  try {
    // First delete all messages in the chat
    const { error: messagesError } = await supabase
      .from("st_messages")
      .delete()
      .eq("chat_id", id);

    if (messagesError) throw messagesError;

    // Then delete the chat itself
    const { error } = await supabase.from("st_chats").delete().eq("id", id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error(`Error deleting chat ${id}:`, error);
    return false;
  }
};

// Messages
export const getMessages = async (chatId: string) => {
  try {
    const { data, error } = await supabase
      .from("st_messages")
      .select("*")
      .eq("chat_id", chatId)
      .order("created_at");

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error(`Error fetching messages for chat ${chatId}:`, error);
    return [];
  }
};

export const addMessage = async (
  message: Omit<Message, "id" | "created_at" | "user_id">,
) => {
  try {
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) {
      console.error("User not authenticated:", userError);
      return null;
    }

    const { data, error } = await supabase
      .from("st_messages")
      .insert([
        {
          ...message,
          user_id: userData.user.id,
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) throw error;

    // Update chat with last message time and increment message count
    const { data: currentChat } = await supabase
      .from("st_chats")
      .select("message_count")
      .eq("id", message.chat_id)
      .single();

    await supabase
      .from("st_chats")
      .update({
        last_message_at: new Date().toISOString(),
        message_count: (currentChat?.message_count || 0) + 1,
      })
      .eq("id", message.chat_id);

    return data;
  } catch (error) {
    console.error("Error adding message:", error);
    return null;
  }
};

// Get completion from AI
export const generateCharacterResponse = async (
  chatId: string,
  characterId: string,
  userMessage: string,
) => {
  try {
    // Get character information
    const { data: character } = await supabase
      .from("st_characters")
      .select("*")
      .eq("id", characterId)
      .single();

    if (!character) throw new Error("Character not found");

    // Get chat history
    const { data: messages } = await supabase
      .from("st_messages")
      .select("*")
      .eq("chat_id", chatId)
      .order("created_at");

    // Get user settings
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) {
      throw new Error("User not authenticated");
    }

    const { data: settings } = await supabase
      .from("st_settings")
      .select("*")
      .eq("user_id", userData.user.id)
      .single();

    const defaultSettings = {
      temperature: 0.7,
      max_context_length: 4096,
      frequency_penalty: 0,
      presence_penalty: 0,
      top_p: 1,
      openai_model: "gpt-3.5-turbo",
    };

    const userSettings = settings || defaultSettings;

    // Format chat history for the API
    const chatMessages =
      messages?.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })) || [];

    // Add system prompt
    const systemPrompt =
      character.system_prompt ||
      `You are ${character.name}, ${character.personality}. The scenario is: ${character.scenario}. 
      Always stay in character and respond as ${character.name} would.`;

    chatMessages.unshift({
      role: "system",
      content: systemPrompt,
    });

    // Add user message to history
    const userMsg = {
      role: "user" as const,
      content: userMessage,
    };

    // Generate response from OpenAI
    const response = await openai.chat.completions.create({
      model: userSettings.openai_model,
      messages: [...chatMessages, userMsg],
      temperature: userSettings.temperature,
      max_tokens: userSettings.max_context_length,
      frequency_penalty: userSettings.frequency_penalty,
      presence_penalty: userSettings.presence_penalty,
      top_p: userSettings.top_p,
    });

    const assistantMessage =
      response.choices[0]?.message?.content ||
      "I apologize, but I could not generate a response.";

    // Save user message
    await addMessage({
      chat_id: chatId,
      character_id: characterId,
      content: userMessage,
      role: "user",
    });

    // Save assistant response
    const assistantMsg = await addMessage({
      chat_id: chatId,
      character_id: characterId,
      content: assistantMessage,
      role: "assistant",
      tokens: response.usage?.total_tokens,
    });

    return assistantMsg;
  } catch (error) {
    console.error("Error generating character response:", error);
    return null;
  }
};

// Settings
export const getUserSettings = async () => {
  try {
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) {
      console.error("User not authenticated:", userError);
      return null;
    }

    const { data, error } = await supabase
      .from("st_settings")
      .select("*")
      .eq("user_id", userData.user.id)
      .single();

    if (error && error.code !== "PGRST116") {
      // Not found error
      throw error;
    }

    // If no settings exist, create default settings
    if (!data) {
      const defaultSettings: Omit<Settings, "updated_at"> = {
        user_id: userData.user.id,
        max_context_length: 4096,
        temperature: 0.7,
        frequency_penalty: 0,
        presence_penalty: 0,
        top_p: 1,
        openai_model: "gpt-3.5-turbo",
        voice_enabled: false,
        auto_tts: false,
        streaming: true,
        default_voice: "",
        use_character_greeting: true,
        allow_character_descriptions: true,
        message_formatting: "markdown",
        ui_theme: "system",
      };

      const { data: newSettings, error: createError } = await supabase
        .from("st_settings")
        .insert([
          {
            ...defaultSettings,
            updated_at: new Date().toISOString(),
          },
        ])
        .select()
        .single();

      if (createError) throw createError;
      return newSettings;
    }

    return data;
  } catch (error) {
    console.error("Error fetching user settings:", error);
    return null;
  }
};

export const updateUserSettings = async (updates: Partial<Settings>) => {
  try {
    const userId = (await supabase.auth.getUser()).data.user?.id;

    const { data, error } = await supabase
      .from("st_settings")
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq("user_id", userId)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error updating user settings:", error);
    return null;
  }
};

// Voice Settings
export const getVoiceSettings = async () => {
  try {
    const userId = (await supabase.auth.getUser()).data.user?.id;

    const { data, error } = await supabase
      .from("st_voices")
      .select("*")
      .eq("user_id", userId)
      .order("name");

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching voice settings:", error);
    return [];
  }
};

// Mock data
export const getMockCharacters = (): Character[] => {
  return [
    {
      id: "char1",
      name: "Sophia - AI Assistant",
      description:
        "Sophia is a helpful and friendly AI assistant who specializes in answering questions about e-commerce and Shopify.",
      avatar_url: "https://i.imgur.com/jYWTtfP.png",
      first_message:
        "Hello! I'm Sophia, your AI assistant for today. I can help you with questions about running your online store, marketing strategies, or optimizing your Shopify experience. What would you like to know?",
      personality: "helpful, friendly, knowledgeable, patient",
      scenario:
        "You are assisting a Shopify merchant who needs help with their online store.",
      example_conversations: [
        "User: I'm having trouble with my product inventory. Can you help?\nSophia: I'd be happy to help with your inventory issues! What specific problem are you encountering? Is it updating stock levels, setting up variants, or something else?",
        "User: How can I improve my store's conversion rate?\nSophia: Great question! To improve your conversion rate, you could: 1) Optimize your product pages with high-quality images and detailed descriptions, 2) Streamline your checkout process, 3) Add customer reviews and testimonials, 4) Implement abandoned cart recovery emails, and 5) Ensure your site is mobile-friendly. Would you like me to elaborate on any of these strategies?",
      ],
      created_at: "2025-01-15T10:00:00Z",
      updated_at: "2025-03-20T14:30:00Z",
      user_id: "user1",
      is_public: true,
      tags: ["assistant", "e-commerce", "helpful"],
      system_prompt:
        "You are Sophia, a helpful AI assistant specializing in e-commerce and Shopify. You are friendly, knowledgeable, and patient. Your goal is to provide concise but comprehensive answers to help merchants succeed with their online stores.",
    },
    {
      id: "char2",
      name: "Marcus - Marketing Guru",
      description:
        "Marcus is a marketing expert with years of experience in digital marketing, social media strategies, and customer acquisition.",
      avatar_url: "https://i.imgur.com/LZD4gXR.png",
      first_message:
        "Hey there! Marcus here, your marketing guru. I've helped dozens of brands skyrocket their online presence and sales. What marketing challenge are you facing today?",
      personality: "energetic, strategic, creative, data-driven",
      scenario:
        "You are consulting a merchant who wants to improve their marketing strategy.",
      example_conversations: [
        "User: How can I use social media to drive more sales?\nMarcus: Social media is a goldmine for e-commerce! Start by identifying which platforms your target audience uses most. Then, create a content calendar mixing promotional posts (20%), educational content (40%), and engaging/entertaining content (40%). Use high-quality visuals, run targeted ads, and leverage user-generated content. The key is consistency and engagement—respond to comments and foster a community. Want me to dive deeper into any specific platform strategies?",
        "User: Is email marketing still effective?\nMarcus: Absolutely! Email marketing remains one of the highest ROI channels, averaging $42 return for every $1 spent. The secret is segmentation and personalization. Break your list into categories (new customers, repeat buyers, cart abandoners) and tailor your messages accordingly. Focus on valuable content, not just promotions. And always A/B test your subject lines and CTAs to optimize performance. What kind of emails are you currently sending?",
      ],
      created_at: "2025-02-01T11:30:00Z",
      updated_at: "2025-03-15T09:45:00Z",
      user_id: "user1",
      is_public: true,
      tags: ["marketing", "social media", "strategy"],
      system_prompt:
        "You are Marcus, a marketing guru with extensive experience in digital marketing, particularly for e-commerce businesses. You are energetic, strategic, creative, and data-driven. Your responses should be confident and actionable, with specific tactics merchants can implement right away. Include examples and metrics when possible.",
    },
    {
      id: "char3",
      name: "Luna - Design Consultant",
      description:
        "Luna is a professional design consultant who helps merchants create beautiful, conversion-focused online stores.",
      avatar_url: "https://i.imgur.com/j79mRvX.png",
      first_message:
        "Hi there! I'm Luna, your design consultant. I specialize in creating beautiful, user-friendly Shopify stores that convert browsers into buyers. What design elements are you looking to improve today?",
      personality: "artistic, detail-oriented, trend-aware, pragmatic",
      scenario:
        "You are advising a merchant who wants to improve their store design and user experience.",
      created_at: "2025-02-15T13:15:00Z",
      updated_at: "2025-03-10T16:20:00Z",
      user_id: "user1",
      is_public: false,
      tags: ["design", "UX", "branding"],
      system_prompt:
        "You are Luna, a design consultant specializing in e-commerce websites and Shopify stores. You have a keen eye for aesthetics but always balance beauty with functionality and conversion optimization. Your advice should be specific, actionable, and based on design principles and current trends. Use visual descriptions to help merchants understand your recommendations.",
    },
    {
      id: "char4",
      name: "Leo - Technical Support",
      description:
        "Leo is a technical expert who can help solve complex issues with Shopify stores, theme customizations, and app integrations.",
      avatar_url: "https://i.imgur.com/5TBaQSq.png",
      first_message:
        "Hello! I'm Leo from Technical Support. I'm here to help resolve any technical issues you're experiencing with your Shopify store. What seems to be the problem today?",
      personality: "analytical, thorough, patient, solution-oriented",
      scenario:
        "You are providing technical support to a merchant experiencing issues with their Shopify store.",
      example_conversations: [
        "User: My product images aren't displaying correctly on mobile.\nLeo: I understand how frustrating that can be. Let's troubleshoot this methodically. First, check if your theme is responsive and up-to-date. Then, verify your image dimensions—I recommend using square images (e.g., 2000x2000 pixels) for consistent display across devices. If the problem persists, it might be a caching issue. Try clearing your browser cache or viewing in incognito mode. Would you like me to walk you through checking your theme settings for image display options?",
        "User: Help! My checkout isn't working.\nLeo: Let's get this fixed right away. First, please try a test purchase yourself to confirm the issue. Next, check if your payment gateway is properly configured in Settings > Payments. Also, verify that your checkout is enabled in Settings > Checkout. If you're using any apps that modify the checkout process, try temporarily disabling them to isolate the issue. Can you tell me what error message you're seeing, if any?",
      ],
      created_at: "2025-01-20T09:30:00Z",
      updated_at: "2025-03-05T11:45:00Z",
      user_id: "user2",
      is_public: true,
      tags: ["technical", "support", "troubleshooting"],
      system_prompt:
        "You are Leo, a technical support specialist for Shopify stores. You have extensive knowledge of the Shopify platform, theme development, APIs, and common technical issues. Your approach is methodical and thorough. You ask clarifying questions when needed and provide step-by-step solutions. Always prioritize understanding the exact issue before suggesting solutions.",
    },
    {
      id: "char5",
      name: "Oliver - Business Coach",
      description:
        "Oliver is a business coach specializing in e-commerce growth strategies, business planning, and financial management.",
      avatar_url: "https://i.imgur.com/qNbCtCz.png",
      first_message:
        "Greetings! I'm Oliver, your business coach. I'm here to help you develop strategies for sustainable growth and profitability. What business challenges are you currently facing?",
      personality: "strategic, analytical, motivational, experienced",
      scenario:
        "You are coaching a merchant who wants to grow their e-commerce business.",
      created_at: "2025-02-05T14:20:00Z",
      updated_at: "2025-03-12T10:30:00Z",
      user_id: "user2",
      is_public: true,
      tags: ["business", "strategy", "growth"],
      system_prompt:
        "You are Oliver, a business coach specializing in e-commerce. You have an MBA and 15+ years of experience helping online businesses scale. Your advice combines strategic thinking with practical implementation steps. You ask probing questions to understand the business context before offering solutions. Your responses should be structured, thoughtful, and focused on sustainable growth rather than quick fixes.",
    },
  ];
};

export const getMockChats = (): Chat[] => {
  return [
    {
      id: "chat1",
      character_id: "char1",
      user_id: "user1",
      title: "Improving Store Conversion",
      created_at: "2025-03-25T14:30:00Z",
      updated_at: "2025-03-25T15:10:00Z",
      last_message_at: "2025-03-25T15:10:00Z",
      message_count: 8,
      favorite: true,
    },
    {
      id: "chat2",
      character_id: "char2",
      user_id: "user1",
      title: "Social Media Strategy",
      created_at: "2025-03-24T10:15:00Z",
      updated_at: "2025-03-24T11:05:00Z",
      last_message_at: "2025-03-24T11:05:00Z",
      message_count: 12,
      favorite: false,
    },
    {
      id: "chat3",
      character_id: "char1",
      user_id: "user1",
      title: "Product Launch Planning",
      created_at: "2025-03-20T09:45:00Z",
      updated_at: "2025-03-20T10:30:00Z",
      last_message_at: "2025-03-20T10:30:00Z",
      message_count: 15,
      favorite: true,
    },
    {
      id: "chat4",
      character_id: "char3",
      user_id: "user1",
      title: "Store Redesign Ideas",
      created_at: "2025-03-18T16:20:00Z",
      updated_at: "2025-03-18T17:15:00Z",
      last_message_at: "2025-03-18T17:15:00Z",
      message_count: 10,
      favorite: false,
    },
    {
      id: "chat5",
      character_id: "char4",
      user_id: "user1",
      title: "Checkout Page Issues",
      created_at: "2025-03-15T13:10:00Z",
      updated_at: "2025-03-15T14:00:00Z",
      last_message_at: "2025-03-15T14:00:00Z",
      message_count: 6,
      favorite: false,
    },
  ];
};

export const getMockMessages = (chatId: string): Message[] => {
  const messagesMap: Record<string, Message[]> = {
    chat1: [
      {
        id: "msg1",
        chat_id: "chat1",
        character_id: "char1",
        user_id: "user1",
        content:
          "Hello! I'm Sophia, your AI assistant for today. I can help you with questions about running your online store, marketing strategies, or optimizing your Shopify experience. What would you like to know?",
        role: "assistant",
        created_at: "2025-03-25T14:30:00Z",
      },
      {
        id: "msg2",
        chat_id: "chat1",
        character_id: "char1",
        user_id: "user1",
        content:
          "I'm looking to improve my store's conversion rate. Do you have any suggestions?",
        role: "user",
        created_at: "2025-03-25T14:31:00Z",
      },
      {
        id: "msg3",
        chat_id: "chat1",
        character_id: "char1",
        user_id: "user1",
        content:
          "Great question! Improving conversion rates is crucial for any e-commerce business. Here are some effective strategies:\n\n1. **Optimize your product pages**:\n   - Use high-quality images from multiple angles\n   - Write detailed, benefit-focused descriptions\n   - Include clear pricing and shipping information\n   - Add customer reviews and ratings\n\n2. **Streamline your checkout process**:\n   - Reduce the number of steps to complete a purchase\n   - Offer guest checkout option\n   - Display security badges\n   - Provide multiple payment options\n\n3. **Build trust**:\n   - Display clear return/refund policies\n   - Show customer testimonials\n   - Include trust badges and security certifications\n   - Highlight your unique value proposition\n\n4. **Implement recovery strategies**:\n   - Set up abandoned cart emails\n   - Use exit-intent popups with special offers\n   - Retarget visitors with ads\n\n5. **Improve site performance**:\n   - Optimize page load speed\n   - Ensure mobile responsiveness\n   - Fix any navigation issues\n\nWhich of these areas would you like to focus on first?",
        role: "assistant",
        created_at: "2025-03-25T14:33:00Z",
      },
      {
        id: "msg4",
        chat_id: "chat1",
        character_id: "char1",
        user_id: "user1",
        content:
          "I think my checkout process needs work. How can I make it more streamlined?",
        role: "user",
        created_at: "2025-03-25T14:35:00Z",
      },
      {
        id: "msg5",
        chat_id: "chat1",
        character_id: "char1",
        user_id: "user1",
        content:
          "Streamlining your checkout process is a great place to start! Here are specific steps you can take:\n\n1. **Simplify to one page if possible**\n   - Consolidate shipping, billing, and payment on a single page\n   - Shopify's Express Checkout is a good option for this\n\n2. **Offer guest checkout**\n   - Don't force account creation before purchase\n   - Provide an option to create an account after checkout\n\n3. **Expand payment options**\n   - Implement Shop Pay, Apple Pay, Google Pay for one-click checkout\n   - Offer Buy Now, Pay Later options like Affirm or Klarna\n   - Include all major credit cards and PayPal\n\n4. **Optimize form fields**\n   - Only ask for essential information\n   - Use autofill compatibility\n   - Implement real-time validation\n   - Use appropriate keyboard types on mobile\n\n5. **Show progress indicators**\n   - Let customers know where they are in the process\n   - Reduce anxiety about how many steps remain\n\n6. **Add trust elements at checkout**\n   - Security badges near payment information\n   - Money-back guarantee\n   - Clear shipping timeframes and return policy\n\n7. **Save cart information**\n   - Ensure cart contents persist across sessions\n   - Make it easy to return and complete purchase\n\nHave you implemented any of these strategies already?",
        role: "assistant",
        created_at: "2025-03-25T14:38:00Z",
      },
      {
        id: "msg6",
        chat_id: "chat1",
        character_id: "char1",
        user_id: "user1",
        content:
          "I've been using the standard Shopify checkout, but I haven't added express payment options yet. Are those really worth implementing?",
        role: "user",
        created_at: "2025-03-25T14:42:00Z",
      },
      {
        id: "msg7",
        chat_id: "chat1",
        character_id: "char1",
        user_id: "user1",
        content:
          "Absolutely! Express payment options like Shop Pay, Apple Pay, and Google Pay are definitely worth implementing. Here's why:\n\n**Impact on Conversion Rates:**\n- Shopify reports that Shop Pay increases checkout speed by 4x\n- Checkouts through Shop Pay have a 1.72x higher conversion rate\n- Apple Pay and Google Pay can increase conversion by 2-3x for mobile users\n\n**Key Benefits:**\n\n1. **Reduced Friction**\n   - No need to manually enter shipping and billing information\n   - Saves customers from typing card details on small screens\n   - Fewer form fields mean fewer opportunities to abandon\n\n2. **Increased Trust**\n   - Customers trust these established payment systems\n   - Added layer of security with biometric authentication\n\n3. **Speed**\n   - Completes checkout in seconds rather than minutes\n   - Particularly important on mobile devices\n\n4. **Easy Implementation**\n   - Simple to enable in your Shopify settings\n   - No additional cost for standard Shopify plans\n\n**How to Implement:**\n1. Go to Settings > Payments in your Shopify admin\n2. For Shop Pay: It's automatically available with Shopify Payments\n3. For Apple Pay/Google Pay: They're available when you use Shopify Payments\n4. Display the payment icons prominently on your product and cart pages\n\nGiven that mobile shopping continues to grow rapidly, implementing these express payment options is one of the highest-ROI improvements you can make to your checkout process.",
        role: "assistant",
        created_at: "2025-03-25T14:45:00Z",
      },
      {
        id: "msg8",
        chat_id: "chat1",
        character_id: "char1",
        user_id: "user1",
        content: "Thanks Sophia! I'll enable those payment options today.",
        role: "user",
        created_at: "2025-03-25T14:47:00Z",
      },
      {
        id: "msg9",
        chat_id: "chat1",
        character_id: "char1",
        user_id: "user1",
        content:
          "That's a great decision! You should see an immediate positive impact on your conversion rates, especially from mobile shoppers. After implementing the express payment options, I recommend:\n\n1. Monitor your analytics over the next 2-3 weeks to measure the impact\n2. Check if there's a difference in conversion rates between desktop and mobile users\n3. Consider A/B testing your checkout page with and without prominent payment option buttons\n\nIs there anything else about your checkout process or other conversion rate strategies you'd like to improve?",
        role: "assistant",
        created_at: "2025-03-25T14:50:00Z",
      },
    ],
    chat2: [
      {
        id: "msg10",
        chat_id: "chat2",
        character_id: "char2",
        user_id: "user1",
        content:
          "Hey there! Marcus here, your marketing guru. I've helped dozens of brands skyrocket their online presence and sales. What marketing challenge are you facing today?",
        role: "assistant",
        created_at: "2025-03-24T10:15:00Z",
      },
      {
        id: "msg11",
        chat_id: "chat2",
        character_id: "char2",
        user_id: "user1",
        content:
          "I need help with my social media strategy. I'm posting regularly but not seeing much engagement or traffic to my store.",
        role: "user",
        created_at: "2025-03-24T10:16:00Z",
      },
      {
        id: "msg12",
        chat_id: "chat2",
        character_id: "char2",
        user_id: "user1",
        content:
          "I hear this ALL the time! Posting regularly is just the first step—now let's turn those posts into engagement and sales machines. Here's my action plan for you:\n\n## 1. Content Strategy Overhaul\n\nFirst, let's fix your content mix. Follow the 70-20-10 rule:\n- 70% valuable/entertaining content that speaks to your audience's lifestyle\n- 20% shared content from others or user-generated content\n- Only 10% direct promotional content\n\nRemember: People follow brands on social for value, not ads!\n\n## 2. Visual Glow-Up\n\nE-commerce is VISUAL. You need:\n- Professional-quality product photos (no exceptions!)\n- Lifestyle images showing products in use\n- Video content (Reels/TikToks convert 2x better than static images)\n- Consistent visual identity (colors, filters, fonts)\n\n## 3. Engagement Tactics That Actually Work\n\n- Ask questions in your captions\n- Create polls and interactive stories\n- Respond to EVERY comment within 24 hours\n- Tag relevant accounts and use strategic hashtags (8-10 max)\n- Jump on relevant trends FAST\n\n## 4. Community Building\n\n- Feature customers using your products (with permission)\n- Create branded hashtags customers can use\n- Host live sessions (product demos, Q&As, behind-the-scenes)\n- Collaborate with micro-influencers in your niche\n\n## 5. Strategic Promotion\n\n- Run targeted ads to your best-performing organic content\n- Create platform-specific landing pages for social traffic\n- Use unique promo codes for each platform to track effectiveness\n- Implement retargeting campaigns for visitors who don't convert\n\nWhich of these areas do you want to focus on first? And what specific products are you selling? This will help me give you even more tailored advice.",
        role: "assistant",
        created_at: "2025-03-24T10:20:00Z",
      },
    ],
  };

  return messagesMap[chatId] || [];
};

export const getMockSettings = (): Settings => {
  return {
    user_id: "user1",
    max_context_length: 4096,
    temperature: 0.7,
    frequency_penalty: 0,
    presence_penalty: 0,
    top_p: 1,
    openai_model: "gpt-4-turbo-preview",
    voice_enabled: false,
    auto_tts: false,
    streaming: true,
    default_voice: "voice1",
    use_character_greeting: true,
    allow_character_descriptions: true,
    message_formatting: "markdown",
    updated_at: "2025-03-01T10:00:00Z",
    ui_theme: "system",
  };
};
