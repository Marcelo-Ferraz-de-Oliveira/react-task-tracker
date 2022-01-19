import PropTypes from 'prop-types'


const Header = ({title}) => {
  return (
    <header>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        <h1>{title}</h1>
        <button className="btn btn-primary">Add</button>

    </header>
  )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in js
// const headingStyle = {
//     color: 'red',
//     background: 'black',
// }

export default Header
    