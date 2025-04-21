import { CompiledEnum, StringEnum } from "../types/Enum";

export class ObjectsService {
  /**
   * JSON stringifies and parses the object to create a deep clone of it
   */
  deepClone<T>(object: T): T {
    return JSON.parse(JSON.stringify(object)) as T
  }

  /**
   * absolute hack to get the name of a javascript object very quickly. See examples below.
   *
   * {@link https://stackoverflow.com/a/37057212/12265840}
   *
   * @example
   * // name = 'myObject'
   * var name = nameOf({ myObject })
   * @example
   * // name = 'some_property'
   * var name = nameOf({ myObject.some_property })
   */
  nameOf(obj: object) {
    return Object.keys(obj)[0];
  }

  /**
   * Extracts a property from an object using a path string or array of strings
   *
   * @param object The object to extract the property from
   * @param path The path to the property to extract as a string delimited by the given delimiter or an array of strings
   * @returns The properties value or null if it does not exist
   */
  getProperty<T>(object: any, path: string | string[], delimiter = '.'): T | null {
    if (Array.isArray(path) == false) {
      path = this.convertPathToPropertyName(path);
      path = path.split(delimiter);
    }
    var propertyName = path[0];
    if (path.length === 1) {
      if (propertyName in object) {
        return object[propertyName];
      } else {
        return null;
      }
    }
    var nextPropertyToSearch = path.shift();
    return this.getProperty(object[nextPropertyToSearch!], path, delimiter);
  }

  /**
   * Converts an object properties path to a property name that can be used to access the property
   *
   * @param path The object properties path to convert to a property name
   * @returns A string that can be used to access the property
   */
  convertPathToPropertyName(path: string) {
    var newPath = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    newPath = newPath.replace(/^\./, '');           // strip a leading dot
    return newPath;
  }
}

export const OBJECTS = new ObjectsService();
