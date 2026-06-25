"use client";

import React from "react";
import { ProductPageLayout } from "./ProductPageLayout";
import { BotMessageSquare, Users, Zap, TrendingUp, MessageSquare, Settings, Bell, Shield, BarChart, Globe } from "lucide-react";

export function AiChatbotPlatform() {
  return (
    <ProductPageLayout
      title="AI Chatbot Platform"
      subtitle="Ready-Made Conversational AI Suite"
      heroIcon={BotMessageSquare}
      heroDescription="A production-ready AI chatbot platform with an admin dashboard, multi-channel deployment, live agent handoff, and analytics — white-labeled and ready to launch under your brand."
      overviewTitle="Launch a Branded AI Chatbot Without Building from Scratch"
      overviewDescription="Our AI Chatbot Platform is a complete, battle-tested SaaS-ready product that gives businesses an intelligent conversational layer without months of development. The platform includes a knowledge base manager, multi-channel widget (web, WhatsApp, mobile), live agent escalation module, and a real-time analytics dashboard — all white-labeled with your brand colors and domain. We deliver the full source code and deploy it on your cloud infrastructure."
      overviewHighlights={[
        "Pre-built web chatbot widget — embed on any site in minutes with a script tag",
        "WhatsApp Business API integration out of the box",
        "Knowledge base CMS for non-technical teams to update Q&A content",
        "Live agent handoff with a built-in support inbox and conversation assignment",
        "Multi-tenant architecture supports multiple bots for different products or regions"
      ]}
      benefitsTitle="Why Choose Our AI Chatbot Platform?"
      benefitsDescription="Skip months of development and launch a fully branded AI chatbot faster than any custom build."
      benefits={[
        {
          title: "Faster Time to Market",
          description: "Go live in 2–4 weeks instead of 3–6 months. Our platform is pre-built; we configure, brand, and deploy it for you.",
          icon: Zap
        },
        {
          title: "Lower Total Cost",
          description: "A ready-made platform eliminates the cost of building chatbot infrastructure, NLP pipelines, and admin tooling from scratch.",
          icon: TrendingUp
        },
        {
          title: "Non-Technical Control",
          description: "Your team can update responses, add FAQs, and review conversations without touching any code through the admin dashboard.",
          icon: Users
        }
      ]}
      featuresTitle="Platform Features"
      featuresDescription="Every module your team needs to deploy, manage, and improve an AI chatbot at scale."
      features={[
        {
          title: "AI-Powered Chat Engine",
          description: "LLM-backed responses with RAG retrieval from your knowledge base — accurate, contextual, and grounded in your data.",
          icon: BotMessageSquare
        },
        {
          title: "Admin Dashboard",
          description: "Manage knowledge base content, review conversations, configure escalation rules, and monitor performance from one panel.",
          icon: Settings
        },
        {
          title: "Live Agent Inbox",
          description: "Agents receive escalated chats with full conversation history, customer context, and suggested replies powered by AI.",
          icon: MessageSquare
        },
        {
          title: "Multi-Channel Widget",
          description: "One platform, multiple touchpoints — web widget, WhatsApp, and mobile SDK all powered by the same knowledge base.",
          icon: Globe
        },
        {
          title: "Smart Notifications",
          description: "Alert agents via email or Slack when conversations are escalated, SLAs are breached, or sentiment turns negative.",
          icon: Bell
        },
        {
          title: "Analytics & Reporting",
          description: "Track resolution rate, response accuracy, handoff frequency, top intents, and user satisfaction scores over time.",
          icon: BarChart
        }
      ]}
      useCasesTitle="Who Uses This Platform"
      useCasesDescription="Our AI Chatbot Platform serves businesses across industries that need intelligent, scalable customer communication."
      useCases={[
        {
          title: "E-Commerce Stores",
          description: "Answer order status queries, product questions, and return requests automatically — reducing support ticket volume by 60%+."
        },
        {
          title: "SaaS Companies",
          description: "Provide instant onboarding help, feature guidance, and billing support to users without scaling the support team linearly."
        },
        {
          title: "Healthcare & Education",
          description: "Handle appointment queries, admission FAQs, and policy information with compliant, accurate AI responses around the clock."
        }
      ]}
      industriesTitle="Industries Served"
      industries={[
        "E-Commerce & Retail",
        "SaaS & Software",
        "Healthcare",
        "Education & EdTech",
        "Banking & Finance",
        "Real Estate",
        "Travel & Hospitality",
        "Logistics & Delivery"
      ]}
      technologiesTitle="Platform Tech Stack"
      technologies={[
        { name: "Next.js & React" },
        { name: "Node.js (Express)" },
        { name: "OpenAI / Claude APIs" },
        { name: "PostgreSQL & pgvector" },
        { name: "WhatsApp Business API" },
        { name: "AWS / GCP Deployment" }
      ]}
      faqs={[
        {
          question: "Do we get the source code?",
          answer: "Yes. We deliver the full source code of the platform. You own it completely and can extend it with your in-house team or with us."
        },
        {
          question: "Can we connect it to our existing CRM or helpdesk?",
          answer: "Yes. The platform exposes webhook endpoints and we can integrate it with Freshdesk, Zendesk, Zoho Desk, HubSpot, or any CRM with an API."
        },
        {
          question: "How do we update the chatbot's knowledge base?",
          answer: "Through the built-in admin dashboard. Your team can add, edit, or remove FAQs, upload documents, and organize content by topic — no code needed."
        }
      ]}
      ctaTitle="Launch Your AI Chatbot Platform in Weeks, Not Months"
      ctaDescription="Get a fully branded, production-ready AI chatbot with admin controls, multi-channel support, and analytics. Contact us for a live demo."
      theme="ai"
    />
  );
}
