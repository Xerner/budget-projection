import { Signal, WritableSignal } from "@angular/core";
import { Feature } from "../types/Feature";

export interface IFeatureFlagSignal<TFeature extends Feature> {
  readonly feature: TFeature;
  readonly enabled: Signal<boolean>;
  readonly reason: Signal<string | null>;
}

export interface IWritableFeatureFlagSignal<TFeature extends Feature> extends IFeatureFlagSignal<TFeature> {
  readonly enabled: WritableSignal<boolean>;
  readonly reason: WritableSignal<string | null>;
}
