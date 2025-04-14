// import React from 'react';
// import { useSelector } from 'react-redux';

// const LayoutWrapper = ({ children }) => {
//   const isSidebarVisible = useSelector((state) => state.sidebar.isExpanded);
//   const isMobile = window.innerWidth < 992;
//   const showMenu = useSelector((state) => state.sidebar.showMenu); // optional
//   const isSidebarOpen = (isMobile && showMenu) || (!isMobile && isSidebarVisible);

//   return (
//     <div className={`layout content ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
//       <div className="content-body">{children}</div>
//     </div>
//   );
// };

// export default LayoutWrapper;

import React from 'react';
import { useSelector } from 'react-redux';

const LayoutWrapper = ({ children }) => {
  const isSidebarVisible = useSelector((state) => state.sidebar.isExpanded);
  const isHovered = useSelector((state) => state.sidebar.isHovered);
  const showMenu = useSelector((state) => state.sidebar.showMenu);
  const isMobile = window.innerWidth < 992;

  const isSidebarOpen = (isMobile && showMenu) || (!isMobile && (isSidebarVisible || isHovered));

  return (
    <div className={`layout content ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <div className="content-body">{children}</div>
    </div>
  );
};

export default LayoutWrapper;
