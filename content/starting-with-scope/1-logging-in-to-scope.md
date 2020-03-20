---
title: "Logging in to Scope"
metaTitle: "Logging in to Scope - Scope Docs"
metaDescription: "Logging in to Scope"

---

First of all, you have to access to [Scope](https://app.scope.ink "Scope"). Once you arrive to the logging page, you have to:

## 1. Login with GitHub

Press the button *Login with GitHub*

![Login with GitHub] (https://user-images.githubusercontent.com/48650098/72067890-31f08500-32e4-11ea-8855-0363cf742311.png)

A pop-up will appear. The GitHub [OAuth](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/ "OAuth") system will automatically detect your account if you have your GitHub session active. If you haven't it active, you have to insert your GitHub account name and password.

![OAuth](https://user-images.githubusercontent.com/48650098/71575431-356a5c00-2aed-11ea-9f96-fe3135b3cd2e.PNG)

You will have to accept our Scopes. GitHub OAuth system ask for ***write*** and ***read*** permissions so we are going to be able to analyze the repositories and generate the necessary reports and visualizations you are looking in Scope.

![Scopes needed](https://user-images.githubusercontent.com/48650098/71575433-369b8900-2aed-11ea-8844-62f94a08dc44.PNG)

**Why does Scope require write and read permissions?**

We need these permissions because we can't give you the metrics without these permissions. The OAuth protocol on GitHub is not granular so we can't read the data without them. 

If you have concerns about security, don't hesitate to read our [security page](https://docs.scope.ink/introduction/7-security "security page"), [terms of use](https://scope.ink/terms "terms of use") and [privacy policy](https://scope.ink/terms "privacy policy") to be sure that we don't use your data in a wrong way. 

Once you have signed in with GitHub, you will be ready to add your repositories.

## 2. Aren't you using GitHub?

In case you are not using GitHub as a git provider, we take it in consideration for our future integrations, so we ask you to click on the **"Not using GitHub?"** button and give us some feedback about which git provider are you actually using.

A pop-up will prompt and we will ask you to insert your ***e-mail*** (so we might be able to inform you in the future when we have your integration ready), ***company name*** (we would like to know which company is asking us for a new integrations) and the ***git provider*** you use.

![Pop-up SCM](https://user-images.githubusercontent.com/48650098/77149242-6ffee780-6a91-11ea-8f2e-13f2ace59989.png)

