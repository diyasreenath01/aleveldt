// AQA A-level Design and Technology: Product Design (7552).
// Navigation follows the revision-planner structure in the user's AQA textbook.
export const syllabus = [
  { id:'technical', code:'PART 1 / PAPER 1', title:'Technical principles', topics:[
    ['1','Materials and their applications',['Mechanical properties of materials','Physical properties of materials']],
    ['2','Classification of materials',['Classification of materials']],
    ['3','Methods for investigating and testing materials',['Materials testing','Simple workshop tests','Industrial tests']],
    ['4','Performance characteristics of paper and boards',['Types of paper and boards','Performance characteristics']],
    ['5','Performance characteristics of polymer-based sheet and film',['Performance characteristics of polymer-based sheet and film']],
    ['6','Performance characteristics of woods',['Different stock forms of timber','Characteristics of wood','Different woods, performance characteristics and applications']],
    ['7','Performance characteristics of metals',['Stock forms','Characteristics of metals and applications']],
    ['8','Performance characteristics of polymers',['Stock forms','Characteristics of polymers']],
    ['9','Biodegradable polymers',['Characteristics of biodegradable polymers','Degradation']],
    ['10','Composites',['Characteristics of composites']],
    ['11','Smart materials',['Characteristics of smart materials']],
    ['12','Modern materials',['Characteristics of modern materials']],
    ['13','Enhancement of materials',['Polymer enhancement','Wood enhancement','Metal enhancement']],
    ['14','Paper and board forming processes',['Die cutting and creasing','Bending','Laser cutting']],
    ['15','Polymer processes',['Polymer processes']],
    ['16','Metal processes',['Metal processes','Addition/fabrication processes','Temporary fasteners and joining methods','Wasting processes']],
    ['17','Wood processes',['Addition/fabrication processes','Forming processes']],
    ['18','Adhesives and fixings',['Polyvinyl acetate (PVA)','Contact adhesive','UV hardening adhesive','Solvent cement','Epoxy resin','Jigs and fixtures']],
    ['19','The use of finishes',['Paper and board finishing','Paper and board printing processes','Polymer finishing','Metal finishing','Cathodic protection','Wood finishing']],
    ['20','Modern industrial and commercial practice',['Scales of production','Efficient use of materials','The use of computer systems','Sub-assembly']],
    ['21','Digital design and manufacture',['Computer aided design (CAD)','Computer aided manufacture (CAM)','Virtual modelling','Rapid prototyping processes','Electronic data interchange','Production, planning and control (PPC) networking']],
    ['22','The requirements for product design and development',['Product development and improvement','Inclusive design']],
    ['23','Health and safety',['Safe working practices','Safety in products and services to the customer']],
    ['24','Protecting designs and intellectual property',['Intellectual property (IP)','Copyright and design rights','Patents','Registered designs','Trademarks and logos','Open design']],
    ['25','Design for manufacturing, maintenance, repair and disposal',['Ease of manufacture','Disassembly']],
    ['26','Feasibility studies',['Computer modelling in production planning','Feasibility studies and costings','Feasibility modelling in design','Testing prototypes']],
    ['27','Enterprise and marketing in the development of products',['The importance of marketing and brand identity','Collaborative work']],
    ['28','Design communication',['Report writing','The use of graphs, tables and charts','2D and 3D drawing','Dimensioning and details for manufacture']],
    ['29','Modern manufacturing systems',['Modern manufacturing systems']]
  ]},
  { id:'designing', code:'PART 2 / PAPER 2', title:'Designing and making principles', topics:[
    ['1','Design methods and processes',['Iterative design process','User-centred design (UCD)']],
    ['2','Design influences, styles and movements',['Design influences, styles and movements']],
    ['3','Designers and their work',['Designers and their work']],
    ['4','Socio-economic influences',['Post-First World War','The Second World War','Contemporary times']],
    ['5','Major developments in technology',['Microelectronics','New materials','New methods of manufacture','Advancements in CAD/CAM']],
    ['6','Social, moral and ethical issues',['Sustainable materials and ethical production','Cultural acceptability','Inclusive design','Social problems','Fairtrade','The six Rs of sustainability']],
    ['7','Product life cycle',['The stages of the product life cycle (PLC)','Redefining and redeveloping products']],
    ['8','Design processes',['The use of a design process']],
    ['9','Critical analysis and evaluation',['How to critically analyse and evaluate','Testing and evaluating products in industrial or commercial contexts','Use of third-party feedback in the testing and evaluation process']],
    ['10','Selecting appropriate tools, equipment and processes',['Using the correct tools and equipment for specific tasks','Ensuring your own safety and that of others','Development of designs','The manufacturing process','Selecting the most appropriate manufacturing process','The importance of health and safety']],
    ['11','Accuracy in design and manufacture',['Measuring and marking out','The importance of accuracy','How testing can eliminate errors','Measuring aids']],
    ['12','Responsible design',['Environmental issues','Conservation of energy and resources']],
    ['13','Design for manufacture and project management',['Planning for accuracy and efficiency','Making recommendations for accuracy','Quality assurance (QA)','Quality control (QC)']],
    ['14','National and international standards in product design',['British Standards Institution (BSI)','International Organization for Standardization (ISO)','Directives and labelling initiatives']]
  ]}
];

export const subtopicSlug = name => name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const subtopicPath = (code, name) => `/notes/${code}/${subtopicSlug(name)}/`;
