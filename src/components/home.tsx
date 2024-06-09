import { css } from "@emotion/react";
import { SupabaseClient } from "@supabase/supabase-js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
interface Props {
  supabase: SupabaseClient;
}

export const Home = (props: Props) => {
  const { supabase } = props;
  const navigate = useNavigate();
  const validateToken = async () => {
    const { error } = await supabase.auth.getUser();
    if (error) {
      supabase.auth.signOut().then(() => navigate("/permission-denied"));
    }
  };
  useEffect(() => {
    validateToken();
  }, []);
  return (
    <div css={containerStyle}>
      <h1>home</h1>
      <button onClick={() => supabase.auth.signOut().then(() => navigate("/"))}>
        Logout
      </button>
    </div>
  );
};

const containerStyle = css({
  display: "flex",
});
