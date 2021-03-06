const Logo = () => {
  return (
    <div className="relative w-16 h-16 bg-white rounded-full border-primary border-2">
      <span className="absolute bg-secondary h-6 w-8 top-6 left-4"></span>
      <span className="absolute top-2 left-4 arrow-right-primary"></span>
    </div>
  );
};

export default Logo;
