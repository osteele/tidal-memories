import { connect } from 'react-redux';
import './site.scss';
import Tides from './Tides';

const Footer = () => (
    <footer className="ui vertical footer segment">
        <div className="ui center aligned container">
            View on{' '}
            <a href="https://github.com/osteele/tidal-memories">GitHub</a>
        </div>
    </footer>
);

const App = ({ background, viewClass }) => (
    <div className={'app ' + viewClass} style={{ background }}>
        <main className="ui container">
            <Tides />
        </main>
        <Footer />
    </div>
);

const mapStateToProps = ({ background, viewClass }) => ({
    background,
    viewClass
});

export default connect(mapStateToProps)(App);
