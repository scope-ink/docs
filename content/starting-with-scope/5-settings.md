---
title: "Settings Panel"
metaTitle: "Settings Panel - Scope Docs"
metaDescription: "Settings Panel"

---

From the Settings panel, you can setup everything in the application: profile, integrations and manage your subscription.

## Profile

If you want to change the account, you have to log-out and sign-in with another GitHub account. If you want to change your password, you will be redirected to GitHub/Gmail Settings panel.

![tempsnip](https://user-images.githubusercontent.com/48650098/77152722-c7ed1c80-6a98-11ea-9e2e-1d9180ea512a.png)

## Integrations 

One of the most interesting value of Scope is that you canb manage **several integrations at once**. 

Scope actually works with GitHub, GitHub Enterprise, GitLab (beta) and GitLab Enterprise (beta). Depending on the way you Login in Scope, the process may differ. 

**1. If you Login with GitHub**

- Your token will be automatically created and you will be able to add more integrations through the Integrations panel.

**2. If you Login with Gmail**

- You must create your own token in your SCM (GitHub or GitLab) and add it to the integration.

You can add your integrations by going to the **"Add"** button and selecting your SCM option.

### GitHub Integration

If you Login with GitHub, you don't have to create your integration token, unless you want to add different GitHub profiles to your account. To manage GitHub integration, you should follow these steps:

![GH Integration](https://user-images.githubusercontent.com/48650098/79743481-ef880c80-8304-11ea-991c-33a0b2f97794.png)

Add your domain, token and username. By default, the domain is *github.com* so you **should not change this value**. Add your created token and your username:

![GH Int popup](https://user-images.githubusercontent.com/48650098/79741332-5acfdf80-8301-11ea-9317-ddab69b1aaea.png)

To finish the integration, click on the *Add integration* button and later you will be able to select the new repositories.

### GitHub Enterprise Integration

The process is the same than GitHub, but in this case, you must fill all the fields. First of all, select GitHub Enterprise option from the Add button dropdown.

![GHE Integration](https://user-images.githubusercontent.com/48650098/79743582-1f371480-8305-11ea-8d62-3bd20638abe7.png)

After that, a new block with the GitHub Enterprise integration will appear. Then, fill the fields and add your own **token**:

![Add GH Enterprise 2](https://user-images.githubusercontent.com/48650098/72068740-0d95a800-32e6-11ea-9e9e-b35fc6cb2f52.png)

1. For ***Domain** insert your custom GitHub Enterprise domain.
2. For **Token** insert your created token. Remember that you must create your token with *read* and *write* permissions or we won't be able to generate the insights you are looking for. For security concerns, visit our [security page](https://docs.scope.ink/introduction/7-security "security page").
3. For **Username** insert your username in GitHub.

#### IMPORTANT: 

Remember that GitHub Enterprise is not GitHub for Teams. If you are using GitHub for Teams and you are trying to receive data from an organization, please visit our [Working with organizations](https://docs.scope.ink/starting-with-scope/6-working-with-organizations "Working with organizations") page.

### GitLab & GitLab Enterprise Integration

If you only use GitLab or/and GitLab Enterprise as a SCM, you must Login using Gmail. After that, you will need to integrate your GitLab token. For that, open the GitLab option through the dropdown:

![GL Integration](https://user-images.githubusercontent.com/48650098/79743945-cfa51880-8305-11ea-8843-8c1af22d5b7d.png)

Once you click on GitLab option, you will see a pop-up asking for your credentials and token:

![GL pop-up](https://user-images.githubusercontent.com/48650098/79744469-acc73400-8306-11ea-98dc-256da261a559.png)

#### In case you are using GitLab:

1. For **Domain** insert the value must be ***gitlab.com***.
2. For **Token** insert your created token. Remember that you must create your token with *read* and *write* permissions or we won't be able to generate the insights you are looking for. For security concerns, visit our [security page](https://docs.scope.ink/introduction/7-security "security page").
3. For **Username** insert your username in GitLab.

#### In case you are using GitLab Enterprise:

1. For **Domain** insert the value must be ***your on-premise domain*** (for example: customdomain.gitlab.com).
2. For **Token** insert your created token. Remember that you must create your token with *read* and *write* permissions or we won't be able to generate the insights you are looking for. For security concerns, visit our [security page](https://docs.scope.ink/introduction/7-security "security page").
3. For **Username** insert your username in GitLab.

## Subscription

The Subscription tells you which plan you have active and how many repositories are you able to analyze. The number of repositories you can receive data from depends on the number of repositories you have payed for. Please, visit our [pricing plan](https://scope.ink/pricing "pricing plan") for more information.

![Subscription 1](https://user-images.githubusercontent.com/48650098/71579009-d14e9480-2afa-11ea-969d-4c472297f234.png)

If you want to **cancel your subscription**, please, write us at [team@scope.ink](mailto:team@scope.ink "team@scope.ink").