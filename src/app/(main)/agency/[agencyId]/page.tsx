import React from "react";

type Props = {};

const AgencyIdPage = ({ params }: { params: { agencyId: string } }) => {
  return <div className="relative h-full">{params.agencyId}</div>;
};

export default AgencyIdPage;
