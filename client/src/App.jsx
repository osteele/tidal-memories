import { connect } from 'react-redux';
import './site.scss';
import Tides from './Tides';
import { deleteMessage } from './data/actions';

const App = ({ background }) => (
    <div>
        <Tides />
        <Messages />
        <Footer />
    </div>
);

const MessageList = ({ messages, closeMessage }) => (
    <div id="messages">
        {messages.map(message => (
            <div key={message.id} className="ui message">
                <i
                    className="close icon"
                    onClick={() => closeMessage(message.id)}
                />
                <p dangerouslySetInnerHTML={{ __html: message.html }} />
            </div>
        ))}
    </div>
);

const mapStateToProps = ({ messages }) => ({ messages });
const mapDispatchToProps = dispatch => ({
    closeMessage: messageId => dispatch(deleteMessage(messageId))
});
const Messages = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageList);

const Footer = () => (
    <footer className="ui vertical footer segment">
        <div className="ui center aligned container">
            View on{' '}
            <a href="https://github.com/osteele/tidal-memories">GitHub</a>
        </div>
    </footer>
);

export default App;
