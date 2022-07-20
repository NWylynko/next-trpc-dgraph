import { NextPage } from 'next';
import { LayoutName } from '../components/Layouts';

export type Page<Props = {}> = NextPage<Props> & { layout?: LayoutName; };
