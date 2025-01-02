import React from "react";
import Timeline from "@mui/lab/Timeline";
import history from "../../data/history.json";

import TimelineEntry from "./TimelineEntry";

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
        />
      ))}
    </Timeline>
  );
};

export default LeftAlignedTimeline;
