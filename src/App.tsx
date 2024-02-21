import { EachLoop } from './components/EachLoop'

interface Option {
  name: string;
  value: string;
}

function App() {
  const options: Option[] = [
    {
      name: 'Option 1',
      value: 'option1',
    },
    {
      name: 'Option 2',
      value: 'option2',
    },
  ];
  return (
    <>
       <div>
        <EachLoop of={options} render={(item, index) => <div key={index}>{`${index}: ${item.name}`}</div>} />
      </div>
    </>
  )
}

export default App
