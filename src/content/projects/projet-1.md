---
title: "Intégration d'un registre PDP"
description: "Intégration d’un registre PDP au sein du site EBP suite au rachat par CEGID"
image: "/images/projects/PDP.svg"
startDate: "2025-04"
endDate: "2025-08"
context: "Projet client réalisé en entreprise dans le cadre de l’harmonisation des outils EBP / CEGID"
technologies: ["C#", ".NET", "Blazor"]
relatedSkills: ["autonomie", "rigueur", "communication", "resolution-problemes"]
order: 1
---

## Présentation du projet

Ce projet consistait à intégrer un registre PDP (Plateforme de Dématérialisation Partenaire) au sein du site EBP, à la suite du rachat de l’entreprise par CEGID. L’objectif était d’exploiter le registre PDP déjà existant du côté de CEGID afin de permettre, pour chaque client EBP, l’identification de la plateforme de dématérialisation qui lui est associée, tout en facilitant l’affiliation de certains clients vers le PDP de CEGID. Il s’agissait donc autant d’un sujet technique d’intégration entre deux systèmes d’information que d’un sujet métier directement lié à la facturation électronique.

## Objectifs, contexte et enjeux

Dans le cadre de l’harmonisation des outils entre EBP et CEGID, il devenait nécessaire de disposer d’un registre PDP commun, capable de centraliser les informations clients liées à la facturation électronique. Sans cette centralisation, les deux entités auraient continué à gérer des référentiels séparés, avec le risque permanent d’incohérences et de doublons entre leurs données respectives.

L’objectif principal se déclinait en plusieurs volets complémentaires. Il fallait d’abord intégrer au site EBP une nouvelle page entièrement dédiée au registre PDP, afin d’offrir aux utilisateurs un point d’accès clair et identifiable. Cette page devait ensuite afficher un datagrid dynamique listant l’ensemble des clients ainsi que le PDP qui leur est associé, de manière lisible et exploitable au quotidien. Enfin, pour alimenter cet affichage, l’application devait dialoguer avec plusieurs API internes afin de récupérer et de consolider les données provenant des différents systèmes.

Les enjeux étaient à la hauteur de la sensibilité du sujet. La fiabilité des données affichées était primordiale, car une information erronée sur le PDP d’un client aurait eu des conséquences directes sur sa facturation électronique. À cela s’ajoutait une forte dépendance aux API internes : toute évolution de leur structure ou de leur comportement pouvait impacter le projet, ce qui imposait de rester en veille et en dialogue permanent avec les équipes qui les maintenaient.

## Les étapes – Ce que j'ai fait

**Phase de conception.** J’ai commencé par analyser en détail le besoin fonctionnel et les attentes métier, afin de bien cerner ce que les utilisateurs attendaient réellement du registre. J’ai ensuite pris le temps de comprendre les API existantes du côté backend, leur fonctionnement et les données qu’elles exposaient, avant de définir précisément la structure du datagrid et l’ensemble des données qu’il devait présenter.

**Phase de développement.** J’ai développé la page front-end en Blazor, en y intégrant un datagrid dynamique capable d’afficher et de mettre à jour les informations en fonction des données reçues. J’ai implémenté les appels aux différentes API backend nécessaires à la consolidation des données, puis ajusté au fur et à mesure les paramètres et les retours de ces API, en lien étroit avec l’équipe interne, afin d’obtenir exactement les informations attendues.

**Phase de tests et déploiement.** J’ai réalisé des tests fonctionnels et techniques pour vérifier la fiabilité de l’affichage et la cohérence des données, apporté les corrections et ajustements nécessaires avant la livraison, puis procédé à la mise en production dans les délais prévus.

## Les acteurs – Les interactions

Sur ce projet, je suis intervenu en tant que développeur fullstack, en prenant en charge aussi bien la partie front-end que l’intégration back-end. Je n’étais toutefois pas seul : une équipe interne assurait la gestion et l’évolution des API sur lesquelles reposait l’ensemble du projet.

La collaboration a été un facteur clé de réussite. J’ai maintenu des échanges réguliers avec cette équipe interne pour valider les routes, les paramètres et les retours des API, et nous nous sommes coordonnés pour anticiper ou intégrer les évolutions d’API rendues nécessaires par le projet. Cette communication continue a permis d’éviter les blocages et de garder une solution alignée avec la réalité des systèmes sous-jacents.

## Les résultats

Sur le plan personnel, ce projet a renforcé mon autonomie dans la conduite d’un projet client, de la conception jusqu’à la mise en production. Il a également consolidé ma rigueur dans la gestion des données et des intégrations d’API, un domaine où la moindre approximation peut avoir des répercussions concrètes pour les clients.

Pour l’entreprise, le projet a abouti à la mise à disposition d’un registre PDP pleinement opérationnel, directement exploitable par les utilisateurs. Il a surtout contribué à l’harmonisation des outils entre EBP et CEGID, en posant une première brique concrète de convergence entre les deux systèmes d’information.

## Les lendemains du projet

À court terme, le projet a été livré dans les temps et mis en production sans incident, ce qui constituait déjà un résultat satisfaisant compte tenu des dépendances techniques. Aujourd’hui, la solution est toujours utilisée et fonctionne correctement en production, ce qui confirme la solidité des choix réalisés.

## Mon regard critique

Parmi les points positifs, je retiens l’autonomie complète dont j’ai bénéficié sur la solution, aussi bien front-end que back-end, ainsi que la qualité de la collaboration avec l’équipe interne, sans laquelle l’intégration n’aurait pas pu aboutir aussi sereinement.

Avec du recul, j’identifie néanmoins des axes d’amélioration. J’aurais pu anticiper davantage les évolutions potentielles des API afin de rendre la solution encore plus résiliente aux changements, et automatiser plus largement les tests liés aux données affichées pour sécuriser durablement la fiabilité du registre.

Ce projet m’a finalement permis de consolider ma capacité à mener un projet en autonomie tout en collaborant efficacement avec d’autres équipes techniques, en restant rigoureux sur la qualité et la fiabilité des données exposées.
