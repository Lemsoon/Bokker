import { ReactNode, useState } from "react";
import { BookContext } from "./BookContext";

type ContextProps = {
  children: ReactNode;
};

export const temp = ({ children }: ContextProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return <BookContext.Provider value={setSearchTerm}>{children}</BookContext.Provider>;
};
