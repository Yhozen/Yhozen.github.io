import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{useEffect,useRef,useMemo,useState}from"react";import{addPropertyControls,ControlType,RenderTarget}from"framer";import{useTransform,motionValue,motion,animate}from"framer-motion";import{isMotionValue,defaultEvents,useOnEnter,colorTokentoValue}from"https://framer.com/m/framer/default-utils.js@^0.45.0";import{useMeasuredSize}from"https://framer.com/m/framer/useMeasuredSize.js";var Indicators;(function(Indicators){Indicators["Circle"]="Circle";Indicators["Line"]="Line";})(Indicators||(Indicators={}));function getIndicator(indicator,props){switch(indicator){case Indicators.Circle:return(/*#__PURE__*/ _jsx(Circle,{...props}));case Indicators.Line:return(/*#__PURE__*/ _jsx(Line,{...props}));default:return(/*#__PURE__*/ _jsx(Line,{...props}));}}/**
 * PROGRESS
 *
 * @framerIntrinsicWidth 50
 * @framerIntrinsicHeight 50
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 */ export function Progress(props){const{progress,progressEnd,onComplete,transition,animation,type,padding,animateFromStart,shouldAnimate,shouldAnimateTransition,onClick,onMouseEnter,onMouseLeave,onMouseDown,onMouseUp}=props;const isPropMotionValue=isMotionValue(progress);const didInitialMount=useRef(false);const[progressValue]=useState(()=>isPropMotionValue?progress:motionValue(progress*0.01));const lastValue=useRef(-1);const onCanvas=useMemo(()=>RenderTarget.current()===RenderTarget.canvas,[]);useOnEnter(()=>{if(shouldAnimate&&RenderTarget.current()!==RenderTarget.canvas){if(animateFromStart)progressValue.set(0);if(!onCanvas)animate(progressValue,progressEnd*0.01,animation);}});useEffect(()=>{if(!isPropMotionValue&&!onCanvas&&didInitialMount.current&&shouldAnimateTransition){animate(progressValue,progress*0.01,transition);}else if(!didInitialMount.current){didInitialMount.current=true;}else{progressValue.set(progress*0.01);}},[progress]);useEffect(()=>progressValue.onChange(()=>{if(progressValue.get()>=1&&progressValue.get()!==lastValue.current&&onComplete)onComplete();lastValue.current=progressValue.get();}),[]);return(/*#__PURE__*/ _jsx("div",{onClick,onMouseEnter,onMouseLeave,onMouseDown,onMouseUp,style:{width:"100%",height:"100%",padding,overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center"},children:getIndicator(type,{...props,progressValue})}));}function Circle(props){const{progressValue,strokeWidth,trackColor,progressColor,roundCap,// width,
// height,
padding}=props;const container=useRef();const size=useMeasuredSize(container);const width=(size===null||size===void 0?void 0:size.width)?size.width:50;const height=(size===null||size===void 0?void 0:size.height)?size.height:50;const circleSize=Math.min(width,height)-strokeWidth-padding*2;const xOffset=Math.abs(width-circleSize)/2;const yOffset=Math.abs(height-circleSize)/2;const w=circleSize;const r=w/2;const c=Math.PI*w;const dashOffset=useTransform(progressValue,[1,0],[0,c]);return(/*#__PURE__*/ _jsx(motion.div,{ref:container,style:{display:"block",width:"100%",height:"100%"},children:/*#__PURE__*/ _jsx("svg",{style:{width:"100%",height:"100%",transformOrigin:"50% 50%",transform:`rotate(${roundCap?-90+3:-90}deg)`},children:/*#__PURE__*/ _jsxs("g",{style:{transform:`translateX(${xOffset}px) translateY(${yOffset}px)`},children:[/*#__PURE__*/ _jsx("circle",{cx:r,cy:r,r:r,fill:"none",stroke:colorTokentoValue(trackColor),strokeWidth:strokeWidth,strokeDasharray:c}),/*#__PURE__*/ _jsx(motion.circle,{cx:r,cy:r,r:r,fill:"none",stroke:colorTokentoValue(progressColor),strokeWidth:strokeWidth,strokeLinecap:roundCap?"round":"butt",strokeDasharray:c,style:{strokeDashoffset:dashOffset,transformOrigin:"center"}})]})})}));}function Line(props){const{progressValue,lineHeight,trackColor,progressColor,borderRadius,roundCap}=props;return(/*#__PURE__*/ _jsx(motion.div,{style:{background:colorTokentoValue(trackColor),width:"100%",height:lineHeight,borderRadius,overflow:"hidden",z:0.001},children:/*#__PURE__*/ _jsx(motion.div,{style:{width:"100%",height:lineHeight,scaleX:progressValue,background:colorTokentoValue(progressColor),originX:0}})}));}Progress.defaultProps={width:50,height:50,animation:{type:"tween",ease:[0,0,1,1],duration:1,delay:0.25},transition:{type:"spring",delay:0,stiffness:150,damping:20,mass:1},progressColor:"#09F",trackColor:"#E5E5E5",strokeWidth:5,shouldAnimate:true,progress:60,progressEnd:100,padding:5,strokeStyle:"solid",borderRadius:5,lineHeight:5,animateFromStart:false,shouldAnimateTransition:true,type:Indicators.Circle};addPropertyControls(Progress,{type:{title:"Type",type:ControlType.Enum,options:Object.keys(Indicators).map(i=>Indicators[i])},progress:{type:ControlType.Number,defaultValue:Progress.defaultProps.progress,unit:"%",min:0,max:100,title:"Value"},progressEnd:{type:ControlType.Number,defaultValue:Progress.defaultProps.progressEnd,unit:"%",min:0,max:100,title:"Animate To",hidden:({shouldAnimate})=>!shouldAnimate},progressColor:{type:ControlType.Color,title:"Color",defaultValue:Progress.defaultProps.progressColor},trackColor:{type:ControlType.Color,title:"Track",defaultValue:Progress.defaultProps.trackColor},shouldAnimate:{type:ControlType.Boolean,title:"Animate",enabledTitle:"Yes",disabledTitle:"No"},animateFromStart:{type:ControlType.Boolean,title:"From",enabledTitle:"Start",disabledTitle:"Current",hidden:({shouldAnimate})=>!shouldAnimate},animation:{title:" ",type:ControlType.Transition,defaultValue:Progress.defaultProps.animation,hidden:({shouldAnimate})=>!shouldAnimate},shouldAnimateTransition:{type:ControlType.Boolean,title:"Transition",enabledTitle:"Animate",disabledTitle:"Instant"},transition:{title:" ",type:ControlType.Transition,defaultValue:Progress.defaultProps.transition,hidden:({shouldAnimateTransition})=>!shouldAnimateTransition},padding:{type:ControlType.Number,title:"Padding",defaultValue:Progress.defaultProps.strokeWidth,displayStepper:true,min:0},strokeWidth:{type:ControlType.Number,title:"Thickness",defaultValue:Progress.defaultProps.strokeWidth,hidden:({type})=>type!==Indicators.Circle,displayStepper:true,min:1},lineHeight:{title:"Thickness",type:ControlType.Number,min:1,hidden:({type})=>type!==Indicators.Line},borderRadius:{type:ControlType.Number,title:"Radius",min:0,max:50,hidden:({type})=>type!==Indicators.Line},roundCap:{type:ControlType.Boolean,hidden:({type})=>type!==Indicators.Circle,title:"Line Cap",enabledTitle:"Round",disabledTitle:"Flat"},onComplete:{type:ControlType.EventHandler},...defaultEvents});
export const __FramerMetadata__ = {"exports":{"Progress":{"type":"reactComponent","name":"Progress","slots":[],"annotations":{"framerIntrinsicWidth":"50","framerContractVersion":"1","framerSupportedLayoutHeight":"fixed","framerSupportedLayoutWidth":"fixed","framerIntrinsicHeight":"50"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./Progress.map