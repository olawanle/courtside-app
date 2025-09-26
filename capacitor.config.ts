import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.courtside.tennis',
  appName: 'CourtSide Tennis',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
