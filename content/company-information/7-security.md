---
title: "Security"
metaTitle: "Security - Scope Docs"
metaDescription: "Security at Scope.ink"
---

At Scope, we take your security seriously. A number of steps are taken to generate the best results while keeping your data secure. 

### Where is my data stored?
Scope has no server-side, just client-side. **All the analysis is performed in your own browser**. We will only receive your token once you login to the app, but it's you the person who will create and receive all the reports. Your browser will store all the information in its own cache.

We use Surge to host our software as Link simple static web publishing. You can see the official Surge page [here](https://surge.sh/).

### Does Scope read my data?
Scope it's not able to read data of any kind. All of your data is stored in the SCM you use to host your repositories and the information will be saved in your browser cache, we do not store any of it. Please, read the security of our integrated SCMs here: 

- [GitHub](https://github.com/security)
- [GitHub Enterprise](https://github.com/enterprise/security).

We, in fact, have to ask for *write* and *read* permissions during the authorization process.

#### Why does Scope require write and read permissions?

We need these permissions because we can't give you the metrics without these permissions. The OAuth protocol on GitHub is not granular so we can't read the data without them. There are issues opened on GitHub about this topic. [Read more here](https://github.com/dear-github/dear-github/issues/113).

### How is my data accessed?
Only you can access your data when you sign-in to your SCM through the Scope website.

### Who can see my data?
Only those who have access to your account. There is no public access to your data.
For more information, see our [Privacy Policy](https://scope.ink/privacy), and [Terms of Service](https://scope.ink/Terms) pages.