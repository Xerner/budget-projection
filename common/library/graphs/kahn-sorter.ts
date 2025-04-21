import { INode } from "./types/INode";

export class KahnSorter {
  static kahnSort(nodes: INode[], descending: boolean = false): INode[] {
    var nodesWithInDegreeZero = this.getAllNodesWithNoDependencies(nodes);
    if (nodesWithInDegreeZero.length == nodes.length) {
      return nodes;
    }

    // Sort the nodes topologically
    var indegrees = new Map<INode, number>();
    this.initializeInDegrees(indegrees, nodes);
    while (nodesWithInDegreeZero.length > 0) {
      var node = nodesWithInDegreeZero.shift();
      if (node == undefined) {
        continue;
      }
      var index = nodes.indexOf(node);
      if (index !== -1) {
        nodes.splice(index, 1);
      }
      nodes.push(node);
      if (node.getDependents() == null) {
        continue;
      }
      node.getDependents().forEach(dependentNode => {
        indegrees.set(dependentNode, indegrees.get(dependentNode)! - 1);
        if (indegrees.get(dependentNode) == 0) {
          nodesWithInDegreeZero.push(dependentNode);
        }
      })
    }
    if (descending) {
      nodes.reverse();
    }
    return nodes;
  }

  private static initializeInDegrees(indegrees: Map<INode, number>, nodes: INode[]): void {
    nodes.forEach(node => {
      indegrees.set(node, node.getDependencies().length);
    });
  }

  /// <summary>
  /// Gets all nodes with in-degree 0
  /// </summary>
  private static getAllNodesWithNoDependencies(nodes: INode[]): INode[] {
    var nodesWithZeroInDegree = new Array<INode>();
    nodes.forEach(node => {
      if (node.getDependencies().length === 0) {
        nodesWithZeroInDegree.push(node);
      }
    });
    return nodesWithZeroInDegree;
  }
}
