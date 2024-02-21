import { SocialMediaIcons } from "../components/SocialMediaIcon";

export function Footer()  {
  return (
    <footer className="h-64 bg-blue pt-10">
      <div className="w-10/12 mx-auto flex justify-center">   
        <SocialMediaIcons />
      </div> 
      <div className="md:flex justify-center text-center ">
        <p className="font-playfair font-semibold text-2xl text-red">
          CinLo
        </p>   
      </div>
    </footer>
  );
}

