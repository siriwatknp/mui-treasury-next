(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1442:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(21),__webpack_require__(5);var react=__webpack_require__(1),react_default=__webpack_require__.n(react),createTheme=__webpack_require__(221),ThemeProvider=__webpack_require__(458),colorManipulator=__webpack_require__(39),esm_extends=__webpack_require__(3),objectWithoutPropertiesLoose=__webpack_require__(6);function defaultTrigger(store,options){const{disableHysteresis:disableHysteresis=!1,threshold:threshold=100,target:target}=options,previous=store.current;return target&&(store.current=void 0!==target.pageYOffset?target.pageYOffset:target.scrollTop),!(!disableHysteresis&&void 0!==previous&&store.current<previous)&&store.current>threshold}const defaultTarget="undefined"!=typeof window?window:null;var Box=__webpack_require__(51),ButtonBase=__webpack_require__(200),CssBaseline=__webpack_require__(1368),IconButton=__webpack_require__(642),Grid=__webpack_require__(40),Typography=__webpack_require__(471),Tab=__webpack_require__(1520),MenuRounded=__webpack_require__(1542),MenuRounded_default=__webpack_require__.n(MenuRounded),KeyboardArrowLeftRounded=__webpack_require__(1543),KeyboardArrowLeftRounded_default=__webpack_require__.n(KeyboardArrowLeftRounded),KeyboardArrowRightRounded=__webpack_require__(1544),KeyboardArrowRightRounded_default=__webpack_require__.n(KeyboardArrowRightRounded),Root=__webpack_require__(60),Header=__webpack_require__(470),EdgeTrigger=__webpack_require__(668),EdgeSidebar=__webpack_require__(465),SidebarContent=__webpack_require__(1386),Content=__webpack_require__(1387),experimentalStyled=__webpack_require__(7),Tabs=__webpack_require__(1537),UnderlineTabs=Object(experimentalStyled.a)(Tabs.a)((function(_ref){var theme=_ref.theme;return{"&:before":{content:'""',display:"block",height:"1px",backgroundColor:theme.palette.grey[200],left:0,bottom:0,width:"100%",position:"absolute"},"& .MuiTab-root":{textTransform:"none",paddingLeft:0,paddingRight:0,marginLeft:theme.spacing(2),marginRight:theme.spacing(2),"&:first-of-type":{marginLeft:0},"&:last-of-type":{marginRight:0}}}}));try{UnderlineTabs.displayName="UnderlineTabs",UnderlineTabs.__docgenInfo={description:"",displayName:"UnderlineTabs",props:{action:{defaultValue:null,description:"Callback fired when the component mounts.\nThis is useful when you want to trigger an action programmatically.\nIt supports two actions: `updateIndicator()` and `updateScrollButtons()`\n@param actions This object contains all possible actions\nthat can be triggered programmatically.",name:"action",required:!1,type:{name:"((instance: TabsActions | null) => void) | RefObject<TabsActions> | null"}},allowScrollButtonsMobile:{defaultValue:{value:"false"},description:"If `true`, the scroll buttons aren't forced hidden on mobile.\nBy default the scroll buttons are hidden on mobile and takes precedence over `scrollButtons`.",name:"allowScrollButtonsMobile",required:!1,type:{name:"boolean"}},"aria-label":{defaultValue:null,description:"The label for the Tabs as a string.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"An id or list of ids separated by a space that label the Tabs.",name:"aria-labelledby",required:!1,type:{name:"string"}},centered:{defaultValue:{value:"false"},description:"If `true`, the tabs are centered.\nThis prop is intended for large views.",name:"centered",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<TabsClasses> & Partial<Record<never, string>>)"}},indicatorColor:{defaultValue:{value:"'primary'"},description:"Determines the color of the indicator.",name:"indicatorColor",required:!1,type:{name:'"primary" | "secondary"'}},onChange:{defaultValue:null,description:"Callback fired when the value changes.\n@param event The event source of the callback. **Warning**: This is a generic event not a change event.\n@param value We default to the index of the child (number)",name:"onChange",required:!1,type:{name:"((event: SyntheticEvent<Element, Event>, value: any) => void)"}},orientation:{defaultValue:{value:"'horizontal'"},description:"The component orientation (layout flow direction).",name:"orientation",required:!1,type:{name:'"horizontal" | "vertical"'}},ScrollButtonComponent:{defaultValue:{value:"TabScrollButton"},description:"The component used to render the scroll buttons.",name:"ScrollButtonComponent",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "div" | "slot" | "style" | "title" | "a" | "abbr" | "address" | ... 166 more ...'}},scrollButtons:{defaultValue:{value:"'auto'"},description:"Determine behavior of scroll buttons when tabs are set to scroll:\n\n- `auto` will only present them when not all the items are visible.\n- `true` will always present them.\n- `false` will never present them.\n\nBy default the scroll buttons are hidden on mobile.\nThis behavior can be disabled with `allowScrollButtonsMobile`.",name:"scrollButtons",required:!1,type:{name:'boolean | "auto"'}},selectionFollowsFocus:{defaultValue:null,description:"If `true` the selected tab changes on focus. Otherwise it only\nchanges on activation.",name:"selectionFollowsFocus",required:!1,type:{name:"boolean"}},TabIndicatorProps:{defaultValue:{value:"{}"},description:"Props applied to the tab indicator element.",name:"TabIndicatorProps",required:!1,type:{name:"Partial<HTMLAttributes<HTMLDivElement>>"}},TabScrollButtonProps:{defaultValue:{value:"{}"},description:"Props applied to the [`TabScrollButton`](/api/tab-scroll-button/) element.",name:"TabScrollButtonProps",required:!1,type:{name:"Partial<TabScrollButtonProps>"}},textColor:{defaultValue:{value:"'primary'"},description:"Determines the color of the `Tab`.",name:"textColor",required:!1,type:{name:'"inherit" | "primary" | "secondary"'}},value:{defaultValue:null,description:"The value of the currently selected `Tab`.\nIf you don't want any selected `Tab`, you can set this prop to `false`.",name:"value",required:!1,type:{name:"any"}},variant:{defaultValue:{value:"'standard'"},description:"Determines additional display behavior of the tabs:\n\n- `scrollable` will invoke scrolling properties and allow for horizontally\nscrolling (or swiping) of the tab bar.\n-`fullWidth` will make the tabs grow to use all the available space,\nwhich should be used for small views, like on mobile.\n- `standard` will render the default state.",name:"variant",required:!1,type:{name:'"fullWidth" | "standard" | "scrollable"'}},visibleScrollbar:{defaultValue:{value:"false"},description:"If `true`, the scrollbar is visible. It can be useful when displaying\na long vertical list of tabs.",name:"visibleScrollbar",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SystemCssProperties<Theme> | CSSPseudoSelectorProps<Theme> | CSSSelectorObject<Theme> | null"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"string | number"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},centerRipple:{defaultValue:{value:"false"},description:"If `true`, the ripples are centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:{value:"false"},description:"If `true`, the ripple effect is disabled.\n\n⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure\nto highlight the element by applying separate styles with the `.Mui-focusedVisible` class.",name:"disableRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:{value:"false"},description:"If `true`, the touch ripple effect is disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:{value:"false"},description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:"This prop can help identify which element has keyboard focus.\nThe class name will be applied when the element gains the focus through keyboard interaction.\nIt's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).\nThe rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/master/explainer.md).\nA [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components\nif needed.",name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "div" | "slot" | "style" | "title" | "a" | "abbr" | "address" | ... 166 more ...'}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"((event: FocusEvent<any>) => void)"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "div" | "slot" | "style" | "title" | "a" | "abbr" | "address" | ... 166 more ...'}},styleProps:{defaultValue:null,description:"",name:"styleProps",required:!1,type:{name:"Record<string, unknown>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/mockup/src/tabs/UnderlineTabs.tsx#UnderlineTabs"]={docgenInfo:UnderlineTabs.__docgenInfo,name:"UnderlineTabs",path:"packages/mockup/src/tabs/UnderlineTabs.tsx#UnderlineTabs"})}catch(__react_docgen_typescript_loader_error){}var SideNavUserInfo=__webpack_require__(1376),IconNav=__webpack_require__(1378),LinkNav=__webpack_require__(1379),StatCard=__webpack_require__(1377),UserActiveCard=__webpack_require__(1381),TopUsersCard=__webpack_require__(1380),typography=__webpack_require__(85),jsx_runtime=__webpack_require__(0);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var theme=Object(createTheme.b)({palette:{primary:{main:"#0064FE"},error:{main:"#FD3E5B"},grey:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}}}),Analytics_Analytics=function Analytics(){var _React$useState2=_slicedToArray(react_default.a.useState(0),2),tabIndex=_React$useState2[0],setTabIndex=_React$useState2[1],trigger=function useScrollTrigger(options={}){const{getTrigger:getTrigger=defaultTrigger,target:target=defaultTarget}=options,other=Object(objectWithoutPropertiesLoose.a)(options,["getTrigger","target"]),store=react.useRef(),[trigger,setTrigger]=react.useState(()=>getTrigger(store,other));return react.useEffect(()=>{const handleScroll=()=>{setTrigger(getTrigger(store,Object(esm_extends.a)({target:target},other)))};return handleScroll(),target.addEventListener("scroll",handleScroll),()=>{target.removeEventListener("scroll",handleScroll)}},[target,getTrigger,JSON.stringify(other)]),trigger}({threshold:0,disableHysteresis:!0});return Object(jsx_runtime.jsx)(ThemeProvider.a,{theme:theme,children:Object(jsx_runtime.jsxs)(Root.a,{scheme:{header:{config:{xs:{position:"sticky",height:48},sm:{position:"sticky",height:64},md:{position:"sticky",height:72}}},subheader:{config:{xs:{position:"sticky",height:44},sm:{position:"sticky",height:44},md:{position:"sticky",height:48}}},leftEdgeSidebar:{autoCollapse:"md",config:{xs:{variant:"temporary",width:"100vw"},md:{variant:"permanent",width:256,collapsible:!0,collapsedWidth:72,uncollapsedOnHover:!0}}}},children:[Object(jsx_runtime.jsx)(CssBaseline.a,{}),Object(jsx_runtime.jsx)(Header.a,{sx:Object.assign({bgcolor:"rgba(255,255,255,0.5)",backdropFilter:"blur(12px)"},trigger&&{transition:"0.2s",boxShadow:"0 0 4px 0 #e2e8f0","&:before":{content:'""',position:"absolute",display:"block",width:"100%",height:"1px",bgcolor:"grey.200",bottom:0}}),children:Object(jsx_runtime.jsxs)(Box.a,{sx:{px:{xs:1,md:2.5},display:"flex",alignItems:"center",gap:1,height:{xs:52,sm:64,md:72}},children:[Object(jsx_runtime.jsx)(EdgeTrigger.a,{target:{anchor:"left",field:"open"},children:function children(open,setOpen){return Object(jsx_runtime.jsx)(IconButton.a,{onClick:function onClick(){return setOpen(!open)},children:Object(jsx_runtime.jsx)(MenuRounded_default.a,{})})}}),Object(jsx_runtime.jsx)(Typography.a,{variant:"h6",sx:{fontSize:"clamp(18px, 1vw + 1rem, 24px)"},children:Object(jsx_runtime.jsx)("b",{children:"Analytics"})})]})}),Object(jsx_runtime.jsx)(Header.b,{children:Object(jsx_runtime.jsxs)(UnderlineTabs,{value:tabIndex,onChange:function onChange(event,index){return setTabIndex(index)},sx:{minHeight:{xs:44,md:48},px:2,"& .MuiTab-root":{minHeight:{xs:44,md:48},minWidth:0,fontSize:{md:16}}},children:[Object(jsx_runtime.jsx)(Tab.a,{label:Object(jsx_runtime.jsx)(typography.a,{cached:!0}),disableTouchRipple:!0}),Object(jsx_runtime.jsx)(Tab.a,{label:Object(jsx_runtime.jsx)(typography.a,{cached:!0}),disableTouchRipple:!0}),Object(jsx_runtime.jsx)(Tab.a,{label:Object(jsx_runtime.jsx)(typography.a,{cached:!0}),disableTouchRipple:!0})]})}),Object(jsx_runtime.jsxs)(EdgeSidebar.a,{anchor:"left",PaperProps:{sx:{overflow:"visible",maxWidth:375,"&.AppEdgeSidebar-paperExpanded":{boxShadow:"0 0 12px 0 ".concat(Object(colorManipulator.a)("#64748b",.2))}}},children:[Object(jsx_runtime.jsx)(EdgeTrigger.a,{target:{anchor:"left",field:"open"},sx:{position:"absolute",top:48,right:{xs:8,sm:-24},zIndex:1},children:function children(open,setOpen){return Object(jsx_runtime.jsx)(IconButton.a,{onClick:function onClick(){return setOpen(!open)},sx:{bgcolor:"background.paper",border:"1px solid",borderColor:"grey.200",boxShadow:"0 1px 4px 0 rgba(0,0,0,0.12)","&:hover":{bgcolor:"#f5f5f5"}},children:Object(jsx_runtime.jsx)(KeyboardArrowLeftRounded_default.a,{})})}}),Object(jsx_runtime.jsxs)(SidebarContent.a,{children:[Object(jsx_runtime.jsx)(SideNavUserInfo.a,{}),Object(jsx_runtime.jsxs)(Box.a,{sx:{borderTop:"1px solid",borderColor:"grey.200",display:"flex",height:"100%"},children:[Object(jsx_runtime.jsx)(IconNav.a,{size:"small"}),Object(jsx_runtime.jsx)(LinkNav.a,{})]})]}),Object(jsx_runtime.jsx)(EdgeTrigger.a,{target:{anchor:"left",field:"collapsed"},children:function children(collapsed,setCollapsed){return Object(jsx_runtime.jsx)(ButtonBase.a,{onClick:function onClick(){return setCollapsed(!collapsed)},sx:{height:48,width:"100%",borderTop:"1px solid",borderColor:"grey.200"},children:collapsed?Object(jsx_runtime.jsx)(KeyboardArrowRightRounded_default.a,{}):Object(jsx_runtime.jsx)(KeyboardArrowLeftRounded_default.a,{})})}})]}),Object(jsx_runtime.jsxs)(Content.a,{children:[Object(jsx_runtime.jsx)(Box.a,{sx:{height:"16vh",minHeight:240,borderRadius:2,bgcolor:"#eaeff7",m:2}}),Object(jsx_runtime.jsx)(Box.a,{sx:{px:2},children:Object(jsx_runtime.jsxs)(Grid.a,{container:!0,spacing:2,children:[Object(jsx_runtime.jsxs)(Grid.a,{item:!0,xs:12,sm:6,md:8,container:!0,spacing:2,children:[Object(jsx_runtime.jsx)(Grid.a,{item:!0,xs:6,children:Object(jsx_runtime.jsx)(StatCard.a,{})}),Object(jsx_runtime.jsx)(Grid.a,{item:!0,xs:6,children:Object(jsx_runtime.jsx)(StatCard.a,{})}),Object(jsx_runtime.jsx)(Grid.a,{item:!0,xs:6,children:Object(jsx_runtime.jsx)(StatCard.a,{})}),Object(jsx_runtime.jsx)(Grid.a,{item:!0,xs:6,children:Object(jsx_runtime.jsx)(StatCard.a,{})}),Object(jsx_runtime.jsx)(Grid.a,{item:!0,xs:12,md:6,children:Object(jsx_runtime.jsx)(UserActiveCard.a,{})})]}),Object(jsx_runtime.jsx)(Grid.a,{item:!0,xs:12,sm:6,md:4,children:Object(jsx_runtime.jsx)(TopUsersCard.a,{sx:{height:"100%"}})})]})}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)("br",{})]})]})})};Analytics_Analytics.displayName="Analytics";__webpack_exports__.default=Analytics_Analytics},1542:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(52),_interopRequireWildcard=__webpack_require__(104);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_interopRequireWildcard(__webpack_require__(1));var _createSvgIcon=_interopRequireDefault(__webpack_require__(105)),_jsxRuntime=__webpack_require__(0),_default=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"}),"MenuRounded");exports.default=_default},1543:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(52),_interopRequireWildcard=__webpack_require__(104);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_interopRequireWildcard(__webpack_require__(1));var _createSvgIcon=_interopRequireDefault(__webpack_require__(105)),_jsxRuntime=__webpack_require__(0),_default=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"M14.71 15.88 10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"}),"KeyboardArrowLeftRounded");exports.default=_default},1544:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(52),_interopRequireWildcard=__webpack_require__(104);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_interopRequireWildcard(__webpack_require__(1));var _createSvgIcon=_interopRequireDefault(__webpack_require__(105)),_jsxRuntime=__webpack_require__(0),_default=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"M9.29 15.88 13.17 12 9.29 8.12a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"}),"KeyboardArrowRightRounded");exports.default=_default}}]);
//# sourceMappingURL=11.cc990f1f18aad46db238.bundle.js.map