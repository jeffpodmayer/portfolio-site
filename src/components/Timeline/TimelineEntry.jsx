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
  icon: Icon,
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
        <TimelineDot>
          <Icon color={role === "Product Manager" ? "secondary" : "primary"} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>

      <TimelineContent>
        <Typography variant="h5" component="span">
          {startDate} to {endDate}
        </Typography>
        <Typography marginBottom={"35px"}>
          {experiences.map((experience, index) => (
            <Typography key={index} marginBottom={"15px"}>
              {experience}
            </Typography>
          ))}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineEntry;
