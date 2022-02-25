import * as React from "react"; const { forwardRef, ComponentPropsWithoutRef } = React; const IconBase = forwardRef((props, ref) => { const { color, size, weight, mirrored, children, renderPath, ...restProps } = props; return React.createElement("svg", {ref, xmlns: "http://www.w3.org/2000/svg", style: {width: "100%", height: "100%"}, fill: color, viewBox: "0 0 256 256", transform: mirrored ? "scale(-1, 1)" : void 0, ...restProps}, children, React.createElement("rect", {width: "256", height: "256", fill: "none"}), renderPath(weight, color)); }); IconBase.defaultProps = {color: "currentColor", size: "1em", weight: "regular", mirrored: false}; IconBase.displayName = "IconBase"; var IconBase_default = IconBase; const __FramerMetadata__ = {exports: {default: {type: "reactComponent", slots: []}}}; export { __FramerMetadata__ , IconBase_default as default }; 