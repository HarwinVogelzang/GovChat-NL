// lib/appList.ts

// Dynamisch User-type
export type User = {
  [key: string]: any;
};

interface AppDefinition {
  name: string;
  icon: string;
  href: string;
  capabilityKey?: string;
  permission: (user: User) => boolean;
}

export const apps: AppDefinition[] = [
  {
    name: 'Chat',
    icon: '💬',
    href: '/',
    capabilityKey: 'chat',
    permission: (_user) => true // Altijd zichtbaar
  },
  {
    name: 'Versimpelaar',
    icon: '🔤',
    href: '/app-launcher/versimpelaar',
    capabilityKey: 'versimpelaar',
    permission: (user) =>
      user?.role === 'admin' ||
      user?.permissions?.app_launcher?.versimpelaar
  }
];