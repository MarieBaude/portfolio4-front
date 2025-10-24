/**
 * NavBarHamburger Component
 * 
 * Mobile hamburger menu button for toggling navigation menu
 * Displays hamburger icon and handles click events
 */

interface NavBarHamburgerProps {
  onClick: (event: MouseEvent) => void;
}

export default function NavBarHamburger({ onClick }: NavBarHamburgerProps) {
  return (
    <button class="hamburger" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
  );
}
