// import React from 'react';

import { useCallback, useEffect, useState } from 'react';
import { icons, images } from '../assets/assets';

const HeroCarousal = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [heroImage, setHeroImage] = useState(1);

  const handleNext = useCallback(() => {
    if (heroImage == 1) {
      setHeroImage(2);
    } else if (heroImage == 2) {
      setHeroImage(3);
    } else {
      setHeroImage(1);
    }
  }, [heroImage]);

  const handlePrevious = () => {
    if (heroImage == 1) {
      setHeroImage(3);
    } else if (heroImage == 2) {
      setHeroImage(1);
    } else {
      setHeroImage(2);
    }
  };

  useEffect(() => {
    if (autoPlay) {
      const timeOut = setTimeout(handleNext, 2000);
      return () => clearTimeout(timeOut);
    }
  }, [autoPlay, handleNext]);

  const handleAutoplay = () => {
    setAutoPlay((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center relative">
      <div className="flex h-[642.4px] w-full bg-[#F6F5E8]">
        <div className="h-full w-[253px] shrink-0">
          <img
            src={icons.logo_icon}
            alt="logo"
            className="h-10 w-[120px] mt-[99px] ml-[35px]"
          />
        </div>
        {heroImage == 1 && (
          <div className="flex h-full grow">
            <div className="h-full grow mr-[80px]">
              <h2 className="text-[30px] mt-[110px] text-[#333333] !leading-[1.33]">
                Resurgent beginnings
              </h2>
              <p className="text-base mt-[15px] !leading-[1.7] text-[#333333]">
                This new year, wishes for revitalised energy take form in a
                curated collection of gifts for family and close companions.
                Receive complimentary red envelopes with purchases over HKD 900
                by entering NY25 at checkout.
              </p>
              <div className="">
                <button className="text-sm !leading-[1.4] mt-[30px] py-[19px] pr-[23px] pl-[23px] text-Suisse-Medium text-[#333333] flex justify-between items-center w-[300px] border border-[#33333333]">
                  Explore seasonal gifts
                  <img
                    src={icons.arrow_next}
                    alt="logo"
                    className="w-3 h-3 font-bold text-[#333333]"
                  />
                </button>
              </div>
            </div>
            <div className="h-full w-[759.5px]  shrink-0">
              <img
                src={images.image33_01}
                alt=""
                className="h-full w-full object-cover"
                height={642.4}
              />
              <img
                src={images.image41}
                alt=""
                className="absolute bottom-2.5 right-0 h-[350px] w-[350px]"
              />
            </div>
          </div>
        )}

        {heroImage == 2 && (
          <div className="flex h-full grow">
            <div className="h-full grow mr-[80px]">
              <p className="text-Suisse-Medium mt-[110px] text-sm !leading-[1.7] text-[#333333]">
                Brilliance, bottled
              </p>
              <h2 className="text-[30px] mt-[15px] text-[#333333] !leading-[1.33]">
                Skin Care+
              </h2>
              <p className="text-base mt-[15px] !leading-[1.7] text-[#333333]">
                A range of formulations—including a cream, an oil, serums, a
                masque and a toner—defined by generous measures of vitamins to
                offer a skin-supportive, replenishing boost.
              </p>
              <div className="">
                <button className="text-sm !leading-[1.4] mt-[30px] py-[19px] pr-[23px] pl-[23px] text-Suisse-Medium text-[#333333] flex justify-between items-center w-[300px] border border-[#33333333]">
                  Discover Skin Care+
                  <img
                    src={icons.arrow_next}
                    alt="logo"
                    className="w-3 h-3 font-bold text-[#333333]"
                  />
                </button>
              </div>
            </div>
            <div className="h-full w-[759.5px]  shrink-0">
              <img
                src={images.image5}
                alt=""
                className="h-full w-full object-cover"
                height={642.4}
              />
            </div>
          </div>
        )}
        {heroImage == 3 && (
          <div className="flex h-full grow">
            <div className="h-full grow mr-[80px]">
              <p className="text-Suisse-Medium mt-[110px] text-sm !leading-[1.7] text-[#333333]">
                Online only
              </p>
              <h2 className="text-[30px] mt-[15px] text-[#333333] !leading-[1.33]">
                Four bundles for hair, hands and home
              </h2>
              <p className="text-base mt-[15px] !leading-[1.7] text-[#333333]">
                The Home Necessities Duo, Adventurer Hand Care Trio, Basin
                Essentials and Hair Care Duo are arranged in a gift box suitable
                for sending directly to recipients. Available exclusively on
                aesop.com.
              </p>
              <div className="">
                <button className="text-sm !leading-[1.4] mt-[30px] py-[19px] pr-[23px] pl-[23px] text-Suisse-Medium text-[#333333] flex justify-between items-center w-[300px] border border-[#33333333]">
                  Explore bundles
                  <img
                    src={icons.arrow_next}
                    alt="logo"
                    className="w-3 h-3 font-bold text-[#333333]"
                  />
                </button>
              </div>
            </div>
            <div className="h-full w-[759.5px]  shrink-0">
              <img
                src={images.image7}
                alt=""
                className="h-full w-full object-cover"
                height={642.4}
              />
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center h-10 pl-[715px] w-full">
        <button
          onClick={handlePrevious}
          className="w-7 h-7 flex justify-center items-center mr-0.5"
        >
          <img
            src={icons.down}
            alt=""
            className="rotate-90 w-[14px] h-[14px]"
          />
        </button>
        <p className="text-[#666666] px-2 text-sm mr-0.5">
          {heroImage} / {3}
        </p>
        <button
          onClick={handleNext}
          className="w-7 h-7 flex justify-center items-center mr-0.5"
        >
          <img
            src={icons.down}
            alt=""
            className="-rotate-90 w-[14px] h-[14px]"
          />
        </button>
        <button
          onClick={handleAutoplay}
          className="w-7 h-7 flex items-center justify-center"
        >
          <img
            src={!autoPlay ? icons.play : icons.pause}
            alt=""
            className=" w-[14px] h-[14px]"
          />
        </button>
      </div>
    </div>
  );
};

export default HeroCarousal;
