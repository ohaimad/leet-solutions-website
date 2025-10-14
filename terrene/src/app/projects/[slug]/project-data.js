const ProjectsData = {
    "pipeline": {
        title: "Pipeline",
        subtitle: "Développement d’une plateforme centralisée offrant une visibilité complète sur l’ensemble des opérations",
        description: "Développement d’une plateforme centralisée offrant une visibilité complète sur l’ensemble des opérations",
        fullDescription: `<strong>Objectifs de la plateforme</strong><br /><br />

<strong>1. Vue Globale Intégrée :</strong> Développement d'une plateforme centralisée offrant une visibilité complète sur l'ensemble des opérations, incluant :<br />
• <strong>Les laveries :</strong><br />
&nbsp;&nbsp;• Station principale : Point de contrôle de fonctionnement du pipeline principal.<br />
&nbsp;&nbsp;• Pipeline : Supervision des transferts des batchs de produits avec indicateurs en temps réel.<br />
&nbsp;&nbsp;• Station terminale : Interface pour la distribution finale vers les clients.<br />
Cette vue globale permettra une meilleure coordination des activités, une surveillance en temps réel, et une prise de décision plus efficace.<br /><br />
<strong>2. Planification Optimale End-to-End</strong><br /><br />

<strong>3. Détection et Prédiction des Situations Critiques :</strong> Intégration d'algorithmes d'analyse prédictive capables d'identifier et d'anticiper des situations à risque telles que :<br />
&nbsp;&nbsp;▪ <strong>Surcharge des stocks :</strong> Prévention des situations de stockage excessif.<br />
&nbsp;&nbsp;▪ <strong>Risques de rupture de stock :</strong> Anticipation des manques critiques pour éviter les ruptures.<br />
&nbsp;&nbsp;▪ <strong>Arrêts imprévus chez les clients :</strong> Détection précoce pour une intervention rapide.<br /><br />

Un système de notifications proactives est mis en place pour alerter les équipes concernées et faciliter une réponse rapide et appropriée.`,
        image: ["/projects/pipeline/img-1.png",
            "/projects/pipeline/img-2.png",
            "/projects/pipeline/img-3.png",
            "/projects/pipeline/img-4.png",
            "/projects/pipeline/img-5.png"
        ],
        entity: "SBU Mining",
        progress: "Production Ready",
        nextstep: "Rollout to additional OCP subsidiaries",
        category: "Enterprise Software"
    },

    "stockpile": {
        title: "Stockpile",
        subtitle: "Gestion des stocks",
        description: "Notre plateforme de gestion des stocks utilise une technologie basée sur l'IA pour suivre et mesurer avec précision les volumes de stocks dans les hangars et les stocks extérieures.",
        fullDescription: `<strong>Notre plateforme de gestion des stocks</strong> utilise une technologie basée sur l'IA pour suivre et mesurer avec précision les volumes de stocks dans les hangars et les stocks extérieurs.<br /><br />

Grâce à des caméras connectées, le système surveille en continu les niveaux de stock et détecte les changements au fil du temps.<br /><br />

Pour les <strong>stocks extérieurs</strong>, un drone piloté par IA capture de manière autonome des images aériennes, et la même IA traite ces images pour estimer le volume avec précision.<br />
À l'intérieur, des caméras fixes fournissent des informations en temps réel, assurant un suivi transparent des stocks. En automatisant les calculs de volume et en intégrant des analyses basées sur l'IA, la plateforme améliore l'efficacité, réduit les erreurs humaines et optimise la gestion des stocks.<br />
L’information sur le niveau des stocks est aussi partagée via <strong>API</strong> pour d’autres plateformes de planification et d’optimisation.<br /><br />

Pour certaines zones de stockage intérieures où les conditions ne sont pas favorables à l'utilisation de caméras (en raison de la poussière et du faible éclairage), nous utilisons la technologie <strong>LIDAR</strong> pour calculer les volumes des stocks.<br /><br />

<strong>Objectifs de la plateforme :</strong><br /><br />
• Vue globale sur le stock de l’ensemble des produits et qualités de roches ou fertilisants, permettant ainsi l’optimisation de la planification logistique ou de production.<br />
• Stock par mine, par laverie, par hangar ou parc (extérieur).<br />
• Tracker l’évolution des stocks dans le temps.<br />
• Représentation 3D des stocks scannés.<br />
• Cubatures disponibles en temps réel pour chaque stock.<br />
• Export des rapports sous format Excel et échange d’informations avec d’autres plateformes.`,

        image: ["/projects/PileTracker/img-1.png",
            "/projects/PileTracker/img-2.png",
            "/projects/PileTracker/img-3.png",
            "/projects/PileTracker/img-4.png",
            "/projects/PileTracker/img-5.png",
            "/projects/PileTracker/img-6.png",
        ],
        entity: "SBU Mining + SBU Manufacturing",
        progress: "MVP Developpé, Projet présenté au MD Mining",
        nextstep: "Démarrage Pilote à la mine Daoui à Khouribga + JPH à Jorf Lasfar",
        category: "Financial Management"
    },

    "convoyeur": {
        title: "Convoyeur",
        subtitle: "Système de gestion des convoyeurs",
        description: "La plateforme développée représente une solution complète et intégrée pour la gestion des convoyeurs, offrant des avantages significatifs en termes de coûts, de temps d'arrêt, de sécurité et d'efficacité.",
        fullDescription: `<strong>Ce projet</strong> vise à développer une plateforme complète et centralisée pour la gestion des convoyeurs au niveau des sites <strong>OCP</strong>.<br /><br />

La plateforme développée représente une solution complète et intégrée pour la gestion des convoyeurs, offrant des avantages significatifs en termes de coûts, de temps d'arrêt, de sécurité et d'efficacité.<br />
Elle permettra aux sites OCP d'optimiser leurs opérations de maintenance et de maximiser la durée de vie de leurs équipements de convoyage.<br /><br />

<strong>Fonctionnalités Clés :</strong><br /><br />

<strong>1. Inventaire Complet des Convoyeurs :</strong> La plateforme permettra de répertorier l'ensemble des convoyeurs présents sur le site.<br /><br />

<strong>2. Gestion des Coupons</strong><br /><br />

<strong>3. Suivi des Opérations de Maintenance et d'Inspection :</strong> La plateforme centralisera toutes les informations relatives aux opérations de maintenance et d'inspection :<br />
&nbsp;&nbsp;• Enregistrement des interventions (remplacement de coupons, vulcanisation, agrafage, etc.)<br />
&nbsp;&nbsp;• Suivi des dates et des coûts de chaque opération<br />
&nbsp;&nbsp;• Gestion des rapports d'inspection et des diagnostics<br />
&nbsp;&nbsp;• Planification des opérations de maintenance préventive<br /><br />

<strong>4. Inspection Automatisée par IA :</strong> L'un des aspects les plus innovants de cette plateforme est l'intégration de l'intelligence artificielle pour l'inspection des convoyeurs :<br />
&nbsp;&nbsp;• Utilisation de caméras installées au niveau des convoyeurs pour capturer des images<br />
&nbsp;&nbsp;• Analyse des images par des algorithmes d'IA pour détecter les anomalies :<br />
&nbsp;&nbsp;&nbsp;&nbsp;▪ <strong>Déchirures</strong><br />
&nbsp;&nbsp;&nbsp;&nbsp;▪ <strong>Usure (plus de 50%)</strong><br />
&nbsp;&nbsp;&nbsp;&nbsp;▪ <strong>Manque d'agrafes</strong><br />
&nbsp;&nbsp;&nbsp;&nbsp;▪ <strong>Autres défauts pertinents</strong><br /><br />
&nbsp;&nbsp;• Déclenchement automatique d'alertes en cas de détection d'anomalies.`,
        image: ["/projects/convyor/img-1.png",
            "/projects/convyor/img-2.png",
            "/projects/convyor/img-3.png",
            "/projects/convyor/img-4.png",
            "/projects/convyor/img-5.png",
            "/projects/convyor/img-6.png",
            "/projects/convyor/img-7.png"
        ],
        entity: "SBU Mining + SBU Manufacturing",
        progress: "MVP Developpé, Projet présenté au MD Mining + Pilote déployé à la mine Daoui à Khouribga",
        nextstep: "Démarrage Pilote sur l’ensemble des convoyeurs à la mine Daoui + convoyeurs JPH à Jorf Lasfar",
        category: "Computer Vision"
    },

    "portwise": {
        title: "Portwise",
        subtitle: "Port Traffic Management System",
        description: "Le projet Portwise vise à optimiser les opérations logistiques au port de Jorf Lasfar",
        fullDescription: `<strong>En développant un modèle de planification sophistiqué</strong>, Portwise vise à rationaliser le processus de chargement des matériaux depuis les halls de stockage (<strong>JFC-I, JFC-II, …</strong>) jusqu’aux navires, garantissant une utilisation efficace des ressources portuaires tout en respectant un large éventail de contraintes opérationnelles.<br /><br />

Ce projet combine la <strong>programmation par contraintes avancée</strong> avec les <strong>technologies du web sémantique</strong> pour offrir une solution flexible, fiable et performante pour la gestion de la logistique portuaire.<br /><br />

<strong>Objectifs :</strong><br /><br />
▪ Créer un système de planification efficace qui maximise le débit des matériaux chargés sur les navires.<br />
&nbsp;&nbsp;• Coordonner le mouvement des matériaux depuis les halls de stockage jusqu'aux navires à travers l'infrastructure du port.<br />
&nbsp;&nbsp;• Optimiser l'utilisation des ressources, telles que les convoyeurs, les unités de stockage et les équipements de déchargement.<br />
&nbsp;&nbsp;• S'assurer que toutes les opérations respectent les contraintes physiques, temporelles et logistiques.`,
        image: ["/projects/pipeline/img-1.png",
            "/projects/pipeline/img-2.png",
            "/projects/pipeline/img-3.png",
            "/projects/pipeline/img-4.png",
            "/projects/pipeline/img-5.png"
        ],
        entity: "SBU Manufacturing",
        progress: "MVP Developpé",
        nextstep: "Déploiement à Jorf Lasfar la semaine du 07 Juillet",
        category: "Transportation & Logistics"
    },

    "granulens": {
        title: "Granulens",
        subtitle: "AI-Powered Fertilizer Quality Control System",
        description: "Granulens est une solution qui combine un Hardware d’échantillonnage et une AI capable d’analyser la distribution granulométrique et les propriétés colorimétriques des engrais en temps réel.",
        fullDescription: `<strong>Ce projet</strong> vise à développer un <strong>système de surveillance automatisé et intelligent</strong> capable de :<br /><br />
• <strong>Analyser la distribution granulométrique</strong> et les <strong>propriétés colorimétriques</strong> des granulés d'engrais.<br />
• Mettre en œuvre un <strong>système de contrôle qualité automatisé</strong> garantissant que les granulés répondent de manière constante aux spécifications des clients.<br />
• Créer une <strong>solution de surveillance continue</strong> qui fournit un échantillonnage représentatif sur l'ensemble des lots de production.<br />
• Permettre des <strong>ajustements immédiats du processus de production</strong> grâce à des mécanismes de rétroaction rapides.`,
        image: ["/projects/granulens/img-1.png",
            "/projects/granulens/img-2.png",
            "/projects/granulens/img-3.png",
            "/projects/granulens/img-4.png",
            "/projects/granulens/img-5.png",
            "/projects/granulens/img-6.png"
        ],
        entity: "SBU Manufacturing",
        progress: "MVP Developpé",
        nextstep: "Déploiement à Jorf Lasfar",
        category: "AI & Computer Vision"
    },

    "med-chatbot": {
        title: "MED Chatbot",
        subtitle: "AI-Powered HR Assistant",
        description: "Sawalni, un LLM qui répond aux questions RH des employés.",
        fullDescription: "Nous concevons ce chatbot pour traiter la plupart des requêtes des employés liées aux RH. En automatisant le processus de réponse aux questions courantes, le chatbot réduira la charge de travail du personnel RH, leur permettant de se concentrer sur des tâches plus complexes. De plus, il augmentera la disponibilité des RH, offrant aux employés une ressource rapide et fiable pour accéder à l'information à tout moment. Cette solution rationalisera les opérations RH et améliorera la satisfaction globale des employés.",
        image: ["/projects/medbot/img-1.png",
            "/projects/medbot/img-2.png",
        ],
        entity: "SBU Mining",
        progress: "MVP Developpé et présenté au MD Mining + Application mobile publiée sur les stores Apple et Google.",
        nextstep: "Lancement officiel",
        category: "AI & Computer Vision"
    },

    "hydro": {
        title: "HYDRO",
        subtitle: "Hydrocyclone Optimization System",
        description: "DeepVisionStream is a modular DeepStream-based platform for real-time video analytics using custom models like YOLO, SAM, and D-Fine. It includes C++ parsers, Python bindings, and RabbitMQ to stream frames and metadata for easy integration with external apps.",
        fullDescription: `<strong>L'objectif</strong> est de développer un <strong>système d'optimisation basé sur l'IA</strong> qui :<br /><br />
• <strong>Maximise l'efficacité de séparation</strong> en optimisant les paramètres de l'hydrocyclone (d₅₀, pression, débit, etc.).<br />
• <strong>Réduit les pertes de matériaux</strong> en améliorant la classification des particules.<br />
• <strong>Minimise la consommation d'énergie</strong> grâce à des ajustements en temps réel.<br />
• <strong>Prévient les problèmes de colmatage et de turbulence</strong> en détectant et corrigeant rapidement les inefficacités.`,
        image: ["/projects/hydro/img-1.png",
            "/projects/hydro/img-2.png",
            "/projects/hydro/img-3.png",
        ],
        entity: "SBU Mining",
        progress: "MVP Développé + Beta tests à la laverie Beni Amir à Khouribga",
        nextstep: "Test Pilote à la laverie Beni Amir.",
        category: "AI & Computer Vision"
    },

    "mdf": {
        title: "MDF",
        subtitle: "Modular Daily Planner for Fertilizer Production",
        description: "Automatiser la planification quotidienne de la production pour maximiser l’efficacité opérationnelle et l’allocation des ressources.",
        fullDescription: `<strong>Approche :</strong><br /><br />
— Utilisation de la <strong>programmation par contraintes (CP)</strong> et d’<strong>algorithmes d’optimisation</strong> (Recherche opérationnelle).<br />
— Génération automatique de la matrice de production selon les capacités, priorités et stocks disponibles.<br /><br />

<strong>État d’Avancement :</strong><br /><br />
— La première version est <strong>finalisée</strong>.<br />
— Actuellement en <strong>phase de test beta</strong> avec des scénarios réels de production.<br />
— Les retours utilisateurs sont en cours de collecte pour améliorer la robustesse et l’ergonomie.<br /><br />

<strong>Résultats Attendus :</strong><br /><br />
— <strong>Réduction significative</strong> du temps de planification.<br />
— <strong>Réduction des erreurs humaines.</strong><br />
— <strong>Meilleure réactivité</strong> face aux imprévus.`,
        image: ["/projects/hydro/img-1.png",
            "/projects/hydro/img-2.png",
            "/projects/hydro/img-3.png",
        ],
        entity: "SBU Mining",
        progress: " MVP Développé + Beta Tests à la laverie Beni Amir",
        nextstep: "Lancement pilote sur d’autre sites",
        category: "AI & Computer Vision"
    },

    "mine-of-talents": {
        title: "Mine of Talents",
        subtitle: "Talent Intelligence Platform",
        description: "Provides unprecedented visibility into our human capital assets",
        fullDescription: `<strong>Strategic Value :</strong><br /><br />
• <strong>Talent Competitive Advantage :</strong> Provides unprecedented visibility into our human capital assets.<br />
• <strong>Strategic Workforce Planning :</strong> Enables data-driven decisions for succession planning and skills development.<br />
• <strong>Recruitment Optimization :</strong> Dramatically improves internal mobility identification and external candidate matching.<br />
• <strong>ROI on Human Capital :</strong> Maximizes return on training and development investments through precise skills mapping.<br /><br />

<strong>Current Capabilities :</strong><br /><br />
• Automated CV parsing and profile generation.<br />
• Sophisticated talent search with multi-criteria filtering.<br />
• Comprehensive skills, experience, and education tracking.<br />
• Real-time talent analytics and reporting.<br /><br />

<strong>Strategic Roadmap Features :</strong><br /><br />
• <strong>Career Coach AI :</strong> Personalized career development recommendations driving employee engagement and retention.<br />
• <strong>Perfect Team Builder :</strong> AI-powered team composition optimization for project success.<br />
• <strong>Predictive Analytics :</strong> Retention risk modeling and succession planning automation.<br />
• <strong>Skills Intelligence :</strong> Market-aligned competency gap analysis and development prioritization.`,
        image: ["/projects/minetalend/img-1.png",
            "/projects/minetalend/img-2.png",
            "/projects/minetalend/img-3.png",
            "/projects/minetalend/img-4.png",
            "/projects/minetalend/img-5.png",
            "/projects/minetalend/img-6.png",
            "/projects/minetalend/img-7.png",
            "/projects/minetalend/img-8.png",
        ],
        entity: "SBU Mining",
        progress: " MVP Développé",
        nextstep: "Déploiement à Jorf Lasfar",
        category: "AI & Computer Vision"
    },
};

// Helper function to get project by slug
export const getProjectBySlug = (slug) => {
    return ProjectsData[slug];
};

// Helper function to get all projects as array
export const getAllProjectsArray = () => {
    return Object.keys(ProjectsData).map(slug => ({
        ...ProjectsData[slug],
        slug: slug,
        id: slug
    }));
};

// Helper function to get all project slugs
export const getAllProjectSlugs = () => {
    return Object.keys(ProjectsData);
};

export default ProjectsData;