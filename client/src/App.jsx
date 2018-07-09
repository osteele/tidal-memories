import './site.scss';
import Tides from './Tides';

const App = ({ background }) => (
    <div className="app">
        <main className="ui container">
            <Tides />
        </main>
        <Footer />
    </div>
);

const Footer = () => (
    <footer className="ui vertical footer segment">
        <div className="ui center aligned container">
            View on{' '}
            <a href="https://github.com/osteele/tidal-memories">GitHub</a>
        </div>
    </footer>
);

export default App;
