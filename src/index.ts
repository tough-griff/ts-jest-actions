import config from 'config';
import { name, version } from '../package.json';

export class TestClass<T> {
  private _prefix: string;
  private _data: T;

  constructor(data: T) {
    this._prefix = `${name} v${version}`;
    this._data = data;
  }

  prefix(text: string): string {
    return `${this._prefix}: ${text}`;
  }

  suffix(text: string): string {
    return `${text} (${config.get('suffix')})`;
  }

  get(): T {
    return this._data;
  }

  set(data: T): this {
    this._data = data;
    return this;
  }
}
