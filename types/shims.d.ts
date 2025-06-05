// shims.d.ts
declare module '*.yml' {
  import { DefineLocaleMessage } from 'vue-i18n';
  const messages: DefineLocaleMessage;
  export default messages;
}

declare module '*.yaml' {
  import { DefineLocaleMessage } from 'vue-i18n';
  const messages: DefineLocaleMessage;
  export default messages;
} 