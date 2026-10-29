# BERKIOS GRAPHIC — site vitrine

Site vitrine statique, responsive et en français pour **BERKIOS GRAPHIC**.

- Domaine prévu : `https://graphic.berkios.online`
- Contact WhatsApp : `+243 813 780 223` — https://wa.me/243813780223
- Auteur indiqué sur le site : **KIONGA TIMOTHEE Splane**
- Année d'apparition de BERKIOS : **2026**

## Contenu

- `index.html` : sections de présentation, solutions, vision et contact
- `styles.css` : design responsive
- `script.js` : navigation mobile et année du pied de page
- `assets/favicon.svg` : favicon

## Tester en local

Ouvrir `index.html` dans un navigateur. Pour un test via serveur local, depuis ce dossier :

```bash
python -m http.server 8080
```

Puis ouvrir `http://localhost:8080`.

## Déploiement sur le serveur web

Copier **le contenu** de `site-vitrine/` dans le répertoire web configuré pour `graphic.berkios.online` (ou dans un sous-répertoire si le site doit être servi sous un chemin). Configurer le serveur web pour servir `index.html` comme page d'accueil, puis activer HTTPS avec le certificat du domaine.

Exemple de copie vers un répertoire web déjà préparé :

```bash
sudo mkdir -p /var/www/graphic.berkios.online
sudo cp -a . /var/www/graphic.berkios.online/
```

Adaptez le chemin au serveur web et à la configuration existante. **Le site n'est pas publié automatiquement** par la création de ces fichiers. Avant de remplacer un site existant, sauvegarder son contenu et vérifier le virtual host du domaine.

## Personnalisation

Les liens WhatsApp utilisent `https://wa.me/243813780223`. Le contenu est statique et ne nécessite ni base de données ni dépendances Node.js. La police Google Fonts est facultative : si elle ne charge pas, les polices système prennent le relais.


## Bouton de téléchargement dynamique

Le bouton **Télécharger la dernière version** interroge l'API publique GitHub de `berkiosbuinu-server/berkos_siteweb` au moment du clic. Il privilégie une archive ou un installateur attaché à la release, puis le premier fichier disponible. Si aucune release n'est publiée ou si l'API échoue, il ouvre la page Releases du dépôt.

Au moment de la préparation du site, la page Releases GitHub indique qu'aucune release n'est publiée. Le bouton est prêt, mais le téléchargement d'un artefact dépend de la publication d'une release avec ses fichiers (Assets).

## Page de téléchargement Windows

- `download.html` : page de téléchargement avec logo Windows et deux choix distincts : **MSI** et **EXE**.
- `download.js` : recherche les fichiers `.msi` et `.exe` joints à la dernière release publique GitHub. Chaque bouton pointe vers son fichier correspondant. Si un format n'est pas publié, il est indiqué comme indisponible et renvoie vers les releases GitHub.
- `download.css` : présentation responsive de la page.

Tous les boutons « Télécharger » de la page d'accueil conduisent maintenant à `download.html`. Pour activer les deux téléchargements, publier une release dans `berkiosbuinu-server/berkos_siteweb` et y joindre les deux installateurs Windows, un fichier `.msi` et un fichier `.exe`.


## Guide d’installation

- `installation.html` : guide en français avec les prérequis, les étapes d’installation, les commandes de diagnostic et les liens officiels pour Flutter, Node.js, Android Studio, Visual Studio Build Tools et Git.
- `installation.css` : styles responsive complémentaires au thème du site.
- Les liens vers le guide sont présents dans la navigation de la page d’accueil et du centre de téléchargement.
- Le guide distingue l’installation du Studio des outils nécessaires à la génération/compilation d’applications. Les chemins d’installation des dépendances ne sont pas codés en dur.


## Visibilité du langage BERKIOS et documentation IA

- `language.html` : page publique dédiée à BERKIOS CODE, accessible aux visiteurs et aux robots d’indexation.
- `llms.txt` : index de navigation pour les assistants et outils qui choisissent de le consulter. Il ne garantit pas l’apprentissage ou la reconnaissance du langage par les IA.
- `robots.txt` : règles publiques d’exploration, avec accès autorisé aux pages et à `OAI-SearchBot`.
- `sitemap.xml` : liste des pages principales à soumettre aux moteurs de recherche.
- `index.html` : métadonnées de partage, données structurées et liens vers la page BERKIOS CODE.

### Après déploiement

1. Déployer les fichiers dans le répertoire web de `graphic.berkios.online`.
2. Vérifier dans un navigateur les URL `/language.html`, `/llms.txt`, `/robots.txt` et `/sitemap.xml`.
3. Vérifier que le serveur ne bloque pas les robots dans sa configuration, son CDN ou son pare-feu.
4. Ajouter le domaine dans Google Search Console et soumettre `https://graphic.berkios.online/sitemap.xml`.
5. Compléter la page langage avec la grammaire exacte, les exemples compilables, la bibliothèque standard, les erreurs et les versions du compilateur. Ne publier que des exemples vérifiés.

L’indexation et l’apparition dans les réponses des moteurs ou assistants IA ne sont jamais garanties. Le fichier `llms.txt` est une aide de navigation, pas une inscription universelle aux modèles d’IA.


## Documentation officielle pour développeurs et assistants IA

Le dossier `docs/` contient le portail technique public, les références BERKIOS CODE et BERKIOS Core, ainsi que des exemples tirés du dépôt du compilateur. Déployer ce dossier avec le reste du site afin que les URLs `/docs/`, `/docs/berkios-code.md` et `/docs/berkios-core.md` fonctionnent.

Le fichier `llms.txt` référence la documentation et les dépôts officiels. Il s'agit d'un index informatif : il ne garantit pas que tous les modèles IA connaissent BERKIOS ou que les moteurs indexent toutes les pages.
