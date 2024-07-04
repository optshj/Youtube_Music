import "styled-components";
import { ThemeTypes } from "./theme";


declare module "styled-components" {
  export interface DefaultTheme extends ThemeTypes {}
}