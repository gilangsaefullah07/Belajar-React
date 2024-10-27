import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMedia from "../Elements/SocialMedia";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import PageFooter from "../Elements/Information/PageFooter";
import Information from "../Elements/Information";
import Contact from "../Elements/Contact";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col gap-4 p-4 bg-white border-b-2 border-gray-200">
        <div className="flex flex-col md:flex-row justify-between w-full gap-4">
          <Contact></Contact>
          <Information title="Kategori">
            <PageFooter>Digital & Teknologi</PageFooter>
            <PageFooter>Pemasaran</PageFooter>
            <PageFooter>Manajemen Bisnis</PageFooter>
            <PageFooter>Pengembangan Diri</PageFooter>
            <PageFooter>Desain</PageFooter>
          </Information>
          <Information title="Perusahaan">
            <PageFooter>Tentang Kami</PageFooter>
            <PageFooter>FAQ</PageFooter>
            <PageFooter>Kebijakan Privasi</PageFooter>
            <PageFooter>Ketentuan Layanan</PageFooter>
            <PageFooter>Bantuan</PageFooter>
          </Information>
          <Information title="Perusahaan">
            <PageFooter>Tips Sukses</PageFooter>
            <PageFooter>BLog</PageFooter>
          </Information>
        </div>
        <div class="h-0.5 bg-gray-300 w-full"></div>
        <div class="flex flex-col gap-4 md:flex-row md:justify-between">
          <p class="text-gray-400 w-full">
            @2023 Gerobak Sayur All Rights Reserved.
          </p>
          <div class="flex flex-row gap-2">
            <SocialMedia>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="flex h-[24px] w-[24px] justify-center items-center"
              />
            </SocialMedia>
            <SocialMedia>
              <FontAwesomeIcon
                icon={faFacebook}
                className="flex h-[24px] w-[24px] justify-center items-center"
              />
            </SocialMedia>
            <SocialMedia>
              <FontAwesomeIcon
                icon={faInstagram}
                className="flex h-[24px] w-[24px] justify-center items-center"
              />
            </SocialMedia>
            <SocialMedia>
              <FontAwesomeIcon
                icon={faTwitter}
                className="flex h-[24px] w-[24px] justify-center items-center"
              />
            </SocialMedia>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
