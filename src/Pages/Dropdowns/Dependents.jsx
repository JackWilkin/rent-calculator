import Dropdown from './Dropdown';

export default function Dependents({ onChange }) {
    const options = [
        { value: 1, label: '7+' },
        { value: 2, label: '6' },
        { value: 3, label: '5' },
        { value: 4, label: '2-4' },
        { value: 5, label: '1' },
      ]

      const header = 'People who rely on income'

      const description = 'Consider the people who rely on you for financial support, including children, elders, or others.'
  return (
    <Dropdown options={options} header={header} description={description} onChange={onChange}/>
  );
}


