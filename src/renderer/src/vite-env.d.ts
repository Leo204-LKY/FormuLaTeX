// src/renderer/vite-env.d.ts
interface Window {
  electronAPI: {
    recognizeFormula: (file: File) => Promise<{
      success: boolean;
      res?: string;  
      error?: string;
    }>;
  };
}