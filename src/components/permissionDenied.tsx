import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

export const PermissionDenied = () => {
  const navigate = useNavigate();

  return (
    <div css={containerStyle}>
      <h1>Permission Denied</h1>
      <button onClick={() => navigate("/")}>Go Back to Login Page</button>
    </div>
  );
};

const containerStyle = css({
  display: "flex",
  flexDirection: "row",
});
