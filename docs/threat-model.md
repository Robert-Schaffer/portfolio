# Threat Model

## Assets

- Portfolio application source code
- PostgreSQL data
- Contact form submissions
- Home lab server
- Docker host

## Initial Risks

- Exposed admin interfaces
- Weak credentials
- Unpatched containers
- Publicly exposed database ports
- Secrets committed to Git

## Initial Controls

- Environment variables for secrets
- No public database exposure in production
- Reverse proxy with TLS
- Container image scanning
- Least-privilege service accounts where possible
