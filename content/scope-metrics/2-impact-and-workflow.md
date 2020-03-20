---
title: "Impact and Workflow"
metaTitle: "Impact and Workflow - Scope Docs"
metaDescription: "Impact and Workflow"
---

You are probably wondering *What this Impact means?* and that's reasonable. With the impact, we try to give some qualitative value to the work of a person, since we are not only looking to provide the quantity of the work. With impact, we are also looking to make people create better code. We encourage teams to create a better review and communications culture, creating smaller PRs that are easy to review. This way, every engineer, we involve all engineers in each other's work, obtaining improvements in the motivation and gamification of work.

But how do we measure that? There is an algorithm that weights a series of variables that are considered as a good coding practice by the software industry. Among others, the main variables that we consider in measuring impact are:

- Lines modifies in all the PR
- Number of dependencies affected 
- Number of files affected
- Commit message

We give a **score** to every PR based on those variables. This way, we create those circles that you see on the **Workflow** panel. The larger is the size of the circle, the more score it has.

![pr](https://user-images.githubusercontent.com/48650098/77156323-74ca9800-6a9f-11ea-8663-952b42f2b122.png)

We define the Impact by **low**, **mid** and **high**. We average the total score on all the PRs and divide it. ***Is low impact bad?*** Definitely, not. Generally, a low impact is related with a higher number of PRs open and merged. If your team is working with small PRs, you will probably have more low PRs than mid or high, and that's cool.

![Impact](https://user-images.githubusercontent.com/48650098/77154321-bfe2ac00-6a9b-11ea-94e7-d7cc654f5e5f.png)

But this is not only a question of PRs. As we consider that we can really improve the workflow of teams, we also give impact to the reviews and are able to differentiate by type of review on the code. This way, we encourage engineers not only to review faster, but to review better. In the case of reviews, we measure and give different value to variables as:

### Impact for reviews. 
- Comments. How is that comment? Normally, a more detailed comment implies a better comment.
- Commits. When people is commiting in other's branch that is a review itself.
- Approves
- Request changes

![Review Impact](https://user-images.githubusercontent.com/48650098/77156090-f110ab80-6a9e-11ea-9ecd-712f5334b1d2.png)

### What about commits?

We don't measure commit impact. We do not measure the impact of commits. In this case, all we do is to create the circle depending on the number of lines affected by the commit. It is in the PR where we group all the commits and show the impact of all of them.

![commit](https://user-images.githubusercontent.com/48650098/77156257-52d11580-6a9f-11ea-96d3-43d0f171d5ea.png)

*NOTE: We are constantly improving our algorithm to show better results over time. Feel free to give fair feedback at [team@scope.ink](mailto:team@scope.ink "team@scope.ink").*