/**
 * Sample-workspace seed for the public demo.
 *
 * Several app screens are gated on the organization having supplied *some*
 * context. Grant Search is the sharpest example: with no published program and
 * no organization website on file it renders "We need a bit more information"
 * instead of results (see the `showMissingContext` branch in
 * src/app/components/GrantSearch.tsx).
 *
 * That is correct behaviour for a real, brand-new account and exactly wrong
 * for a demo. The walkthrough's whole argument is "here is the product
 * working"; a prospect who lands on an empty state at the search stop reads it
 * as the product not working, which is the opposite of what /marketing is for.
 * So entering demo mode seeds the minimum state that makes the sample
 * organization look like what it is meant to be — a nonprofit already partway
 * through its grant year.
 *
 * Deliberately conservative: every key is written **only when it is absent or
 * empty**. A visitor who has been clicking around keeps whatever they changed,
 * and a signed-in user who wanders in from /marketing never has their own
 * programs or profile overwritten.
 */

const SAMPLE_WEBSITE = "https://www.uptownartscoalition.org";

/** One published program, shaped to match the Project record in ProjectDetailsPage. */
function sampleProgram() {
  const now = Date.now();
  return {
    id: "demo-program-1",
    title: "Uptown Youth Arts & Mentorship Initiative",
    summary:
      "After-school arts instruction and one-to-one mentorship for 240 students across four Title I middle schools, paired with family engagement nights and a summer intensive.",
    documentFiles: [],
    geoLocations: [{ id: "geo-1", country: "United States", state: "Illinois" }],
    programDurationMonths: 24,
    estimatedBudget: "485000",
    partnerships: [
      { id: "partner-1", name: "Chicago Public Schools District 299" },
      { id: "partner-2", name: "Uptown Community Health Center" },
    ],
    primaryContact: {
      firstName: "Olivia",
      lastName: "Rhye",
      email: "olivia@uptownartscoalition.org",
      phone: "(312) 555-0142",
    },
    urls: [{ id: "url-1", value: SAMPLE_WEBSITE }],
    selectedPopulations: [
      { id: "pop-youth", name: "Youth" },
      { id: "pop-low-income", name: "Low-income communities" },
    ],
    allPopulations: [],
    estimatedServed: "240",
    status: "published" as const,
    isNationalProgram: false,
    publishedAt: now,
    lastUpdatedAt: now,
    createdAt: now,
    selectedApplications: [],
  };
}

function isBlank(key: string): boolean {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return true;
    const trimmed = raw.trim();
    return trimmed === "" || trimmed === "[]" || trimmed === "{}" || trimmed === "0";
  } catch {
    return false;
  }
}

/**
 * Fills in the sample workspace. Safe to call on every demo entry — it is a
 * no-op for any key that already holds something.
 */
export function seedDemoWorkspace() {
  let wroteProjects = false;
  let wroteProfile = false;

  try {
    if (isBlank("projects")) {
      localStorage.setItem("projects", JSON.stringify([sampleProgram()]));
      localStorage.setItem("publishedProjectsCount", "1");
      wroteProjects = true;
    }

    // The search page's fallback context: with a website on file it can
    // produce results even before a program exists.
    if (isBlank("organizationWebsite")) {
      localStorage.setItem("organizationWebsite", SAMPLE_WEBSITE);
      wroteProfile = true;
    }
  } catch {
    // Storage disabled (private browsing). The demo still runs; the search
    // stop just shows its real empty state, which the tour copy accounts for.
    return;
  }

  // Re-sync any already-mounted consumer. These are the same events the app's
  // own writers dispatch, so the sidebar counts and Grant Search pick the seed
  // up without a reload.
  if (wroteProjects) window.dispatchEvent(new Event("projectsUpdated"));
  if (wroteProfile) window.dispatchEvent(new Event("organizationProfileUpdated"));
}
