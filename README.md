# IBM x UCL - LLM-Based Legacy Code Refactoring (Tech Blog)
[![Blog](https://img.shields.io/badge/Live-Blog-blue?style=flat-square&logo=githubpages)](https://andrei-constantin-programmer.github.io/IBM-UCL-Blog)
[![Hugo](https://github.com/Andrei-Constantin-Programmer/IBM-UCL-Blog/actions/workflows/hugo.yml/badge.svg)](https://github.com/Andrei-Constantin-Programmer/IBM-UCL-Blog/actions/workflows/hugo.yml)
[![GitHub License](https://img.shields.io/github/license/Andrei-Constantin-Programmer/IBM-UCL-Blo)](https://github.com/Andrei-Constantin-Programmer/IBM-UCL-Blog/blob/main/LICENSE)

This repository contains the official tech blog for our MSc group project at University College London (UCL), delivered in collaboration with IBM.

The project explores how Large Language Models (LLMs) can assist in refactoring legacy software systems to improve maintainability, reduce technical debt, and accelerate modernisation efforts.

## 🌐 Live Site 
[**Visit the blog**](https://andrei-constantin-programmer.github.io/IBM-UCL-Blog)

## Built With

- [Hugo](https://gohugo.io/) static site generator
- [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme

## Local Development

### Prerequisites
[`Hugo Extended v0.147.x+`](https://gohugo.io/installation/)  
Use the extended version, as it’s required by the PaperMod theme.

You can verify Hugo is installed with:

```bash
hugo version
```

#### Install Hugo Extended
macOS / Linux (via [Homebrew](https://brew.sh/)):
```bash
brew install hugo
```

Windows (via [Chocolatey](https://chocolatey.org/)):

```bash
choco install hugo-extended -confirm
```

### Running the Blog

```bash
git clone --recurse-submodules https://github.com/Andrei-Constantin-Programmer/IBM-UCL-Blog.git
cd ibm-ucl-blog
hugo server
```

If you cloned the repository without `--recurse-submodules`, you can install them using:
```bash
git submodule update --init --recursive
```

## Contributors

This project is a collaboration between the following UCL MSc students:

- Abhaya Ghimire
- Avinash Mallick
- Maoquin Lei
- Vamsi Mukkamala
- Gavriel Neuman
- Andrei Constantin
