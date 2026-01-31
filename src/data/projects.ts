import { SkillsData, Project } from '@/types/projects';

export const skillsData: SkillsData = {
  languages: [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', url: 'https://www.java.com/' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', url: 'https://www.typescriptlang.org/' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', url: 'https://www.python.org/' },
  ],
  frameworks: [
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', url: 'https://spring.io/projects/spring-boot' },
    { name: 'REST APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', url: 'https://restfulapi.net/' },
    { name: 'JPA/Hibernate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg', url: 'https://hibernate.org/' },
    { name: 'NestJS', icon: 'https://www.svgrepo.com/show/354107/nestjs.svg', url: 'https://nestjs.com/' },
  ],
  databases: [
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', url: 'https://www.postgresql.org/' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', url: 'https://www.mysql.com/' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', url: 'https://redis.io/' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', url: 'https://www.docker.com/' },
    { name: 'AWS', icon: 'https://www.svgrepo.com/show/331300/aws.svg', url: 'https://aws.amazon.com/' },
    { name: 'Apache Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg', url: 'https://kafka.apache.org/' },
  ],
};

export const inProgressProjects: Project[] = [
  {
    title: 'CRM System',
    description: 'Order and client lifecycle management REST API with asynchronous task processing and caching.',
    image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Kafka', 'Docker'],
    link: 'https://github.com/RoMmMaNnN/First_CRM',
    status: 'in-progress',
    details: [
      'Implementing RESTful API for managing customer lifecycle and deal pipeline',
      'Integrating Redis for session caching and frequently accessed data optimization',
      'Building event-driven architecture with Kafka for asynchronous notification processing',
      'Designing relational schema with transactional integrity for multi-entity operations'
    ]
  },
  {
    title: 'Movie Matcher API',
    description: 'Content discovery REST API with personalized recommendation engine and external API integration.',
    image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API'],
    link: 'https://github.com/RoMmMaNnN/Movie-Matcher',
    status: 'planned',
    details: [
      'Building REST endpoints for user preference collection and content matching',
      'Integrating third-party movie database APIs with rate limiting and caching',
      'Implementing JWT-based authentication and user session management',
      'Designing normalized database schema for content metadata and user interactions'
    ]
  },
  {
    title: 'Pet Finder API',
    description: 'Animal shelter matching platform backend with geospatial queries and image handling.',
    image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    link: 'https://github.com/RoMmMaNnN/Pet-Finder',
    status: 'planned',
    details: [
      'Designing REST API for shelter management and adoption workflow',
      'Planning location-based search with PostGIS for proximity matching',
      'Implementing file upload service for pet photos with validation',
      'Structuring multi-tenant database design for shelter organizations'
    ]
  },
];

export const completedProjects: Project[] = [
  {
    title: 'LoanCompany',
    description: 'Financial institution loan management REST API with authentication, payment tracking, and admin workflows.',
    image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API', 'Docker', 'Kafka', 'Redis'],
    link: 'https://github.com/RoMmMaNnN/LoanCompany',
    status: 'completed',
    details: [
      'Built RESTful API for loan application processing with multi-stage approval workflow',
      'Implemented role-based access control (RBAC) with Spring Security and JWT',
      'Designed transactional payment processing system with ACID guarantees',
      'Integrated Redis for caching frequently accessed loan data and Kafka for event streaming',
      'Dockerized application with multi-container orchestration for PostgreSQL and Redis'
    ]
  },
  {
    title: 'NestJS REST API',
    description: 'Production-style REST API demonstrating authentication, database integration, and modern TypeScript backend patterns.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'REST API', 'JWT', 'Docker', 'TypeORM'],
    link: 'https://github.com/RoMmMaNnN/Nest-Learning',
    status: 'completed',
    details: [
      'Implemented authentication and authorization with JWT tokens and refresh token rotation',
      'Built CRUD endpoints with validation using DTOs and class-validator',
      'Integrated TypeORM with PostgreSQL for entity management and migrations',
      'Applied dependency injection pattern and modular architecture',
      'Configured Docker Compose for local development with hot-reload'
    ]
  },
];

export const supportingProjects: Project[] = [
  {
    title: 'Telegram Bot Automation',
    description: 'Event-driven notification and workflow automation bots with database persistence and external API integration.',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Python', 'Aiogram', 'SQLite', 'REST API'],
    link: 'https://github.com/RoMmMaNnN/TG-Bot',
    status: 'completed',
    details: [
      'Built asynchronous event-driven bots handling real-time user interactions',
      'Integrated third-party REST APIs for data collection and delivery',
      'Implemented SQLite persistence for user state and workflow tracking'
    ]
  },
  {
    title: 'Masyu Puzzle Solver',
    description: 'Algorithmic constraint satisfaction solver with optimized backtracking for complex logic puzzles.',
    image: 'https://www.gmpuzzles.com/images/blog/GM-MasyuEx.png',
    tags: ['C++', 'Algorithms'],
    link: 'https://github.com/RoMmMaNnN/Kyiv_University/tree/main/C%20%26%20C%2B%2B%20Basic%20Programing/Sem2/Masyu%20Puzzle%20-%20CourseWork',
    status: 'completed',
    details: [
      'Implemented constraint satisfaction algorithm with pruning optimizations',
      'Applied backtracking with heuristics to reduce search space'
    ]
  },
  {
    title: 'Belfast for Tourists',
    description: 'Web application showcasing tourist locations with interactive features.',
    image: 'https://images.ireland.com/media/Images/magazine/culture/winter-in-belfast/c9dbcef9195843efbec8826d472b235b.jpg',
    tags: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/RoMmMaNnN/Belfast-for-tourists',
    linkSecond: 'https://rommmannn.github.io/Belfast-for-tourists/',
    status: 'completed'
  },
  {
    title: 'Book Scraper',
    description: 'Python desktop application for searching and filtering books from online sources.',
    image: 'https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Python', 'BeautifulSoup', 'Tkinter', 'SQLite'],
    link: 'https://github.com/RoMmMaNnN/BookScraper',
    status: 'completed'
  },
  {
    title: 'Weather API App',
    description: 'CLI application for fetching weather information using REST APIs.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Python', 'REST API'],
    link: 'https://github.com/RoMmMaNnN/WeatherAPI-CLI',
    status: 'completed'
  },
  {
    title: 'Contact Manager',
    description: 'Full-featured contact management application with CRUD operations and data persistence.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Python', 'SQLite'],
    link: 'https://github.com/RoMmMaNnN/Contact-Manager',
    status: 'completed'
  },
  {
    title: 'Console Chess',
    description: 'Complete chess implementation with CLI interface and full rules validation.',
    image: 'https://images.pexels.com/photos/814133/pexels-photo-814133.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['C++'],
    link: 'https://github.com/RoMmMaNnN/Chess-CLI',
    status: 'completed'
  },
];
