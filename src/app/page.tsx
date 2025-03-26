import { ColorSchemeToggle } from '../components/features/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/features/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
