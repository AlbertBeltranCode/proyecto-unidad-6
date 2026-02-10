/**
 * Representa un punto en un espacio bidimensional.
 * @class
 */
class Point {

  /**
   * Crea una instancia de un punto.
   * @param {number} x - La coordenada horizontal.
   * @param {number} y - La coordenada vertical.
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Obtiene el valor de la coordenada X.
   * @returns {number} El valor de la coordenada X.
   */
  getX() {
    return this.x;
  }

  /**
   * Obtiene el valor de la coordenada Y.
   * @returns {number} El valor de la coordenada Y.
   */
  getY() {
    return this.y;
  }

  /**
   * Crea una instancia de Point a partir de una cadena de texto.
   * @static
   * @param {string} str - Una cadena con formato "x,y".
   * @returns {Point} Una nueva instancia de la clase Point.
   */
  static fromString(str) {
    const [x, y] = str.split(',').map(Number);
    return new Point(x, y);
  }
}