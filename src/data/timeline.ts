import { TimelineItem } from '@/types/timeline';

export const educationData: TimelineItem[] = [
  {
    title: 'BEng Software Engineering',
    organization: "Queen's University Belfast",
    organizationUrl: 'https://www.qub.ac.uk/',
    date: '2025 – 2029',
    description:
      'Software Engineering degree with focus on backend systems, distributed systems, and algorithms.',
  },
  {
    title: 'BEngSoftware Engineering',
    organization: 'National Technical University of Ukraine "Igor Sikorsky KPI"',
    organizationUrl: 'https://kpi.ua/en',
    date: '2024 – 2028',
    description:
      'Completed first-year studies covering algorithms, Java, C/C++, databases, and computer systems fundamentals.',
  },
];

export const experienceData: TimelineItem[] = [
  {
    title: 'Backend Developer',
    organization: 'Zardan Systems',
    organizationUrl: 'https://zardansystems.com/en',
    date: 'October 2025 – May 2026',
    location: 'Remote',
    description:
      'Developed backend services for a credit processing platform using Java, Spring Boot, REST APIs, PostgreSQL, Redis, Apache Kafka, and Docker. Built Kafka-based asynchronous workflows for distributed system communication and event-driven processing. Implemented idempotent transaction handling to ensure data consistency across services. Designed REST and SOAP integrations with external providers, including secure XML-based communication. Implemented service-to-service authentication using Spring Security and mTLS. Contributed to backend architecture design, API development, and production issue debugging.',
  },
  {
    title: 'Software Developer',
    organization: 'Belfast Met & FIT (sponsored by Bank of America)',
    organizationUrl: 'https://www.belfastmet.ac.uk/digitalskills/',
    date: 'July 2025 – October 2025',
    location: 'Belfast, UK',
    description:
      'Intensive software engineering programme focused on Java, Spring Boot, SQL, relational databases, and REST API development. Built backend applications using Spring Boot, JPA/Hibernate, and PostgreSQL. Completed hands-on projects involving API design and database-driven applications. Achieved First Distinction for backend engineering performance.',
  },
  {
    title: 'Backend Developer (Intern / Junior)',
    organization: 'NetLS',
    organizationUrl: '',
    date: 'August 2024 – June 2025',
    location: 'Remote',
    description:
      'Developed backend services for loan processing systems including application, approval, and payment workflows using Java and Spring Boot. Implemented authentication and authorization using Spring Security, JWT, RBAC, and refresh tokens. Built PostgreSQL persistence layer using JPA/Hibernate and optimized SQL queries for transactional workloads. Introduced Kafka-based event processing and Redis caching for performance optimization. Containerized services using Docker and Docker Compose for consistent development environments. Wrote unit and integration tests using JUnit and Testcontainers. Participated in API design, system architecture discussions, and microservice integration.',
  },
  {
    title: 'Mathematics Tutor',
    organization: 'Online School StudentUA',
    organizationUrl: 'https://student.ua/',
    date: 'August 2024 – June 2025',
    location: 'Remote',
    description:
      'Explained complex technical and mathematical concepts, adapting communication for different learning needs.',
  },
];

// Legacy exports
export const commercialExperience: TimelineItem[] = [experienceData[0]];
export const otherExperience: TimelineItem[] = experienceData.slice(1);
export const workData: TimelineItem[] = experienceData;