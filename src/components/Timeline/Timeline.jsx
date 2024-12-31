import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import history from "../../data/history.json"; // Import your history data

import TimelineEntry from "./TimelineEntry"; // Import TimelineEntry component

const LeftAlignedTimeline = () => {
  return (
    <Timeline>
      {history.map((entry, index) => (
        <TimelineEntry
          key={index}
          role={entry.role}
          organisation={entry.organisation}
          startDate={entry.startDate}
          endDate={entry.endDate}
          experiences={entry.experiences}
          // icon={index % 2 === 0 ? SomeIcon1 : SomeIcon2} // Assigning icons conditionally
        />
      ))}
    </Timeline>
  );
};

export default LeftAlignedTimeline;
