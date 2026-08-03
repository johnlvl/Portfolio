---
title: "Résolution de problèmes"
description: "Analyser et résoudre des problèmes techniques complexes de manière méthodique"
category: "humaine"
level: 3
icon: "🔍"
order: 7
relatedProjects: []
---

## Définition et contexte

Résoudre des problèmes en ingénierie logicielle revient à décortiquer une situation complexe, déterminer les causes profondes du problème, puis apporter une solution sûre, raisonnée et robuste. Dans un environnement professionnel où les contraintes techniques, fonctionnelles et de temps s’imbriquent, une analyse incorrecte entraîne des régressions, voire de la dette technique.

## Éléments de preuve

### Anecdote 1 – Problème de performance sur des listes volumineuses

En production, une application **Blazor** souffrait de temps de chargement très longs sur certaines pages affichant des **listes de clients volumineuses**. Côté utilisateur, l’attente était pénalisante et dégradait clairement l’expérience.

Plutôt que d’appliquer une correction superficielle, j’ai pris le temps d’**analyser la cause réelle**. J’ai constaté qu’à chaque affichage, les données étaient intégralement récupérées depuis la base, sans aucune mise en cache, alors même que ces informations évoluaient peu entre deux consultations. Le coût provenait donc de la répétition d’appels inutiles.

J’ai proposé et implémenté une approche de **mise en cache côté back-end**, en intégrant dès la conception la gestion des opérations de mise à jour et de suppression, afin que les données servies restent **cohérentes** et à jour. Le point délicat n’était pas de cacher les données, mais de garantir leur fraîcheur : j’ai donc soigné la logique d’invalidation.

**Résultat :** Une amélioration significative des performances, une réduction nette des appels inutiles et une expérience utilisateur beaucoup plus fluide, sans compromettre la cohérence des données.

### Anecdote 2 – Problème de responsabilité métier mal définie

Sur le même projet, le back-end applicatif ne se limitait pas à servir le front : il portait également une partie de la **logique métier**, qui était pourtant déjà assurée par une **API interne** exploitée par l’application. Ce recouvrement créait une complexité inutile, une **duplication des règles métier** et rendait les évolutions plus risquées, chaque changement devant être reporté à plusieurs endroits.

Face à ce problème plus structurel que ponctuel, j’ai d’abord pris le temps de **cartographier les responsabilités** : qu’est-ce qui relève réellement du métier (donc de l’API interne) et qu’est-ce qui relève de l’adaptation des données pour le front (donc du back applicatif) ? Cette analyse m’a permis de rendre visible une confusion qui était jusque-là diffuse.

J’ai ensuite suggéré de **recentraliser la responsabilité métier** à sa juste place : le back de l’application se limite à un rôle d’intermédiaire et d’adaptateur des données vers le front, sans copier ni réinterpréter le métier porté par l’API.

**Résultat :** Un code plus lisible, une architecture plus saine et une réduction des risques lors des évolutions futures de l’API interne, grâce à une frontière de responsabilité enfin claire.

## Autocritique

**Degré de maîtrise :** Niveau avancé (3/5)

**Place dans mon profil :** La résolution de problèmes, est une compétence centrale pour un développeur full stack, tant sur le front que sur le back.

**Recul sur la compétence :** Je considère la phase d’ analyse comme primordiale. Prendre le temps de comprendre le contexte de la situation évitera généralement les résultats superficiels improvisés.

## Évolution

**Objectifs à moyen terme :** En apprendre plus sur la résolution de problèmes sur les performances, la scalabilité et les architectures distribuées.

**Axes de progression :** Un renforcement de l’usage d’outils d’observabilité et la confrontation de mes analyses à celles de développeurs plus expérimentés pour mieux affûter mon raisonnement.
