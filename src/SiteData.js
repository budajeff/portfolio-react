export default function getSiteData() {
  return {
    skillAreas: [
      {
        name: 'Front End Web Development',
        keyWords: ['JavaScript', 'Angular', 'React']
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