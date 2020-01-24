frappe.pages['havenir-iot-dashboar'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Havenir IOT Dashboard',
		single_column: true
	});
	frappe.breadcrumbs.add("Stock");
	page.add_menu_item('Stock Entry', () => frappe.set_route('List', 'Stock Entry'))
	page.add_menu_item('Delivery Note', () => frappe.set_route('List', 'Delivery Note'))
	page.add_menu_item('Purchase Receipt', () => frappe.set_route('List', 'Purchase Receipt'))
  this.page.$export_tool = new frappe.havenir_erpnext_iot.ExportTool(this.page);
}