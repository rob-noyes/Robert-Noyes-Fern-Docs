# Plant Store Docs (Fern Take-Home)

This repository contains a sample documentation site built with Fern for a fictional Plant Store API.  
It demonstrates API documentation structure, styling, and customization using Fern Docs.

## Overview

The goal of this project was to:

- Set up a clean, navigable documentation site
- Document a simple REST API using OpenAPI
- Apply custom branding and styling
- Add light UX enhancements using custom CSS and JavaScript

The result is a lightweight, developer-friendly docs experience similar to what a production API might provide.

## Project Structure

fern/assets/            Logos and favicon  
  openapi/           OpenAPI specification (api.yml)  
  pages/             MDX documentation pages  
  docs.yml           Docs configuration (navigation, theme, assets)  
  generators.yml     Fern generators configuration  
  style.css          Custom site styling  
  custom.js          Small UI enhancement (floating action button)

## Running the Docs Locally

This project uses Fern CLI version 2.4.1.

### Prerequisites

- Node.js (nvm use 20 recommended)
- Fern CLI installed globally

Install the Fern CLI:

npm install -g fern-api@2.4.1

### Start the docs development server

From the project root directory, run:

fern docs dev

The documentation will be available at:

http://localhost:3000

## Styling and Customization

Styling is handled using:

- Theme configuration in docs.yml (colors, logos, favicon)
- Custom CSS in style.css for layout and UI refinement
- Custom JavaScript in custom.js for a floating action button

The floating action button respects light and dark mode and uses Fern theme variables to stay visually consistent.

## Notes and Tradeoffs

- Authentication was intentionally omitted to keep the example focused
- API examples prioritize clarity over completeness
- Styling choices favor subtle, modern UI patterns over heavy branding

## Deployment

This repository is intended for review via GitHub.  
Publishing the docs to a live Fern instance is optional and not required for evaluation.
