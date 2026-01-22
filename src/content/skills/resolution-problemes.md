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

En production, une application Blazor soumise à des chargements de liste de client très importants sur certaines pages, la durée du chargement était très longue et au dépend de l’utilisateur irrespectivement.

Après analyse, j’ai remarqué que lors de chaque appel, les données étaient récupérées de la base de données, sans mise en cache, or que l’information évolue peu. J’ai proposé et implémenté une approche avec une mise en cache coté back, et une opération de mise à jour et suppression qui reste cohérente pour que l’information reste à jour.

**Résultat :** Une amélioration significative des performances, une réduction des appels inutiles et une expérience utilisateur plus fluide.

### Anecdote 2 – Problème de responsabilité métier mal définie

La partie back-end du projet appliquait également une logique métier, qui, en fait, représentait une API interne exploitée par l’application.Ce schéma impliquait une complexité inutile, une duplication des règles métier et des évolutions plus risquées.

J’ai analysé la situation et suggéré de recentraliser la responsabilité métier là où cela devrait être : le back de l’application s’occupe exclusivement de servir d’intermédiaire et d’adaptateur des données au front, aucune copie ou refonte du métier de l'API.

**Résultat :** Un code plus lisible, une architecture plus saine et une réduction des risques lors des évolutions futures de l’API interne.

## Autocritique

**Degré de maîtrise :** Niveau avancé (3/5)

**Place dans mon profil :** La résolution de problèmes, est une compétence centrale pour un développeur full stack, tant sur le front que sur le back.

**Recul sur la compétence :** Je considère la phase d’ analyse comme primordiale. Prendre le temps de comprendre le contexte de la situation évitera généralement les résultats superficiels improvisés.

## Évolution

**Objectifs à moyen terme :** En apprendre plus sur la résolution de problèmes sur les performances, la scalabilité et les architectures distribuées.

**Axes de progression :** Un renforcement de l’usage d’outils d’observabilité et la confrontation de mes analyses à celles de développeurs plus expérimentés pour mieux affûter mon raisonnement.
