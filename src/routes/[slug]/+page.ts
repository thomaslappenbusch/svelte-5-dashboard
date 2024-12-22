import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    return {
        slug: params.slug
    };

    error(404, 'Route Not found');
};