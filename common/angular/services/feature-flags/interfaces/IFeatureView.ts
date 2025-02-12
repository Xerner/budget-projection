import { Feature } from "../types/Feature";
import { View } from "../types/View";

/**
 * A feature view represents what views a feature is included or excluded from
 */
export interface IFeatureView<TView extends View, TFeature extends Feature> {
  view: TView;
  feature: TFeature;
  enabled: boolean;
}
