import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import {
  FaLocationArrow,
  FaPhone,
  FaWhatsapp,
} from "./../node_modules/react-icons/fa/index.esm";

function Home() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2">
          <div className="flex items-center flex-row justify-around mt-10 mb-10">
            <img
              src="/images/logo-beach.webp"
              className="h-12 sm:h-16 w-[100px]"
              alt="Caretta Beach Logo"
            />
            <a
              href="https://www.carettabeachhotel.com/"
              className="inline-flex items-center px-4 py-2 ml-3 text-sm text-white bg-orange-500 rounded-lg hover:bg-orange-600 h-10"
            >
              Caretta Beach Hotel
            </a>
          </div>
          <div className="border-2 rounded shadow-2xl p-5 sm:h-[500px] h-[auto] m-2 sm:m-10">
            <div className="flex justify-center mb-2">
              <a href="https://www.carettabeachhotel.com/">
                <img
                  src="/images/beachhotel.webp"
                  alt=" "
                  className="w-[500px] h-[250px]"
                />
              </a>
            </div>
            <h1 className="mb-2 text-center font-semibold">Caretta Beach Hotel</h1>
            <div className="mb-2">
              <p>
                301 odadan oluşan Otelimiz, direkt deniz kenarında,palmiye ve
                hurma ağaçlarından oluşan yeşillikler içerisinde bir bahçeye
                sahip, 1 genel mahal, 5 konaklama katından oluşan tek ana
                binadan oluşmaktadır.
              </p>
            </div>

            <div className="flex gap-1 justify-center">
              <FaLocationArrow />
              <p>Nergiz Sokak No:5 Konaklı / Alanya - Türkiye</p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2">
          <div className="flex items-center flex-row justify-around mt-10 mb-10">
            <img
              src="/images/logo-relax.webp"
              className="h-12 sm:h-16 w-[100px]"
              alt="Caretta Relax Logo"
            />
            <a
              href="https://www.carettarelaxhotel.com/"
              className="inline-flex items-center px-4 py-2 ml-3 text-sm text-white bg-orange-500 rounded-lg hover:bg-orange-600 h-10"
            >
              Caretta Relax Hotel
            </a>
          </div>
          <div className="border-2 rounded shadow-2xl p-5 sm:h-[500px] h-[auto] m-2 sm:m-10">
            <div className="flex justify-center mb-2">
              <a href="https://www.carettarelaxhotel.com/">
                <img
                  src="/images/relaxhotel.webp"
                  alt=" "
                  className="w-[500px] h-[250px]"
                />
              </a>
            </div>
            <h1 className="mb-2 text-center font-semibold">Caretta Relax Hotel</h1>
            <div className="mb-2">
              <p>
                299 odadan oluşan otelimiz, denize 150 mt yürüyüş mesafesinde
                olup, kenarında, 1 genel mahal, 5 konaklama katı bulunan 2 ana
                binadan oluşmaktadır.
              </p>
            </div>

            <div className="flex gap-1 justify-center">
              <FaLocationArrow />
              <p>Nergiz Sokak No:1 / A-B Konaklı / Alanya - Türkiye</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-5 mt-5 mb-5">
        <div>
          <div className="flex gap-1">
            <p className="text-center underline">Whatsapp Hattı</p>
            <FaWhatsapp />
          </div>
          <a href="https://wa.me/905330730343">+90 533 073 03 43</a>
        </div>
        <div>
          <div className="flex gap-1">
            <p className="text-center underline">Bilgi ve Rezervasyon</p>
            <FaPhone />
          </div>

          <a href="tel:+02425121028">+90 242 512 10 28</a>
        </div>
      </div>
    </>
  );
}

export default Home;
