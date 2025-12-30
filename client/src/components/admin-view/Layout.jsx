import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (

    <div className="flex w-full min-h-screen">
      
      {/* Admin SideBar */}
      <div className="flex- flex-1 flex-col">
        {/* Admin Header */}
        <main className="flex flex-1 bg-muted/40 p-4 md:p-6">
          <Outlet /> {/* used to render child routes */}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
