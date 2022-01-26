import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const iconAdd = "add.png";
  return (
    <header className="d-flex flex-row justify-content-between py-2">
      <Button
        classStr={`btn  ${showAdd ? "btn-success " : "btn-danger "}`}
        text={showAdd ? "Close" : "Add"}
        icon={iconAdd}
        onClick={onAdd}
      />
      <h1 className="">{title}</h1>
      <div className=""></div>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in js
// const headingStyle = {
//     color: 'red',
//     background: 'black',
// }

export default Header;
