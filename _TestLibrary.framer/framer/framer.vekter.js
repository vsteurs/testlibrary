(function(scope) {var Card_01 = new Layer({"height":500,"name":"Card_01","constraintValues":null,"backgroundColor":"rgb(245, 245, 245)","clip":true,"width":300,"y":982});var __layer_0__ = new Layer({"parent":Card_01,"name":"image","backgroundColor":"rgba(171, 171, 171, 0.5)","width":300,"height":225,"constraintValues":{"height":225,"centerAnchorX":0.5,"width":300,"right":0,"centerAnchorY":0.225},"blending":"normal","clip":false,"borderStyle":"solid"});var __layer_1__ = new TextLayer({"parent":Card_01,"name":"title","backgroundColor":null,"width":229,"x":31,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":6,"css":{"fontSize":"24px","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText\", \"SFUIText-Regular\", \".SFUIText\", \"SF UI Text\", sans-serif","WebkitTextFillColor":"rgb(0, 0, 0)"}}],"text":"Title "}]},"height":28,"constraintValues":{"left":31,"height":28,"centerAnchorX":0.485,"width":229,"bottom":222,"right":40,"top":null,"centerAnchorY":0.528},"blending":"normal","autoSize":false,"y":250});var __layer_2__ = new TextLayer({"parent":Card_01,"name":"description","backgroundColor":null,"width":233,"x":34,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":11,"css":{"fontSize":"18px","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText\", \"SFUIText-Regular\", \".SFUIText\", \"SF UI Text\", sans-serif","WebkitTextFillColor":"rgb(0, 0, 0)"}}],"text":"Description"}]},"height":65,"constraintValues":{"left":34,"height":65,"centerAnchorX":0.5016666666666667,"width":233,"bottom":137,"right":33,"top":null,"centerAnchorY":0.661},"blending":"normal","autoSize":false,"y":298});var Page = new Layer({"height":900,"name":"Page","constraintValues":{"height":900,"heightFactor":1,"width":1440,"widthFactor":1},"backgroundColor":"#ffffff","clip":true,"width":1440});__layer_1__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_1__","vekterClass":"TextNode","text":"Title "};__layer_2__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_2__","vekterClass":"TextNode","text":"Description"};Page.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|Page","targetName":"Page","vekterClass":"FrameNode"};Card_01.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|Card_01","targetName":"Card_01","vekterClass":"FrameNode"};__layer_0__.__framerInstanceInfo = {"hash":"#vekter|__layer_0__","vekterClass":"RectangleNode","framerClass":"Layer"};if (scope["__vekterVariables"]) { scope["__vekterVariables"].map(function(variable) { delete scope[variable] } ) };Object.assign(scope, {Card_01, Page});scope["__vekterVariables"] = ["Card_01", "Page"];if (typeof Framer.CurrentContext.layout === 'function') {Framer.CurrentContext.layout()};})(window);