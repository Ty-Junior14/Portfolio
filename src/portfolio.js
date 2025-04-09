/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Portfolio de Junior",
  description:
    "Data scientist en formation à Akieni Academy, passionné par la création de solutions data de bout en bout, durables et évolutives, au service de systèmes sociaux et technologiques à impact. Je m’épanouis dans les environnements où les données sont utilisées non seulement pour générer des insights, mais aussi pour orienter des décisions concrètes et responsables. Je développe actuellement des compétences solides en Python, analyse de données, apprentissage automatique et visualisation.",
  og: {
    title: "Dieuveille Junior Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Dieuveille Junior",
  logo_name: "DieuveilleJunior",
  nickname: "Junior",
  subTitle:
    "Data scientist en formation à Akieni Academy, passionné par la création de solutions data de bout en bout, durables et évolutives, au service de systèmes sociaux et technologiques à impact. Je m’épanouis dans les environnements où les données sont utilisées non seulement pour générer des insights, mais aussi pour orienter des décisions concrètes et responsables. Je développe actuellement des compétences solides en Python, analyse de données, apprentissage automatique et visualisation.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/Ty-Junior14",
  githubProfile: "https://github.com/Ty-Junior14",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Ty-Junior14",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "www.linkedin.com/in/dieuveille-junior-wassongo-loussilaho-708930333",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "wassongojunior@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Initiation à Python pour explorer, structurer et visualiser des données simples",
        "⚡ Compréhension des étapes clés d’un projet data : collecte, traitement et analyse",
        "⚡ Intérêt croissant pour l’éthique des données et l’explicabilité des modèles",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "logos:pandas",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos:numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "logos:matplotlib",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "Linux",
          fontAwesomeClassname: "logos:linux-tux",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsft-excel",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "logos:github-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Utilisation des plateformes cloud pour déployer des applications simples",
        "⚡ Installation et configuration de machines virtuelles pour l’hébergement de services web",
        "⚡ Découverte des bases du déploiement de modèles d'apprentissage automatique en environnement cloud",
        "⚡ Apprentissage des processus de gestion et de synchronisation des données sur des serveurs cloud",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#336791",
          },
        },

        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/juniordieuveil",
    },
    {
      siteName: "Pluralsight",
      iconifyClassname: "simple-icons:pluralsight",
      style: {
        color: "#F24E1E",
      },
      profileLink: "https://www.pluralsight.com/profile/ton_nom_utilisateur",
    },
    {
      siteName: "Gitpod",
      iconifyClassname: "simple-icons:gitpod",
      style: {
        color: "#3E6F98",
      },
      profileLink: "https://gitpod.io/@Ty-Junior14",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Université Marien NGOUABI",
      subtitle: "Licence en Informatique",
      logo_path: "umng_logo.png",
      alt_name: "Université Marien NGOUABI",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ J'ai étudié des sujets fondamentaux en informatique tels que les structures de données, les algorithmes, les systèmes d'exploitation et les bases de données.",
        "⚡ En plus de cela, j'ai suivi des cours sur les technologies cloud, les bases de données, la virtualisation, ainsi que sur la mise en place d'infrastructures systèmes.",
        "⚡ J'ai participé à des projets pratiques sur des outils comme Docker, Kubernetes et OpenStack pour développer des compétences en gestion des infrastructures et en déploiement d'applications.",
      ],
      website_link: "https://parcoursinfo-cg.org/",
    },
    {
      title: "Akieni Academy",
      subtitle: "Formation en Python et Data Science",
      logo_path: "akieni_logo.png",
      alt_name: "Akieni Academy",
      duration: "2023",
      descriptions: [
        "⚡ Initiation et perfectionnement en Python pour le traitement de données, la manipulation de fichiers et l’analyse statistique.",
        "⚡ Utilisation de bibliothèques comme Pandas, Matplotlib et Scikit-learn pour des projets orientés data science.",
        "⚡ Réalisation de projets concrets pour développer une expertise pratique dans l’analyse de données et l’apprentissage automatique.",
      ],
      website_link: "https://www.akieni.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Amazon Cloud Practitioner",
      subtitle: "- AWS",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2024-04-09",
      alt_name: "AWS",
      color_code: "#FF9900",
    },
    {
      title: "Data Analysis with Python",
      subtitle: "- FreeCodeCamp",
      logo_path: "freecodecamp_logo.png",
      certificate_link:
        "https://freecodecamp.org/certification/fcced956d6e-59e1-4313-9497-39db9cb40bb0/data-analysis-with-python-v7",
      alt_name: "FreeCodeCamp",
      color_code: "#000000",
    },
    {
      title: "Data Visualization",
      subtitle: "- FreeCodeCamp",
      logo_path: "freecodecamp_logo.png",
      certificate_link:
        "https://freecodecamp.org/certification/fcced956d6e-59e1-4313-9497-39db9cb40bb0/data-visualization",
      alt_name: "FreeCodeCamp",
      color_code: "#000000",
    },
  ],
};

// Experience Page
const experience = {
  experiences: [
    {
      title: "Déploiement Kubernetes avec Minikube",
      description:
        "Administré des clusters Kubernetes sur Minikube pour automatiser le déploiement d'applications conteneurisées. Ce projet visait à garantir la scalabilité et la résilience des microservices en réponse à un besoin d’orchestration efficace des ressources.",
      technologies: ["Kubernetes", "Minikube", "Docker", "Microservices"],
      objectives: "Garantir la scalabilité et la résilience des microservices.",
    },
    {
      title:
        "Installation de Systèmes d'Exploitation & Maintenance Informatique",
      description:
        "Installé des systèmes d'exploitation (Windows, Linux, macOS) et réalisé des tâches de maintenance informatique, y compris le dépannage matériel et l’application de mises à jour. Ces activités répondaient au besoin d'assurer des systèmes fiables, sécurisés et à jour.",
      technologies: ["Windows", "Linux", "macOS", "Maintenance Informatique"],
      objectives: "Assurer des systèmes fiables, sécurisés et à jour.",
    },
    {
      title: "Déploiement d'Infrastructures sur Docker",
      description:
        "Mis en place des infrastructures basées sur Docker pour créer des environnements de développement isolés et reproductibles. Ce projet répondait à la nécessité de simplifier les processus de déploiement et de garantir des environnements flexibles et évolutifs.",
      technologies: [
        "Docker",
        "Conteneurisation",
        "Développement",
        "Déploiement",
      ],
      objectives:
        "Simplifier les processus de déploiement et garantir des environnements flexibles et évolutifs.",
    },
    {
      title: "Surveillance avec Prometheus et Grafana",
      description:
        "Implémenté une solution de surveillance avec Prometheus pour collecter les métriques des serveurs et Grafana pour les visualiser. Cette solution a été mise en place pour répondre au besoin de suivi en temps réel des performances et de détection proactive des problèmes.",
      technologies: ["Prometheus", "Grafana", "Surveillance", "Métriques"],
      objectives:
        "Suivi en temps réel des performances et détection proactive des problèmes.",
    },
    {
      title: "Gestion de Machines Virtuelles sur Ubuntu Server",
      description:
        "Installé et géré des machines virtuelles sur un serveur Ubuntu avec MicroStack afin de déployer des services cloud privés. Ce projet a été réalisé pour répondre à une demande croissante de ressources cloud évolutives dans le cadre d’un projet spécifique.",
      technologies: [
        "Ubuntu Server",
        "MicroStack",
        "Virtualisation",
        "Cloud privé",
      ],
      objectives:
        "Répondre à la demande croissante de ressources cloud évolutives.",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projets",
  description:
    "Mes projets utilisent une large variété d'outils technologiques de pointe. Mon expérience la plus enrichissante a été de créer des projets Data Science et de les déployer en tant qu'applications web utilisant une infrastructure cloud, principalement lors de mes certifications FreeCodeCamp.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Quelques-unes de mes publications sur LinkedIn.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "projet-deploiement-kubernetes",
      name: "Déploiement Kubernetes avec Minikube",
      createdAt: "2024-01-15T00:00:00Z",
      description:
        "Publication sur LinkedIn sur le déploiement et la gestion de clusters Kubernetes avec Minikube pour automatiser le déploiement d'applications conteneurisées.",
      url: "https://www.linkedin.com/",
    },
    {
      id: "surveillance-prometheus-grafana",
      name: "Surveillance avec Prometheus et Grafana",
      createdAt: "2024-02-10T00:00:00Z",
      description:
        "Publication sur LinkedIn concernant l'implémentation d'une solution de surveillance avec Prometheus pour collecter les métriques des serveurs et Grafana pour les visualiser.",
      url: "https://www.linkedin.com/",
    },
    {
      id: "docker-infrastructure",
      name: "Déploiement d'Infrastructures sur Docker",
      createdAt: "2024-03-05T00:00:00Z",
      description:
        "Publication sur LinkedIn sur le déploiement d'infrastructures basées sur Docker pour créer des environnements de développement isolés et reproductibles.",
      url: "https://www.linkedin.com/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contactez-moi",
    profile_image_path: "photo_profil.png",
    description:
      "Je suis disponible sur presque tous les réseaux sociaux. N'hésitez pas à m'envoyer un message, je réponds généralement sous 24 heures. Je peux vous aider avec les domaines suivants : Kubernetes, Docker, Cloud, et plus encore, dans le cadre de vos projets professionnels ou personnels.",
  },
  addressSection: {
    title: "Adresse",
    subtitle: "Makélékélé, Brazzaville, République du Congo",
    locality: "Brazzaville",
    country: "République du Congo",
    region: "Congo",
    postalCode: "N/A",
    streetAddress: "Ngali Pascal, Makélékélé",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/rCjH75sKr9cXSx7V6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
