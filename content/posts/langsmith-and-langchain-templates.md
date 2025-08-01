+++
date = '2025-08-01'
draft = false
title = 'LangChain Templates & LangSmith Integration'
tags =  ["AI", "LLM", "AgenticAI", "LangSmith", "Langfuse", "LangChain", "PromptEngineering"]
+++

<a href="#tldr" class="btn">Jump to TL;DR</a>

The last week of July has seen us work extensively on our agentic workflow and tooling support.  
We've also been researching how to best implement prompts in our solution to decouple them from the agents and allow easy modification and insertion of custom prompts by our users.  
We are also instrumenting our Anti-Pattern Remediator to enable observability, debugging, and evaluation of the agents.

## 1. Prompt Templates
**Maoqin** performed an extensive research spike to find the optimal way of separating prompts from our agents to facilitate plug-and-play, while also increasing our AI agents' capabilities.  

Some of the solutions considered include:
- *Inline in agents* - tightly coupled, poor scalability/modifiability;
- *JSON files* - require escaping (e.g., newlines), not ideal for multi-line prompts;
- *Plain text files* - human-readable but lack structure or metadata;
- *YAML files* - becoming an [industry standard](https://learn.microsoft.com/en-us/semantic-kernel/concepts/prompts/yaml-schema), support structure, metadata, and multi-line prompts;
- *Markdown + [Jinja](https://github.com/pallets/jinja/)* - powerful and dynamic, but heavyweight and unfamiliar for most users;
- *[LangChain Prompt Templates](https://python.langchain.com/docs/concepts/prompt_templates/)* - native, dynamic, and easy to integrate.

We decided to use **LangChain Prompt Templates** to dynamically generate inputs for our LLMs. The templates themselves will be stored in **YAML files**, which offer structured, readable, and easily modifiable storage for prompts.  
This way, we get the best of both worlds, with separate, human-readable, extensible and replaceable prompt files, and seamless integration into our existing solution. This integration is currently well under way.

## 2. LLM Instrumentation

With the creation of such an extensive AI-based solution, instrumentation has become paramount. We need to be able to evaluate and debug LLMs and their outputs, and trace execution flows for debugging purposes.  
Benefits:
- Visibility into how the Anti-Pattern Remediator works under the hood.
- Debugging capabilities when something goes wrong.
- Performance insights on both Ollama and vLLM models.
- Historical records of all analyses performed.
- Token usage tracking for future cost optimisations.

**Vamsi**, in charge of our instrumentation efforts, has been working on a smooth integration into our workflow and discovered two tools that support this:
- [**LangSmith**](https://docs.smith.langchain.com/) - a Cloud LLM instrumentation platform that facilitates monitoring and LLM application evaluation. We’ve already used LangSmith in earlier development stages, where it proved useful in debugging and understanding agent behavior.
- [**Langfuse**](https://langfuse.com/) - a younger, open-source, self-hosted tool that has many of the same features of LangSmith.

While LangSmith is currently integrated into our pipeline and working well, its limitations in the free tier (e.g., no collaboration or on-prem hosting) mean we are also exploring Langfuse as a long-term, scalable alternative.

## TL;DR

- **LangChain Templates** and **YAML files** are now used for storing prompts, enabling modular, user-customisable workflows.
- **LLM Instrumentation** is under way for debugging, observability, and evaluation, with LangSmith in use and Langfuse under consideration for long-term adoption.