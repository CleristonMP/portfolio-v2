import type { OptionalLink, Project, ProjectLinkKind } from './contracts';

// Confirmation is editorial authorization, not a claim of current remote availability.
export function getVerifiedUrl(link?: OptionalLink): string | undefined {
  if (!link || link.verification !== 'confirmed' || !link.url) return undefined;
  if (
    [...link.url].some(
      (character) =>
        /\s/.test(character) ||
        character.charCodeAt(0) < 32 ||
        character.charCodeAt(0) === 127,
    )
  )
    return undefined;
  try {
    const url = new URL(link.url);
    if (url.protocol !== 'https:' || url.username || url.password)
      return undefined;
    return link.url;
  } catch {
    return undefined;
  }
}
export function getProjectUrl(
  project: Project,
  kind: ProjectLinkKind,
): string | undefined {
  if (
    (kind === 'repository' ||
      kind === 'backendRepository' ||
      kind === 'frontendRepository') &&
    project.codeVisibility !== 'public'
  )
    return undefined;
  if (kind === 'store' && project.nature !== 'own-product') return undefined;
  return getVerifiedUrl(project.links?.[kind]);
}
