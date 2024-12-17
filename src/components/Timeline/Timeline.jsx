import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
// import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

export default function LeftAlignedTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.4,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent color="white">
          Product Manager
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sept 2024 to Present</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="white">
          Full Stack Coding Bootcamp
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Nov 2023 to October 2024</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
