import { Button } from '@/components/ui/button';

// has all the sections rendered here
export default function Home() {
  return (
    <div>
      <h1 className='font-switzer'>Welcome to Lendx</h1>
      <Button className='bg-blue-500 text-white font-switzer'>
        Get Started
      </Button>
    </div>
  );
}
