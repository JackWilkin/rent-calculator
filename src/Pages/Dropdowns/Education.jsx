import Dropdown from './Dropdown';

export default function Education({ onChange }) {
    const options = [
        { value: 1, label: 'no high school diploma or GED' },
        { value: 2, label: 'high school diploma or GED' },
        { value: 3, label: 'Associates Degree or some college' },
        { value: 4, label: 'college degree (BA, BS, RN)' },
        { value: 5, label: 'one advanced degree (that does not significantly impact earning potential)' },
        { value: 6, label: 'one advanced degree (that does significantly impact my earning potential)' },
        { value: 7, label: 'two or more advanced degrees' },
      ]

      const header = 'Level of Education'

      const description = 'Consider your current status. We acknowledge that not all advanced degrees are created equally—some have higher earning potential and social capital than others. We’ve tried to account for this and we also encourage you to think about your degree(s) in terms of social hierarchy (e.g. MDs and JDs often have higher earning potential than MFAs).'

  return (
    <Dropdown options={options} header={header} description={description} onChange={onChange}/>
  );
}


