
"use client"
import type { FC } from 'react';
import {  useGlobalModalStateStore } from '~ui';
import LoginView from '../modules/auth/login-form';
import { Modal } from '../components/ui/modal/Modal';





const GlobalModals: FC = () => {
  // Report modal state
  const showLoginModal = useGlobalModalStateStore(
    (state) => state.loginModal
  );
 
  const setShowLoginModal = useGlobalModalStateStore(
    (state) => state.setLoginModal
  );

  return (
    <>
      <Modal
        title='Login'
        size='sm'
        
        // icon={<ArrowRightCircleIcon className="  h-5 w-5" />}
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        dataTestId="login-modal"
      >
        <LoginView />
      </Modal>
    </>
  );
};

export default GlobalModals;
