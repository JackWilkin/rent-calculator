import styled from 'styled-components';
import Select from 'react-select'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 2rem;
  color: #453314;
`;

const Header = styled.h2`
  font-weight: bold;
  color: #503D8A;
  font-family: Anton;
`;

export default function Dropdown({ options, header, description, onChange }) {
  const handleChange = (e) => {
    onChange(header, e.value)
  }

  return (
    <Container>
      <Header>{header}</Header>
      <p>{description}</p>
      <Select options={options} onChange={(e) => handleChange(e)}/>
    </Container>
  );
}


