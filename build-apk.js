const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

console.log('🚀 Building CourtSide Tennis APK...');
console.log('📱 This will prepare your app for APK generation');

// Build the React app
console.log('⚛️  Building React app...');
exec('npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error('❌ Build failed:', error);
    return;
  }
  
  console.log('✅ React app built successfully!');
  
  // Sync with Capacitor
  console.log('🔄 Syncing with Capacitor...');
  exec('npx cap sync', (error, stdout, stderr) => {
    if (error) {
      console.error('❌ Capacitor sync failed:', error);
      return;
    }
    
    console.log('✅ Capacitor sync completed!');
    console.log('\n🎉 Your app is ready for APK building!');
    console.log('\n📋 Next steps:');
    console.log('1. Install Android Studio from: https://developer.android.com/studio');
    console.log('2. Run: npx cap open android');
    console.log('3. In Android Studio: Build → Build Bundle(s)/APK(s) → Build APK(s)');
    console.log('\n🌐 Alternative - Use online APK builder:');
    console.log('1. Go to: https://ionic.io/appflow');
    console.log('2. Upload your project');
    console.log('3. Build APK in the cloud');
    console.log('\n📁 Your Android project is ready in: ./android/');
  });
});