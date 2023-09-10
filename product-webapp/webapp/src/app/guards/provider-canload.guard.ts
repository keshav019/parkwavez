import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProviderCanload implements CanLoad {
  constructor() {}

  checkTokenExpiration() {
    // Logic will be written here
    return true;
  }

  canLoad() {
    return this.checkTokenExpiration();
  }
}
