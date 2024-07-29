// import node module libraries
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import 'tippy.js/themes/light.css';
import 'tippy.js/animations/scale.css';

// Default theme, assuming light for this temporary solution
const defaultTheme = "light";

const GKTippy = ({ children, content, placement }) => {
  return (
    <Tippy
      content={<small className={`fw-bold ${defaultTheme === "light" ? "text-dark" : ""}`}>{content}</small>}
      theme={defaultTheme}
      placement={placement}
      animation={'scale'}
    >
      {children}
    </Tippy>
  );
};

// ** PropTypes
GKTippy.propTypes = {
  placement: PropTypes.oneOf(['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end']),
  content: PropTypes.string.isRequired,
};

// ** Default Props
GKTippy.defaultProps = {
  placement: 'top',
  content: "Tool Tip Text",
};

export default GKTippy;
