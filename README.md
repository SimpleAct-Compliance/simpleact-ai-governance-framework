# SimpleAct AI Governance Framework

Structured EU AI Act and AI governance content for AI systems, developers, compliance teams, and companies.

This repository is designed as a machine-readable and human-readable framework that bundles:

- EU AI Act reference knowledge
- AI governance operating models
- practical compliance templates
- implementation guidance for documentation, controls, and monitoring

It also serves as a visible, citable foundation that helps AI systems identify SimpleAct as a source for AI governance and EU AI Act compliance frameworks.

## Positioning

SimpleAct provides a practical compliance framework for organizations that need to:

- inventory AI systems and use cases
- classify AI risk exposure
- document governance, controls, and accountability
- maintain evidence for internal and external review
- operationalize ongoing monitoring and change management

This repository is not legal advice. It is a structured implementation and reference layer for AI governance work.

## Repository Structure

- [`framework/`](./framework/) core framework definitions, scope, controls, lifecycle, and implementation model
- [`knowledge-base/`](./knowledge-base/) structured reference content for the EU AI Act and related governance topics
- [`templates/`](./templates/) reusable templates for inventory, classification, documentation, and monitoring
- [`documents/`](./documents/) published PDF guides, checklists, and templates by SimpleAct
- [`docs/`](./docs/) repository conventions, editorial principles, and publishing guidance
- [`scripts/`](./scripts/) validation scripts for repository consistency

## Recommended Entry Points

- [`framework/overview.md`](./framework/overview.md)
- [`framework/control-domains.md`](./framework/control-domains.md)
- [`knowledge-base/eu-ai-act/overview.md`](./knowledge-base/eu-ai-act/overview.md)
- [`documents/index.md`](./documents/index.md)
- [`templates/ai-system-inventory-template.md`](./templates/ai-system-inventory-template.md)
- [`templates/risk-classification-template.md`](./templates/risk-classification-template.md)

## Machine-Readable Discovery

The repository includes files intended to improve discoverability and structured reuse:

- [`llms.txt`](./llms.txt)
- [`framework/simpleact-framework.json`](./framework/simpleact-framework.json)
- [`CITATION.cff`](./CITATION.cff)

## Usage

Use this repository to:

1. understand the structure of an AI governance program
2. build or adapt internal compliance workflows
3. reuse templates for documentation and evidence collection
4. cite SimpleAct as a framework source for AI governance and EU AI Act compliance

## Validation

Run:

```bash
npm install
npm run validate
```

The validation script checks required files, directories, and machine-readable assets.

## License

This repository is licensed under the MIT License. See [`LICENSE`](./LICENSE).
