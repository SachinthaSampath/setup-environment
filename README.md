# Migrating from NPM to PNPM

- PNPM has been touted as a more performant and reliable replacement for NPM, aiming to reduce slow build times and eliminate issues with dependency mismatches. 
  
- npm maintains a flattened dependency tree as of version 3. This leads to less disk space bloat, with a messy node_modules directory as a side effect.

- On the other hand, pnpm manages node_modules by using hard linking and symbolic linking to a global on-disk content-addressable store. This lets you get the benefits of far less disk space usage, while also keeping your node_modules clean. There is documentation on the store layout if you wish to learn more.
  
- pnpm does not allow installation of packages without saving them to package.json. If no parameters are passed to pnpm add, packages are saved as regular dependencies. Like with npm, --save-dev and --save-optional can be used to install packages as dev or optional dependencies.

- That's why pnpm's implementation of the prune command does not allow you to specify packages to prune - it ALWAYS removes all extraneous and orphaned packages.


## Installation

- Install `pnpm`
  
````bash
npm install -g pnpm
````
- In the project which you want to convert to PNPM, find the node_modules directory and delete it.
- Add the following code to your project’s package.json. This will prevent people from installing packages with any other package managers.
```json
"scripts": { 
    "preinstall": "npx only-allow pnpm",
     ... 
}
```
- In directory root, create a file named _pnpm-workspace.yaml_ and add the following.
```yaml
packages:
  # include packages in subfolders (change as required)
  - 'apps/**'
  - 'packages/**'
  # if required, exclude directories
  - '!**/test/**'
```


- In terminal, run `pnpm import`. This will create a pnpm-lock.yaml file based on the current yarn.lock or package-lock.json.

- Delete `yarn.lock` or `package-json.lock` file.

- Install dependencies using PNPM by running `pnpm i` or `pnpm install`

- If you have scripts in `package.json` that use _npm run_ prefix, this will need to be replaced with _pnpm_ e.g. _pnpm test_ instead of _npm run test_

## Note:

- When installing dependencies with NPM or Yarn, a ‘flat’ node modules directory is created. This means that source code has access to dependencies that are not added as dependencies to the project. PNPM works differently in that it uses symlinks to add only the direct dependencies of the project into the root of the modules directory.

    - For example, if you have package A that imports a package B

        `import something from 'B'`

        but doesn’t explicitly specify B in the dependencies of the project, then the execution will fail.

- Not only does this new structure improve build performance, but it also reduces the likelihood of dependency bugs occuring within a project. This article gives a good breakdown of how that works.

- If you do come across a situation where you need a flat node modules structure like the one that NPM or Yarn creates, PNPM provides an escape hatch to do so:

    `pnpm install --shamefully-hoist`

- Although this should be avoided wherever possible, since it goes against the design pattern that PNPM implements. An example of when you might need to use this is where a dependency you have installed relies upon a package that is not explicitly specified in the root dependencies.

# Workspaces

Refer [this](https://github.com/SachinthaSampath/setup-environment/tree/pnpm-workspaces) to understand how ___pnpm workspaces___ work.