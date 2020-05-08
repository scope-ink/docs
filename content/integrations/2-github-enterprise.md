---
title: "GitHub Enterprise"
metaTitle: "GitHub Enterprise - Scope Docs"
metaDescription: "GitHub Enterprise"
---

### GitHub Enterprise Integration

The process is the same than GitHub, but in this case, you must fill all the fields. First of all, select GitHub Enterprise option from the Add button dropdown.

![GHE Integration](https://user-images.githubusercontent.com/48650098/79743582-1f371480-8305-11ea-8d62-3bd20638abe7.png)

After that, a new block with the GitHub Enterprise integration will appear. Then, fill the fields and add your own **token**:

![Add GH Enterprise 2](https://user-images.githubusercontent.com/48650098/72068740-0d95a800-32e6-11ea-9e9e-b35fc6cb2f52.png)

1. For ***Domain** insert your custom GitHub Enterprise domain.
2. For **Token** insert your created token. Read below how to create a personal token in GitHub. For security concerns, visit our [security page](https://docs.scope.ink/company-information/7-security "security page").
3. For **Username** insert your username in GitHub.

## How to create a personal access token on GitHub?

1. Go to your [GitHub Settings page](https://github.com/settings/profile).
2. Click on **Developer settings**
3. Click on **Personal access tokens**
4. Click on **Generate new token** at the right upper corner
5. Add a name and select the following **scopes**:
![scopes](https://user-images.githubusercontent.com/48650098/81051126-7e7a5480-8ec1-11ea-876b-c88eb45b440a.png)
6. In case your repos are under an organization profile, add the **asdasdasdasdd** scope to the token.

To finish the integration, click on the ***Add integration*** button and later you will be able to select the new repositories.

#### IMPORTANT: 

Remember that GitHub Enterprise is not GitHub for Teams. If you are using GitHub for Teams and you are trying to receive data from an organization, please visit our [Working with organizations](https://docs.scope.ink/starting-with-scope/6-working-with-organizations "Working with organizations") page and the [GitHub integration page](https://docs.scope.ink/integrations/1-github), since it will depend on the way you log in to Scope.