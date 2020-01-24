<template>
  <div>
    <button v-on:click="turnOnLight" type="button" class="btn btn-success">Turn On</button>
    <button v-on:click="turnOffLight" type="button" class="btn btn-danger">Turn OFF</button>
    <div>
      Light Status:
      <strong>{{ lightStatus }}</strong>
    </div>
  </div>
</template>

<script>
import VueMqtt from "vue-mqtt";
frappe
  .call({
    method:
      "havenir_erpnext_iot.havenir_erpnext_iot.doctype.havenir_iot_mqtt_config.havenir_iot_mqtt_config.get_iot_details"
  })
  .then(r => {
    var server = "mqtt://" + r.message[0]
    Vue.use(VueMqtt, server, {
      port: 9001,
      username: r.message[1],
      password: r.message[2],
      clientId: "havenir-erpnext",
      clean: false,
      keepalive: 60
    });
  });

export default {
  data: function() {
    return {
      lightStatus: "Off"
    };
  },
  mqtt: {
    "erpnext/status": function(val) {
      this.lightStatus = val;
    }
  },
  methods: {
    turnOnLight: function() {
      // this.lightStatus = "On";
      this.$mqtt.publish("erpnext/demolight", "On", {
        qos: 1,
        retain: true
      });
    },
    turnOffLight: function() {
      // this.lightStatus = "Off";
      this.$mqtt.publish("erpnext/demolight", "Off", {
        qos: 1,
        retain: true
      });
    }
  },
  mounted: function() {
    this.$mqtt.subscribe(
      "erpnext/status",
      {
        qos: 1,
        rap: true
      },
      function(err, granted) {
        if (err) {
          console.log(err);
        }
      }
    );
  }
};
</script>