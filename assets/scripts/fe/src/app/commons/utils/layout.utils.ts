import { NavigationComponent } from '../../components/partials/navigation/navigation.component';

export function ContentOnly (content) {
  return {
    content : content
  }
}

export function NavigationContent (content) {
  return {
    navigation : NavigationComponent,
    content    : content
  }
}