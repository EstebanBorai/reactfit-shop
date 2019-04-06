import * as React from 'react';

import './modal.scss';

interface IModalProps {
  title: string;
  children: any;
  onClose: Function;
}

const Modal = (props: IModalProps) => {
  let containerRef;

  const setWrapperRef = (node) => containerRef = node;

  const handleClose = (event) => {
    if (event.type === 'mousedown') {
      if (containerRef && !containerRef.contains(event.target)) {
        props.onClose();
      }
    }

    if (event.type === 'keydown' && event.keyCode === 27) {
      props.onClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', (event) => handleClose(event));
    document.addEventListener('keydown', (event) => handleClose(event));

    return () => {
      document.removeEventListener('mousedown', (event) => handleClose(event));
      document.removeEventListener('keydown', (event) => handleClose(event));
    };
  }, []);

  return (
    <section className="modal-container">
      <div className="modal-body" ref={setWrapperRef}>
        <header className="modal-header">
          <h2>{props.title}</h2>
        </header>
        <main>
          {props.children}
        </main>
      </div>
    </section>
  );
};

export default Modal;
