import Image from "next/image";

export default function InfoSection() {
  return (
    <section className="w-5/12 p-5 ">
      <div className="after:bg-black/30 after:absolute after:inset-0 w-full h-full relative overflow-hidden rounded-l-2xl">
        <div className="absolute z-10 m-8">
          <Image
            alt="Logo CC"
            className="w-[120px]"
            height={100}
            width={100}
            src={"/assets/image/logo-full-cc.png"}
          />
        </div>
        <div className="absolute bottom-0 m-8 z-10">
          <h3 className="font-bold text-2xl">What is CC Weekly Report?</h3>
          <p className="font-normal text-base mt-4">
            Candidate College Weekly Report is a web app where you can fill out
            your weekly reports, see feedback, and view your working statistics.
          </p>
        </div>
        <Image
          height={100}
          width={100}
          src="/assets/gif/login-show.gif"
          className="h-full w-full object-cover absolute"
          alt="Login show gif"
        />
      </div>
    </section>
  );
}
