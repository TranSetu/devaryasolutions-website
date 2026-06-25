"use client";

import React from "react";
import { ProductPageLayout } from "./ProductPageLayout";
import { BarChart3, TrendingUp, Zap, Users, BarChart, Bell, Download, Layers, Shield, Search } from "lucide-react";

export function AiAnalyticsDashboard() {
  return (
    <ProductPageLayout
      title="AI Analytics Dashboard"
      subtitle="Intelligent Business Intelligence Platform"
      heroIcon={BarChart3}
      heroDescription="A ready-made analytics platform that turns raw business data into AI-generated insights, predictive forecasts, and natural language summaries — no data science team required."
      overviewTitle="Make Smarter Decisions with AI-Powered Business Intelligence"
      overviewDescription="Traditional dashboards show you what happened. Our AI Analytics Dashboard tells you what it means and what to do next. Built as a white-label product, it connects to your databases, APIs, and third-party tools to aggregate data, surface anomalies, generate AI commentary, and forecast trends. From sales performance to operational KPIs, every metric is explained — not just displayed — by an AI layer that converts numbers into plain-language insights your entire team can act on."
      overviewHighlights={[
        "Natural language AI summaries for every chart — understand trends without SQL or spreadsheets",
        "Anomaly detection alerts that flag unusual data patterns before they become problems",
        "Predictive forecasting for revenue, churn, inventory, and operational metrics",
        "Drag-and-drop report builder with custom date ranges, filters, and breakdowns",
        "Multi-source data connectors — databases, REST APIs, Google Sheets, and SaaS tools"
      ]}
      benefitsTitle="Why Choose Our AI Analytics Platform?"
      benefitsDescription="Turn your data team's backlog into self-service insights that every stakeholder can consume independently."
      benefits={[
        {
          title: "Faster Business Decisions",
          description: "AI-generated summaries and forecasts reduce the time from data to decision — without waiting for analyst reports.",
          icon: Zap
        },
        {
          title: "Self-Service Analytics",
          description: "Non-technical teams can query data in plain English, build custom reports, and download charts — no SQL required.",
          icon: Users
        },
        {
          title: "Proactive Anomaly Detection",
          description: "The platform monitors your metrics 24/7 and alerts you when something unusual happens — before users or clients notice.",
          icon: TrendingUp
        }
      ]}
      featuresTitle="Platform Features"
      featuresDescription="A complete analytics toolkit with AI woven through every layer — from ingestion to insight delivery."
      features={[
        {
          title: "AI-Generated Summaries",
          description: "Every dashboard section includes an AI commentary block that explains trends, comparisons, and anomalies in plain English.",
          icon: BarChart3
        },
        {
          title: "Predictive Forecasting",
          description: "ML models trained on your historical data generate rolling forecasts for revenue, demand, churn, and custom KPIs.",
          icon: TrendingUp
        },
        {
          title: "Natural Language Query",
          description: "Type a question in plain English — \"What were our top-performing products last quarter?\" — and get an instant chart and answer.",
          icon: Search
        },
        {
          title: "Custom Report Builder",
          description: "Drag-and-drop widgets to build branded reports with your KPIs, filtered by date, region, team, or product line.",
          icon: Layers
        },
        {
          title: "Automated Report Delivery",
          description: "Schedule daily, weekly, or monthly reports to be emailed to stakeholders as PDFs or embedded dashboard links.",
          icon: Bell
        },
        {
          title: "Data Export & APIs",
          description: "Export reports as CSV, Excel, or PDF. Expose dashboard data via REST API for integration with external tools.",
          icon: Download
        }
      ]}
      useCasesTitle="Platform Use Cases"
      useCasesDescription="Our AI Analytics Dashboard is purpose-built for data-driven teams across a wide range of industries and business models."
      useCases={[
        {
          title: "E-Commerce & Retail",
          description: "Track sales velocity, cart abandonment, product margins, and customer cohorts with AI commentary on every metric shift."
        },
        {
          title: "SaaS & Subscription Business",
          description: "Monitor MRR, ARR, churn rate, trial conversion, and feature adoption with predictive alerts on revenue risk."
        },
        {
          title: "Operations & Logistics",
          description: "Analyze delivery performance, fleet utilization, order fulfillment rates, and SLA adherence across regions and teams."
        }
      ]}
      industriesTitle="Industries Served"
      industries={[
        "E-Commerce & Retail",
        "SaaS & Software",
        "Logistics & Supply Chain",
        "Healthcare & Diagnostics",
        "Finance & Fintech",
        "Manufacturing",
        "EdTech & Education",
        "Real Estate"
      ]}
      technologiesTitle="Platform Tech Stack"
      technologies={[
        { name: "Next.js & React" },
        { name: "Python (FastAPI)" },
        { name: "PostgreSQL & TimescaleDB" },
        { name: "OpenAI / Claude for Summaries" },
        { name: "Recharts & D3.js" },
        { name: "AWS / GCP Deployment" }
      ]}
      faqs={[
        {
          question: "What data sources can it connect to?",
          answer: "The platform supports direct connections to PostgreSQL, MySQL, MongoDB, Google BigQuery, REST APIs, Google Sheets, and popular SaaS tools like Shopify, Stripe, and Salesforce via pre-built connectors."
        },
        {
          question: "How accurate are the AI forecasts?",
          answer: "Accuracy depends on the quality and volume of your historical data. Typically, with 6+ months of clean historical data, our forecasting models achieve 85–95% directional accuracy for revenue and demand metrics."
        },
        {
          question: "Can non-technical managers use this without training?",
          answer: "Yes. The natural language query interface, pre-built report templates, and AI summaries are designed for business users. Managers can build and share reports without any SQL or data science knowledge."
        }
      ]}
      ctaTitle="Turn Your Business Data into AI-Powered Intelligence"
      ctaDescription="Stop waiting on analyst reports. Launch a self-service analytics platform your entire team can use. Contact us for a live product demo."
      theme="ai"
    />
  );
}
