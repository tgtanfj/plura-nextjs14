import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, Plus, SettingsIcon, SquareStackIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {};

const TabList = (props: Props) => {
  return (
    <TabsList className=" flex items-center flex-col justify-evenly w-full bg-transparent h-fit gap-4 ">
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>
            <TabsTrigger
              value="Settings"
              className="w-10 h-10 p-0 data-[state=active]:bg-muted"
            >
              <SettingsIcon />
            </TabsTrigger>
          </TooltipTrigger>
          <TooltipContent side="left">Settings</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>
            <TabsTrigger
              value="Components"
              className="data-[state=active]:bg-muted w-10 h-10 p-0"
            >
              <Plus />
            </TabsTrigger>
          </TooltipTrigger>
          <TooltipContent side="left">Components</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>
            <TabsTrigger
              value="Layers"
              className="w-10 h-10 p-0 data-[state=active]:bg-muted"
            >
              <SquareStackIcon />
            </TabsTrigger>
          </TooltipTrigger>
          <TooltipContent side="left">Layers</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>
            <TabsTrigger
              value="Media"
              className="w-10 h-10 p-0 data-[state=active]:bg-muted"
            >
              <Database />
            </TabsTrigger>
          </TooltipTrigger>
          <TooltipContent side="left">Media</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </TabsList>
  );
};

export default TabList;
