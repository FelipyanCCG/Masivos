const Layout = ({ children, title }) => {
 
  return (
    <div className='mt-40 mb-20 flex flex-col container mx-auto'>
      <div className={`flex flex-col mx-auto overflow-y-auto scrollbar-hide` }>
        <h1 className={`text-4xl font-bold text-[#0096C8] mb-12 text-center`}>
          {title}
        </h1>
        {children}
      </div>
    </div>
  )
}

export { Layout }