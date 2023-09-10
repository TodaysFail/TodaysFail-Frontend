import Button from '@components/atoms/Button';

export default function Home() {
  const handleClick = () => {
    console.log('클릭');
  };
  return (
    <div>
      <Button onClick={handleClick}>버튼</Button>
    </div>
  );
}
