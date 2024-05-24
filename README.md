## Change PNPM version

Choose the method that best fits your workflow

- Corepack for Node.js >= 16.9.0 environments.
- Local installation for project-specific dependency management.
- Volta for seamless version management across projects.
- npx for temporary use of a specific version.

Using any of these methods will ensure that your project consistently uses pnpm version 8.9.0, regardless of the globally installed version.

### Using Corepack

- Enable Corepack
```code
corepack enable
```
- Prepare and activate pnpm version 8.9.0:
```code
corepack prepare pnpm@8.9.0 --activate
```

### Local Installation
- Install pnpm as a development dependency:
```code
npm install -D pnpm@8.9.0
```
- Update your package.json to add a script for using the local version of pnpm:
```json
{
  "scripts": {
    "pnpm": "pnpm"
  }
}
```
- Run pnpm commands using npm scripts:
```sh
npm run pnpm install
```


## Using `npx`

- For a one-off use of the specific pnpm version, you can use npx
```sh
npx pnpm@8.9.0 install
```

## Using Volta (have not tried)
Volta is a tool for managing Node.js and package manager versions. Here’s how to use Volta to ensure your project uses the correct pnpm version:
- Install Volta:
```sh
curl https://get.volta.sh | bash
```
- Add Volta to your shell profile (if not done automatically)
```sh
export VOLTA_HOME="$HOME/.volta"
export PATH="$VOLTA_HOME/bin:$PATH"
```
- Restart your shell or source the profile:
```sh
source ~/.bashrc  # or .zshrc, .profile, etc.
```
- Install pnpm version 8.9.0 using Volta:
```sh
volta install pnpm@8.9.0
```
- Pin the project to use pnpm version 8.9.0:
```sh
volta pin pnpm@8.9.0
```