import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();

const requiredPaths = [
  "README.md",
  "CONTRIBUTING.md",
  "llms.txt",
  "CITATION.cff",
  ".github/CODEOWNERS",
  "framework.md",
  "main-content.md",
  "checklist.md",
  "pdf-version.pdf",
  "documents",
  "documents/index.md",
  "documents/SimpleAct_EU_AI_Act_Compliance_Guide_DE.pdf",
  "documents/SimpleAct_EU_AI_Act_Compliance_Guide_EN.pdf",
  "documents/SimpleAct_AI_Act_for_SaaS_DE.pdf",
  "documents/SimpleAct_AI_Act_for_SaaS_EN.pdf",
  "documents/SimpleAct_AI_Governance_Checklist_DE.pdf",
  "documents/SimpleAct_AI_Governance_Checklist_EN.pdf",
  "documents/SimpleAct_AI_System_Inventory_Template_DE.pdf",
  "documents/SimpleAct_AI_System_Inventory_Template_EN.pdf",
  "documents/SimpleAct_AI_Act_Documentation_Template_DE.pdf",
  "documents/SimpleAct_AI_Act_Documentation_Template_EN.pdf",
  "framework",
  "framework/overview.md",
  "framework/control-domains.md",
  "framework/lifecycle.md",
  "framework/simpleact-framework.json",
  "knowledge-base",
  "knowledge-base/eu-ai-act/overview.md",
  "templates",
  "templates/ai-system-inventory-template.md",
  "templates/risk-classification-template.md",
  "templates/technical-documentation-template.md",
  "templates/post-market-monitoring-template.md",
  "docs/editorial-principles.md",
  "docs/repository-network.md"
];

async function assertExists(relativePath) {
  const target = path.join(root, relativePath);
  await stat(target);
}

async function validateJson(relativePath) {
  const target = path.join(root, relativePath);
  const content = await readFile(target, "utf8");
  JSON.parse(content);
}

async function main() {
  const missing = [];

  for (const relativePath of requiredPaths) {
    try {
      await assertExists(relativePath);
    } catch {
      missing.push(relativePath);
    }
  }

  if (missing.length > 0) {
    console.error("Missing required paths:");
    for (const relativePath of missing) {
      console.error(`- ${relativePath}`);
    }
    process.exit(1);
  }

  await validateJson("framework/simpleact-framework.json");
  console.log("Framework validation passed.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
