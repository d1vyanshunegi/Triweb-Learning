import MainMenu from './MainMenu';

const Layout = (props) => {
  return (
    <div>
        <main><MainMenu /></main>
        {props.children}
    </div>
  )
}

export default Layout
