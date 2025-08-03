
import "./Header.css";

const Header = () => {
  const today = new Date();
  const date = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="header">
      <h1 className="header-title">{date}</h1>
    </div>
  );
};

export default Header;
