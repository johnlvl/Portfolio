---
title: "Portfolio professionnel moderne"
description: "Conception et développement d'un portfolio web moderne avec Astro, présentant compétences et réalisations professionnelles"
image: "/images/projects/Portfolio.svg"
startDate: "2026-01"
endDate: "2026-02"
context: "Projet personnel visant à valoriser mon parcours et mes compétences techniques"
technologies: ["Astro", "TypeScript", "TailwindCSS", "Playwright", "GitHub Actions"]
relatedSkills: ["developpement-web", "architecture-logicielle", "autonomie", "rigueur", "apprentissage-continu", "devops", "tests-qualite"]
order: 5
---

## Présentation du projet

Ce projet consistait à concevoir et développer un portfolio web professionnel en s’appuyant sur des technologies modernes. L’objectif principal était de présenter de manière claire et attractive mon parcours, mes compétences techniques et mes réalisations professionnelles, tout en démontrant ma maîtrise des technologies front-end actuelles et des bonnes pratiques de développement web. Le portfolio se voulait ainsi à la fois un support de présentation et une preuve concrète de savoir-faire.

Le site est construit avec Astro, un framework moderne axé sur la performance, et déployé automatiquement sur GitHub Pages au moyen d’une pipeline CI/CD. Ce choix permettait d’obtenir un site rapide, léger et facile à maintenir dans le temps.

## Objectifs, contexte et enjeux

Dans un secteur où la visibilité en ligne est essentielle, disposer d’un portfolio moderne et performant constitue un véritable atout. Ce projet personnel répondait ainsi à un besoin de valorisation professionnelle, tout en me servant de terrain d’expérimentation pour des technologies que je souhaitais approfondir.

Les objectifs étaient nombreux et complémentaires. Je souhaitais concevoir une architecture évolutive reposant sur un système de Content Collections, mettre en place une navigation fluide avec des pages dynamiques et un routing avancé, et assurer un déploiement automatisé sur GitHub Pages incluant la gestion du base path. Je voulais également garantir la qualité grâce à des tests end-to-end automatisés, optimiser les performances et le référencement naturel, et proposer une expérience utilisateur intuitive et responsive.

Ces ambitions s’accompagnaient de plusieurs enjeux. Il fallait maîtriser une nouvelle technologie, Astro, avec ses spécificités propres, gérer la complexité du routing avec un base path adapté à GitHub Pages, assurer la cohérence des données entre les collections de compétences et de projets, et maintenir un code à la fois maintenable et évolutif sur le long terme.

## Les étapes – Ce que j'ai fait

**Phase de conception et architecture.** J’ai analysé les besoins et défini la structure de navigation du site, avant de concevoir le système de Content Collections pour les compétences et les projets. J’ai mis en place la relation bidirectionnelle entre ces deux collections et défini l’architecture des fichiers ainsi que les routes dynamiques.

**Phase de développement initial.** J’ai installé et configuré Astro avec TypeScript, puis implémenté le système de pages dynamiques reposant sur `[slug].astro`. J’ai développé les composants réutilisables (en-tête, pied de page, fil d’Ariane, navigation), intégré TailwindCSS pour un style responsive, et mis en place le système de Content Collections avec validation de schéma afin de fiabiliser le contenu.

**Phase de développement avancé.** J’ai implémenté la navigation entre contenus liés, permettant de circuler entre compétences et projets, développé la pagination et la navigation précédent/suivant, créé des grilles de visualisation dynamiques et optimisé les images et les performances.

**Phase de déploiement et résolution de problèmes.** J’ai configuré le déploiement sur GitHub Pages à l’aide de GitHub Actions, puis diagnostiqué et résolu un problème de routing lié au base path. Cette résolution m’a conduit à créer un utilitaire `withBase()` pour gérer dynamiquement l’ensemble des chemins de l’application.

**Phase de tests et validation.** J’ai mis en place Playwright pour les tests end-to-end, développé des tests automatisés couvrant aussi bien le desktop que le mobile, et validé la navigation, les métadonnées et les différentes sections. J’ai également réalisé des tests de régression sur les principaux navigateurs.

**Phase de contenu et finalisation.** J’ai rédigé dix fiches de compétences, réparties entre cinq compétences techniques et cinq compétences humaines, créé cinq projets professionnels dotés d’une structure complète, optimisé le référencement (méta-descriptions, titres, textes alternatifs), puis procédé à la validation finale et aux derniers ajustements.

## Les acteurs – Les interactions

Ce projet personnel a été mené intégralement par moi-même, à la fois comme développeur fullstack et comme architecte de la solution. Cette autonomie complète m’a laissé la responsabilité de l’ensemble des décisions, des choix techniques jusqu’au contenu éditorial.

Je me suis appuyé sur plusieurs ressources pour progresser : la documentation officielle d’Astro afin de maîtriser les spécificités du framework, la communauté open-source pour résoudre certaines problématiques techniques, et l’analyse de portfolios existants pour identifier les meilleures pratiques en matière d’expérience utilisateur. J’ai adopté une méthodologie itérative, faite de cycles de développement courts, de tests continus pour valider chaque fonctionnalité, et d’un workflow Git structuré organisé autour des branches main, develop et feature.

## Les résultats

Sur le plan personnel, ce projet m’a permis d’acquérir une maîtrise approfondie d’Astro et de son écosystème, de renforcer mes compétences en architecture front-end moderne, et d’approfondir la gestion du routing complexe et des base paths. Il a également consolidé ma rigueur dans les tests automatisés et amélioré mes compétences en CI/CD et en déploiement automatisé, tout en aboutissant à un portfolio professionnel valorisant et pleinement fonctionnel.

Pour ma visibilité professionnelle, le résultat est un site performant, entièrement généré en statique et donc très rapide à charger, optimisé pour le référencement naturel. Il constitue une démonstration concrète de mes compétences techniques, un support utile lors d’entretiens professionnels, et une base évolutive à laquelle je pourrai ajouter mes futurs projets.

## Les lendemains du projet

À court terme, je prévois d’ajouter progressivement de nouveaux projets au fur et à mesure de mes réalisations professionnelles. Aujourd’hui, le portfolio est pleinement fonctionnel et déployé en production sur GitHub Pages, avec une pipeline CI/CD opérationnelle et une suite de tests automatisés qui valident l’intégrité du contenu.

## Mon regard critique

Parmi les points positifs, je retiens une architecture solide et évolutive reposant sur les Content Collections, une performance excellente grâce à la génération statique d’Astro, des tests automatisés robustes garantissant la qualité, une solution élégante au problème de base path grâce à `withBase()`, un code maintenable structuré avec TypeScript, et une pipeline CI/CD fiable assurant des déploiements sans friction.

Plusieurs axes d’amélioration restent envisageables. Je pourrais ajouter un mode sombre pour renforcer l’accessibilité, implémenter un système de recherche pour naviguer plus facilement dans les contenus, enrichir les animations et les transitions pour plus de dynamisme, intégrer des outils d’analyse pour suivre les visites, et proposer une version multilingue français/anglais.

Ce projet m’a permis de découvrir la puissance d’Astro pour créer des sites performants et m’a confronté à des problématiques réelles de déploiement en production. La résolution du problème de base path m’a rappelé l’importance de créer des utilitaires réutilisables et de centraliser la logique complexe. Enfin, l’approche orientée tests avec Playwright a renforcé ma conviction que les tests automatisés sont essentiels pour maintenir un code de qualité dans la durée.
