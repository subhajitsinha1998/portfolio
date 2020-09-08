import React from 'react';
import { Zoom, useScrollTrigger, Fab } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function ScrollToTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true
  });

  return (
    <Zoom in={trigger}>
      <div onClick={() => window.scrollTo(0, 0)} role="presentation" style={{ position: "fixed", bottom: "16px", right: "16px" }}>
        <Fab color="secondary" size="small">
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
}

export default React.memo(ScrollToTop);