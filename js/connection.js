const ConnectionsDict = {
    "Zehong Shen": "https://zehongs.github.io/",
    "Huaijin Pi": "https://phj128.github.io/",
    "Sida Peng": "https://sidapeng.github.io/",
    "Xiaowei Zhou": "https://www.xzhou.me/",
    "Bo Dai": "https://daibo.info/",
    "Jingbo Wang": "https://wangjingbo1219.github.io/",
    "Georgios Pavlakos": "https://geopavlakos.github.io/",
}


function addConnectionLink(node) {
    let connectionLinkAdded = false;
    // console.log('Connection', node);
    if (node.nodeType === Node.TEXT_NODE) {
        let content = node.nodeValue;
        // Match all connections.
        const regex = new RegExp(`\\b(${Object.keys(ConnectionsDict).join('|')})\\b`, 'g');
        const matches = content.match(regex);
        if (matches) {
            const parent = node.parentNode;
            // Split the text node by connections.
            const fragments = content.split(regex);

            fragments.forEach((fragment, index) => {
                if (ConnectionsDict[fragment]) {
                    parent.insertBefore(createCustomNode(fragment, ConnectionsDict[fragment]), node);
                } else {
                    parent.insertBefore(document.createTextNode(fragment), node);
                }
            });
            // Remove the original text node.
            parent.removeChild(node);
            connectionLinkAdded = true;
        }
    } else if (node.nodeType === Node.ELEMENT_NODE && !["A", "SCRIPT", "STYLE"].includes(node.tagName)) {
        const childNodes = Array.from(node.childNodes);
        for (let i = 0; i < childNodes.length; i++) {
            if (addConnectionLink(childNodes[i])) {
                connectionLinkAdded = true;
            }
        }
    }
    return connectionLinkAdded;
}


function createCustomNode(name, link) {
    const a = document.createElement("a")
    a.href = link;
    a.target = "_blank";
    a.classList.add("connection-link");
    a.textContent = name;
    return a;
}