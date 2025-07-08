{
  pkgs ? let
    lock = (builtins.fromJSON (builtins.readFile ./flake.lock)).nodes.nixpkgs.locked;
    nixpkgs = fetchTarball {
      url = "https://github.com/nixos/nixpkgs/archive/${lock.rev}.tar.gz";
      sha256 = lock.narHash;
    };
  in
    import nixpkgs {overlays = [];},
  ...
}: let
  # Manifest data
  manifest = pkgs.lib.importJSON ./package.json;
in
  pkgs.stdenv.mkDerivation {
    name = "${manifest.name}-shell";

    buildInputs = with pkgs; [
      # Package managers
      pnpm
      yarn

      # Runtime engines
      nodejs_22

      # Nextjs dependencies
      vips

      # Nix
      nixd
      statix
      deadnix
      alejandra
    ];

    shellHook = ''
      printf "Installing pnpm dependencies\n"
      pnpm install

      printf "Adding node_modules to PATH\n"
      export PATH="$PWD/node_modules/.bin/:$PATH"

      printf "Adding necessary aliases\n"
      alias scripts='jq ".scripts" package.json'

      printf "Copying necessary fonts\n"
      cp "${
        pkgs.google-fonts.override {fonts = ["Inter"];}
      }/share/fonts/truetype/Inter[opsz,wght].ttf" ./src/app/Inter.ttf
    '';
  }
