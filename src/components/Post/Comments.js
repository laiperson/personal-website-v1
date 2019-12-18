import React from "react";
import PropTypes from "prop-types";

import config from "../../../content/meta/config";

const Comments = props => {
  const { theme } = props;

  return (
    <React.Fragment>

      {/* --- STYLES --- */}
      <style jsx>{`
        .comments {
          margin: 0 -8px ${theme.space.default};
        }
      `}</style>
    </React.Fragment>
  );
};

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default Comments;
