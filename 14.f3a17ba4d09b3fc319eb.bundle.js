(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1392:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(1);var createTheme=__webpack_require__(270),ThemeProvider=__webpack_require__(622),Box=__webpack_require__(263),ButtonBase=__webpack_require__(190),IconButton=__webpack_require__(650),Root=__webpack_require__(57),Header=__webpack_require__(455),EdgeTrigger=__webpack_require__(644),EdgeSidebar=__webpack_require__(451),SidebarContent=__webpack_require__(1345),Content=__webpack_require__(1346),Footer=__webpack_require__(1348),mockup=__webpack_require__(1445),Menu=__webpack_require__(459),Menu_default=__webpack_require__.n(Menu),KeyboardArrowLeft=__webpack_require__(1439),KeyboardArrowLeft_default=__webpack_require__.n(KeyboardArrowLeft),KeyboardArrowRight=__webpack_require__(1442),KeyboardArrowRight_default=__webpack_require__.n(KeyboardArrowRight),jsx_runtime=__webpack_require__(0),theme=Object(createTheme.b)(),scheme={header:{config:{xs:{position:"sticky",height:56},md:{position:"relative",height:64}}},leftEdgeSidebar:{autoCollapse:"md",config:{xs:{variant:"temporary",width:256},md:{variant:"permanent",width:256,collapsible:!0,collapsedWidth:64}}}},Fixed_Fixed=function Fixed(){return Object(jsx_runtime.jsx)(ThemeProvider.a,{theme:theme,children:Object(jsx_runtime.jsx)(Root.a,{scheme:scheme,children:function children(_ref){var _state$leftEdgeSideba,_state$leftEdgeSideba2,state=_ref.state;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Header.a,{children:Object(jsx_runtime.jsxs)(Box.a,{flex:1,display:"flex",alignItems:"center",px:2,children:[Object(jsx_runtime.jsx)(EdgeTrigger.a,{target:{anchor:"left",field:"open"},sx:{ml:-.5,mr:1},children:function children(open,setOpen){return Object(jsx_runtime.jsx)(IconButton.a,{onClick:function onClick(){return setOpen(!open)},children:open?Object(jsx_runtime.jsx)(KeyboardArrowLeft_default.a,{}):Object(jsx_runtime.jsx)(Menu_default.a,{})})}}),Object(jsx_runtime.jsx)(mockup.c,{})]})}),Object(jsx_runtime.jsxs)(EdgeSidebar.a,{anchor:"left",children:[Object(jsx_runtime.jsxs)(SidebarContent.a,{children:[Object(jsx_runtime.jsx)(mockup.e,{collapsed:null!==(_state$leftEdgeSideba=null===(_state$leftEdgeSideba2=state.leftEdgeSidebar)||void 0===_state$leftEdgeSideba2?void 0:_state$leftEdgeSideba2.collapsed)&&void 0!==_state$leftEdgeSideba&&_state$leftEdgeSideba}),Object(jsx_runtime.jsx)(mockup.d,{onClickItem:function onClickItem(){}})]}),Object(jsx_runtime.jsx)(EdgeTrigger.a,{target:{anchor:"left",field:"collapsed"},children:function children(collapsed,setCollapsed){return Object(jsx_runtime.jsx)(ButtonBase.a,{onClick:function onClick(){return setCollapsed(!collapsed)},sx:{flexGrow:1,height:48},children:collapsed?Object(jsx_runtime.jsx)(KeyboardArrowRight_default.a,{}):Object(jsx_runtime.jsx)(KeyboardArrowLeft_default.a,{})})}})]}),Object(jsx_runtime.jsx)(Content.a,{children:Object(jsx_runtime.jsx)(mockup.a,{})}),Object(jsx_runtime.jsx)(Footer.a,{children:Object(jsx_runtime.jsx)(mockup.b,{})})]})}})})};Fixed_Fixed.displayName="Fixed";__webpack_exports__.default=Fixed_Fixed},1442:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(61),_interopRequireWildcard=__webpack_require__(164);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_interopRequireWildcard(__webpack_require__(1));var _createSvgIcon=_interopRequireDefault(__webpack_require__(165)),_jsxRuntime=__webpack_require__(0),_default=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");exports.default=_default},1445:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return mockup_ContentEx})),__webpack_require__.d(__webpack_exports__,"b",(function(){return mockup_FooterEx})),__webpack_require__.d(__webpack_exports__,"c",(function(){return mockup_HeaderEx})),__webpack_require__.d(__webpack_exports__,"d",(function(){return mockup_NavContentEx})),__webpack_require__.d(__webpack_exports__,"e",(function(){return mockup_NavHeaderEx}));__webpack_require__(58),__webpack_require__(1);var withStyles=__webpack_require__(1502),Typography=__webpack_require__(1356),Link=__webpack_require__(1592),jsx_runtime=__webpack_require__(0);function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var ContentEx_ContentEx=function ContentEx(_ref2){var classes=_ref2.classes;return Object(jsx_runtime.jsxs)("div",{className:classes.root,children:[Object(jsx_runtime.jsx)(Typography.a,{variant:"overline",children:"INTRODUCING"}),Object(jsx_runtime.jsxs)(Typography.a,{weight:"bold",variant:"h4",gutterBottom:!0,children:["Material UI ",Object(jsx_runtime.jsx)(Link.a,{underline:"none",children:"Layout"})]}),Object(jsx_runtime.jsx)(Typography.a,{gutterBottom:!0,children:Object(jsx_runtime.jsx)("b",{children:"Version 5.0"})}),Object(jsx_runtime.jsx)(Typography.a,{indent:"small",children:"Layout is a group of Material-UI components that are enhanced and combined to create dynamic, easy-to-maintain and easy-to-code as much as possible."}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)(Typography.a,{weight:"bold",variant:"h5",gutterBottom:!0,children:"Let's start with Why?"}),Object(jsx_runtime.jsxs)(Typography.a,{gutterBottom:!0,children:["I created this because",Object(jsx_runtime.jsx)("br",{})]}),Object(jsx_runtime.jsx)(Typography.a,{component:"div",children:Object(jsx_runtime.jsxs)("ol",{children:[Object(jsx_runtime.jsx)("li",{children:"It took me a lot of time to initialize dashboard layout when I have new projects and I’m sure that a lot of you guys agree with me."}),Object(jsx_runtime.jsx)("li",{children:"Sometimes it is hard to refactor because the structure is so poor because someone isn’t deeply understand what he/she was doing, as a result, rewrite the whole layout (it actually happened, at least in my experience)."}),Object(jsx_runtime.jsx)("li",{children:"Because we need to be fast to let others continue our work, we frequently write poor and a lot of code. However, we say we don’t have time to fix them. Eventually, spend all day paying technical debts."})]})}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)(Typography.a,{weight:"bold",variant:"h5",gutterBottom:!0,children:"Objectives"}),Object(jsx_runtime.jsxs)(Typography.a,{children:["It must be easy enough to use, however still be able to adjust to compat with real word examples and usages. More importantly, it need to follow"," ",Object(jsx_runtime.jsx)(Link.a,{target:"_blank",rel:"noopener",href:"https://material.io/design/components/navigation-drawer.html#",underline:"none",children:"Material specs"})," ","since we are 100% based on Material-UI with no other styling libraries. Last but not least, responsive is a must."]}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)(Typography.a,{weight:"bold",variant:"h5",gutterBottom:!0,children:"Solution"}),Object(jsx_runtime.jsx)(Typography.a,{children:"Separate layout into 5 components"}),Object(jsx_runtime.jsx)(Typography.a,{component:"div",children:Object(jsx_runtime.jsxs)("ul",{children:[Object(jsx_runtime.jsx)("li",{children:"Root"}),Object(jsx_runtime.jsx)("li",{children:"Header (AppBar)"}),Object(jsx_runtime.jsx)("li",{children:"Nav (Drawer)"}),Object(jsx_runtime.jsx)("li",{children:"Content"}),Object(jsx_runtime.jsx)("li",{children:"Footer"})]})}),Object(jsx_runtime.jsxs)(Typography.a,{children:[Object(jsx_runtime.jsx)("b",{children:"Root"})," will provide context to other components to sync states across them."]}),Object(jsx_runtime.jsxs)(Typography.a,{children:[Object(jsx_runtime.jsx)("b",{children:"Behavior"})," of your layout will be controlled by using config (just a plain object) that will be injected to the Root."]}),Object(jsx_runtime.jsxs)(Typography.a,{children:[Object(jsx_runtime.jsx)("b",{children:"Presets"})," is a set of predefined config that I can come up with after researching a lot of the real world websites and also the"," ",Object(jsx_runtime.jsx)(Link.a,{href:"https://material.io/design/components/navigation-drawer.html#usage",children:"official Material specs"})]}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)("br",{})]})};ContentEx_ContentEx.displayName="ContentEx",ContentEx_ContentEx.propTypes={},ContentEx_ContentEx.defaultProps={},ContentEx_ContentEx.__docgenInfo={description:"",methods:[],displayName:"ContentEx"};var mockup_ContentEx=Object(withStyles.a)((function styles(_ref){var _root,breakpoints=_ref.breakpoints;return{root:(_root={padding:16,transition:_ref.transitions.create()},_defineProperty(_root,breakpoints.up("sm"),{padding:24,maxWidth:700,margin:"auto"}),_defineProperty(_root,breakpoints.up("md"),{maxWidth:960}),_root)}}))(ContentEx_ContentEx);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/layout/mockup/ContentEx.js"]={name:"ContentEx",docgenInfo:ContentEx_ContentEx.__docgenInfo,path:"stories/layout/mockup/ContentEx.js"});__webpack_require__(5);var prop_types=__webpack_require__(4),prop_types_default=__webpack_require__.n(prop_types),Paper=__webpack_require__(1373),RadioGroup=__webpack_require__(1586),Radio=__webpack_require__(1587),Grid=__webpack_require__(51),FormControl=__webpack_require__(222),FormLabel=__webpack_require__(454),FormControlLabel=__webpack_require__(1512),FormGroup=__webpack_require__(1593),Checkbox=__webpack_require__(1588);function ContentForm_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var ContentForm_ContentForm=function ContentForm(_ref2){var classes=_ref2.classes,preset=_ref2.preset,onChangePreset=_ref2.onChangePreset,data=_ref2.data,onChangeData=_ref2.onChangeData,handleChange=function handleChange(key){return function(e){return onChangeData(Object.assign({},data,ContentForm_defineProperty({},key,e.target.checked)))}};return Object(jsx_runtime.jsx)("div",{className:classes.root,children:Object(jsx_runtime.jsx)(Paper.a,{elevation:1,square:!0,className:classes.paper,children:Object(jsx_runtime.jsxs)(Grid.a,{container:!0,children:[Object(jsx_runtime.jsx)(Grid.a,{item:!0,xs:6,children:Object(jsx_runtime.jsxs)(FormControl.a,{component:"fieldset",children:[Object(jsx_runtime.jsx)(FormLabel.a,{component:"legend",children:"Presets"}),Object(jsx_runtime.jsxs)(RadioGroup.a,{"aria-label":"Preset",name:"preset",value:preset,onChange:function onChange(e){return onChangePreset(e.target.value)},children:[Object(jsx_runtime.jsx)(FormControlLabel.a,{value:"createDefaultLayout",control:Object(jsx_runtime.jsx)(Radio.a,{}),label:"Default"}),Object(jsx_runtime.jsx)(FormControlLabel.a,{value:"createStandardLayout",control:Object(jsx_runtime.jsx)(Radio.a,{}),label:"Standard"}),Object(jsx_runtime.jsx)(FormControlLabel.a,{value:"createFixedLayout",control:Object(jsx_runtime.jsx)(Radio.a,{}),label:"Fixed"}),Object(jsx_runtime.jsx)(FormControlLabel.a,{value:"createContentBasedLayout",control:Object(jsx_runtime.jsx)(Radio.a,{}),label:"Content-based"}),Object(jsx_runtime.jsx)(FormControlLabel.a,{value:"createCozyLayout",control:Object(jsx_runtime.jsx)(Radio.a,{}),label:"Cozy"}),Object(jsx_runtime.jsx)(FormControlLabel.a,{value:"createMuiTreasuryLayout",control:Object(jsx_runtime.jsx)(Radio.a,{}),label:"Mui Treasury"})]})]})}),Object(jsx_runtime.jsx)(Grid.a,{item:!0,xs:6,children:Object(jsx_runtime.jsxs)(FormControl.a,{component:"fieldset",className:classes.formControl,children:[Object(jsx_runtime.jsx)(FormLabel.a,{component:"legend",children:"Enabled mockup"}),Object(jsx_runtime.jsxs)(FormGroup.a,{children:[Object(jsx_runtime.jsx)(FormControlLabel.a,{control:Object(jsx_runtime.jsx)(Checkbox.a,{checked:data.header,onChange:handleChange("header"),value:"header"}),label:"Header"}),Object(jsx_runtime.jsx)(FormControlLabel.a,{control:Object(jsx_runtime.jsx)(Checkbox.a,{checked:data.nav,onChange:handleChange("nav"),value:"nav"}),label:"Nav"}),Object(jsx_runtime.jsx)(FormControlLabel.a,{control:Object(jsx_runtime.jsx)(Checkbox.a,{checked:data.content,onChange:handleChange("content"),value:"content"}),label:"Content"}),Object(jsx_runtime.jsx)(FormControlLabel.a,{control:Object(jsx_runtime.jsx)(Checkbox.a,{checked:data.footer,onChange:handleChange("footer"),value:"footer"}),label:"Footer"})]})]})})]})})})};ContentForm_ContentForm.displayName="ContentForm",ContentForm_ContentForm.propTypes={classes:prop_types_default.a.shape({}).isRequired,preset:prop_types_default.a.string.isRequired,onChangePreset:prop_types_default.a.func.isRequired,data:prop_types_default.a.shape({}).isRequired,onChangeData:prop_types_default.a.func.isRequired},ContentForm_ContentForm.defaultProps={},ContentForm_ContentForm.__docgenInfo={description:"",methods:[],displayName:"ContentForm",props:{classes:{type:{name:"shape",value:{}},required:!0,description:""},preset:{type:{name:"string"},required:!0,description:""},onChangePreset:{type:{name:"func"},required:!0,description:""},data:{type:{name:"shape",value:{}},required:!0,description:""},onChangeData:{type:{name:"func"},required:!0,description:""}}};Object(withStyles.a)((function styles(_ref){var _root,breakpoints=_ref.breakpoints;return{root:(_root={padding:16},ContentForm_defineProperty(_root,breakpoints.up("sm"),{padding:24,maxWidth:500,margin:"auto"}),ContentForm_defineProperty(_root,breakpoints.up("md"),{maxWidth:700}),_root),paper:{padding:16}}}))(ContentForm_ContentForm);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/layout/mockup/ContentForm.js"]={name:"ContentForm",docgenInfo:ContentForm_ContentForm.__docgenInfo,path:"stories/layout/mockup/ContentForm.js"});var Divider=__webpack_require__(1487),FooterEx_FooterEx=function FooterEx(){return Object(jsx_runtime.jsxs)("div",{style:{maxWidth:700,margin:"auto",textAlign:"center"},children:[Object(jsx_runtime.jsx)(Typography.a,{variant:"caption",align:"center",children:"© Copyright 2019"}),Object(jsx_runtime.jsx)(Divider.a,{style:{margin:"24px auto",width:60}}),Object(jsx_runtime.jsxs)(Grid.a,{container:!0,justify:"center",spacing:2,children:[Object(jsx_runtime.jsx)(Grid.a,{item:!0,xs:12,sm:6,md:3,children:Object(jsx_runtime.jsx)(Typography.a,{align:"center",gutterBottom:!0,color:"textSecondary",children:"About"})}),Object(jsx_runtime.jsx)(Grid.a,{item:!0,xs:12,sm:6,md:3,children:Object(jsx_runtime.jsx)(Typography.a,{align:"center",gutterBottom:!0,color:"textSecondary",children:"Blog"})}),Object(jsx_runtime.jsx)(Grid.a,{item:!0,xs:12,sm:6,md:3,children:Object(jsx_runtime.jsx)(Typography.a,{align:"center",gutterBottom:!0,color:"textSecondary",children:"Terms & Conditions"})}),Object(jsx_runtime.jsx)(Grid.a,{item:!0,xs:12,sm:6,md:3,children:Object(jsx_runtime.jsx)(Typography.a,{align:"center",gutterBottom:!0,color:"textSecondary",children:"Contact us"})})]})]})};FooterEx_FooterEx.displayName="FooterEx",FooterEx_FooterEx.propTypes={},FooterEx_FooterEx.defaultProps={},FooterEx_FooterEx.__docgenInfo={description:"",methods:[],displayName:"FooterEx"};var mockup_FooterEx=FooterEx_FooterEx;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/layout/mockup/FooterEx.js"]={name:"FooterEx",docgenInfo:FooterEx_FooterEx.__docgenInfo,path:"stories/layout/mockup/FooterEx.js"});__webpack_require__(37),__webpack_require__(265);var useTheme=__webpack_require__(91),InputBase=__webpack_require__(82),IconButton=__webpack_require__(650),Search=__webpack_require__(145),Search_default=__webpack_require__.n(Search),MoreVert=__webpack_require__(1460),MoreVert_default=__webpack_require__.n(MoreVert),Favorite=__webpack_require__(1472),Favorite_default=__webpack_require__.n(Favorite),Phone=__webpack_require__(1447),Phone_default=__webpack_require__.n(Phone),Camera=__webpack_require__(1473),Camera_default=__webpack_require__.n(Camera);function HeaderEx_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var HeaderEx_HeaderEx=function HeaderEx(_ref2){var classes=_ref2.classes,screen=_ref2.screen;Object(useTheme.a)();return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Typography.a,{noWrap:!0,color:"textSecondary",className:classes.header,children:"@mui-treasury/layout"}),Object(jsx_runtime.jsx)("div",{className:classes.grow}),Object(jsx_runtime.jsxs)("div",{className:classes.search,children:[Object(jsx_runtime.jsx)("div",{className:classes.searchIcon,children:Object(jsx_runtime.jsx)(Search_default.a,{})}),Object(jsx_runtime.jsx)(InputBase.c,{placeholder:"Search…",classes:{root:classes.inputRoot,input:classes.inputInput}})]}),"xs"===screen&&Object(jsx_runtime.jsx)(IconButton.a,{children:Object(jsx_runtime.jsx)(MoreVert_default.a,{})}),"sm"===screen&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(IconButton.a,{children:Object(jsx_runtime.jsx)(Favorite_default.a,{})}),Object(jsx_runtime.jsx)(IconButton.a,{children:Object(jsx_runtime.jsx)(MoreVert_default.a,{})})]}),screen&&"xs"!==screen&&"sm"!==screen&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(IconButton.a,{children:Object(jsx_runtime.jsx)(Favorite_default.a,{})}),Object(jsx_runtime.jsx)(IconButton.a,{children:Object(jsx_runtime.jsx)(Phone_default.a,{})}),Object(jsx_runtime.jsx)(IconButton.a,{children:Object(jsx_runtime.jsx)(Camera_default.a,{})})]})]})};HeaderEx_HeaderEx.propTypes={screen:prop_types_default.a.string,classes:prop_types_default.a.shape({}).isRequired},HeaderEx_HeaderEx.defaultProps={screen:null},HeaderEx_HeaderEx.__docgenInfo={description:"",methods:[],displayName:"HeaderEx",props:{screen:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},classes:{type:{name:"shape",value:{}},required:!0,description:""}}};var mockup_HeaderEx=Object(withStyles.a)((function styles(_ref){var direction=_ref.direction,spacing=_ref.spacing,transitions=_ref.transitions,breakpoints=_ref.breakpoints,palette=_ref.palette;return{header:{fontWeight:900,minWidth:0,fontSize:18},grow:{flexGrow:1},search:HeaderEx_defineProperty({position:"relative",marginRight:8,borderRadius:_ref.shape.borderRadius,background:"dark"===palette.type?palette.background.default:palette.grey[200],"&:hover":{background:"dark"===palette.type?palette.background.paper:palette.grey[300]},marginLeft:0,width:"100%"},breakpoints.up("sm"),{marginLeft:spacing(1),width:"auto"}),searchIcon:{width:spacing(9),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:HeaderEx_defineProperty({borderRadius:4,paddingTop:spacing(1),paddingRight:spacing("rtl"===direction?10:1),paddingBottom:spacing(1),paddingLeft:spacing("rtl"===direction?1:10),transition:transitions.create("width"),width:"100%"},breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}}))(HeaderEx_HeaderEx);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/layout/mockup/HeaderEx.js"]={name:"HeaderEx",docgenInfo:HeaderEx_HeaderEx.__docgenInfo,path:"stories/layout/mockup/HeaderEx.js"});__webpack_require__(32);var List=__webpack_require__(1376),ListItem=__webpack_require__(440),ListItemText=__webpack_require__(1511),ListItemIcon=__webpack_require__(1627),Icon=__webpack_require__(1630),Folder=__webpack_require__(1474),Folder_default=__webpack_require__.n(Folder),People=__webpack_require__(1449),People_default=__webpack_require__.n(People),Star=__webpack_require__(1448),Star_default=__webpack_require__.n(Star),Schedule=__webpack_require__(1456),Schedule_default=__webpack_require__.n(Schedule),OfflinePin=__webpack_require__(1475),OfflinePin_default=__webpack_require__.n(OfflinePin),Publish=__webpack_require__(1476),Publish_default=__webpack_require__.n(Publish),Backup=__webpack_require__(1477),Backup_default=__webpack_require__.n(Backup),Delete=__webpack_require__(1459),Delete_default=__webpack_require__.n(Delete),Settings=__webpack_require__(1444),Settings_default=__webpack_require__.n(Settings),list=[{primaryText:"My Files",icon:Object(jsx_runtime.jsx)(Folder_default.a,{})},{primaryText:"Shared with me",icon:Object(jsx_runtime.jsx)(People_default.a,{})},{primaryText:"Starred",icon:Object(jsx_runtime.jsx)(Star_default.a,{})},{primaryText:"Recent",icon:Object(jsx_runtime.jsx)(Schedule_default.a,{})},{primaryText:"Offline",icon:Object(jsx_runtime.jsx)(OfflinePin_default.a,{})},{primaryText:"Uploads",icon:Object(jsx_runtime.jsx)(Publish_default.a,{})},{primaryText:"Backups",icon:Object(jsx_runtime.jsx)(Backup_default.a,{})},{primaryText:"Trash",icon:Object(jsx_runtime.jsx)(Delete_default.a,{})}],NavContentEx_NavContentEx=function NavContentEx(_ref){var onClickItem=_ref.onClickItem;return Object(jsx_runtime.jsxs)(List.a,{children:[list.map((function(_ref2,i){var primaryText=_ref2.primaryText,icon=_ref2.icon;return Object(jsx_runtime.jsxs)(ListItem.b,{selected:0===i,button:!0,onClick:onClickItem,children:[Object(jsx_runtime.jsx)(ListItemIcon.a,{children:Object(jsx_runtime.jsx)(Icon.a,{children:icon})}),Object(jsx_runtime.jsx)(ListItemText.a,{primary:primaryText,primaryTypographyProps:{noWrap:!0}})]},primaryText)})),Object(jsx_runtime.jsx)(Divider.a,{style:{margin:"12px 0"}}),Object(jsx_runtime.jsxs)(ListItem.b,{button:!0,onClick:onClickItem,children:[Object(jsx_runtime.jsx)(ListItemIcon.a,{children:Object(jsx_runtime.jsx)(Settings_default.a,{})}),Object(jsx_runtime.jsx)(ListItemText.a,{primary:"Settings & account",primaryTypographyProps:{noWrap:!0}})]})]})};NavContentEx_NavContentEx.displayName="NavContentEx",NavContentEx_NavContentEx.propTypes={},NavContentEx_NavContentEx.defaultProps={},NavContentEx_NavContentEx.__docgenInfo={description:"",methods:[],displayName:"NavContentEx"};var mockup_NavContentEx=NavContentEx_NavContentEx;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/layout/mockup/NavContentEx.js"]={name:"NavContentEx",docgenInfo:NavContentEx_NavContentEx.__docgenInfo,path:"stories/layout/mockup/NavContentEx.js"});var Avatar=__webpack_require__(1478),NavHeaderEx_NavHeaderEx=function NavHeaderEx(_ref){var collapsed=_ref.collapsed;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)("div",{style:{padding:collapsed?8:16,transition:"0.3s"},children:[Object(jsx_runtime.jsx)(Avatar.a,{style:{width:collapsed?48:60,height:collapsed?48:60,transition:"0.3s"}}),Object(jsx_runtime.jsx)("div",{style:{paddingBottom:16}}),Object(jsx_runtime.jsx)(Typography.a,{variant:"h6",noWrap:!0,children:"Mui Treasury"}),Object(jsx_runtime.jsx)(Typography.a,{color:"textSecondary",noWrap:!0,gutterBottom:!0,children:"muitreasury@ui.com"})]}),Object(jsx_runtime.jsx)(Divider.a,{})]})};NavHeaderEx_NavHeaderEx.propTypes={collapsed:prop_types_default.a.bool.isRequired},NavHeaderEx_NavHeaderEx.defaultProps={},NavHeaderEx_NavHeaderEx.__docgenInfo={description:"",methods:[],displayName:"NavHeaderEx",props:{collapsed:{type:{name:"bool"},required:!0,description:""}}};var mockup_NavHeaderEx=NavHeaderEx_NavHeaderEx;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/layout/mockup/NavHeaderEx.js"]={name:"NavHeaderEx",docgenInfo:NavHeaderEx_NavHeaderEx.__docgenInfo,path:"stories/layout/mockup/NavHeaderEx.js"})}}]);
//# sourceMappingURL=14.f3a17ba4d09b3fc319eb.bundle.js.map