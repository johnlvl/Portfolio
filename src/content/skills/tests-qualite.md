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

Sur une application **C# .NET / Blazor** avec un front et un back distincts, j’ai participé à la mise en place et à l’enrichissement de **tests unitaires** (xUnit) et de **tests front** (bUnit), en utilisant **Moq** pour isoler les dépendances et tester chaque composant de manière ciblée.

Ces tests ne restent pas théoriques : les **pipelines CI** les exécutent automatiquement à chaque Pull Request et **bloquent toute fusion** si un test échoue. Concrètement, il devient impossible d’intégrer une régression connue sans qu’elle soit signalée, ce qui déplace la détection des problèmes le plus tôt possible dans le cycle de développement.

Ce filet de sécurité change la manière de travailler : il permet d’aborder les refactorings et les montées de version avec beaucoup plus de sérénité, puisqu’un comportement cassé est immédiatement rendu visible.

**Résultat :** Grâce à cette couverture, les évolutions fonctionnelles concernées n’ont plus entraîné de régression en production, et les refactorings comme les montées de version se sont déroulés avec beaucoup plus de confiance. La couverture de tests s’est par ailleurs améliorée de manière progressive et continue, au fil des interventions.

### Anecdote 2 — Qualité continue via analyse statique et refactoring ciblé

En complément des tests, l’équipe utilise **SonarQube** pour détecter automatiquement les problèmes de qualité : références nulles potentielles, *code smells*, duplications. Ces alertes offrent une vision objective de l’état du code, mais elles n’ont de valeur que si elles sont réellement traitées.

Dans ce contexte, j’ai pris l’habitude, lors de mes interventions, de **corriger ou refactorer les portions de code existantes** signalées, plutôt que de les laisser s’accumuler. Cette approche « au fil de l’eau » permet d’améliorer la lisibilité et la robustesse sans mobiliser un chantier dédié.

J’ai également proposé et mis en place une **convention claire pour distinguer les DTOs** issus des tables **SQL** de ceux liés aux tables **Azure**. Cette distinction, en apparence mineure, levait une ambiguïté récurrente qui était source d’erreurs de compréhension et de manipulation des données.

**Résultat :** Les alertes de qualité ont progressivement diminué, le code est devenu plus lisible et plus cohérent, et l’ensemble des développeurs intervenant sur le projet ont gagné en clarté grâce à des conventions et un code plus explicites.

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
