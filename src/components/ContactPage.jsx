import Contact from "./Contact";
import { useLocation } from "react-router-dom";

export default function KontaktSeite() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedPackage = params.get("package") || "";

  return <Contact preselectedPackage={selectedPackage} />;
}
