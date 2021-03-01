import { getThemeProps, useTheme } from '@material-ui/styles';

export const useThemeProps = <Name extends string | symbol, Props>(
  name: Name,
  props: Props
) => {
  const theme = useTheme();
  return getThemeProps({ props, name, theme });
};
