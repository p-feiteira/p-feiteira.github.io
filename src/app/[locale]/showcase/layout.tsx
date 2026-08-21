import { pageMetadata } from "../pageMeta"
import ShowcaseShell from "./ShowcaseShell"

export const generateMetadata = pageMetadata("showcase")

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ShowcaseShell>{children}</ShowcaseShell>
}
