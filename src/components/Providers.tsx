"use client";

import { AppProvider } from "@/context/AppContext";
import { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  return <AppProvider>{children}</AppProvider>;
}
