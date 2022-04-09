import Dropdown from './Dropdown';

export default function Housing({ onChange }) {
    const options = [
        { value: 1, label: 'Housing insecure' },
        { value: 2, label: 'Rent' },
        { value: 3, label: 'Free rent/no housing costs' },
        { value: 4, label: 'Own home with mortgage' },
        { value: 5, label: 'Own one home outright or own two residences with mortgages' },
        { value: 6, label: 'Own multiple properties with mortgages' },
        { value: 8, label: 'Own multiple properties outright (with no mortgages)' },
      ]

      const header = 'Housing'

      const description = 'Consider your current living situation, including whether you rent or own'

  return (
    <Dropdown options={options} header={header} description={description} onChange={onChange}/>
  );
}


