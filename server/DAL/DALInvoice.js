'use strict'

const Invoice = require('../models/invoiceModel')

const DALInvoice = {}

/**
 * Will update the document owned by the provided user id 
 * @param {mongoose.Schema.Types.ObjectId | string} ownerId - The id of the owner of the invoice to update 
 * @param {object} query - The data to update the invoices with 
 * @returns the updated invoice document 
 */
DALInvoice.updateByOwnerId = async (ownerId, query) => {
	try {
		await Invoice.updateOne({owner: ownerId}, query, { upsert: true })
		return Invoice.findOne({owner: ownerId})
	} catch (error) {
		// TODO add more generic error 
		throw new Error(error)
	}
}

/**
 * Will create an invoice and link to a user id 
 * @param {mongoose.Schema.Types.ObjectId | string} ownerId - The id of the owner of the invoice to create 
 * @param {object} invoice - The data to update the invoices with 
 * @returns the created invoice document 
 */
DALInvoice.createInvoiceDetails = async (invoice) => {
	try {
		await Invoice.create(invoice)
		return Invoice.findOne({owner: invoice.owner})
	} catch (error) {
		// TODO add more generic error
		throw new Error(error)    
	}
}

module.exports = DALInvoice