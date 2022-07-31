import Dropdown from './Dropdown';

export default function HouseholdIncome({ onChange }) {
    const options = [
        { value: 1, label: 'Less than $30,000' },
        { value: 2, label: '$30,000 - $60,000' },
        { value: 3, label: '$60,000 - $100,000' },
        { value: 4, label: '$100,000 - $150,000' },
        { value: 5, label: '$150,000 - $200,000' },
        { value: 7, label: '$200,000 - $300,000' },
        { value: 9, label: '$300,000 - $500,000' },
        { value: 11, label: 'More than $500,000' },
      ]

      const header = 'Household Income'

      const description = 'Consider all sources of income including, but not limited to: jobs, gigs, rental income, dividends, commissions, money you currently get from family members etc.'
  return (
    <Dropdown options={options} header={header} description={description} onChange={onChange}/>
  );
}


