var mqtt = require("mqtt");
// var client = mqtt.connect("mqtt://test.mosquitto.org");

var Opciones = {
  host: "localhost",
  port: 1893,
  protocol: "mqtt",
  clientId: "Daniel",
};
var client = mqtt.connect(Opciones);

function EventoConectar() {
  client.subscribe("humedad", function (err) {
    if (!err) {
      client.publish("humedad", "5");
    }
  });
}

function EventoMensaje(topic, message) {
  if (topic == "humedad") {
    console.log("La humedad es " + message.toString());
  }
  console.log(topic + " - " + message.toString());
  // client.end()
}

client.on("connect", EventoConectar);
client.on("message", EventoMensaje);