import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';
import { Button } from 'baseui/button';

const AppBar = () => {
  const redirectToGithub = () => {
    window.open('https://github.com/khaifahmi99/health-check-api', '_blank', 'noopener,noreferrer')
  }

  return (
    <HeaderNavigation>
      <NavigationList $align={ALIGN.left}>
        <NavigationItem style={{ color: 'white' }}>Khai's Ubuntu Server</NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.center} />
      <NavigationList $align={ALIGN.right}>
        <NavigationItem>
          <Button onClick={redirectToGithub}>GitHub</Button>
        </NavigationItem>
      </NavigationList>
    </HeaderNavigation>
  );
}

export default AppBar;