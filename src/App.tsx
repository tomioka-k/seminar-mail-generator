import { Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import { Seminar } from "./components/types";

const initialstate: Seminar = {
  name: "",
  description: "",
  linkUrl: "",
  overview: "",
  overviewDescription: "",
  start: "",
  place: "",
  entryFee: "",
  attendUrl: "",
  deadline: "",
  flyerUrl: "",
  inquiry: "",
};

function App() {
  const [seminar, setSeminar] = useState(initialstate);

  const handleInuptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key: string = e.target.name;
    const value = e.target.value;
    setSeminar({ ...seminar, [key]: value });
  };

  return (
    <div className="App">
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={5}>
            <TextField
              fullWidth
              label="セミナー名"
              type="text"
              name="name"
              variant="standard"
              value={seminar.name}
              onChange={handleInuptChange}
            />
            <TextField
              fullWidth
              label="説明文"
              multiline
              type="text"
              name="description"
              variant="standard"
              value={seminar.description}
              onChange={handleInuptChange}
            />
            <TextField
              fullWidth
              label="リンクURL"
              type="text"
              name="linkUrl"
              variant="standard"
              value={seminar.linkUrl}
              onChange={handleInuptChange}
            />
            <TextField
              fullWidth
              label="概要"
              type="text"
              name="overview"
              variant="standard"
              value={seminar.overview}
              onChange={handleInuptChange}
            />
            <TextField
              fullWidth
              multiline
              label="概要説明"
              type="text"
              name="overviewDescription"
              variant="standard"
              value={seminar.overviewDescription}
              onChange={handleInuptChange}
            />
            <TextField
              fullWidth
              label="日時"
              type="text"
              name="start"
              variant="standard"
              value={seminar.start}
              onChange={handleInuptChange}
            />
            <TextField
              fullWidth
              label="会場"
              type="text"
              name="place"
              variant="standard"
              value={seminar.place}
              onChange={handleInuptChange}
            />
            <TextField
              fullWidth
              label="費用"
              type="text"
              name="entryFee"
              variant="standard"
              value={seminar.entryFee}
              onChange={handleInuptChange}
            />
          </Grid>
          <Grid item xs={7}>
            <p>
              表題： <br />
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              <br />
              ┏━┳┓
              <br />
              ┣┳┫┃ {seminar.name ? seminar.name : "[セミナー名]"} <br />
              ┃┣┻┫ {seminar.linkUrl} <br />
              ┗┻━┛ <br />
              ━━━━━━━━━━━━━━━━━━━田島ルーフィング株式会社 ━━━
              <br />
              <br />
              {seminar.description}
              <br />
              <br />
              ┏┓━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              <br />
              ┗□ セミナー概要
              <br />
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              <br />
              {seminar.overview}
              <br />
              {seminar.overviewDescription}
              <br />
              <br />
              <br />
              <li>日時：{seminar.start}</li>
              <br />
              <li>会場：{seminar.place}</li>
              <br />
              <li>費用：{seminar.entryFee}</li>
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
