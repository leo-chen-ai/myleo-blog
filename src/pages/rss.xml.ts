import rss from '@astrojs/rss';
import { getPosts, postUrl } from '../lib/posts';
export async function GET(context) { return rss({ title: 'Leo 的技术笔记', description: '后端开发、AI 应用与工程实践', site: context.site, items: (await getPosts()).map(p=>({title:p.frontmatter.title,description:p.frontmatter.description,pubDate:new Date(p.frontmatter.date),link:postUrl(p)})), customData:'<language>zh-cn</language>' }); }
