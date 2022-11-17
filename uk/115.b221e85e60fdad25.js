"use strict";(self.webpackChunki18n=self.webpackChunki18n||[]).push([[115],{6115:(P,i,o)=>{o.r(i),o.d(i,{PaymentsModule:()=>M});var u=o(4666),c=o(4522),m=o(4304),l=o(1267),p=o(8835),d=o(3918),t=o(2560),y=o(7157);function h(a,s){if(1&a&&(t.TgZ(0,"div",11),t._uU(1),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Oqu(e.donationStatusMessage)}}const f=[{path:"",component:(()=>{class a{constructor(e,n){this.cdr=e,this.platformShield=n,this.paymentNetworks=["amex","jcb","visa","maestro","mastercard"]}makeDonation(){var e=this;return(0,d.Z)(function*(){if("PaymentRequest"in e.platformShield.nativeWindow)try{const n=new PaymentRequest(e.getPaymentMethods(),e.getPaymentDetails());(yield n.canMakePayment())||e.setDonationStatusMessage("The payment can not proceed."),e.makePayment(n)}catch(n){e.setDonationStatusMessage((n||"").toString())}else e.setDonationStatusMessage("Your browser/device does not support Web Payments API.")})()}getGooglePaymentDataRequest(){return{environment:"TEST",apiVersion:2,apiVersionMinor:0,merchantInfo:{merchantName:"Example Merchant"},allowedPaymentMethods:[{type:"CARD",parameters:{allowedAuthMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],allowedCardNetworks:["AMEX","DISCOVER","INTERAC","JCB","MASTERCARD","VISA"]},tokenizationSpecification:{type:"PAYMENT_GATEWAY",parameters:{gateway:"example",gatewayMerchantId:"exampleGatewayMerchantId"}}}]}}getPaymentMethods(){return[{supportedMethods:"https://google.com/pay",data:this.getGooglePaymentDataRequest()},{supportedMethods:"basic-card",data:{supportedNetworks:this.paymentNetworks}},{supportedMethods:"https://apple.com/apple-pay",data:{version:2,supportedNetworks:this.paymentNetworks,countryCode:"UK",merchantIdentifier:"viatcheslav-zadorozhniy",merchantCapabilities:["supportsDebit","supportsCredit","supports3DS"]}}]}getPaymentDetails(){return{total:{label:"Donation",amount:{currency:"USD",value:"10.00"}},displayItems:[{label:"Original donation amount",amount:{currency:"USD",value:"15.00"}},{label:"Friends and family discount",amount:{currency:"USD",value:"-5.00"}}]}}setDonationStatusMessage(e){this.donationStatusMessage=e,this.cdr.markForCheck()}makePayment(e){var n=this;return(0,d.Z)(function*(){const r=yield e.show();setTimeout(()=>{r.complete("success"),n.setDonationStatusMessage("Your donation was sent successfully.")},1e3)})()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(t.sBO),t.Y36(y.t))},a.\u0275cmp=t.Xpm({type:a,selectors:[["playground-payments"]],hostAttrs:[1,"full-size","p-3","overflow-auto"],decls:35,vars:1,consts:[[1,"mb-5"],["type","button","mat-raised-button","","color","primary",3,"click"],["class","mt-2",4,"ngIf"],[1,"mb-3"],[1,"d-flex","flex-wrap","gap-2"],[1,"overflow-hidden"],["matInput","","type","text","name","name","autocomplete","cc-name"],["matInput","","type","text","pattern","[0-9]+","name","card-number","inputmode","numeric","autocomplete","cc-number"],["matInput","","type","text","name","expiry-date","autocomplete","cc-exp","placeholder","MM/YY","minlength","4","pattern","[0-9/]+"],["matInput","","type","text","name","security-code","inputmode","numeric","minlength","3","maxlength","4","pattern","[0-9]+"],["type","button","mat-raised-button","","color","primary"],[1,"mt-2"]],template:function(e,n){1&e&&(t.TgZ(0,"h2"),t._uU(1,"Payments"),t.qZA(),t.TgZ(2,"section",0)(3,"h3"),t._uU(4,"Payment request dialog"),t.qZA(),t.TgZ(5,"button",1),t.NdJ("click",function(){return n.makeDonation()}),t._uU(6,"Make a donation"),t.qZA(),t.YNc(7,h,2,1,"div",2),t.qZA(),t.TgZ(8,"form",3)(9,"h3"),t._uU(10,"Credit card payment"),t.qZA(),t.TgZ(11,"div",4)(12,"div",5)(13,"mat-form-field")(14,"mat-label"),t._uU(15,"Name on card"),t.qZA(),t._UZ(16,"input",6),t.qZA()(),t.TgZ(17,"div",5)(18,"mat-form-field")(19,"mat-label"),t._uU(20,"Card number"),t.qZA(),t._UZ(21,"input",7),t.qZA()()(),t.TgZ(22,"div",4)(23,"div",5)(24,"mat-form-field")(25,"mat-label"),t._uU(26,"Expiry date"),t.qZA(),t._UZ(27,"input",8),t.qZA()(),t.TgZ(28,"div",5)(29,"mat-form-field")(30,"mat-label"),t._uU(31,"Security code"),t.qZA(),t._UZ(32,"input",9),t.qZA()()(),t.TgZ(33,"button",10),t._uU(34,"Pay $300.00"),t.qZA()()),2&e&&(t.xp6(7),t.Q6J("ngIf",!!n.donationStatusMessage))},dependencies:[u.O5,m.KE,m.hX,l.Nt,c.lW],changeDetection:0}),a})()}];let g=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[p.Bz.forChild(f),p.Bz]}),a})(),M=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[u.ez,l.c,c.ot,m.lN,g]}),a})()}}]);
//# sourceMappingURL=115.b221e85e60fdad25.js.map