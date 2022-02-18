import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import {changeFilter} from '../../redux/actions'
import { TitleFilter, InputFilter } from "./Fiter.styled";

const Filter = () => {
  const dispatch = useDispatch();
   const onChange = e => dispatch(changeFilter(e.target.value));
  return (
    <div>
      <TitleFilter>Find contacts by name</TitleFilter>
      <InputFilter type="text"  onChange={onChange} />
    </div>
  );
};

export default Filter;

