import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routers/Router/Router';

function App() {
  return (
    <div className="max-w-[1440px] h-[660px] m-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
