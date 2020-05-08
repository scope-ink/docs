---
title: "Logging in to Scope"
metaTitle: "Logging in to Scope - Scope Docs"
metaDescription: "Logging in to Scope"

---

First of all, you have to access to [Scope](https://app.scope.ink "Scope"). Once you arrive to the logging page, you have to:

## 1. Login with GitHub

Press the button *Log in with GitHub*

![Log in with GitHub] (https://user-images.githubusercontent.com/48650098/81047585-0577fe80-8ebb-11ea-8a3c-1d826ad31033.png)

A pop-up will appear. The GitHub [OAuth](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/ "OAuth") system will automatically detect your account if you have your GitHub session active. If you haven't it active, you have to insert your GitHub account name and password.

![OAuth](https://user-images.githubusercontent.com/48650098/71575431-356a5c00-2aed-11ea-9f96-fe3135b3cd2e.PNG)

You will have to accept our Scopes. GitHub OAuth system ask for ***write*** and ***read*** permissions so we are going to be able to analyze the repositories and generate the necessary reports and visualizations you are looking in Scope.

![Scopes needed](https://user-images.githubusercontent.com/48650098/71575433-369b8900-2aed-11ea-8844-62f94a08dc44.PNG)

**Why does Scope require write and read permissions?**

We need these permissions because we can't give you the metrics without these permissions. The OAuth protocol on GitHub is not granular so we can't read the data without them. 

If you have concerns about security, don't hesitate to read our [security page](https://docs.scope.ink/company-information/7-security "security page"), [terms of use](https://scope.ink/terms "terms of use") and [privacy policy](https://scope.ink/terms "privacy policy") to be sure that we don't use your data in a wrong way. 

Once you have signed in with GitHub, you will be ready to add your repositories.

## 2. Login with Gmail

For GitLab integration, you must Login in Scope using Gmail and later, add your token through the [Settings page](https://docs.scope.ink/starting-with-scope/5-settings "settings page"). For that, in the app Login screen, please, click on the button *Log in with Gmail*.

![Log in with Gmail](https://user-images.githubusercontent.com/48650098/81047599-0d37a300-8ebb-11ea-916a-4f77e86ef0ce.png)

Then, log in with your Gmail account in the pop-up screen.

Once you have logged in with your Gmail account, you will need to create a personal token to be able to add your repositories. All the process is described in the [Scope Integrations page](https://docs.scope.ink/integrations "Scope Integrations page").

