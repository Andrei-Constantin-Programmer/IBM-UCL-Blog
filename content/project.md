+++
date = '2025-06-18'
draft = false
title = 'Project'
layout = "page"
+++

# Anti-Pattern Resolutor  
*A modular, agentic system for detecting and fixing anti-patterns in fully-tested Java code*

This MSc group project is a collaboration between UCL and IBM.

## Overview

Modernising legacy code is one of the most persistent and expensive challenges in software engineering. Rewriting from scratch is often infeasible, manual refactoring at scale is slow, error-prone, and hard to standardise. We want to build an intelligent, safe alternative.

This project aims to develop an **LLM-powered refactoring pipeline** that detects and replaces anti-patterns with **modern, idiomatic Java**, operating only on code that is **fully covered by tests**. It will use a **multi-agent architecture** to ensure each stage - detection, transformation, explanation, and validation - is precise, modular, and auditable.

We are experimenting with multiple LLMs (IBM Granite, Ollama, etc.) to evaluate which models are best suited for understanding, rewriting, and explaining legacy code.

---

## What We're Building

We are developing a **local-first, file-scoped toolchain** for the safe refactoring of Java code. Our system:

- Focuses on **anti-patterns** and **idiomatic code**, not just style issues.
- Performs **only file-level changes**, preserving interfaces and class contracts.
- Targets files with **100% test coverage**, so correctness can be automatically validated.
- Produces **explainable transformations**, aiding developer understanding and review.

The tool is designed to support **both automated and interactive workflows**:

- You can **plug in a repository** and let the system run on all eligible files (i.e., those with full test coverage).
- Alternatively, you can **manually prompt the tool on specific classes or files** to refactor targeted areas or experiment with different strategies.

---

## System Architecture

Our tool is built as a set of cooperating agents, following the **Model Context Protocol (MCP)**. Each agent is responsible for a distinct part of the pipeline.

- **Pattern Scanner**: Detects known anti-patterns using heuristics and LLM support.
- **Refactoring Strategist**: Proposes improved code based on modern idioms.
- **Code Transformer**: Applies changes safely, without breaking public APIs.
- **Code Reviewer**: Reviews the Transformer's code.
- **Test Executor**: Runs tests to confirm correctness.
- **Change Narrator**: Provides human-readable rationales for each transformation.

---

## Early Focus Areas

We're concentrating on common structural and readability issues in legacy Java code, such as:

- Hardcoded "magic" values  
- Vague or empty exception handling  
- Large, multi-purpose methods or classes/god objects (Single Responsibility Principle (SRP) violations)  
- Deep nesting and conditional complexity  
- Outdated constructs that could use modern Java features

These patterns are common in real-world codebases and make excellent candidates for safe, incremental improvement.

---

## Why This Project

Instead of aiming for full automation or rewriting code from scratch, this project focuses on **safe, explainable refactoring**, starting with well-tested code and keeping changes local and understandable. It's meant to help developers gradually improve legacy systems without losing trust in the process or control over the results.

Modern LLMs can generate code, offer suggestions, and mimic stylistic patterns - but they still struggle with:
- **Long, messy contexts** that span multiple responsibilities or abstractions
- **Ambiguous control flow**, especially in legacy code with inconsistent structure
- **Multi-step refactoring logic**, where intermediate intent isn't explicit
- **Reliability** when small misinterpretations can silently break functionality

Instead of relying on one-shot, monolithic LLM calls, we’re exploring an **agent-based approach**: decomposing the task into smaller, purpose-driven agents that cooperate on detection, transformation, explanation, and validation.

By tightly scoping the system to operate **only on files with full test coverage**, and by enforcing **file-local edits that preserve interfaces**, we create a safer environment for experimentation - and a workflow developers can trust. The focus is on **incremental modernisation**, not magical automation.
