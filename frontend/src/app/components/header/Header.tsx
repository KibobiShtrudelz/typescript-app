import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import styled from "styled-components";

import FallbackComponent from "../fallbackComponent";
import SignIn from "../../components/register";
import BsModal from "../common/Modal";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import authFormStore from "../../redux/authFormStore";
// import userStore from "../../redux/userStore";
import routes from "../../../routes";

import logo from "../../../images/logo-react-js.png";

export const Header = (): JSX.Element => {
  const { user, isAuthFormVisible } = useAppSelector((state) => ({
    user: state.user,
    isAuthFormVisible: state.authForm.isVisible,
  }));

  const dispatch = useAppDispatch();

  const cookies = new Cookies();

  return (
    <>
      <StyledHeader className="HEADER-WRAP container-fluid d-flex flex-sm-column">
        <Row className="row">
          <LCol className="LEFT-COL col d-flex justify-content-start align-items-center">
            <ImgWrap>
              <Link to={routes.public.root}>
                <StyledImg src={logo} alt="logo" />
              </Link>
            </ImgWrap>
          </LCol>

          <RCol className="RIGHT-COL col d-flex justify-content-end align-items-center">
            <ButtonWrap>
              <div className="d-flex justify-content-end">
                {user?.data?.id ? (
                  <button
                    className="log-out-btn"
                    type="button"
                    onClick={() => {
                      // TODO: Research why it doesn't work'
                      // dispatch(userStore.actions.logout());
                      cookies.remove("jwt");
                      window.location.reload();
                    }}
                  >
                    Log out
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => {
                      dispatch(authFormStore.actions.toggleAuthForm());
                    }}
                  >
                    Sign in
                  </button>
                )}
              </div>
            </ButtonWrap>
          </RCol>
        </Row>
      </StyledHeader>

      {isAuthFormVisible && (
        <BsModal
          show={isAuthFormVisible}
          onHide={() => dispatch(authFormStore.actions.toggleAuthForm())}
          body={
            <ErrorBoundary FallbackComponent={FallbackComponent}>
              <SignIn
                hide={() => dispatch(authFormStore.actions.toggleAuthForm())}
              />
            </ErrorBoundary>
          }
        />
      )}
    </>
  );
};

const StyledHeader = styled.header`
  position: relative;
  z-index: 10;
  padding: 10px 0;
  box-shadow: 0 0 10px 0 #303030;
`;

const ImgWrap = styled.div``;

const StyledImg = styled.img`
  width: 120px;
`;

const ButtonWrap = styled.div`
  margin-right: 20px;

  & > div {
    & > button.log-out-btn {
      color: ${({ theme }) => theme.colors.blue};
      background-color: transparent;
      text-decoration: underline;
      outline: none;
      border: none;
    }
  }
`;

const Row = styled.div`
  width: 100vw;
`;

const LCol = styled.div``;

const RCol = styled.div``;
