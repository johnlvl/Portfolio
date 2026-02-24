---
title: "Portfolio professionnel moderne"
description: "Conception et développement d'un portfolio web moderne avec Astro, présentant compétences et réalisations professionnelles"
image: "/images/projects/Portfolio.png"
startDate: "2026-01"
endDate: "2026-02"
context: "Projet personnel visant à valoriser mon parcours et mes compétences techniques"
technologies: ["Astro", "TypeScript", "TailwindCSS", "Playwright", "GitHub Actions"]
relatedSkills: ["developpement-web", "architecture-logicielle", "autonomie", "rigueur", "apprentissage-continu"]
order: 5
---

## Présentation du projet

Ce projet consiste à concevoir et développer un **portfolio web professionnel** utilisant des technologies modernes. L'objectif principal est de présenter de manière claire et attractive mon parcours, mes compétences techniques et mes réalisations professionnelles, tout en démontrant ma maîtrise des **technologies front-end modernes** et des **bonnes pratiques** de développement web.

Le site est construit avec **Astro**, un framework moderne axé sur la performance, et déployé automatiquement sur **GitHub Pages** via une pipeline **CI/CD**.

## Objectifs, contexte et enjeux

**Contexte :**  
Dans un secteur où la **visibilité en ligne** est essentielle, disposer d'un portfolio moderne et performant constitue un atout majeur. Ce projet personnel répond à un besoin de valorisation professionnelle tout en servant de terrain d'expérimentation pour des **technologies émergentes**.

**Objectifs :**  
- Concevoir une architecture scalable avec un système de **Content Collections**
- Implémenter une navigation fluide avec **pages dynamiques** et **routing avancé**
- Assurer un **déploiement automatisé** sur GitHub Pages avec gestion du base path
- Garantir la **qualité** avec des tests E2E automatisés
- Optimiser les performances et le **SEO** pour un référencement optimal
- Créer une **expérience utilisateur** intuitive et responsive

**Enjeux et risques :**  
- Maîtriser une **nouvelle technologie** (Astro) avec ses spécificités
- Gérer la complexité du **routing avec base path** pour GitHub Pages
- Assurer la **cohérence des données** entre les collections (skills ↔ projects)
- Maintenir un code **maintenable** et **évolutif** dans la durée

## Les étapes – Ce que j'ai fait

1. **Phase de conception et architecture**
   - Analyse des besoins et définition de la **structure de navigation**
   - Conception du système de **Content Collections** (compétences et projets)
   - Mise en place de la **relation bidirectionnelle** entre skills et projects
   - Design de l'**architecture de fichiers** et des routes dynamiques

2. **Phase de développement initial**
   - Installation et configuration d'**Astro 5.16.6** avec TypeScript
   - Implémentation du système de **pages dynamiques** avec `[slug].astro`
   - Développement des composants réutilisables (Header, Footer, Breadcrumb, Navigation)
   - Intégration de **TailwindCSS** pour le styling responsive
   - Création du système de **Content Collections** avec validation de schéma

3. **Phase de développement avancé**
   - Implémentation de la **navigation entre contenus liés** (compétences ↔ projets)
   - Développement de la **pagination** et navigation prev/next
   - Création de grilles de visualisation dynamiques
   - Optimisation des **images** et des performances

4. **Phase de déploiement et résolution de problèmes**
   - Configuration du **déploiement GitHub Pages** avec GitHub Actions
   - Diagnostic et résolution du problème de **base path routing**
   - Création de l'utilitaire `withBase()` pour gérer dynamiquement les chemins

5. **Phase de tests et validation**
   - Mise en place de **Playwright** pour les tests E2E
   - Développement de **tests automatisés** couvrant desktop et mobile
   - Validation de la navigation, des métadonnées et des sections
   - Tests de régression sur tous les navigateurs

6. **Phase de contenu et finalisation**
   - Rédaction de **10 fiches compétences** (5 techniques + 5 humaines)
   - Création de **5 projets professionnels** avec structure complète
   - Optimisation **SEO** (meta descriptions, titres, alt texts)
   - Validation finale et ajustements

## Les acteurs – Les interactions

**Équipe projet :**  
- Moi-même en tant que **développeur fullstack** et **architecte** du projet

**Apprentissage et ressources :**  
- Documentation officielle **Astro** pour maîtriser les spécificités du framework
- Communauté open-source pour résoudre des problématiques techniques
- Analyse de portfolios existants pour identifier les **meilleures pratiques UX**

**Méthodologie :**  
- Approche **itérative** avec cycles de développement courts
- **Tests continus** pour valider chaque fonctionnalité
- **Git workflow** structuré (main → develop → feature branches)

## Les résultats

**Pour moi :**  
- Maîtrise approfondie d'**Astro** et de son écosystème
- Renforcement de mes compétences en **architecture front-end moderne**
- Approfondissement de la gestion du **routing complexe** et des base paths
- Consolidation de ma rigueur dans les **tests automatisés**
- Amélioration de mes compétences en **CI/CD** et déploiement automatisé
- Création d'un portfolio professionnel **valorisant** et **fonctionnel**

**Pour ma visibilité professionnelle :**  
- Site **performant** (100% static generation, temps de chargement optimal)
- **SEO optimisé** pour un bon référencement naturel
- Démonstration concrète de mes **compétences techniques**
- Support de présentation pour des entretiens professionnels
- Base **évolutive** pour ajouter de futurs projets

## Les lendemains du projet

**Court terme :**  
Ajout progressif de nouveaux projets au fur et à mesure de mes réalisations professionnelles.

**Aujourd'hui :**  
Portfolio **pleinement fonctionnel**, déployé en production sur GitHub Pages, avec **pipeline CI/CD opérationnelle** et **suite de tests automatisés** validant l'intégrité du contenu.

## Mon regard critique

**Points positifs :**  
- **Architecture solide** et scalable avec Content Collections
- **Performance excellente** grâce à la génération statique d'Astro
- **Tests automatisés robustes** garantissant la qualité
- **Solution élégante** au problème de base path avec `withBase()`
- **Code maintenable** avec TypeScript et structure modulaire
- **Pipeline CI/CD fiable** pour des déploiements sans friction

**Axes d'amélioration :**  
- Ajouter un **mode dark/light** pour l'accessibilité
- Implémenter un **système de recherche** pour naviguer dans les contenus
- Enrichir les **animations** et transitions pour plus de dynamisme
- Ajouter des **analytics** pour suivre les visites
- Créer une version **multilingue** (FR/EN)

**Leçons apprises :**  
Ce projet m'a permis de découvrir la puissance d'**Astro** pour créer des sites performants et m'a confronté à des problématiques réelles de **déploiement en production**. La résolution du problème de base path m'a appris l'importance de créer des **utilitaires réutilisables** et de **centraliser la logique complexe**. Enfin, l'approche **test-driven** avec Playwright a renforcé ma conviction que les tests automatisés sont essentiels pour maintenir un code de qualité dans la durée.
