"use client";

import React from "react";
import { ServicePageLayout } from "./ServicePageLayout";
import { Wand2, Clock, BarChart, TrendingUp, RefreshCw, Bell, Settings, Layers, Shield } from "lucide-react";

export function AiAutomation() {
  return (
    <ServicePageLayout
      title="AI Process Automation"
      subtitle="Intelligent Workflow Automation"
      heroIcon={Wand2}
      heroDescription="Eliminate repetitive manual tasks and accelerate business operations with AI-powered automation that learns from your data and adapts to your workflows."
      overviewTitle="Replace Manual Work with Intelligent Automation"
      overviewDescription="Most businesses still rely on manual effort for data entry, document review, report generation, and routine decision-making. AI process automation replaces these bottlenecks with intelligent pipelines that read, reason, and act on information — at scale and without human error. Devarya Solutions designs and builds custom AI automation solutions that connect your existing tools, extract insights from unstructured data, and trigger precise actions across your business systems."
      overviewHighlights={[
        "End-to-end automation of data entry, classification, and routing workflows",
        "AI agents that read emails, extract information, and update your CRM automatically",
        "Document intelligence — parse invoices, contracts, and forms with high accuracy",
        "Scheduled and event-triggered pipelines with full audit logging and error recovery",
        "Native integrations with Zoho, Salesforce, Notion, Slack, Google Workspace, and more"
      ]}
      whyChooseTitle="Why Automate with Devarya Solutions?"
      whyChooseDescription="We design automation solutions that fit into your existing workflows — not the other way around."
      whyChooseItems={[
        {
          title: "Fast Time to Value",
          description: "We identify and automate your highest-impact, highest-volume manual tasks first so you see measurable time savings within weeks.",
          icon: Clock
        },
        {
          title: "Measurable ROI",
          description: "Every automation is tracked with before/after metrics — hours saved, error rates, and throughput improvements visible in dashboards.",
          icon: BarChart
        },
        {
          title: "Resilient Pipelines",
          description: "We build retry logic, error alerts, and fallback paths so your automated workflows keep running even when external APIs fail.",
          icon: Shield
        }
      ]}
      featuresTitle="AI Automation Capabilities We Deliver"
      featuresDescription="From simple task schedulers to multi-step intelligent agents — we build automation that scales with your business."
      features={[
        {
          title: "Intelligent Data Extraction",
          description: "Extract structured data from PDFs, emails, images, and web pages using AI — no manual copy-paste required.",
          icon: Layers
        },
        {
          title: "Workflow Orchestration",
          description: "Chain multiple automation steps — trigger on event, process data, call APIs, update records, send notifications — in sequence.",
          icon: RefreshCw
        },
        {
          title: "Smart Notifications & Alerts",
          description: "Configure AI to monitor streams of data and send contextual alerts to Slack, email, or SMS when conditions are met.",
          icon: Bell
        },
        {
          title: "CRM & ERP Sync",
          description: "Auto-populate Salesforce, Zoho, or HubSpot records from inbound emails, forms, and documents with zero manual entry.",
          icon: Settings
        },
        {
          title: "Report Generation",
          description: "Automatically compile weekly, monthly, or ad-hoc reports from multiple data sources and distribute them to stakeholders.",
          icon: TrendingUp
        },
        {
          title: "Approval Workflow Automation",
          description: "Route leave requests, purchase orders, and client approvals through AI-assisted workflows with intelligent prioritization.",
          icon: Wand2
        }
      ]}
      processTitle="How We Build Your Automation"
      processDescription="A proven delivery model that moves from process audit to live automation in structured sprints."
      processSteps={[
        {
          title: "Process Audit & Prioritization",
          description: "We map your current manual workflows, estimate time costs, and rank automation candidates by effort-vs-impact."
        },
        {
          title: "Architecture Design",
          description: "Designing the automation pipeline — triggers, data transformations, API integrations, and exception handling paths."
        },
        {
          title: "AI Model & Tool Selection",
          description: "Choosing the right AI components — LLMs for reasoning, OCR for documents, classification models for routing — per task."
        },
        {
          title: "Pipeline Development & Integration",
          description: "Building and connecting the automation to your existing tools, databases, and notification channels."
        },
        {
          title: "Monitoring & Handover",
          description: "Setting up dashboards, error alerts, and audit logs, then training your team to manage and extend the automation."
        }
      ]}
      technologiesTitle="Technologies We Use"
      technologies={[
        { name: "Python (LangChain / Celery)" },
        { name: "OpenAI & Claude APIs" },
        { name: "Zapier / Make (n8n)" },
        { name: "OCR (Tesseract / AWS Textract)" },
        { name: "REST & Webhook Integrations" },
        { name: "PostgreSQL & Redis" }
      ]}
      faqs={[
        {
          question: "What kinds of processes can be automated with AI?",
          answer: "Any process that involves reading data from documents or emails, making rule-based or judgment-based decisions, and writing results to a system is a strong automation candidate. Common examples include invoice processing, lead qualification, support ticket routing, and report generation."
        },
        {
          question: "How does AI automation differ from traditional RPA?",
          answer: "Traditional RPA follows rigid rules and breaks when interfaces change. AI automation uses language models to understand intent and extract meaning, making it resilient to format changes, unstructured inputs, and edge cases that would break rule-based systems."
        },
        {
          question: "Can you automate workflows that use our existing software?",
          answer: "Yes. We integrate with tools you already use — Salesforce, Zoho, Google Workspace, Slack, Notion, Tally, and others — via official APIs or webhooks. We work around your existing software, not replace it."
        }
      ]}
      ctaTitle="Automate Your Most Time-Consuming Business Processes"
      ctaDescription="Free your team from manual drudgery. Let's identify your top automation opportunities and build AI pipelines that run around the clock."
      theme="ai"
    />
  );
}
