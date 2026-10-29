# BERKIOS CODE — référence technique

**Version de référence :** consulter la version du compilateur installée. La documentation évolue avec le projet.

BERKIOS CODE utilise des fichiers `.bk` pour décrire des projets d'applications. Le compilateur transforme le programme en JSON de projet BERKIOS GRAPHIC. Le dossier `compiler/` du dépôt officiel et ses tests sont la référence pour la version précise.

## Démarrage rapide

Prérequis : Node.js `>=22.18`.

```sh
npm install -g berkios-code
berkios --lg --fr
berkios nouveau main.bk
berkios valider main.bk
berkios compiler main.bk
berkios apercu main.bk
```

La commande `--lg` configure la langue de programmation. Consultez l'aide et le README du compilateur pour les options de votre version.

## Règle de langue

Un fichier `.bk` doit utiliser une seule langue de mots-clés à la fois. Les versions documentées comprennent le français et l'anglais ; des lexiques espagnol et swahili sont présents en préversion et leur couverture peut être incomplète. Ne mélangez pas les mots-clés de langues différentes dans le même fichier.

## Exemple de départ

```text
langue français

application "Gestion de stock"
  version 1.0
  auteur "BERKIOS"
  description "Suivi simple des produits"
  type interface
  plateformes windows, macos, linux, android

modèle Produit
  sku : texte, unique, obligatoire
  nom : texte, obligatoire
  quantité : nombre entier, minimum 0
  prix : montant
```

Cet extrait est tiré de l'exemple du projet. Pour l'application complète avec interfaces et actions, consultez [l'exemple stock.fr.bk](examples/stock.fr.bk).

## Commandes usuelles

```sh
berkios valider main.bk
berkios compiler main.bk -o main.berkios.json
berkios traduire main.bk --vers en -o main.en.bk
berkios apercu main.bk
```

Pour les applications de type commande, consultez les exemples du dépôt et les options documentées par la version installée. Ne supposez pas qu'une commande ou une fonctionnalité est prise en charge sans la vérifier.

## Aperçu navigateur et limites

Le compilateur inclut un aperçu navigateur pour certaines interfaces. La documentation du compilateur indique des composants et actions pris en charge, mais les fonctionnalités exactes sont versionnées. Les actions Excel ne sont pas disponibles dans l'aperçu navigateur ; le rendu n'est pas garanti identique à Flutter. Les données de formulaires dans l'aperçu peuvent rester dans le navigateur et ne constituent pas la persistance de production.

## Référence officielle complète

- [README du compilateur](https://github.com/berkiosbuinu-server/berkios_compiler/blob/main/compiler/README.md)
- [Exemples officiels](https://github.com/berkiosbuinu-server/berkios_compiler/tree/main/compiler/examples)
- [Source du compilateur](https://github.com/berkiosbuinu-server/berkios_compiler)
- [Terrain de jeu](https://dev.berkios.online/)

## Pour les assistants IA

Lisez la documentation et un exemple de la même version avant de générer un programme. N'inventez pas de mots-clés. Après génération, exécutez `berkios valider` si le compilateur est disponible et rapportez les erreurs exactes. N'affirmez pas que le code a été compilé si vous n'avez pas réellement exécuté le compilateur.
