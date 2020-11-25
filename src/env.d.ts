/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly GITHUB_API_TOKEN: string;
    readonly CHATWORK_API_TOKEN: string;
  }
}
