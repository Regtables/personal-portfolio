"use client";

import React, { useEffect, useState } from "react";
import WebsitePreview from "../WebsitePreview/WebsitePreview";
import LoadingModal from "../Modals/LoadingModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <WebsitePreview />
      <LoadingModal />
    </>
  );
};

export default ModalProvider;
