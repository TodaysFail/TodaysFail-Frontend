interface ImportMetaEnv {
  readonly VITE_GUIDE_URL: string;
  readonly VITE_STORY_URL: string;
  // 다른 환경 변수들에 대한 타입 정의...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
