export interface INode<T = any> {
  body: T;
  getDependencies(): INode[];
  getDependents(): INode[];
}
