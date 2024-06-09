import { Session, SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { PermissionDenied } from "../components/permissionDenied";

interface Props {
  supabase: SupabaseClient;
}
export const HomePage = (props: Props) => {
  const { supabase } = props;
  const [session, setSession] = useState<Session>();

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
    return <PermissionDenied></PermissionDenied>;
  } else {
    return <div>home</div>;
  }
};
