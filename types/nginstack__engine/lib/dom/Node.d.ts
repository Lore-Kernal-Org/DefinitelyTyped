export = Node;
declare function Node(): void;
declare class Node {
    readonly nodeName: string;
    readonly nodeType: NodeType | '';
    readonly nodeValue: string;
    readonly parentNode: Node;
    readonly childNodes: NodeList;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly ownerDocument: Document;
    readonly namespaceURI: string;
    readonly prefix: string;
    normalize(): void;
    insertBefore(newChild: Node, refChild: Node): Node;
    replaceChild(): Node;
    removeChild(): Node;
    appendChild(): Node;
    cloneNode(): Node;
    hasChildNodes(): boolean;
}
declare namespace Node {
    export {
        ELEMENT_NODE,
        ATTRIBUTE_NODE,
        TEXT_NODE,
        CDATA_SECTION_NODE,
        ENTITY_REFERENCE_NODE,
        ENTITY_NODE,
        PROCESSING_INSTRUCTION_NODE,
        COMMENT_NODE,
        DOCUMENT_NODE,
        DOCUMENT_TYPE_NODE,
        DOCUMENT_FRAGMENT_NODE,
        NOTATION_NODE,
        NodeList,
        Document,
        NodeType,
    };
}
declare let ELEMENT_NODE: number;
declare let ATTRIBUTE_NODE: number;
declare let TEXT_NODE: number;
declare let CDATA_SECTION_NODE: number;
declare let ENTITY_REFERENCE_NODE: number;
declare let ENTITY_NODE: number;
declare let PROCESSING_INSTRUCTION_NODE: number;
declare let COMMENT_NODE: number;
declare let DOCUMENT_NODE: number;
declare let DOCUMENT_TYPE_NODE: number;
declare let DOCUMENT_FRAGMENT_NODE: number;
declare let NOTATION_NODE: number;
type NodeList = import('./NodeList');
type Document = import('./Document');
type NodeType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
