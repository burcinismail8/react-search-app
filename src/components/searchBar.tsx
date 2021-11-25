import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import DATASET from "../store";
import "./searchBar.css";
function changeUrl() {
  let currValue = (
    document.getElementById("combo-box-demo") as HTMLInputElement
  ).value;

  let newurl =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    "?search=" +
    currValue;
  window.history.pushState({ path: newurl }, "", newurl);

  return;
}
export default function SearchBar() {
  return (
    <form>
      <Autocomplete
        disablePortal
        className="search-input"
        id="combo-box-demo"
        options={DATASET}
        onInput={() => changeUrl()}
        renderInput={(params) => (
          <TextField {...params} label="Search" id="input" />
        )}
      />
      <Button variant="contained" className="search-btn">
        SEARCH
      </Button>
    </form>
  );
}
