const axios = require('axios')

const ARTICLES_PER_PAGE = 100;
class DevToSource {
    constructor(DEVTO_API_KEY) {
        this.apikey = DEVTO_API_KEY;
    }

    async sleep(ms) {
        new Promise((resolve) => setTimeout(resolve, ms));
    }

    async fetchArticles(page) {
        const articles = await axios.get(
            `/api/v1/articles/me/published?page=${page}&per_page=${ARTICLES_PER_PAGE}`,
            {
                headers: {
                    'api-key': this.apikey,
                    'accept': 'application/vnd.forem.api-v1+json'
                },
            }
        )
        return articles
    }

    async fetchAllUserArticles(page = 1, results = []) {
        const resp = await this.fetchArticles(page)

        if (resp.status !== 200) {
            return Promise.reject(resp.statusText)
        }

        if (resp.data.length === ARTICLES_PER_PAGE) {
            await this.sleep(100)
            return this.fetchAllUserArticles(page + 1, results.concat(resp.data))
        }

        return results.concat(resp.data);
    } 
    async fetchDevToArticles() {
        const articles = await this.fetchAllUserArticles()
        const addCollection = [];
        for (const article of articles)
            addCollection.push({
                type_of: article.type_of,
                id: article.id,
                title: article.title,
                description: article.description,
                published: article.published,
                readable_publish_date: article.readable_publish_date,
                published_at: article.published_at,
                slug: article.slug,
                path: article.path,
                url: article.url,
                comments_count: article.comments_count,
                public_reactions_count: article.public_reactions_count,
                page_views_count: article.page_views_count,
                collection_id: article.collection_id,
                published_timestamp: article.published_timestamp,
                positive_reactions_count: article.positive_reactions_count,
                cover_image: article.cover_image,
                social_image: article.social_image,
                canonical_url: article.canonical_url,
                created_at: article.created_at,
                edited_at: article.edited_at,
                crossposted_at: article.crossposted_at,
                published_at: article.published_at,
                last_comment_at: article.last_comment_at,
                tag_list: article.tag_list,
                tags: article.tags,
                body_html: article.body_html,
                body_markdown: article.body_markdown,
                user: article.user
            })

        return addCollection;
    }
}

module.exports = DevToSource