// Compatibility shim for @blocknote/core 0.9.x.
//
// prosemirror-view >= 1.42.3 is required to fix an XSS in paste handling
// (GHSA-c8x8-7fp4-3x9w), but since 1.38.0 it no longer exports the internal
// `__serializeForClipboard(view, slice)` helper that BlockNote 0.9 uses for
// drag-and-drop. The same logic is now the public
// `EditorView.prototype.serializeForClipboard(slice)` method, so re-export the
// real module and add the old helper on top. next.config.js aliases
// "prosemirror-view" to this file, so every importer still shares one
// prosemirror-view instance.
//
// Remove this file (and the alias) once BlockNote is upgraded.
export * from "prosemirror-view-original";

export function __serializeForClipboard(view, slice) {
  return view.serializeForClipboard(slice);
}
