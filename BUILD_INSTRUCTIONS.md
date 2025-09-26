# Building CourtSide Tennis APK

## What You Need:
1. Android Studio installed
2. Java Development Kit (JDK) 8 or higher
3. Android SDK

## Steps to Build APK Locally:

### 1. Install Android Studio
- Download from: https://developer.android.com/studio
- Install with default settings
- Open Android Studio and download required SDK components

### 2. Build the APK
```bash
# Navigate to your project directory
cd "C:\Users\Goconnect\Downloads\CourtSide\courtside-app"

# Open the Android project in Android Studio
npx cap open android
```

### 3. In Android Studio:
1. Wait for Gradle sync to complete
2. Go to **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
3. Wait for build to complete
4. Click "locate" to find your APK file

### 4. Alternative: Command Line Build
```bash
# Navigate to android folder
cd android

# Build debug APK
./gradlew assembleDebug

# Build release APK (requires signing)
./gradlew assembleRelease
```

## APK Location:
- Debug APK: `android/app/build/outputs/apk/debug/app-debug.apk`
- Release APK: `android/app/build/outputs/apk/release/app-release.apk`

## Quick Online Build Alternative:

### Using Capacitor Live Updates:
1. Install Capacitor Live Updates: `npm install @capacitor/live-updates`
2. Use Ionic Appflow for cloud builds

### Using Third-party Services:
1. **AppGyver** (free)
2. **PhoneGap Build** (being discontinued)
3. **Cordova Cloud Build**

## Sharing Your APK:
Once you have your APK file:
1. Upload to Google Drive, Dropbox, or file sharing service
2. Share the download link with people
3. Recipients need to enable "Install from Unknown Sources" on their Android devices

## For Distribution:
- For wider distribution, consider publishing to Google Play Store
- For internal distribution, you can use Firebase App Distribution
- For simple sharing, direct APK download works fine

## Troubleshooting:
- Make sure all npm packages are installed
- Ensure build folder exists (`npm run build`)
- Check that Capacitor sync completed successfully (`npx cap sync`)
- Verify Android SDK is properly configured in Android Studio