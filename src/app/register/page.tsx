import Logo from "@/components/Logo";
import Comments from "@/components/Comments";
import SocialMedia from "@/components/SocialMedia";
import RegisterForm from "@/components/RegisterForm";

export const metadata = {
  title: "Register page",
  description: "Generated for Register page",
};

import "./style.scss";

const Register: React.FC = () => {
  const socialMediaUrls = {
    facebook: "https://www.facebook.com/emre.kabaca",
    twitter: "https://twitter.com/EmreKabaca",
    instagram: "https://www.instagram.com/kabacaemre",
    github: "https://github.com/kabacaemre",
    linkedin: "https://www.linkedin.com/in/emre-kabaca",
  };
  const comments = [
    {
      text: "Biz, Türkiye’nin önde gelen giyim markalarından biri olmak için çıktığımız e-ticaret yolculuğunda adımlarımızı WorqCompany ile güçlendirdik. 5 ayda 3 kez gelir paylaşımlı E-Ticaret Finansmanı kullanımı ile Trendyol ve Hepsiburada mağazamız %40 oranında büyüdü.",
      user: "Ercan Gök",
      userTitle: "For You Moda / Kurucu",
    },
    {
      text: "Pazaryerimi büyütmem için kullandığım gelir paylaşımlı E-Ticaret Finansmanı ile aylık ciro ortalamamı 3’e katlayarak 1,5 milyon ₺’ye çıkardım!",
      user: "Mikail Can",
      userTitle: "Cindiy / Kurucu",
    },
    {
      text: "Tecrübeleriyle yolumu aydınlatan WorqCompany ekibiyle çıktığım bu yolculukta ihtiyacım olduğu an sağladıkları gelir paylaşımlı E-Ticaret Finansmanını 2 defa kullanarak, birlikte pazaryerimin sürdürülebilirliği hatta büyümesi yönünde önemli adımlar attık.",
      user: "Ökkeş Ağca",
      userTitle: "Fiyakalı Ürünler / Kurucu",
    },
  ];
  return (
    <div className="registerPage">
      <div className="aside">
        <Logo />
        <div>
          <Comments comments={comments} />
          <SocialMedia
            facebook={socialMediaUrls.facebook}
            twitter={socialMediaUrls.twitter}
            instagram={socialMediaUrls.instagram}
            github={socialMediaUrls.github}
            linkedin={socialMediaUrls.linkedin}
          />
        </div>
      </div>
      <div className="content">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
