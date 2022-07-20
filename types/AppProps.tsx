import { AppProps as _AppProps } from 'next/app';
import { NextComponentType, NextPageContext } from 'next/types';
import { LayoutName } from "../components/Layouts";

export type AppProps = _AppProps & { Component: CustomComponent; };
type CustomComponent = NextComponentType<NextPageContext, any, {}> & {
  layout?: LayoutName;
};
