import React, { PropsWithChildren } from "react";
import cx from "clsx";
import {
  experimentalStyled as styled,
  unstable_useThemeProps as useThemeProps,
  Theme,
} from "@material-ui/core/styles";
import { unstable_composeClasses as composeClasses } from "@material-ui/unstyled";
import { SxProps } from "@material-ui/system";
import SvgIcon from "@material-ui/core/SvgIcon";
import Input, { InputProps } from "@material-ui/core/Input";
import FilledInput, { FilledInputProps } from "@material-ui/core/FilledInput";
import OutlinedInput, {
  OutlinedInputProps,
} from "@material-ui/core/OutlinedInput";
import InputAdornment, {
  InputAdornmentProps,
} from "@material-ui/core/InputAdornment";
import ButtonBase, { ButtonBaseProps } from "@material-ui/core/ButtonBase";
import {
  getNumberInputUtilityClass,
  numberInputClasses,
} from "./numberInputClasses";
import { useNumberInput, UseNumberInputOptions } from "./useNumberInput";

export type NumberInputClassKey = keyof typeof numberInputClasses;
export type NumberInputClasses = Partial<typeof numberInputClasses>;

interface StandardVariant extends InputProps {
  variant?: "standard";
}
interface FilledVariant extends FilledInputProps {
  variant?: "filled";
}
interface OutlinedVariant extends OutlinedInputProps {
  variant?: "outlined";
}

export type NumberInputProps = UseNumberInputOptions & {
  sx?: SxProps<Theme>;
  incrementIcon?: React.ReactNode;
  decrementIcon?: React.ReactNode;
  DecrementProps?: ButtonBaseProps;
  IncrementProps?: ButtonBaseProps;
  InputAdornmentProps?: InputAdornmentProps;
  StepperProps?: JSX.IntrinsicElements["div"];
} & Omit<StandardVariant | FilledVariant | OutlinedVariant, "onChange">;

const useUtilityClasses = (styleProps: NumberInputProps) => {
  const { classes, type } = styleProps;
  const slots = {
    stepper: ["stepper"],
    button: ["button", type],
  };
  return composeClasses(
    slots,
    getNumberInputUtilityClass,
    classes as Required<NumberInputProps["classes"]>
  );
};

const NumberInputStepper = styled(
  "div",
  {},
  {
    name: "JunNumberInput",
    slot: "Stepper",
    overridesResolver: (props, styles) => styles.stepper,
  }
)({
  display: "flex",
  flexDirection: "column",
  marginRight: -8,
});

const NumberInputButton = styled(
  ButtonBase,
  {},
  {
    name: "JunNumberInput",
    slot: "Button",
    overridesResolver: (props, styles) => {
      const { styleProps } = props;
      return {
        ...styles.button,
        ...styles[styleProps.type],
      };
    },
  }
)<{ styleProps: { type: "increment" | "decrement" } }>(({ theme }) => ({
  width: 24,
  height: 24,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 4,
  "&:hover": {
    color: theme.palette.text.primary,
  },
  "&.Mui-disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
}));

interface NumberInputComponent {
  <P extends { as?: React.ElementType }>(
    props: P extends { as: infer As }
      ? As extends keyof JSX.IntrinsicElements
        ? P & NumberInputProps & JSX.IntrinsicElements[As]
        : As extends React.ComponentType<infer AsProps>
        ? P & NumberInputProps & AsProps
        : PropsWithChildren<P & NumberInputProps>
      : PropsWithChildren<P & NumberInputProps>
  ): JSX.Element | null;
}

const Variants = {
  standard: Input,
  filled: FilledInput,
  outlined: OutlinedInput,
};

const defaultIncrementIcon = (
  <SvgIcon>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
  </SvgIcon>
);
const defaultDecrementIcon = (
  <SvgIcon>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </SvgIcon>
);

export const NumberInput: NumberInputComponent = React.forwardRef<
  any,
  PropsWithChildren<NumberInputProps>
>(function NumberInput(inProps, ref) {
  const props = useThemeProps<Theme, NumberInputProps, "JunNumberInput">({
    props: inProps,
    name: "JunNumberInput",
  });
  const {
    variant = "outlined",
    endAdornment = null,
    defaultValue,
    allowMouseWheel,
    keepWithinRange,
    clampValueOnBlur,
    focusInputOnChange,
    incrementIcon = defaultIncrementIcon,
    decrementIcon = defaultDecrementIcon,
    IncrementProps,
    DecrementProps,
    InputAdornmentProps,
    StepperProps,
    formatter,
    parser,
    ...other
  } = props;

  const styleProps = {
    ...props,
  };

  const classes = useUtilityClasses(styleProps);
  const InputComponent = Variants[variant];

  const {
    inputRef,
    getInputA11yProps,
    getInputHandlerProps,
    getIncrementProps,
    getDecrementProps,
  } = useNumberInput(props);

  return (
    <InputComponent
      ref={ref}
      {...other}
      {...getInputHandlerProps(props)}
      inputRef={inputRef}
      inputProps={getInputA11yProps()}
      endAdornment={
        <>
          {endAdornment}
          <InputAdornment {...InputAdornmentProps} position="end">
            <NumberInputStepper
              {...StepperProps}
              className={cx(classes.stepper, StepperProps?.className)}
            >
              <NumberInputButton
                {...IncrementProps}
                {...getIncrementProps(IncrementProps)}
                className={cx(classes.button, IncrementProps?.className)}
                styleProps={{ type: "increment" }}
              >
                {incrementIcon}
              </NumberInputButton>
              <NumberInputButton
                {...DecrementProps}
                {...getDecrementProps(DecrementProps)}
                className={cx(classes.button, DecrementProps?.className)}
                styleProps={{ type: "decrement" }}
              >
                {decrementIcon}
              </NumberInputButton>
            </NumberInputStepper>
          </InputAdornment>
        </>
      }
    />
  );
});
