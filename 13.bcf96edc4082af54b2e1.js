(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{PtRF:function(t,e,i){"use strict";i.r(e),i.d(e,"CarModule",function(){return Y});var o=i("Xa2L"),n=i("/1cH"),a=i("iadO"),l=i("1jcm"),r=i("d3UM"),s=i("NFeN"),c=i("qFsG"),d=i("kmnG"),u=i("0IaG"),p=i("V5BG"),b=i("Q4Mo"),h=i("jIHw"),f=i("7kUa"),g=i("3Pt+"),m=i("rEr+"),v=i("PCNd"),k=i("ofXK"),C=i("mrSG"),I=i("YTlH"),S=i("7+5H"),y=i("12jx"),w=i("4ZtF"),D=i("nnAt"),V=i("fXoL"),M=i("otk6"),A=i("H0VJ"),W=i("xivw"),x=i("FKr1");function O(t,e){if(1&t&&(V.Wb(0,"mat-error",8),V.Qc(1),V.Vb()),2&t){const t=V.hc();V.Cb(1),V.Rc(t.displayMessage.plateNo)}}function E(t,e){if(1&t&&(V.Wb(0,"mat-option",38),V.Wb(1,"span",39),V.Qc(2),V.Vb(),V.Vb()),2&t){const t=e.$implicit,i=V.hc();V.oc("value",t.id)("disabled",i.isTaken(t.id)),V.Cb(2),V.Rc(t.name)}}function F(t,e){if(1&t&&(V.Wb(0,"mat-error",8),V.Qc(1),V.Vb()),2&t){const t=V.hc();V.Cb(1),V.Rc(t.displayMessage.driverID)}}function Q(t,e){if(1&t&&(V.Wb(0,"mat-error",8),V.Qc(1),V.Vb()),2&t){const t=V.hc();V.Cb(1),V.Sc("",t.displayMessage.advance_KM," ")}}function J(t,e){if(1&t&&(V.Wb(0,"mat-error",8),V.Qc(1),V.Vb()),2&t){const t=V.hc();V.Cb(1),V.Sc("",t.displayMessage.km_in_liter," ")}}function _(t,e){if(1&t&&(V.Wb(0,"mat-error",8),V.Qc(1),V.Vb()),2&t){const t=V.hc();V.Cb(1),V.Sc("",t.displayMessage.km_on_joining," ")}}function R(t,e){if(1&t&&(V.Wb(0,"mat-error",8),V.Qc(1),V.Vb()),2&t){const t=V.hc();V.Cb(1),V.Rc(t.displayMessage.brand)}}function B(t,e){if(1&t&&(V.Wb(0,"mat-error",8),V.Qc(1),V.Vb()),2&t){const t=V.hc();V.Cb(1),V.Rc(t.displayMessage.model)}}function T(t,e){if(1&t&&(V.Wb(0,"mat-error",8),V.Qc(1),V.Vb()),2&t){const t=V.hc();V.Cb(1),V.Rc(t.displayMessage.company)}}const P=function(){return{standalone:!0}};let N=(()=>{class t{constructor(t,e,i,o){var n,a,l,r,s,c,d,u,p,b,h,f,m,v,k,C,I,S,y,M,A;this.fb=t,this.fun=e,this.dialogServices=i,this.config=o,this.formSubmit=new V.o,this.formClose=new V.o,this.drivers=[],this.taken=[],this.columns=["name","label","type","required"],this.actions=[{icon:"pencil",color:"warning",disable:!1},{icon:"trash",color:"danger"}],this.isPublished=!0,this.dialogConfig={width:"500px"},this.displayMessage={},this.image=Object(w.k)(null===(n=this.config.formData)||void 0===n?void 0:n.image)?null===(a=this.config.formData)||void 0===a?void 0:a.image:Object(w.p)(null===(l=this.config.formData)||void 0===l?void 0:l.image)?[null===(r=this.config.formData)||void 0===r?void 0:r.image]:Object(w.q)(null===(s=this.config.formData)||void 0===s?void 0:s.image)?[null===(c=this.config.formData)||void 0===c?void 0:c.image]:[],null===(d=this.config.lookupData)||void 0===d||d.drivers.subscribe(t=>{this.drivers=this.fun.extractData(t)}),this.taken=null===(u=this.config.lookupData)||void 0===u?void 0:u.taken,this.isPublished=void 0===(null===(p=this.config.formData)||void 0===p?void 0:p.status)||(null===(b=this.config.formData)||void 0===b?void 0:b.status),this.form=this.fb.group({id:null===(h=this.config.formData)||void 0===h?void 0:h.id,plateNo:[null===(f=this.config.formData)||void 0===f?void 0:f.plateNo,g.x.required],driverID:[null===(m=this.config.formData)||void 0===m?void 0:m.driverID,g.x.required],advance_KM:[null===(v=this.config.formData)||void 0===v?void 0:v.advance_KM,g.x.required],image:this.image,km_in_liter:null===(k=this.config.formData)||void 0===k?void 0:k.km_in_liter,km_on_joining:null===(C=this.config.formData)||void 0===C?void 0:C.km_on_joining,brand:null===(I=this.config.formData)||void 0===I?void 0:I.brand,model:null===(S=this.config.formData)||void 0===S?void 0:S.model,company:null===(y=this.config.formData)||void 0===y?void 0:y.company,status:[this.isPublished,g.x.required],details:[null===(M=this.config.formData)||void 0===M?void 0:M.details],created_at:null===(A=this.config.formData)||void 0===A?void 0:A.created_at}),this.validationMessages={plateNo:{required:"field is required.",found:"car already registered"},advance_KM:{required:"field is required."},driverID:{required:"field is required."}},this.genericValidator=new D.a(this.validationMessages)}ngOnInit(){this.form.valueChanges.subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.form))}blur(){this.displayMessage=this.genericValidator.processMessages(this.form)}keyDown(t,e){return t.key?this.fun.allowedKey(t.key,e):(t.target.value=this.fun.removeNotAllowedKey(t.target.value,e),!0)}isTaken(t){var e,i;return(null===(e=this.taken.filter(e=>e.id===t))||void 0===e?void 0:e.length)>0&&(null===(i=this.config.formData)||void 0===i?void 0:i.driverID)!==t}setValidation(t=null){this.form.controls.plateNo.setErrors({found:!0}),this.displayMessage=this.genericValidator.processMessages(this.form)}getFile(t){this.form.controls.image.setValue((null==t?void 0:t.upload.length)>0?null==t?void 0:t.upload:[])}onSubmit(){var t,e;const i=this.form.value,o=null===(t=this.drivers)||void 0===t?void 0:t.filter(t=>t.id===i.driverID)[0],n=Object.assign(Object.assign({},i),{driverName:null===(e=null==o?void 0:o.name)||void 0===e?void 0:e.split(" ")[0],status:this.isPublished});this.formSubmit.emit(n)}onCancel(){this.formClose.emit()}}return t.\u0275fac=function(e){return new(e||t)(V.Qb(g.e),V.Qb(M.a),V.Qb(A.a),V.Qb(u.a))},t.\u0275cmp=V.Kb({type:t,selectors:[["app-car-form"]],outputs:{formSubmit:"formSubmit",formClose:"formClose"},decls:92,vars:17,consts:[["autocomplete","off",3,"formGroup","submit"],["mat-dialog-title","",1,"p-dialog-header","p-d-flex","p-jc-lg-between",2,"padding","0.2re 0.3rem"],[1,"p-dialog-title","capitalize"],["pButton","","pRipple","","icon","pi pi-times",1,"shadow-none","p-button-rounded","p-button-plain","p-button-text","p-mr-1",3,"click"],["mat-dialog-content","",1,"p-dialog-content"],[1,"p-grid"],[1,"p-col-12","p-md-6"],[1,"full-width"],[1,"error"],["matInput","","tabindex","0","type","text","value","","formControlName","plateNo",3,"blur","input","keydown"],["plateNo",""],["class","error",4,"ngIf"],["placeholder","choose driver","formControlName","driverID",3,"closed"],[3,"value","disabled",4,"ngFor","ngForOf"],["matInput","","tabindex","0","type","text","value","","formControlName","advance_KM",3,"blur","input","keydown"],["advance_KM",""],["matInput","","tabindex","0","type","text","value","","formControlName","km_in_liter",3,"blur","input","keydown"],["km_in_liter",""],["matInput","","tabindex","0","type","text","value","","formControlName","km_on_joining",3,"blur","input","keydown"],["km_on_joining",""],["matInput","","tabindex","0","type","text","value","","formControlName","brand",3,"blur","input","keydown"],["brand",""],["matInput","","tabindex","0","type","text","value","","formControlName","model",3,"blur","input","keydown"],["model",""],["matInput","","tabindex","0","type","text","value","","formControlName","company",3,"blur","input","keydown"],["company",""],[1,"p-col-12"],["matInput","","type","text","rows","2","formControlName","details","value","",3,"input","keydown"],[3,"uploadedFile","limit","fileDropped"],["fileImage",""],["color","primary","forControlName","status",1,"example-section",3,"ngModel","ngModelOptions","ngModelChange"],["mat-dialog-actions","",1,"p-dialog-footer","button-row"],["pbutton","","pripple","","label","Cancel","type","button","icon","pi pi-times",1,"p-button-text","p-ripple","p-button","p-component","shadow-none","p-mr-2",3,"click"],["aria-hidden","true",1,"p-button-icon","p-button-icon-left","pi","pi-times"],[1,"p-button-label"],[1,"p-ink"],["pbutton","","pripple","","label","Save","icon","pi pi-check","type","submit",1,"p-button-text","p-ripple","p-button","p-component","shadow-none",3,"disabled"],["aria-hidden","true",1,"p-button-icon","p-button-icon-left","pi","pi-check"],[3,"value","disabled"],[1,"capitalize"]],template:function(t,e){1&t&&(V.Wb(0,"form",0),V.ec("submit",function(){return e.onSubmit()}),V.Wb(1,"div",1),V.Wb(2,"div",2),V.Qc(3),V.Vb(),V.Wb(4,"button",3),V.ec("click",function(){return e.onCancel()}),V.Vb(),V.Vb(),V.Wb(5,"div",4),V.Wb(6,"div",5),V.Wb(7,"div",6),V.Wb(8,"mat-form-field",7),V.Wb(9,"mat-label"),V.Qc(10,"Plate No"),V.Wb(11,"span",8),V.Qc(12,"*"),V.Vb(),V.Vb(),V.Wb(13,"input",9,10),V.ec("blur",function(){return e.blur()})("input",function(t){return e.keyDown(t,"intStr")})("keydown",function(t){return e.keyDown(t,"intStr")}),V.Vb(),V.Oc(15,O,2,1,"mat-error",11),V.Vb(),V.Vb(),V.Wb(16,"div",6),V.Wb(17,"mat-form-field",7),V.Wb(18,"mat-label"),V.Qc(19,"Driver "),V.Wb(20,"span",8),V.Qc(21,"*"),V.Vb(),V.Vb(),V.Wb(22,"mat-select",12),V.ec("closed",function(){return e.blur()}),V.Oc(23,E,3,3,"mat-option",13),V.Vb(),V.Oc(24,F,2,1,"mat-error",11),V.Vb(),V.Vb(),V.Wb(25,"div",6),V.Wb(26,"mat-form-field",7),V.Wb(27,"mat-label"),V.Qc(28,"Advance KM"),V.Wb(29,"span",8),V.Qc(30,"*"),V.Vb(),V.Vb(),V.Wb(31,"input",14,15),V.ec("blur",function(){return e.blur()})("input",function(t){return e.keyDown(t,"float")})("keydown",function(t){return e.keyDown(t,"float")}),V.Vb(),V.Oc(33,Q,2,1,"mat-error",11),V.Vb(),V.Vb(),V.Wb(34,"div",6),V.Wb(35,"mat-form-field",7),V.Wb(36,"mat-label"),V.Qc(37,"KM In Litter"),V.Vb(),V.Wb(38,"input",16,17),V.ec("blur",function(){return e.blur()})("input",function(t){return e.keyDown(t,"float")})("keydown",function(t){return e.keyDown(t,"float")}),V.Vb(),V.Oc(40,J,2,1,"mat-error",11),V.Vb(),V.Vb(),V.Wb(41,"div",6),V.Wb(42,"mat-form-field",7),V.Wb(43,"mat-label"),V.Qc(44,"KM On Joining"),V.Vb(),V.Wb(45,"input",18,19),V.ec("blur",function(){return e.blur()})("input",function(t){return e.keyDown(t,"float")})("keydown",function(t){return e.keyDown(t,"float")}),V.Vb(),V.Oc(47,_,2,1,"mat-error",11),V.Vb(),V.Vb(),V.Wb(48,"div",6),V.Wb(49,"mat-form-field",7),V.Wb(50,"mat-label"),V.Qc(51,"Brand"),V.Vb(),V.Wb(52,"input",20,21),V.ec("blur",function(){return e.blur()})("input",function(t){return e.keyDown(t,"intStr")})("keydown",function(t){return e.keyDown(t,"intStr")}),V.Vb(),V.Oc(54,R,2,1,"mat-error",11),V.Vb(),V.Vb(),V.Wb(55,"div",6),V.Wb(56,"mat-form-field",7),V.Wb(57,"mat-label"),V.Qc(58,"Model"),V.Vb(),V.Wb(59,"input",22,23),V.ec("blur",function(){return e.blur()})("input",function(t){return e.keyDown(t,"intStr")})("keydown",function(t){return e.keyDown(t,"intStr")}),V.Vb(),V.Oc(61,B,2,1,"mat-error",11),V.Vb(),V.Vb(),V.Wb(62,"div",6),V.Wb(63,"mat-form-field",7),V.Wb(64,"mat-label"),V.Qc(65,"Company"),V.Vb(),V.Wb(66,"input",24,25),V.ec("blur",function(){return e.blur()})("input",function(t){return e.keyDown(t,"intStr")})("keydown",function(t){return e.keyDown(t,"intStr")}),V.Vb(),V.Oc(68,T,2,1,"mat-error",11),V.Vb(),V.Vb(),V.Wb(69,"div",26),V.Wb(70,"mat-form-field",7),V.Wb(71,"mat-label"),V.Qc(72,"Details"),V.Vb(),V.Wb(73,"textarea",27),V.ec("input",function(t){return e.keyDown(t,"text")})("keydown",function(t){return e.keyDown(t,"text")}),V.Vb(),V.Vb(),V.Vb(),V.Wb(74,"div",26),V.Wb(75,"div",7),V.Wb(76,"app-file-upload-template",28,29),V.ec("fileDropped",function(t){return e.getFile(t)}),V.Vb(),V.Vb(),V.Vb(),V.Wb(78,"mat-slide-toggle",30),V.ec("ngModelChange",function(t){return e.isPublished=t}),V.Wb(79,"span"),V.Qc(80,"Status"),V.Vb(),V.Vb(),V.Vb(),V.Vb(),V.Wb(81,"div",31),V.Wb(82,"button",32),V.ec("click",function(){return e.onCancel()}),V.Rb(83,"span",33),V.Wb(84,"span",34),V.Qc(85,"Cancel"),V.Vb(),V.Rb(86,"span",35),V.Vb(),V.Wb(87,"button",36),V.Rb(88,"span",37),V.Wb(89,"span",34),V.Qc(90,"Save"),V.Vb(),V.Rb(91,"span",35),V.Vb(),V.Vb(),V.Vb()),2&t&&(V.oc("formGroup",e.form),V.Cb(3),V.Rc(e.config.title),V.Cb(12),V.oc("ngIf",e.displayMessage.plateNo),V.Cb(8),V.oc("ngForOf",e.drivers),V.Cb(1),V.oc("ngIf",null==e.displayMessage?null:e.displayMessage.driverID),V.Cb(9),V.oc("ngIf",e.displayMessage.advance_KM),V.Cb(7),V.oc("ngIf",e.displayMessage.km_in_liter),V.Cb(7),V.oc("ngIf",e.displayMessage.km_on_joining),V.Cb(7),V.oc("ngIf",e.displayMessage.brand),V.Cb(7),V.oc("ngIf",e.displayMessage.model),V.Cb(7),V.oc("ngIf",e.displayMessage.company),V.Cb(8),V.oc("uploadedFile",e.image)("limit",10),V.Cb(2),V.oc("ngModel",e.isPublished)("ngModelOptions",V.rc(16,P)),V.Cb(9),V.oc("disabled",!e.form.valid))},directives:[g.y,g.r,g.i,u.g,h.b,b.a,u.e,d.c,d.g,c.b,g.c,g.q,g.g,k.m,r.a,k.l,W.a,l.a,g.t,u.c,d.b,x.i],styles:[".example-section[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;height:60px}.buttons[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:flex-end}"],changeDetection:0}),Object(C.__decorate)([Object(y.a)()],t.prototype,"blockUI",void 0),t})();var j=i("DYbl"),z=i("/zas"),K=i("SRE/"),q=i("sSZD"),U=i("WLRH");let X=(()=>{class t{constructor(t,e,i,o,n,a){this.carService=t,this.sessionQuery=e,this.userService=i,this.dialogServices=o,this.db=n,this.fun=a,this.caption="Cars",this.columns=[{label:"Plate No",name:"plateNo",sortable:!0},{label:"Brand",name:"brand",sortable:!0},{label:"Model",name:"model",sortable:!0},{label:"Driver",name:"driverName",type:"link",sortable:!0},{label:"Image",name:"image",type:"image",sortable:!1},{label:"Status",name:"status",type:"status",sortable:!0}],this.actions=[{icon:"pencil",color:"warning",disable:!1},{icon:"th-large",color:""}],this.toolBarActions=[{position:"right",action:[]},{position:"left",action:[{label:"Report",icon:"chart-bar",color:"",tooltip:null},{label:"Create",icon:"plus",color:"",tooltip:null}]}],this.drivers=[],this.user$=this.sessionQuery.select(t=>t.user),this.dialogConfig={width:"600px",formComponent:N,service:this.carService},this.dialogConfigModal={closable:!0,formComponent:S.a},this.dialogConfigReport={width:"95%",formComponent:I.a}}ngOnInit(){this.user$.subscribe(t=>{this.role=null==t?void 0:t.role,"supervisor"===(null==t?void 0:t.role)&&(this.actions=[],this.toolBarActions=[{position:"right",action:[]},{position:"left",action:[{label:"Report",icon:"chart-bar",color:"",tooltip:null}]}])}),this.cars$=this.onLoad(),this.users$=this.userService.get("driver").snapshotChanges()}add(){this.dialogConfig.title="New Car",this.dialogConfig.formData="",this.dialogConfig.lookupData={drivers:this.users$,taken:this.drivers},this.dialogServices.handleDialog(this.dialogConfig)}update(t){this.dialogConfig.title="Edit Car Info",this.dialogConfig.formData=t,this.dialogConfig.lookupData={drivers:this.users$,taken:this.drivers},this.dialogServices.handleDialog(this.dialogConfig)}report(){this.dialogConfigReport.title="car",this.dialogServices.handleDialog(this.dialogConfigReport)}onLoad(){let t;return this.blockUI.start("Loading..."),t=this.carService.get().snapshotChanges(),t.subscribe(t=>{this.fun.extractData(t).map(t=>{this.drivers.push({id:null==t?void 0:t.driverID})}),this.blockUI.stop()}),t}onActionClick(t){if("pencil"===t.type)this.update(t.data);else if("trash"===t.type)this.blockUI.start("Deleting..."),this.carService.delete(t.data.id).then(this.blockUI.stop());else if("th-large"===t.type){const e=[t.data].map(t=>{var e=Object(C.__rest)(t,["plateNo","brand","model","driverName","driverID","image","id","status"]);return Object.assign({},e)}),i=Object.keys(e[0]),o=this.fun.getColumns(i);this.showModalTable("Car Info",o,e)}else"link"===t.type&&this.users$.subscribe(e=>{const i=this.fun.extractData(e).filter(e=>{var i;return(null==e?void 0:e.id)===(null===(i=null==t?void 0:t.data)||void 0===i?void 0:i.driverID)}).map(t=>{var{name:e,phone:i,email:o,image:n,role:a}=t;return Object(C.__rest)(t,["name","phone","email","image","role"]),{name:e,phone:i,email:o,image:n,role:a}});if(i.length>0){const t=Object.keys(i[0]),e=this.fun.getColumns(t);this.showModalTable("Driver Info",e,i)}})}showModalTable(t,e,i,o="1000px"){this.dialogConfigModal.width=o,this.dialogConfigModal.lookupData={caption:t,columns:e,data:i},this.dialogServices.handleDialog(this.dialogConfigModal)}onToolBarActionClick(t){"plus"===t?this.add():"line"===t&&this.report()}}return t.\u0275fac=function(e){return new(e||t)(V.Qb(j.a),V.Qb(z.a),V.Qb(K.a),V.Qb(A.a),V.Qb(q.a),V.Qb(M.a))},t.\u0275cmp=V.Kb({type:t,selectors:[["app-car"]],decls:2,vars:10,consts:[[3,"caption","columns","data","actions","first","rows","sortBy","toolBarActions","buttonClick","toolBarButtonClick"]],template:function(t,e){1&t&&(V.Wb(0,"app-table-template",0),V.ec("buttonClick",function(t){return e.onActionClick(t)})("toolBarButtonClick",function(t){return e.onToolBarActionClick(t)}),V.ic(1,"async"),V.Vb()),2&t&&V.oc("caption",e.caption)("columns",e.columns)("data",V.jc(1,8,e.cars$))("actions",e.actions)("first",(null==e.currentPage?null:e.currentPage.first)||0)("rows",(null==e.currentPage?null:e.currentPage.rows)||10)("sortBy",e.sortBy)("toolBarActions",e.toolBarActions)},directives:[U.a],pipes:[k.b],styles:[""]}),Object(C.__decorate)([Object(y.a)()],t.prototype,"blockUI",void 0),t})();var L=i("tyNb");const G=[{path:"",component:X},{path:"**",redirectTo:""}];let H=(()=>{class t{}return t.\u0275mod=V.Ob({type:t}),t.\u0275inj=V.Nb({factory:function(e){return new(e||t)},imports:[[L.e.forChild(G)],L.e]}),t})(),Y=(()=>{class t{}return t.\u0275mod=V.Ob({type:t}),t.\u0275inj=V.Nb({factory:function(e){return new(e||t)},imports:[[k.c,H,v.a,m.f,g.k,g.v,f.b,h.c,b.b,p.a,u.f,d.e,c.c,s.b,r.b,l.b,a.i,n.a,o.a]]}),t})()},xivw:function(t,e,i){"use strict";i.d(e,"a",function(){return y});var o=i("mrSG"),n=i("fXoL"),a=i("12jx"),l=i("otk6"),r=i("aPmp"),s=i("ofXK"),c=i("R5Na"),d=i("1jcm"),u=i("jIHw"),p=i("Q4Mo"),b=i("xlun");function h(t,e){if(1&t){const t=n.Xb();n.Wb(0,"div",4),n.Wb(1,"input",5,6),n.ec("change",function(e){return n.Ec(t),n.hc().fileBrowserHandler(e)}),n.Vb(),n.Rb(3,"i",7),n.Wb(4,"h3"),n.Qc(5," Drag and Drop file here"),n.Vb(),n.Wb(6,"h3"),n.Qc(7,"or"),n.Vb(),n.Wb(8,"label",8),n.Qc(9,"Browse for file"),n.Vb(),n.Vb()}if(2&t){const t=n.hc();n.Cb(1),n.oc("accept",t.allowedFile)("multiple",t.multi)}}function f(t,e){if(1&t&&(n.Wb(0,"span",16),n.Qc(1),n.Vb()),2&t){const t=n.hc().$implicit;n.Cb(1),n.Rc(t.name)}}function g(t,e){if(1&t){const t=n.Xb();n.Wb(0,"div",12),n.ec("click",function(){n.Ec(t);const i=e.$implicit;return n.hc(2).clickImage(i)}),n.Wb(1,"span",13),n.Wb(2,"span",14),n.ec("click",function(){n.Ec(t);const i=e.$implicit;return n.hc(2).removeFile(i)}),n.Qc(3,"\xd7"),n.Vb(),n.Vb(),n.Oc(4,f,2,1,"span",15),n.Vb()}if(2&t){const t=e.$implicit,i=n.hc(2);n.Kc("background-image: url('",i.showImage(t),"');"),n.Cb(4),n.oc("ngIf","image"!=i.fileType)}}const m=function(t){return{inMulti:t}};function v(t,e){if(1&t&&(n.Wb(0,"div",9),n.Wb(1,"div",10),n.Oc(2,g,5,4,"div",11),n.Vb(),n.Vb()),2&t){const t=n.hc();n.Cb(1),n.oc("ngClass",n.sc(2,m,!t.multi)),n.Cb(1),n.oc("ngForOf",t.uploadedFile)}}function k(t,e){if(1&t){const t=n.Xb();n.Wb(0,"span",22),n.Wb(1,"button",23),n.Wb(2,"span",24),n.Wb(3,"input",25,26),n.ec("change",function(e){return n.Ec(t),n.hc(2).fileBrowserHandler(e)}),n.Vb(),n.Vb(),n.Vb(),n.Vb()}if(2&t){const t=n.hc(2);n.Cb(3),n.oc("accept",t.allowedFile)("multiple",t.multi)}}function C(t,e){if(1&t){const t=n.Xb();n.Wb(0,"span",27),n.Wb(1,"button",28),n.ec("click",function(){n.Ec(t);const e=n.hc(2);return e.files=[],e.uploadedFile=[]}),n.Vb(),n.Vb()}}function I(t,e){if(1&t){const t=n.Xb();n.Wb(0,"div",17),n.Wb(1,"span",18),n.Qc(2),n.Vb(),n.Wb(3,"mat-slide-toggle",19),n.ec("change",function(e){return n.Ec(t),n.hc().toggle(e)}),n.Qc(4,"Append"),n.Vb(),n.Oc(5,k,5,2,"span",20),n.Oc(6,C,2,0,"span",21),n.Vb()}if(2&t){const t=n.hc();n.Cb(2),n.Sc("",t.uploadedFile?t.uploadedFile.length:0," files upload"),n.Cb(1),n.oc("checked",t.append),n.Cb(2),n.oc("ngIf",t.uploadedFile.length>0),n.Cb(1),n.oc("ngIf",t.uploadedFile.length>0)}}const S=function(t){return{border:t}};let y=(()=>{class t{constructor(t,e){this.fun=t,this.viewImageService=e,this.deletedFile=[],this.files=[],this.path=[],this.countFile=0,this.counter=0,this.allowedFile="",this.touched=!1,this.color="dashed 2px #979797",this.pdf="../../../../assets/image/pdf.png",this.word="../../../../assets/image/word.png",this.coordination=null,this.append=!0,this.ID=0,this.uploadedFile=[],this.limit=0,this.multi=!0,this.fileType="image",this.profile=!1,this.subtitle=!1,this.fileDropped=new n.o}ngOnInit(){this.uploadedFile=this.uploadedFile.map(t=>null==t.base64&&t.split("://").length>1?{url:t,base64:"",fileType:""}:Object.assign({},t)),this.pathTree(),this.multi||(this.append=!1),this.allowedFile="image"===this.fileType?"image/*":"application/*,.csv,.json",this.limit=this.multi||0!==this.limit?this.limit:1,this.emit("OnDefault")}onDragOver(t){t.preventDefault(),t.stopPropagation(),this.color="dashed 2px green"}onDragLeave(t){t.preventDefault(),t.stopPropagation(),this.color=this.touched&&0===this.uploadedFile.length?"dashed 2px red":"dashed 2px #979797"}onDrop(t){t.preventDefault(),t.stopPropagation(),t.dataTransfer.files.length>0&&this.checkIfExist(t)}fileBrowserHandler(t){this.checkIfExist(t,"manual")}toggle(t){this.append=t.checked}removeStoredData(){this.multi&&!this.append&&this.uploadedFile.length>0?this.uploadedFile.forEach(t=>{null!==t.id&&this.removeFile(t)}):!this.multi&&this.uploadedFile.length>0&&this.uploadedFile.forEach(t=>{this.removeFile(t)})}scanFiles(t){t.isFile&&t.file(e=>{this.files.push({file:e,item:t})}),t.isDirectory&&t.createReader().readEntries(t=>{t.forEach(t=>{this.scanFiles(t)})})}checkIfExist(t,e="drag"){this.countFile=0,this.counter=0,this.files=[];const i="drag"===e?t.dataTransfer.files:t.target.files;if(this.subtitle||this.synchronizeSubtitle(t,e),this.removeStoredData(),this.append||(this.uploadedFile=[]),"drag"===e){const e=t.dataTransfer.items;for(const t of e){const e=t.webkitGetAsEntry();e&&this.scanFiles(e)}setTimeout(()=>{this.files.forEach(t=>{this.processing(t.file,t.item)})},150)}else for(const o of i)this.processing(o)}processing(t,e=null){this.counter++;const i=t,o=this.allowedFile.split("/"),n=i.name.split("."),a="."+n[n.length-1],l=i.size/1024/1024,r=i.type.split("/"),s="image"===o[0]?"image":"file",c=".json,.csv,.xlsx,.xls".split(",");if((s===r[0]&&l<=15||c.includes(a)&&l<=15)&&this.fun.getBase64ImageFromFile(i).then(t=>{0===this.uploadedFile.filter(e=>e.base64===t).length&&0===this.countFile&&(0===this.limit||this.uploadedFile.length<this.limit)&&(e&&this.path.push(e.fullPath),this.storeToArray(i,t)),this.multi||this.countFile++}),this.files.length===this.counter){const t=0===this.uploadedFile.length&&("image"===s&&s!==r[0]||!c.includes(a)&&"image"!==s)?`Uploaded file is not ${"image"!==this.fileType?"supported document":"image"} `:0===this.uploadedFile.length&&l>15?"File is too big.":null;null!=t&&this.fun.notify("",t,5e3)}}generateID(t){let e="";const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=i.length;for(let n=0;n<t;n++)e+=i.charAt(Math.floor(Math.random()*o));return e}storeToArray(t,e){const i=t.name.split("."),o=i[i.length-1],n={id:this.generateID(50),name:t.name,type:t.type,ext:o,base64:e,coordination:this.coordination};this.uploadedFile.push(n),this.emit()}synchronizeSubtitle(t,e="drag"){let i=[],o=[],n="";const a="drag"===e?t.dataTransfer.files[0]:t.target.files[0],l=a.name.split(".");if("srt"===l[l.length-1]){const t=new FileReader;t.onload=(function(t){let e=t.target.result;e=e.split("\n"),e.forEach(t=>{"\r"===t?(i.push({num:o[0],duration:o[1],text:o.slice(2,o.length).join("\n"),end:"\r"}),o=[]):o.push(t)}),i=i.map(t=>{const e=t.duration.split("--\x3e"),i=this.convertTimeInterval(e[0].trim(),0),o=this.convertTimeInterval(e[1].trim(),0);return Object.assign(Object.assign({},t),{duration:i+" --\x3e "+o})}),i.forEach(t=>{n+=t.num+"\n",n+=t.duration+"\n",n+=t.text+"\n",n+="\n"}),console.log(n)}).bind(this),t.readAsText(a)}}convertTimeInterval(t,e=0){const i=t.split(","),o=i[0].split(":");let n=3600*parseInt(o[0])+60*parseInt(o[1])+parseInt(o[2]);n+=e;const a=i[i.length-1],l=Math.floor(n/3600),r=Math.floor(n%3600/60),s=n%60;return l.toString().padStart(2,"0")+":"+r.toString().padStart(2,"0")+":"+s.toString().padStart(2,"0")+","+a}removeFile(t){this.files=[],this.uploadedFile.includes(t)&&(this.deletedFile.push(t),this.uploadedFile=this.uploadedFile.filter(e=>e!==t),this.emit())}emit(t="default"){this.touched=!0,this.color=this.touched&&"default"===t&&0===this.uploadedFile.length?"dashed 2px red":"dashed 2px #979797",this.fileDropped.emit({upload:this.uploadedFile,deleted:this.deletedFile})}showImage(t){var e;let i;if("image"!==this.fileType){const o=null===(e=t.name)||void 0===e?void 0:e.split(".");i=o[(null==o?void 0:o.length)-1]}return"image"===this.fileType?(null==t?void 0:t.base64)||(null==t?void 0:t.url):"pdf"===i?this.pdf:this.word}clickImage(t){if(this.pathTree(),"image"!==this.fileType)return null;const e={index:this.uploadedFile.findIndex(e=>e===t),images:this.uploadedFile.map(t=>t.base64||t.url)};this.viewImageService.add(e)}pathTree(){}}return t.\u0275fac=function(e){return new(e||t)(n.Qb(l.a),n.Qb(r.a))},t.\u0275cmp=n.Kb({type:t,selectors:[["app-file-upload-template"]],hostBindings:function(t,e){1&t&&n.ec("dragover",function(t){return e.onDragOver(t)})("dragleave",function(t){return e.onDragLeave(t)})("drop",function(t){return e.onDrop(t)})},inputs:{ID:"ID",uploadedFile:"uploadedFile",limit:"limit",multi:"multi",fileType:"fileType",profile:"profile",subtitle:"subtitle"},outputs:{fileDropped:"fileDropped"},decls:5,vars:6,consts:[[1,"dropzone",3,"ngStyle"],["class","content",4,"ngIf"],["style","width: 100%;",4,"ngIf"],["class","toggle",4,"ngIf"],[1,"content"],["type","file","id","fileDropRef","value","",3,"accept","multiple","change"],["fileDropRef",""],[1,"pi","pi-upload"],["for","fileDropRef"],[2,"width","100%"],[1,"custom-file-container__image-preview",2,"background-image","url(`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiQAAAD6CAMAAACmhqw0AAAA+VBMVEUAAAD29u3u7unt7ent7enu7uju7uihoqCio6Gio6KjpKOkpaSmpqSmp6WoqKaqq6mqq6qrq6qsrautrauur62wsa6xsa+xsrCys7GztLK0tbK1trS2t7S3t7W4uba5ure6u7e7vLm8vbu9vrvAwL3Awb3DxMHFxcPGxsPHx8TIycXLzMjLzMnMzMnNzsrPz8vP0MzQ0M3S0s/U1NDV1dLX19TY2NTY2NXZ2dba2tXb29bc3Nfc3Njc3dnd3dre3tre39vg4Nvh4dzi4t3i4t7j497k5N/k5ODl5eDl5eHl5uLm5uHn5+Lo6OPp6eTq6uXr6+bs7Oft7eh54KxIAAAAB3RSTlMAHKbl5uztvql9swAABA1JREFUeNrt3VlT01AYgOG0oEEE910URNzFBVFcqCgKirLU/P8fI3QYbEOSdtrMyJzzvHfMlFx833NBQuY0SRrN8UwqabzZSJLGaYNQVacaSdMUVF0zGTMEVTeWmIH6BYkgESSCRJAIEkEiSCRIBIkgESSCRJAIEkEiQSJIBIkgESSCRJAIEgkSQSJIBIkgESSCRJBIkAgSQSJIBIkgESSCRIJEkAgSQSJIBIkgkSARJIJEkAgSQSJIBIkEiSARJIJEkAgSQSJIJEgEiSARJIJEkAgSQSJBIkgEiSARJIJEkAgSCRJBIkgEiSARJIJEgkSQ5PvxbdS+tyEJuZVb0+noTV579geSQGs/SOvqxiYkYfYwra+rbUhC7NNEjUjSJ5CE2P06jaTnIAmxKwe7vb468t3N14WOki1IAuzMwWrf1HCh3Q6S95AEWGe1b0/WlSCBBBJIIAkdSXvt1aNXa21IICld7dJU5+epJUggKV7tzuzRA4/ZHUggKVrtfNdjsXlIIClY7XLPw9NlSCA5vtqLPUguQgLJsdX+zv0fZhsSSPKrXckhWSn5jV8zG5DEiuR1DsnrEiOX0vMbkESKZDWHZLXMSFqsBJIIkOz1vn40sVdqpFgJJDHc3dzsQXKzwkihEkhiQLI+2f3y+3qVkSIlkMSAJFvsQrJYbaRACSRRIMlenj0UcPZlPyPHlUASB5Jsc+7cwevMc5v9jRxTAkkkSPbb+riVZYMYySuBJB4kJRUYySmBJHYkhUZ6lUASOZISIz1KIIkbSamRbiWQxIZkvT2YkS4lkESGpDV9tz2YkX9KIIkLSWs6TY+U9DFypASSqJC0OicfHSrpa2T/k5BEh6R1eDpWR8kARtIZSGJD0jo6QW1fySBGIIkOSavrlL27PwcxAklsSFo9JzFOppBAkl9ta5jTOiGJCslQRiCJCslwRiCJCcmQRiCJCMmwRiCJB8mXoU+YhyQaJM9TSCCBBBJIIIEEEkgggQQSSCCJAsnyzLA9hiQWJCfnSpBAAgkkkATXxFCnPxfU7iB5B0mAXT5Y7Z3t0Y087SDZgCTA7tX6bZ5TGSQBtlwrkgVIgmy+RiMXdiEJsp3b9Rn5nEESaC/O1/P3yMJuBkm4bX94O2rvNiKbWXRIBIkgESSCRJAIEkEiQSJIBIkgESSCRJAIEgkSQSJIBIkgESSCRIJEkAgSQSJIBIkgESQSJIJEkAgSQSJIBIkgkSARJIJEkAgSQSJIBIkEiSARJIJEkAgSQSJIJEgEiSARJIJEkAgSCRJBIkgEiSARJIJEkEiQCBJBIkgEiSARJIJEgkSQCBJBIkgEiSARJBIkgkSQ6P8gGTMDVTeWNA1B1TWTxmlTUFWnGknSaI4bhMoabzaSv+4BHFVoHZzfAAAAAElFTkSuQmCC`)",3,"ngClass"],["class","custom-file-container__image-multi-preview",3,"style","click",4,"ngFor","ngForOf"],[1,"custom-file-container__image-multi-preview",3,"click"],[1,"custom-file-container__image-multi-preview__single-image-clear"],[1,"custom-file-container__image-multi-preview__single-image-clear__icon",2,"font-size","16px",3,"click"],["class","fileName",4,"ngIf"],[1,"fileName"],[1,"toggle"],[1,"p-mr-2"],[3,"checked","change"],["class","p-ml-2","style","cursor: pointer;",4,"ngIf"],["class","p-ml-2",4,"ngIf"],[1,"p-ml-2",2,"cursor","pointer"],["pButton","","pRipple","","icon","pi pi-plus","styleC","cursor: pointer;","pTooltip","Add",1,"shadow-none","p-button-rounded","p-button-plain"],[1,"hiddenFileInput"],["type","file","value","",3,"accept","multiple","change"],["fileDropRef2",""],[1,"p-ml-2"],["pButton","","pRipple","","icon","pi pi-undo","pTooltip","clear",1,"shadow-none","p-button-rounded","p-button-danger","p-button-outlined","p-button-plain",3,"click"]],template:function(t,e){1&t&&(n.Wb(0,"div",0),n.Oc(1,h,10,2,"div",1),n.Oc(2,v,3,4,"div",2),n.Oc(3,I,7,4,"div",3),n.Vb(),n.Rb(4,"app-view-image-template")),2&t&&(n.oc("ngStyle",n.sc(4,S,e.color)),n.Cb(1),n.oc("ngIf",e.uploadedFile.length<=0),n.Cb(1),n.oc("ngIf",e.uploadedFile.length>0),n.Cb(1),n.oc("ngIf",e.multi))},directives:[s.n,s.m,c.a,s.k,s.l,d.a,u.b,p.a,b.a],styles:[".dropzone[_ngcontent-%COMP%]{width:100%;height:350px;text-align:center;position:relative;margin:0 auto}.dropzone[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:5.5rem;cursor:pointer}.dropzone[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;position:absolute;z-index:2;width:100%;height:100%;top:0;left:0}.dropzone[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#fff;width:183px;height:40px;font-size:17px;border-radius:21.5px;background-color:#db202f;padding:8px 16px;margin-bottom:20px}.dropzone[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:600;color:#38424c}.dropzone[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]{padding-right:10px;padding-bottom:0;position:absolute;right:0;bottom:0;z-index:3}.dropzone[_ngcontent-%COMP%]   .hiddenFileInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;position:absolute;z-index:2;width:100%;height:100%;top:0;left:0}.dropzone[_ngcontent-%COMP%]:hover{border:solid}.inMulti[_ngcontent-%COMP%]{height:350px}"]}),Object(o.__decorate)([Object(a.a)()],t.prototype,"blockUI",void 0),t})()}}]);