import Link from "next/link";
import "../sample.scss";

export default function Settings() {
  return (
    <div className="home">
      <Link href="/dashboard"> Go to Dashboard</Link>
      <div>This is the Settings page</div>
    </div>
  );
}
