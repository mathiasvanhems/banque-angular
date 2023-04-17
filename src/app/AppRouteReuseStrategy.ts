import { ComponentRef } from '@angular/core';
import {ActivatedRouteSnapshot, DetachedRouteHandle, BaseRouteReuseStrategy, Route} from '@angular/router';

export class AppRouteReuseStrategy implements BaseRouteReuseStrategy {
  /**
   * Whether the given route should detach for later reuse.
   * Always returns false for `BaseRouteReuseStrategy`.
   * */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return !!route.data?.['shouldReuse'];
  }

  /**
   * A no-op; the route is never stored since this strategy never detaches routes for later re-use.
   */
  public store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandleExt
  ): void {
    if (!route.routeConfig) return;
    this.handlers.set(route.routeConfig, handle);
  }
  

  /** Returns `false`, meaning the route (and its subtree) is never reattached */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!route.routeConfig && !!this.handlers.get(route.routeConfig);
  }

  /** Returns `null` because this strategy does not store routes for later re-use. */
  public retrieve(
    route: ActivatedRouteSnapshot
  ): DetachedRouteHandleExt | null {
    if (!route.routeConfig) return null;
    return this.handlers.get(route.routeConfig) ?? null;
  }

  public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    if(future.data['shouldReuse']==false){return false;}
    console.log(future.data['shouldReuse'])
    return  (future.routeConfig === curr.routeConfig);
  }

  /*public shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    console.log(future.routeConfig === curr.routeConfig)
    return false;
  }*/



private handlers: Map<Route, DetachedRouteHandleExt> = new Map();


}
interface DetachedRouteHandleExt extends DetachedRouteHandle {
  componentRef: ComponentRef<any>;
}