"use client";

import React from "react";
import { ProductPageLayout } from "./ProductPageLayout";
import { FileSearch2, Zap, Shield, TrendingUp, FileText, Search, Settings, Bell, Database, Layers } from "lucide-react";

export function AiDocumentProcessing() {
  return (
    <ProductPageLayout
      title="AI Document Processing"
      subtitle="Automated Document Intelligence Platform"
      heroIcon={FileSearch2}
      heroDescription="A ready-made platform that reads, extracts, classifies, and routes data from invoices, contracts, forms, and reports — replacing manual document handling with accurate AI automation."
      overviewTitle="Eliminate Manual Document Work with AI-Powered Intelligence"
      overviewDescription="Every business handles a constant flood of documents — invoices, purchase orders, contracts, KYC forms, medical records, and reports. Processing these manually is slow, error-prone, and expensive. Our AI Document Processing platform uses a combination of OCR, computer vision, and large language models to automatically read any document format, extract structured data, validate information, and push it into your downstream systems — with human-in-the-loop review for exceptions."
      overviewHighlights={[
        "Intelligent OCR that handles scanned PDFs, photographed documents, and handwritten forms",
        "AI field extraction for invoices (vendor, amount, line items, tax), contracts, and KYC documents",
        "Document classification — automatically route different document types to the right workflow",
        "Validation rules engine to flag missing fields, mismatches, and outliers for human review",
        "Audit trail with extracted data, confidence scores, and reviewer actions for every document"
      ]}
      benefitsTitle="Why Choose Our Document Processing Platform?"
      benefitsDescription="Automate your most paper-heavy processes and redirect your team's time to higher-value work."
      benefits={[
        {
          title: "10x Faster Processing",
          description: "Documents processed in seconds instead of minutes — handle hundreds of invoices or forms in the time it took to do one manually.",
          icon: Zap
        },
        {
          title: "Dramatic Error Reduction",
          description: "AI extraction with validation rules catches mismatches and missing fields before data reaches your downstream systems.",
          icon: Shield
        },
        {
          title: "Seamless System Integration",
          description: "Extracted data auto-populates your ERP, CRM, accounting software, or database — no copy-paste, no re-keying.",
          icon: TrendingUp
        }
      ]}
      featuresTitle="Platform Capabilities"
      featuresDescription="End-to-end document intelligence from ingestion to system integration."
      features={[
        {
          title: "Multi-Format Document Ingestion",
          description: "Upload via drag-and-drop, email attachment, API, or folder watch. Accepts PDF, JPEG, PNG, TIFF, and DOCX formats.",
          icon: FileText
        },
        {
          title: "AI Field Extraction",
          description: "Extract vendor names, dates, amounts, line items, signatures, and custom fields with high confidence using LLM + OCR fusion.",
          icon: Search
        },
        {
          title: "Document Classification",
          description: "Automatically identify document type — invoice, PO, contract, KYC, medical record — and route it to the correct workflow.",
          icon: Layers
        },
        {
          title: "Validation & Exception Handling",
          description: "Configurable rules flag documents with low confidence, missing fields, or data mismatches for human review before processing.",
          icon: Settings
        },
        {
          title: "Alert & Notification System",
          description: "Notify reviewers via email or Slack when documents require attention, approvals are pending, or SLAs are at risk.",
          icon: Bell
        },
        {
          title: "Structured Data Export",
          description: "Push extracted data to your ERP, accounting software, or database via REST API, webhooks, or direct DB write.",
          icon: Database
        }
      ]}
      useCasesTitle="Platform Use Cases"
      useCasesDescription="Our AI Document Processing platform is deployed across industries that deal with high volumes of structured and unstructured documents."
      useCases={[
        {
          title: "Accounts Payable Automation",
          description: "Process vendor invoices automatically — extract line items, match to POs, and push approved invoices to accounting software."
        },
        {
          title: "KYC & Onboarding",
          description: "Extract and verify customer identity from Aadhaar, PAN, passports, and utility bills to accelerate onboarding compliance workflows."
        },
        {
          title: "Contract Management",
          description: "Parse contracts for key clauses, dates, parties, and obligations — building a searchable contract repository with AI-extracted metadata."
        }
      ]}
      industriesTitle="Industries Served"
      industries={[
        "Banking & Finance",
        "Healthcare & Insurance",
        "Legal & Compliance",
        "Logistics & Supply Chain",
        "Real Estate",
        "Government & Public Sector",
        "Manufacturing",
        "E-Commerce & Retail"
      ]}
      technologiesTitle="Platform Tech Stack"
      technologies={[
        { name: "Python (FastAPI)" },
        { name: "AWS Textract / Google Document AI" },
        { name: "OpenAI / Claude for Extraction" },
        { name: "PostgreSQL" },
        { name: "React & Next.js Admin" },
        { name: "AWS S3 & Lambda" }
      ]}
      faqs={[
        {
          question: "How accurate is the AI extraction?",
          answer: "For structured documents like invoices and standard forms, we typically achieve 92–98% field-level accuracy. For complex or unstructured documents, we implement a human-in-the-loop review queue for low-confidence extractions to maintain data quality."
        },
        {
          question: "Can it handle handwritten documents?",
          answer: "Yes. We use a combination of specialized OCR models trained for handwriting recognition. Accuracy on handwritten documents is typically 80–90%, depending on handwriting legibility. These are always routed to the review queue."
        },
        {
          question: "How does it integrate with our accounting or ERP software?",
          answer: "We provide REST API and webhook integrations. We have pre-built connectors for Tally, QuickBooks, SAP, Zoho Books, and other major accounting platforms. Custom integrations can be built to match your specific system."
        }
      ]}
      ctaTitle="Automate Your Document Workflows with AI"
      ctaDescription="Stop manually keying in data from documents. Launch a production-ready AI document processing platform customized for your industry."
      theme="ai"
    />
  );
}
