---
title: "Overview"
metaTitle: "Overview - Scope Docs"
metaDescription: "Overview"
---

In the overview panel we show all the summary information about all the activity of software engineers and repositories. We differentiate the table with some interesting metrics such as:

### Activity

Activity reflects the total number of tasks performed in the time interval selected in the date filter. So if you are in the PRs panel, what you will see will be the total number of PRs opened per person and per repository in this time interval.

In this way, we reflect in a more visual way the total amount of work done by each engineer and by each repository, where there are usually several engineers working together.

### Average

Average refers to how the PRs have finally turned out: merged, closed or even open. In this way, we can have a better view of the progress of the work of each engineer and repository. In general, a large number of closed PRs implies the existence of a bottleneck. It could also mean a high number of open PRs. The idea is to increase cycle time, so PRs should be easily merged into the base code.

### Impact

The average impact of PRs and Reviews for each person and repository.. Typically, a low impact can be related to a greater number of open PRs and a shorter PR lifetime.

### Commits/PR

Is the average number of commits per pull requests. We are very agnostic with this metric and it is all up to you to decide if you want to push more or less code. It will depend on your company code culture. A higher or lower number of commits by every PR does not mean that the PR is better or worse. Also, we are not looking for a higher number of changes in the PR, since it will be harder to review. 

### Review type

As we do in Average, here we differentiate by type of review. What we are looking for is to know what level of involvement each engineer has in the reviews carried out on a repository.

Imagine that your company has hired a new junior software engineer, he will likely make more comments than approvals or commits in each other's branches, and his senior will most likely have more commits and request changes in the junior branches.

### Velocity

The velocity is an average of time PRs and Reviews take to be completed. What we do here is to average two metrics that you will see on [Velocity](https://docs.scope.ink/scope-metrics/4-velocity "velocity"): PR Time and Time to Open. So, the Velocity on the Overview panel is an average of these both metrics.