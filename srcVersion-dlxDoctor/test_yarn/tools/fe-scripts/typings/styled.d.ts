import 'styled-components';
import { UIKitDefaultTheme } from '@pcbl-ui/themes';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends UIKitDefaultTheme {}
}
