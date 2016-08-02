export { App } from './app';
import * as services from './services';

const mapValueToArray = (obj) => Object.keys(obj).map(key => obj[key]);

export const providers = [
  ..mapValuesToArray(services)
];
