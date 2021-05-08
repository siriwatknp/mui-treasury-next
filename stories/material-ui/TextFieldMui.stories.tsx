import React, { useState } from "react";
import { Story, Meta, StoryContext } from "@storybook/react/types-6-0";

import Box from "@material-ui/core/Box";
import Stack from "@material-ui/core/Stack";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl, { FormControlProps } from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputBase, { InputBaseProps } from "@material-ui/core/InputBase";

import MailOutlined from "@material-ui/icons/MailOutlined";

function withContainer(Story: any, context: StoryContext) {
  return (
    <Box width={320}>
      <Story {...context} />
    </Box>
  );
}

export default {
  title: "Component/Textfield/Material",
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["medium", "small"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["standard", "filled", "outlined"],
      },
    },
    margin: {
      control: {
        type: "select",
        options: ["none", "dense", "normal"],
      },
    },
  },
  args: {
    error: false,
    variant: "standard",
    label: "Label",
    disabled: false,
    placeholder: "Basic usage",
  },
  parameters: {
    layout: "centered",
  },
  decorators: [withContainer],
} as Meta;

export const InputOnly: Story<InputBaseProps> = (args) => {
  return (
    <Stack spacing={2}>
      <Input placeholder="Input" {...args} />
      <OutlinedInput placeholder="OutlinedInput" {...args} label={undefined} />
      <FilledInput placeholder="filledInput" {...args} />
    </Stack>
  );
};
InputOnly.args = {
  margin: "none",
};

export const InputLabelInside: Story<InputBaseProps> = (args) => {
  return (
    <Stack spacing={2}>
      <FormControl>
        <InputLabel variant="standard">Label</InputLabel>
        <Input placeholder="Input" {...args} />
      </FormControl>
      <FormControl>
        <InputLabel variant="outlined">Label</InputLabel>
        <OutlinedInput placeholder="OutlinedInput" {...args} label="Label" />
      </FormControl>
      <FormControl>
        <InputLabel variant="filled">Label</InputLabel>
        <FilledInput placeholder="filledInput" {...args} />
      </FormControl>
    </Stack>
  );
};
InputLabelInside.args = {
  margin: "none",
};

export const InputLabelOutside: Story<InputBaseProps> = (args) => {
  return (
    <Stack spacing={2}>
      <FormControl>
        <FormLabel>Label</FormLabel>
        <Input placeholder="Input" {...args} />
      </FormControl>
      <FormControl>
        <FormLabel>Label</FormLabel>
        <OutlinedInput
          placeholder="OutlinedInput"
          {...args}
          label={undefined}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Label</FormLabel>
        <FilledInput placeholder="filledInput" {...args} />
      </FormControl>
    </Stack>
  );
};
InputLabelOutside.args = {
  margin: "none",
};

export const Field: Story<TextFieldProps> = (args) => {
  return (
    <Stack spacing={2}>
      <TextField {...args} variant="standard" />
      <TextField {...args} variant="outlined" />
      <TextField {...args} variant="filled" />
    </Stack>
  );
};
Field.args = {
  fullWidth: true,
  size: "medium",
  helperText: "This is a helper text",
};
Field.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
};

export const FieldError: Story<TextFieldProps> = (args) => {
  return (
    <Stack spacing={2}>
      <TextField {...args} variant="standard" />
      <TextField {...args} variant="outlined" />
      <TextField {...args} variant="filled" />
    </Stack>
  );
};
FieldError.args = {
  error: true,
  fullWidth: true,
  size: "medium",
  helperText: "This is a helper text",
};

export const FieldIcon: Story<TextFieldProps> = (args) => {
  return (
    <>
      <TextField
        {...args}
        margin="dense"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlined />
            </InputAdornment>
          ),
        }}
      />
      <br />
      <TextField
        {...args}
        margin="dense"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <MailOutlined />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};
FieldIcon.args = {
  placeholder: "Placeholder",
  fullWidth: true,
  size: "medium",
  helperText: "This is a helper text",
};

export const SelectField: Story<TextFieldProps> = (args) => {
  const [value, setValue] = useState("");
  return (
    <TextField
      {...args}
      select
      SelectProps={{ displayEmpty: true }}
      InputLabelProps={{ shrink: true }}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    >
      <MenuItem value="">
        <em>Select Option</em>
      </MenuItem>
      <MenuItem value={1}>Option 1</MenuItem>
      <MenuItem value={2}>Option 2</MenuItem>
      <MenuItem value={3}>Option 3</MenuItem>
    </TextField>
  );
};
SelectField.args = {
  fullWidth: true,
  size: "medium",
  helperText: "This is a helper text",
};

export const SelectError: Story<TextFieldProps> = (args) => {
  const [value, setValue] = useState("");
  return (
    <TextField
      {...args}
      select
      SelectProps={{ displayEmpty: true }}
      InputLabelProps={{ shrink: true }}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    >
      <MenuItem value="">
        <em>Select Option</em>
      </MenuItem>
      <MenuItem value={1}>Option 1</MenuItem>
      <MenuItem value={2}>Option 2</MenuItem>
      <MenuItem value={3}>Option 3</MenuItem>
    </TextField>
  );
};
SelectError.args = {
  error: true,
  fullWidth: true,
  size: "medium",
  helperText: "This is a helper text",
};

export const SelectIcon: Story<TextFieldProps> = (args) => {
  const [value, setValue] = useState("");
  return (
    <>
      <TextField
        {...args}
        select
        SelectProps={{ displayEmpty: true }}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlined />
            </InputAdornment>
          ),
        }}
        margin="dense"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <MenuItem value="">
          <em>Select Option</em>
        </MenuItem>
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <MenuItem value={3}>Option 3</MenuItem>
      </TextField>
      <br />
      <TextField
        {...args}
        select
        SelectProps={{ displayEmpty: true }}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <MailOutlined />
            </InputAdornment>
          ),
        }}
        margin="dense"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <MenuItem value="">
          <em>Select Option</em>
        </MenuItem>
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <MenuItem value={3}>Option 3</MenuItem>
      </TextField>
    </>
  );
};
SelectIcon.args = {
  fullWidth: true,
  size: "medium",
  helperText: "This is a helper text",
};
