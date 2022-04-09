import Dropdown from './Dropdown';

export default function Debt({ onChange }) {
    const options = [
        { value: 1, label: 'Debts are significantly larger than assets' },
        { value: 2, label: 'Debts are slightly larger than assets' },
        { value: 3, label: 'Debts and assets are roughly equal' },
        { value: 4, label: 'Assets slightly exceed debt' },
        { value: 5, label: 'Assets significantly exceed debt' },
        { value: 6, label: 'No debt' },
      ]

    const header = 'Debt'

    const description = 'Are your assets larger than your debts? (Not including your mortgage.)'

  return (
    <Dropdown options={options} header={header} description={description} onChange={onChange}/>
  );
}


