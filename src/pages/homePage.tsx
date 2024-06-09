import { SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Home } from "../components/home";
import { useNavigate } from "react-router-dom";

interface Props {
  supabase: SupabaseClient;
}

type LoginState = "inprogress" | "success" | "denied";
export const HomePage = (props: Props) => {
  const { supabase } = props;
  const [loginState, setLoginState] = useState<LoginState>();
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setLoginState("success");
      } else {
        setLoginState("denied");
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setLoginState("success");
      } else {
        setLoginState("denied");
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loginState == "denied") {
    navigate("/permission-denied");
  } else if (loginState == "success") {
    return <Home supabase={supabase}></Home>;
  } else {
    return <></>;
  }
};
