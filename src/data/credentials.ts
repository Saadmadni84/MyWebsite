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
  match: readonly string[];
  name?: string;
  issuer?: string;
  verifyUrl?: string;
  priority?: number;
};

const PUBLIC_DIRECTORY_CANDIDATES = [
  "credentials",
  "creditial",
  "certificates",
] as const;

const ALLOWED_EXTENSIONS = new Set([
  ".pdf",
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
]);

const credentialOverrides: readonly CredentialOverride[] = [
  {
    match: ["ai agent oracle"],
    name: "AI Agent",
    issuer: "Oracle",
    priority: 1,
  },
  {
    match: ["apply ai analyze customer reviews"],
    name: "Apply AI: Analyze Customer Reviews",
    priority: 2,
  },
  {
    match: ["ccna enterprise networking security and automation"],
    name: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco Networking Academy",
    priority: 3,
  },
  {
    match: ["ccna introduction to networks"],
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    priority: 4,
  },
  {
    match: ["ccna switching routing and wireless essentials"],
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    priority: 5,
  },
  {
    match: ["cloud security fundamentals"],
    name: "Cloud Security Fundamentals",
    priority: 6,
  },
  {
    match: ["cybersecurity foundation"],
    name: "Cybersecurity Foundation",
    priority: 7,
  },
  {
    match: ["data analytics essentials"],
    name: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    priority: 8,
  },
  {
    match: ["introduction to cybersecurity"],
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    priority: 9,
  },
  {
    match: ["introduction to modern ai"],
    name: "Introduction to Modern AI",
    priority: 10,
  },
  {
    match: ["my learning nvidia", "nvidia"],
    name: "My Learning",
    issuer: "NVIDIA",
    priority: 11,
  },
  {
    match: ["nestle"],
    name: "Nestle",
    priority: 12,
  },
  {
    match: ["network security fundamentals"],
    name: "Network Security Fundamentals",
    priority: 13,
  },
  {
    match: ["networking basics"],
    name: "Networking Basics",
    issuer: "Cisco Networking Academy",
    priority: 14,
  },
  {
    match: ["operating systems support"],
    name: "Operating Systems Support",
    issuer: "Cisco Networking Academy",
    priority: 15,
  },
  {
    match: ["python essentials 1"],
    name: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    priority: 16,
  },
  {
    match: ["python essentials 2"],
    name: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    priority: 17,
  },
  {
    match: ["saad madni amzon ml", "amazon ml"],
    name: "Amazon ML Certificate",
    issuer: "Amazon",
    priority: 18,
  },
  {
    match: ["security operations configuration"],
    name: "Security Operations Configuration",
    priority: 19,
  },
  {
    match: ["security operations fundamentals"],
    name: "Security Operations Fundamentals",
    priority: 20,
  },
  {
    match: ["cloud security automation"],
    name: "Cloud Security Automation",
    priority: 21,
  },
  {
    match: ["walmart"],
    name: "Walmart",
    priority: 22,
  },
  {
    match: ["jp morgan"],
    name: "JP Morgan",
    priority: 23,
  },
  {
    match: ["leetcode"],
    name: "LeetCode",
    priority: 24,
  },
  {
    match: ["problem solving intermediate"],
    name: "Problem Solving Intermediate",
    priority: 25,
  },
] as const;

const issuerPatterns = [
  { match: ["cisco networking academy", "ccna", "netacad"], issuer: "Cisco Networking Academy" },
  { match: ["cisco"], issuer: "Cisco" },
  { match: ["oracle"], issuer: "Oracle" },
  { match: ["nvidia"], issuer: "NVIDIA" },
  { match: ["amazon", "amzon"], issuer: "Amazon" },
  { match: ["walmart"], issuer: "Walmart" },
  { match: ["jp morgan"], issuer: "JP Morgan" },
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
  {
    match: ["the linux foundation", "linux foundation"],
    issuer: "The Linux Foundation",
  },
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
  glbitm: "GLBITM",
  grpc: "gRPC",
  hpcl: "HPCL",
  ibm: "IBM",
  infosec: "INFOSEC",
  isc2: "ISC2",
  itp: "ITP",
  jp: "JP",
  llm: "LLM",
  llms: "LLMs",
  mcp: "MCP",
  ml: "ML",
  nlp: "NLP",
  nvidia: "NVIDIA",
  oracle: "Oracle",
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
    .replace(/[|]+/g, " ")
    .replace(/[._-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function toId(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
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

function findOverride(normalizedBaseName: string) {
  return credentialOverrides.find((override) =>
    override.match.some((match) => normalizedBaseName.includes(match)),
  );
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

function humanizeFileName(fileName: string) {
  const normalized = normalizeValue(fileName)
    .replace(/\bcsaiml\d+\s+glbitm\s+ac\s+in\b/gi, " ")
    .replace(
      /\b[a-f0-9]{8}\s+[a-f0-9]{4}\s+[a-f0-9]{4}\s+[a-f0-9]{4}\s+[a-f0-9]{12}\b/gi,
      " ",
    )
    .replace(/\b(student|certificate|certification|credential|badge|completion|course|final)\b/gi, " ")
    .replace(/\bamzon\b/gi, "amazon")
    .replace(/\s+/g, " ")
    .trim();

  return normalized
    .split(" ")
    .filter(Boolean)
    .map(formatToken)
    .join(" ");
}

function getDirectoryFiles(directoryName: string) {
  const absolutePath = path.join(process.cwd(), "public", directoryName);

  if (!fs.existsSync(absolutePath) || !fs.statSync(absolutePath).isDirectory()) {
    return [] as string[];
  }

  return fs
    .readdirSync(absolutePath, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((fileName) => ALLOWED_EXTENSIONS.has(path.extname(fileName).toLowerCase()))
    .sort((left, right) => left.localeCompare(right, undefined, { sensitivity: "base" }));
}

function resolveCredentialSource() {
  const existingDirectories = PUBLIC_DIRECTORY_CANDIDATES.map((directoryName) => ({
    directoryName,
    files: getDirectoryFiles(directoryName),
  })).filter((entry) => fs.existsSync(path.join(process.cwd(), "public", entry.directoryName)));

  const firstWithFiles = existingDirectories.find((entry) => entry.files.length > 0);

  if (firstWithFiles) {
    return firstWithFiles;
  }

  return (
    existingDirectories[0] ?? {
      directoryName: "credentials",
      files: [] as string[],
    }
  );
}

export function getCredentials() {
  const { directoryName, files } = resolveCredentialSource();

  const credentials = files.map((fileName, index) => {
    const normalizedBaseName = normalizeValue(fileName);
    const override = findOverride(normalizedBaseName);
    const issuer = override?.issuer ?? detectIssuer(fileName);
    const name = override?.name ?? humanizeFileName(fileName);

    return {
      id: toId(normalizedBaseName),
      name,
      issuer,
      verifyUrl: override?.verifyUrl ?? `/${directoryName}/${encodeURIComponent(fileName)}`,
      fileName,
      priority: override?.priority,
      orderIndex: index,
    };
  });

  return credentials
    .sort((left, right) => {
      const leftPriority = left.priority ?? Number.MAX_SAFE_INTEGER;
      const rightPriority = right.priority ?? Number.MAX_SAFE_INTEGER;

      if (leftPriority !== rightPriority) {
        return leftPriority - rightPriority;
      }

      return left.orderIndex - right.orderIndex;
    })
    .map((entry) => {
      const { orderIndex, ...credential } = entry;
      void orderIndex;
      return credential satisfies CredentialEntry;
    });
}

export function getCredentialDirectoryPath() {
  return `public/${resolveCredentialSource().directoryName}`;
}
