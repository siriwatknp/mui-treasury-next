(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1625:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(1),react_default=__webpack_require__.n(react),createMuiTheme=__webpack_require__(268),makeStyles=__webpack_require__(1358),ThemeProvider=__webpack_require__(473),CssBaseline=__webpack_require__(1337),IconButton=__webpack_require__(661),Menu=__webpack_require__(467),Menu_default=__webpack_require__.n(Menu),Box=__webpack_require__(266),Toolbar=__webpack_require__(1429),InputBase=__webpack_require__(82),Avatar=__webpack_require__(1435),Search=__webpack_require__(158),Search_default=__webpack_require__.n(Search),ArrowDropDown=__webpack_require__(1476),ArrowDropDown_default=__webpack_require__.n(ArrowDropDown),HelpOutline=__webpack_require__(1536),HelpOutline_default=__webpack_require__.n(HelpOutline),Apps=__webpack_require__(1537),Apps_default=__webpack_require__.n(Apps),sized=__webpack_require__(1442),row=__webpack_require__(1451),google=__webpack_require__(1534),jsx_runtime=__webpack_require__(0),useStyles=Object(makeStyles.default)({collapse:{marginLeft:-12,marginRight:4},logo:{height:40},toolbar:{minWidth:768,minHeight:"64px !important",backgroundColor:"#fff",boxShadow:"inset 0 -1px 0 rgba(100,121,143,0.122)"},searchInput:{backgroundColor:"#f1f3f4",height:48,borderRadius:8,padding:"0 8px",maxWidth:720,flexGrow:1}}),AppHeader_AppHeader=function AppHeader(_ref){var collapse=_ref.collapse,styles=useStyles(),actionStyles=Object(sized.useSizedIconButtonStyles)({padding:8,childSize:24}),gutterStyles=Object(row.useRowGutterStyles)({size:8}),tinyGutterStyles=Object(row.useRowGutterStyles)({size:2,before:10}),googleStyles=Object(google.useGoogleAvatarStyles)({avatarSize:32,ringSize:40}),avatarStyles=Object(sized.useSizedIconButtonStyles)({padding:4,childSize:32});return Object(jsx_runtime.jsxs)(Toolbar.a,{className:styles.toolbar,children:[Object(jsx_runtime.jsxs)(Box.a,{width:238,display:"flex",alignItems:"center",children:[react_default.a.cloneElement(collapse,{className:styles.collapse}),Object(jsx_runtime.jsx)("img",{className:styles.logo,alt:"",src:"https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x.png"})]}),Object(jsx_runtime.jsx)(InputBase.c,{className:styles.searchInput,placeholder:"Search mail",startAdornment:Object(jsx_runtime.jsx)(IconButton.a,{className:gutterStyles.adjacent,classes:actionStyles,children:Object(jsx_runtime.jsx)(Search_default.a,{})}),endAdornment:Object(jsx_runtime.jsx)(IconButton.a,{classes:actionStyles,children:Object(jsx_runtime.jsx)(ArrowDropDown_default.a,{})})}),Object(jsx_runtime.jsxs)(Box.a,{ml:"auto",className:tinyGutterStyles.parent,children:[Object(jsx_runtime.jsx)(IconButton.a,{classes:actionStyles,children:Object(jsx_runtime.jsx)(HelpOutline_default.a,{})}),Object(jsx_runtime.jsx)(IconButton.a,{classes:actionStyles,children:Object(jsx_runtime.jsx)(Apps_default.a,{})})]}),Object(jsx_runtime.jsx)(Box.a,{ml:1,mr:-1.5,children:Object(jsx_runtime.jsx)(IconButton.a,{classes:avatarStyles,children:Object(jsx_runtime.jsx)("div",{className:googleStyles.root,children:Object(jsx_runtime.jsx)(Avatar.a,{alt:"",src:"https://lh3.googleusercontent.com/ogw/ADGmqu8IRt2zAKQDEDvqL5Egm51VKCxJm2eb-N8YELr3=s64-c-mo"})})})})]})};AppHeader_AppHeader.displayName="AppHeader";var gmail_AppHeader=AppHeader_AppHeader;try{AppHeader_AppHeader.displayName="AppHeader",AppHeader_AppHeader.__docgenInfo={description:"",displayName:"AppHeader",props:{collapse:{defaultValue:null,description:"",name:"collapse",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/mockup/gmail/AppHeader.tsx#AppHeader"]={docgenInfo:AppHeader_AppHeader.__docgenInfo,name:"AppHeader",path:"stories/mockup/gmail/AppHeader.tsx#AppHeader"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__(4);var styled_base_browser_esm=__webpack_require__(267),List=__webpack_require__(1373),Divider=__webpack_require__(1424),Inbox=__webpack_require__(1479),Inbox_default=__webpack_require__.n(Inbox),Star=__webpack_require__(1453),Star_default=__webpack_require__.n(Star),InsertDriveFile=__webpack_require__(1558),InsertDriveFile_default=__webpack_require__.n(InsertDriveFile),People=__webpack_require__(1454),People_default=__webpack_require__.n(People),Info=__webpack_require__(1441),Info_default=__webpack_require__.n(Info),KeyboardArrowDown=__webpack_require__(1425),KeyboardArrowDown_default=__webpack_require__.n(KeyboardArrowDown),KeyboardArrowUp=__webpack_require__(1477),KeyboardArrowUp_default=__webpack_require__.n(KeyboardArrowUp),ModeComment=__webpack_require__(1559),ModeComment_default=__webpack_require__.n(ModeComment),Schedule=__webpack_require__(1480),Schedule_default=__webpack_require__.n(Schedule),Mail=__webpack_require__(1560),Mail_default=__webpack_require__.n(Mail),Report=__webpack_require__(1561),Report_default=__webpack_require__.n(Report),Settings=__webpack_require__(1455),Settings_default=__webpack_require__.n(Settings),Videocam=__webpack_require__(1450),Videocam_default=__webpack_require__.n(Videocam),Keyboard=__webpack_require__(1481),Keyboard_default=__webpack_require__.n(Keyboard),gmail=__webpack_require__(1538),gmail_default=__webpack_require__.n(gmail),sidebarItem_gmail=__webpack_require__(1540),sidebarItem_gmail_default=__webpack_require__.n(sidebarItem_gmail),collapsible=__webpack_require__(1543),collapsible_default=__webpack_require__.n(collapsible),EdgeSidebar=__webpack_require__(459),Root=__webpack_require__(55);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var SidebarContent=Object(styled_base_browser_esm.a)("div",{target:"em12c440",label:"SidebarContent"})({name:"1rt4sj7",styles:"min-height:0;flex-grow:1;overflow:auto;"}),AppSidebar_AppSidebar=function AppSidebar(){var _state$leftEdgeSideba,_React$useState2=_slicedToArray(react_default.a.useState(0),2),index=_React$useState2[0],setIndex=_React$useState2[1],expanded=Object(EdgeSidebar.c)().expanded,state=Object(Root.b)().state,collapsed=!expanded&&(null===(_state$leftEdgeSideba=state.leftEdgeSidebar)||void 0===_state$leftEdgeSideba?void 0:_state$leftEdgeSideba.collapsed),commonProps=function commonProps(i){return{collapsed:collapsed,selected:i===index,onClick:function onClick(){setIndex(i)},dotOnCollapsed:!0}};return Object(jsx_runtime.jsxs)(Box.a,Object.assign({display:"flex",flexGrow:1,flexDirection:"column"},expanded&&{boxShadow:"0 16px 10px 0 rgba(0,0,0,0.34), 0 11px 18px 0 rgba(0,0,0,0.12), 0 13px 5px -1px rgba(0,0,0,0.2)"},{children:[Object(jsx_runtime.jsx)(Box.a,{mt:2,mb:collapsed?1:2,pl:1,children:Object(jsx_runtime.jsx)(gmail_default.a,{collapsed:collapsed})}),Object(jsx_runtime.jsx)(SidebarContent,{children:Object(jsx_runtime.jsx)(Box.a,{maxWidth:240,children:Object(jsx_runtime.jsxs)(List.a,{children:[Object(jsx_runtime.jsx)(sidebarItem_gmail_default.a,Object.assign({color:"#da3125",startIcon:Object(jsx_runtime.jsx)(Inbox_default.a,{}),label:"Inbox",amount:"1,198"},commonProps(0),{dotOnCollapsed:!1})),Object(jsx_runtime.jsx)(sidebarItem_gmail_default.a,Object.assign({startIcon:Object(jsx_runtime.jsx)(Star_default.a,{}),label:"Starred"},commonProps(1))),Object(jsx_runtime.jsx)(sidebarItem_gmail_default.a,Object.assign({startIcon:Object(jsx_runtime.jsx)(InsertDriveFile_default.a,{}),label:Object(jsx_runtime.jsx)("b",{children:"Drafts"}),amount:"5"},commonProps(2))),Object(jsx_runtime.jsx)(sidebarItem_gmail_default.a,Object.assign({color:"#1a73e8",startIcon:Object(jsx_runtime.jsx)(People_default.a,{}),label:Object(jsx_runtime.jsx)("b",{children:"Social"})},commonProps(3))),Object(jsx_runtime.jsx)(sidebarItem_gmail_default.a,Object.assign({color:"#e37400",startIcon:Object(jsx_runtime.jsx)(Info_default.a,{}),label:"Updates"},commonProps(4))),Object(jsx_runtime.jsxs)(collapsible_default.a,{renderToggle:function renderToggle(_ref){var menuCollapsed=_ref.collapsed,onClick=_ref.onClick;return Object(jsx_runtime.jsx)(sidebarItem_gmail_default.a,{startIcon:menuCollapsed?Object(jsx_runtime.jsx)(KeyboardArrowUp_default.a,{}):Object(jsx_runtime.jsx)(KeyboardArrowDown_default.a,{}),label:collapsed?"":menuCollapsed?"Less":"More",onClick:onClick})},children:[Object(jsx_runtime.jsx)(sidebarItem_gmail_default.a,Object.assign({startIcon:Object(jsx_runtime.jsx)(ModeComment_default.a,{}),label:"Chats"},commonProps(5))),Object(jsx_runtime.jsx)(sidebarItem_gmail_default.a,Object.assign({startIcon:Object(jsx_runtime.jsx)(Schedule_default.a,{}),label:"Scheduled"},commonProps(6))),Object(jsx_runtime.jsx)(sidebarItem_gmail_default.a,Object.assign({startIcon:Object(jsx_runtime.jsx)(Mail_default.a,{}),label:"All Mail"},commonProps(7))),Object(jsx_runtime.jsx)(sidebarItem_gmail_default.a,Object.assign({startIcon:Object(jsx_runtime.jsx)(Report_default.a,{}),label:"Spam",amount:"52"},commonProps(8))),Object(jsx_runtime.jsx)(sidebarItem_gmail_default.a,Object.assign({startIcon:Object(jsx_runtime.jsx)(Settings_default.a,{}),label:"Manage Labels"},commonProps(9)))]})]})})}),Object(jsx_runtime.jsx)(Divider.a,{}),Object(jsx_runtime.jsx)(Box.a,{maxWidth:240,pb:3,pt:1.5,children:Object(jsx_runtime.jsxs)(List.a,{subheader:!collapsed&&Object(jsx_runtime.jsxs)(Box.a,{ml:"26px",mr:"12px",mb:1,children:[Object(jsx_runtime.jsx)("b",{children:"Meet"})," ",Object(jsx_runtime.jsx)(Box.a,{ml:.5,display:"inline-flex",px:.5,bgcolor:"#1a73e8",color:"#fff",fontSize:"0.75rem",borderRadius:4,children:"New"})]}),children:[Object(jsx_runtime.jsx)(sidebarItem_gmail_default.a,Object.assign({startIcon:Object(jsx_runtime.jsx)(Videocam_default.a,{}),label:"Start a meeting"},commonProps(10))),Object(jsx_runtime.jsx)(sidebarItem_gmail_default.a,Object.assign({startIcon:Object(jsx_runtime.jsx)(Keyboard_default.a,{}),label:"Join a meeting"},commonProps(11)))]})})]}))};AppSidebar_AppSidebar.displayName="AppSidebar";var gmail_AppSidebar=AppSidebar_AppSidebar,MenuItem=(__webpack_require__(31),__webpack_require__(40)),Checkbox=__webpack_require__(1490),ListItemIcon=__webpack_require__(1484),MoreVert=__webpack_require__(1483),MoreVert_default=__webpack_require__.n(MoreVert),Refresh=__webpack_require__(1579),Refresh_default=__webpack_require__.n(Refresh),KeyboardArrowLeft=__webpack_require__(1427),KeyboardArrowLeft_default=__webpack_require__.n(KeyboardArrowLeft),KeyboardArrowRight=__webpack_require__(1426),KeyboardArrowRight_default=__webpack_require__.n(KeyboardArrowRight),Edit=__webpack_require__(1431),Edit_default=__webpack_require__.n(Edit),LocalOffer=__webpack_require__(1580),LocalOffer_default=__webpack_require__.n(LocalOffer),arrow=__webpack_require__(1562),arrow_default=__webpack_require__.n(arrow),tabs_gmail=__webpack_require__(1564),clsx_m=(__webpack_require__(9),__webpack_require__(25),__webpack_require__(6)),withStyles=__webpack_require__(1448),Tooltip=__webpack_require__(1629),CheckBox=__webpack_require__(1571),CheckBox_default=__webpack_require__.n(CheckBox),CheckBoxOutlineBlank=__webpack_require__(1572),CheckBoxOutlineBlank_default=__webpack_require__.n(CheckBoxOutlineBlank),StarBorder=__webpack_require__(1573),StarBorder_default=__webpack_require__.n(StarBorder),DragIndicator=__webpack_require__(1570),DragIndicator_default=__webpack_require__.n(DragIndicator),LabelOutlined=__webpack_require__(1575),LabelOutlined_default=__webpack_require__.n(LabelOutlined),Drafts=__webpack_require__(1577),Drafts_default=__webpack_require__.n(Drafts),Archive=__webpack_require__(1576),Archive_default=__webpack_require__.n(Archive),Delete=__webpack_require__(1482),Delete_default=__webpack_require__.n(Delete),WatchLater=__webpack_require__(1578),WatchLater_default=__webpack_require__.n(WatchLater),Label=__webpack_require__(1574),Label_default=__webpack_require__.n(Label),grab=__webpack_require__(1568);function MailListItem_slicedToArray(arr,i){return function MailListItem_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function MailListItem_iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function MailListItem_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return MailListItem_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return MailListItem_arrayLikeToArray(o,minLen)}(arr,i)||function MailListItem_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function MailListItem_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var StyledDrag=Object(styled_base_browser_esm.a)(DragIndicator_default.a,{target:"ewx6b980",label:"StyledDrag"})({name:"1f7bdo2",styles:"color:rgba(0,0,0,0.2);align-self:center;"}),StyledTooltip=Object(withStyles.a)({tooltip:{backgroundColor:"rgba(0,0,0,0.72)",fontSize:12,marginTop:0}})(Tooltip.a),Action=Object(styled_base_browser_esm.a)(IconButton.a,{target:"ewx6b981",label:"Action"})({name:"18oqi08",styles:"color:rgba(0,0,0,0.54);&:hover{color:#000;}"}),StyledIconButton=Object(styled_base_browser_esm.a)(IconButton.a,{target:"ewx6b982",label:"StyledIconButton"})({name:"1jx6ogz",styles:"color:rgba(0,0,0,0.2);&:hover{color:rgba(0,0,0,0.87);}&.MailListItem-checked{color:rgba(0,0,0,0.87);}&.MailListItem-starred,&.MailListItem-labeled{color:#f8cb69;}"}),Div=Object(styled_base_browser_esm.a)("div",{target:"ewx6b983",label:"Div"})("height:40px;display:flex;position:relative;align-items:center;box-shadow:inset 0 -1px 0 0 rgba(100,121,143,0.122);&.MailListItem-read{background-color:rgba(242,245,245,0.8);}&:hover{box-shadow:inset 1px 0 0 #dadce0,inset -1px 0 0 #dadce0,0 1px 2px 0 rgba(60,64,67,0.3),0 1px 3px 1px rgba(60,64,67,0.15);z-index:1;",StyledDrag,"{opacity:1;}",StyledIconButton,"{&:not(.MailListItem-checked):not(.starred):not(.MailListItem-labeled){color:rgba(0,0,0,0.54);}}}",StyledDrag,"{opacity:0;transition:0.2s;}"),Text=Object(styled_base_browser_esm.a)("div",{target:"ewx6b984",label:"Text"})({name:"11pyrnr",styles:"-webkit-font-smoothing:antialiased;font-size:14px;color:#5f6368;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;b{color:rgba(0,0,0,0.87);}"}),Title=Object(styled_base_browser_esm.a)(Text,{target:"ewx6b985",label:"Title"})({name:"1cdfvkm",styles:"flex-basis:200px;flex-shrink:0;& > *:not(:first-child){font-size:12px;margin-left:4px;}"}),Description=Object(styled_base_browser_esm.a)(Text,{target:"ewx6b986",label:"Description"})({name:"i9gxme",styles:"flex-grow:1;"}),DateLabel=Object(styled_base_browser_esm.a)(Text,{target:"ewx6b987",label:"DateLabel"})({name:"y8gc52",styles:"font-size:12px;flex-basis:100px;flex-shrink:0;padding-right:16px;text-align:right;"}),MailListItem_MailListItem=function MailListItem(_ref){var read=_ref.read,_ref$initialStarred=_ref.initialStarred,initialStarred=void 0!==_ref$initialStarred&&_ref$initialStarred,_ref$initialLabeled=_ref.initialLabeled,initialLabeled=void 0!==_ref$initialLabeled&&_ref$initialLabeled,title=_ref.title,description=_ref.description,date=_ref.date,actionStyles=Object(sized.useSizedIconButtonStyles)({childSize:20,padding:10}),gutterStyles=Object(row.useRowGutterStyles)({size:-10,before:-8}),grabStyles=Object(grab.useGrabIconStyles)(),_React$useState2=MailListItem_slicedToArray(react_default.a.useState(!1),2),hovered=_React$useState2[0],setHovered=_React$useState2[1],_React$useState4=MailListItem_slicedToArray(react_default.a.useState(!1),2),checked=_React$useState4[0],setChecked=_React$useState4[1],_React$useState6=MailListItem_slicedToArray(react_default.a.useState(initialStarred),2),starred=_React$useState6[0],setStarred=_React$useState6[1],_React$useState8=MailListItem_slicedToArray(react_default.a.useState(initialLabeled),2),labeled=_React$useState8[0],setLabeled=_React$useState8[1];return Object(jsx_runtime.jsxs)(Div,{className:Object(clsx_m.default)(read&&"MailListItem-read"),onMouseOver:function onMouseOver(){return setHovered(!0)},onMouseLeave:function onMouseLeave(){return setHovered(!1)},children:[Object(jsx_runtime.jsx)(StyledDrag,{className:grabStyles.root}),Object(jsx_runtime.jsxs)(Box.a,{flexShrink:0,className:gutterStyles.parent,children:[Object(jsx_runtime.jsx)(StyledIconButton,{className:Object(clsx_m.default)(checked&&"MailListItem-checked"),classes:actionStyles,onClick:function onClick(){return setChecked(!checked)},children:checked?Object(jsx_runtime.jsx)(CheckBox_default.a,{}):Object(jsx_runtime.jsx)(CheckBoxOutlineBlank_default.a,{})}),Object(jsx_runtime.jsx)(StyledIconButton,{className:Object(clsx_m.default)(starred&&"MailListItem-starred"),classes:actionStyles,onClick:function onClick(){return setStarred(!starred)},children:starred?Object(jsx_runtime.jsx)(Star_default.a,{}):Object(jsx_runtime.jsx)(StarBorder_default.a,{})}),Object(jsx_runtime.jsx)(StyledIconButton,{className:Object(clsx_m.default)(labeled&&"MailListItem-labeled"),classes:actionStyles,onClick:function onClick(){return setLabeled(!labeled)},children:labeled?Object(jsx_runtime.jsx)(Label_default.a,{}):Object(jsx_runtime.jsx)(LabelOutlined_default.a,{})})]}),Object(jsx_runtime.jsx)(Title,{children:title}),Object(jsx_runtime.jsx)(Description,{children:description}),hovered?Object(jsx_runtime.jsxs)(Box.a,{flexShrink:0,ml:1,mr:.5,children:[Object(jsx_runtime.jsx)(StyledTooltip,{title:"Archived",children:Object(jsx_runtime.jsx)(Action,{classes:actionStyles,children:Object(jsx_runtime.jsx)(Archive_default.a,{})})}),Object(jsx_runtime.jsx)(StyledTooltip,{title:"Delete",children:Object(jsx_runtime.jsx)(Action,{classes:actionStyles,children:Object(jsx_runtime.jsx)(Delete_default.a,{})})}),Object(jsx_runtime.jsx)(StyledTooltip,{title:"Mark as read",children:Object(jsx_runtime.jsx)(Action,{classes:actionStyles,children:Object(jsx_runtime.jsx)(Drafts_default.a,{})})}),Object(jsx_runtime.jsx)(StyledTooltip,{title:"Snooze",children:Object(jsx_runtime.jsx)(Action,{classes:actionStyles,children:Object(jsx_runtime.jsx)(WatchLater_default.a,{})})})]}):Object(jsx_runtime.jsx)(DateLabel,{children:date})]})};MailListItem_MailListItem.displayName="MailListItem";var gmail_MailListItem=MailListItem_MailListItem;try{MailListItem_MailListItem.displayName="MailListItem",MailListItem_MailListItem.__docgenInfo={description:"",displayName:"MailListItem",props:{read:{defaultValue:null,description:"",name:"read",required:!0,type:{name:"any"}},initialStarred:{defaultValue:{value:!1},description:"",name:"initialStarred",required:!1,type:{name:"boolean"}},initialLabeled:{defaultValue:{value:!1},description:"",name:"initialLabeled",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"any"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"any"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/mockup/gmail/MailListItem.tsx#MailListItem"]={docgenInfo:MailListItem_MailListItem.__docgenInfo,name:"MailListItem",path:"stories/mockup/gmail/MailListItem.tsx#MailListItem"})}catch(__react_docgen_typescript_loader_error){}var Grid=__webpack_require__(58),Typography=__webpack_require__(657),Link=__webpack_require__(1430),useTextStyles=Object(makeStyles.default)({root:{fontSize:12,color:"#666"}}),AppFooter_AppFooter=function AppFooter(){var classes=useTextStyles();return Object(jsx_runtime.jsx)(Box.a,{px:"1rem",my:"1rem",children:Object(jsx_runtime.jsxs)(Grid.a,{container:!0,children:[Object(jsx_runtime.jsxs)(Grid.a,{item:!0,xs:12,sm:4,children:[Object(jsx_runtime.jsx)(Typography.a,{classes:classes,children:"47.43 GB (47%) of 100 GB used"}),Object(jsx_runtime.jsx)(Link.a,{classes:classes,children:"Manage"})]}),Object(jsx_runtime.jsx)(Grid.a,{item:!0,xs:12,sm:4,children:Object(jsx_runtime.jsxs)(Box.a,{textAlign:"center",color:"#666",children:[Object(jsx_runtime.jsx)(Link.a,{classes:classes,children:"Terms"})," •"," ",Object(jsx_runtime.jsx)(Link.a,{classes:classes,children:"Privacy"})," •"," ",Object(jsx_runtime.jsx)(Link.a,{classes:classes,children:"Program Policies"})]})}),Object(jsx_runtime.jsx)(Grid.a,{item:!0,xs:12,sm:4,children:Object(jsx_runtime.jsxs)(Box.a,{textAlign:"right",children:[Object(jsx_runtime.jsx)(Typography.a,{classes:classes,children:"Last account activity: 22 minutes ago"}),Object(jsx_runtime.jsx)(Link.a,{classes:classes,children:"Details"})]})})]})})};AppFooter_AppFooter.displayName="AppFooter";var gmail_AppFooter=AppFooter_AppFooter;function AppContent_slicedToArray(arr,i){return function AppContent_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function AppContent_iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function AppContent_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return AppContent_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return AppContent_arrayLikeToArray(o,minLen)}(arr,i)||function AppContent_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function AppContent_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var AppContent_Toolbar=Object(styled_base_browser_esm.a)("div",{target:"eqrxht70",label:"Toolbar"})({name:"2vcm0i",styles:"height:48px;padding:0 16px;box-shadow:inset 0 -1px 0 0 rgba(100,121,143,0.122);display:flex;align-items:center;"}),ScrollView=Object(styled_base_browser_esm.a)("div",{target:"eqrxht71",label:"ScrollView"})({name:"1a876ef",styles:"height:calc(100vh - (64px + 48px));overflow:scroll;&::-webkit-scrollbar{width:10px;height:10px;}&::-webkit-scrollbar-track{&:hover{background-color:rgba(0,0,0,0.04);box-shadow:inset 1px 0 0 rgba(0,0,0,0.1);}}&::-webkit-scrollbar-button{width:0;height:0;display:none;}&::-webkit-scrollbar-corner{background-color:transparent;}&::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,0.2);box-shadow:inset 1px 1px 0 rgba(0,0,0,0.1),inset 0 -1px 0 rgba(0,0,0,0.07);&:hover{background-color:rgba(0,0,0,0.38);}}"}),AppContent_useStyles=Object(makeStyles.default)((function(){return{root:{fontSize:14,paddingLeft:32,width:160}}})),useCheckboxStyles=Object(makeStyles.default)((function(_ref){return{checked:{color:_ref.palette.text.primary}}})),AppContent_AppContent=function AppContent(_ref2){var onTabIndexChange=_ref2.onTabIndexChange,actionStyles=Object(sized.useSizedIconButtonStyles)({padding:8,childSize:20}),gutterStyles=Object(row.useRowGutterStyles)({size:"0.25rem"}),menuItemClasses=AppContent_useStyles(),checkboxClasses=useCheckboxStyles(),_React$useState2=AppContent_slicedToArray(react_default.a.useState(0),2),index=_React$useState2[0],setIndex=_React$useState2[1];return react_default.a.useEffect((function(){onTabIndexChange(index)}),[index,onTabIndexChange]),Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)(AppContent_Toolbar,{children:[Object(jsx_runtime.jsxs)(Box.a,{display:"inline-flex",className:gutterStyles.parent,children:[Object(jsx_runtime.jsxs)(arrow_default.a,{renderElement:function renderElement(_ref3){var styles=_ref3.styles,onClose=_ref3.onClose;return Object(jsx_runtime.jsx)(Checkbox.a,{classes:checkboxClasses,className:styles.button,color:"default",onChange:onClose})},children:[Object(jsx_runtime.jsx)(MenuItem.a,{classes:menuItemClasses,children:"All"}),Object(jsx_runtime.jsx)(MenuItem.a,{classes:menuItemClasses,children:"None"}),Object(jsx_runtime.jsx)(MenuItem.a,{classes:menuItemClasses,children:"Read"}),Object(jsx_runtime.jsx)(MenuItem.a,{classes:menuItemClasses,children:"Unread"})]}),Object(jsx_runtime.jsx)(IconButton.a,{classes:actionStyles,children:Object(jsx_runtime.jsx)(Refresh_default.a,{})}),Object(jsx_runtime.jsx)(IconButton.a,{classes:actionStyles,children:Object(jsx_runtime.jsx)(MoreVert_default.a,{})})]}),Object(jsx_runtime.jsxs)(Box.a,{display:"inline-flex",alignItems:"center",ml:"auto",className:gutterStyles.parent,children:[Object(jsx_runtime.jsx)(Box.a,{fontSize:12,color:"text.secondary",children:"1-50 of 1,971"}),Object(jsx_runtime.jsx)(IconButton.a,{disabled:!0,classes:actionStyles,children:Object(jsx_runtime.jsx)(KeyboardArrowLeft_default.a,{})}),Object(jsx_runtime.jsx)(IconButton.a,{classes:actionStyles,children:Object(jsx_runtime.jsx)(KeyboardArrowRight_default.a,{})}),Object(jsx_runtime.jsx)(arrow_default.a,{renderElement:function renderElement(_ref4){var styles=_ref4.styles,onClose=_ref4.onClose;return Object(jsx_runtime.jsx)(IconButton.a,{className:styles.button,color:"default",onChange:onClose,children:Object(jsx_runtime.jsx)(Keyboard_default.a,{})})},children:Object(jsx_runtime.jsxs)(MenuItem.a,{classes:menuItemClasses,children:[Object(jsx_runtime.jsx)(ListItemIcon.a,{style:{minWidth:32},children:Object(jsx_runtime.jsx)(Edit_default.a,{fontSize:"small"})}),"English"]})}),Object(jsx_runtime.jsx)(IconButton.a,{classes:actionStyles,children:Object(jsx_runtime.jsx)(Settings_default.a,{})})]})]}),Object(jsx_runtime.jsxs)(ScrollView,{children:[Object(jsx_runtime.jsxs)(tabs_gmail.GmailTabs,{value:index,onChange:function onChange(_,value){return setIndex(value)},children:[Object(jsx_runtime.jsx)(tabs_gmail.GmailTabItem,{icon:Object(jsx_runtime.jsx)(Inbox_default.a,{}),label:"Primary"}),Object(jsx_runtime.jsx)(tabs_gmail.GmailTabItem,{icon:Object(jsx_runtime.jsx)(People_default.a,{}),label:"Social",tag:"2 new",subLabel:"Youtube, LinkedIn"}),Object(jsx_runtime.jsx)(tabs_gmail.GmailTabItem,{icon:Object(jsx_runtime.jsx)(LocalOffer_default.a,{}),label:"Promotions",subLabel:"Pattern Matching, Medium Daily"}),Object(jsx_runtime.jsx)(tabs_gmail.GmailTabItem,{icon:Object(jsx_runtime.jsx)(Info_default.a,{}),label:"Updates",tag:"15 new"})]}),AppContent_getMailList().map((function(mail,i){return Object(jsx_runtime.jsx)(gmail_MailListItem,Object.assign({},mail),i)})),Object(jsx_runtime.jsx)(gmail_AppFooter,{})]})]})},AppContent_getMailList=function getMailList(){return[{starred:!0,labeled:!0,title:Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("b",{children:"Grab"}),Object(jsx_runtime.jsx)("span",{children:"3"})]}),description:Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("b",{children:"Your Grab E-Receipt"})," - ทานอาหารให้อร่อย! รวม THB 220 วันที่ | เวลา 21 May 20 08:39 +0700 รายละเอียดการเดินทาง GrabFood ชื่อผู้ขับ (GFH)xxx ชื่อผู้เดินทาง xxx รหัสการจอง IOS-91396443-9-056 สถานที่"]}),date:Object(jsx_runtime.jsx)("b",{children:"May 21"})},{labeled:!0,read:!0,title:Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("span",{children:"Kunwar, me"}),Object(jsx_runtime.jsx)("span",{children:"8"})]}),description:"MUI Treasury - A Quick Question and Thank you :)",date:"May 21"},{labeled:!0,read:!0,title:"Google",description:"Security alert - iMovie was granted access to your Google Account xxx If you did not grant access, you should check this activity and secure your account. Check activity You received this email to",date:"May 20"},{labeled:!0,read:!0,title:"Alexandre Teyar",description:"[siriwatknp/mui-treasury] New component suggestion -> InsetHeader (#817)",date:"May 18"},{read:!0,title:"Google",description:"2-Step Verification turned on - 2-Step Verification turned on xxx Your Google Account xxx is now protected with 2-Step Verification. When you sign in on a new or untrusted device, you",date:"May 20"},{read:!0,labeled:!0,title:"Olivier Tassinari",description:"Re: [mui-org/material-ui] [docs] Improve mui-treasury integration (#21054)",date:"May 16"},{read:!0,labeled:!0,title:Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("span",{children:"Olivier Tassinari"}),Object(jsx_runtime.jsx)("span",{children:"2"})]}),description:"Re: [mui-org/material-ui] [docs] Improve mui-treasury integration (#21054)",date:"May 16"},{read:!0,labeled:!0,title:"Sebastian Silbermann",description:"Re: [mui-org/material-ui] [docs] update links to mui-treasury (#21054)",date:"May 16"},{labeled:!0,title:Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)("span",{children:["James, me, ",Object(jsx_runtime.jsx)("b",{children:"James"})]}),Object(jsx_runtime.jsx)("span",{children:"3"})]}),description:Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("b",{children:"Hello Jun!"})," - Ok, so I am building a career discovery platform. The user should be able to register or sign in, then explore an interactive career path tool, ask questions or"]}),date:Object(jsx_runtime.jsx)("b",{children:"May 15"})},{read:!0,labeled:!0,title:"Alexandre Teyar",description:"[siriwatknp/mui-treasury] [Discussion] Nested menu (#798)",date:"May 14"},{read:!0,labeled:!0,title:"Aaron Hayes",description:"[siriwatknp/mui-treasury] [Discussion] Form Components  (#792)",date:"May 14"},{read:!0,labeled:!0,title:Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("span",{children:"Olivier Tassinari"}),Object(jsx_runtime.jsx)("span",{children:"6"})]}),description:"[mui-org/material-ui] [core] Batch small changes (#20877)",date:"May 4"},{read:!0,labeled:!0,title:"webface",description:"Re: [siriwatknp/mui-treasury] Overlay does not appear in mobile breakpoint other than with a preset config (#686)",date:"May 3"},{read:!0,label:!0,title:"Alexandre Teyar",description:"Re: [siriwatknp/mui-treasury] Header default config not working (#714)",date:"May 3"},{read:!0,labeled:!0,title:"Siriwat",description:"Re: [siriwatknp/mui-treasury] Overlay does not appear in mobile breakpoint other than with a preset config (#686)",date:"Apr 29"},{read:!0,label:!0,title:"Mine",description:"Re: [siriwatknp/mui-treasury] Header default config not working (#714)",date:"Apr 29"},{labeled:!0,title:"webface",description:"Re: [siriwatknp/mui-treasury] Overlay does not appear in mobile breakpoint other than with a preset config (#686)",date:"Apr 28"},{read:!0,label:!0,title:"Alexandre Teyar",description:"Re: [siriwatknp/mui-treasury] Header default config not working (#714)",date:"Apr 22"},{title:Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("b",{children:"allcontributors[bot]"}),Object(jsx_runtime.jsx)("span",{children:"2"})]}),description:Object(jsx_runtime.jsx)("b",{children:"[siriwatknp/mui-treasury] docs: add pacurtin as a contributor (#678)"}),date:"Apr 22"},{title:Object(jsx_runtime.jsx)("b",{children:"allcontributors[bot]"}),description:Object(jsx_runtime.jsx)("b",{children:"[siriwatknp/mui-treasury] docs: add aress31 as a contributor (#679)"}),date:"Apr 22"},{read:!0,label:!0,title:"Alice Wonder",description:"Lead / Senior Engineers For Bangkok",date:"Apr 21"},{read:!0,labeled:!0,title:"webface",description:"Re: [siriwatknp/mui-treasury] Overlay does not appear in mobile breakpoint other than with a preset config (#686)",date:"Mar 30"},{read:!0,label:!0,title:"Alexandre Teyar",description:"Re: [siriwatknp/mui-treasury] Header default config not working (#714)",date:"Mar 27"}]},gmail_AppContent=AppContent_AppContent;try{AppContent_AppContent.displayName="AppContent",AppContent_AppContent.__docgenInfo={description:"",displayName:"AppContent",props:{onTabIndexChange:{defaultValue:null,description:"",name:"onTabIndexChange",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/mockup/gmail/AppContent.tsx#AppContent"]={docgenInfo:AppContent_AppContent.__docgenInfo,name:"AppContent",path:"stories/mockup/gmail/AppContent.tsx#AppContent"})}catch(__react_docgen_typescript_loader_error){}var Add=__webpack_require__(86),Add_default=__webpack_require__.n(Add),AppSubSidebar_AppSubSidebar=function AppSubSidebar(){var actionStyles=Object(sized.useSizedIconButtonStyles)({childSize:20,padding:10});return Object(jsx_runtime.jsx)(Box.a,{p:1,children:Object(jsx_runtime.jsxs)(Grid.a,{container:!0,spacing:2,children:[Object(jsx_runtime.jsx)(Grid.a,{item:!0,children:Object(jsx_runtime.jsx)(IconButton.a,{classes:actionStyles,children:Object(jsx_runtime.jsx)(Avatar.a,{src:"https://www.gstatic.com/companion/icon_assets/calendar_2x.png"})})}),Object(jsx_runtime.jsx)(Grid.a,{item:!0,children:Object(jsx_runtime.jsx)(IconButton.a,{classes:actionStyles,children:Object(jsx_runtime.jsx)(Avatar.a,{src:"https://www.gstatic.com/companion/icon_assets/keep_2x.png"})})}),Object(jsx_runtime.jsx)(Grid.a,{item:!0,children:Object(jsx_runtime.jsx)(IconButton.a,{classes:actionStyles,children:Object(jsx_runtime.jsx)(Avatar.a,{src:"https://www.gstatic.com/companion/icon_assets/tasks2_2x.png"})})}),Object(jsx_runtime.jsx)(Box.a,{borderTop:"1px solid #dadce0",my:2,mx:"auto",width:20}),Object(jsx_runtime.jsx)(Grid.a,{item:!0,children:Object(jsx_runtime.jsx)(IconButton.a,{classes:actionStyles,children:Object(jsx_runtime.jsx)(Add_default.a,{})})})]})})};AppSubSidebar_AppSubSidebar.displayName="AppSubSidebar";var gmail_AppSubSidebar=AppSubSidebar_AppSubSidebar;var CustomTrigger_StyledIconButton=Object(styled_base_browser_esm.a)(IconButton.a,{target:"e1pzkmod0",label:"StyledIconButton"})({name:"ex3s1e",styles:"position:fixed;z-index:1300;right:8px;bottom:0.5rem;padding:10px;svg{transition:0.3s;}&.CustomTrigger-closed{transition:0.3s;box-shadow:0 1px 1px 0 rgba(60,64,67,0.3),0 1px 3px 1px rgba(60,64,67,0.15);border-radius:40px;border-top-right-radius:0;border-bottom-right-radius:0;right:-10px;background-color:#fff;&:hover{background-color:#f1f3f4;right:0;padding-right:18px;svg{margin-left:0;}}svg{transform:rotate(180deg);margin-left:-6px;}}"}),CustomTrigger_CustomTrigger=function CustomTrigger(){var _state$rightEdgeSideb,_useLayoutCtx=Object(Root.b)(),state=_useLayoutCtx.state,toggleRightSidebarOpen=_useLayoutCtx.toggleRightSidebarOpen;return Object(jsx_runtime.jsx)(CustomTrigger_StyledIconButton,{className:Object(clsx_m.default)(!(null!==(_state$rightEdgeSideb=state.rightEdgeSidebar)&&void 0!==_state$rightEdgeSideb&&_state$rightEdgeSideb.open)&&"CustomTrigger-closed"),onClick:toggleRightSidebarOpen,children:Object(jsx_runtime.jsx)(KeyboardArrowRight_default.a,{fontSize:"small"})})};CustomTrigger_CustomTrigger.displayName="CustomTrigger";var gmail_CustomTrigger=CustomTrigger_CustomTrigger,Header=__webpack_require__(462),EdgeTrigger=__webpack_require__(654),Content=__webpack_require__(1346),theme=Object(createMuiTheme.default)({palette:{background:{default:"#fff"}}}),useDrawerStyles=Object(makeStyles.default)((function(){return{paper:{border:"none",overflow:"visible"}}})),Gmail_Gmail=function Gmail(){var drawerStyles=useDrawerStyles();return Object(jsx_runtime.jsxs)(ThemeProvider.a,{theme:theme,children:[Object(jsx_runtime.jsx)(CssBaseline.a,{}),Object(jsx_runtime.jsxs)(Root.a,{initialState:{leftEdgeSidebar:{collapsed:!0},rightEdgeSidebar:{open:!0}},scheme:{header:{config:{xs:{position:"fixed",clipped:!0,height:64}}},leftEdgeSidebar:{config:{xs:{variant:"permanent",width:256,collapsible:!0,collapsedWidth:72,uncollapsedOnHover:!0}}},rightEdgeSidebar:{config:{sm:{variant:"persistent",width:56,persistentBehavior:"fit"}},hidden:["md"]}},children:[Object(jsx_runtime.jsx)(Header.a,{children:Object(jsx_runtime.jsx)(gmail_AppHeader,{collapse:Object(jsx_runtime.jsx)(EdgeTrigger.a,{target:{anchor:"left",field:"collapsed"},children:function children(collapsed,setCollapsed){return Object(jsx_runtime.jsx)(IconButton.a,{onClick:function onClick(){return setCollapsed(!collapsed)},children:Object(jsx_runtime.jsx)(Menu_default.a,{})})}})})}),Object(jsx_runtime.jsx)(EdgeSidebar.a,{anchor:"left",classes:drawerStyles,children:Object(jsx_runtime.jsx)(gmail_AppSidebar,{})}),Object(jsx_runtime.jsx)(EdgeSidebar.a,{anchor:"right",children:Object(jsx_runtime.jsx)(gmail_AppSubSidebar,{})}),Object(jsx_runtime.jsx)(Content.a,{children:Object(jsx_runtime.jsx)(gmail_AppContent,{onTabIndexChange:function onTabIndexChange(){}})}),Object(jsx_runtime.jsx)(gmail_CustomTrigger,{})]})]})};Gmail_Gmail.displayName="Gmail";__webpack_exports__.default=Gmail_Gmail}}]);
//# sourceMappingURL=16.76924c76ac4fb572d50c.bundle.js.map