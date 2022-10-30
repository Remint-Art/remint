export default function Header() {
  return (
    <div className='navbar bg-base-100' style={{ backgroundColor: '#000000' }}>
      <div className='flex-1 justify-end' style={{ color: '#fff' }}>
        <a
          rel='noreferrer'
          className='text-sm ml-10 mt-1 font-medium'
          href='/gallery'
        >
          SALE
        </a>
        <a
          rel='noreferrer'
          className='text-sm ml-10 mr-10 mt-1 font-medium break-words'
          href='/what-we-do'
        >
          HOW IT WORKS
        </a>
      </div>
    </div>
  );
}
