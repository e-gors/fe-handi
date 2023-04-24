import { Badge, Box, Chip, IconButton, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import NotesIcon from "@mui/icons-material/Notes";
import WorkIcon from "@mui/icons-material/Work";

function ProfileOverview() {
  return (
    <Box sx={{ backgroundColor: "#EEEEEE", borderRadius: 2, p: 2 }}>
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontSize: { xs: 20, md: 26 }, fontWeight: "bold" }}>
          I am currently studying at MLG College of Learning, Inc.{" "}
          {
            <IconButton>
              <EditIcon color="primary" />
            </IconButton>
          }
        </Typography>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontSize: { xs: 18, md: 24 }, fontWeight: "bold" }}>
          Bio
        </Typography>
        <Box
          sx={{
            border: "1px solid black",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            p: 1,
            mt: 1,
            cursor: "pointer",

            "&:hover": { color: "blue" },
          }}
        >
          <NotesIcon
            sx={{
              width: { xs: 25, md: 50 },
              height: { xs: 25, md: 50 },
              color: "blue",
            }}
          />
          <Box sx={{ ml: 2 }}>
            <Typography sx={{ fontWeight: 600, color: "inherit" }}>
              Add Bio
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              Make a great first impression by giving people a snapshot of who
              you are. Keep it simple and punchy for maximum effect!
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontSize: { xs: 18, md: 24 }, fontWeight: "bold" }}>
          Work Experience
        </Typography>
        <Box
          sx={{
            border: "1px solid black",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            p: 1,
            mt: 1,
            cursor: "pointer",

            "&:hover": { color: "blue" },
          }}
        >
          <WorkIcon
            sx={{
              width: { xs: 25, md: 50 },
              height: { xs: 25, md: 50 },
              color: "blue",
            }}
          />
          <Box sx={{ ml: 2 }}>
            <Typography sx={{ fontWeight: 600, color: "inherit" }}>
              Add Work Experience
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              You are more likely to get work from clients by adding experience!
              Twice as likely in fact.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontSize: { xs: 18, md: 24 }, fontWeight: "bold" }}>
          <Badge badgeContent={4} color="primary">
            Skills
          </Badge>
          <IconButton>
            <EditIcon color="primary" />
          </IconButton>
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Box>
            <Chip label="React" sx={{ mr: 1 }} />
            <Chip label="Laravel" sx={{ mr: 1 }} />
            <Chip label="Javascript" sx={{ mr: 1 }} />
            <Chip label="Version Control" sx={{ mr: 1 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileOverview;
