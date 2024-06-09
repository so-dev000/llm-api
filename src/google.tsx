import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function Google() {
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_PROJECT_URL,
    import.meta.env.VITE_SUPABASE_API_KEY
  );

  return (
    <>
      <div>
        <div>
          <title>Google認証画面</title>
          <link rel="icon" href="/favicon.ico" />
        </div>
        <main>
          <div>
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              providers={["google"]}
            />
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
}
