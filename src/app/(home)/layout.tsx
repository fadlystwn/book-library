import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main>{children}</main>
      </div>
    </>
  )
}