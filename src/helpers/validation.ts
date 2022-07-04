export class Validation {
  /*  */
  static numbers = (str: string, decimals: number) => {
    const index = str.indexOf('.') === -1 ? str.length : str.indexOf('.');
    return str.slice(0, index + decimals);
  };
}
