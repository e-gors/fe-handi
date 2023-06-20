import {
  Box,
  Button,
  FormHelperText,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import FormField from "../../../../components/FormField";
import SelectDropdown from "../../../../components/SelectDropdown";
import { useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

const places = ["Hilongos", "Matalom", "Hindang", "Inopacan", "Bato"];

const styles = {
  wrapper: {
    mt: 5,
  },
  titleWrapper: {
    mt: 2,
    mb: 2,
  },

  buttonWrapper: {
    display: "flex",
    justifyContent: "space-between",
    mt: 5,
  },
  back: {
    transition: "0.5s",

    "&:hover": {
      textDecoration: "underline",
    },
  },
  backArrow: {
    mr: 1,
  },
  cancel: {
    mr: 2,
  },
  next: {
    maxWidth: 200,
    background: `linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)`,
    margin: "0 auto",
    transition: "1s",

    "&:hover": {
      background: `linear-gradient(0deg, rgba(0,3,255,1) 50%, rgba(2,126,251,1) 100%)`,
    },
  },
  rightButtons: { display: "flex", justifyContent: "space-between" },
};

function OptionalFields(props) {
  const {
    category,
    steps,
    activeStep,
    handleCancel,
    handleNext,
    handleBack,
    locations,
    setLocations,
    skillses,
    setSkills,
    ques,
    setQues,
  } = props;

  const skills = useSelector((state) => state.skills.skills);

  const [selectedLocations, setSelectedLocations] = React.useState([]);
  const [selectedSkills, setSelectedSkills] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    if (locations) {
      setSelectedLocations(locations);
    }
    if (skillses) {
      setSelectedSkills(skillses);
    }
    if (ques) {
      setQuestions(ques);
    }
  }, []);

  const handleChange = (state, value) => {
    const newValue = typeof value === "string" ? value.split(",") : value;
    if (state === "locations") {
      setSelectedLocations(newValue);
    } else {
      setSelectedSkills(newValue);
    }
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { text: "", readonly: false }]);
  };

  const handleSaveQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].readonly = true;
    setQuestions(newQuestions);
  };

  const handleDeleteQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (event, index) => {
    const newQuestions = [...questions];
    newQuestions[index].text = event.target.value;
    setQuestions(newQuestions);
  };

  const handleKeyPress = (event, index) => {
    if (event.key === "Enter") {
      handleSaveQuestion(index);
    }
  };

  const filteredSkill = skills.filter((skill) => category.includes(skill.name));

  const handleValidate = () => {
    setLocations(selectedLocations);
    setSkills(selectedSkills);
    setQues(questions);
    handleNext();
  };

  return (
    <Box sx={styles.wrapper}>
      <Box>
        <Typography sx={{ fontSize: 24, mb: 2 }}>About Applicants</Typography>
        <Box>
          <Typography>Prefered Worker Location</Typography>
          <FormHelperText>You can select 1 or more locations</FormHelperText>
          <SelectDropdown
            label="Prefered Location"
            name="locations"
            onChange={(e) => handleChange("locations", e.target.value)}
            value={selectedLocations}
            multiple
            options={places}
          />
        </Box>
        <Box sx={styles.titleWrapper}>
          <Typography>Required Skills</Typography>
          <FormHelperText>
            Select the professional skills and software tools required to
            complete this job successfully.
          </FormHelperText>
          <SelectDropdown
            value={selectedSkills}
            name="skills"
            label="Required Skills"
            subCategories={filteredSkill}
            onChange={(e) => handleChange("skills", e.target.value)}
            multiple
          />
        </Box>
        <Box>
          <Typography>Questions</Typography>
          <FormHelperText>
            Add questions applicants should answer to stand out. Applicants who
            with great answers should be shortlisted.
          </FormHelperText>
          {questions &&
            questions.map((question, i) => (
              <Box key={i} sx={{ display: "flex", m: 1 }}>
                <FormField
                  fullWidth
                  size="small"
                  label="Question"
                  placeholder="Add some questions to be answered by the applicants"
                  value={question.text}
                  onChange={(event) => handleQuestionChange(event, i)}
                  onKeyPress={(event) => handleKeyPress(event, i)}
                  disabled={question.readonly}
                />
                {!question.readonly && (
                  <IconButton onClick={() => handleSaveQuestion(i)}>
                    <SaveAltIcon color="primary" />
                  </IconButton>
                )}
                {question.readonly && (
                  <IconButton onClick={() => handleDeleteQuestion(i)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                )}
              </Box>
            ))}
          <Button
            variant="text"
            startIcon={<AddIcon />}
            onClick={handleAddQuestion}
          >
            Add question
          </Button>
        </Box>

        <Box sx={styles.buttonWrapper}>
          <Button
            color="primary"
            onClick={handleBack}
            size="small"
            sx={styles.back}
            disabled={activeStep === 0 ? true : false}
            type="text"
          >
            <ArrowBackIcon sx={styles.backArrow} />
            <span>Back</span>
          </Button>
          <Box sx={styles.rightButtons}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleCancel}
              size="small"
              sx={styles.cancel}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleValidate()}
              size="small"
              sx={styles.next}
            >
              {activeStep + 1 === steps.length ? "Post my job" : "Next Step"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default OptionalFields;
