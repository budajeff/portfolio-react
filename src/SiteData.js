export default function getSiteData() {
  return {
    skillAreas: [
      {
        name: 'Front End Web Development',
        keywords: ['JavaScript', 'Angular', 'React'],
        subtitle: 'I really enjoy working on the front end!',
        details: [
          'I have worked with Angular (and AngularJS) for several years at Thomson Reuters, but I prefer ReactJS which I teach at Thinkful.',
          'I prefer open-source components from libraries like BootstrapJS over custom component coding.',
          "Visual Studio Code is my favorite code editor even though I've with Visual Studio longer."
        ]
      },
      {
        name: 'Back End Web Development',
        keywords: ['.Net Core', 'ASP.Net Web APi']
      },
      {
        name: 'Database Development',
        title: "In the past I've spent a lot of time in relational databases.",
        subTitle: undefined,
        details: [
          "I can define relational database schema.",
          "I have tuned queries for performance using A, B, C",
          "I haven't had to use much SQL recently but I could ramp up as necessary."
        ], 
        keywords: ['SQL']
      },
      {
        name: 'Collaborating with People',
        title: "I prefer to collaborate with a team over building software as an individual."
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

    ]
  };
}