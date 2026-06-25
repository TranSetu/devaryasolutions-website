"use client";

import React from "react";
import { ServicePageLayout } from "./ServicePageLayout";
import { BrainCircuit, Globe, TrendingUp, MessageSquare, Layers, Users, Database, BarChart, Shield } from "lucide-react";

export function AiChatbot() {
  return (
    <ServicePageLayout
      title="AI Chatbot Development"
      subtitle="Conversational AI for Businesses"
      heroIcon={BrainCircuit}
      heroDescription="Build intelligent, context-aware chatbots that handle customer queries, automate support, and drive conversions — 24/7 without human intervention."
      overviewTitle="Smarter Customer Engagement with AI-Powered Chatbots"
      overviewDescription="Traditional rule-based chatbots fall short when users ask complex questions. Our AI chatbot solutions leverage large language models (LLMs) and natural language processing (NLP) to understand intent, maintain conversation context, and deliver accurate responses at scale. We build chatbots for websites, mobile apps, WhatsApp, and custom enterprise portals."
      overviewHighlights={[
        "Contextual multi-turn conversations powered by LLMs (GPT, Claude, Gemini)",
        "Custom intent recognition and named entity extraction using NLP",
        "Seamless handoff to live agents with full conversation history preserved",
        "Deep integration with CRM, ERP, ticketing, and e-commerce systems",
        "Multi-language support across English, Hindi, and regional Indian languages"
      ]}
      whyChooseTitle="Why Build Your Chatbot with Devarya Solutions?"
      whyChooseDescription="We tailor every chatbot to your business domain, vocabulary, and user expectations."
      whyChooseItems={[
        {
          title: "Domain-Specific Training",
          description: "We fine-tune and prompt-engineer models on your company's data, FAQs, and product catalog for precise, brand-accurate answers.",
          icon: BrainCircuit
        },
        {
          title: "Multi-Channel Deployment",
          description: "Deploy once, launch everywhere — web widget, mobile SDK, WhatsApp Business API, and Slack integrations from a single codebase.",
          icon: Globe
        },
        {
          title: "Continuous Improvement",
          description: "Real-time analytics surface failed conversations and low-confidence responses so the model improves with every interaction.",
          icon: TrendingUp
        }
      ]}
      featuresTitle="Core Features of Our AI Chatbots"
      featuresDescription="Every chatbot we deliver is built with the intelligence and integrations to resolve queries without human intervention."
      features={[
        {
          title: "Natural Language Understanding",
          description: "Understands user intent beyond keywords — handles typos, synonyms, and conversational phrasing with high accuracy.",
          icon: MessageSquare
        },
        {
          title: "Contextual Memory",
          description: "Maintains conversation history within a session to answer follow-up questions accurately without repeating itself.",
          icon: Layers
        },
        {
          title: "Live Agent Escalation",
          description: "Automatically routes complex queries to human agents with full chat transcript and user context pre-loaded.",
          icon: Users
        },
        {
          title: "Knowledge Base Integration",
          description: "Connects to your documentation, product FAQs, and internal wikis to provide accurate, up-to-date answers via RAG.",
          icon: Database
        },
        {
          title: "Analytics Dashboard",
          description: "Track conversation volumes, resolution rates, user drop-off points, and top intents in real time.",
          icon: BarChart
        },
        {
          title: "Security & Privacy",
          description: "End-to-end encrypted conversations with data residency controls and GDPR-compliant data handling built in.",
          icon: Shield
        }
      ]}
      processTitle="Our Chatbot Development Process"
      processDescription="A structured engagement that moves from requirements to a live, production-ready chatbot."
      processSteps={[
        {
          title: "Discovery & Use Case Mapping",
          description: "We identify top support scenarios, user personas, and business goals to scope the chatbot's capabilities precisely."
        },
        {
          title: "Knowledge Base Structuring",
          description: "Organizing your FAQs, product docs, and policies into a structured knowledge format for accurate LLM retrieval."
        },
        {
          title: "Conversation Design",
          description: "Building dialogue flows, fallback strategies, and escalation triggers with UX copy tuned to your brand voice."
        },
        {
          title: "Development & Integration",
          description: "Coding the chatbot backend, connecting your APIs, and embedding the widget into your website or mobile app."
        },
        {
          title: "Testing & Fine-Tuning",
          description: "Extensive QA across edge cases, adversarial inputs, and real user scenarios to ensure reliability before launch."
        }
      ]}
      technologiesTitle="Technologies We Use"
      technologies={[
        { name: "OpenAI GPT / Claude API" },
        { name: "LangChain & LlamaIndex" },
        { name: "Python (FastAPI)" },
        { name: "Pinecone / pgvector (RAG)" },
        { name: "React & Next.js" },
        { name: "WhatsApp Business API" }
      ]}
      faqs={[
        {
          question: "Can the chatbot answer questions about our specific products?",
          answer: "Yes. We train the chatbot on your product catalog, documentation, and FAQs using RAG (Retrieval-Augmented Generation) so responses are always grounded in your actual data, not generic LLM knowledge."
        },
        {
          question: "How long does it take to build a chatbot?",
          answer: "A standard web chatbot with FAQ handling and live agent handoff typically takes 4–6 weeks. Enterprise deployments with deep CRM integration may take 8–12 weeks depending on data complexity."
        },
        {
          question: "Will it work in languages other than English?",
          answer: "Yes. Modern LLMs support dozens of languages natively. We can configure and test your chatbot in Hindi, Tamil, Telugu, Bengali, and other regional languages for the Indian market."
        }
      ]}
      ctaTitle="Launch an AI Chatbot That Actually Helps Customers"
      ctaDescription="Stop losing leads to unanswered questions. Contact us to build a smart chatbot tuned to your business vocabulary and customer needs."
      theme="ai"
    />
  );
}
