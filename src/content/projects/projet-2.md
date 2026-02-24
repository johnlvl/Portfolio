---
title: "Mise à jour de version majeure"
description: "Accompagnement technique et fonctionnel de la montée de version majeure d’un site revendeur/prescripteur"
image: "/images/projects/Version.png"
startDate: "2025-09"
endDate: "2025-12"
context: "Projet client réalisé en entreprise dans le cadre de l’évolution majeure d’un logiciel"
technologies: ["C#", ".NET", "Blazor", "Azure Table Storage", "SQL Server"]
relatedSkills: ["developpement-web", "autonomie", "rigueur", "communication", "travail-equipe"]
order: 2
---

## Présentation du projet

Ce projet s’inscrit dans le cadre de la montée de version majeure d’un logiciel de l’entreprise, via un site dédié aux revendeurs et prescripteurs pour la gestion de leurs clients.
L’objectif principal était d’informer les utilisateurs concernés de l’arrivée prochaine de cette version majeure, de manière ciblée et progressive, tout en leur permettant d’indiquer leur choix concernant cette montée de version.

## Objectifs, contexte et enjeux

**Contexte :**  
La montée de version majeure nécessitait une **communication claire, progressive et différenciée** selon le type de client (revendeur, prescripteur, administrateur), afin d'anticiper les impacts et de préparer les équipes internes à la suite du déploiement.

**Objectifs :**  
- Mettre à jour le front-end pour afficher des messages adaptés selon le profil client
- Gérer des **vagues de communication** basées sur des lots fournis par le métier
- Permettre aux clients d’indiquer leur choix concernant la montée de version

**Enjeux et risques :**  
- **Mauvaise compréhension** des messages par les clients
- **Cohérence** des données entre le front-end, le back-end et les systèmes internes

## Les étapes – Ce que j'ai fait

1. **Phase de conception**
    - Analyse du besoin fonctionnel et des règles métier
    - Identification des différents profils clients et scénarios d’affichage
    - Définition du modèle de données pour les lots de communication

2. **Phase de développement**
    - Mise à jour du front-end Blazor avec intégration de composants réutilisables
    - Gestion des messages dynamiques selon le type de client et son rôle
    - Création et alimentation d’une table Azure pour gérer les lots et les dates de communication
    - Développement du back-end pour exposer les données nécessaires au front
    - Implémentation d’un bouton permettant au client d’accepter ou refuser la montée de version
    - Communication avec des API internes pour alimenter des tables SQL utilisées par d’autres équipes

3. **Phase de tests et déploiement**
    - Tests fonctionnels sur les différents profils clients
    - Vérification des flux de données entre front, back et systèmes internes
    - Livraison et mise en production progressive

## Les acteurs – Les interactions

**Équipe projet :**
- Moi-même en tant que développeur fullstack et référent technique
- Équipes métier fournissant les lots de communication
- Autres équipes techniques consommatrices des données générées

**Collaboration :**
- Échanges réguliers avec le métier pour affiner les règles de communication
- Coordination avec les équipes internes utilisant les données issues du projet
- Rôle de référent pour répondre aux questions techniques liées au sujet

## Les résultats

**Pour moi :**
- Renforcement de mon rôle de référent technique
- Consolidation de mes compétences fullstack sur un projet transverse

**Pour l'entreprise :**  
- **Communication maîtrisée** et progressive de la montée de version majeure
- **Centralisation et exploitation** des choix clients par plusieurs équipes

## Les lendemains du projet

**Court terme :**  
Projet livré dans les délais et intégré au processus global de montée de version.

**Aujourd'hui :**  
La solution est utilisée pour piloter les communications et exploiter les choix clients dans les outils internes.

## Mon regard critique

**Points positifs :**  
- Bonne anticipation des besoins des différentes équipes
- Solution **robuste et adaptable** à plusieurs scénarios clients

**Axes d'amélioration :**  
- Automatiser davantage l'intégration des lots métier
- Renforcer les tests automatisés sur les règles d'affichage conditionnelles

**Leçons apprises :**
Ce projet m’a appris à gérer un sujet à fort impact transverse, en combinant rigueur, autonomie et communication technique pour garantir la cohérence entre front-end, back-end et systèmes internes.
