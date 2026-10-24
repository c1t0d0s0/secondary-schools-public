// Google Tag Manager ID (オプション)
const GTM_ID = '';

// Firebase Authentication & Firestore Configuration
// Firebase Console > プロジェクト設定 > マイアプリ (Web) から取得した値を設定してください
const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  // (推奨) Google Cloud Console の OAuth 2.0 ウェブクライアント ID。
  // 設定すると Firebase の認証ハンドラを使わずに直接 Google ログインします（Firefox Focus 等に対応）。
  googleClientId: ""
};

if (typeof window !== 'undefined') {
  window.FIREBASE_CONFIG = FIREBASE_CONFIG;
}
