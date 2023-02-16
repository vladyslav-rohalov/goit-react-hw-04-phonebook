import { Input, Label } from './Phonebook.styled';
import PropTypes from 'prop-types';

export default function Filter({ filter, onFilterChange }) {
  return (
    <Label>
      Find contacts by name
      <Input value={filter} onChange={onFilterChange} type="text"></Input>
    </Label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};
