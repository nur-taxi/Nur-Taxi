import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nurtaxi.app',
  appName: 'Nur Taxi',
  webDir: 'dist/public',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Geolocation: {
      permissions: ['location']
    }
  }
};

export default config;