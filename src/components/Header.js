import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    alert("Click");
  };
  const iconAdd = "add.png";
  return (
    <header className="d-flex flex-row justify-content-between py-2">
      <Button
        classStr="btn btn-light text-secondary"
        text="Add"
        icon={iconAdd}
        onClick={onClick}
      />
      <h1 className="">{title}</h1>
      <div className="invisible"></div>
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
