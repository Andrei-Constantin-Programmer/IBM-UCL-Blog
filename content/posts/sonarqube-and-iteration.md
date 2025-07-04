+++
date = '2025-07-04'
draft = false
title = 'Sonarqube and Iteration'
tags = ["AI", "LLM", "SonarQube", "Refactoring", "Agentic AI", "WatsonX", "Embeddings", "Ollama", "Vector DB", "ChromaDB", "UCL", "IBM"]
+++

<a href="#tldr" class="btn">Jump to TL;DR</a>

With the foundation in place from previous weeks, our focus has now shifted toward rapid iteration and structural refinement. We've transitioned away from early experiments in Jupyter Notebooks (used last week during our move from LangFlow to LangGraph) to a more robust and modular Python architecture. This will give us finer control over our agent workflows and ease integration across components.

## 1. SonarQube - Automated Static Analysis

We've built a fully scripted toolchain for running SonarQube scans on repositories, including intelligent cloning logic that ensures each project is up to date. This scanner will soon feed directly into our *Pattern Scanner Agent*, providing high-quality static analysis as part of the agent's reasoning process.

This gives us a **repeatable and deterministic scanning pipeline**, simplifies the Scanner's responsibilities, and reduces both cost and compute waste by focusing remediation where it matters.

## 2. Anti-Pattern Trove as a Vector Database

Our previously static anti-pattern knowledge base has now been embedded and indexed using **ChromaDB**, turning it into a semantic retrieval engine. Instead of relying on exact matches or rigid rules, our agents can now query advice by similarity, structure, and intent.

Each entry is a structured knowledge unit, and together they form the basis for a **Retrieval-Augmented Generation (RAG)** workflow. This empowers both our *Scanner* and *Strategist* agents to provide more nuanced, contextualised suggestions and justifications.

The Trove remains a work-in-progress; its final shape and structure will likely evolve as we test with more scan results.

## 3. WatsonX.ai and Ollama Prototypes

We've begun benchmarking two distinct LLM-backed approaches for agent execution:

- **WatsonX.ai**: IBM's own hosted solution, offering robust capabilities via REST APIs and integration with the broader IBM cloud ecosystem.
- **Ollama**: A flexible, locally hosted alternative that grants us full control over models and compute, at the cost of maintaining our own infrastructure.

A basic prototype is already in place for both (Scanner + Strategist), and we plan to expand on both and figure out which is optimal for us going forward.

## TL;DR

This week was all about infrastructure and modularity:

- **SonarQube Tool** now fully scripted and ready to integrate with our agent workflows.
- **Anti-pattern Trove** converted into a semantic VectorDB (ChromaDB) for smarter, context-aware retrieval.
- **WatsonX vs. Ollama** LLM prototype comparison underway (both Scanner + Strategist agents are functional).
- **Migrated from Jupyter Notebooks** to a cleaner, modular Python architecture.

Our plan now is to integrate the SonarQube tool with the workflow, expanding on both prototypes, and benchmarking real agent performance across repositories.
