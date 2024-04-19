import Unauthorized from "@/components/unauthorized";
import { getAuthUserDetails, verifyAnAcceptInvitation } from "@/lib/queries";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  searchParams: { state: string; code: string };
};

// explain: kiểm tra nếu không thuộc hoặc chưa có agency nào thì return người dùng đi
// tìm sub account đầu tiên mà người dùng có access và gửi người dùng đến subaccount

const SubaccountMainPage = async ({ searchParams }: Props) => {
  const agencyId = await verifyAnAcceptInvitation();

  if (!agencyId) {
    return <Unauthorized />;
  }

  const user = await getAuthUserDetails();
  if (!user) return;

  const getFirstSubaccountWithAccess = user.Permissions.find(
    (permission) => permission.access === true
  );

  if (searchParams.state) {
    const statePath = searchParams.state.split("___")[0];
    const stateSubaccountId = searchParams.state.split("___")[1];

    if (!stateSubaccountId) {
      return <Unauthorized />;
    }
    return redirect(
      `/subaccount/${stateSubaccountId}/${statePath}?code=${searchParams.code}`
    );
  }

  if (getFirstSubaccountWithAccess) {
    return redirect(`/subaccount/${getFirstSubaccountWithAccess.subAccountId}`);
  }

  return <Unauthorized />;
};

export default SubaccountMainPage;
