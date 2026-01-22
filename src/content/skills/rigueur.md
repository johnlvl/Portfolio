---
title: "Rigueur et attention aux détails"
description: "Produire un code propre, testé et maintenable avec une attention constante à la qualité"
category: "humaine"
level: 4
icon: "🎯"
order: 10
relatedProjects: []
---

## Définition et contexte

La rigueur et l’attention aux détails consistent à produire un travail fiable, consistant et reproductible, en portant autant d’attention à la qualité du code qu’à la clarté des choix techniques. Dans un cadre logiciel, il s’agit donc du respect des conventions, de la connaissance des impacts d’un changement, de la prévention des erreurs et de la volonté de trouver des solutions maintenables

## Éléments de preuve

### Anecdote 1 – Mise en place de conventions pour améliorer la lisibilité

Lors de l’utilisation d’une application professionnelle Blazor, il n’y avait pas de conventions claires: les dossiers, les méthodes et les classes avaient des noms différents, ainsi que les ressources SQL et Azure – tout le monde nommait “à la main” ses propres fichiers et méthodes. Cela a grandement compliqué la compréhension du projet, en particulier lors des changements et de l’ajout de nouveaux membres.

J’ai proposé de mettre en place des conventions de nommage simples à respecter pour toutes les méthodes et dossiers, ce qui a conduit à la création d’une structure unifiée et modérée du cadre de code.

**Résultat :** Une amélioration immédiate de la lisibilité, une meilleure cohérence globale et un gain de temps lors des évolutions et des revues de code.

### Anecdote 2 – Qualité et fiabilité renforcées par les contrôles automatisés

Dans mon environnement de développement, la qualité est améliorée par une discipline collective, à savoir l’exécution des tests unitaires avant d’intégrer, les contrôles via pipeline, et l’évaluation continue de la qualité. Pour ma part, j’ai intègré dans ma routine le besoin d’un refactoring à chaque modification dès que je m’attaque à du code plus ancien, et la suppression des points signalés par les outils de qualité pour dissiper les risques potentiels, comme les références nulles, les incohérences, les duplications, etc..

**Résultat :** Les modifications qui sont faites sont plus sûres, ont moins de chances de régresser, et s’améliorent avec le temps.

## Autocritique

**Degré de maîtrise :** Niveau intermédiaire avancée (4/5)

**Place dans mon profil :** La rigueur est une qualité centrale de mon profil, car elle a un impact direct sur la fiabilité et la maintenabilité d’un projet.

**Recul sur la compétence :** Être rigoureux ne doit pas signifier être perfectionniste à l’excès. L’équilibre parfait pour cette compétence est de rechercher la qualité uniquement pour ce qui compte vraiment: lisibilité, cohérence, stabilité et valeur métier.

## Évolution

**Objectifs à moyen terme :** Encore plus de rigueur avec moins d’effort (pratiques plus systématiques, tests, conventions, revues de code, documenter les décisions, préciser les impacts).

**Axes de progression :** Continuer à améliorer la qualité “au fil de l’eau”, en priorisant les zones à forte valeur où la rigueur apporte le plus de bénéfices.
