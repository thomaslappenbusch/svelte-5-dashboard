import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    return {
        slug: params.slug,
        subslug: params.subslug
    };

    error(404, 'Route Not found');
};