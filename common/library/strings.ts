export class StringsService {
  /**
   * Formats a string using positional or named arguments.
   * Either pass an object with key value pairs or pass the values as string arguments.
   * Does not support both at the same time.
   * @param str The string to format.
   * @param objectOrString The arguments to replace in the string in key value pairs.
   * @param args The arguments to replace in the string as positional arguments.
   * @returns The formatted string.
   */
  format(str: string, objectOrString?: { [key: string]: string } | string, ...args: string[]): string {
    if (objectOrString === undefined && args.length === 0) {
      return str;
    }
    if (typeof objectOrString === 'object') {
      return this.formatNamedArgs(str, objectOrString as { [key: string]: string });
    }
    if (typeof objectOrString === 'string') {
      args.unshift(objectOrString);
    }
    return this.formatPositionalArgs(str, args);
  }

  /**
   * Formats a string using named arguments.
   * @param str The string to format.
   * @param object The arguments to replace in the string in key value pairs.
   * @returns The formatted string.
   */
  private formatNamedArgs(str: string, object: { [key: string]: string }): string {
    return str.replace(/{(\w+)}/g, (match, key) => object[key] !== undefined ? object[key] : match);
  }

  /**
   * Formats a string using positional arguments.
   * @param str The string to format.
   * @param args The arguments to replace in the string as positional arguments.
   * @returns The formatted string.
   */
  private formatPositionalArgs(str: string, args: string[]): string {
    return str.replace(/{(\d+)}/g, (match, index) => args[index] !== undefined ? args[index] : match);
  }

  compare(a: string, b: string, aliasesForB?: string[]): number {
    var matchingAlias = aliasesForB?.find(alias => alias.localeCompare(a) === 0);
    if (matchingAlias !== undefined) {
      return a.localeCompare(matchingAlias);
    }
    return a.localeCompare(b);
  }
}

export const STRINGS = new StringsService();
