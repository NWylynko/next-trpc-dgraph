// import the layout here
import * as Default from "./Default";

export interface HeaderProps {

}

export interface MainProps {
  children: JSX.Element | JSX.Element[]
}

export interface FooterProps {

}

// add the layout here
const layouts = {
  default: Default
}

export type LayoutName = keyof typeof layouts

interface Layouts {
  [LayoutName: string]: {
    Header: (props: HeaderProps) => JSX.Element;
    Main: (props: MainProps) => JSX.Element;
    Footer: (props: FooterProps) => JSX.Element;
  }
}

const _layouts = layouts as Layouts

export const getLayout = (name: LayoutName) => {
  return _layouts[name];
}