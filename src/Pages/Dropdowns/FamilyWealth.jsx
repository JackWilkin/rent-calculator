import Dropdown from './Dropdown';

export default function FamilyWealth({ onChange }) {
    const options = [
        { value: 1, label: 'none/inherit debt' },
        { value: 2, label: 'up to $50K' },
        { value: 3, label: '$50K - $100K' },
        { value: 4, label: '$100K - $500K' },
        { value: 5, label: '$500K - $2M' },
        { value: 8, label: '$2M - $5M' },
        { value: 10, label: '$5M - $10M' },
        { value: 11, label: 'Over $10M' },
      ]

      const header = 'Family Wealth'

      const description = 'Do you have access to, or expect to inherit, money from family members?  This could include: money, gifts, stocks, land and property, trusts, etc. If you don’t know, do your best to guess.'

  return (
    <Dropdown options={options} header={header} description={description} onChange={onChange}/>
  );
}


