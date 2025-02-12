import { makeEnvironmentProviders, Provider } from "@angular/core";
import { FEATURE_FLAGS_TOKEN, FEATURE_VIEWS_TOKEN } from "./tokens";
import { FeatureService } from "./feature.service";
import { View } from "./types/View";
import { Feature } from "./types/Feature";
import { IFeatureFlag } from "./interfaces/IFeatureFlag";
import { IFeatureView } from "./interfaces/IFeatureView";

export function provideFeatureFlags<TFeature extends Feature, TView extends View>(
    features?: IFeatureFlag<TFeature>[],
    featureViews?: IFeatureView<TFeature, TView>[],
  ) {
  const providers: Provider[] = [
    FeatureService<TFeature, TView>,
  ]
  if (features) {
    providers.push({ provide: FEATURE_FLAGS_TOKEN, useValue: features });
  }
  if (featureViews) {
    providers.push({ provide: FEATURE_VIEWS_TOKEN, useValue: featureViews });
  }
  return makeEnvironmentProviders(providers);
}
