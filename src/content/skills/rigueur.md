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

Sur une application professionnelle **Blazor**, il n’existait aucune convention claire : les dossiers, les méthodes et les classes portaient des noms hétérogènes, tout comme les ressources **SQL** et **Azure**. Chacun nommait « à la main » ses propres fichiers et méthodes, selon ses habitudes. Cette absence de règles compliquait grandement la compréhension du projet, en particulier lors des modifications et de l’arrivée de nouveaux membres, qui devaient à chaque fois « deviner » la logique de nommage.

Ce manque de rigueur collective avait un coût concret : temps perdu à chercher où se trouvait telle logique, difficulté à anticiper les impacts d’un changement, et revues de code ralenties.

J’ai proposé de mettre en place des **conventions de nommage simples et faciles à respecter** pour les méthodes, les classes, les dossiers et les ressources, afin d’aboutir à une structure unifiée. L’enjeu était de trouver des règles suffisamment précises pour être utiles, mais assez légères pour être réellement adoptées au quotidien.

**Résultat :** Une amélioration immédiate de la lisibilité, une meilleure cohérence globale du code et un gain de temps notable lors des évolutions et des revues de code.

### Anecdote 2 – Qualité et fiabilité renforcées par les contrôles automatisés

Dans mon environnement de développement, la qualité repose sur une **discipline collective** : exécution des tests unitaires avant intégration, contrôles automatisés via les pipelines CI, et évaluation continue de la qualité du code. Ce cadre est essentiel, mais il ne suffit pas si chacun ne s’en empare pas au quotidien.

Pour ma part, j’ai intégré à ma routine deux réflexes concrets. D’abord, un **refactoring ciblé à chaque intervention** : dès que je touche à du code ancien, je cherche à le laisser un peu plus propre que je ne l’ai trouvé. Ensuite, le **traitement systématique des points remontés par les outils de qualité** (références nulles potentielles, incohérences, duplications), afin de dissiper les risques avant qu’ils ne deviennent des bugs en production.

Cette attention aux détails demande de la constance, mais elle évite l’accumulation silencieuse de dette technique et rend chaque modification plus sûre.

**Résultat :** Les modifications sont plus sûres, ont moins de risques de régresser, et la base de code s’améliore progressivement au fil des interventions plutôt que de se dégrader.

## Autocritique

**Degré de maîtrise :** Niveau intermédiaire avancée (4/5)

**Place dans mon profil :** La rigueur est une qualité centrale de mon profil, car elle a un impact direct sur la fiabilité et la maintenabilité d’un projet.

**Recul sur la compétence :** Être rigoureux ne doit pas signifier être perfectionniste à l’excès. L’équilibre parfait pour cette compétence est de rechercher la qualité uniquement pour ce qui compte vraiment: lisibilité, cohérence, stabilité et valeur métier.

## Évolution

**Objectifs à moyen terme :** Encore plus de rigueur avec moins d’effort (pratiques plus systématiques, tests, conventions, revues de code, documenter les décisions, préciser les impacts).

**Axes de progression :** Continuer à améliorer la qualité “au fil de l’eau”, en priorisant les zones à forte valeur où la rigueur apporte le plus de bénéfices.
