import * as React from 'react';
import Props from './@types/IColorSelector';
import './color-selector.scss';

const ColorSelector = (props: Props) => {
  const [selected, setSelected] = React.useState(null);

  React.useEffect(() => {
    setSelected(props.colors[0]);
  }, []);

  return (
    <ol className="color-selector">
      {
        props.colors.map((color) => (
          <li
            key={color}
            className={`color-item${color === selected ? ' selected' : ''}`}
            style={{backgroundColor: color}}
            onClick={() => setSelected(color)}
          >
            &nbsp;
          </li>
        ))
      }
    </ol>
  );
};

export default ColorSelector;
