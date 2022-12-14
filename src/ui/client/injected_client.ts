function DOMtoString(documentRoot: any) {
  var html = '',
      node = documentRoot.firstChild;
  while (node) {
      switch (node.nodeType) {
      case Node.ELEMENT_NODE:
          html += node.outerHTML;
          break;
      case Node.TEXT_NODE:
          html += node.nodeValue;
          break;
      case Node.CDATA_SECTION_NODE:
          html += '<![CDATA[' + node.nodeValue + ']]>';
          break;
      case Node.COMMENT_NODE:
          html += '<!--' + node.nodeValue + '-->';
          break;
      case Node.DOCUMENT_TYPE_NODE:
          // (X)HTML documents are identified by public identifiers
          html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
          break;
      }
      node = node.nextSibling;
  }
  return html;
}


const UplandStats = {
    getPageSource(eventId: number): Promise<any> {
        return window.chrome.runtime.sendMessage({
            eventId,
            action: "getPageSource",
            source: DOMtoString(document)
        });
    }
};

window.UplandStats = UplandStats;
