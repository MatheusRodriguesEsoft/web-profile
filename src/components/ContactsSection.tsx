"use client";
import { ActionsContext } from "@/context/ActionsContext";
import Image from "next/image";
import { useContext } from "react";

export const ContactsSection = () => {
  const { sectionRefs } = useContext(ActionsContext);

  return (
    <section
      className="contacts contacts_content  w-screen h-auto flex items-center justify-center flex-col"
      ref={sectionRefs[3]}
      id={"contacts"}
    >
      <div className="w-screen h-screen max-w-[1440px] px-[20px] md:px-[80px] lg:px-[120px] flex items-center justify-center flex-col ">
      Contato:
          <div>
            <Image
              src={"/images/icons/email.svg"}
              alt={"Email"}
              width={50}
              height={50}
            />
            <Image
              src={"/images/icons/whatsapp.svg"}
              alt={"Whatsapp"}
              width={50}
              height={50}
            />
            <Image
              src={"/images/icons/linkedin.svg"}
              alt={"Linkedin"}
              width={50}
              height={50}
            />
          </div>
      </div>
    </section>
  );
};
