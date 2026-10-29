# BERKIOS Core (`.bks`) — documentation de référence

BERKIOS Core est un langage typé distinct des fichiers déclaratifs `.bk`. Il possède sa propre syntaxe et un ensemble de fonctionnalités en évolution. La prise en charge multilingue de BERKIOS CODE ne signifie pas que BERKIOS Core est entièrement multilingue.

## Exemple français

```text
module "Gestion des ventes"
type Article
  nom: Texte
  prix: Décimal
fonction calculer_total(prix: Décimal, quantite: Entier) -> Décimal
  retourner multiplier(prix, quantite)
fonction principale() -> Entier
  soit prix_unitaire: Décimal = 12.5
  soit quantite: Entier = 3
  soit total = calculer_total(prix_unitaire, quantite)
  afficher "Total de la commande :"
  afficher total
  retourner 0
```

Cet extrait provient de l'exemple du dépôt. Consultez le fichier complet pour les conditions, collections et erreurs récupérables.

- [Exemple complet en français](examples/complet-fr.bks)
- [Exemple industriel en anglais](examples/industrial.bks)
- [README des exemples du compilateur](https://github.com/berkiosbuinu-server/berkios_compiler/blob/main/compiler/examples/README.md)
- [Source et tests du compilateur](https://github.com/berkiosbuinu-server/berkios_compiler)

## Consignes pour l'IA

- Ne mélangez pas la syntaxe `.bk` et `.bks`.
- Vérifiez les fonctionnalités prises en charge par la version ciblée.
- Utilisez un exemple officiel comme modèle.
- Validez le programme avec les outils réellement disponibles.
- Signalez les limites ou erreurs au lieu de les masquer.
