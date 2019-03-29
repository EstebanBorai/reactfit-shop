import * as React from 'react';
import './modal.scss';

interface IModalProps {
  title: string;
  children: any;
}

const Modal = (props: IModalProps) => {
  return (
    <section className="modal-container">
      <div className="modal-body">
        <header>{props.title}</header>
        <main>
          {props.children}
        </main>
      </div>
    </section>
  )
};

export default Modal;
