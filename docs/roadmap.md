# Roadmap

## MVP: Full-Stack Portfolio Foundation

The first milestone is a working, Dockerized full-stack portfolio application.

### Goals

- Build a professional public portfolio website.
- Demonstrate full-stack development using Next.js, FastAPI, and PostgreSQL.
- Run the application locally with Docker Compose.
- Prepare the application for deployment on a Rocky Linux home lab server.

### Included in MVP

#### Frontend

- Home page
- About page
- Projects page
- Home Lab page
- Cybersecurity page
- Contact page

#### Backend

- FastAPI application
- Health check endpoint
- Projects API endpoint
- Skills API endpoint
- Contact form endpoint

#### Database

- PostgreSQL container
- Projects table
- Skills table
- Contact messages table

#### Infrastructure

- Docker Compose setup
- Frontend container
- Backend container
- PostgreSQL container
- `.env.example` file

#### Documentation

- Architecture overview
- Deployment notes
- Initial threat model
- Project roadmap

### Not Included in MVP

The following features are planned for later phases:

- Authentication
- Admin dashboard
- Vulnerability scan dashboard
- Grafana/Prometheus monitoring
- Loki logging
- CI/CD pipeline
- Reverse proxy with TLS
- Keycloak or Authentik
- Kubernetes deployment
