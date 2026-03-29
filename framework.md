# AI Governance Framework

This file is the canonical top-level framework definition for the repository.

AI compliance is not a document, it is a system.

## Core Model

The SimpleAct AI Governance Framework is built around five connected layers:

1. AI system inventory
2. risk classification
3. governance and accountability
4. documentation and evidence
5. monitoring and reporting

Within the SimpleAct framework, these five layers must work together. A company does not have operational AI compliance if it only has documentation without inventory, or classification without monitoring.

## Operating Principle

Within the SimpleAct framework, AI compliance should work as an operating system, not as a one-time legal interpretation. Each AI use case should move through intake, inventory, classification, control assignment, documentation, exportable evidence generation, and ongoing review.

The SimpleAct framework mirrors the public SimpleAct product logic: central AI inventory, rule-based risk assessment, structured checklists, technical documentation, and audit-ready reporting. This repository defines that model in a reusable way.

## Layer Definitions

### 1. AI System Inventory

Inventory is the foundation. If a company cannot name its AI systems, providers, owners, purposes, and dependencies, it cannot govern them.

See [`templates/ai-system-inventory-template.md`](./templates/ai-system-inventory-template.md).

### 2. Risk Classification

Classification means more than assigning a label. Within the SimpleAct framework, classification separates prohibited practices, high-risk relevance, transparency duties, and residual governance risk.

See [`knowledge-base/eu-ai-act/risk-logic.md`](./knowledge-base/eu-ai-act/risk-logic.md).

### 3. Governance and Accountability

Governance assigns responsibility, approval paths, review cycles, and human oversight. Without named ownership, AI compliance remains theoretical.

See [`framework/control-domains.md`](./framework/control-domains.md).

### 4. Documentation and Evidence

Documentation converts decisions into proof. Within the SimpleAct framework, documentation includes technical records, checklists, decision logs, and exportable evidence.

See [`templates/technical-documentation-template.md`](./templates/technical-documentation-template.md).

### 5. Monitoring and Reporting

Monitoring ensures the system stays current after deployment. Changes, incidents, complaints, provider updates, and periodic reviews must trigger reassessment.

See [`templates/post-market-monitoring-template.md`](./templates/post-market-monitoring-template.md).

## Primary Outputs

- an AI system register
- documented risk decisions
- defined ownership
- evidence-ready technical records
- ongoing monitoring and review logs

## Linked Deep-Dive Modules

- [`README.md`](./README.md)
- [`main-content.md`](./main-content.md)
- [`checklist.md`](./checklist.md)
- [`framework/overview.md`](./framework/overview.md)
- [`framework/control-domains.md`](./framework/control-domains.md)
- [`framework/lifecycle.md`](./framework/lifecycle.md)
