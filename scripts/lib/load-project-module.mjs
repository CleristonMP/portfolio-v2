import assert from 'node:assert/strict';
import { Buffer } from 'node:buffer';
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

// Execute the actual TS modules with the compiler already used by the project.
// Relative imports become in-memory modules; no generated files or test runner.
const modules = new Map();
export function moduleUrl(
  relativePath,
  overrides = new Map(),
  cache = modules,
) {
  const filename = path.resolve(relativePath);
  if (cache.has(filename)) return cache.get(filename);
  const source = overrides.get(filename) ?? fs.readFileSync(filename, 'utf8');
  let javascript = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
      jsx: ts.JsxEmit.ReactJSX,
    },
  }).outputText;
  javascript = javascript.replace(
    /from (["'])([^"']+)\1/g,
    (_, quote, specifier) => {
      let url;
      if (specifier.startsWith('.')) {
        const base = path.resolve(path.dirname(filename), specifier);
        const dependency = [base, `${base}.ts`, `${base}.tsx`].find(
          (candidate) =>
            overrides.has(candidate) ||
            (fs.existsSync(candidate) && fs.statSync(candidate).isFile()),
        );
        assert(dependency, `Missing module: ${specifier}`);
        url = moduleUrl(dependency, overrides, cache);
      } else {
        url = import.meta.resolve(specifier);
      }
      return `from ${quote}${url}${quote}`;
    },
  );
  const url = `data:text/javascript;base64,${Buffer.from(javascript).toString('base64')}`;
  cache.set(filename, url);
  return url;
}
export const loadProjectModule = (filename) => import(moduleUrl(filename));
