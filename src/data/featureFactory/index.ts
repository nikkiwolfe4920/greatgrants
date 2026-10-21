import type { FeatureFactoryProject } from "./types";
import { greatGrants } from "./projects/greatGrants";

/**
 * Every timeline served under `/feature-factory`. The first entry is the
 * default shown at the bare `/feature-factory` URL; the rest live at
 * `/feature-factory/:slug`.
 */
export const featureFactoryProjects: FeatureFactoryProject[] = [greatGrants];

export const defaultFeatureFactoryProject = featureFactoryProjects[0];

export function getFeatureFactoryProject(slug: string | undefined): FeatureFactoryProject | undefined {
  return slug ? featureFactoryProjects.find((p) => p.slug === slug) : defaultFeatureFactoryProject;
}

export * from "./types";
