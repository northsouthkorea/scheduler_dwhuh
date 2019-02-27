import React, { useState } from 'react';

const [Page, setPage] = useState(null);
const withPage = (importedPage) => {
  importedPage().then(({ default: page }) => setPage(page));

  const innerWithPage = (props) => {
    if (!Page) return null;
    return <Page {...props} />;
  };

  return innerWithPage;
};

export default withPage;
