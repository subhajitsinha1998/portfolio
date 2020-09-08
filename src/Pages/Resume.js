import React from 'react';
import './Resume.css';
import { Typography, Box } from '@material-ui/core';

const Resume = ({ workExpriences }) => {
  return (
    <>
      <Typography variant="h4" align="center" className="heading">Working Experience</Typography>
      <Box component="div" className="timeline">
        {
          workExpriences.map((job, index) =>
            <React.Fragment key={index}>
              {job.year && <Typography variant="h2" className="timelineYear timelineItem">{job.year}</Typography>}
              <Box component="div" className="timelineItem">
                <Typography variant="h5" className="worktitle">{job.jobTitle}</Typography>
                <Typography variant="body1" style={{ color: "rgb(0,0,75)", textTransform: "capitalize" }}>{job.organisation}</Typography>
                <Typography variant="subtitle1" align="justify" style={{ color: "rgb(3, 0, 165)", textTransform: "initial" }}>{job.description}</Typography>
              </Box>
            </React.Fragment>
          )
        }
      </Box>
    </>
  )
}

export default React.memo(Resume);