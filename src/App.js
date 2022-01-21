import Card from './components/layout/Card';
import CardContent from './components/CardContent';
import CardDetails from './components/CardDetails';
import CardMeta from './components/CardMeta';
import CardUser from './components/CardUser';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Card>
        <CardContent />
        <CardDetails />
        <CardMeta />
        <CardUser />
      </Card>
    </div>
  );
};

export default App;
