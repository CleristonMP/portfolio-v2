import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeEach, vi } from 'vitest';

beforeEach(() => {
  localStorage.clear();
  document.documentElement.lang = 'pt-BR';
  document.title = 'Fallback';
  document.head.innerHTML = '<meta name="description" content="Fallback" />';
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});
