import Dropdown from './Dropdown';

export default function Savings({ onChange }) {
    const options = [
        { value: 1, label: 'Less than $500' },
        { value: 2, label: '$500-3k' },
        { value: 3, label: '$3k-10k' },
        { value: 4, label: '$10k-50K' },
        { value: 5, label: '$50K - $250K' },
        { value: 6, label: '$250K - $1M' },
        { value: 7, label: '$1M - $2.5M' },
        { value: 8, label: '>$2.5M' },
      ]

      const header = 'Savings'

      const description = 'Consider the money that is in your savings account, retirement funds (401k, IRA, SEP, etc), investments in stocks, bonds, and mutual funds.'

  return (
    <Dropdown options={options} header={header} description={description} onChange={onChange}/>
  );
}


