import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
    const posts = await getCollection('blog');

    const searchData = posts.map(post => ({
        title: post.data.title,
        description: post.data.excerpt || '',
        publishDate: post.data.publishDate,
        url: `/blog/${post.id}`,
        content: post.body || '',
        tags: post.data.tags || []
    }));

    return new Response(JSON.stringify(searchData), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};