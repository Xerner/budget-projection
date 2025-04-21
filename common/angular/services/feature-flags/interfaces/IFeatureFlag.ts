import { Feature } from "../types/Feature";

export interface IFeatureFlag<TFeature extends Feature> {
  feature: TFeature;
  enabled: boolean;
  reason?: string;
}
