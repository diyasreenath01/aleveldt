export function GET({ site }) {
  const url = new URL('/sitemap.xml', site ?? 'https://aleveldt.com/').href;
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>${url}</loc></sitemap></sitemapindex>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
