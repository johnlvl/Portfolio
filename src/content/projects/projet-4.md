---
title: "Système d’alertes clients multi-niveaux"
description: "Développement d’un module d’alertes dynamiques intégré à un site de gestion de clients revendeurs"
image: "/images/projects/Alerte.png"
startDate: "2026-01"
endDate: "En cours"
context: "Projet client visant à enrichir un site de gestion revendeur avec un système d’alertes personnalisées"
technologies: ["C#", ".NET", "Blazor"]
relatedSkills: ["developpement-web", "resolution-problemes", "rigueur", "autonomie", "architecture-logicielle"]
order: 4
---

## Présentation du projet

Ce projet consiste à concevoir et développer un module d’alertes intégré à un site de gestion de clients destiné aux revendeurs.
L’objectif est de permettre aux utilisateurs de créer, gérer et suivre des alertes personnalisées, soit pour un client spécifique, soit pour plusieurs clients simultanément, tout en assurant une intégration fluide avec l’architecture existante du site.

## Objectifs, contexte et enjeux

**Contexte :**  
Le site existant permet d'afficher un grand nombre de clients via un **datagrid** avec accès à une **page de détail** pour chacun d'eux. Le besoin métier était d'ajouter un système d'alertes directement exploitable dans ces interfaces, sans alourdir l'**expérience utilisateur**.

**Objectifs :**  
- Développer un système d'alertes par client avec **gestion complète** (création, modification, suppression)
- Permettre la création d'**alertes en masse** pour plusieurs clients
- Assurer une **gestion dynamique** des statuts (en cours, terminé, échéance atteinte)
- Intégrer un système de **notification par email** à échéance

**Enjeux et risques :**  
- Maintenir des **performances optimales** malgré le volume de clients affichés
- Garantir la **cohérence des données** entre front-end et back-end
- Éviter une **complexification excessive** de l'interface utilisateur

## Les étapes – Ce que j'ai fait

1. **Phase de conception**
   - Analyse du besoin métier et définition des cas d'usage (**alerte unitaire** et **multi-clients**)
   - Conception de la structure des alertes (titre, description, date, heure, statut)
   - Intégration logique du module dans les **datagrids existants**

2. **Phase de développement**
   - Développement d'un **datagrid dynamique** dans la page de détail client
   - Implémentation des colonnes : titre, description, date, heure, statut, actions
   - Mise en place des actions (modifier, supprimer) via **tooltip**
   - Ajout d'un bouton de création d'alerte par client
   - Développement de la **gestion des statuts dynamiques**
   - Implémentation de l'**envoi d'email automatique** à échéance
   - Ajout d'un système de **sélection multi-clients** via cases à cocher dans le datagrid principal
   - Création des **endpoints backend** et intégration via appels API

3. **Phase de tests et ajustements**
   - Tests fonctionnels sur alertes unitaires et groupées
   - Vérification de la gestion des statuts et des **notifications**
   - Optimisation des **appels API** et de l'affichage dynamique

## Les acteurs – Les interactions

**Équipe projet :**
- Moi-même en tant que développeur fullstack

**Collaboration :**
- Échanges avec le métier pour affiner les règles de gestion des alertes
- Coordination avec les équipes backend pour structurer les endpoints API

## Les résultats

**Pour moi :**  
- Renforcement de mes compétences en conception de **fonctionnalités dynamiques complexes**
- Consolidation de ma maîtrise des **flux front ↔ back**
- Approfondissement de ma rigueur dans la **gestion d'états** et de **statuts**

**Pour l'entreprise :**  
- Ajout d'une fonctionnalité à **forte valeur métier**
- Meilleure **gestion proactive** des clients par les revendeurs
- Amélioration de l'**expérience utilisateur** sur le site

## Les lendemains du projet

**Court terme :**  
Déploiement progressif de la fonctionnalité et ajustements selon retours utilisateurs.

**Aujourd'hui :**  
Projet en cours de développement avec une **base fonctionnelle** déjà intégrée au site.

## Mon regard critique

**Points positifs :**  
- **Intégration cohérente** dans une architecture existante
- Fonctionnalité **modulable** et **extensible**

**Axes d'amélioration :**  
- Mettre en place davantage de **tests automatisés**
- Anticiper les évolutions futures (**historique d'alertes**, **priorisation**, **filtres avancés**)

**Leçons apprises :**  
Ce projet m'a permis de travailler sur une **fonctionnalité transverse** impactant plusieurs niveaux d'un site existant, en combinant **réflexion UX**, **structuration des données** et **rigueur** dans la gestion des **états applicatifs**.
