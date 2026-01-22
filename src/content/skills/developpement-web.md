---
title: "Développement web full-stack"
description: "Création d'applications web complètes, du front-end au back-end"
category: "technique"
level: 3
icon: "💻"
order: 2
relatedProjects: []
---

## Définition et contexte

Le développement web full-stack consiste à travailler sur toutes les couches d’une application, depuis le front-end jusqu’au back-end de l’application, en veillant à la cohérence de l'application, d’un point de vue fonctionnel, technique, et métier. Ainsi, dans le cadre professionnel, cette compétence se manifeste par la compréhension des enjeux d’un système, l’ouverture à la communication entre les différentes couches, ainsi que par la réalisation de l’optimisation des performances et de la maintenabilité de l’application.

## Éléments de preuve

### Anecdote 1 — Migration d’API interne et adaptation front/back

Dans une application métier en **C# .NET / Blazor**, une nouvelle version de l’API interne de l’entreprise a été publié avec des routes plus propres et une structure de données modifiée. 
J’ai effectué la migration vers ces nouvelles routes en effectuant une migration progressive.

En pratique, cela s’est traduit par la réalisation des actions suivantes :
- Adapté les appels de l’API côté **back-end**.
- Modifier les contrôleurs pour adapter les données et les exposer au format de données retourné au front.
- Mettre à jour les appels côté **front-end** pour consommer les nouvelles routes exposées par le back. 

Comme pour une migration lors d’une montée de version, cette opération est réalisée de manière progressive pour limiter au maximum son impact.

**Résultat :** Une architecture plus cohérente entre les couches, une meilleure lisibilité des échanges et une base saine pour les évolutions à venir.

### Anecdote 2 — Optimisation des performances via mise en cache

Le chargement des très longues listes des clients rendait l’application peu performante, le temps de réponse était élevé côté front.

J’ai donc mis en place un **mécanisme de cache côté back-end**, qui permettait de :

- De limiter les appels redondants à l’API interne.
- De servir rapidement les données au front.
- De gérer correctement les opérations de mise à jour et de suppression.

**Résultat :** Les performances s’améliorent sensiblement, les temps de chargement sont réduits et l’expérience utilisateur est meilleures.

## Autocritique

**Degré de maîtrise :** Niveau intermédiaire (3/5)

**Place dans mon profil :** Le full-stack est au cœur de mon quotidien. Il me permet de comprendre les enjeux front-end, back-end et métier et d’opérer comme un vecteur naturel entre les différentes couches

**Recul sur la compétence :** Être full-stack ne signifie pas tout faire sans recul. Il est crucial d’intégrer et de respecter les responsabilités de chaque couche et de ne pas déplacer le métier là où il ne doit pas être..

## Évolution

**Objectifs à moyen terme :**  
Renforcer la séparation des responsabilités entre front, back et APIs externes, et approfondir les sujets de performance et de scalabilité.

**Axes de progression :**  
- Meilleure structuration des contrats d’échange (DTO, mapping)
- Approfondissement des patterns front/back
- Optimisation continue des flux de données
