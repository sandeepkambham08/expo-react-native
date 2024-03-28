import type { BridgeStore } from '@webview-bridge/react-native';

export declare const appBridge: BridgeStore<AppBridgeState>;

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type User = Record<string, string>;

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type AppBridgeState = {
  count: number;
  user: User | undefined;
  setUser: (user: User) => Promise<void>;
  getUser: () => Promise<User | undefined>;
  increase: () => Promise<void>;
};

export type AppBridge = typeof appBridge;
