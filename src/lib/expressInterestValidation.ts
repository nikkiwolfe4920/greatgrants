/**
 * Validation shared by every "Express interest" flow on the public partner
 * call pages (guest and signed-in member) so the rules can't drift between
 * them — only the fields each flow actually collects differ.
 */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactName(value: string): string | undefined {
  return value.trim() ? undefined : "Enter a contact name.";
}

export function validateContactEmail(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return "Enter a contact email.";
  return EMAIL_PATTERN.test(trimmed) ? undefined : "Enter a valid email address, like you@organization.org.";
}

export function validateProgramDescription(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return "Describe what your organization would deliver.";
  return trimmed.length >= 20
    ? undefined
    : "Add a bit more detail — a sentence or two about what you'd deliver.";
}

export function validateEstimatedBudget(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return "Enter an estimated budget.";
  const numeric = Number(trimmed.replace(/[^0-9.]/g, ""));
  return numeric > 0 ? undefined : "Enter a dollar amount, like 26,000.";
}

export function validatePeopleServed(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  return /^[\d,]+$/.test(trimmed) ? undefined : "Enter a whole number.";
}

export function formatAsCurrency(value: string): string {
  const numeric = Number(value.replace(/[^0-9.]/g, ""));
  if (!numeric || Number.isNaN(numeric)) return value;
  return `$${numeric.toLocaleString()}`;
}
