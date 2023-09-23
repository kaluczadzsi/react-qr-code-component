import logo from '../../src/assets/qr-code.png';

const Card = () => {
  return (
    <figure className="transition: duration-300 ease-in-out hover:-translate-y-4 hover:shadow-2xl shadow-md max-w-[17.5rem] rounded-xl bg-white font-outfit p-[0.9rem]">
      <img className="rounded-lg mb-1" src={logo} alt="qr code logo" />
      <div className="flex flex-col gap-3 text-center my-2">
        <h1 className="font-bold text-dark-blue text-[1.3rem]">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-grayish-blue text-[15px]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </figure>
  );
};

export default Card;
