import { syllabus, subtopicPath } from '../data/syllabus.js';
import { hasSubtopicNotes, hasTopicNotes } from '../data/contentStatus.js';
import { notes } from '../data/notes.js';

// Only list canonical, generated pages. Redirect sources and 404s must not be in the sitemap.
export function GET({ site }) {
  const base = site ?? new URL('https://aleveldt.com/');
  const paths = new Set([
    '/', '/notes/', '/notes/paper-1/', '/notes/paper-2/',
    '/specification/', '/past-papers/', '/quiz/', '/flashcards/',
    '/about/', '/search/', '/tracker/'
  ]);

  // Standalone revision articles have their own generated routes.
  for (const note of notes) {
    if (note.slug !== 'materials-and-properties') paths.add(`/notes/${note.slug}/`);
  }

  for (const group of syllabus) {
    for (const [code, , subtopics] of group.topics) {
      if (hasTopicNotes(code)) paths.add(`/notes/${code}/`);
      for (const name of subtopics) {
        if (hasSubtopicNotes(code, name)) paths.add(subtopicPath(code, name));
      }
    }
  }

  const urls = [...paths].sort().map(path => {
    const loc = new URL(path, base).href.replace(/&/g, '&amp;');
    return `<url><loc>${loc}</loc></url>`;
  }).join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
}
