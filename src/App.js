import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import Heading from "./components/Heading";
import formData from "./DynamicForm";
import { createYupSchema } from "./lib/createSchema";
function App() {
  const initialValues = {};
  formData.forEach((item) => {
    initialValues[item.id] = item.value || "";
  });
  console.log(initialValues);
  const yepSchema = formData.reduce(createYupSchema, {});
  console.log(yepSchema);
  return (
    <Box p={4} display={"flex"}>
      <Stack direction={"row"} sx={{ flex: 1 }} gap={4}>
        <Box sx={{ flex: 1 }}>
          <Stack direction={"column"} sx={{}}>
            <Heading label={"Form"} />
            <Formik initialValues={initialValues}>
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => {
                console.log(errors);
                return (
                  <form onSubmit={handleSubmit}>
                    {formData.map((item, index) => {
                      switch (item.type) {
                        case "text":
                          return (
                            <TextField
                              {...item}
                              defaultValue=""
                              margin="normal"
                              onChange={handleChange}
                              fullWidth
                            />
                          );
                        case "number":
                          return (
                            <TextField
                              {...item}
                              defaultValue=""
                              margin="normal"
                              onChange={handleChange}
                              fullWidth
                            />
                          );
                        case "radio":
                          return (
                            <FormControl>
                              <FormLabel id="demo-radio-buttons-group-label">
                                {item.label}
                              </FormLabel>
                              <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="male"
                                name={item.id}
                                onChange={handleChange}
                              >
                                {item.options.map((option) => (
                                  <FormControlLabel
                                    {...option}
                                    control={<Radio />}
                                  />
                                ))}
                              </RadioGroup>
                            </FormControl>
                          );
                        case "select":
                          return (
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">
                                {item.label}
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={values[item.id]}
                                label={item.label}
                                onChange={handleChange(item.id)}
                                // placeholder={item.placeholder}
                                // name={item.id}
                              >
                                {item.options.map((option) => (
                                  <MenuItem value={option.value}>
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          );
                        default:
                          return <></>;
                      }
                    })}
                    <Button variant="outlined" type="submit">
                      Outlined
                    </Button>
                  </form>
                );
              }}
            </Formik>
          </Stack>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography>Preview</Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
