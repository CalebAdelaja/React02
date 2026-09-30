import chefClaudeLogo from './Images/chef-claude-icon.png'

const Header = (app) => {
    console.log(app);
  return (
    <header>
        <img src={chefClaudeLogo} alt="Chef Claud Logo" />
        <h1>Chef Claude</h1>
    </header>
  )
}

// console.log(Header())

export default Header
