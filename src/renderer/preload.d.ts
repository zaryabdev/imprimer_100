import { ElectronHandler } from 'main/preload';

declare global {
  interface Window {
    electron: ElectronHandler;
    store: {
      get: (key: string) => any;
      set: (key: string, val: any) => void;
    };
  }
}

export {};
