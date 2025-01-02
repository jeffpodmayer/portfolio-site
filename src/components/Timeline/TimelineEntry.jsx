import React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import styles from "./TimelineEntry.module.css";

const TimelineEntry = ({
  role,
  organisation,
  startDate,
  endDate,
  experiences,
}) => {
  return (
    <TimelineItem className={styles.timelineItem}>
      <TimelineOppositeContent className={styles.timelineOppositeContent}>
        <Typography
          variant="h5"
          component="span"
          className={styles.timelineRole}
        >
          {role}
        </Typography>
        <Typography className={styles.timelineOrganisation}>
          {organisation}
        </Typography>
      </TimelineOppositeContent>

      <TimelineSeparator className={styles.timelineSeparator}>
        <TimelineDot></TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>

      <TimelineContent className={styles.timelineContent}>
        <Typography
          variant="h5"
          component="span"
          className={styles.timelineDate}
        >
          {startDate} to {endDate}
        </Typography>
        <Typography component="div" className={styles.timelineExperiences}>
          <ul className={styles.timelineList}>
            {experiences.map((experience, index) => (
              <li key={index} className={styles.timelineListItem}>
                <Typography
                  component="span"
                  className={styles.timelineExperience}
                >
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
