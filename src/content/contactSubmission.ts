export const approvedContactEndpoint = 'https://formspree.io/f/mqpqkean';

export function getContactEndpoint(configured: unknown): string | undefined {
  return configured === approvedContactEndpoint
    ? approvedContactEndpoint
    : undefined;
}

type ContactPayload = Readonly<Record<'name' | 'email' | 'message', string>>;
export type SubmissionResult =
  'accepted' | 'rejected' | 'network' | 'timeout' | 'limited';

export async function submitContact(
  endpoint: string,
  payload: ContactPayload,
): Promise<SubmissionResult> {
  const controller = new AbortController();
  const { signal } = controller;
  const timeout = setTimeout(() => controller.abort(), 10_000);
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      credentials: 'omit',
      redirect: 'error',
      signal,
    });
    if (response.status === 429) return 'limited';
    if (!response.ok) return 'rejected';

    try {
      const result: unknown = await response.json();
      return typeof result === 'object' &&
        result !== null &&
        'ok' in result &&
        result.ok === true
        ? 'accepted'
        : 'rejected';
    } catch (error) {
      if (error instanceof SyntaxError) return 'rejected';
      throw error;
    }
  } catch {
    return signal.aborted ? 'timeout' : 'network';
  } finally {
    clearTimeout(timeout);
  }
}
