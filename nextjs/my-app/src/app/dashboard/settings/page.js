import Link from "next/link";

export default function Settings() {
  return (
    <div>
      <Link href="/dashboard"> Go to Dashboard</Link>
      <div>This is the Settings page</div>
    </div>
  );
}
