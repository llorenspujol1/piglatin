import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

export abstract class BaseModel<T> {
  protected _model: BehaviorSubject<T>;

  constructor(initialValue: T = null) {
    this._model = new BehaviorSubject<T>(initialValue);
    this._model.share();
  }

  update(value: T) {
    this._model.next(value);
  }

  updateProperty(propertyName: string, value: any) {
    const currentValue: T = Object.assign({}, this.getCurrentValue());
    currentValue[propertyName] = value;
    this.update(currentValue);
  }

  removeProperty(propertyName: string) {
    const currentValue: T = Object.assign({}, this.getCurrentValue());
    delete currentValue[propertyName];
    this.update(currentValue);
  }

  updateProperties<K extends keyof T>(props: Array<[K, any]>) {
    const currentValue: T = Object.assign({}, this.getCurrentValue());

    props.forEach(([k, v]: [K, any]) => currentValue[k] = v);
    this.update(currentValue);
  }

  get model$(): Observable<T> {
    return this._model.asObservable();
  }

  getPropertyValue(...keys): any {
    return keys.reduce((value, currentKey) => !!value ? value[currentKey] : value, this._model.value);
  }

  getCurrentValue(): T {
    return this._model.value;
  }

  getProperty(...keys): Observable<any> {
    return this._model.pluck(...keys).distinctUntilChanged();
  }
}
