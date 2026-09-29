import { syllabus, subtopicSlug } from './syllabus.js';

const files = import.meta.glob('../content/subtopics/**/*.md', { query: '?raw', import: 'default', eager: true });
const populated = new Set(Object.entries(files)
  .filter(([, raw]) => String(raw).replace(/<!--[\s\S]*?-->/g, '').trim())
  .map(([path]) => path.replace('../content/subtopics/', '').replace(/\.md$/, '')));

export const hasSubtopicNotes = (code, name) => populated.has(`${code}/${subtopicSlug(name)}`);
export const hasTopicNotes = code => syllabus.some(group => group.topics.some(([topic, , subtopics]) =>
  topic === code && subtopics.some(name => hasSubtopicNotes(code, name))));
export const paperPath = group => group.id === 'technical' ? '/notes/paper-1/' : '/notes/paper-2/';
export const paperName = group => group.id === 'technical' ? 'Paper 1' : 'Paper 2';
