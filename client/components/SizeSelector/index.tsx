import * as React from 'react';
import Props from './@types/ISizeSelector';
import './size-selector.scss';

const SizeSelector = (props: Props) => {
  const [selected, setSelected] = React.useState(null);

  React.useEffect(() => {
    setSelected(props.sizes[0]);
  }, []);

  return (
    <ol className="size-selector">
      {
        props.sizes.map((size) => (
          <li
            key={size}
            className={`size-item${size === selected ? ' selected' : ''}`}
            onClick={() => setSelected(size)}
          >
            {size}
          </li>
        ))
      }
    </ol>
  );
};

export default SizeSelector;
