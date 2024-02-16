import { connect } from "react-redux";

function Header() {
  return <div>header</div>;
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(Header);
