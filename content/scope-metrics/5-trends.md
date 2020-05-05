---
title: "Trends"
metaTitle: "Trends - Scope Docs"
metaDescription: "Trends"
---

Trends is a new visualization that allows you to visualize the size of the PRs opened over time. In this way, you will have very valuable information about the workflow of the PRs. 
Remember that in Scope we are looking for a reduction in Cycle Time, and for this, creating small PRs is essential. At the moment, we have considered creating a target of 150 lines modified 
by PR. We have relied on different papers that support this goal. However you can establish your own target.

![trends](https://user-images.githubusercontent.com/48650098/81056147-52170600-8eca-11ea-9987-91b5a2be194b.png)

### Average

Is the average size of your PRs. A greater number implies bigger PRs and therefore the Cycle Time can be increased.

### Progress 

Progress is the difference between your Average PR size and the Target. Red number means you are creating bigger PRs than the target. Green number
means you are doing good.

### Target

The default target is based in [this paper](https://dl.acm.org/doi/pdf/10.1145/3183519.3183525) (*150 lines modified by PR*) and about our users PR performance. Anyways, you are able to edit the target
yourself and establish your own goal. We highly encourage to create small PRs to increase dev productivity, so we think 150 lines is a good starting point.