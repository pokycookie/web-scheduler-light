export function create(
  parentNode: HTMLElement,
  node: HTMLElement | HTMLElement[]
) {
  if (Array.isArray(node)) {
    node.forEach((curr) => {
      parentNode.appendChild(curr);
    });
  } else {
    parentNode.appendChild(node);
  }
}
