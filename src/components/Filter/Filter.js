import propTypes from "prop-types";
import { TitleFilter, InputFilter } from "./Fiter.styled";

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <TitleFilter>Find contacts by name</TitleFilter>
      <InputFilter type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
