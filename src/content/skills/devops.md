---
title: "DevOps et déploiement continu"
description: "Automatisation des processus de build, test et déploiement"
category: "technique"
level: 3
icon: "🚀"
order: 4
relatedProjects: []
---

## Définition et contexte

Automatiser et fiabiliser le cycle de vie des applications et s’assurer qu’intégré le code et ce jusqu’à ce qu’il soit déployé n’altère pas sa qualité, sa reproductibilité et la stabilité de l’environnement est l’essence du DevOps. Cette compétence se manifeste dans mon expérience, principalement par la mise en place de pipelines CI, l’automatisation des tests, la containerisation et la gestion de l’infrastructure des environnements, depuis les projets personnels jusqu’au cadre professionnel.

## Éléments de preuve

### Anecdote 1 – Mise en place de pipelines CI avec GitHub Actions

Sur plusieurs études de cas et projets personnels — dont ce **portfolio** — j’ai mis en place des pipelines **GitHub Actions** déclenchés automatiquement lors des Pull Requests et des merges. L’objectif était d’empêcher qu’un code non validé puisse être intégré à la branche principale.

Ces pipelines automatisent le **build** et l’exécution des **tests** à chaque changement, garantissant un socle de qualité minimal avant toute intégration. En pratique, une Pull Request dont le build échoue ou dont les tests ne passent pas ne peut pas être fusionnée, ce qui transforme la qualité en une contrainte automatique plutôt qu’en une vérification manuelle facilement oubliée.

Cette mise en place m’a amené à travailler la configuration des workflows (déclencheurs, étapes, gestion des dépendances et des caches) et à réfléchir à ce qui devait réellement bloquer une intégration.

**Résultat :** Cette automatisation a permis de détecter les régressions de manière précoce, avant même la revue humaine, et de rendre l’intégration continue nettement plus fiable et reproductible. Surtout, elle a ancré une discipline de qualité dès le développement, sans exiger d’effort supplémentaire au quotidien puisque les vérifications sont désormais systématiques et automatiques.

### Anecdote 2 – Containerisation avec Docker pour simplifier les environnements

Dans des études de cas full-stack, j’ai utilisé **Docker** pour encapsuler le front, le back et la base de données dans des **conteneurs distincts**, orchestrés ensemble. L’objectif était de rendre l’environnement d’exécution indépendant de la machine de développement.

Avant cette approche, le démarrage d’un projet supposait d’installer et de configurer manuellement chaque brique (runtime, base de données, variables), ce qui était source d’erreurs et de pertes de temps, surtout lorsqu’on changeait de poste ou qu’un nouvel arrivant rejoignait le projet. En décrivant l’environnement dans des fichiers de configuration, j’ai pu **standardiser** son exécution et rendre le lancement du projet reproductible en quelques commandes.

Ce travail m’a fait progresser sur la séparation des responsabilités entre conteneurs, la gestion des variables d’environnement et la simplification des phases de build et de lancement.

**Résultat :** Les environnements sont devenus reproductibles et identiques d’une machine à l’autre, ce qui a fait disparaître une grande partie des problèmes liés aux configurations locales. Le démarrage d’un projet est désormais rapide, y compris pour un nouveau contributeur qui n’a plus besoin de configurer manuellement chaque brique pour commencer à travailler.

## Autocritique

**Degré de maîtrise :** Niveau Débutant avancé (2/5)

**Place dans mon profil :** Le DevOps est pour moi une compétence de support essentielle, permettant de sécuriser et d’industrialiser le travail de développement.

**Recul sur la compétence :** Je suis aujourd’hui davantage acteur sur la CI et les environnements de projets personnels que sur les pipelines en entreprise, où j’interviens surtout comme utilisateur et interlocuteur technique. Cette distinction est assumée et reflète mon périmètre actuel.

## Évolution

**Objectifs à moyen terme :** 
- Approfondir la conception de pipelines CI/CD complets
- Monter en compétence sur les déploiements automatisés et la gestion d’infrastructure cloud

**Axes de progression :** 
- Me rapprocher des équipes DevOps en entreprise
- Consolider mes pratiques sur Docker, les secrets, les variables d’environnement et l’observabilité
