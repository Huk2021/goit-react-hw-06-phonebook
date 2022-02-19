import { useSelector, useDispatch } from "react-redux";
import {getFilter} from '../../redux/selector'
import {changeFilter} from '../../redux/actions'
import { TitleFilter, InputFilter } from "./Fiter.styled";

const Filter = () => {
  const dispatch = useDispatch();
   const value = useSelector(getFilter);
  return (
    <div>
      <TitleFilter>Find contacts by name</TitleFilter>
      <InputFilter type="text"  value={value} onChange={e => dispatch(changeFilter(e.target.value))} />
    </div>
  );
};

export default Filter;

