export default function getSiteData() {
  return {

    skillAreas: [
      {
        name: 'Collaborating with People',
        title: null,
        subtitle: null,
        details: [
          "I really enjoy working with positive and motivated people. I prefer to collaborate with a team over building software as an individual because that method produces better results in less time.",
          "I enjoy contributing to agile grooming and estimating meetings. I am very empathetic to the end user and want them to have a great experience using the software I write.",
          "As a mentor at Thinkful/Chegg I really enjoy working with students one-on-one, keeping them motivated, and sharing my knowledge."
        ]
      },
      {
        name: 'Front End Web Development',
        keywords: ['JavaScript', 'Angular', 'React'],
        subtitle: 'I really enjoy working on the front end!',
        details: [
          'I have worked with Angular (and AngularJS) for several years at Thomson Reuters, but I prefer ReactJS which I teach at Thinkful/Chegg.',
          'I prefer using components from open-source libraries like BootstrapJS over custom component coding.',

          "Visual Studio Code is my favorite code editor and IDE even though I've with Visual Studio longer."
        ]
      },
      {
        name: 'Back End Web Development',
        subtitle: 'I am great at writing REST APIs.',
        keywords: ['ASP.Net Web API', '.Net Core', 'ExpressJS/Node'],
        details: [
          'I have several years of experience designing and implementing REST APIs using C# and ASP .Net Web API.',
          'At Thinkful I mentor and grade students who write simple backends using ExpressJS. I do not have extensive experience with that stack but I could ramp up quickly and independently if necessary.',
          'I have also done a couple small projects at Thomson Reuters using .Net Core and I look forward to using in more in the future.'
        ]
      },
      {
        name: 'Database Development',
        keywords: ['Postgres', 'MS SQL Server', 'Oracle'],
        title: "In the past I've spent a lot of time in relational databases.",
        subtitle: null,
        details: [
          "I used to spend a lot time in the database layer working with relational databases. Some of the accounting products I've worked on have very normalized databases that require a fair amount of SQL skill to extract data. ",
          "I haven't had to write complex SQL queries recently but I could ramp up quickly if necessary.",
          "I have a fair amount of experience analyzing SQL query costs using MS SQL Server and to a lesser extent, Postgres.",
          "These days I prefer to denormalize and store data in the shape that it will be read to optimize read performance at the expense of relational database correctness, but I'm flexible on that point."
        ],
      },
    ],
    jobData: [
      {
        id: 1,
        title: 'title 1',
        employer: 'employer 1',
        location: 'location 1',
        jobTitle: 'job title 1',
        details: ['accomplishment 1, accomplishment 2']
      },
      {
        id: 2,
        title: 'title 1',
        employer: 'employer 1',
        location: 'location 1',
        jobTitle: 'job title 1',
        details: ['accomplishment 1, accomplishment 2']
      }],
    education: {},
    awards: [

    ],
    contactInfo: {
      email: 'budajeff@gmail.com',
      gitHub: 'https://github.com/budajeff',
      linkedInUri: 'https://www.linkedin.com/in/jeff-buda-78901498/',
    },
    experience: [
      {
        title: 'Senior Full Stack Web Developer',
        team: 'Onvio Document Management Team',
        employer: 'Thomson Reuters',
        location: 'Ann Arbor, Michigan',
        startDate: '2019-01-01',
        endDate: 'present',
        keywords: ['TypeScript', 'Angular', 'BootstrapJS', 'REST API', 'C#', 'Postgres', 'DataDog', 'WinDbg', 'PerfView'],
        details: [
          'On the Onvio Documents team I implement various product features in ASP.Net Web API, Angular, and AngularJS.',
          'Recently I\'ve been improving backend server performance via DataDog and WinDbg.'
        ]
      },
      {
        title: 'Web Dev Technical Expert',
        team: 'Student Mentor, Grader, Training Support',
        employer: 'Thinkful / Chegg',
        location: 'Remote',
        startDate: '2019-11-01',
        endDate: 'present',
        keywords: ['React', 'ExpessJS', 'NodeJS', 'Postgres', 'JavaScript'],
        details: [
          'Mentor adult students who are learning the PERN stack (Postgres, Express, React, and Node)',
        ]
      },
      {
        title: 'Senior Full Stack Web Developer',
        team: 'Digital Spearhead Team',
        employer: 'Thomson Reuters',
        location: 'Ann Arbor, Michigan',
        startDate: '2018-01-01',
        endDate: '2018-12-01',
        keywords: ['JavaScript', 'Angular', 'BootstrapJS', '.Net Core', 'REST API', 'C#', 'Postgres', 'AWS Lambda'],
        details: [
          'The Digital Spearhead team was operated as a semi-independent startup with the Thomson Reuters corporation. In a fast-paced, MVP environment we were tasked with quickly implementing several high-impact projects.',
          'On this team I got to explore AWS first-hand. I was able to write an AWS Lambda and deploy an small internal web site.'
        ]
      },
      {
        title: 'Senior Full Stack Web Developer',
        team: 'Onvio Practice Team',
        employer: 'Thomson Reuters',
        location: 'Dexter, Michigan',
        startDate: '2014-08-01',
        endDate: '2018-01-01',
        keywords: ['AngularJS', 'BootstrapJS', 'ASP .Net Web API', 'REST', 'C#', '.Net Framework', 'Postgres', 'Oracle', 'SQLite'],
        details: [
          'On this team I helped migrate the popular Practice CS Windows software to the web. We used Oracle as the database, ASP .Net Web API to serve our REST API.',
          'The front was written in TypeScript, leveraging both AngularJS and BootstrapJS.'
        ],
        image: 'onvioPractice'
      },
      {
        title: 'Senior Software Developer',
        team: 'Practice CS Team',
        employer: 'Creative Solutions',
        location: 'Dexter, Michigan',
        startDate: '2004-10-01',
        endDate: '2014-08-01',
        keywords: ['C#', '.Net Framework', 'COM', 'MS SQL Server', 'Windows Installer API'],
        details: [
          'Creative Solutions was an early adopter of the .Net Framework and chose to rewrite their practice management software in C#. This was my first experience with C# and it is still my favorite programming language.',
        ]
      },
      {
        title: 'Software Developer',
        team: 'Payroll Solution Team',
        employer: 'Creative Solutions',
        location: 'Dexter, Michigan',
        startDate: '2001-08-15',
        endDate: '2004-10-01',
        keywords: ['Visual C++', 'MFC'],
        details: [
          'Creative Solutions offered a full suite of Windows accounting software. While working on their Payroll Solution team I wrote tax calculations for their State Unemployment Tax Forms feature.',
        ],
        image: 'csa'
      },
      {
        title: 'Programmer',
        team: null,
        employer: 'SofTech',
        location: 'Bloomfield Hills, Michigan',
        startDate: '2000-08-01',
        endDate: '2001-08-01',
        keywords: ['Visual C++', 'MFC'],
        details: [
          'This was my first full-time job as a software developer. I worked on an app that would allow users to view drawings from SolidWorks and other 3D and 2D drawing apps.',
        ],
        image: 'softech'
      },
      {
        title: 'Aspiring Programmer',
        team: null,
        employer: null,
        location: 'Lansing, Michigan',
        startDate: '1990-01-01',
        endDate: '1996-01-01',
        keywords: ['Pascal', 'BASIC'],
        details: [
          'I do recall typing some BASIC programs into our VIC 20 but I really fell in love with programming when I taught myself Turbo Pascal from Tom Swan\'s Mastering Turbo PASCAL 5.5, a book that my dad bought me for Christmas.',
          'I\'ve been hooked ever since.'
        ],
        image: 'pascal'
      }

    ],
    about: [
      {
        name: 'About This Site',
        title: null,
        subtitle: '(It\'s a coding sample).',
        details: [
          'This site demonstrates my knowledge of basic ReactJS and mobile-first CSS concepts.',
          'I chose not to use a component or layout library so that I could demonstrate the above technologies.',
          'It also demonstrates that I\'m not a UX designer, but I do enjoy working with those talented people :-).',
          '<div>The source code for this site is available at <a href="https://github.com/budajeff/portfolio-react" target="_blank" rel="noreferrer">GitHub</a>.</div>'],
        image: 'reactVsCode'
        }
    ]
  };
}