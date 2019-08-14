export default {
  name: 'Justin Guertin',
  headline: 'Full Stack Developer, Solutions Architect, Empowering Leader',
  about: 'With over 20 years of practice building software solutions, I am focused on delivering software that provides a great experience for end users.  I leverage modern processes and technologies to build quality into software delivery.',
  links: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/justinguertin', icon: 'fab fa-linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/jguertin', icon: 'fab fa-twitter' },
    { name: 'Github', url: 'https://github.com/jguertin', icon: 'fab fa-github' }
  ],
  jobs: [
    {
      company: 'Vituary Solutions',
      url: 'http://www.vituary.com/',
      position: 'Solutions Architect, Owner',
      start: 'July 2019',
      end: 'Present',
      summary: 'Full owner and operator of the organization.',
      highlights: [
        'Implemented the Material designed organization website, leveraging Vue.js, Quasar and static content hosting on Firebase',
        'Provided social media and open source footprint'
      ]
    },
    {
      company: 'Complia Health',
      url: 'http://www.compliahealth.com/',
      position: 'Development Team Lead',
      start: 'June 2018',
      end: 'August 2019',
      summary: 'Led the team responsible for maintenance and improvements to the Clinical Care web product.  Used Scrum to manage daily work, engaging the team to make many iterative product improvements.',
      highlights: [
        'Introduced Unit Test Suite execution and other improvements to the Build Pipeline',
        'Improved team efficiency by lowering WIP and enforcing smaller batch sizes',
        'Enhanced processes to significantly reduce disruptions',
        'Led implementation of several high value features',
        'Introduced tooling to support automated deployment of database migration scripts',
        'Core Technologies: .NET (C#), Angular.js, TypeScript, Azure DevOps, SQL Server, PowerShell'
      ]
    },
    {
      company: 'xMatters',
      url: 'https://www.xmatters.com/',
      position: 'Java Developer',
      start: 'January 2018',
      end: 'June 2018',
      summary: 'Member of development team responsible for building and executing integrations.',
      highlights: [
        'Delivered enhancements to web based front end (GWT) and Java back-end',
        'Performed maintenance and added features to Spring Boot based microservices',
        'Implemented monitoring dashboards using Grafana and Prometheus',
        'Deployed services to Google Cloud Platform with Spinnaker'
      ]
    },
    {
      company: 'Illumina (formerly GenoLogics)',
      url: 'https://www.illumina.com/',
      position: 'Software Development Manager',
      start: 'November 2015',
      end: 'December 2017',
      summary: 'Manager and lead of cross-functional development team. Responsible for strategic project to upgrade the Clarity LIMS product to a scalable multi-tenant architecture.',
      highlights: [
        'Migrated monolithic deployment of Clarity LIMS and dependencies to docker based approach for individual components',
        'Introduced microservices approach to decouple stateful components from the application',
        'Replaced daily indexing of sample search system with live indexing using RabbitMQ, Spring Boot and Elasticsearch',
        'Led development team porting system configuration from a legacy desktop interface to a web interface'
      ]
    },
    {
      company: 'GenoLogics',
      url: 'https://www.genologics.com/',
      position: 'Software Developer',
      start: 'July 2012',
      end: 'October 2015',
      summary: 'Senior member of team responsible for implementing features and defect corrections to the Clarity LIMS web product. This team also maintained and migrated features from the legacy GenoLogics LIMS desktop product.',
      highlights: [
        'Actively provided innovative solutions for new features and challenges',
        'Implemented multi-tenant capabilities into the existing single customer Grails product',
        'Added many customer facing UI features leveraging React.js and Ext JS',
        'Delivered a trigger based auditing solution for PostgreSQL and Oracle'
      ]
    },
    {
      company: 'Terapeak',
      url: 'https://www.terapeak.ca/',
      position: 'Application Developer',
      start: 'January 2011',
      end: 'June 2012',
      summary: 'Member of development team participating in R&D projects while contributing to additions of the core eBay analytics web product.',
      highlights: [
        'Delivered an improved Java replacement of the core PHP based API',
        'Implemented JVM based web services',
        'Contributed significantly to improvements in build, deployment and QA processes',
        'Leader in achieving a high test coverage',
        'Contributed to a big data project harnessing Solr'
      ]
    },
    {
      company: 'BC Ferries',
      url: 'https://www.bcferries.com/',
      position: 'Technical Team Lead',
      start: 'December 2008',
      end: 'January 2011',
      summary: 'Led a dynamic team of 5 to 8 developers responsible for sustainment of customer facing systems including Point of Sale, Web Based Application Features and Highway Signs.',
      highlights: [
        'Introduced several tools and methodologies to improve productivity',
        'Developed training plans for development team',
        'Significant maintenance of PL/SQL packages',
        'Development in C# on the .NET Compact Framework'
      ]
    },
    {
      company: 'Selkirk Systems',
      url: 'http://www.selkirksystems.com/',
      position: 'Java Programmer',
      start: 'October 2005',
      end: 'December 2008',
      summary: 'Member of a development team responsible for maintenance and implementation new features for Java based emergency resource management systems.',
      highlights: [
        'Involved in design and implementation of new systems and features',
        'Led all aspects of Fuel Management Pilot web application for UBCM and MoF',
        'Began using Scrum process, acting as ScrumMaster for daily stand-ups'
      ]
    },
    {
      company: 'Abebooks',
      url: 'https://www.abebooks.com/',
      position: 'Software Developer',
      start: 'September 1998',
      end: 'October 2005',
      summary: 'Over 7 years, was engaged in many projects integral to the success of the organization. Was the primary individual responsible for the backend of the eCommerce ordering and system and scheduled batch processes.',
      highlights: [
        'Delivered the order processing system used to intake orders from all partners and end users',
        'Implemented system for importing ISBN data and images from 3rd party vendor',
        'Maintained batch processes for matching saved searches and delivering email notifications',
        'Wrote scripts to import unique customer data formats',
        'Added customer facing features to web UI using Java servlets'
      ]
    }
  ],
  education: [
    {
      institution: 'Camosun College',
      url: 'http://camosun.ca/',
      program: 'Computer Systems Technology',
      award: 'Diploma',
      start: 'September 1995',
      end: 'June 1998',
      summary: 'Completed 2.5 year program, learning about software development, primarily using C++.  For the final Capstone Project, I worked on a team which developed a robot capable of autonomous motion.'
    }
  ],
  skills: [
    {
      name: 'Methodologies',
      color: 'primary',
      values: [
        { name: 'Scrum', value: 1.0 },
        { name: 'Kanban', value: 1.0 },
        { name: 'Test Driven Development', value: 1.0 },
        { name: 'Continuous Integration', value: 1.0 },
        { name: 'Continuous Delivery', value: 0.8 },
        { name: 'DevOps', value: 0.8 },
        { name: 'Microservices', value: 0.6 }
      ]
    },
    {
      name: 'Languages',
      color: 'accent',
      values: [
        { name: 'Java', value: 1.0 },
        { name: 'Groovy', value: 1.0 },
        { name: 'JavaScript', value: 0.8 },
        { name: 'TypeScript', value: 0.6 },
        { name: 'C#', value: 0.6 },
        { name: 'Kotlin', value: 0.4 },
        { name: 'Python', value: 0.2 }
      ]
    },
    {
      name: 'Frameworks',
      color: 'secondary',
      values: [
        { name: 'Sprint Boot', value: 1.0 },
        { name: 'Spring IoC', value: 1.0 },
        { name: 'Grails', value: 1.0 },
        { name: 'JUnit + Mockito', value: 1.0 },
        { name: 'React', value: 0.8 },
        { name: 'Ext JS', value: 0.8 },
        { name: 'Jest', value: 0.6 },
        { name: 'AngularJS', value: 0.4 },
        { name: 'Vue.js', value: 0.4 },
        { name: 'Django', value: 0.2 }
      ]
    },
    {
      name: 'Tools & Platforms',
      color: 'tertiary',
      values: [
        { name: 'RDBMS', value: 1.0 },
        { name: 'Gradle', value: 1.0 },
        { name: 'Docker', value: 0.8 },
        { name: 'Git', value: 0.8 },
        { name: 'Jenkins', value: 0.8 },
        { name: 'Redis', value: 0.6 },
        { name: 'RabbitMQ', value: 0.6 },
        { name: 'Elasticsearch', value: 0.6 },
        { name: 'Amazon Web Services', value: 0.6 },
        { name: 'Google Cloud Platform', value: 0.6 }
      ]
    }
  ],
  certifications: [
    {
      institution: 'Scrum Alliance',
      certificate: 'Certified ScrumMaster',
      year: 2016
    },
    {
      institution: 'Illumina',
      certificate: 'Situational Leadership',
      year: 2016
    },
    {
      institution: 'Illumina',
      certificate: 'Coaching for High Performance',
      year: 2017
    },
    {
      institution: 'Illumina',
      certificate: 'Crucial Conversations',
      year: 2017
    }
  ]
}
