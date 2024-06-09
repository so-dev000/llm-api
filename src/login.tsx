import { SupabaseClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

interface Props {
  supabase: SupabaseClient;
}
export const LoginPage = (props: Props) => {
  const { supabase } = props;
  return (
    <>
      <h1>LLM API</h1>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={["google"]}
        onlyThirdPartyProviders
        redirectTo={import.meta.env.VITE_LOGIN_REDIRECT_URL}
      />
    </>
  );
};
