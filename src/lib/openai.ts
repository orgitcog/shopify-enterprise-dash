import OpenAI from "openai";
import { supabase } from "./supabase";

// Initialize the OpenAI client
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY || "";
const OPENAI_ORG_ID = import.meta.env.VITE_OPENAI_ORG_ID || "";

export const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  organization: OPENAI_ORG_ID,
});

// Types
export type ChatMessage = {
  role: "system" | "user" | "assistant" | "function";
  content: string;
  name?: string;
  function_call?: {
    name: string;
    arguments: string;
  };
};

export type ThreadMessage = {
  id: string;
  thread_id: string;
  role: string;
  content: {
    type: string;
    text: {
      value: string;
      annotations: any[];
    };
  }[];
  created_at: number;
};

export type Assistant = {
  id: string;
  name: string;
  description?: string;
  instructions?: string;
  model: string;
  tools: any[];
  tool_resources?: any[];
  created_at: number;
  metadata?: Record<string, string>;
};

export type FineTuningJob = {
  id: string;
  model: string;
  created_at: number;
  finished_at?: number;
  fine_tuned_model?: string;
  organization_id: string;
  status: string;
  validation_file?: string;
  training_file: string;
};

export type UsageMetrics = {
  total_tokens: number;
  prompt_tokens: number;
  completion_tokens: number;
  total_cost: number;
  period?: string;
  model_usage: {
    model: string;
    tokens: number;
    cost: number;
  }[];
};

export type ModelInfo = {
  id: string;
  created: number;
  owned_by: string;
};

// API Functions

// Assistants
export const getAssistants = async (): Promise<Assistant[]> => {
  try {
    const response = await openai.beta.assistants.list({
      limit: 100,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching assistants:", error);
    return [];
  }
};

export const getAssistant = async (
  assistantId: string,
): Promise<Assistant | null> => {
  try {
    const assistant = await openai.beta.assistants.retrieve(assistantId);
    return assistant;
  } catch (error) {
    console.error(`Error fetching assistant ${assistantId}:`, error);
    return null;
  }
};

export const createAssistant = async (
  name: string,
  instructions: string,
  model: string = "gpt-4-turbo-preview",
  tools: any[] = [{ type: "retrieval" }],
): Promise<Assistant | null> => {
  try {
    const assistant = await openai.beta.assistants.create({
      name,
      instructions,
      model,
      tools,
    });
    return assistant;
  } catch (error) {
    console.error("Error creating assistant:", error);
    return null;
  }
};

export const updateAssistant = async (
  assistantId: string,
  updates: Partial<{
    name: string;
    instructions: string;
    model: string;
    tools: any[];
  }>,
): Promise<Assistant | null> => {
  try {
    const assistant = await openai.beta.assistants.update(assistantId, updates);
    return assistant;
  } catch (error) {
    console.error(`Error updating assistant ${assistantId}:`, error);
    return null;
  }
};

export const deleteAssistant = async (
  assistantId: string,
): Promise<boolean> => {
  try {
    const response = await openai.beta.assistants.del(assistantId);
    return response.deleted;
  } catch (error) {
    console.error(`Error deleting assistant ${assistantId}:`, error);
    return false;
  }
};

// Threads & Messages
export const createThread = async (): Promise<string | null> => {
  try {
    const thread = await openai.beta.threads.create();
    return thread.id;
  } catch (error) {
    console.error("Error creating thread:", error);
    return null;
  }
};

export const createMessage = async (
  threadId: string,
  content: string,
  role: "user" = "user",
): Promise<ThreadMessage | null> => {
  try {
    const message = await openai.beta.threads.messages.create(threadId, {
      role,
      content,
    });
    return message as unknown as ThreadMessage;
  } catch (error) {
    console.error(`Error creating message in thread ${threadId}:`, error);
    return null;
  }
};

export const getMessages = async (
  threadId: string,
): Promise<ThreadMessage[]> => {
  try {
    const response = await openai.beta.threads.messages.list(threadId);
    return response.data as unknown as ThreadMessage[];
  } catch (error) {
    console.error(`Error fetching messages for thread ${threadId}:`, error);
    return [];
  }
};

export const runAssistant = async (
  threadId: string,
  assistantId: string,
  instructions?: string,
): Promise<string | null> => {
  try {
    const run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: assistantId,
      instructions,
    });
    return run.id;
  } catch (error) {
    console.error(
      `Error running assistant ${assistantId} on thread ${threadId}:`,
      error,
    );
    return null;
  }
};

export const getRunStatus = async (
  threadId: string,
  runId: string,
): Promise<string | null> => {
  try {
    const run = await openai.beta.threads.runs.retrieve(threadId, runId);
    return run.status;
  } catch (error) {
    console.error(`Error getting run status for run ${runId}:`, error);
    return null;
  }
};

// Direct Chat Completions
export const generateChatCompletion = async (
  messages: ChatMessage[],
  model: string = "gpt-4-turbo-preview",
  temperature: number = 0.7,
  maxTokens?: number,
): Promise<string | null> => {
  try {
    const response = await openai.chat.completions.create({
      model,
      messages,
      temperature,
      max_tokens: maxTokens,
    });

    return response.choices[0]?.message?.content || null;
  } catch (error) {
    console.error("Error generating chat completion:", error);
    return null;
  }
};

// Fine-tuning
export const getFineTuningJobs = async (): Promise<FineTuningJob[]> => {
  try {
    const response = await openai.fineTuning.jobs.list({
      limit: 100,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching fine-tuning jobs:", error);
    return [];
  }
};

export const getFineTuningJob = async (
  jobId: string,
): Promise<FineTuningJob | null> => {
  try {
    const job = await openai.fineTuning.jobs.retrieve(jobId);
    return job;
  } catch (error) {
    console.error(`Error fetching fine-tuning job ${jobId}:`, error);
    return null;
  }
};

// Usage and Monitoring
export const getModels = async (): Promise<ModelInfo[]> => {
  try {
    const response = await openai.models.list();
    return response.data;
  } catch (error) {
    console.error("Error fetching available models:", error);
    return [];
  }
};

// Store usage data in Supabase
export const logApiUsage = async (requestData: {
  endpoint: string;
  model: string;
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  estimatedCost: number;
  userId?: string;
}): Promise<boolean> => {
  try {
    const { error } = await supabase.from("openai_usage_logs").insert([
      {
        ...requestData,
        timestamp: new Date().toISOString(),
      },
    ]);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error("Error logging API usage:", error);
    return false;
  }
};

// Calculate usage metrics
export const calculateUsageMetrics = async (
  startDate?: string,
  endDate?: string,
  userId?: string,
): Promise<UsageMetrics | null> => {
  try {
    let query = supabase.from("openai_usage_logs").select("*");

    if (startDate) {
      query = query.gte("timestamp", startDate);
    }

    if (endDate) {
      query = query.lte("timestamp", endDate);
    }

    if (userId) {
      query = query.eq("userId", userId);
    }

    const { data, error } = await query;

    if (error) throw error;

    if (!data || data.length === 0) {
      return {
        total_tokens: 0,
        prompt_tokens: 0,
        completion_tokens: 0,
        total_cost: 0,
        model_usage: [],
      };
    }

    // Calculate metrics
    const prompt_tokens = data.reduce((sum, log) => sum + log.promptTokens, 0);
    const completion_tokens = data.reduce(
      (sum, log) => sum + log.completionTokens,
      0,
    );
    const total_tokens = prompt_tokens + completion_tokens;
    const total_cost = data.reduce((sum, log) => sum + log.estimatedCost, 0);

    // Group by model
    const modelGroups: Record<string, { tokens: number; cost: number }> = {};

    data.forEach((log) => {
      if (!modelGroups[log.model]) {
        modelGroups[log.model] = { tokens: 0, cost: 0 };
      }

      modelGroups[log.model].tokens += log.totalTokens;
      modelGroups[log.model].cost += log.estimatedCost;
    });

    const model_usage = Object.entries(modelGroups).map(([model, stats]) => ({
      model,
      tokens: stats.tokens,
      cost: stats.cost,
    }));

    return {
      total_tokens,
      prompt_tokens,
      completion_tokens,
      total_cost,
      period: startDate && endDate ? `${startDate} to ${endDate}` : undefined,
      model_usage,
    };
  } catch (error) {
    console.error("Error calculating usage metrics:", error);
    return null;
  }
};

// Content Moderation
export const moderateContent = async (
  input: string,
): Promise<{
  flagged: boolean;
  categories: Record<string, boolean>;
  category_scores: Record<string, number>;
}> => {
  try {
    const moderation = await openai.moderations.create({
      input,
    });

    return {
      flagged: moderation.results[0].flagged,
      categories: moderation.results[0].categories,
      category_scores: moderation.results[0].category_scores,
    };
  } catch (error) {
    console.error("Error moderating content:", error);
    return {
      flagged: false,
      categories: {},
      category_scores: {},
    };
  }
};

// Mock data for development purposes
export const getMockAssistants = (): Assistant[] => {
  return [
    {
      id: "asst_abc123",
      name: "Customer Support Assistant",
      description: "Helps with common customer inquiries and support issues",
      instructions:
        "You are a helpful customer support agent. Be polite and concise. Refer to the knowledge base when available.",
      model: "gpt-4-turbo-preview",
      tools: [{ type: "retrieval" }],
      created_at: Date.now() - 30 * 24 * 60 * 60 * 1000,
      metadata: { department: "support", version: "1.0" },
    },
    {
      id: "asst_def456",
      name: "Product Recommendations Agent",
      description: "Recommends products based on customer preferences",
      instructions:
        "You are a product recommendation agent. Suggest relevant products based on customer preferences and purchase history.",
      model: "gpt-4-turbo-preview",
      tools: [{ type: "retrieval" }, { type: "function" }],
      created_at: Date.now() - 15 * 24 * 60 * 60 * 1000,
      metadata: { department: "sales", version: "1.2" },
    },
    {
      id: "asst_ghi789",
      name: "Content Creation Assistant",
      description: "Helps create marketing content and product descriptions",
      instructions:
        "You are a creative content assistant. Help create engaging marketing content and product descriptions.",
      model: "gpt-4-turbo-preview",
      tools: [{ type: "retrieval" }],
      created_at: Date.now() - 7 * 24 * 60 * 60 * 1000,
      metadata: { department: "marketing", version: "1.0" },
    },
    {
      id: "asst_jkl012",
      name: "Data Analysis Assistant",
      description: "Helps analyze business data and generate insights",
      instructions:
        "You are a data analysis assistant. Help analyze business data and provide actionable insights.",
      model: "gpt-3.5-turbo",
      tools: [{ type: "code_interpreter" }, { type: "retrieval" }],
      created_at: Date.now() - 45 * 24 * 60 * 60 * 1000,
      metadata: { department: "analytics", version: "2.1" },
    },
    {
      id: "asst_mno345",
      name: "Onboarding Guide",
      description: "Assists new merchants with setting up their stores",
      instructions:
        "You are an onboarding assistant. Guide new merchants through the process of setting up their Shopify stores.",
      model: "gpt-4-turbo-preview",
      tools: [{ type: "retrieval" }],
      created_at: Date.now() - 60 * 24 * 60 * 60 * 1000,
      metadata: { department: "merchant_success", version: "1.5" },
    },
  ];
};

export const getMockThreadMessages = (): ThreadMessage[] => {
  return [
    {
      id: "msg_abc123",
      thread_id: "thread_123",
      role: "user",
      content: [
        {
          type: "text",
          text: {
            value:
              "How can I set up automated email marketing for my Shopify store?",
            annotations: [],
          },
        },
      ],
      created_at: Date.now() - 60 * 60 * 1000,
    },
    {
      id: "msg_def456",
      thread_id: "thread_123",
      role: "assistant",
      content: [
        {
          type: "text",
          text: {
            value:
              "Setting up automated email marketing for your Shopify store involves a few key steps:\n\n1. Choose an email marketing provider that integrates with Shopify. Popular options include Klaviyo, Mailchimp, and Shopify Email.\n\n2. Install the app for your chosen provider from the Shopify App Store.\n\n3. Connect your store to the email platform by following the integration steps.\n\n4. Set up your email templates for different automation types:\n   - Welcome series for new subscribers\n   - Abandoned cart recovery\n   - Post-purchase follow-ups\n   - Win-back campaigns for inactive customers\n\n5. Define your automation triggers and timing.\n\n6. Test your automated emails before making them live.\n\nWould you like more specific guidance on any of these steps?",
            annotations: [],
          },
        },
      ],
      created_at: Date.now() - 59 * 60 * 1000,
    },
    {
      id: "msg_ghi789",
      thread_id: "thread_123",
      role: "user",
      content: [
        {
          type: "text",
          text: {
            value:
              "Yes, I'd like to know more about setting up abandoned cart recovery emails specifically.",
            annotations: [],
          },
        },
      ],
      created_at: Date.now() - 58 * 60 * 1000,
    },
    {
      id: "msg_jkl012",
      thread_id: "thread_123",
      role: "assistant",
      content: [
        {
          type: "text",
          text: {
            value:
              "# Setting Up Abandoned Cart Recovery Emails\n\nAbandoned cart recovery emails are highly effective for recovering potentially lost sales. Here's how to set them up:\n\n## 1. Timing Strategy\n\nCreate a sequence of 2-3 emails:\n- First email: Send 1-2 hours after cart abandonment\n- Second email: Send 24 hours after abandonment\n- Third email (optional): Send 48-72 hours after abandonment with a special offer\n\n## 2. Content Best Practices\n\n- **First Email**: Friendly reminder with cart contents and prominent checkout button\n- **Second Email**: More persuasive with product benefits and possibly social proof\n- **Third Email**: Create urgency with a limited-time discount or free shipping offer\n\n## 3. Technical Setup in Klaviyo (as an example)\n\n1. Go to 'Flows' in your Klaviyo dashboard\n2. Create a new flow and select 'Abandoned Cart' as the trigger\n3. Set up your email sequence with appropriate delays\n4. Design each email with your branding and messaging\n5. Add dynamic content blocks to show the abandoned products\n6. Include clear CTAs to recover the cart\n7. Enable the flow when ready\n\n## 4. Testing and Optimization\n\n- Send test emails to yourself\n- Monitor open rates, click rates, and recovery rates\n- A/B test subject lines and offers\n- Optimize timing based on results\n\nWould you like me to provide sample subject lines and email copy for your abandoned cart emails?",
            annotations: [],
          },
        },
      ],
      created_at: Date.now() - 57 * 60 * 1000,
    },
  ];
};

export const getMockFineTuningJobs = (): FineTuningJob[] => {
  return [
    {
      id: "ftjob_abc123",
      model: "gpt-3.5-turbo",
      created_at: Date.now() - 30 * 24 * 60 * 60 * 1000,
      finished_at: Date.now() - 28 * 24 * 60 * 60 * 1000,
      fine_tuned_model: "ft:gpt-3.5-turbo:org-123:custom-support-model:789",
      organization_id: "org-123",
      status: "succeeded",
      training_file: "file-abc123",
    },
    {
      id: "ftjob_def456",
      model: "gpt-3.5-turbo",
      created_at: Date.now() - 15 * 24 * 60 * 60 * 1000,
      finished_at: Date.now() - 14 * 24 * 60 * 60 * 1000,
      fine_tuned_model: "ft:gpt-3.5-turbo:org-123:product-classifier:456",
      organization_id: "org-123",
      status: "succeeded",
      training_file: "file-def456",
      validation_file: "file-val456",
    },
    {
      id: "ftjob_ghi789",
      model: "gpt-3.5-turbo",
      created_at: Date.now() - 5 * 24 * 60 * 60 * 1000,
      organization_id: "org-123",
      status: "running",
      training_file: "file-ghi789",
      validation_file: "file-val789",
    },
    {
      id: "ftjob_jkl012",
      model: "gpt-3.5-turbo",
      created_at: Date.now() - 2 * 24 * 60 * 60 * 1000,
      organization_id: "org-123",
      status: "validating_files",
      training_file: "file-jkl012",
    },
    {
      id: "ftjob_mno345",
      model: "gpt-3.5-turbo",
      created_at: Date.now() - 45 * 24 * 60 * 60 * 1000,
      finished_at: Date.now() - 44 * 24 * 60 * 60 * 1000,
      organization_id: "org-123",
      status: "failed",
      training_file: "file-mno345",
    },
  ];
};

export const getMockUsageMetrics = (): UsageMetrics => {
  return {
    total_tokens: 8745320,
    prompt_tokens: 2150430,
    completion_tokens: 6594890,
    total_cost: 132.56,
    period: "Last 30 days",
    model_usage: [
      {
        model: "gpt-4-turbo-preview",
        tokens: 3245670,
        cost: 97.37,
      },
      {
        model: "gpt-3.5-turbo",
        tokens: 5450230,
        cost: 32.7,
      },
      {
        model: "text-embedding-ada-002",
        tokens: 49420,
        cost: 2.49,
      },
    ],
  };
};

export const getMockModels = (): ModelInfo[] => {
  return [
    {
      id: "gpt-4-turbo-preview",
      created: 1699380352,
      owned_by: "openai",
    },
    {
      id: "gpt-4-vision-preview",
      created: 1698790013,
      owned_by: "openai",
    },
    {
      id: "gpt-4",
      created: 1687882411,
      owned_by: "openai",
    },
    {
      id: "gpt-3.5-turbo",
      created: 1677610602,
      owned_by: "openai",
    },
    {
      id: "gpt-3.5-turbo-16k",
      created: 1683758102,
      owned_by: "openai",
    },
    {
      id: "text-embedding-ada-002",
      created: 1671217299,
      owned_by: "openai",
    },
    {
      id: "ft:gpt-3.5-turbo:org-123:custom-support-model:789",
      created: 1711080521,
      owned_by: "organization-123",
    },
    {
      id: "ft:gpt-3.5-turbo:org-123:product-classifier:456",
      created: 1711254263,
      owned_by: "organization-123",
    },
  ];
};
