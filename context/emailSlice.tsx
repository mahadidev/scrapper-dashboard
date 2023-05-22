import React, { useState } from "react";

const emailSlice = () => {
  // state
  const [emailModalVisibility, setEmailModalVisibility] =
    useState<boolean>(false);

  return {
    emailModalVisibility,
    setEmailModalVisibility,
  };
};

export default emailSlice;
