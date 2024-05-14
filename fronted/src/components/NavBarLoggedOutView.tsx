import { Button } from "react-bootstrap";

interface NavBarLoggedOutViewProps {
    onSignUpClicked: () => void,
    onLoginClicked: () => void,
}

const NavBarLoggedOutView = ({onSignUpClicked,onLoginClicked} : NavBarLoggedOutViewProps) => {
    return ( 

        <>
            <Button onClick={onSignUpClicked}>회원가입</Button>
            <Button onClick={onLoginClicked}>로그인</Button>

        </>
     );
}
 
export default NavBarLoggedOutView;