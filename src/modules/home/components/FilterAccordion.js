import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

function FilterAccordion() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ color: "text.secondary" }}>Salary Range</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="250-500" />
            <FormControlLabel control={<Checkbox />} label="500-1000" />
            <FormControlLabel control={<Checkbox />} label="1000-5000" />
            <FormControlLabel control={<Checkbox />} label="5000-10000" />
            <FormControlLabel control={<Checkbox />} label="10000-20000" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Location</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Inopacan" />
            <FormControlLabel control={<Checkbox />} label="Hilongos" />
            <FormControlLabel control={<Checkbox />} label="Hindang" />
            <FormControlLabel control={<Checkbox />} label="Bato" />
            <FormControlLabel control={<Checkbox />} label="Matalom" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FilterAccordion;
