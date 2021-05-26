let handlefail = function (err) {
  console.log(err);
};

let appId = "d19b249a8b6448fdb93ddd50037c0605";
let globalStream;

let client = AgoraRTC.createClient({
  mode: "live",
  codec: "h264",
});

client.init(appId, () => console.log("Client Connected"), handlefail);

// end call
function endCall() {
    document.getElementById("phone").onclick;
    // TODO: redirect to end call page
    window.location = "index.html";
    client.leave();
  }

function removeMyVideoStream() {
  globalStream.stop();
}

function removeVideoStream(evt) {
  let stream = evt.stream;
  stream.stop();
  let remDiv = document.getElementById(stream.getId());
  remDiv.parentNode.removeChild(remDiv);
}

function addVideoStream(streamId) {
  console.log();
  let remoteContainer = document.getElementById("remoteStream");
  let streamDiv = document.createElement("div");
  streamDiv.id = streamId;
  streamDiv.style.height = "250px";
  remoteContainer.appendChild(streamDiv);
}

document.getElementById("join").onclick = function () {
  let channelName = document.getElementById("channelName").value;
  let Username = document.getElementById("username").value;

  client.join(null, channelName, Username, () => {
    var localStream = AgoraRTC.createStream({
      video: true,
      audio: true,
    });

    localStream.init(function () {
      localStream.play("SelfStream");
      console.log(`App id: ${appId}\nChannel id: ${channelName}`);
      client.publish(localStream);
    });

    globalStream = localStream;
  });

  client.on("stream-added", function (evt) {
    console.log("Added Stream");
    client.subscribe(evt.stream, handlefail);
  });

  client.on("stream-subscribed", function (evt) {
    console.log("Subscribed Stream");
    let stream = evt.stream;
    addVideoStream(stream.getId());
    stream.play(stream.getId());
  });

  //   when second video leaves
  client.on("peer-leave", function (evt) {
    console.log("Peer has left");
    removeVideoStream(evt);
  });

};
