import "../styles/global.css";

export default function RootLayout(props) {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  );
}
