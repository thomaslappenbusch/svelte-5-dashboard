// @ts-nocheck
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }:any) => {
    return {
        slug: params.slug
    };
};