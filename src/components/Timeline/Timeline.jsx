import * as React from "react";
import history from "../../data/history.json";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import HikingIcon from "@mui/icons-material/Hiking";

import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { Diversity3 } from "@mui/icons-material";

export default function LeftAlignedTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.5,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent color="white">
          <Typography variant="h5" component="span">
            Product Manager
          </Typography>
          <Typography>Pathloom</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <PeopleAltIcon color="secondary" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h5" component="span">
            Sept 2024 to Present
          </Typography>
          <Typography marginBottom={"35px"}>
            <Typography marginBottom={"15px"}>
              Project Management: Collaborated with an international web
              development agency to establish project timelines and led daily
              stand-up meetings, ensuring team alignment and timely deliverables
            </Typography>
            <Typography marginBottom={"15px"}>
              Design Leadership: Provided direction and feedback through Figma
              and design team meetings on wireframes and high-fidelity designs
              for a mobile app, focusing on user needs to create an intuitive
              experience
            </Typography>
            <Typography marginBottom={"15px"}>
              Stakeholder Engagement: Fostered strong relationships with
              stakeholders to gather insights for application growth, and
              collaborated with marketing teams to align branding strategies and
              ensure cohesive messaging across the app
            </Typography>
            <Typography marginBottom={"15px"}>
              Data Management: Collected needed data through external API's and
              organized data into database schema object for use in mobile
              application
            </Typography>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="white">
          <Typography variant="h5" component="span">
            Full Stack Coding Bootcamp
          </Typography>
          <Typography>Coders Campus</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <SchoolRoundedIcon color="primary"></SchoolRoundedIcon>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h5" component="span">
            Nov 2023 to October 2024
          </Typography>
          <Typography marginBottom={"35px"}>
            <Typography marginBottom={"15px"}>
              Learned Java, JavaScript, Spring, Hibernate and MySQL through 11
              months of rigorous full time course work
            </Typography>
            <Typography marginBottom={"15px"}>
              Mentored fellow students through pair programming at 4 course
              meetings per week
            </Typography>
            <Typography marginBottom={"15px"}>
              Contributed to programs open source application through ticket
              completion, code reviews and mob programming sessions
            </Typography>
            <Typography marginBottom={"15px"}>
              Used Git/GitHub for version control of production, dev and other
              feature branches
            </Typography>
            <Typography marginBottom={"15px"}>
              Collaborated in a feedback-oriented environment for professional
              development and program improvement throughout a 7 month
              programming season serving over 200 participants
            </Typography>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="white">
          <Typography variant="h5" component="span">
            Southern CA Program Director
          </Typography>
          <Typography>Outward Bound California</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <Diversity3Icon color="secondary" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h5" component="span">
            Nov 2021 to March 2023
          </Typography>
          <Typography marginBottom={"35px"}>
            <Typography marginBottom={"15px"}>
              Led a high-performing, cross-functional team, composed of 4 direct
              reports and 20 field staff members with areas of expertise ranging
              from program management to logistics to instruction
            </Typography>
            <Typography>
              Collaborated in a feedback-oriented environment for professional
              development and program improvement throughout a 7 month
              programming season serving over 200 participants
            </Typography>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="white">
          <Typography variant="h5" component="span">
            Course Director & Instructor
          </Typography>
          <Typography>Outward Bound California</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <HikingIcon color="primary" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h5" component="span">
            May 2014 to March 2020
          </Typography>
          <Typography marginBottom={"35px"}>
            {" "}
            Instructed and created curriculum for 1-4 week-long rock climbing
            and backpacking expeditions for ages 12 to adult with a focus on
            socio-emotional learning including self-awareness, self regulation,
            social responsibility and perseverance
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
