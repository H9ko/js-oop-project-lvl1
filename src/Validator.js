import Cstring from './types/Cstring';
import Cnumber from './types/Cnumber';
import Carray from './types/Carray';

export default class {
  string() {
    return new Cstring();
  }

  number() {
    return new Cnumber();
  }

  array() {
    return new Carray();
  }
}
