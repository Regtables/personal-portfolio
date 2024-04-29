import React from "react";

import { useModal } from "@/app/context/ModalContext";

import Popup from "../Layout/Popup/Popup";
import { InfinitySpin } from "react-loader-spinner";

const LoadingModal = () => {
  const { types, isOpen } = useModal();

  const isModalOpen = isOpen && types.includes("loading");
  return (
    <Popup toggle={isModalOpen}>
      <InfinitySpin
        // visible={true}
        width="200"
        color="var(--color-red)"
        // ariaLabel="infinity-spin-loading"
      />
    </Popup>
  );
};

export default LoadingModal;
