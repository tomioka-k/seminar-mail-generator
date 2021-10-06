import { Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./App.css";
import CustomerAcquisition from "./components/templates/CustomerAcquisition";
import { Seminar } from "./components/types";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import ApplicationReception from "./components/templates/ApplicationReception";
import Guidunce from "./components/templates/Guidunce";
import Thanks from "./components/templates/Thanks";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const initialstate: Seminar = {
  senderName: "",
  senderAdress: "",
  name: "",
  description: "",
  overview: "",
  overviewDescription: "",
  start: "",
  place: "",
  entryFee: "",
  attendUrl: "",
  deadline: "",
  flyerUrl: "",
  inquiry: "",
  document: "",
};

function App() {
  const [seminar, setSeminar] = useState(initialstate);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
            {/* global */}
            <TextField
              fullWidth
              label="送信者名"
              type="text"
              name="senderName"
              variant="standard"
              value={seminar.senderName}
              onChange={handleInuptChange}
            />
            <TextField
              fullWidth
              label="送信元アドレス"
              type="text"
              name="senderAdress"
              variant="standard"
              value={seminar.senderAdress}
              onChange={handleInuptChange}
            />
            <TextField
              fullWidth
              label="セミナー名"
              type="text"
              name="name"
              variant="standard"
              value={seminar.name}
              onChange={handleInuptChange}
            />
            {value === 0 ? (
              <TextField
                fullWidth
                label="申込フォームURL"
                type="text"
                name="attendUrl"
                variant="standard"
                value={seminar.attendUrl}
                onChange={handleInuptChange}
              />
            ) : null}
            {value === 0 ? (
              <TextField
                fullWidth
                label="セミナー説明文"
                multiline
                type="text"
                name="description"
                variant="standard"
                value={seminar.description}
                onChange={handleInuptChange}
              />
            ) : null}
            {value !== 3 ? (
              <TextField
                fullWidth
                multiline
                label="セミナー概要"
                type="text"
                name="overview"
                variant="standard"
                value={seminar.overview}
                onChange={handleInuptChange}
              />
            ) : null}
            {value === 0 ? (
              <TextField
                fullWidth
                multiline
                label="セミナー概要説明"
                type="text"
                name="overviewDescription"
                variant="standard"
                value={seminar.overviewDescription}
                onChange={handleInuptChange}
              />
            ) : null}

            {value !== 3 ? (
              <>
                <TextField
                  fullWidth
                  label="開催日時"
                  type="text"
                  name="start"
                  variant="standard"
                  value={seminar.start}
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
                <TextField
                  fullWidth
                  multiline
                  label="場所"
                  type="text"
                  name="place"
                  variant="standard"
                  value={seminar.place}
                  onChange={handleInuptChange}
                />
              </>
            ) : null}
            {value === 0 ? (
              <TextField
                fullWidth
                label="申込締切"
                type="text"
                name="deadline"
                variant="standard"
                value={seminar.deadline}
                onChange={handleInuptChange}
              />
            ) : null}
            {value === 2 ? (
              <TextField
                fullWidth
                multiline
                label="講義資料"
                type="text"
                name="document"
                variant="standard"
                value={seminar.document}
                onChange={handleInuptChange}
              />
            ) : null}
            {value === 0 ? (
              <TextField
                fullWidth
                label="詳細URL"
                type="text"
                name="flyerUrl"
                variant="standard"
                value={seminar.flyerUrl}
                onChange={handleInuptChange}
              />
            ) : null}
            <TextField
              fullWidth
              multiline
              label="お問合せ"
              type="text"
              name="inquiry"
              variant="standard"
              value={seminar.inquiry}
              onChange={handleInuptChange}
            />
          </Grid>
          <Grid item xs={7}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="集客" {...a11yProps(0)} />
                  <Tab label="申込受付" {...a11yProps(1)} />
                  <Tab label="前日案内" {...a11yProps(2)} />
                  <Tab label="お礼" {...a11yProps(3)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <CustomerAcquisition seminar={seminar} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <ApplicationReception seminar={seminar} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Guidunce seminar={seminar} />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Thanks seminar={seminar} />
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
