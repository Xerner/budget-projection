import { InjectionToken } from "@angular/core";
import { IFeatureView } from "./interfaces/IFeatureView";
import { IFeatureFlag } from "./interfaces/IFeatureFlag";
import { Enum } from "common/types/Enum";

export const FEATURE_FLAGS_TOKEN = new InjectionToken<IFeatureFlag<Enum>[]>("FEATURE_FLAGS_TOKEN");
export const FEATURE_VIEWS_TOKEN = new InjectionToken<IFeatureView<Enum, Enum>[]>("FEATURE_VIEWS_TOKEN");
