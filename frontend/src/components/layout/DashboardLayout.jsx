import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useStateContext } from "../../utils/ContextProvider";
import SideBarPanel from "../SideBar/SideBarPanel";
import TopBar from "../Topbar/TopBar";
import { AnimatePresence, motion } from "framer-motion";
import { ConfirmationModal } from "../Modal/ConfirmationModal";
import RightSideBar from "../RightSideBar/RightSideBar";

const DashboardLayout = () => {
  const { authUser, showRightSidebar } = useStateContext();
  const { pathname } = useLocation();
  const { showModal, closeModal } = useStateContext();
  return (
    <ProSidebarProvider>
      <div className="app">
        <aside>
          <SideBarPanel userRole={authUser} />
        </aside>
        <main
          className="content"
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <TopBar />

          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              height: "100%",
              maxHeight: "100%",
              overflowY: "auto",
            }}
          >
            <Outlet />

            <AnimatePresence
              // Disable any initial animations on children that
              // are present when the component is first rendered
              initial={false}
              // Only render one component at a time.
              // The exiting component will finish its exit
              // animation before entering component is rendered
              mode="wait"
              // Fires when all exiting nodes have completed animating out
              onExitComplete={() => null}
            >
              {showModal && (
                <ConfirmationModal
                  handleClose={closeModal}
                  content="Are You Sure Want to Log Out?"
                />
              )}
            </AnimatePresence>
          </motion.div>
        </main>
        {showRightSidebar && <RightSideBar />}
      </div>
    </ProSidebarProvider>
  );
};

export default DashboardLayout;
