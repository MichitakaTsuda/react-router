import { Link, Outlet, useNavigate } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const navigate = useNavigate();
  const onClickDetailA = () => navigate("/page1/detailA");

  return (
    <div>
      <h1>Page1です</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
      <Outlet />
    </div>
  );
};
