# pi-frontend

## Table of Contents

- [pi-frontend](#pi-frontend)
  - [Table of Contents](#table-of-contents)
  - [Git Commits Guidelines](#git-commits-guidelines)
    - [Commit Comments](#commit-comments)
      - [Template](#template)
      - [Tag (optional)](#tag-optional)
  - [Run App in Development Mode](#run-app-in-development-mode)
    - [Setup environment variables (optional)](#setup-environment-variables-optional)
    - [Test backend server](#test-backend-server)
  - [Setup Development Environment](#setup-development-environment)
    - [Install VS Code](#install-vs-code)
      - [Suggested Extenstions](#suggested-extenstions)
    - [Install NodeJS](#install-nodejs)
    - [Install Yarn](#install-yarn)
    - [Install Git](#install-git)
      - [Linux](#linux)
      - [Windows](#windows)
      - [OSX](#osx)
  - [Learning Resources](#learning-resources)

## Git Commits Guidelines

Commit as often as possible with small incremental changes. You should be able to easily describe the whole commit in less than 80 characters.

### Commit Comments

#### Template

Use this template for the first line of the message:

```text
[<tag>] (If applied, this commit will...) <subject>
```

The message should answer continue the sentence `If applied, this commit will...`

*Example:*

```text
[feat] Implement communications with the backend over websocket
```

Add more details in the body if needed. Provide links or keys to any relevant tickets, articles or other resources

*Example:*

```text
Github issue #23
```

**Remember to:**

- Capitalize the subject line
- Use the imperative mood in the subject line
- Do not end the subject line with a period
- Separate subject from body with a blank line
- Use the body to explain what and why vs. how
- Can use multiple lines with "-" or "*" for bullet points in body

#### Tag (optional)

Could be one of:

- feat     (new feature)
- fix      (bug fix)
- refactor (refactoring code)
- style    (formatting, missing semi colons, etc; no code change)
- doc      (changes to documentation)
- hack     (Temporary fix to make things move forward; please avoid it)
- WIP      (Work In Progress; for intermediate commits to keep patches reasonably sized)
- config   (changes some configuration and/or options)

## Run App in Development Mode

First time after clonning the project you should install all the dependencies.
Also might be required after a new dependency have been added.

```bash
yarn install
```

To build and start the application run:

```bash
yarn start
```

### Setup environment variables (optional)

- Make a copy of the [.env.local.EXAMPLE](src/.env.local.EXAMPLE) file and name it `.env.local`
- Uncomment the variables and modify the variables you need

### Test backend server

If you don't have the backend setup and running on your local machine you could use a test cloud server by setting these environment variables:

```text
REACT_APP_WS_SERVER_HOST=167.99.181.112
REACT_APP_WS_SERVER_PORT=8887
```

## Setup Development Environment

### Install VS Code

[Get it from here](https://code.visualstudio.com/)

#### Suggested Extenstions

Either run the following line in the terminal (quick method)
or search each extension through the app and install each manually (slow)

```bash
code --install-extension DavidAnson.vscode-markdownlint
code --install-extension dbaeumer.vscode-eslint
code --install-extension donjayamanne.githistory
code --install-extension drKnoxy.eslint-disable-snippets
code --install-extension dzannotti.vscode-babel-coloring
code --install-extension eamodio.gitlens
code --install-extension EditorConfig.EditorConfig
code --install-extension esbenp.prettier-vscode
code --install-extension Gruntfuggly.todo-tree
code --install-extension karigari.chat
code --install-extension mikestead.dotenv
code --install-extension ms-python.python
code --install-extension ms-vsliveshare.vsliveshare
code --install-extension ms-vsliveshare.vsliveshare-audio
code --install-extension ms-vsliveshare.vsliveshare-pack
code --install-extension VisualStudioExptTeam.vscodeintellicode
code --install-extension vscode-icons-team.vscode-icons
code --install-extension xabikos.JavaScriptSnippets
code --install-extension xabikos.ReactSnippets
code --install-extension yzhang.markdown-all-in-one
```

### Install NodeJS

Get the LTS version (12.x.x) from [here](https://nodejs.org/en/)

### Install Yarn

```bash
npm install yarn -g
```

### Install Git

#### Linux

Get it from your package manager. For example, for debain based distros (like Ubuntu) run in the terminal:

```bash
sudo apt install git
```

#### Windows

[Get it from here](https://git-scm.com/)

#### OSX

*TODO...*

## Learning Resources

- [HTML Basics (Mozilla)](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [CSS Basics (Mozilla)](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [Javascript for Beginners (YouTube)](https://www.youtube.com/watch?v=fGdd9qNwQdQ&list=PLoYCgNOIyGACnrXwo5HMCfOH9VT05znGv)
- [JavaScript Basics (Mozilla)](<[https://link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)>)
- [Learning React + Redux (YouTube)](https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b)
- [React Official Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [Electron Quick-Start](https://electronjs.org/docs/tutorial/quick-start)
