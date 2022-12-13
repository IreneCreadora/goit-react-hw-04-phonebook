import propTypes from 'prop-types';
import { FilterStyled, FilterInput } from '../Component.styled';

const Filter = ({ title, value, onChange }) => {
  return (
    <FilterStyled>
      <span>{title} </span>
      <FilterInput
        type="text"
        placeholder="enter name or phone number..."
        name="filter"
        value={value}
        onChange={onChange}
      />
    </FilterStyled>
  );
};

Filter.propTypes = {
  title: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Filter;
