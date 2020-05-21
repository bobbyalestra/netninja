const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is', banner.nodeType)
console.log('#page-banner node name is', banner.nodeName)
console.log('#page-banner node has childs node is', banner.hasChildNodes())//a boolean

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner)
