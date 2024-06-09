import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { LLM } from "../../types/types";
import React, { SetStateAction } from "react";
import { SupabaseClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router";

interface Props {
  selectedLLM: LLM;
  setSelectedLLM: React.Dispatch<SetStateAction<LLM>>;
  supabase: SupabaseClient;
}

export const SideMenu = (props: Props) => {
  const { selectedLLM, setSelectedLLM, supabase } = props;
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "15%",
        height: "100vh",
        marginTop: "2.5vh",
      }}
    >
      <List>
        <ListItem
          disablePadding
          style={{
            backgroundColor: selectedLLM === "perplexity" ? "grey" : "#242424",
          }}
        >
          <ListItemButton onClick={() => setSelectedLLM("perplexity")}>
            <ListItemText style={{ textAlign: "center" }}>
              Perplexity
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          style={{
            backgroundColor: selectedLLM === "gpt" ? "grey" : "#242424",
          }}
        >
          <ListItemButton onClick={() => setSelectedLLM("gpt")}>
            <ListItemText style={{ textAlign: "center" }}>GPT</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          style={{
            backgroundColor: selectedLLM === "deepl" ? "grey" : "#242424",
          }}
        >
          <ListItemButton onClick={() => setSelectedLLM("deepl")}>
            <ListItemText style={{ textAlign: "center" }}>DeepL</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <button
        onClick={() => supabase.auth.signOut().then(() => navigate("/"))}
        style={{
          width: "10%",
          position: "absolute",
          bottom: "5vh",
          left: "2%",
        }}
      >
        Logout
      </button>
    </div>
  );
};
