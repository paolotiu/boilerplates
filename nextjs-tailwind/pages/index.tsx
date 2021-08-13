import Hello from '@/components/Hello';
import MainLayout from '@/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div className="text-3xl">
        <p>Start Making Something!</p>
        <div className="pt-5">
          <Hello />
        </div>
      </div>
    </MainLayout>
  );
}
