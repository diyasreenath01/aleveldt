import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

// Page templates supply the H1. Nest Markdown note headings without editing
// any note source or wording, and retain their relative heading hierarchy.
const nestNoteHeadings = ({ source }) => {
  if (!/^#\s+/m.test(source)) return null;
  return {
    name: 'nest-note-headings',
    heading(node, context) {
      context.replaceNode(node, {
        type: 'heading',
        depth: Math.min(node.depth + 1, 6),
        children: node.children,
      });
    },
  };
};

export default defineConfig({
  site: 'https://aleveldt.com',
  trailingSlash: 'always',
  markdown: { processor: satteri({ mdastPlugins: [nestNoteHeadings] }) },
});
