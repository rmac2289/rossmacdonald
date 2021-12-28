export default function Index() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        paddingTop: 200,
        borderLeft: "1px solid grey",
        borderRight: "1px solid grey",
        height: "100vh",
        position: "relative",
        marginLeft: 50,
        marginRight: 50,
        background: "rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          width: 400,
          height: 50,
          marginLeft: -200,
          left: "50%",
          borderBottom: "1px solid grey",
          borderBottomLeftRadius: "50%",
          borderBottomRightRadius: "50%",
          background: "white",
        }}
      ></div>
      <div style={{ width: 400, padding: 25 }}>
        <div
          style={{
            fontFamily: "Roboto",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            color: "white",
            background: "red",
            padding: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ padding: 0, margin: 0 }}>Hello, I'm</h1>
        </div>
        <div
          style={{
            fontFamily: "Permanent Marker",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            border: "2px solid red",
            borderTop: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "white",
          }}
        >
          <h1 style={{ padding: 0, margin: 0, marginTop: 20 }}>
            Ross MacDonald
          </h1>
          <br />
          <h2 style={{ marginTop: 5 }}>Full Stack Software Engineer</h2>
        </div>
      </div>
      <div style={{ width: 250, padding: 25 }}>
        <div
          style={{
            width: 250,
            height: 300,
            border: "1px solid grey",
            borderRadius: "1%",
            borderBottomRightRadius: "15%",
            borderBottomLeftRadius: "15%",
            borderTop: "10px inset grey",
            background: "white",
          }}
        ></div>
      </div>
    </div>
  );
}
