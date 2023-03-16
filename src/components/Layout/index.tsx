import { useState, useEffect } from 'react'
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { SContentSide, SLayout, SMain } from "./styles";

interface LayoutProps {
  children: React.ReactElement
}

export function Layout({ children }: LayoutProps) {
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(true)

  useEffect(() => {
    
    function handleScroll() {
      const screenWidth = window.innerWidth
      if(screenWidth <= 768){
        setIsSidebarActive(false)
      } else {
        setIsSidebarActive(true)
      }
    }

    window.onresize = () => handleScroll()
  },[])
  return(
    <SLayout>
      {isSidebarActive ? <Sidebar sidebar={isSidebarActive} setSidebarActive={setIsSidebarActive}/> : null }
      <SContentSide>
        <Header sidebar={isSidebarActive} setSidebarActive={setIsSidebarActive}/>
        <SMain>{children}</SMain>
      </SContentSide>
    </SLayout>
  )
}