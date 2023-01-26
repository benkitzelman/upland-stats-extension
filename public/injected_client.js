if (!window.UplandStats) {
  const DOMtoString = (documentRoot) => {
    let html = "",
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
          html += "<![CDATA[" + node.nodeValue + "]]>";
          break;
        case Node.COMMENT_NODE:
          html += "<!--" + node.nodeValue + "-->";
          break;
        case Node.DOCUMENT_TYPE_NODE:
          // (X)HTML documents are identified by public identifiers
          html +=
            "<!DOCTYPE " +
            node.name +
            (node.publicId ? ' PUBLIC "' + node.publicId + '"' : "") +
            (!node.publicId && node.systemId ? " SYSTEM" : "") +
            (node.systemId ? ' "' + node.systemId + '"' : "") +
            ">\n";
          break;
      }
      node = node.nextSibling;
    }
    return html;
  };

  const sendMessage = (eventId, action, data) => {
    return window.chrome.runtime
      .sendMessage({
        eventId,
        action,
        data,
      })
      .catch(console.error);
  };

  const MARKER_LAYER_ID = "upland-stats-markers";

  const markerLayer = () => {
    const el = document.getElementById(MARKER_LAYER_ID);
    if (el) return el;

    const html = `<div id='${MARKER_LAYER_ID}' style='position: absolute; top: 0; left: 0; right: 0; bottom: 0;'></div>`;

    document.body.insertAdjacentHTML("beforeend", html);
    return document.getElementById(MARKER_LAYER_ID);
  };

  const hoodMarkerHtml = (hood) => {
    return `<div class="hood" style="position:absolute;left:${hood.screenCoords?.x}px;top:${hood.screenCoords?.y}px;color:hsla(160, 100%, 37%, 1)">${hood.name}</div>`;
  };

  window.UplandStats = {
    getSessionSettings(eventId) {
      return sendMessage(eventId, "getSessionSettings", window.sessionStorage);
    },

    getPageSource(eventId) {
      return sendMessage(eventId, "getPageSource", DOMtoString(document));
    },

    getScreenDimensions(eventId) {
      return sendMessage(eventId, "getScreenDimensions", {
        width: window.innerWidth,
        height: window.innerHeight,
      });
    },

    markNeighbourhoods(eventId, hoods) {
      const sendOk = () => {
        sendMessage(eventId, "markNeighbourhoods", {
          ok: true,
        });
      };

      const el = markerLayer();

      if (!hoods || hoods.length === 0) {
        el.remove();
        return sendOk();
      }

      el.innerHTML = "";

      for (const hood of hoods) {
        el.innerHTML += hoodMarkerHtml(hood);
      }

      return sendOk();
    },
  };
}
