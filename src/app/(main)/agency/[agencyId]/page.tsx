import React from "react";

type Props = {};

const AgencyIdPage = ({params} : {params: {agencyId: string}}) => {
  return <div>{params.agencyId}</div>;
};

export default AgencyIdPage;
