export default function getSiteData() {
  return {

    skillAreas: [
      {
        name: 'Front End Web Development',
        keywords: ['JavaScript', 'Angular', 'React'],
        subtitle: 'I really enjoy working on the front end!',
        details: [
          'I have worked with Angular (and AngularJS) for several years at Thomson Reuters, but I prefer ReactJS which I teach at Thinkful/Chegg.',
          'I prefer using components from open-source libraries like BootstrapJS over custom component coding.',
          "Visual Studio Code is my favorite code editor even though I've with Visual Studio longer."
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
        subTitle: undefined,
        details: [
          "I can define relational database schema.",
          "I have tuned queries for performance using A, B, C",
          "I haven't had to use much SQL recently but I could ramp up as necessary."
        ],
      },
      {
        name: 'Collaborating with People',
        title: "I prefer to collaborate with a team over building software as an individual because that method produces better results in less time."
      }
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
      linkedInUri: '',

    }
  };
}