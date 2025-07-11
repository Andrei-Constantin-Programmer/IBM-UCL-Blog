+++
date = '2025-07-11'
draft = true
title = 'LLM Orchestration and System Readiness'
tags =  ["AI", "LLM", "SonarQube", "Refactoring", "Agentic AI", "WatsonX", "Ollama", "vLLM", "UCL", "IBM"]
+++

<a href="#tldr" class="btn">Jump to TL;DR</a>

Following last week’s groundwork in static analysis and semantic retrieval, our focus this week has shifted toward multi-model orchestration, LLM infrastructure, and preparing for our upcoming IBM showcase on the 16th.

## 1. Unified Provider Interface
To enable flexible experimentation and future-proofing, we've implemented a unified interface for interacting with multiple LLM providers.

Our abstraction currently supports **Ollama**, **vLLM**, and **WatsonX**, but, following the Open-Closed Principle, we've made sure to facilitate the addition of new ones with no friction.

This interface lays the foundation for benchmarking, adaptive routing, and graceful fallback strategies based on availability and performance of providers, with easy plug-in of AI models for each.

## 2. vLLM Integration for Local Scaling

We've begun setting up [vLLM](https://docs.vllm.ai/en/latest/) as a high-throughput, low-latency local model provider, as an alternative to Ollama.

By running it on specialised hardware, we gain the benefits of faster inference and more efficient memory use, which is crucial in scaling for real-world scenarios.

vLLM now acts as a drop-in alternative to Ollama, helping us compare local model performance under different configurations.

## 3. Preparing for the IBM presentation

With the system architecture stabilising (see [our Agentic Workflow post]({{< relref "agentic-workflow/index.md" >}})), we've started preparing for our upcoming presentation to IBM next Wednesday (July 16th).

This involved refining our workflows, scripting sample runs, and ensuring every component - especially our Scanner and Strategist agents - works seamlessly across models.

## TL;DR

This week we've focused on orchestration, flexibility, and preparing for next week's presentation:
- **Unified LLM Interface** to switch between Ollama, WatsonX, and vLLM without modifying core agent logic.
- **vLLM Integration Underway** to enable high-performance inference running on dedicated hardware.
- **IBM Presentation Preparations** are in full swing, as we polish our end-to-end flows and solidify our system.