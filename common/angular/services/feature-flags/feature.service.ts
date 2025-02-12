import { Inject, Injectable, signal } from "@angular/core";
import { IFeatureFlag } from "./interfaces/IFeatureFlag";
import { Feature } from "./types/Feature";
import { FEATURE_FLAGS_TOKEN, FEATURE_VIEWS_TOKEN } from "./tokens";
import { IFeatureView } from "./interfaces/IFeatureView";
import { View } from "./types/View";
import { IFeatureFlagSignal, IWritableFeatureFlagSignal } from "./interfaces/IFeatureFlagSignal";

/**
 * Provides helper functions for features and views. Preferabbly TFeature and TView are be enums.
 */
@Injectable()
export class FeatureService<TFeature extends Feature, TView extends View = any> {
  protected _features: IFeatureFlag<TFeature>[] = [];
  protected _featuresMap: { [key in TFeature]: IFeatureFlag<TFeature> } = {} as any;
  get features(): typeof this._featuresMap {
    return this._featuresMap;
  }

  protected _featureViews: IFeatureView<TView, TFeature>[] = [];
  get featureViews(): typeof this._featureViews {
    return this._featureViews;
  }

  protected _signals: { [key in TFeature]: IWritableFeatureFlagSignal<TFeature> } = {} as any;
  /**
   * Gets the feature signals.
   *
   * @returns An object where each key is a feature and the value is the corresponding feature flag signal.
   */
  get signals(): { [key in TFeature]: IFeatureFlagSignal<TFeature> } {
    return this._signals;
  }

  constructor(
    @Inject(FEATURE_FLAGS_TOKEN) featureFlags: IFeatureFlag<TFeature>[],
    @Inject(FEATURE_VIEWS_TOKEN) views: IFeatureView<TView, TFeature>[],
  ) {
    // Convert the feature flags to signals and store them so they are able to be used to re-render.
    // Only allow updatng the feature flags through the updateFeatureFlags method to ensure the signals are updated.
    this.updateFeatureFlags(featureFlags);
    // Views aren't signals because I'm not sure if they need to be yet
    this.updateViews(views);
  }

  /**
   * Updates the available feature flags and their corresponding signals.
   * Creates new signals for newly added features.
   * Updates the existing signals for existing features.
   * Does not remove signals for removed features.
   *
   * @param featureFlags The new set of feature flags to use
   */
  updateFeatureFlags(featureFlags: IFeatureFlag<TFeature>[]) {
    featureFlags.forEach((featureFlag) => {
      // init signal
      var featureSignal = this._signals[featureFlag.feature];
      if (featureSignal == undefined) {
        featureSignal = this.createWritableFeatureSignal(featureFlag);
        this._signals[featureFlag.feature] = featureSignal;
      } else {
        featureSignal.enabled.set(featureFlag.enabled);
        featureSignal.reason.set(featureFlag.reason ?? null);
      }
      // init mapping
      this._featuresMap[featureFlag.feature] = featureFlag;
    });
    this._features = featureFlags;
  }

  /**
   * Updates the available views
   */
  updateViews(views: IFeatureView<TView, TFeature>[]) {
    this._featureViews = views;
  }

  /**
   * Checks if a feature exists. If a view is provided, it also checks if it exists in the view
   */
  hasFeature(feature: TFeature, view: TView | null = null) {
    if (this._features == null) {
      return false;
    }
    var viewHasFeature = true;
    if (view != null) {
      viewHasFeature = this.isFeatureInView(feature, view);
    }
    var hasFeature = this._signals.hasOwnProperty(feature);
    return hasFeature && viewHasFeature;
  }

  /**
   * True if any feature is enabled. Only looks at features in the view if a view is provided.
   */
  isAnyEnabled(view: TView | null = null) {
    var features;
    if (view == null) {
      features = Object.keys(this._features) as TFeature[];
    } else {
      features = this.featureViews.filter(featureView => featureView.view == view);
    }
    if (features.length == 0) {
      return false;
    }
    return features.some(feature => this._signals[feature as TFeature].enabled());
  }

  /**
   * Checks if a feature exists and is enabled. If a view is provided, it also checks if it exists in the view
   */
  isFeatureOn(feature: TFeature, view: TView | null = null) {
    if (this._features == null) {
      return false;
    }
    var viewHasFeature = true;
    if (view != null) {
      viewHasFeature = this.isFeatureInView(feature, view);
    }
    var hasFeature = this.hasFeature(feature, view);
    var isFeatureEnabled = hasFeature && this._signals[feature].enabled();
    return hasFeature && viewHasFeature && isFeatureEnabled;
  }

  /**
   * @see {@link isFeatureOn}
   */
  isFeatureOff(feature: TFeature, view: TView | null = null) {
    return this.isFeatureOn(feature, view) == false;
  }

  /**
   * Checks if a feature exists in a view
   */
  isFeatureInView(feature: TFeature, view: TView) {
    if (this._features == null) {
      return false;
    }
    var featureViews = this.featureViews
      .filter(featureView => featureView.view == view && featureView.feature == feature)
    if (featureViews.length == 0) {
      return false;
    }
    return featureViews.some(featureView => featureView.enabled);;
  }

  /**
   * Checks if any of the features are in a view
   */
  someFeatureIsInView(features: TFeature[], view: TView) {
    return features.some(feature => this.isFeatureInView(feature, view));
  }

  private createWritableFeatureSignal(featureFlag: IFeatureFlag<TFeature>) {
    return {
      feature: featureFlag.feature,
      enabled: signal<boolean>(featureFlag.enabled),
      reason: signal<string | null>(featureFlag.reason ?? null),
    };
  }
}
