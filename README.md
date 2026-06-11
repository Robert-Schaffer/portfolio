# Portfolio Platform

A full-stack, containerized portfolio and security operations platform built with Next.js, FastAPI, PostgreSQL, and Docker Compose.

## Purpose

This project demonstrates full-stack software engineering, Linux system administration, Dockerized deployment, PostgreSQL-backed application design, and cybersecurity-focused home lab operations.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- FastAPI
- PostgreSQL
- Docker Compose
- Rocky Linux home lab deployment target

## Planned Features

- Public portfolio
- Project database
- Contact form
- Home lab documentation
- Security engineering notes
- Vulnerability scan dashboard
- Authenticated admin panel
- Monitoring and observability

## MVP

The MVP for this portfolio platform is a Dockerized full-stack application that runs locally and includes:

### Public Pages

- Home
- About
- Projects
- Home Lab
- Cybersecurity
- Contact

### Backend API

- `GET /health`
- `GET /api/projects`
- `GET /api/skills`
- `POST /api/contact`

### Database

- PostgreSQL running in Docker
- Initial tables:
  - `projects`
  - `skills`
  - `contact_messages`

### Infrastructure

- Docker Compose for local development
- Separate frontend, backend, and database containers
- Environment variables loaded from `.env`

### Documentation

- `README.md`
- `docs/architecture.md`
- `docs/deployment.md`
- `docs/threat-model.md`
- `docs/roadmap.md`
