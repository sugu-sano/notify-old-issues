/// <reference types="node" />

/**
 * NodeJSの名前空間を拡張するモジュールです。
 */
declare namespace NodeJS {
  /**
   * 環境変数を表すインターフェースです。
   */
  interface ProcessEnv {
    /**
     * GitHub APIのトークンです。必須です。
     */
    readonly GITHUB_API_TOKEN: string;
    /**
     * Chatwork APIのトークンです。必須です。
     */
    readonly CHATWORK_API_TOKEN: string;
  }
}