enum Colors {
  primary = '#226E84',
  secondary = '#F1F1F1',
  positive = '#60DD6B',
  negative = '#B72D44',
  warning = '#FFD234',
  info = '#4FA7DF',
  disabled = '#B4C8DF',
  textLigth = '#FFFFFF',
  textDark = '#111111'
}

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
    color: Colors.textDark
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
