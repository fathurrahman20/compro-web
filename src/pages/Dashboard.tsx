import { AppSidebar } from "@/components/app-sidebar";
import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { ModalAddEditNews } from "@/components/modal-add-edit-news";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useGetNews } from "@/hooks/useNews";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

export default function DashboardPage() {
  const { data, isLoading } = useGetNews();
  const [isShowModal, setShowModal] = useState(false);

  return (
    <SidebarProvider>
      <ToastContainer />
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>News</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 h-[calc(100vh-80px)]">
          {/* <div className="bg-muted/50 " /> */}

          {isLoading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <div className="min-h-screen flex-1 rounded-xl md:min-h-min">
              <div className="flex justify-end mb-3">
                <Button onClick={() => setShowModal(true)} className="">
                  Add News
                </Button>
              </div>
              <DataTable columns={columns} data={data?.data.news || []} />
            </div>
          )}
          {isShowModal && (
            <ModalAddEditNews isOpen={isShowModal} setIsOpen={setShowModal} />
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
