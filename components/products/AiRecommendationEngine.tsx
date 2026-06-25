"use client";

import React from "react";
import { ProductPageLayout } from "./ProductPageLayout";
import { Lightbulb, TrendingUp, Zap, Users, BarChart, Settings, RefreshCw, Star, Layers, Bell } from "lucide-react";

export function AiRecommendationEngine() {
  return (
    <ProductPageLayout
      title="AI Recommendation Engine"
      subtitle="Personalized Product & Content Discovery"
      heroIcon={Lightbulb}
      heroDescription="A ready-made AI recommendation platform that personalizes product suggestions, content feeds, and search results for every user — increasing engagement, conversions, and average order value."
      overviewTitle="Deliver Amazon-Level Personalization to Your Platform"
      overviewDescription="Recommendation engines are among the highest-ROI investments in digital products. They drive 35% of Amazon's revenue and 80% of Netflix viewing. Our AI Recommendation Engine is a production-ready platform that plugs into your existing e-commerce store, content platform, or app to deliver highly personalized suggestions — powered by collaborative filtering, content-based matching, and real-time behavioral signals. We white-label, configure, and deploy the full stack, including an A/B testing layer and an admin performance dashboard."
      overviewHighlights={[
        "Collaborative filtering — surfaces items popular with users who share similar tastes",
        "Content-based recommendations using product attributes, tags, and semantic embeddings",
        "Real-time behavioral signals — responds to clicks, views, and purchases within seconds",
        "Cold-start handling for new users with rule-based fallbacks and trending items",
        "A/B testing framework to measure recommendation impact on CTR and conversions"
      ]}
      benefitsTitle="Why Add AI Recommendations to Your Platform?"
      benefitsDescription="Personalization is the single most proven lever for lifting conversion rates and user retention."
      benefits={[
        {
          title: "Higher Conversion Rates",
          description: "Showing users products or content they are statistically likely to want increases click-through and purchase rates significantly.",
          icon: TrendingUp
        },
        {
          title: "Increased Average Order Value",
          description: "Cross-sell and upsell recommendations placed at checkout and on product pages consistently lift basket sizes.",
          icon: Zap
        },
        {
          title: "Stronger User Retention",
          description: "Personalized content feeds keep users engaged longer and returning more frequently — reducing churn on subscription platforms.",
          icon: Users
        }
      ]}
      featuresTitle="Platform Features"
      featuresDescription="A complete recommendation infrastructure with behavioral tracking, multiple algorithms, and performance analytics."
      features={[
        {
          title: "Multi-Algorithm Engine",
          description: "Runs collaborative filtering, content-based, and hybrid models simultaneously — automatically blending results for best accuracy.",
          icon: Lightbulb
        },
        {
          title: "Real-Time Behavioral Tracking",
          description: "Captures clicks, views, add-to-cart, and purchase events via a lightweight JavaScript SDK and updates recommendations instantly.",
          icon: RefreshCw
        },
        {
          title: "Recommendation Placements",
          description: "Configurable widgets for homepage, product detail page, search results, cart page, email campaigns, and push notifications.",
          icon: Layers
        },
        {
          title: "A/B Testing Framework",
          description: "Run controlled experiments comparing recommendation algorithms or placement strategies with statistical significance reporting.",
          icon: BarChart
        },
        {
          title: "Admin Configuration Panel",
          description: "Tune recommendation rules, boost or demote categories, set diversity controls, and manage blacklisted items from the dashboard.",
          icon: Settings
        },
        {
          title: "Performance Analytics",
          description: "Track CTR, conversion lift, revenue attribution, and user coverage for every recommendation placement and algorithm variant.",
          icon: Star
        }
      ]}
      useCasesTitle="Platform Use Cases"
      useCasesDescription="Our AI Recommendation Engine is used by platforms where personalization directly drives revenue, retention, and engagement."
      useCases={[
        {
          title: "E-Commerce Product Recommendations",
          description: "\"Customers who bought this also bought\" and \"Recommended for you\" sections that drive cross-sell and upsell revenue at scale."
        },
        {
          title: "Content & Media Platforms",
          description: "Personalized article, video, or course feeds that surface the most relevant content for each user based on viewing and interaction history."
        },
        {
          title: "EdTech & E-Learning",
          description: "Recommend next courses, learning paths, and resources based on a learner's progress, interests, and skill gaps."
        }
      ]}
      industriesTitle="Industries Served"
      industries={[
        "E-Commerce & Retail",
        "EdTech & E-Learning",
        "OTT & Media Streaming",
        "News & Publishing",
        "Food Delivery & Grocery",
        "Travel & Hospitality",
        "SaaS & Marketplaces",
        "Gaming & Entertainment"
      ]}
      technologiesTitle="Platform Tech Stack"
      technologies={[
        { name: "Python (FastAPI)" },
        { name: "Collaborative Filtering (Surprise / LightFM)" },
        { name: "OpenAI Embeddings (Semantic)" },
        { name: "Redis (Real-Time Events)" },
        { name: "PostgreSQL" },
        { name: "React & Next.js Admin" }
      ]}
      faqs={[
        {
          question: "How much data do we need for recommendations to work?",
          answer: "Collaborative filtering typically needs at least 1,000 users and 10,000 interactions to generate meaningful personalized recommendations. For newer platforms with less data, we use content-based and trending-item fallbacks that work immediately without behavioral history."
        },
        {
          question: "How does it integrate with our existing store or app?",
          answer: "We provide a JavaScript SDK for behavioral event tracking and a REST API for fetching recommendations. Integration is typically a few hours of frontend work. We have pre-built plugins for Shopify, WooCommerce, and custom Next.js or React storefronts."
        },
        {
          question: "Can we control what gets recommended?",
          answer: "Yes. The admin panel lets you boost specific categories or brands, exclude out-of-stock items, apply diversity rules to prevent repetitive recommendations, and set business rules that override algorithmic output when needed."
        }
      ]}
      ctaTitle="Add Personalized AI Recommendations to Your Platform"
      ctaDescription="Lift your conversion rates and user engagement with a production-ready recommendation engine. Contact us for a live demo tailored to your industry."
      theme="ai"
    />
  );
}
