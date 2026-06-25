"use client";

import React from "react";
import { ServicePageLayout } from "./ServicePageLayout";
import { Sparkles, Cpu, Shield, FileText, Search, Zap, Settings, BarChart, Layers } from "lucide-react";

export function GenerativeAi() {
  return (
    <ServicePageLayout
      title="Generative AI Integration"
      subtitle="LLMs & AI APIs for Your Products"
      heroIcon={Sparkles}
      heroDescription="Embed the power of GPT, Claude, and Gemini into your existing applications to automate content, accelerate workflows, and deliver intelligent user experiences."
      overviewTitle="Transform Your Product with Generative AI Capabilities"
      overviewDescription="Generative AI has moved from experiment to production-ready. We help startups and enterprises integrate large language models (LLMs) directly into websites, mobile apps, and backend systems. Whether you need AI-powered content generation, smart search, document summarization, or intelligent data extraction — we handle the full integration lifecycle from API setup and prompt engineering to cost-efficient deployment."
      overviewHighlights={[
        "Seamless integration with OpenAI GPT-4o, Anthropic Claude, and Google Gemini APIs",
        "Retrieval-Augmented Generation (RAG) for grounded, hallucination-resistant AI responses",
        "Prompt engineering and system instruction design optimized for your use case",
        "Streaming AI responses for low-latency, real-time user experiences",
        "Token management, caching, rate limiting, and cost monitoring dashboards"
      ]}
      whyChooseTitle="Why Integrate Generative AI with Devarya Solutions?"
      whyChooseDescription="We bridge the gap between cutting-edge AI capabilities and practical, production-grade product features."
      whyChooseItems={[
        {
          title: "Production-Grade Implementation",
          description: "We handle error handling, retries, fallback models, and rate limit management so your AI features never go dark.",
          icon: Cpu
        },
        {
          title: "Cost-Conscious Architecture",
          description: "We optimize prompt sizes, implement semantic caching, and choose the right model tier to keep your AI usage costs predictable.",
          icon: BarChart
        },
        {
          title: "Security-First Approach",
          description: "We apply prompt injection guards, output sanitization, and PII redaction so your AI integrations are safe for enterprise use.",
          icon: Shield
        }
      ]}
      featuresTitle="What We Build with Generative AI"
      featuresDescription="From simple API integrations to complex multi-agent pipelines — we tailor AI features to your product's core value."
      features={[
        {
          title: "AI Content Generation",
          description: "Generate product descriptions, marketing copy, emails, and reports automatically from structured data inputs.",
          icon: FileText
        },
        {
          title: "Semantic Search",
          description: "Replace keyword search with vector-powered semantic search that understands user intent and returns contextually relevant results.",
          icon: Search
        },
        {
          title: "Document Summarization",
          description: "Condense lengthy reports, contracts, and research papers into concise, actionable summaries in seconds.",
          icon: Layers
        },
        {
          title: "AI-Powered Workflows",
          description: "Automate multi-step business processes using LLM reasoning — from data classification to decision support pipelines.",
          icon: Zap
        },
        {
          title: "Custom API Pipelines",
          description: "Build function-calling pipelines that connect LLMs to your internal APIs, databases, and third-party tools.",
          icon: Settings
        },
        {
          title: "Performance Monitoring",
          description: "Track latency, token usage, success rates, and response quality across all AI-powered features in real time.",
          icon: BarChart
        }
      ]}
      processTitle="Our Generative AI Integration Lifecycle"
      processDescription="A structured approach that turns AI possibilities into reliable, measurable product features."
      processSteps={[
        {
          title: "Use Case Discovery",
          description: "We audit your existing workflows to identify where generative AI delivers the highest business value and ROI."
        },
        {
          title: "Model & Architecture Selection",
          description: "Choosing the right LLM provider, model tier, and retrieval strategy (RAG vs fine-tuning) for your specific requirements."
        },
        {
          title: "Prompt Engineering & Prototyping",
          description: "Designing and iterating on system prompts, few-shot examples, and output schemas until responses meet your quality bar."
        },
        {
          title: "Backend Integration & Testing",
          description: "Wiring the AI layer into your existing APIs, databases, and frontend with full error handling and observability."
        },
        {
          title: "Production Deployment & Monitoring",
          description: "Deploying with auto-scaling, cost alerts, and quality monitoring dashboards to keep your AI features healthy post-launch."
        }
      ]}
      technologiesTitle="Technologies & Providers"
      technologies={[
        { name: "OpenAI GPT-4o / o1" },
        { name: "Anthropic Claude 4" },
        { name: "Google Gemini" },
        { name: "LangChain / LlamaIndex" },
        { name: "Pinecone & pgvector" },
        { name: "Python & Node.js" }
      ]}
      faqs={[
        {
          question: "Which AI model is best for our use case?",
          answer: "It depends on your task. For complex reasoning and long documents, Claude or GPT-4o excels. For cost-efficient high-volume tasks, GPT-4o-mini or Gemini Flash is often better. We run evaluations during the discovery phase to recommend the right fit."
        },
        {
          question: "How do you prevent the AI from giving wrong or hallucinated answers?",
          answer: "We implement RAG (Retrieval-Augmented Generation) which grounds AI responses in your actual data sources. We also add output validation layers, confidence thresholds, and citation requirements so the model cites sources when it answers."
        },
        {
          question: "Can you integrate AI into our existing product without rebuilding it?",
          answer: "Yes. We integrate via API into your existing backend, adding AI endpoints that your frontend can call. We work with your current tech stack — Node.js, Python, PHP, or any language that supports HTTP calls."
        }
      ]}
      ctaTitle="Add Generative AI to Your Product — The Right Way"
      ctaDescription="Skip the experimentation phase. We bring production-tested AI integration expertise to make your product smarter, faster, and more valuable."
      theme="ai"
    />
  );
}
