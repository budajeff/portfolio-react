import React from 'react';
import Job from './Job';

export default function Jobs({ jobDetails }) {
    return (
        <ol>
            {jobDetails.map(jobDetail =>
                <Job key={jobDetail.id} jobDetail={jobDetail}></Job>)}
        </ol>
    );
}