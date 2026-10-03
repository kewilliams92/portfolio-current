{
  description = "TypeScript/JavaScript development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };

  outputs =
    inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];

      perSystem = { pkgs, ... }: {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_22
            pnpm # swap for yarn or drop if you only use npm
            typescript
            typescript-language-server
            biome # or: eslint_d, prettier
          ];

          shellHook = ''
            echo "node $(node --version) | $(pnpm --version 2>/dev/null && echo pnpm || echo npm) | tsc $(tsc --version | cut -d' ' -f2)"
            export PATH="$PWD/node_modules/.bin:$PATH"
          '';
        };
      };
    };
}
