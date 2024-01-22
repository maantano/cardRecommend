import { ReactComponent as ArrowIcon } from "../../../assets/icons/ic_arrow.svg";

const SlideButton = ({ direction, onClick }) => {
  return (
    <button onClick={onClick} className={`btn-slide-control btn-${direction}`}>
      <ArrowIcon width="16" height="16" fill="#333" />
    </button>
  );
};
export default SlideButton;
