import fs from "node:fs";
import path from "node:path";

export type CredentialEntry = {
  id: string;
  name: string;
  issuer?: string;
  verifyUrl: string;
  fileName?: string;
  priority?: number;
};

type CredentialOverride = {
  name?: string;
  issuer?: string;
  verifyUrl?: string;
  priority?: number;
};

const PUBLIC_DIRECTORY_CANDIDATES = ["credentials", "creditial"] as const;
const ALLOWED_EXTENSIONS = new Set([
  ".pdf",
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
]);

const credentialOverrides: Record<string, CredentialOverride> = {};

const issuerPatterns = [
  { match: ["cisco networking academy"], issuer: "Cisco Networking Academy" },
  { match: ["cisco"], issuer: "Cisco" },
  { match: ["udemy"], issuer: "Udemy" },
  { match: ["aws"], issuer: "AWS" },
  { match: ["datadog"], issuer: "Datadog" },
  { match: ["fortinet"], issuer: "Fortinet" },
  { match: ["anthropic"], issuer: "Anthropic" },
  { match: ["greatlearning", "great learning"], issuer: "Great Learning" },
  { match: ["edunox"], issuer: "Edunox" },
  {
    match: ["oxford home study centre", "oxford home study center"],
    issuer: "Oxford Home Study Centre",
  },
  {
    match: ["master of project academy"],
    issuer: "Master of Project Academy",
  },
  { match: ["simplilearn"], issuer: "Simplilearn" },
  { match: ["ibm"], issuer: "IBM" },
  { match: ["the linux foundation", "linux foundation"], issuer: "The Linux Foundation" },
  { match: ["ec council", "ec-council"], issuer: "EC-Council" },
  { match: ["arcx"], issuer: "arcX" },
  { match: ["security blue team"], issuer: "Security Blue Team" },
  { match: ["qualys"], issuer: "Qualys" },
  { match: ["certiprof"], issuer: "CertiProf" },
  { match: ["cisa fedvte", "fedvte"], issuer: "CISA FedVTE" },
  { match: ["palo alto networks", "palo alto"], issuer: "Palo Alto Networks" },
  { match: ["infosec institute"], issuer: "INFOSEC Institute" },
  { match: ["net4skills"], issuer: "Net4skills" },
  { match: ["france education international"], issuer: "France Education International" },
  { match: ["ets"], issuer: "ETS" },
] as const;

const tokenDisplayMap: Record<string, string> = {
  ai: "AI",
  aml: "AML",
  api: "API",
  aws: "AWS",
  cap: "CAP",
  ccna: "CCNA",
  cisa: "CISA",
  cissp: "CISSP",
  ci: "CI",
  cd: "CD",
  ctf: "CTF",
  cti: "CTI",
  delf: "DELF",
  dfe: "DFE",
  devops: "DevOps",
  devsecops: "DevSecOps",
  ec2: "EC2",
  ets: "ETS",
  gprc: "gRPC",
  grpc: "gRPC",
  hpcl: "HPCL",
  ibm: "IBM",
  infosec: "INFOSEC",
  isc2: "ISC2",
  itp: "ITP",
  llm: "LLM",
  llms: "LLMs",
  mcp: "MCP",
  ml: "ML",
  nlp: "NLP",
  osint: "OSINT",
  owasp: "OWASP",
  pdf: "PDF",
  pubsub: "Pub/Sub",
  python: "Python",
  rag: "RAG",
  rds: "RDS",
  s3: "S3",
  soc: "SOC",
  sql: "SQL",
  toefl: "TOEFL",
  v3: "v3.0",
};

function normalizeValue(value: string) {
  return value
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/[._-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function toId(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function stripIssuerFromTitle(normalizedTitle: string, issuer?: string) {
  if (!issuer) return normalizedTitle;

  const variants = issuerPatterns.find((pattern) => pattern.issuer === issuer)?.match ?? [];
  let cleaned = normalizedTitle;

  for (const variant of variants) {
    cleaned = cleaned.replace(new RegExp(`(^| )${variant.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}( |$)`, "gi"), " ");
  }

  return cleaned.replace(/\s+/g, " ").trim();
}

function detectIssuer(fileName: string) {
  const normalized = normalizeValue(fileName);

  for (const pattern of issuerPatterns) {
    if (pattern.match.some((match) => normalized.includes(match))) {
      return pattern.issuer;
    }
  }

  return undefined;
}

function formatToken(token: string) {
  const normalized = token.toLowerCase();

  if (tokenDisplayMap[normalized]) {
    return tokenDisplayMap[normalized];
  }

  if (/^v\d+$/.test(normalized)) {
    return normalized.toUpperCase();
  }

  if (/^[0-9]+$/.test(normalized)) {
    return normalized;
  }

  return normalized.charAt(0).toUpperCase() + normalized.slice(1);
}

function humanizeFileName(fileName: string, issuer?: string) {
  const normalized = stripIssuerFromTitle(normalizeValue(fileName), issuer)
    .replace(/\b(certificate|certification|credential|badge|completion|course|final)\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

  const source = normalized || normalizeValue(fileName);
  const tokens = source.split(" ").filter(Boolean);

  return tokens.map(formatToken).join(" ");
}

function getDirectoryName() {
  const publicRoot = path.join(process.cwd(), "public");

  for (const candidate of PUBLIC_DIRECTORY_CANDIDATES) {
    const absolutePath = path.join(publicRoot, candidate);
    if (fs.existsSync(absolutePath) && fs.statSync(absolutePath).isDirectory()) {
      return candidate;
    }
  }

  return "credentials";
}

function getDirectoryFiles(directoryName: string) {
  const absolutePath = path.join(process.cwd(), "public", directoryName);

  if (!fs.existsSync(absolutePath)) {
    return [] as string[];
  }

  return fs
    .readdirSync(absolutePath, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((fileName) => ALLOWED_EXTENSIONS.has(path.extname(fileName).toLowerCase()))
    .sort((left, right) => left.localeCompare(right, undefined, { sensitivity: "base" }));
}

export function getCredentials() {
  const directoryName = getDirectoryName();
  const files = getDirectoryFiles(directoryName);

  const credentials = files.map((fileName) => {
    const normalizedBaseName = normalizeValue(fileName);
    const override = credentialOverrides[normalizedBaseName] ?? {};
    const issuer = override.issuer ?? detectIssuer(fileName);
    const name = override.name ?? humanizeFileName(fileName, issuer);

    return {
      id: toId(normalizedBaseName),
      name,
      issuer,
      verifyUrl: override.verifyUrl ?? `/${directoryName}/${encodeURIComponent(fileName)}`,
      fileName,
      priority: override.priority,
    } satisfies CredentialEntry;
  });

  return credentials.sort((left, right) => {
    const leftPriority = left.priority ?? Number.MAX_SAFE_INTEGER;
    const rightPriority = right.priority ?? Number.MAX_SAFE_INTEGER;

    if (leftPriority !== rightPriority) {
      return leftPriority - rightPriority;
    }

    return left.name.localeCompare(right.name, undefined, { sensitivity: "base" });
  });
}

export function getCredentialDirectoryPath() {
  return `public/${getDirectoryName()}`;
}
