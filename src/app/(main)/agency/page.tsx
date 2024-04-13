import { getAuthUserDetails, verifyAnAcceptInvitation } from "@/lib/queries";
import React from "react";

type Props = {};

const AgencyPage = async (props: Props) => {
  const agencyId = await verifyAnAcceptInvitation();

  // get users details
  const user = await getAuthUserDetails();

  return <div></div>;
};

export default AgencyPage;
