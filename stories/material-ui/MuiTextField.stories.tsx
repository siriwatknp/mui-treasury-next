import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Stack from "@material-ui/core/Stack";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import MailOutlined from "@material-ui/icons/MailOutlined";

export default {
  title: "Material-UI/TextField",
} as Meta;

export const Field: Story = () => {
  return (
    <Stack spacing={2} width={320}>
      <TextField
        required
        variant="standard"
        label="Label"
        fullWidth
        helperText="This is a helper text"
      />
      <TextField
        required
        variant="outlined"
        label="Label"
        fullWidth
        helperText="This is a helper text"
      />
      <TextField
        required
        variant="filled"
        label="Label"
        fullWidth
        helperText="This is a helper text"
      />
    </Stack>
  );
};

export const FieldError: Story = () => {
  return (
    <Stack spacing={2} width={320}>
      <TextField
        required
        variant="standard"
        label="Label"
        fullWidth
        helperText="This is a helper text"
        error
      />
      <TextField
        required
        variant="outlined"
        label="Label"
        fullWidth
        helperText="This is a helper text"
        error
      />
      <TextField
        required
        variant="filled"
        label="Label"
        fullWidth
        helperText="This is a helper text"
        error
      />
    </Stack>
  );
};

export const FieldIcon: Story = () => {
  return (
    <Stack spacing={2} width={320}>
      <TextField
        label="Label"
        fullWidth
        helperText="This is a helper text"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlined />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Label"
        fullWidth
        helperText="This is a helper text"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <MailOutlined />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Label"
        fullWidth
        helperText="This is a helper text"
        defaultValue="This is a long text. It should not be cover by icon"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlined />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <MailOutlined />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};
