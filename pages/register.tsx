import Register from '@/components/Register';
import ChangeLanguage from '@/components/ChangeLanguage';

export default function RegisterPage() {
  return (
    <div className='grid gap-6'>
      <div>
        <Register />
      </div>
      <div>
        <ChangeLanguage />
      </div>
    </div>
  );
}
