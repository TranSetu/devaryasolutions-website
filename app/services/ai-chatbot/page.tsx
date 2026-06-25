import { AiChatbot } from "@/components/services/AiChatbot";

export const metadata = {
  title: "AI Chatbot Development | Conversational AI Solutions",
  description:
    "Build intelligent AI chatbots powered by GPT, Claude, and NLP for your website, app, or WhatsApp. Devarya Solutions delivers custom AI chatbot development with live agent handoff and multi-channel deployment.",
  alternates: { canonical: "https://devaryasolutions.com/services/ai-chatbot" },
};

export default function Page() {
  return <AiChatbot />;
}
