---
title: "Logging in to Scope"
metaTitle: "Logging in to Scope - Scope Docs"
metaDescription: "Logging in to Scope"

---

First of all, you have to access to [Scope](https://app.scope.ink "Scope"). Once you arrive to the logging page, you have to:

## 1. Login with GitHub

Press the button *Sign in with GitHub*:

![Log in with GitHub](https://user-images.githubusercontent.com/48650098/81928153-1e805e00-95e5-11ea-9486-650a9c07e2ee.png)

A pop-up will appear. The GitHub [OAuth](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/ "OAuth") system will automatically detect your account if you have your GitHub session active. If you haven't it active, you have to insert your GitHub account name and password.

![OAuth](https://user-images.githubusercontent.com/48650098/71575431-356a5c00-2aed-11ea-9f96-fe3135b3cd2e.PNG)

You will have to accept our Scopes. GitHub OAuth system ask for ***write*** and ***read*** permissions** so we are going to be able to analyze the repositories and generate the necessary reports and visualizations you are looking in Scope.

![Scopes needed](https://user-images.githubusercontent.com/48650098/71575433-369b8900-2aed-11ea-8844-62f94a08dc44.PNG)

Once you have signed in with GitHub, you will be ready to add your repositories.

## 2. Login with GitLab

Press the button *Sign in with GitLab*:

![Log in with GitLab](https://user-images.githubusercontent.com/48650098/81928184-293af300-95e5-11ea-85ee-af73c4617002.png)

You will be redirected to the GitLab sign in page where you will be able to add your GitLab account credentials. 

![Redirect to GitLab sign in page](https://user-images.githubusercontent.com/48650098/81928502-a5353b00-95e5-11ea-8c67-2622200690a1.png)

Now, you need to accept the necessary permissions to use Scope. Once you accept them, you will be redirected back to Scope. It will automatically identify your token, and your projects and repositories.

## 3. Login with Gmail

You also can login to Scope using an email account. In this case, you will have to insert your SCM token manually later in the app. To log in using Gmail, click on *Sign in with Gmail* button:

![Log in with Gmail](https://user-images.githubusercontent.com/48650098/81928213-322bc480-95e5-11ea-9127-b179c3925740.png)

Once you have logged in with your Gmail account, you will need to create a personal token to be able to add your repositories. All the process is described in the [Scope Integrations page](https://docs.scope.ink/integrations "Scope Integrations page").

*----*

** **Why does Scope require write and read permissions?**

We need these permissions because we can't give you the metrics without these permissions. The OAuth protocol on GitHub is not granular so we can't read the data without them. 

If you have concerns about security, don't hesitate to read our [security page](https://docs.scope.ink/company-information/7-security "security page"), [terms of use](https://scope.ink/terms "terms of use") and [privacy policy](https://scope.ink/terms "privacy policy") to be sure that we don't use your data in a wrong way. 
