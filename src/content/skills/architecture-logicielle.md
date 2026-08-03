---
title: "Architecture logicielle"
description: "Conception et structuration de systèmes logiciels robustes et évolutifs"
category: "technique"
level: 3
icon: "🏗️"
order: 1
relatedProjects: []
---

## Définition et contexte

L'architecture logicielle représente la structure fondamentale d'un système, définissant ses composants, leurs relations et les principes guidant sa conception. Dans un contexte professionnel moderne, cette compétence est essentielle pour garantir la **scalabilité**, la **maintenabilité** et la **performance** des applications.

## Éléments de preuve

### Anecdote 1 - Reprise et amélioration de l’architecture front-end d’une application Blazor

L’application était un projet d’entreprise reposant sur une architecture front-end en **Blazor** et back-end en **.NET**. Pour construire ses interfaces, elle s’appuyait en grande partie sur une bibliothèque de composants Blazor **interne**, rédigée quelques années plus tôt par d’anciens membres de l’équipe qui n’étaient plus présents pour la maintenir.

Au fil du temps, cette bibliothèque avait grossi de façon incontrôlée : elle accumulait des composants très spécifiques, des surcharges successives et beaucoup de logique implicite. Résultat, le code était devenu difficile à comprendre, à maintenir et surtout à faire évoluer. De simples modifications — un changement d’affichage, l’ajout d’un paramètre — pouvaient déclencher des **effets de bord inattendus** sur d’autres écrans, ce qui obligeait à tester manuellement de larges portions de l’application et ralentissait fortement les évolutions fonctionnelles.

À ces difficultés s’ajoutait l’**absence totale de conventions de nommage** : les dossiers, classes, méthodes, tables SQL et ressources Azure étaient nommés au cas par cas, selon les habitudes de chacun. Cette hétérogénéité rendait la lecture du projet et la prise en main par un nouvel arrivant particulièrement laborieuses.

Après avoir posé ces constats, j’ai adopté une démarche progressive et argumentée plutôt qu’une refonte brutale. J’ai proposé la réalisation d’un **POC** destiné à évaluer une librairie Blazor éprouvée et largement adoptée par la communauté, afin de mesurer concrètement le gain de maintenabilité et de garantir une meilleure pérennité technologique. En parallèle, j’ai proposé l’organisation d’un **brainstorming d’équipe** pour définir collectivement des conventions de nommage claires, partagées et faciles à appliquer au quotidien.

**Résultat :** L’introduction des conventions de nommage a immédiatement amélioré la lisibilité du code et la compréhension globale de l’architecture. Le POC a démontré qu’en standardisant la solution, les évolutions futures, la maintenance et l’intégration de nouveaux développeurs deviendraient nettement plus simples, tout en réduisant le risque d’enfermement dans une solution trop spécifique et vieillissante.


### Anecdote 2 – Clarification des responsabilités entre le back-end applicatif et l’API interne

Sur cette même application **.NET / Blazor**, le back-end applicatif ne se contentait pas de servir le front : il rejouait une partie de la logique métier déjà portée par une **API interne** de l’entreprise. Concrètement, certaines règles étaient dupliquées entre l’API et le back de l’application, et la frontière entre « ce qui relève du métier » et « ce qui relève de l’adaptation des données pour le front » n’était pas clairement posée.

Cette confusion des responsabilités posait un vrai problème d’architecture : toute évolution d’une règle métier devait être répercutée à deux endroits, les risques d’incohérence augmentaient, et le back applicatif devenait un point de complexité difficile à faire évoluer sereinement.

J’ai pris le temps d’analyser les flux de données et de cartographier ce qui devait réellement appartenir à chaque couche. J’ai ensuite proposé de **recentrer les responsabilités** : l’API interne reste la source de vérité du métier, tandis que le back-end applicatif se limite à son rôle d’**intermédiaire et d’adaptateur** (récupération, agrégation et mise en forme des données pour le front). Dans la foulée, j’ai proposé et mis en place une **convention claire pour distinguer les DTOs** issus des tables SQL de ceux liés aux tables Azure, afin de lever les ambiguïtés récurrentes lors des échanges de données.

**Résultat :** Une architecture plus lisible et plus saine, avec une séparation des responsabilités mieux respectée. Les évolutions futures de l’API interne sont devenues moins risquées, la duplication de logique métier a été réduite, et les échanges de données entre couches sont devenus plus explicites pour toute l’équipe.


## Autocritique

**Degré de maîtrise :** Niveau intermédiaire (3/5)


**Place dans mon profil :** L’architecture logicielle a son importance dans mon profil, dans la mesure où je conçois des systèmes qui impactent directement la qualité, la maintenabilité et l’évolutivité des solutions que je développe. Elle m’a permis d’acquérir la vue d’ensemble ainsi que le recul nécessaire pour prendre du recul et anticiper les conséquences de mes choix techniques.


**Recul sur la compétence :** Je mesure également l’importance des standards, conventions et choix technologiques pérennes. J’ai retenu de cette phase que l’architecture doit rester compréhensible, maîtrisable par l’ensemble de l’équipe, au risque de devenir un frein à l'évolution du projet. Une architecture inintelligible forme un mur difficile à franchir.


## Évolution

**Objectifs à moyen terme :** Améliorer mes connaissances de l’architecture logicielle avec une spécialisation plus approfondie des principes de Clean Architecture, la séparation des responsabilités, et les choix structurants pertinents pour des applications de taille moyenne à grande.


**Formations en cours :** Poursuivre une veille active sur les bonnes pratiques d’architecture logicielle dans l’écosystème .NET et adapter mes savoirs antérieurs à des projets réels, y compris des applications déjà en place, qui exigent des transformations graduées.
