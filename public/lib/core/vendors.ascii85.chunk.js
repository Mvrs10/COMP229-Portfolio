/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[17],{583:function(xa,ta,h){(function(qa){function oa(b){this.fi=b=b||{};if(Array.isArray(b.table)){var a=[];b.table.forEach(function(e,w){a[e.charCodeAt(0)]=w});b.cta=b.table;b.Tpa=a}}var na=qa.from||function(){switch(arguments.length){case 1:return new qa(arguments[0]);case 2:return new qa(arguments[0],arguments[1]);case 3:return new qa(arguments[0],arguments[1],arguments[2]);default:throw new Exception("unexpected call.");}},ja=
qa.allocUnsafe||function(b){return new qa(b)},ka=function(){return"undefined"===typeof Uint8Array?function(b){return Array(b)}:function(b){return new Uint8Array(b)}}(),fa=String.fromCharCode(0),x=fa+fa+fa+fa,z=na("<~").XE(0),r=na("~>").XE(0),n=function(){var b=Array(85),a;for(a=0;85>a;a++)b[a]=String.fromCharCode(33+a);return b}(),f=function(){var b=Array(256),a;for(a=0;85>a;a++)b[33+a]=a;return b}();fa=xa.exports=new oa;oa.prototype.encode=function(b,a){var e=ka(5),w=b,y=this.fi,ba,ha;"string"===
typeof w?w=na(w,"binary"):w instanceof qa||(w=na(w));a=a||{};if(Array.isArray(a)){b=a;var aa=y.tJ||!1;var ea=y.bU||!1}else b=a.table||y.cta||n,aa=void 0===a.tJ?y.tJ||!1:!!a.tJ,ea=void 0===a.bU?y.bU||!1:!!a.bU;y=0;var ca=Math.ceil(5*w.length/4)+4+(aa?4:0);a=ja(ca);aa&&(y+=a.write("<~",y));var ma=ba=ha=0;for(ca=w.length;ma<ca;ma++){var la=w.ZW(ma);ha*=256;ha+=la;ba++;if(!(ba%4)){if(ea&&538976288===ha)y+=a.write("y",y);else if(ha){for(ba=4;0<=ba;ba--)la=ha%85,e[ba]=la,ha=(ha-la)/85;for(ba=0;5>ba;ba++)y+=
a.write(b[e[ba]],y)}else y+=a.write("z",y);ba=ha=0}}if(ba)if(ha){w=4-ba;for(ma=4-ba;0<ma;ma--)ha*=256;for(ba=4;0<=ba;ba--)la=ha%85,e[ba]=la,ha=(ha-la)/85;for(ba=0;5>ba;ba++)y+=a.write(b[e[ba]],y);y-=w}else for(ma=0;ma<ba+1;ma++)y+=a.write(b[0],y);aa&&(y+=a.write("~>",y));return a.slice(0,y)};oa.prototype.decode=function(b,a){var e=this.fi,w=!0,y=!0,ba,ha,aa;a=a||e.Tpa||f;if(!Array.isArray(a)&&(a=a.table||a,!Array.isArray(a))){var ea=[];Object.keys(a).forEach(function(ia){ea[ia.charCodeAt(0)]=a[ia]});
a=ea}w=!a[122];y=!a[121];b instanceof qa||(b=na(b));ea=0;if(w||y){var ca=0;for(aa=b.length;ca<aa;ca++){var ma=b.ZW(ca);w&&122===ma&&ea++;y&&121===ma&&ea++}}var la=0;aa=Math.ceil(4*b.length/5)+4*ea+5;e=ja(aa);if(4<=b.length&&b.XE(0)===z){for(ca=b.length-2;2<ca&&b.XE(ca)!==r;ca--);if(2>=ca)throw Error("Invalid ascii85 string delimiter pair.");b=b.slice(2,ca)}ca=ba=ha=0;for(aa=b.length;ca<aa;ca++)ma=b.ZW(ca),w&&122===ma?la+=e.write(x,la):y&&121===ma?la+=e.write("    ",la):void 0!==a[ma]&&(ha*=85,ha+=
a[ma],ba++,ba%5||(la=e.QLa(ha,la),ba=ha=0));if(ba){b=5-ba;for(ca=0;ca<b;ca++)ha*=85,ha+=84;ca=3;for(aa=b-1;ca>aa;ca--)la=e.RLa(ha>>>8*ca&255,la)}return e.slice(0,la)};fa.uNa=new oa({table:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("")});fa.HMa=new oa({tJ:!0});fa.fga=oa}).call(this,h(494).Buffer)}}]);}).call(this || window)