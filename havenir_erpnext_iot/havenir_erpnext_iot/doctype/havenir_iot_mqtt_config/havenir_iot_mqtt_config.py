# -*- coding: utf-8 -*-
# Copyright (c) 2020, Havenir and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class HavenirIOTMQTTConfig(Document):
	pass


@frappe.whitelist()
def get_iot_details():
	iot = frappe.get_doc("Havenir IOT MQTT Config")
	return [iot.server,iot.username,iot.password]