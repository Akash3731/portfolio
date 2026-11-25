import type { ComponentType } from "react";
import type { ServiceIllustration } from "@/lib/types";
import CoverAcadmea from "./CoverAcadmea";
import CoverBesto from "./CoverBesto";
import CoverNaukri from "./CoverNaukri";
import CoverPoleplus from "./CoverPoleplus";
import ServiceCms from "./ServiceCms";
import ServiceMobile from "./ServiceMobile";
import ServiceSaas from "./ServiceSaas";
import ServiceWeb from "./ServiceWeb";

export const SERVICE_ILLUSTRATIONS: Record<ServiceIllustration, ComponentType> = {
  web: ServiceWeb,
  saas: ServiceSaas,
  cms: ServiceCms,
  mobile: ServiceMobile,
};

/** Illustrated covers for platforms that have no public site to screenshot. */
export const PROJECT_ILLUSTRATIONS: Record<string, ComponentType> = {
  poleplus: CoverPoleplus,
  besto: CoverBesto,
  acadmea: CoverAcadmea,
  naukri: CoverNaukri,
};
