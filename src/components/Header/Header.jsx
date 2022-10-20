import { Button } from "../common/Button";
import { Logo } from "./components/Logo/Logo";
import "./Header.css";
export const Header = function () {
  return (
    <div className="header">
      <Logo />
      <div className="user">
        <p>Dave</p>
        <Button>Logout</Button>
      </div>
    </div>
  );
};
