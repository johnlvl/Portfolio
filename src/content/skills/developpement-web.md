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

Dans une application métier en **C# .NET / Blazor**, une nouvelle version de l’API interne de l’entreprise a été publiée : elle proposait des routes mieux structurées, une nomenclature plus cohérente et une structure de données modifiée. L’application consommait encore l’ancienne version, il fallait donc migrer sans interrompre le service ni casser les écrans existants.

Plutôt que de tout basculer d’un coup, j’ai choisi une **migration progressive**, route par route, afin de limiter au maximum le risque de régression et de pouvoir tester chaque étape isolément. Cette approche m’a permis de garder l’application fonctionnelle tout au long du chantier.

En pratique, cela s’est traduit par la réalisation des actions suivantes :
- **Adapter les appels côté back-end** pour cibler les nouvelles routes exposées par l’API interne.
- **Modifier les contrôleurs** afin de transformer les nouvelles structures de données et de les exposer au front dans un format stable et cohérent.
- **Mettre à jour les appels côté front-end** pour consommer les données servies par le back, en vérifiant à chaque étape le comportement des écrans concernés.

Comme pour une montée de version, chaque lot était validé avant de passer au suivant, ce qui a permis de contenir l’impact du changement et de détecter rapidement les écarts éventuels.

**Résultat :** Une architecture plus cohérente entre les couches, une meilleure lisibilité des échanges front/back et une base saine, alignée sur la dernière version de l’API, pour les évolutions à venir.

### Anecdote 2 — Optimisation des performances via mise en cache

Sur certaines pages, le chargement de très longues **listes de clients** rendait l’application peu réactive : à chaque affichage, les données étaient récupérées intégralement depuis l’API interne, ce qui allongeait fortement le temps de réponse côté front et dégradait l’expérience utilisateur.

Après analyse, j’ai constaté que ces données évoluaient peu entre deux consultations : les récupérer systématiquement représentait donc un coût inutile. J’ai proposé et mis en place un **mécanisme de cache côté back-end**, en veillant à conserver des données cohérentes malgré la mise en cache. Ce cache permettait de :

- **Limiter les appels redondants** à l’API interne en réutilisant les données déjà récupérées.
- **Servir rapidement les données au front**, sans attendre un aller-retour complet vers l’API à chaque affichage.
- **Gérer correctement les opérations de mise à jour et de suppression**, afin que le cache reste synchronisé avec la réalité métier et n’expose jamais d’information obsolète.

Un soin particulier a été apporté à l’invalidation du cache : l’objectif était d’améliorer les performances sans jamais sacrifier la fraîcheur des données présentées à l’utilisateur.

**Résultat :** Les performances se sont sensiblement améliorées, les temps de chargement ont été fortement réduits et l’expérience utilisateur est devenue nettement plus fluide, sans compromis sur la cohérence des données.

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
