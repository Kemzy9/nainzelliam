import Button from './Components/Button';

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex gap-x-4">
        <Button>Button</Button>
        <Button className="bg-red-600">Button</Button>
        <Button className="bg-green-600">Button</Button>
        <Button className="bg-purple-600">Button</Button>
        <Button className="bg-cyan-600">Button</Button>
      </div>
    </div>
  );
}

export default App;