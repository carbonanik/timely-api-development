const { RestClient } = require('@signalwire/node')
const config = require('config');

const smsClient = new RestClient(config.get('relay_project_key'), config.get('relay_token'), { signalwireSpaceUrl: 'timely.signalwire.com' })

module.exports = ({ body, to }) => {
    try {
        smsClient.messages
            .create({ from: config.get('phone'), body: body, to: to })
            .then(message => console.log(message))
            .catch(e => console.log(e))
            .done();
    } catch (error) {
        throw new Error(error)
    }
}
