import ASSETS from "@/assets";
import Image from "next/image";

const { HI_THREE } = ASSETS.BITMOJI;

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center flex-wrap py-6">
      <div className="flex justify-center">
        <Image
          alt="hzburki hey bitmoji"
          className="grayscale w-auto h-60 rounded-e-full"
          src={HI_THREE}
        />
      </div>

      <div className="my-4 flex flex-col gap-8">
        <div className="text-center">
          <h1 className="font-semibold text-4xl text-blue-700">
            Haseeb Zia Burki
          </h1>
          <h2 className="font-light text-gray-800 text-xl">
            Software Engineer
          </h2>
        </div>

        <div className="mx-auto max-w-xl text-lg text-center text-gray-800 flex flex-col gap-4">
          <p>
            I’m a first time startup founder, a software engineer, a full stack
            web developer, a casual blogger and a tech enthusiast.
          </p>
          <p>Continue ⬇️ to read more about me 😃</p>
        </div>
      </div>
    </div>
  );
}
