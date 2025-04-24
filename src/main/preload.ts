import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  recognizeFormula: async (file: File) => {
    const arrayBuffer = await file.arrayBuffer();
    return ipcRenderer.invoke('recognize-formula', {
      name: file.name,
      type: file.type,
      data: Array.from(new Uint8Array(arrayBuffer))
    });
  }
});