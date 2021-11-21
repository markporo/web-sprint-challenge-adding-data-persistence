module.exports = { checkResourceBody }

const resourceModel = require('./model')

async function checkResourceBody(req, res, next) {
    const foundResource = await resourceModel.getResources()


    if (!req.body || foundResource.find(f => f === req.body)) {
        res.status(400).json({ message: 'New Resource is missing or it has already been inserted into DB' })
    } else {
        next()
    }
}
