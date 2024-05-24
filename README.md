# PNPM Workspaces

- `pnpm` has built-in support for monorepositories (AKA _multi-package repositories, multi-project repositories, or monolithic repositories_). You can create a workspace to unite multiple projects inside a single repository.
- A workspace must have a `pnpm-workspace.yaml` file in its root. A workspace also may have an .npmrc in its root.
- Workspaces are the name of individual packages that are part of the same project



# Steps

- Create folder structure
  
- Initialize the main repository using `git init`
  
- Instruct the pnpm by creating the `pnpm-workspace.yaml` file. __Define paths in which any folder we create will be interpreted as a standalone 
package__. 

- In monorepo, it is usually a convention to name packages with `@` sign. `@app/demo-plan` means the package is `@app` and the app is `demo-plan`.
  
- Create an application inside the @app directory `pnpm create vite .`.

- Name the application using the `package.json` in the created app.

- Add a script to the main `package.json` so don't have to keep typing _--filter_.

## Use `tsconfig.json`

- In the root `tsconfig.json`, define that it is referenced by target `tsconfig.json` by using `references` entry.
- In the target `tsconfig.json` in the app, define that it is extending the root `tsconfig.json` by using `extends` entry.
   

## Installing packages

-  When install packages in root level, pnpm ask for confirmation. Add -w flag to the command. `pnpm add -Dw typescript`.
-  When we install a package from the same monorepo, we need to use the pnpm workspace protocol  `pnpm client add @demo/tailwind-config@workspace:*`
  
- Install the following packages in the root folder for linting and code formatting

```bash
pnpm install -Dw @typescript-eslint/esling-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-simple-import-sort eslint-plugin-vue prettier prettier-plugin-tailwindcss typescript
```
### Packages used

 - @typescript-eslint/eslint-plugin : Apply linting to typescript
 - @typescript-eslint/parser : Give ability to eslint to lint typescript files
 - eslint 
 - eslint-config-prettier : remove eslint rules that conflict with prettier
 - eslint-plugin-import : consistent import statements
 - eslint-plugin-simple-import-sort : automatically sort import statements
 - eslint-plugin-vue 
 - prettier 
 - prettier-plugin-tailwindcss : automatic sort of tailwind classes
 - typescript



## Create a package for tailwind config

- Create a folder named `tailwind-config` under the packages folder.
- To make it installable package, add a name to `package.json`.
- 

## Installing locally created packages
- When installing packages from same monorepo, need to use the pnpm workspace protocol
```code
pnpm client add @demo/tailwind-config@workspace:*
 
pnpm lib add -D @demo/tailwind-config@workspace:*

pnpm lib add -D vite-plugin-dts
```
- `:*` means the latest version in the monorepo.
- `vite-plugin-dts` generate typescript types for components.


## Running packages from root

- Run the client application
```code
pnpm client dev
#or
pnpm --filter @demo/client dev

pnpm lib build

pnpm client add -D @demo/ui-lib@workspace:*
```

### Notes
```code
"dev": "pnpm --recursive --parallel --stream run dev"
# This will recursively run all dev commands of the packages and in parallel. Also stream the output to console.
```

# Reference
https://www.youtube.com/watch?v=HM03XGVlRXI

https://github.com/mihailtd/demo-monorepo

https://turbo.build/repo/docs

https://pnpm.io/workspaces