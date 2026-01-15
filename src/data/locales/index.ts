import { en } from './en';
import { th } from './th';

export const locales = {
    en,
    th
};

export type Language = 'en' | 'th';
export type Translation = typeof en;
