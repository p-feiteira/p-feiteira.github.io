import { pageMetadata } from "../pageMeta"

export const generateMetadata = pageMetadata("services")

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
