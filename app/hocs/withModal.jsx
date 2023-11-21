import React, { useState } from "react";

import WebsitePreview from "../components/WebsitePreview/WebsitePreview";

const withModal = (WrappedComponent) => {
  const WithModal = (props) => {
    const [togglePreview, setTogglePreview] = useState({
      toggle: false,
      website: null,
    });


    const handleWebsitePreviewToggle = (toggle, website) => {
      setTogglePreview({ toggle, website })
    } 

    return (
      <>
        <WrappedComponent {...props} togglePreview = {handleWebsitePreviewToggle} />

        {togglePreview.toggle && (
          <WebsitePreview
            website={togglePreview.website}
            setTogglePreview={setTogglePreview}
            togglePreview={togglePreview}
          />
        )}
      </>
    );
  };

  return WithModal
};

export default withModal
