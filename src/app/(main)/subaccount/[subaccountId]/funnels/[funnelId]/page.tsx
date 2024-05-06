import BlurPage from "@/components/global/blur-page";
import { getFunnel } from "@/lib/queries";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FunnelSettings from "./_components/funnel-settings";
import { ChevronLeft } from "lucide-react";
import FunnelSteps from "./_components/funnel-steps";

type Props = {
  params: {
    funnelId: string;
    subaccountId: string;
  };
};

const FunnelPage = async ({ params }: Props) => {
  const funnelPages = await getFunnel(params.funnelId);

  if (!funnelPages) {
    return redirect(`/subaccount/${params.subaccountId}/funnels`);
  }

  return (
    <BlurPage>
      <Link
        href={`/subaccount/${params.subaccountId}/funnels`}
        className="flex justify-between mb-4 text-muted-foreground"
      >
        <div className="flex justify-center items-center">
          <ChevronLeft
            size={20}
            className="text-muted-foreground hover:-translate-x-1 transition"
          />
          <p className="ml-2">Back</p>
        </div>
      </Link>
      <h1 className="text-3xl mb-8">{funnelPages.name}</h1>
      <Tabs defaultValue="steps" className="w-full">
        <TabsList className="grid  grid-cols-2 w-[50%] bg-transparent ">
          <TabsTrigger value="steps">Steps</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="steps">
          <FunnelSteps
            funnel={funnelPages}
            subaccountId={params.subaccountId}
            pages={funnelPages.FunnelPages}
            funnelId={params.funnelId}
          />
        </TabsContent>
        <TabsContent value="settings">
          <FunnelSettings
            subaccountId={params.subaccountId}
            defaultData={funnelPages}
          />
        </TabsContent>
      </Tabs>
    </BlurPage>
  );
};

export default FunnelPage;
