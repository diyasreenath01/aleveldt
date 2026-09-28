// AQA A-level Design and Technology: Product Design (7552).
// Main topics follow the official AQA 3.1 / 3.2 numbered headings.
// The nested labels are the specification subtopics/content headings.
export const syllabus = [
  { id:'technical', code:'3.1 / PAPER 1', title:'Technical principles', source:'https://www.aqa.org.uk/subjects/design-and-technology/a-level/design-and-technology-7552/specification/subject-content/technical-principles', topics:[
    ['3.1.1','Materials and their applications',['Classification of materials','Methods for investigating and testing materials']],
    ['3.1.2','Performance characteristics of materials',['Performance characteristics of papers and boards','Performance characteristics of polymer-based sheet and film','Performance characteristics of woods','Performance characteristics of metals','Performance characteristics of polymers','Biodegradable polymers','Composites','Smart materials','Modern materials']],
    ['3.1.3','Enhancement of materials',['Polymer enhancement','Wood enhancement','Metal enhancement']],
    ['3.1.4','Forming, redistribution and addition processes',['Paper and board forming processes','Polymer processes','Metal processes','Wood processes','The use of adhesives and fixings','Jigs and fixtures']],
    ['3.1.5','The use of finishes',['Paper and board finishing','Paper and board printing processes','Polymer finishing','Metal finishing','Wood finishing']],
    ['3.1.6','Modern industrial and commercial practice',['Scales of production','Efficient use of materials','The use of computer systems','Sub-assembly']],
    ['3.1.7','Digital design and manufacture',['Computer aided design (CAD)','Computer aided manufacture (CAM)','Virtual modelling','Rapid prototyping processes','Electronic data interchange','Production, planning and control (PPC) networking']],
    ['3.1.8','The requirements for product design and development',['Product development and improvement','Inclusive design']],
    ['3.1.9','Health and safety',['Safe working practices','Safety in products and services to the customer']],
    ['3.1.10','Protecting designs and intellectual property',['Copyright and design rights','Patents','Registered designs','Trademarks and logos','Open design']],
    ['3.1.11','Design for manufacturing, maintenance, repair and disposal',['Manufacture, repair, maintenance and disposal','Ease of manufacture','Disassembly']],
    ['3.1.12','Feasibility studies',['Feasibility studies and testing prototypes']],
    ['3.1.13','Enterprise and marketing in the development of products',['Marketing and brand identity','Collaborative working']],
    ['3.1.14','Design communication',['Report writing','Graphs, tables and charts','2D and 3D sketching','Mixed media and rendering','Dimensioning and details for manufacture']]
  ]},
  { id:'designing', code:'3.2 / PAPER 2', title:'Designing and making principles', source:'https://www.aqa.org.uk/subjects/design-and-technology/a-level/design-and-technology-7552/specification/subject-content/designing-and-making-principles', topics:[
    ['3.2.1','Design methods and processes',['Iterative design process','User-centred design']],
    ['3.2.2','Design theory',['Design influences','Design styles and movements','Designers and their work']],
    ['3.2.3','How technology and cultural changes can impact on the work of designers',['Socio economic influences','Major developments in technology','Social, moral and ethical issues','Product life cycle']],
    ['3.2.4','Design processes',['The use of a design process','Prototype development','The iterative design process in industrial or commercial contexts']],
    ['3.2.5','Critical analysis and evaluation',['Critical analysis and evaluation','Testing and evaluating products in commercial contexts','Use of third party feedback in the testing and evaluation process']],
    ['3.2.6','Selecting appropriate tools, equipment and processes',['Correct tools and equipment for specific tasks','Safe working practices','Development from prototype to mass production','Batch and mass manufacture','Selecting appropriate manufacturing processes','Health and safety in a commercial setting']],
    ['3.2.7','Accuracy in design and manufacture',['Accuracy in manufacturing','Testing to eliminate errors','Measuring aids, templates, jigs and fixtures']],
    ['3.2.8','Responsible design',['Environmental issues','Conservation of energy and resources']],
    ['3.2.9','Design for manufacture and project management',['Planning for accuracy and efficiency','Quality assurance (QA)','Quality control (QC)']],
    ['3.2.10','National and international standards in product design',['British Standards Institution (BSI)','International Organization for Standardization (ISO)','Product directives and legislation','Eco-labelling and energy labelling']]
  ]}
];

export const subtopicSlug = name => name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const subtopicPath = (code, name) => `/notes/${code}/${subtopicSlug(name)}/`;
