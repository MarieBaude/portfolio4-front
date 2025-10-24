/**
 * NavBarBrand Component
 * 
 * Displays the brand/logo section of the navigation bar
 * Contains the name and title of the portfolio owner
 */

interface NavBarBrandProps {
  name: string;
  title: string;
}

export default function NavBarBrand({ name, title }: NavBarBrandProps) {
  return (
    <div class="navText">
      <span>{name}</span>
      <span>{title}</span>
    </div>
  );
}
