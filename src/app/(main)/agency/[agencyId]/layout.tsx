import {
  getNotificationAndUser,
  verifyAnAcceptInvitation,
} from "@/lib/queries";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import UnauthorizedPage from "../unauthorized/page";
import Sidebar from "@/components/sidebar";

type Props = {
  children: React.ReactNode;
  params: { agencyId: string };
};

const AgencyLayout = async ({ children, params }: Props) => {
  const agencyId = await verifyAnAcceptInvitation();

  const user = await currentUser();

  if (!user) {
    return redirect("/");
  }

  if (!agencyId) {
    return redirect("/agency");
  }

  if (
    user.privateMetadata.role !== "AGENCY_OWNER" &&
    user.privateMetadata.role !== "AGENCY_ADMIN"
  ) {
    return <UnauthorizedPage />;
  }

  let allNoti: any = [];

  const notifications = await getNotificationAndUser(agencyId);

  if (notifications) {
    allNoti = notifications;
  }

  return (
    <div className="h-screen overflow-hidden">
      <Sidebar id={params.agencyId} type="agency" />
      <div className="md:pl-[300px]">{children}</div>
    </div>
  );
};

export default AgencyLayout;
