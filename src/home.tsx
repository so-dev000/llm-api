import { Session, SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  supabase: SupabaseClient;
}
export const HomePage = (props: Props) => {
  const { supabase } = props;
  const [session, setSession] = useState<Session>();
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      session && setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      session && setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  if (!session) {
    return <div onClick={() => navigate("/")}>ログインページへ</div>;
  } else {
    return <div>home</div>;
  }
};
