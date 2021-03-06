import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

class GeometryLoader {
  constructor() {
    this._loader = new STLLoader();
  }

  async load(url) {
    const geometry = await this._loader.loadAsync(url);
    geometry.computeBoundingBox();
    return geometry;
  }

  async parseFile(file) {
    const arrayBuffer = await file.arrayBuffer();
    const geometry = this._loader.parse(arrayBuffer);
    geometry.computeBoundingBox();
    return geometry;
  }
}

export { GeometryLoader };
