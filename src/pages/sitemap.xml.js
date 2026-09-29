import { syllabus, subtopicPath } from '../data/syllabus.js';
import { hasSubtopicNotes, hasTopicNotes } from '../data/contentStatus.js';

export function GET({ site }) {
  const base = site ?? new URL('https://aleveldt.com/');
  const paths = ['/', '/notes/', '/notes/paper-1/', '/notes/paper-2/', '/past-papers/', '/quiz/', '/flashcards/', '/about/',
    '/notes/arts-and-crafts/', '/notes/bauhaus/'];
  for (const group of syllabus) for (const [code, , subtopics] of group.topics) {
    if (hasTopicNotes(code)) paths.push(`/notes/${code}/`);
    for (const name of subtopics) if (hasSubtopicNotes(code, name)) paths.push(subtopicPath(code, name));
  }
  const urls = [...new Set(paths)].map(path => `<url><loc>${new URL(path, base).href}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
