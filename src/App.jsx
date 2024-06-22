function Header({children}) {

  return (
    <header className="bg-blue-800">
      <nav className="mx-auto flex items-center p-6 shadow-md">
        {children}
        

      </nav>

    </header>
  )

}

function HeaderLink({href, children}) {
  return (
    <a href={href} className="text-xl font-semibold leading-6 text-white ml-5">{children}</a>
  )
}

function App() {
  

  return (
    
    <>
    <Header>
    <HeaderLink href="https://company">Company</HeaderLink>
    <HeaderLink href="https://marketplace">Marketplace</HeaderLink>
    <HeaderLink href="https://teste">Teste</HeaderLink>
    </Header>
    </>
    
  );
}































export default App
