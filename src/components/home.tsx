import { css } from "@emotion/react";
import { SupabaseClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
interface Props {
  supabase: SupabaseClient;
}

export const Home = (props: Props) => {
  const { supabase } = props;
  const navigate = useNavigate();
  return (
    <div css={containerStyle}>
      <h1>home</h1>
      <button
        onClick={() => {
          supabase.auth.signOut().then(() => navigate("/"));
        }}
      >
        Logout
      </button>
    </div>
  );
};

const containerStyle = css({
  display: "flex",
});
