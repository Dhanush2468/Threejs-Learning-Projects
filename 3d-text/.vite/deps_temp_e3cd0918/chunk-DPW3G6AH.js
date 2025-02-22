import {
  Vector3,
  clamp,
  denormalize,
  normalize
} from "./chunk-USCXVHQ3.js";

// node_modules/three/src/math/Vector2.js
var Vector2 = class _Vector2 {
  constructor(x = 0, y = 0) {
    _Vector2.prototype.isVector2 = true;
    this.x = x;
    this.y = y;
  }
  get width() {
    return this.x;
  }
  set width(value) {
    this.x = value;
  }
  get height() {
    return this.y;
  }
  set height(value) {
    this.y = value;
  }
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
  setScalar(scalar) {
    this.x = scalar;
    this.y = scalar;
    return this;
  }
  setX(x) {
    this.x = x;
    return this;
  }
  setY(y) {
    this.y = y;
    return this;
  }
  setComponent(index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;
      case 1:
        this.y = value;
        break;
      default:
        throw new Error("index is out of range: " + index);
    }
    return this;
  }
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + index);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(v) {
    this.x = v.x;
    this.y = v.y;
    return this;
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }
  addScalar(s) {
    this.x += s;
    this.y += s;
    return this;
  }
  addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    return this;
  }
  addScaledVector(v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    return this;
  }
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }
  subScalar(s) {
    this.x -= s;
    this.y -= s;
    return this;
  }
  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    return this;
  }
  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  }
  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }
  divide(v) {
    this.x /= v.x;
    this.y /= v.y;
    return this;
  }
  divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  applyMatrix3(m) {
    const x = this.x, y = this.y;
    const e = m.elements;
    this.x = e[0] * x + e[3] * y + e[6];
    this.y = e[1] * x + e[4] * y + e[7];
    return this;
  }
  min(v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    return this;
  }
  max(v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    return this;
  }
  clamp(min, max) {
    this.x = Math.max(min.x, Math.min(max.x, this.x));
    this.y = Math.max(min.y, Math.min(max.y, this.y));
    return this;
  }
  clampScalar(minVal, maxVal) {
    this.x = Math.max(minVal, Math.min(maxVal, this.x));
    this.y = Math.max(minVal, Math.min(maxVal, this.y));
    return this;
  }
  clampLength(min, max) {
    const length = this.length();
    return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  }
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }
  dot(v) {
    return this.x * v.x + this.y * v.y;
  }
  cross(v) {
    return this.x * v.y - this.y * v.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    const angle = Math.atan2(-this.y, -this.x) + Math.PI;
    return angle;
  }
  angleTo(v) {
    const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
    if (denominator === 0)
      return Math.PI / 2;
    const theta = this.dot(v) / denominator;
    return Math.acos(clamp(theta, -1, 1));
  }
  distanceTo(v) {
    return Math.sqrt(this.distanceToSquared(v));
  }
  distanceToSquared(v) {
    const dx = this.x - v.x, dy = this.y - v.y;
    return dx * dx + dy * dy;
  }
  manhattanDistanceTo(v) {
    return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
  }
  setLength(length) {
    return this.normalize().multiplyScalar(length);
  }
  lerp(v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    return this;
  }
  lerpVectors(v1, v2, alpha) {
    this.x = v1.x + (v2.x - v1.x) * alpha;
    this.y = v1.y + (v2.y - v1.y) * alpha;
    return this;
  }
  equals(v) {
    return v.x === this.x && v.y === this.y;
  }
  fromArray(array, offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    return array;
  }
  fromBufferAttribute(attribute, index) {
    this.x = attribute.getX(index);
    this.y = attribute.getY(index);
    return this;
  }
  rotateAround(center, angle) {
    const c = Math.cos(angle), s = Math.sin(angle);
    const x = this.x - center.x;
    const y = this.y - center.y;
    this.x = x * c - y * s + center.x;
    this.y = x * s + y * c + center.y;
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
  }
};

// node_modules/three/src/constants.js
var FloatType = 1015;
var StaticDrawUsage = 35044;
var WebGLCoordinateSystem = 2e3;
var WebGPUCoordinateSystem = 2001;

// node_modules/three/src/extras/DataUtils.js
var _tables = _generateTables();
function _generateTables() {
  const buffer = new ArrayBuffer(4);
  const floatView = new Float32Array(buffer);
  const uint32View = new Uint32Array(buffer);
  const baseTable = new Uint32Array(512);
  const shiftTable = new Uint32Array(512);
  for (let i = 0; i < 256; ++i) {
    const e = i - 127;
    if (e < -27) {
      baseTable[i] = 0;
      baseTable[i | 256] = 32768;
      shiftTable[i] = 24;
      shiftTable[i | 256] = 24;
    } else if (e < -14) {
      baseTable[i] = 1024 >> -e - 14;
      baseTable[i | 256] = 1024 >> -e - 14 | 32768;
      shiftTable[i] = -e - 1;
      shiftTable[i | 256] = -e - 1;
    } else if (e <= 15) {
      baseTable[i] = e + 15 << 10;
      baseTable[i | 256] = e + 15 << 10 | 32768;
      shiftTable[i] = 13;
      shiftTable[i | 256] = 13;
    } else if (e < 128) {
      baseTable[i] = 31744;
      baseTable[i | 256] = 64512;
      shiftTable[i] = 24;
      shiftTable[i | 256] = 24;
    } else {
      baseTable[i] = 31744;
      baseTable[i | 256] = 64512;
      shiftTable[i] = 13;
      shiftTable[i | 256] = 13;
    }
  }
  const mantissaTable = new Uint32Array(2048);
  const exponentTable = new Uint32Array(64);
  const offsetTable = new Uint32Array(64);
  for (let i = 1; i < 1024; ++i) {
    let m = i << 13;
    let e = 0;
    while ((m & 8388608) === 0) {
      m <<= 1;
      e -= 8388608;
    }
    m &= ~8388608;
    e += 947912704;
    mantissaTable[i] = m | e;
  }
  for (let i = 1024; i < 2048; ++i) {
    mantissaTable[i] = 939524096 + (i - 1024 << 13);
  }
  for (let i = 1; i < 31; ++i) {
    exponentTable[i] = i << 23;
  }
  exponentTable[31] = 1199570944;
  exponentTable[32] = 2147483648;
  for (let i = 33; i < 63; ++i) {
    exponentTable[i] = 2147483648 + (i - 32 << 23);
  }
  exponentTable[63] = 3347054592;
  for (let i = 1; i < 64; ++i) {
    if (i !== 32) {
      offsetTable[i] = 1024;
    }
  }
  return {
    floatView,
    uint32View,
    baseTable,
    shiftTable,
    mantissaTable,
    exponentTable,
    offsetTable
  };
}
function toHalfFloat(val) {
  if (Math.abs(val) > 65504)
    console.warn("THREE.DataUtils.toHalfFloat(): Value out of range.");
  val = clamp(val, -65504, 65504);
  _tables.floatView[0] = val;
  const f = _tables.uint32View[0];
  const e = f >> 23 & 511;
  return _tables.baseTable[e] + ((f & 8388607) >> _tables.shiftTable[e]);
}
function fromHalfFloat(val) {
  const m = val >> 10;
  _tables.uint32View[0] = _tables.mantissaTable[_tables.offsetTable[m] + (val & 1023)] + _tables.exponentTable[m];
  return _tables.floatView[0];
}

// node_modules/three/src/core/BufferAttribute.js
var _vector = new Vector3();
var _vector2 = new Vector2();
var BufferAttribute = class {
  constructor(array, itemSize, normalized = false) {
    if (Array.isArray(array)) {
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    }
    this.isBufferAttribute = true;
    this.name = "";
    this.array = array;
    this.itemSize = itemSize;
    this.count = array !== void 0 ? array.length / itemSize : 0;
    this.normalized = normalized;
    this.usage = StaticDrawUsage;
    this.updateRange = { offset: 0, count: -1 };
    this.gpuType = FloatType;
    this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(value) {
    if (value === true)
      this.version++;
  }
  setUsage(value) {
    this.usage = value;
    return this;
  }
  copy(source) {
    this.name = source.name;
    this.array = new source.array.constructor(source.array);
    this.itemSize = source.itemSize;
    this.count = source.count;
    this.normalized = source.normalized;
    this.usage = source.usage;
    this.gpuType = source.gpuType;
    return this;
  }
  copyAt(index1, attribute, index2) {
    index1 *= this.itemSize;
    index2 *= attribute.itemSize;
    for (let i = 0, l = this.itemSize; i < l; i++) {
      this.array[index1 + i] = attribute.array[index2 + i];
    }
    return this;
  }
  copyArray(array) {
    this.array.set(array);
    return this;
  }
  applyMatrix3(m) {
    if (this.itemSize === 2) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector2.fromBufferAttribute(this, i);
        _vector2.applyMatrix3(m);
        this.setXY(i, _vector2.x, _vector2.y);
      }
    } else if (this.itemSize === 3) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector.fromBufferAttribute(this, i);
        _vector.applyMatrix3(m);
        this.setXYZ(i, _vector.x, _vector.y, _vector.z);
      }
    }
    return this;
  }
  applyMatrix4(m) {
    for (let i = 0, l = this.count; i < l; i++) {
      _vector.fromBufferAttribute(this, i);
      _vector.applyMatrix4(m);
      this.setXYZ(i, _vector.x, _vector.y, _vector.z);
    }
    return this;
  }
  applyNormalMatrix(m) {
    for (let i = 0, l = this.count; i < l; i++) {
      _vector.fromBufferAttribute(this, i);
      _vector.applyNormalMatrix(m);
      this.setXYZ(i, _vector.x, _vector.y, _vector.z);
    }
    return this;
  }
  transformDirection(m) {
    for (let i = 0, l = this.count; i < l; i++) {
      _vector.fromBufferAttribute(this, i);
      _vector.transformDirection(m);
      this.setXYZ(i, _vector.x, _vector.y, _vector.z);
    }
    return this;
  }
  set(value, offset = 0) {
    this.array.set(value, offset);
    return this;
  }
  getComponent(index, component) {
    let value = this.array[index * this.itemSize + component];
    if (this.normalized)
      value = denormalize(value, this.array);
    return value;
  }
  setComponent(index, component, value) {
    if (this.normalized)
      value = normalize(value, this.array);
    this.array[index * this.itemSize + component] = value;
    return this;
  }
  getX(index) {
    let x = this.array[index * this.itemSize];
    if (this.normalized)
      x = denormalize(x, this.array);
    return x;
  }
  setX(index, x) {
    if (this.normalized)
      x = normalize(x, this.array);
    this.array[index * this.itemSize] = x;
    return this;
  }
  getY(index) {
    let y = this.array[index * this.itemSize + 1];
    if (this.normalized)
      y = denormalize(y, this.array);
    return y;
  }
  setY(index, y) {
    if (this.normalized)
      y = normalize(y, this.array);
    this.array[index * this.itemSize + 1] = y;
    return this;
  }
  getZ(index) {
    let z = this.array[index * this.itemSize + 2];
    if (this.normalized)
      z = denormalize(z, this.array);
    return z;
  }
  setZ(index, z) {
    if (this.normalized)
      z = normalize(z, this.array);
    this.array[index * this.itemSize + 2] = z;
    return this;
  }
  getW(index) {
    let w = this.array[index * this.itemSize + 3];
    if (this.normalized)
      w = denormalize(w, this.array);
    return w;
  }
  setW(index, w) {
    if (this.normalized)
      w = normalize(w, this.array);
    this.array[index * this.itemSize + 3] = w;
    return this;
  }
  setXY(index, x, y) {
    index *= this.itemSize;
    if (this.normalized) {
      x = normalize(x, this.array);
      y = normalize(y, this.array);
    }
    this.array[index + 0] = x;
    this.array[index + 1] = y;
    return this;
  }
  setXYZ(index, x, y, z) {
    index *= this.itemSize;
    if (this.normalized) {
      x = normalize(x, this.array);
      y = normalize(y, this.array);
      z = normalize(z, this.array);
    }
    this.array[index + 0] = x;
    this.array[index + 1] = y;
    this.array[index + 2] = z;
    return this;
  }
  setXYZW(index, x, y, z, w) {
    index *= this.itemSize;
    if (this.normalized) {
      x = normalize(x, this.array);
      y = normalize(y, this.array);
      z = normalize(z, this.array);
      w = normalize(w, this.array);
    }
    this.array[index + 0] = x;
    this.array[index + 1] = y;
    this.array[index + 2] = z;
    this.array[index + 3] = w;
    return this;
  }
  onUpload(callback) {
    this.onUploadCallback = callback;
    return this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const data = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    if (this.name !== "")
      data.name = this.name;
    if (this.usage !== StaticDrawUsage)
      data.usage = this.usage;
    if (this.updateRange.offset !== 0 || this.updateRange.count !== -1)
      data.updateRange = this.updateRange;
    return data;
  }
};
var Int8BufferAttribute = class extends BufferAttribute {
  constructor(array, itemSize, normalized) {
    super(new Int8Array(array), itemSize, normalized);
  }
};
var Uint8BufferAttribute = class extends BufferAttribute {
  constructor(array, itemSize, normalized) {
    super(new Uint8Array(array), itemSize, normalized);
  }
};
var Uint8ClampedBufferAttribute = class extends BufferAttribute {
  constructor(array, itemSize, normalized) {
    super(new Uint8ClampedArray(array), itemSize, normalized);
  }
};
var Int16BufferAttribute = class extends BufferAttribute {
  constructor(array, itemSize, normalized) {
    super(new Int16Array(array), itemSize, normalized);
  }
};
var Uint16BufferAttribute = class extends BufferAttribute {
  constructor(array, itemSize, normalized) {
    super(new Uint16Array(array), itemSize, normalized);
  }
};
var Int32BufferAttribute = class extends BufferAttribute {
  constructor(array, itemSize, normalized) {
    super(new Int32Array(array), itemSize, normalized);
  }
};
var Uint32BufferAttribute = class extends BufferAttribute {
  constructor(array, itemSize, normalized) {
    super(new Uint32Array(array), itemSize, normalized);
  }
};
var Float16BufferAttribute = class extends BufferAttribute {
  constructor(array, itemSize, normalized) {
    super(new Uint16Array(array), itemSize, normalized);
    this.isFloat16BufferAttribute = true;
  }
  getX(index) {
    let x = fromHalfFloat(this.array[index * this.itemSize]);
    if (this.normalized)
      x = denormalize(x, this.array);
    return x;
  }
  setX(index, x) {
    if (this.normalized)
      x = normalize(x, this.array);
    this.array[index * this.itemSize] = toHalfFloat(x);
    return this;
  }
  getY(index) {
    let y = fromHalfFloat(this.array[index * this.itemSize + 1]);
    if (this.normalized)
      y = denormalize(y, this.array);
    return y;
  }
  setY(index, y) {
    if (this.normalized)
      y = normalize(y, this.array);
    this.array[index * this.itemSize + 1] = toHalfFloat(y);
    return this;
  }
  getZ(index) {
    let z = fromHalfFloat(this.array[index * this.itemSize + 2]);
    if (this.normalized)
      z = denormalize(z, this.array);
    return z;
  }
  setZ(index, z) {
    if (this.normalized)
      z = normalize(z, this.array);
    this.array[index * this.itemSize + 2] = toHalfFloat(z);
    return this;
  }
  getW(index) {
    let w = fromHalfFloat(this.array[index * this.itemSize + 3]);
    if (this.normalized)
      w = denormalize(w, this.array);
    return w;
  }
  setW(index, w) {
    if (this.normalized)
      w = normalize(w, this.array);
    this.array[index * this.itemSize + 3] = toHalfFloat(w);
    return this;
  }
  setXY(index, x, y) {
    index *= this.itemSize;
    if (this.normalized) {
      x = normalize(x, this.array);
      y = normalize(y, this.array);
    }
    this.array[index + 0] = toHalfFloat(x);
    this.array[index + 1] = toHalfFloat(y);
    return this;
  }
  setXYZ(index, x, y, z) {
    index *= this.itemSize;
    if (this.normalized) {
      x = normalize(x, this.array);
      y = normalize(y, this.array);
      z = normalize(z, this.array);
    }
    this.array[index + 0] = toHalfFloat(x);
    this.array[index + 1] = toHalfFloat(y);
    this.array[index + 2] = toHalfFloat(z);
    return this;
  }
  setXYZW(index, x, y, z, w) {
    index *= this.itemSize;
    if (this.normalized) {
      x = normalize(x, this.array);
      y = normalize(y, this.array);
      z = normalize(z, this.array);
      w = normalize(w, this.array);
    }
    this.array[index + 0] = toHalfFloat(x);
    this.array[index + 1] = toHalfFloat(y);
    this.array[index + 2] = toHalfFloat(z);
    this.array[index + 3] = toHalfFloat(w);
    return this;
  }
};
var Float32BufferAttribute = class extends BufferAttribute {
  constructor(array, itemSize, normalized) {
    super(new Float32Array(array), itemSize, normalized);
  }
};
var Float64BufferAttribute = class extends BufferAttribute {
  constructor(array, itemSize, normalized) {
    super(new Float64Array(array), itemSize, normalized);
  }
};

export {
  Vector2,
  WebGLCoordinateSystem,
  WebGPUCoordinateSystem,
  BufferAttribute,
  Int8BufferAttribute,
  Uint8BufferAttribute,
  Uint8ClampedBufferAttribute,
  Int16BufferAttribute,
  Uint16BufferAttribute,
  Int32BufferAttribute,
  Uint32BufferAttribute,
  Float16BufferAttribute,
  Float32BufferAttribute,
  Float64BufferAttribute
};
//# sourceMappingURL=chunk-DPW3G6AH.js.map
