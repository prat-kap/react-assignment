import React from "react";
import PropTypes from "prop-types";

import "./index.css";

const Tabs = (props) => {
  const { activeTab, setActiveTab, header, content } = props;
  return (
    <>
      <ul className="tabHeader">
        {header.map((item, index) => {
          return (
            <li
              className={activeTab === item ? "active" : ""}
              key={index}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div className="tabContent">{content}</div>
    </>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
  header: PropTypes.array,
  content: PropTypes.node,
};

export default Tabs;
