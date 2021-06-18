import React from 'react';

export default function Job({ jobDetail }) {

    return (
        <section className='job'>
            <summary>
                <span className='job-employer'>{jobDetail.employer}</span>,
                <span className='job-location'>{jobDetail.location}</span> -
                <span className='job-title'>{jobDetail.jobTitle}</span>

            </summary>
            <details>
                <p>Accomplishments</p>
                <ol>
                    {jobDetail.details.map(
                        detail => <li key={detail}>{detail}</li>)}
                </ol>
                
            </details>
        </section>
    );
}
