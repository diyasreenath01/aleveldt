export const notes = [
  { slug: 'arts-and-crafts', title: 'Arts & Crafts movement', category: 'Design history', type: 'Designing & making', description: 'Craftsmanship, materials and the reaction against mass production.', reading: '6 min', number: '01' },
  { slug: 'bauhaus', title: 'The Bauhaus', category: 'Design history', type: 'Designing & making', description: 'How form, function and industrial production shaped modern design.', reading: '7 min', number: '02' },
  { slug: 'materials-and-properties', title: 'Materials & properties', category: 'Materials', type: 'Technical principles', description: 'Choosing materials through their physical and working properties.', reading: '8 min', number: '03' },
];

export const categories = [
  { name: 'Designing & making', count: notes.filter(note => note.type === 'Designing & making').length, description: 'Movements, designers and the thinking behind great products.', icon: '✳', href: '/notes/?category=Designing%20%26%20making' },
  { name: 'Technical principles', count: notes.filter(note => note.type === 'Technical principles').length, description: 'Materials, processes and the details that make designs work.', icon: '◈', href: '/notes/?category=Technical%20principles' },
];
