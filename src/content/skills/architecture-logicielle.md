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

### Anecdote 1 - Reprise et amélioration de l’architecture front-end d’une application Blazor.

L’application consistait à un projet en entreprise se basant sur une architecture front-end en Blazor et back-end en.NET, pour cela, l’application utilisait en grande partie une bibliothèque Blazor modérément interne, rédigée par d’ancien membre de l’équipe.

La taille de la bibliothèque était devenue conséquente au fil du temps, rendait le code difficile à comprendre, à maintenir et à faire évoluer. De simples modifications pouvaient entraîner des effets de bord inattendus, ralentissant les évolutions fonctionnelles.

De plus, l’absence de conventions de nommage de dossiers, classe, méthode, base de données SQL, ressource Azure, a rendu la lecture et la prise en main encore plus compliquée.

Après avoir réalisé ces constats, j’ai proposé la réalisation d'un POC pour permettre de tester une librairie Blazor expérimentée et largement utilisée, qui va garantir une amélioration sur le plan de la maintenabilité ainsi que la pérennité sur le plan technologique. J’ai en parallèle proposé l’organisation d’un brainstorming pour définir ces conventions de nommage.

**Résultat :** L’introduction de conventions de nommage a immédiatement amélioré la lisibilité du code et la compréhension globale de l’architecture. Le POC a démontré que, en standardisant la solution, les évolutions futures seront plus faciles, la maintenance aussi, l’intégration de nouveaux développeurs également, avec un risque moins grand quant à l’enfermement dans une solution devenue trop spécifique et trop vieillissante.


### Anecdote 2

Non renseignée volontairement – compétence encore en consolidation


## Autocritique

**Degré de maîtrise :** Niveau intermédiaire (3/5)


**Place dans mon profil :** L’architecture logicielle a son importance dans mon profil, dans la mesure où je conçois des systèmes qui impactent directement la qualité, la maintenabilité et l’évolutivité des solutions que je développe. Elle m’a permis d’acquérir la vue d’ensemble ainsi que le recul nécessaire pour prendre du recul et anticiper les conséquences de mes choix techniques.


**Recul sur la compétence :** Je mesure également l’importance des standards, conventions et choix technologiques pérennes. J’ai retenu de cette phase que l’architecture doit rester compréhensible, maîtrisable par l’ensemble de l’équipe, au risque de devenir un frein à l'évolution du projet. Une architecture inintelligible forme un mur difficile à franchir.


## Évolution

**Objectifs à moyen terme :** Améliorer mes connaissances de l’architecture logicielle avec une spécialisation plus approfondie des principes de Clean Architecture, la séparation des responsabilités, et les choix structurants pertinents pour des applications de taille moyenne à grande.


**Formations en cours :** Poursuivre une veille active sur les bonnes pratiques d’architecture logicielle dans l’écosystème .NET et adapter mes savoirs antérieurs à des projets réels, y compris des applications déjà en place, qui exigent des transformations graduées.
