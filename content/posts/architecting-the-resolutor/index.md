+++
date = '2025-07-25'
draft = true
title = 'Architecting the Anti-Pattern Resolutor'
tags = ["AI", "LLM", "Agent", "IBM", "Architecture", "Workflow", "Diagram", "WatsonX"]
+++

<a href="#tldr" class="btn">Jump to TL;DR</a>

We have focused this week on important architectural improvements and clarifications, and pushing toward a refined solution by working on new agents and support tooling.

## 1. Architecture

### Context Diagram
{{< figure-normal src="context-diagram-25-july.png" alt="Context Diagram" >}}


### Container & Component Diagram
Our architecture has become clearer in our mind. Our project's official title is now **Anti-Pattern Resolutor**, and comprises multiple projects:
- **Anti-Pattern Remediator** - The main component of the **Resolutor**, this is project contains the *Agentic Workflow* that performs the scanning, strategising, and refactoring of code snippets and repositories.
- **Web UI Application (React)** - Deployed separately but part of the same solution, our React front-end will be one of two ways of interacting with the system, and is defined as an easy-to-use, accessible entrypoint for developers.
- **Command-Line Interface** - Secondary front-end linked to the other tools in the **Resolutor**, particularly useful for CLI-savvy developers and potential automation through integration within command pipelines.
- **SonarQube MCP Tool** - Static analysis tool used by the **Remediator** (particularly the **Pattern Scanner Agent**) to extract anti-patterns/code smells more efficiently than AI. This information is then updated by the **Pattern Scanner** with anti-patterns undiscoverable by static analysis.
- **Anti-Pattern Retriever** - Tool to export anti-patterns from Confluence (Confluence -> Markdown -> JSON), to then be seeded into our **Anti-Pattern Trove**. This allows us to have a single source of truth (Confluence wiki) so that documentation can also serve as an important datapoint.
- **GitHub Handler** - Tool that connects to GitHub. Required for cloning repositories (useful for static analysis & full repository refactoring) and creating commits and pull requests automatically.

Additionally, we have tools that we're hosting outside of our **Resolutor** solution:
- **Anti-Pattern Trove** - *Potentially* a Document DB (still WIP), it contains the JSONs of all of our anti-patterns, and the express intent is to feed the information to the **Pattern Scanner**, **Refactoring Strategist**, and **Explainer** agents to improve their output.
- **VectorDB** - A vector database to be used in conjunction with our agents for remembering past information.

{{< figure-wide src="container-diagram-25-july.png" alt="Container (and Component) Diagram" >}}

## 2. New Agent: Code Reviewer
**Maoqin** had the excellent idea of improving our code transformation by adding a new agent to allow for iterative development. This way, the **Code Transformer** and **Code Reviewer** agents work together to improve the code output:

{{< figure-normal src="code-transformer-reviewer-25-july.png" alt="Code Transformation Agentic Workflow" >}}

*You can find the updated Agentic Workflow [here]({{< relref "agentic-workflow/index.md" >}})*.

## TL;DR
A week full of productivity. We've focused on:
- Architectural definition and clarity, with **C4** *(except it's 3)* **diagrams**.
- Improvements to our agentic workflow through the addition of the brand new **Code Reviewer** agent.
- Partial implementation of code elements, including the **React front-end**, AI **agents**, and the **Anti-Pattern Retriever**.