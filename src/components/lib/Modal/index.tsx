import * as React from 'react';
import './modal.scss';

interface IModalProps {
  title: string;
  children: any;
  onClickOutside: Function;
}

const Modal = (props: IModalProps) => {
  let containerRef;
  
  const setWrapperRef = node => containerRef = node;

  const handleClickOutside = event => {
    if (containerRef && !containerRef.contains(event.target)) {
      props.onClickOutside();
    }
  }

  React.useEffect(() => {
    document.addEventListener('mousedown', event => handleClickOutside(event));

    return function() {
      document.removeEventListener('mousedown', (event) => handleClickOutside(event));
    }
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
  )
};

export default Modal;
