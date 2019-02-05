export enum Colors {
  primary = '#24B4A5',
  secondary = '#81D6AF',
  positive = '#1DC153',
  negative = '#CB1A1B',
  warning = '#FDD741',
  info = '#F4F3ED',
  disabled = '#B4C8DF',
  textLigth = '#FFFFFF',
  textDark = '#111111'
}

export type Theme = "primary" | "secondary" | "positive" | "negative" | "warning" | "info" | "disabled";

export enum ColorClasses {
  primary,
  secondary,
  positive,
  negative,
  warning,
  info,
  disabled
}

export const colorClasses = {
  primary: {
    background: Colors.primary,
    color: Colors.textLigth
  },
  secondary: {
    background: Colors.secondary,
    color: Colors.textLigth
  },
  positive: {
    background: Colors.positive,
    color: Colors.textLigth
  },
  negative: {
    background: Colors.negative,
    color: Colors.textLigth
  },
  warning: {
    background: Colors.warning,
    color: Colors.textDark
  },
  info: {
    background: Colors.info,
    color: Colors.textLigth
  },
  disabled: {
    background: Colors.disabled,
    color: Colors.textLigth
  }
}

export interface IColorClass {
  background: Colors | string;
  color: Colors | string;
}

export default Colors;
