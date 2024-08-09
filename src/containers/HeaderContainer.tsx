import { bindActionCreators } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { AppDispatch } from "../store/store";
import { toggleTheme } from "../store/theme/themeReducer";
import { connect } from "react-redux";
import Header from "../components/Header";

// TYPES
type TMapStateToPropsFn = (state: RootState) => {
  isDarkTheme: boolean;
};

type TMapDispatchToPropsFn = (dispatch: AppDispatch) => {
  toggleTheme: typeof toggleTheme;
};

// exporting props
export type THeaderContainerProps = ReturnType<TMapStateToPropsFn> & ReturnType<TMapDispatchToPropsFn>;

// MAPPING STATE TO PROPS
const mapStateToProps: TMapStateToPropsFn = (state) => {
  return {
    isDarkTheme: state.themeSlice.isDarkTheme,
  };
};

const mapDispatchToProps: TMapDispatchToPropsFn = (dispatch) => {
  return bindActionCreators({ toggleTheme }, dispatch);
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

// exporting the container
export default HeaderContainer;