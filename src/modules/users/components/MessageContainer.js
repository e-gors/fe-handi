import { Box, Button, IconButton } from "@mui/material";
import React from "react";
import Pusher from "pusher-js";
import Http from "../../../utils/Http";
import MyMessageBody from "./MyMessageBody";
import FormField from "../../../components/FormField";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function MessageContainer() {
  const [username, setUsername] = React.useState("username");
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  let allMessages = [];

  React.useEffect(() => {
    const pusher = new Pusher("e478b0c2c3eda85fc974", {
      // app_id: "1583792",
      // key: "e478b0c2c3eda85fc974",
      // secret: "bec27d5a5b359b84e291",
      cluster: "ap1",
    });

    // Register a callback function to handle incoming events
    const channel = pusher.subscribe("chat");

    channel.bind("message", function (data) {
      allMessages.push(data.message);
      setUsername(data.username);
      setMessages(allMessages);
    });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    Http.post("messages", { username, message })
      .then((res) => {
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <Box sx={{ mb: 2 }}>
      <Box
        sx={{
          p: 2,
          position: "relative",
          overflowY: "scroll",
          minHeight: "10vh",
          Maxheight: "80vh",
        }}
      >
        <MyMessageBody messages={messages} username={username} />
      </Box>
      <Box>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
            borderRadius: 2,
            width: "90%",
            height: 100,
            margin: "0 auto",
            position: "relative",
          }}
        >
          <FormField
            multiline
            size="small"
            name="message"
            labe="Message"
            placeholder="Send a message"
            maxRows={3.5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ width: { xs: "60%", md: "70%", lg: "80%" }, p: 1 }}
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
          />
          <Box
            sx={{
              display: "flex",
              mt: 1,
              position: "absolute",
              right: 10,
              bottom: 10,
            }}
          >
            <IconButton sx={{ height: 35 }}>
              <InsertEmoticonIcon />
            </IconButton>
            <IconButton sx={{ height: 35 }}>
              <MoreVertIcon />
            </IconButton>
            <Button variant="contained" onClick={submit} sx={{ height: 35 }}>
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MessageContainer;
