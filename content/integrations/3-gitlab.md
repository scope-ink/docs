---
title: "GitLab"
metaTitle: "GitLab - Scope Docs"
metaDescription: "GitLab"
---

### GitLab Integration

If you Log in/Sign up with GitLab, you don't have to create your integration token, unless you want to add different GitLab profiles to your account. To manage GitLab integration, you should follow these steps:

![GL Integration](https://user-images.githubusercontent.com/48650098/81797259-d5f67100-950e-11ea-8951-d1637fcba673.png)

Once you click on GitLab option, you will see a pop-up asking for your credentials and token:

![GL pop-up](https://user-images.githubusercontent.com/48650098/81797444-181fb280-950f-11ea-9d02-2f1c43678d49.png)

1. The **Domain** by default is ***gitlab.com***, it can't be modified.
2. For **Token** insert your created token. Read below how to create a personal token in GitLab. For security concerns, visit our [security page](https://docs.scope.ink/company-information/7-security "security page").
3. For **Username** insert your username in GitLab.

## How to create a personal access token on GitLab?

1. **Log in** to GitLab.
2. In the upper-right corner, click your avatar and select **Settings**.
3. On the User Settings menu, select **Access Tokens**.
4. Choose a name and optional expiry date for the token.
5. Choose the following **scopes**:
![GitLab Scopes](https://user-images.githubusercontent.com/48650098/81071792-7cc28800-8ee5-11ea-8a01-6a713a616a2c.png)
6. Click the **Create personal access token** button.
7. **Save** the personal access token somewhere safe. Once you leave or refresh the page, you won’t be able to access it again

To finish the integration, click on the ***Add integration*** button and later you will be able to select the new repositories.