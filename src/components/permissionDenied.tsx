import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

export const PermissionDenied = () => {
  const navigate = useNavigate();

  return (
    <div css={containerStyle}>
      <h1>アクセス拒否</h1>
      <div onClick={() => navigate("/")}>ログインページへ</div>;
    </div>
  );
};

const containerStyle = css({
  display: "flex",
  flexDirection: "row",
});
