import { syllabus, subtopicPath } from '../data/syllabus.js';
export async function GET({ site }) {
  const base = site ?? new URL('https://aleveldt.com');
  const paths = ['/', '/notes/', '/past-papers/', '/tracker/', '/quiz/', '/flashcards/', '/exam-technique/', '/answer-trainer/', '/topic-questions/'];
  for (const group of syllabus) for (const [code,,subs] of group.topics) {
    paths.push('/notes/'+code+'/');
    for (const sub of subs) paths.push(subtopicPath(code, sub));
  }
  const urls=[...new Set(paths)].map(p=>'<url><loc>'+new URL(p,base).href+'</loc><changefreq>weekly</changefreq><priority>'+(p==='/'?'1.0':p.startsWith('/notes/')?'0.9':'0.7')+'</priority></url>').join('');
  return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+urls+'</urlset>',{headers:{'Content-Type':'application/xml'}});
}