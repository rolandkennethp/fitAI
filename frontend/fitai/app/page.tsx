import { redirect } from "next/navigation";

// TODO: replace with the real Landing Page screen when its screenshot comes
// in. For now, "/" just sends people to login (middleware will bounce
// already-authenticated users straight to /dashboard).
export default function RootPage() {
  redirect("/login");
}
