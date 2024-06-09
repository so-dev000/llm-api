import { SupabaseClient } from "@supabase/supabase-js";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LLM } from "../../types/types";
import { SideMenu } from "./sidemenu";
import { Divider, Skeleton } from "@mui/material";
interface Props {
  supabase: SupabaseClient;
}

export const Home = (props: Props) => {
  const { supabase } = props;
  const navigate = useNavigate();
  const [selectedLLM, setSelectedLLM] = useState<LLM>("perplexity");
  const verifyToken = useCallback(async () => {
    const { error } = await supabase.auth.getUser();
    if (error) {
      supabase.auth.signOut().then(() => navigate("/permission-denied"));
    }
  }, []);
  useEffect(() => {
    verifyToken();
  }, []);
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <SideMenu
        selectedLLM={selectedLLM}
        setSelectedLLM={setSelectedLLM}
        supabase={supabase}
      ></SideMenu>
      <Divider
        orientation="horizontal"
        sx={{ backgroundColor: "grey", width: "1px", height: "100vh" }}
      ></Divider>
      <div
        style={{ width: "85%", display: "flex", flexDirection: "column" }}
      ></div>
    </div>
  );
};
