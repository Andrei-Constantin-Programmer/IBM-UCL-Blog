+++
date = '2025-08-15'
draft = false
title = 'Code Reviewer, Explainer, and End-to-End Refactoring Pipeline'
tags =  ["AI", "LLM", "AgenticAI", "Refactoring", "JaCoCo", "Coverage"]
+++

<a href="#tldr" class="btn">Jump to TL;DR</a>

We've now reached a point where the platform can take a Java file, run it through the full workflow, and return a refactored version with no manual steps in between.  
That’s thanks to two new agents, coverage integration, and automated file handling, all stitched together into one continuous pipeline.  


## 1. Code Reviewer Agent
The **Code Reviewer** is our new quality gate between transformations, and is now fully implemented.  
When the **Code Transformer** makes changes, the Reviewer checks them for correctness, quality, and whether they actually match the intended refactoring strategy.

If the Reviewer is not happy, it sends the code back for another pass, up to a maximum of *three cycles*.  
This keeps the output sharp, catches regressions early, and prevents infinite loops.

## 2. Explainer Agent
The **Explainer** turns all of the behind-the-scenes work into human-readable explanations.  
For every refactoring cycle (Java file), it explains:
- **What** changed;
- **Why** it changed;
- **How** the changes tie to the anti-patterns detected.

The result is an audit log in plain English which makes the whole process more transparent and easier to trust. It can also be used in future iterations of our solution to automatically create commit and pull request messages.

## 3. JaCoCo Integration & Coverage Reading
We've wired in **JaCoCo** so the workflow can read coverage data straight from project reports.  
This allows us to only modify those files with **100% coverage**, giving us the highest possible likelihood of avoiding breaking changes via refactoring. The tests are then rerun on the final, refactored version of the repository for validation.  

A major challenge in AI-assisted code generation is validating the changes. By only modifying fully-covered files and preserving public interfaces (public method signatures, class names, etc.), we drastically reduce the potential for regression.

## 4. Automatic Java File Ingestion
As part of our coverage tool implementation, we now successfully extract fully-covered Java files from the repository to refactor.  
These files are then automatically queued and sent through our agentic pipeline:

*Detection -> Strategising -> Transform & Review Cycle -> Validation -> Explanation*.  

At the end, the developer receives a refactored file ready to go.

With a few small tweaks, our project is well on its way to automatically refactor entire repositories with no human intervention.

## Next Steps
We'll be working for the remainder of this project on creating a **Command-Line Interface (CLI)** for direct control, followed by a **web SPA GUI** to make it easier to use and visualise the intermediate steps.  

## TL;DR

- **Code Reviewer** and **Explainer** agents are complete and fully integrated into our agentic workflow.
- **JaCoCo** is now integrated into our solution, allowing us to extract and refactor only those files with 100% coverage.
- **Automatic file ingestion** is essentially complete.
- **CLI** and **GUI** implementation are our next targets.