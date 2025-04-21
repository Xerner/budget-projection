import { makeEnvironmentProviders, Provider } from "@angular/core";
import { ApiHelperService } from "./api-helper.service";
import { HttpClient } from "@angular/common/http";

export function provideApiHelpers() {
  const providers: Provider[] = [
    { provide: ApiHelperService, deps: [HttpClient] },
  ]

  return makeEnvironmentProviders(providers);
}
