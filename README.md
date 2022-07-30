# Canada 🇨🇦

Canada is the Louffee's Design System intended to make beautiful UIs with a lot of UX touches 🧭.

A **Design System** is a collection of components that can be used to build UIs, following determined principles and styles, which are technically named **tokens**, and are also applied from design to code.

## Overview

Inside the folder **packages**, the **Design System** is divided into several folders, each one containing *one component* or purpose.

Inside the same folder also can be found the **variables** and **mixins** files, which are used to define the **tokens**. As well as the **global dev environment packages**, such as the configurations for ESLint, Prettier and StyleLint.

## Influences

Of course we don’t know everything, also we’re not trying to reinvent the wheel, so surely we have some influences that can be found in the hyperlinks below.

- [MUI](https://mui.com)
- [Tomahawk UI](https://github.com/tomahawk-ui/tui)
- [Emotion](https://emotion.sh)

## Naming

We know that naming stuff is the hardest thing on earth for developers, so we decided to use a **naming convention** to make it easier for us.

To the folders inside the **component packages** folder, we decided to use the following naming convention:

- `packages/@louffee-{component_name}`

For **global dev environment packages**, we decided to use the following naming convention:

- `packages/@louffee-{config_original_3rd_package_name}-config`

- If the original 3rd party package name contains the namespace `@` (for example: `@namespace/package-name`), we follow up the naming convention found in the `@types` namespace.

  - For example: `@types/namespace__package-name`.

For packages related to **systems** like a system for defining style, we add a `-system` suffix to the package name.

- For example: `packages/@louffee-{component_name}-system`
