/**
 * Declares intention of a value to be an enum.
 */
export type Enum = string | number | symbol;
/**
 * Declares intention of a value to be an enum of string values.
 */
export type StringEnum = string;
/**
 * Linting considers enums as a reference and value type at the same time.
 * This is because TypeScript turns enums into mapped objects at compilation, but enums semantically are value types.
 * This exists to specifically state that an enum is expected to be its reference type.
 */
export type CompiledEnum<T> = Record<keyof T, Enum>;
