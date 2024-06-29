export default function DashboardLayout(props) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>Header</nav>

      {props.children}
    </section>
  );
}
