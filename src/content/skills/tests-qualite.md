---
title: "Tests et qualité logicielle"
description: "Garantir la fiabilité et la robustesse des applications par des tests rigoureux"
category: "technique"
level: 3
icon: "✅"
order: 3
relatedProjects: []
---

## Définition et contexte

Les tests et la qualité logicielle constituent un socle indispensable pour garantir la fiabilité, la maintenabilité et l’évolutivité d’une application.  
Ils permettent de sécuriser les évolutions, de prévenir les régressions et d’instaurer une base de confiance dans le cycle de développement, en particulier sur des applications volumineuses et amenées à évoluer dans le temps.

## Éléments de preuve

### Anecdote 1 — Sécurisation des évolutions via les tests automatisés

Sur une application **C# .NET / Blazor** avec un front et un back distincts, j’ai participé à la mise en place et à l’enrichissement de **tests unitaires** (xUnit) et de **tests front** (bUnit), avec utilisation de **Moq** pour isoler les dépendances.

Les pipelines CI exécutent automatiquement ces tests à chaque Pull Request, empêchant toute fusion si les tests ne sont pas validés.

**Résultat :**  
- Aucune régression en production liée à des évolutions fonctionnelles  
- Plus grande confiance lors des refactorings et des montées de version  
- Amélioration progressive de la couverture de tests

### Anecdote 2 — Qualité continue via analyse statique et refactoring ciblé

En complément des tests, l’équipe utilise **SonarQube** pour détecter les problèmes de qualité (null reference potentielles, code smells, duplications).  
Dans ce contexte, j’ai régulièrement corrigé ou refactoré des portions de code existantes lors de mes interventions, afin d’améliorer la lisibilité et la robustesse.

J’ai également proposé et mis en place une **convention claire** pour distinguer les **DTOs issus des tables SQL** et ceux liés aux **tables Azure**, afin de limiter les ambiguïtés et les erreurs de compréhension.

**Résultat :**  
- Réduction des alertes de qualité  
- Code plus lisible et plus cohérent  
- Meilleure compréhension pour les développeurs intervenant sur le projet

## Autocritique

**Degré de maîtrise :** Niveau intermédiaire (3/5)

**Place dans mon profil :**  
La qualité logicielle est un pilier de ma manière de travailler. Je considère les tests comme un outil de sécurisation et non comme une contrainte, même si leur mise en place complète demande du temps et de la rigueur.

**Recul sur la compétence :**  
Les tests sont présents mais encore insuffisants. La dette de tests sur du code ancien reste un frein, et nécessite une approche pragmatique : enrichissement progressif, ciblé sur les zones à forte valeur métier.

## Évolution

**Objectifs à moyen terme :**  
- Renforcer la couverture de tests sur les parties critiques  
- Améliorer la testabilité du code via un design plus orienté SOLID  
- Mieux intégrer les tests dans les phases de conception

**Axes de progression :**  
- Approfondissement des tests d’intégration  
- Meilleure anticipation de la qualité dès la conception (testability by design)
