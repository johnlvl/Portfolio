---
title: "Mise à jour de version majeure"
description: "Accompagnement technique et fonctionnel de la montée de version majeure d’un site revendeur/prescripteur"
image: "/images/projects/Version.svg"
startDate: "2025-09"
endDate: "2025-12"
context: "Projet client réalisé en entreprise dans le cadre de l’évolution majeure d’un logiciel"
technologies: ["C#", ".NET", "Blazor", "Azure Table Storage", "SQL Server"]
relatedSkills: ["developpement-web", "autonomie", "rigueur", "communication", "travail-equipe", "tests-qualite"]
order: 2
---

## Présentation du projet

Ce projet s’inscrivait dans le cadre de la montée de version majeure d’un logiciel de l’entreprise, à travers un site dédié aux revendeurs et aux prescripteurs pour la gestion de leurs clients. L’objectif principal était d’informer les utilisateurs concernés de l’arrivée prochaine de cette nouvelle version, de manière ciblée et progressive, tout en leur offrant la possibilité d’indiquer leur choix quant à cette montée de version. Il ne s’agissait donc pas seulement d’un développement technique, mais aussi d’un véritable accompagnement au changement, où la manière de communiquer comptait autant que la fonctionnalité elle-même.

## Objectifs, contexte et enjeux

La montée de version majeure nécessitait une communication claire, progressive et différenciée selon le type de client — revendeur, prescripteur ou administrateur —, afin d’anticiper les impacts et de préparer les équipes internes aux étapes suivantes du déploiement. Une communication uniforme aurait risqué de noyer les messages importants ou de créer de la confusion chez des utilisateurs aux besoins pourtant très différents.

Concrètement, il fallait mettre à jour le front-end pour afficher des messages adaptés au profil de chaque client, gérer des vagues de communication successives reposant sur des lots fournis par le métier, et permettre à chaque client d’exprimer son choix concernant la montée de version. Cette logique de vagues visait à diffuser l’information de façon maîtrisée et échelonnée, plutôt que d’un seul bloc difficile à absorber.

Les principaux enjeux tenaient d’une part au risque de mauvaise compréhension des messages par les clients, qui aurait pu générer des inquiétudes ou des demandes de support inutiles, et d’autre part à la cohérence des données entre le front-end, le back-end et les différents systèmes internes qui exploitaient ensuite ces informations.

## Les étapes – Ce que j'ai fait

**Phase de conception.** J’ai analysé le besoin fonctionnel et les règles métier associées, puis identifié les différents profils clients et les scénarios d’affichage correspondants. J’ai ensuite défini le modèle de données destiné à gérer les lots de communication, en veillant à ce qu’il puisse évoluer au fil des vagues successives.

**Phase de développement.** J’ai mis à jour le front-end Blazor en intégrant des composants réutilisables, et développé la gestion des messages dynamiques en fonction du type de client et de son rôle. J’ai créé et alimenté une table Azure pour gérer les lots et les dates de communication, puis développé la partie back-end chargée d’exposer les données nécessaires au front. J’ai également implémenté un bouton permettant à chaque client d’accepter ou de refuser la montée de version, et mis en place la communication avec des API internes afin d’alimenter des tables SQL utilisées par d’autres équipes.

**Phase de tests et déploiement.** J’ai mené des tests fonctionnels sur les différents profils clients, vérifié les flux de données entre le front, le back et les systèmes internes, puis assuré la livraison et une mise en production progressive, cohérente avec la logique de vagues du projet.

## Les acteurs – Les interactions

Sur ce projet, j’ai occupé le rôle de développeur fullstack et de référent technique. J’ai travaillé avec les équipes métier, qui fournissaient les lots de communication, ainsi qu’avec d’autres équipes techniques qui consommaient ensuite les données générées par la solution.

Cette configuration transverse impliquait beaucoup de coordination. J’échangeais régulièrement avec le métier pour affiner les règles de communication, je me coordonnais avec les équipes internes qui exploitaient les données issues du projet, et j’assurais un rôle de référent en répondant aux questions techniques liées au sujet. Ce positionnement m’a naturellement amené à faire le lien entre des interlocuteurs aux préoccupations différentes.

## Les résultats

Sur le plan personnel, ce projet a renforcé mon rôle de référent technique et consolidé mes compétences fullstack sur un projet réellement transverse, touchant à la fois au front, au back, au stockage Azure et aux bases SQL partagées.

Pour l’entreprise, la solution a permis une communication maîtrisée et progressive de la montée de version majeure, en limitant nettement les risques de confusion. Elle a également offert une centralisation et une exploitation des choix clients par plusieurs équipes, faisant de ces informations une ressource réutilisable au-delà du seul périmètre initial.

## Les lendemains du projet

À court terme, le projet a été livré dans les délais et intégré au processus global de montée de version. Aujourd’hui, la solution est utilisée pour piloter les communications et exploiter les choix des clients dans les outils internes, ce qui prolonge son utilité bien après la phase de développement.

## Mon regard critique

Parmi les points positifs, je retiens une bonne anticipation des besoins des différentes équipes et une solution robuste et adaptable à plusieurs scénarios clients, qui a su absorber la diversité des profils et des messages.

Comme axes d’amélioration, il serait pertinent d’automatiser davantage l’intégration des lots métier, aujourd’hui encore partiellement manuelle, et de renforcer les tests automatisés sur les règles d’affichage conditionnelles, particulièrement nombreuses sur ce type de sujet.

Ce projet m’a appris à gérer un sujet à fort impact transverse, en combinant rigueur, autonomie et communication technique pour garantir la cohérence entre le front-end, le back-end et les systèmes internes.
