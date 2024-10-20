import './App.css';
import Header from "./Header";
import Technologies from "./Technologies";
import ServiceWorker from "./serviceWorker";


const App = () => {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fidbi.ru%2Fblogs%2Fblog%2Fweb-dizayn-i-koding&psig=AOvVaw14EXtWZbluP7TaAgesmytQ&ust=1729476359335000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOi0v6Lwm4kDFQAAAAAdAAAAABAE" alt="code something"/>
            </header>
            <nav className={'nav'}></nav>
            <div className={'content'}>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgb.ru%2Fblog%2Fkoding%2F&psig=AOvVaw14EXtWZbluP7TaAgesmytQ&ust=1729476359335000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOi0v6Lwm4kDFQAAAAAdAAAAABAJ" alt="coding hands"/>
            </div>
            
            {/*<Header/>*/}
            {/*<Technologies/>*/}
            {/*<ServiceWorker/>*/}
        </div>
    );
}

export default App;