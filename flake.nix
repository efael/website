{
  description = "Official website of Efael Messenger";

  inputs = {
    # Too old to work with most libraries
    # nixpkgs.url = "github:nixos/nixpkgs/nixos-25.05";

    # Perfect!
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";

    # The flake-utils library
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
    ...
  }:
    flake-utils.lib.eachDefaultSystem
    (
      system: let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        # Nix script formatter
        formatter = pkgs.alejandra;

        # Development environment
        devShells.default = import ./shell.nix {inherit pkgs;};

        # Release package
        packages = rec {
          default = ssr;
          ssr = pkgs.callPackage ./default-ssr.nix {inherit pkgs;};
          ssg = pkgs.callPackage ./default-ssg.nix {inherit pkgs;};
        };
      }
    )
    // {
      # Deployment module
      nixosModules.server = import ./module.nix self;
    };
}
