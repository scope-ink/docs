---
title: "Settings Panel"
metaTitle: "Settings Panel - Scope Docs"
metaDescription: "Settings Panel"

---

From the Settings panel, you can setup everything in the application: profile, integrations and manage your subscription.

## Profile

For the moment, you are only allowed to check which GitHub account you are using. If you want to change the account, you have to log-out and sign-in with another GitHub account. If you want to change your password, you will be redirected to GitHub Settings panel.

![tempsnip](https://user-images.githubusercontent.com/48650098/77152722-c7ed1c80-6a98-11ea-9e2e-1d9180ea512a.png)

## Integrations 

Scope works actually only with GitHub and GitHub Enterprise (beta). When you Login with GitHub, you can add your GitHub Enterprise integrations by going to the **"Add"** button and selecting GitHub Enterprise option.

![add GH Enterprise](https://user-images.githubusercontent.com/48650098/72068659-dcb57300-32e5-11ea-8f0d-13ed53d1512d.png)

After that, a new block with the GitHub Enterprise integration will appear. After that, you have to fill the fields and add your own **token**:

![Add GH Enterprise 2](https://user-images.githubusercontent.com/48650098/72068740-0d95a800-32e6-11ea-9e9e-b35fc6cb2f52.png)

1. For ***Domain** insert your custom GitHub Enterprise domain.
2. For **Token** insert your created token. Remember that you must create your token with *read* and *write* permissions or we won't be able to generate the insights you are looking for. For security concerns, visit our [security page](https://docs.scope.ink/introduction/7-security "security page").
3. For **Username** insert your username in GitHub.

#### IMPORTANT: 

Remember that GitHub Enterprise is not GitHub for Teams. If you are using GitHub for Teams and you are trying to receive data from an organization, please visit our [Working with organizations](https://docs.scope.ink/starting-with-scope/6-working-with-organizations "Working with organizations") page.

## Subscription

The Subscription tells you which plan you have active and how many repositories are you able to analyze. The number of repositories you can receive data from depends on the number of repositories you have payed for. Please, visit our [pricing plan](https://scope.ink/pricing "pricing plan") for more information.

![Subscription 1](https://user-images.githubusercontent.com/48650098/71579009-d14e9480-2afa-11ea-969d-4c472297f234.png)

If you want to **cancel your subscription**, please, write us at [team@scope.ink](mailto:team@scope.ink "team@scope.ink").