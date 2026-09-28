// Server component shell — MUST be here to export the route segment config
export const dynamic = "force-dynamic";

import AdminClient from "./AdminClient";

export default function AdminPage() {
  return <AdminClient />;
}
