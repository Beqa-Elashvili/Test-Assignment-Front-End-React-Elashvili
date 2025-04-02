import { useContext } from "react";
import { GlobalContext } from "./globalContext";

export function useGlobalProvider() {
  const context = useContext(GlobalContext);

  if (context === undefined) {
    throw new Error("useGlobalProvider must be used within a GlobalProvider");
  }

  return context;
}
