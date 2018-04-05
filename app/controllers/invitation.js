const invitation = require('../models/Invitation');

module.exports = {
    index(req, res) {
        invitation.find({ userId: req.user.id }).exec().then((result) => {
            res.json(result);
        });
    },
    update(req, res) {
        invitation.findById(req.body.id).exec().then((result) => {
            if(!result) {
                res.status(404).json({ code: 404, message: 'invitation not found.' });
            }

            if(result.userId !== req.user.id) {
                res.status(401).json({ code: 401, message: 'unauthorized' });
            }

            if(result.declined || result.accepted) {
                res.status(400).json({ code: 400, message: 'invitation has already been declined or accepted.' });
            }

            if(req.params.action === 'accept') {
                return result.update({ accpeted: true }).exec().then((model) => {
                    return res.status(200).json(model);
                });
            }

            result.update({ declined: true }).exec().then((model) => {
                res.status(200).json(model);
            })

        })
        .catch(err => res.status(400).json({ code: 400, message: 'something went wrong!' }))
    }
}
