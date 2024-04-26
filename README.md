# Apprendre HTML & CSS

## Introduction à HTML

### Qu'est-ce que HTML ?

HTML => HyperText Markup Language

HTML est le langage de balisage standard utilisé pour créer des pages web. Il définit la structure et le contenu d'une page en utilisant une série de balises et d'éléments. Ces balises permettent de marquer différents éléments de contenu, tels que du texte, des images, des liens, des vidéos, des formulaires, etc. HTML est un langage relativement simple mais puissant, qui constitue le fondement de presque toutes les pages web que vous consultez.

### Son rôle dans la création de pages web

HTML joue un rôle central dans la création de pages web en déterminant la structure et l'organisation du contenu. Sans HTML, les navigateurs web ne pourraient pas interpréter correctement le contenu d'une page et l'afficher de manière cohérente pour les utilisateurs. En utilisant HTML, les développeurs peuvent structurer leur contenu de manière logique et sémantique, ce qui facilite la navigation pour les utilisateurs et améliore l'accessibilité pour les personnes utilisant des technologies d'assistance.

## Les bases de HTML

Dans cette partie, nous allons explorer les bases de HTML, en commençant par la syntaxe de base, puis en détaillant la structure d'une page HTML, les balises de texte, les listes et les liens :

### La syntaxe de base : balises, éléments et attributs

HTML utilise des balises pour marquer les différents éléments d'une page web. Une balise est généralement constituée de deux parties : une balise ouvrante et une balise fermante, enveloppant le contenu à marquer. Un élément HTML est une combinaison de balises ouvrantes et fermantes, ainsi que du contenu qu'elles délimitent. Les attributs sont des valeurs spécifiées dans les balises pour fournir des informations supplémentaires sur les éléments HTML. Par exemple, l'attribut src dans la balise `<img>` spécifie l'emplacement de l'image à afficher.

### La structure d'une page HTML : doctype, balise `<html>`, balise `<head>` et balise `<body>`

Le doctype (`<!DOCTYPE html>`) déclare la version HTML utilisée dans le document et assure que le navigateur interprète la page correctement. La balise `<html>` enveloppe l'ensemble du contenu HTML de la page. La balise `<head>` contient des métadonnées sur la page, telles que le titre, les liens vers des feuilles de style CSS, des scripts JavaScript, etc. La balise `<body>` contient tout le contenu visible de la page, y compris le texte, les images, les liens, etc.

### Les balises de texte : `<h1>` à `<h6>`, `<p>`, `<strong>`, `<em>`, etc.

Les balises de titre `<h1>` à `<h6>` sont utilisées pour marquer les différents niveaux de titres sur une page. La balise `<p>` est utilisée pour définir un paragraphe de texte. Les balises `<strong>` et `<em>` sont utilisées pour mettre en évidence le texte, en le rendant respectivement en gras et en italique.

### Les listes : `<ul>`, `<ol>`, `<li>`

- `<ul>` est utilisée pour créer une liste non ordonnée, où chaque élément de la liste est marqué par `<li>`.
- `<ol>` est utilisée pour créer une liste ordonnée, où chaque élément de la liste est également marqué par `<li>` mais avec des numéros.

### Les liens : `<a>` et attribut href

La balise `<a>` est utilisée pour créer des liens hypertextes vers d'autres pages web ou des ressources. L'attribut href spécifie l'URL vers laquelle le lien pointe.

## Les images et les médias

### L'ajout d'images : `<img>` et attributs src, alt

### Les vidéos et l'audio : `<video>`, `<audio>` et attributs associés

## Les formulaires

### La création de formulaires : `<form>`

### Les champs de saisie : `<input>`

### Les menus déroulants : `<select>` et `<option>`

### Les boutons : `<button>`

## Les balises sémantiques

Les balises sémantiques comme `<header>`, `<footer>`, `<nav>`, `<article>`, et `<section>` sont utilisées pour organiser le contenu d'une page web de manière structurée et significative, ce qui améliore l'accessibilité pour les utilisateurs et facilite la compréhension du contenu par les moteurs de recherche.

Voici une explication de chaque balise :

- `<header>` : Utilisé pour représenter l'en-tête d'une section ou d'une page. Habituellement, il contient des éléments tels que le logo du site, le titre principal, les liens de navigation principaux, etc.
- `<footer>` : Utilisé pour représenter le pied de page d'une section ou d'une page. Il contient généralement des informations de copyright, des liens vers des pages importantes, des informations de contact, etc.
- `<nav>` : Utilisé pour représenter une section de navigation. Il contient généralement des liens de navigation vers d'autres parties du site ou vers des pages externes.
- `<article>` : Utilisé pour représenter un contenu indépendant et auto-suffisant qui pourrait être réutilisé ou syndiqué. Par exemple, un article de blog, un commentaire, un widget, etc.
- `<section>` : Utilisé pour regrouper des contenus thématiquement liés au sein d'une page. Il est souvent utilisé pour diviser une page en sections distinctes.

L'utilisation de ces balises aide non seulement à structurer le contenu de manière logique, mais également à améliorer l'accessibilité pour les utilisateurs qui utilisent des technologies d'assistance, comme les lecteurs d'écran, ainsi que pour les moteurs de recherche qui analysent le contenu de la page.

## Les tableaux

Les tableaux en HTML sont utilisés pour organiser les données tabulaires de manière structurée. Voici un aperçu des balises principales utilisées pour créer des tableaux :

- `<table>` : Définit le début d'un tableau.
- `<tr>` : Définit une ligne dans le tableau.
- `<th>` : Définit un en-tête de colonne ou de ligne (cellule d'en-tête).
- `<td>` : Définit une cellule de données dans le tableau.

Pour garantir une accessibilité optimale et suivre les bonnes pratiques dans l'utilisation des tableaux, voici quelques points à considérer :

- Utilisez les éléments de manière appropriée : Utilisez `<th>` pour les en-têtes de colonne ou de ligne, et utilisez `<td>` pour les données. Cela aide les lecteurs d'écran à interpréter correctement la structure du tableau.
- Associez les en-têtes de cellules : Utilisez l'attribut `scope="col"` pour les en-têtes de colonne et `scope="row"` pour les en-têtes de ligne. Cela aide les lecteurs d'écran à associer correctement les cellules de données à leurs en-têtes.
- Utilisez les attributs `headers` et `id` pour lier les cellules de données à leurs en-têtes lorsque cela est nécessaire.
- Utilisez les légendes `<caption>` pour fournir une description ou un titre au tableau.


# CSS

CSS => Cascading Style Sheets

Un langage de style utilisé pour définir la présentation visuelle des éléments d'une page web écrite en HTML. Il permet de contrôler l'apparence des éléments tels que le texte, les couleurs, les marges, les polices, les arrière-plans, et bien plus encore.

## Introduction aux feuilles de style en cascade (CSS)

Les feuilles de style en cascade (CSS) sont des fichiers textes contenant des règles de style qui définissent comment les éléments HTML doivent être affichés. Les règles CSS sont appliquées de manière hiérarchique, en suivant un processus de cascade qui permet de déterminer quelle règle doit être appliquée en cas de conflit. Les styles CSS peuvent être définis dans des fichiers externes (avec l'extension .css) ou directement dans le code HTML à l'aide de balises `<style>` ou d'attributs style.

## Lien entre HTML et CSS

Les règles CSS sont appliquées aux éléments HTML à l'aide de sélecteurs CSS. Un sélecteur CSS est un motif qui permet d'identifier les éléments auxquels une règle CSS doit être appliquée. Les sélecteurs peuvent cibler des éléments spécifiques (par exemple, `<h1>`), des classes (par exemple, .classe) ou des identifiants (par exemple, #id).

## Sélecteurs CSS et règles de base

Les sélecteurs CSS peuvent être de différents types : élémentaires, de classe, d'identifiant, de descendant, etc. Les règles CSS sont composées d'un sélecteur et d'un bloc de déclarations. Le bloc de déclarations contient une liste de propriétés CSS avec leurs valeurs. Les propriétés définissent les aspects visuels des éléments ciblés, comme la couleur, la taille, la police, la marge, le padding, etc.

## Méthodes d'intégration CSS : Inline, Embedded et External - Comparaison et bonnes pratiques

Lors de la création de styles pour une page web, il existe trois méthodes principales pour intégrer les règles CSS : inline, embedded et external. Chacune de ces méthodes a ses avantages et ses inconvénients, et il est important de comprendre leurs différences pour choisir la meilleure approche en fonction des besoins du projet.

### Inline CSS

Les styles inline sont définis directement dans les balises HTML à l'aide de l'attribut style. Cette méthode est utile pour appliquer des styles spécifiques à un élément unique.

#### Avantages

- Facilité d'utilisation pour les styles simples et spécifiques.

#### Inconvénients

- Manque de séparation entre le contenu HTML et les styles.
- Difficulté à maintenir et à mettre à jour les styles, en particulier pour les grands sites web.

### Embedded CSS

Les styles embedded sont définis dans la section `<style>` de l'en-tête HTML. Cette méthode permet de regrouper les styles associés à une page spécifique.

#### Avantages

- Permet de regrouper les styles associés à une page spécifique.
- Offre plus de flexibilité que les styles inline.

#### Inconvénients

- Toujours un mélange de contenu HTML et de styles, bien que dans une section séparée.

### External CSS

Les styles externes sont définis dans des fichiers CSS distincts, puis liés aux pages HTML à l'aide de balises `<link>`. Cette méthode permet de séparer complètement le contenu HTML et les styles, facilitant la maintenance et la mise à jour des styles sur l'ensemble du site.

#### Avantages

- Meilleure séparation des préoccupations entre le contenu et les styles.
- Facilité de maintenance et de mise à jour des styles sur l'ensemble du site.

#### Inconvénients

- Nécessite un fichier CSS externe supplémentaire.
- Peut entraîner un léger délai de chargement initial supplémentaire.


