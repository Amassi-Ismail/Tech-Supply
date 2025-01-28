import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';
import Loading from './Loading';

export default function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    if (loading) return <Loading />;
    if (!user) {
      router.push('/auth');
      return null;
    }
    return <Component {...props} />;
  };
}