import './App.css';
import Jobs from './Jobs.js';

function App() {

  const portfolioData = {
    skillAreas: [
      {
        name: 'Front End Web Development',
        keyWords: ['JavaScript', 'Angular', 'React']
      },
      {
        name: 'Back End Web Development',
        keywords: ['.Net Core', 'ASP.Net Web APi']
      }],
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

  return (
    <div className="App" >
      <header><h1>Jeff Buda</h1></header>
      <section className='main'>

        <section className='experience-column'>
          <h2>Experience</h2>
          <Jobs jobDetails={portfolioData.jobData}></Jobs>
        </section>
        <section className='skills-column'>
          <h2>Skills</h2>
          <h2>Education</h2>
          <h2>Awards</h2>
        </section>
      </section>
    </div >
  );
}

export default App;
