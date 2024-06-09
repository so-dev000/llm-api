import { SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { PermissionDenied } from "../components/permissionDenied";
import { Home } from "../components/home";

interface Props {
  supabase: SupabaseClient;
}

type LoginState = "inprogress" | "success" | "denied";
export const HomePage = (props: Props) => {
  const { supabase } = props;
  const [loginState, setLoginState] = useState<LoginState>();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      session ? setLoginState("success") : setLoginState("denied");
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      session ? setLoginState("success") : setLoginState("denied");
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loginState == "denied") {
    return <PermissionDenied></PermissionDenied>;
  } else if (loginState == "success") {
    return <Home supabase={supabase}></Home>;
  } else {
    return <></>;
  }
};
