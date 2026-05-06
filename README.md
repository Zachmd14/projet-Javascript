# projet-Javascript
Projet Javascript Semestre 2

## csv def
| Champ | Signification |
|---|---|
| **Num_Acc** | Numéro identifiant de l'accident (clé de jointure avec les autres fichiers) |
| **id_vehicule** | Identifiant unique du véhicule impliqué dans l'accident |
| **num_veh** | Numéro d'ordre du véhicule dans l'accident (A01 = 1er véhicule A, B01 = 1er véhicule B, etc.) |
| **senc** | Sens de circulation du véhicule (1 = croissant, 2 = décroissant, 3 = sans objet, -1 = non renseigné) |
| **catv** | Catégorie du véhicule (ex : 7 = VL/voiture de tourisme, 10 = VU, 14 = PL, 34 = vélo, etc.) |
| **obs** | Obstacle fixe heurté (0 = sans objet, 9 = autre obstacle fixe, etc.) |
| **obsm** | Obstacle mobile heurté (1 = piéton, 2 = véhicule, etc.) |
| **choc** | Point de choc initial sur le véhicule (0 = sans objet, 1 = avant, 2 = avant droit, 3 = avant gauche, etc.) |
| **manv** | Manœuvre principale avant l'accident (ex : 1 = sans changement de direction, 13 = tournant à gauche, 15 = dépassement, etc.) |
| **motor** | Type de motorisation (0 = inconnue, 1 = hydrocarbures, 2 = électrique/hybride, etc.) |
| **occutc** | Nombre d'occupants dans le véhicule de transport en commun (vide si non applicable) |

## Exemple website
![2026-04-29-081626_952x874_scrot.png]
![2026-04-29-081636_939x875_scrot.png]

## lien csv
- https://explore.data.gouv.fr/fr/datasets/53698f4ca3a729239d2036df/#/resources/fd30513c-6b11-4a56-b6dc-5ac87728794b