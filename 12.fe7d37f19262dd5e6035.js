(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{PtRF:function(t,e,i){"use strict";i.r(e),i.d(e,"CarModule",function(){return E});var o=i("Xa2L"),n=i("/1cH"),a=i("iadO"),r=i("1jcm"),l=i("d3UM"),s=i("NFeN"),c=i("qFsG"),d=i("kmnG"),b=i("0IaG"),u=i("V5BG"),p=i("Q4Mo"),m=i("jIHw"),f=i("7kUa"),g=i("3Pt+"),h=i("rEr+"),v=i("PCNd"),y=i("ofXK"),k=i("mrSG"),C=i("7+5H"),V=i("12jx"),w=i("4ZtF"),W=i("nnAt"),D=i("fXoL"),M=i("otk6"),_=i("H0VJ"),x=i("xivw"),I=i("FKr1");function S(t,e){if(1&t&&(D.Wb(0,"mat-error",8),D.Qc(1),D.Vb()),2&t){const t=D.hc();D.Cb(1),D.Rc(t.displayMessage.plateNo)}}function O(t,e){if(1&t&&(D.Wb(0,"mat-option",38),D.Wb(1,"span",39),D.Qc(2),D.Vb(),D.Vb()),2&t){const t=e.$implicit;D.oc("value",t.id),D.Cb(2),D.Rc(t.name)}}function Q(t,e){if(1&t&&(D.Wb(0,"mat-error",8),D.Qc(1),D.Vb()),2&t){const t=D.hc();D.Cb(1),D.Sc("",t.displayMessage.advance_KM," ")}}function N(t,e){if(1&t&&(D.Wb(0,"mat-error",8),D.Qc(1),D.Vb()),2&t){const t=D.hc();D.Cb(1),D.Sc("",t.displayMessage.km_in_liter," ")}}function j(t,e){if(1&t&&(D.Wb(0,"mat-error",8),D.Qc(1),D.Vb()),2&t){const t=D.hc();D.Cb(1),D.Sc("",t.displayMessage.km_on_joining," ")}}function B(t,e){if(1&t&&(D.Wb(0,"mat-error",8),D.Qc(1),D.Vb()),2&t){const t=D.hc();D.Cb(1),D.Rc(t.displayMessage.brand)}}function P(t,e){if(1&t&&(D.Wb(0,"mat-error",8),D.Qc(1),D.Vb()),2&t){const t=D.hc();D.Cb(1),D.Rc(t.displayMessage.model)}}function K(t,e){if(1&t&&(D.Wb(0,"mat-error",8),D.Qc(1),D.Vb()),2&t){const t=D.hc();D.Cb(1),D.Rc(t.displayMessage.company)}}const q=function(){return{standalone:!0}};let R=(()=>{class t{constructor(t,e,i,o){var n,a,r,l,s,c,d,b,u,p,m,f,h,v,y,k,C,V,M,_;this.fb=t,this.fun=e,this.dialogServices=i,this.config=o,this.formSubmit=new D.o,this.formClose=new D.o,this.drivers=[],this.columns=["name","label","type","required"],this.actions=[{icon:"pencil",color:"warning",disable:!1},{icon:"trash",color:"danger"}],this.isPublished=!0,this.dialogConfig={width:"500px"},this.displayMessage={},this.image=Object(w.k)(null===(n=this.config.formData)||void 0===n?void 0:n.image)?null===(a=this.config.formData)||void 0===a?void 0:a.image:Object(w.p)(null===(r=this.config.formData)||void 0===r?void 0:r.image)?[null===(l=this.config.formData)||void 0===l?void 0:l.image]:Object(w.q)(null===(s=this.config.formData)||void 0===s?void 0:s.image)?[null===(c=this.config.formData)||void 0===c?void 0:c.image]:[],null===(d=this.config.lookupData)||void 0===d||d.drivers.subscribe(t=>{this.drivers=this.fun.extractData(t)}),this.isPublished=void 0===(null===(b=this.config.formData)||void 0===b?void 0:b.status)||(null===(u=this.config.formData)||void 0===u?void 0:u.status),this.form=this.fb.group({id:null===(p=this.config.formData)||void 0===p?void 0:p.id,plateNo:[null===(m=this.config.formData)||void 0===m?void 0:m.plateNo,g.x.required],driverID:[null===(f=this.config.formData)||void 0===f?void 0:f.driverID,g.x.required],advance_KM:[null===(h=this.config.formData)||void 0===h?void 0:h.advance_KM,g.x.required],image:this.image,km_in_liter:null===(v=this.config.formData)||void 0===v?void 0:v.km_in_liter,km_on_joining:null===(y=this.config.formData)||void 0===y?void 0:y.km_on_joining,brand:null===(k=this.config.formData)||void 0===k?void 0:k.brand,model:null===(C=this.config.formData)||void 0===C?void 0:C.model,company:null===(V=this.config.formData)||void 0===V?void 0:V.company,status:[this.isPublished,g.x.required],details:[null===(M=this.config.formData)||void 0===M?void 0:M.details],created_at:null===(_=this.config.formData)||void 0===_?void 0:_.created_at}),this.validationMessages={plateNo:{required:"field is required.",found:"car already registered"},advance_KM:{required:"field is required."},driverID:{required:"field is required."}},this.genericValidator=new W.a(this.validationMessages)}ngOnInit(){this.form.valueChanges.subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.form))}blur(){this.displayMessage=this.genericValidator.processMessages(this.form)}keyDown(t,e){return t.key?this.fun.allowedKey(t.key,e):(t.target.value=this.fun.removeNotAllowedKey(t.target.value,e),!0)}setValidation(t=null){this.form.controls.plateNo.setErrors({found:!0}),this.displayMessage=this.genericValidator.processMessages(this.form)}getFile(t){this.form.controls.image.setValue((null==t?void 0:t.upload.length)>0?null==t?void 0:t.upload:[])}onSubmit(){var t,e;const i=this.form.value,o=null===(t=this.drivers)||void 0===t?void 0:t.filter(t=>t.id===i.driverID)[0],n=Object.assign(Object.assign({},i),{driverName:null===(e=null==o?void 0:o.name)||void 0===e?void 0:e.split(" ")[0],status:this.isPublished});this.formSubmit.emit(n)}onCancel(){this.formClose.emit()}}return t.\u0275fac=function(e){return new(e||t)(D.Qb(g.e),D.Qb(M.a),D.Qb(_.a),D.Qb(b.a))},t.\u0275cmp=D.Kb({type:t,selectors:[["app-car-form"]],outputs:{formSubmit:"formSubmit",formClose:"formClose"},decls:91,vars:16,consts:[["autocomplete","off",3,"formGroup","submit"],["mat-dialog-title","",1,"p-dialog-header","p-d-flex","p-jc-lg-between",2,"padding","0.2re 0.3rem"],[1,"p-dialog-title","capitalize"],["pButton","","pRipple","","icon","pi pi-times",1,"shadow-none","p-button-rounded","p-button-plain","p-button-text","p-mr-1",3,"click"],["mat-dialog-content","",1,"p-dialog-content"],[1,"p-grid"],[1,"p-col-12","p-md-6"],[1,"full-width"],[1,"error"],["matInput","","tabindex","0","type","text","value","","formControlName","plateNo",3,"blur","input","keydown"],["plateNo",""],["class","error",4,"ngIf"],["placeholder","choose driver","formControlName","driverID"],[3,"value",4,"ngFor","ngForOf"],["matInput","","tabindex","0","type","text","value","","formControlName","advance_KM",3,"blur","input","keydown"],["advance_KM",""],["matInput","","tabindex","0","type","text","value","","formControlName","km_in_liter",3,"blur","input","keydown"],["km_in_liter",""],["matInput","","tabindex","0","type","text","value","","formControlName","km_on_joining",3,"blur","input","keydown"],["km_on_joining",""],["matInput","","tabindex","0","type","text","value","","formControlName","brand",3,"blur","input","keydown"],["brand",""],["matInput","","tabindex","0","type","text","value","","formControlName","model",3,"blur","input","keydown"],["model",""],["matInput","","tabindex","0","type","text","value","","formControlName","company",3,"blur","input","keydown"],["company",""],[1,"p-col-12"],["matInput","","type","text","rows","2","formControlName","details","value","",3,"input","keydown"],[3,"uploadedFile","limit","fileDropped"],["fileImage",""],["color","primary","forControlName","status",1,"example-section",3,"ngModel","ngModelOptions","ngModelChange"],["mat-dialog-actions","",1,"p-dialog-footer","button-row"],["pbutton","","pripple","","label","Cancel","type","button","icon","pi pi-times",1,"p-button-text","p-ripple","p-button","p-component","shadow-none","p-mr-2",3,"click"],["aria-hidden","true",1,"p-button-icon","p-button-icon-left","pi","pi-times"],[1,"p-button-label"],[1,"p-ink"],["pbutton","","pripple","","label","Save","icon","pi pi-check","type","submit",1,"p-button-text","p-ripple","p-button","p-component","shadow-none",3,"disabled"],["aria-hidden","true",1,"p-button-icon","p-button-icon-left","pi","pi-check"],[3,"value"],[1,"capitalize"]],template:function(t,e){1&t&&(D.Wb(0,"form",0),D.ec("submit",function(){return e.onSubmit()}),D.Wb(1,"div",1),D.Wb(2,"div",2),D.Qc(3),D.Vb(),D.Wb(4,"button",3),D.ec("click",function(){return e.onCancel()}),D.Vb(),D.Vb(),D.Wb(5,"div",4),D.Wb(6,"div",5),D.Wb(7,"div",6),D.Wb(8,"mat-form-field",7),D.Wb(9,"mat-label"),D.Qc(10,"Plate No"),D.Wb(11,"span",8),D.Qc(12,"*"),D.Vb(),D.Vb(),D.Wb(13,"input",9,10),D.ec("blur",function(){return e.blur()})("input",function(t){return e.keyDown(t,"intStr")})("keydown",function(t){return e.keyDown(t,"intStr")}),D.Vb(),D.Oc(15,S,2,1,"mat-error",11),D.Vb(),D.Vb(),D.Wb(16,"div",6),D.Wb(17,"mat-form-field",7),D.Wb(18,"mat-label"),D.Qc(19,"Driver "),D.Wb(20,"span",8),D.Qc(21,"*"),D.Vb(),D.Vb(),D.Wb(22,"mat-select",12),D.Oc(23,O,3,2,"mat-option",13),D.Vb(),D.Vb(),D.Vb(),D.Wb(24,"div",6),D.Wb(25,"mat-form-field",7),D.Wb(26,"mat-label"),D.Qc(27,"Advance KM"),D.Wb(28,"span",8),D.Qc(29,"*"),D.Vb(),D.Vb(),D.Wb(30,"input",14,15),D.ec("blur",function(){return e.blur()})("input",function(t){return e.keyDown(t,"float")})("keydown",function(t){return e.keyDown(t,"float")}),D.Vb(),D.Oc(32,Q,2,1,"mat-error",11),D.Vb(),D.Vb(),D.Wb(33,"div",6),D.Wb(34,"mat-form-field",7),D.Wb(35,"mat-label"),D.Qc(36,"KM In Litter"),D.Vb(),D.Wb(37,"input",16,17),D.ec("blur",function(){return e.blur()})("input",function(t){return e.keyDown(t,"float")})("keydown",function(t){return e.keyDown(t,"float")}),D.Vb(),D.Oc(39,N,2,1,"mat-error",11),D.Vb(),D.Vb(),D.Wb(40,"div",6),D.Wb(41,"mat-form-field",7),D.Wb(42,"mat-label"),D.Qc(43,"KM On Joining"),D.Vb(),D.Wb(44,"input",18,19),D.ec("blur",function(){return e.blur()})("input",function(t){return e.keyDown(t,"float")})("keydown",function(t){return e.keyDown(t,"float")}),D.Vb(),D.Oc(46,j,2,1,"mat-error",11),D.Vb(),D.Vb(),D.Wb(47,"div",6),D.Wb(48,"mat-form-field",7),D.Wb(49,"mat-label"),D.Qc(50,"Brand"),D.Vb(),D.Wb(51,"input",20,21),D.ec("blur",function(){return e.blur()})("input",function(t){return e.keyDown(t,"intStr")})("keydown",function(t){return e.keyDown(t,"intStr")}),D.Vb(),D.Oc(53,B,2,1,"mat-error",11),D.Vb(),D.Vb(),D.Wb(54,"div",6),D.Wb(55,"mat-form-field",7),D.Wb(56,"mat-label"),D.Qc(57,"Model"),D.Vb(),D.Wb(58,"input",22,23),D.ec("blur",function(){return e.blur()})("input",function(t){return e.keyDown(t,"intStr")})("keydown",function(t){return e.keyDown(t,"intStr")}),D.Vb(),D.Oc(60,P,2,1,"mat-error",11),D.Vb(),D.Vb(),D.Wb(61,"div",6),D.Wb(62,"mat-form-field",7),D.Wb(63,"mat-label"),D.Qc(64,"Company"),D.Vb(),D.Wb(65,"input",24,25),D.ec("blur",function(){return e.blur()})("input",function(t){return e.keyDown(t,"intStr")})("keydown",function(t){return e.keyDown(t,"intStr")}),D.Vb(),D.Oc(67,K,2,1,"mat-error",11),D.Vb(),D.Vb(),D.Wb(68,"div",26),D.Wb(69,"mat-form-field",7),D.Wb(70,"mat-label"),D.Qc(71,"Details"),D.Vb(),D.Wb(72,"textarea",27),D.ec("input",function(t){return e.keyDown(t,"text")})("keydown",function(t){return e.keyDown(t,"text")}),D.Vb(),D.Vb(),D.Vb(),D.Wb(73,"div",26),D.Wb(74,"div",7),D.Wb(75,"app-file-upload-template",28,29),D.ec("fileDropped",function(t){return e.getFile(t)}),D.Vb(),D.Vb(),D.Vb(),D.Wb(77,"mat-slide-toggle",30),D.ec("ngModelChange",function(t){return e.isPublished=t}),D.Wb(78,"span"),D.Qc(79,"Status"),D.Vb(),D.Vb(),D.Vb(),D.Vb(),D.Wb(80,"div",31),D.Wb(81,"button",32),D.ec("click",function(){return e.onCancel()}),D.Rb(82,"span",33),D.Wb(83,"span",34),D.Qc(84,"Cancel"),D.Vb(),D.Rb(85,"span",35),D.Vb(),D.Wb(86,"button",36),D.Rb(87,"span",37),D.Wb(88,"span",34),D.Qc(89,"Save"),D.Vb(),D.Rb(90,"span",35),D.Vb(),D.Vb(),D.Vb()),2&t&&(D.oc("formGroup",e.form),D.Cb(3),D.Rc(e.config.title),D.Cb(12),D.oc("ngIf",e.displayMessage.plateNo),D.Cb(8),D.oc("ngForOf",e.drivers),D.Cb(9),D.oc("ngIf",e.displayMessage.advance_KM),D.Cb(7),D.oc("ngIf",e.displayMessage.km_in_liter),D.Cb(7),D.oc("ngIf",e.displayMessage.km_on_joining),D.Cb(7),D.oc("ngIf",e.displayMessage.brand),D.Cb(7),D.oc("ngIf",e.displayMessage.model),D.Cb(7),D.oc("ngIf",e.displayMessage.company),D.Cb(8),D.oc("uploadedFile",e.image)("limit",10),D.Cb(2),D.oc("ngModel",e.isPublished)("ngModelOptions",D.rc(15,q)),D.Cb(9),D.oc("disabled",!e.form.valid))},directives:[g.y,g.r,g.i,b.g,m.b,p.a,b.e,d.c,d.g,c.b,g.c,g.q,g.g,y.m,l.a,y.l,x.a,r.a,g.t,b.c,d.b,I.h],styles:[".example-section[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;height:60px}.buttons[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:flex-end}"],changeDetection:0}),Object(k.__decorate)([Object(V.a)()],t.prototype,"blockUI",void 0),t})();var F=i("DYbl"),A=i("SRE/"),U=i("sSZD"),G=i("WLRH");let L=(()=>{class t{constructor(t,e,i,o,n){this.carService=t,this.userService=e,this.dialogServices=i,this.db=o,this.fun=n,this.caption="Cars",this.columns=[{label:"Plate No",name:"plateNo",sortable:!0},{label:"Brand",name:"brand",sortable:!0},{label:"Model",name:"model",sortable:!0},{label:"Driver",name:"driverName",type:"link",sortable:!0},{label:"Image",name:"image",type:"image",sortable:!1},{label:"Status",name:"status",type:"status",sortable:!0}],this.actions=[{icon:"pencil",color:"warning",disable:!1},{icon:"trash",color:"danger"},{icon:"th-large",color:""}],this.toolBarActions=[{position:"right",action:[]},{position:"left",action:[{label:"Create",icon:"plus",color:"",tooltip:null}]}],this.dialogConfig={width:"600px",formComponent:R,service:this.carService},this.dialogConfigModal={closable:!0,formComponent:C.a}}ngOnInit(){this.cars$=this.onLoad(),this.users$=this.userService.get("driver").snapshotChanges()}add(){this.dialogConfig.title="New Car",this.dialogConfig.formData="",this.dialogConfig.lookupData={drivers:this.users$},this.dialogServices.handleDialog(this.dialogConfig)}update(t){this.dialogConfig.title="Edit Car Info",this.dialogConfig.formData=t,this.dialogConfig.lookupData={drivers:this.users$},this.dialogServices.handleDialog(this.dialogConfig)}onLoad(){let t;return this.blockUI.start("Loading..."),t=this.carService.get().snapshotChanges(),t.subscribe(t=>{this.blockUI.stop()}),t}onActionClick(t){if("pencil"===t.type)this.update(t.data);else if("trash"===t.type)this.blockUI.start("Deleting..."),this.carService.delete(t.data.id).then(this.blockUI.stop());else if("th-large"===t.type){const e=[t.data].map(t=>{var e=Object(k.__rest)(t,["plateNo","brand","model","driverName","driverID","image","id","status"]);return Object.assign({},e)}),i=Object.keys(e[0]),o=this.fun.getColumns(i);this.showModalTable("Car Info",o,e)}else"link"===t.type&&this.users$.subscribe(e=>{const i=this.fun.extractData(e).filter(e=>{var i;return(null==e?void 0:e.id)===(null===(i=null==t?void 0:t.data)||void 0===i?void 0:i.driverID)}).map(t=>{var{name:e,phone:i,email:o}=t;return Object(k.__rest)(t,["name","phone","email"]),{name:e,phone:i,email:o}});if(i.length>0){const t=Object.keys(i[0]),e=this.fun.getColumns(t);this.showModalTable("Driver Info",e,i)}})}showModalTable(t,e,i,o="1000px"){this.dialogConfigModal.width=o,this.dialogConfigModal.lookupData={caption:t,columns:e,data:i},this.dialogServices.handleDialog(this.dialogConfigModal)}onToolBarActionClick(t){"plus"===t&&this.add()}}return t.\u0275fac=function(e){return new(e||t)(D.Qb(F.a),D.Qb(A.a),D.Qb(_.a),D.Qb(U.a),D.Qb(M.a))},t.\u0275cmp=D.Kb({type:t,selectors:[["app-car"]],decls:2,vars:10,consts:[[3,"caption","columns","data","actions","first","rows","sortBy","toolBarActions","buttonClick","toolBarButtonClick"]],template:function(t,e){1&t&&(D.Wb(0,"app-table-template",0),D.ec("buttonClick",function(t){return e.onActionClick(t)})("toolBarButtonClick",function(t){return e.onToolBarActionClick(t)}),D.ic(1,"async"),D.Vb()),2&t&&D.oc("caption",e.caption)("columns",e.columns)("data",D.jc(1,8,e.cars$))("actions",e.actions)("first",(null==e.currentPage?null:e.currentPage.first)||0)("rows",(null==e.currentPage?null:e.currentPage.rows)||10)("sortBy",e.sortBy)("toolBarActions",e.toolBarActions)},directives:[G.a],pipes:[y.b],styles:[""]}),Object(k.__decorate)([Object(V.a)()],t.prototype,"blockUI",void 0),t})();var $=i("tyNb");const T=[{path:"",component:L},{path:"**",redirectTo:""}];let H=(()=>{class t{}return t.\u0275mod=D.Ob({type:t}),t.\u0275inj=D.Nb({factory:function(e){return new(e||t)},imports:[[$.e.forChild(T)],$.e]}),t})(),E=(()=>{class t{}return t.\u0275mod=D.Ob({type:t}),t.\u0275inj=D.Nb({factory:function(e){return new(e||t)},imports:[[y.c,H,v.a,h.f,g.k,g.v,f.b,m.c,p.b,u.a,b.f,d.e,c.c,s.a,l.b,r.b,a.e,n.a,o.a]]}),t})()}}]);