---
title: "Système d’alertes clients multi-niveaux"
description: "Développement d’un module d’alertes dynamiques intégré à un site de gestion de clients revendeurs"
image: "/images/projects/Alerte.svg"
startDate: "2026-01"
endDate: "2026-07"
context: "Projet client visant à enrichir un site de gestion revendeur avec un système d’alertes personnalisées"
technologies: ["C#", ".NET", "Blazor"]
relatedSkills: ["developpement-web", "resolution-problemes", "rigueur", "autonomie", "architecture-logicielle"]
order: 4
---

## Présentation du projet

Ce projet consistait à concevoir et développer un module d’alertes intégré à un site de gestion de clients destiné aux revendeurs. L’objectif était de permettre aux utilisateurs de créer, gérer et suivre des alertes personnalisées, qu’il s’agisse d’un client spécifique ou de plusieurs clients simultanément, tout en assurant une intégration fluide avec l’architecture existante du site. L’enjeu consistait donc à enrichir un produit déjà en place sans en dégrader ni la cohérence ni la simplicité d’usage.

## Objectifs, contexte et enjeux

Le site existant permettait déjà d’afficher un grand nombre de clients au sein d’un datagrid, avec un accès à une page de détail pour chacun d’eux. Le besoin métier était d’ajouter un système d’alertes directement exploitable au sein de ces interfaces, sans alourdir l’expérience utilisateur ni complexifier des écrans déjà denses.

Plusieurs objectifs guidaient le développement. Il fallait proposer un système d’alertes par client offrant une gestion complète — création, modification et suppression —, mais aussi permettre la création d’alertes en masse pour plusieurs clients à la fois. La solution devait assurer une gestion dynamique des statuts, qu’une alerte soit en cours, terminée ou arrivée à échéance, et intégrer un système de notification par email au moment opportun.

Les enjeux techniques étaient réels. Il s’agissait de maintenir des performances optimales malgré le volume important de clients affichés, de garantir la cohérence des données entre le front-end et le back-end, et d’éviter toute complexification excessive de l’interface, afin que la nouvelle fonctionnalité reste naturelle à utiliser.

## Les étapes – Ce que j'ai fait

**Phase de conception.** J’ai analysé le besoin métier et défini les cas d’usage, en distinguant l’alerte unitaire de l’alerte multi-clients. J’ai conçu la structure des alertes — titre, description, date, heure et statut — puis réfléchi à l’intégration logique du module au sein des datagrids existants, afin qu’il s’inscrive naturellement dans l’architecture en place.

**Phase de développement.** J’ai développé un datagrid dynamique dans la page de détail client, comportant les colonnes titre, description, date, heure, statut et actions. J’ai mis en place les actions de modification et de suppression accessibles via des tooltips, ajouté un bouton de création d’alerte par client, et développé la gestion des statuts dynamiques. J’ai ensuite implémenté l’envoi automatique d’email à échéance, puis ajouté un système de sélection multi-clients par cases à cocher dans le datagrid principal. Enfin, j’ai créé les endpoints backend correspondants et assuré leur intégration via des appels API.

**Phase de tests et ajustements.** J’ai réalisé des tests fonctionnels sur les alertes unitaires comme groupées, vérifié la gestion des statuts et le bon déclenchement des notifications, et optimisé les appels API ainsi que l’affichage dynamique pour préserver la fluidité de l’ensemble.

## Les acteurs – Les interactions

Sur ce projet, je suis intervenu en tant que développeur fullstack, en prenant en charge l’ensemble de la fonctionnalité, du front-end jusqu’au back-end.

La collaboration s’est organisée autour de deux axes. J’ai échangé avec le métier pour affiner les règles de gestion des alertes et m’assurer que la fonctionnalité répondait bien aux usages attendus, et je me suis coordonné avec les équipes backend pour structurer les endpoints API de manière cohérente avec le reste du système.

## Les résultats

Sur le plan personnel, ce projet a renforcé mes compétences dans la conception de fonctionnalités dynamiques complexes, consolidé ma maîtrise des flux entre le front et le back, et approfondi ma rigueur dans la gestion des états et des statuts applicatifs, un aspect central sur ce type de module.

Pour l’entreprise, la solution a ajouté une fonctionnalité à forte valeur métier, permettant aux revendeurs une gestion plus proactive de leurs clients. Elle a également contribué à améliorer l’expérience utilisateur sur le site, en apportant un outil utile sans en alourdir la prise en main.

## Les lendemains du projet

À court terme, la fonctionnalité fait l’objet d’un déploiement progressif, accompagné d’ajustements réalisés en fonction des retours des utilisateurs. Aujourd’hui, le projet est encore en cours de développement, mais une base fonctionnelle est déjà intégrée au site et opérationnelle.

## Mon regard critique

Parmi les points positifs, je retiens une intégration cohérente au sein d’une architecture existante, ainsi qu’une fonctionnalité pensée pour être modulable et extensible, capable d’accueillir de futures évolutions.

Comme axes d’amélioration, il conviendra de mettre en place davantage de tests automatisés pour sécuriser la fonctionnalité dans la durée, et d’anticiper les évolutions futures telles que l’historique des alertes, la priorisation ou encore des filtres avancés.

Ce projet m’a permis de travailler sur une fonctionnalité transverse impactant plusieurs niveaux d’un site existant, en combinant réflexion UX, structuration des données et rigueur dans la gestion des états applicatifs.
