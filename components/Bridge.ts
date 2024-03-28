import { bridge, createWebView } from '@webview-bridge/react-native';
import { router } from 'expo-router';
import { AppBridgeState, User } from './../bridge_types';

export const appBridge = bridge<AppBridgeState>(({ get, set }) => ({
  // State management
  count: 0,
  async increase() {
    set({
      count: get().count + 1
    });
  },
  user: {
    firstname: '',
    lastname: '',
    message: 'logged_in',
    token: '',
    userId: ''
  },
  async getUser() {
    return get().user;
  },
  async setUser(user: User) {
    set({ user: user });
  },

  // Modals
  async openInAppModal(url: string) {
    router.push({ pathname: '/modal', params: { linkToGo: url } });
  },
  async closeInAppModal() {
    router.canGoBack() && router.back();
  }
}));

export const { WebView, linkWebMethod } = createWebView({
  bridge: appBridge,
  debug: true,
  fallback: (method) => {
    console.warn(`Method '${method}' not found in native`);
  }
});
