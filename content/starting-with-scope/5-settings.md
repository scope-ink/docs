---
title: "Settings Panel"
metaTitle: "Settings Panel - Scope Docs"
metaDescription: "Settings Panel"

---

From the Settings panel, you can setup everything in the application: profile, integrations and manage your subscription.

## Profile

For the moment, you are only allowed to check which GitHub account you are using. If you want to change the account, you have to log-out and sign-in with another GitHub account. If you want to change your password, you will be redirected to GitHub Settings panel.

![tempsnip](https://user-images.githubusercontent.com/48650098/71578814-fb538700-2af9-11ea-9134-b6086b86bed6.png)

## Integrations 

Scope works actually only with GitHub and GitHub Enterprise (beta). When you Login with GitHub, you can add your GitHub Enterprise integrations by going to the **"Add"** button and selecting GitHub Enterprise option.

![add GH Enterprise](https://user-images.githubusercontent.com/48650098/72068659-dcb57300-32e5-11ea-8f0d-13ed53d1512d.png)

After that, a new block with the GitHub Enterprise integration will appear. After that, you have to fill the fields and add your own **token**:

![Add GH Enterprise 2](https://user-images.githubusercontent.com/48650098/72068740-0d95a800-32e6-11ea-9e9e-b35fc6cb2f52.png)

1. For ***Domain** insert your custom GitHub Enterprise domain.
2. For **Token** insert your created token. Remember that you must create your token with *read* and *write* permissions or we won't be able to generate the insights you are looking for. Please, visit our [security page](https://docs.scope.ink/introduction/7-security "security page").
3. For **Username** insert your username in GitHub.

#### IMPORTANT: 

Remember that GitHub Enterprise is not GitHub for Teams. If you are using GitHub for Teams and you are trying to receive data from an organization, please visit our [Working with organizations](https://docs.scope.ink/starting-with-scope/6-working-with-organizations "Working with organizations") page.

## Subscription

The Subscription tells you which plan you have active and how many repositories are you able to analyze. The number of repositories you can receive data from depends on the [pricing plan](https://scope.ink/pricing "pricing plan") you have payed for. 

![Subscription 1](https://user-images.githubusercontent.com/48650098/71579009-d14e9480-2afa-11ea-969d-4c472297f234.png)

The image above is an example of a Startup Plan. Up to 5 repositories. 

From the Subscription panel, you can also **modify your selected repos**. You just have to click on *Change repositories* button.

![Subscription 2](https://user-images.githubusercontent.com/48650098/71579061-14106c80-2afb-11ea-8652-4eed2def76e2.png)

Once you click on the *Change repositories* button, the repositories pop-up selector will be shown again:

![Available Repos](https://user-images.githubusercontent.com/48650098/71576942-892b7400-2af2-11ea-92e7-0ce8fe8febf6.png)