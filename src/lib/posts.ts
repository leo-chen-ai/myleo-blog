export async function getPosts() {
  const entries = import.meta.glob('../posts/*.md', { eager: true });
  return Object.values(entries).filter((post: any) => !post.frontmatter.draft).sort((a: any, b: any) => b.frontmatter.date.localeCompare(a.frontmatter.date)) as any[];
}
export function postUrl(post: any) { return `/posts/${post.file.split('/').pop().replace(/\.md$/, '')}/`; }
