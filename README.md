# Statistiques accidents de la route 2024

Projet JavaScript du semestre 2. Une page web affiche les véhicules impliqués dans les accidents de la route en France en 2024, avec un tableau et deux graphiques.

## Lancer le projet

1. Ouvrir `index.html` dans un navigateur.
2. Cliquer sur un en-tête de colonne pour trier le tableau.
3. Choisir une colonne dans le menu déroulant pour changer le graphique en barres.

Aucune installation et aucun serveur ne sont nécessaires. Chart.js se charge depuis un CDN. Une connexion internet est donc obligatoire pour afficher les graphiques.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Structure de la page, tableau, menu déroulant, zones des graphiques |
| `style.css` | Mise en forme de la page |
| `script.js` | Affichage du tableau, tri, création des graphiques |
| `data.js` | Données des véhicules, sous forme de tableau JavaScript |
| `ressources/vehicules-2024.csv` | Données d'origine au format CSV |

## Fonctionnalités

- Tableau des véhicules avec le numéro d'ordre, la catégorie et le nombre de chocs.
- Tri du tableau sur une colonne par un clic sur l'en-tête.
- Graphique en barres sur la colonne choisie : nombre de chocs ou type de véhicule.
- Graphique en anneau de la répartition par type de véhicule. Les six catégories les plus fréquentes restent séparées, le reste est regroupé dans « Autres ».
- Bloc d'explication des codes de catégorie de véhicule, avec une liste déroulante.

## Source des données

Données ouvertes des accidents corporels de la circulation, sur data.gouv.fr :

<https://explore.data.gouv.fr/fr/datasets/53698f4ca3a729239d2036df/>

Le fichier `data.js` contient une sélection du fichier `vehicules-2024.csv`. Les colonnes utilisées sont `num_veh`, `catv` et `choc`.

## Colonnes du CSV

| Champ | Signification |
|---|---|
| **Num_Acc** | Numéro identifiant de l'accident (clé de jointure avec les autres fichiers) |
| **id_vehicule** | Identifiant unique du véhicule impliqué dans l'accident |
| **num_veh** | Numéro d'ordre du véhicule dans l'accident (A01 = 1er véhicule A) |
| **senc** | Sens de circulation (1 = croissant, 2 = décroissant, 3 = sans objet, -1 = non renseigné) |
| **catv** | Catégorie du véhicule (7 = voiture de tourisme, 10 = véhicule utilitaire, 14 = poids lourd, 34 = vélo…) |
| **obs** | Obstacle fixe heurté (0 = sans objet, 9 = autre obstacle fixe…) |
| **obsm** | Obstacle mobile heurté (1 = piéton, 2 = véhicule…) |
| **choc** | Point de choc initial sur le véhicule (0 = sans objet, 1 = avant, 2 = avant droit…) |
| **manv** | Manœuvre principale avant l'accident (1 = sans changement de direction, 13 = tournant à gauche…) |
| **motor** | Type de motorisation (0 = inconnue, 1 = hydrocarbures, 2 = électrique ou hybride…) |
| **occutc** | Nombre d'occupants du véhicule de transport en commun (vide si non applicable) |

## Aperçu

![Aperçu du site](./screenshot_preview.png)

## Pistes d'amélioration

- Ajouter d'autres types de graphiques.
- Trier les colonnes numériques comme des nombres.
- Paginer le tableau au lieu de limiter à 50 lignes.
- Charger le CSV directement avec `fetch` au lieu de le convertir en `data.js`.
