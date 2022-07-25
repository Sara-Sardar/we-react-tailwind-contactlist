import './global.css';
import PageTitle from './components/PageTitle';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className='container bg-amber-200 mx-auto flex flex-col items-center justify-center min-h-screen' >
      <PageTitle title='Favrote Contacts' />
      <ContactList />
    </div>
  );
}

export default App;
