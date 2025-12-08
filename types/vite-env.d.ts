/// <reference types="vite/client" />

interface ImportMeta {
  glob: (pattern: string, options?: { import?: string }) => Record<string, () => Promise<any>>;
}
