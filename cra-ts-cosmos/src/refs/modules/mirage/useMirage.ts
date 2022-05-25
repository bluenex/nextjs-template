import { useContext } from "react";
import { MirageContext } from "./MirageContext";

function useMirage() {
  return useContext(MirageContext);
}

export default useMirage;
