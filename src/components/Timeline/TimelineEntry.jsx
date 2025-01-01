import React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const TimelineEntry = ({
  role,
  organisation,
  startDate,
  endDate,
  experiences,
}) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="white">
        <Typography variant="h5" component="span">
          {role}
        </Typography>
        <Typography>{organisation}</Typography>
      </TimelineOppositeContent>

      <TimelineSeparator>
        <TimelineDot></TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>

      <TimelineContent>
        <Typography variant="h5" component="span">
          {startDate} to {endDate}
        </Typography>
        <Typography component="div" style={{ marginBottom: "35px" }}>
          <ul style={{ listStyle: "none", marginBottom: "10px" }}>
            {experiences.map((experience, index) => (
              <li key={index} style={{ marginBottom: "15px" }}>
                <Typography component="span" style={{ marginBottom: "15px" }}>
                  {experience}
                </Typography>
              </li>
            ))}
          </ul>
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineEntry;
