import HavenirIOT from "./HavenirIOT.vue";

frappe.provide("frappe.havenir_erpnext_iot"); // create a namespace within the Frappe instance

frappe.havenir_erpnext_iot.ExportTool = class {
  // create a glue class, wich will manage your Vue instance
  constructor({ parent }) {
    this.$parent = $(parent);
    this.page = parent.page;
    this.setup_header();
    this.make_body();
  }
  make_body() {
    this.$export_tool_container = this.$parent.find(".layout-main"); // bind the new Vue instance to the main <div> on the page
    this.vue = new Vue({
      el: this.$export_tool_container[0],
      data: {},
      render: h => h(HavenirIOT)
    });
  }
  setup_header() {}
};
