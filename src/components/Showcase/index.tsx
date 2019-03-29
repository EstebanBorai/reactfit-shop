import * as React from 'react';
import Modal from 'components/lib/Modal';

const Showcase = () => {
  const [userIdentity, setIdentity] = React.useState(null);
  const [isModalOpen, setModal] = React.useState(false);

  React.useEffect(() => {
    const userStats = localStorage.getItem('reactfit-user');

    if (userStats) {
      setIdentity(userStats);
    } else {
      setModal(true);
    }
  }, []);

  return (
    <React.Fragment>
      <ul>
        <li>{userIdentity ? `Welcome back, ${userIdentity.firstName}!` : 'Welcome back!'}</li>
        <li>Products</li>
      </ul>
    </React.Fragment>
  )
};

export default Showcase;
