"use strict";
var statuspedido;
(function (statuspedido) {
    statuspedido[statuspedido["ENVIADO"] = 1] = "ENVIADO";
    statuspedido[statuspedido["ENTREGUE"] = 2] = "ENTREGUE";
    statuspedido[statuspedido["PAGO"] = 3] = "PAGO";
})(statuspedido || (statuspedido = {}));
console.log(statuspedido);
console.log(statuspedido.ENTREGUE);
