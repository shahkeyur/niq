"use client";

import { AppProvider } from "@/context/AppContext";
import { PropsWithChildren } from "react";

function Providers({ children }: PropsWithChildren) {
  return <AppProvider>{children}</AppProvider>;
}

export default Providers;
