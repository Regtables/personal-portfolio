import React from "react";
import Image from "next/image";

import { useNextSanityImage } from "next-sanity-image";

import styles from "./WebsitePreview.module.scss";
import { client } from "@/app/lib/sanity";
import { Webiste } from "@/app/lib/types";

import Popup from "../Layout/Popup/Popup";

const WebsitePreview = ({
  togglePreview,
  setTogglePreview,
  website,
}: {
  togglePreview: boolean;
  setTogglePreview: any;
  website: Webiste;
}) => {
  const {
    name,
    links: { url, github },
    type,
    image,
    logo,
    stack,
    description,
  } = website;
  const imageProps: any = useNextSanityImage(client, image);
  const logoProps: any = useNextSanityImage(client, logo);

  const handleClose = () => {
    setTogglePreview({ togglePreview: false, website: website });

    setTimeout(() => {
      setTogglePreview({ website: {} });
    }, 500);
  };

  return (
    <Popup toggle = {togglePreview} handleToggle={setTogglePreview}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.left}>
            {/* <div className={styles.logo}>
              <Image src={logoProps?.src} loader = {logoProps?.loader} height={30} width={30} alt={`${name} logo`} />
            </div> */}
            <div className={styles.name}>
              <h2>{name}</h2>
              <p>{type}</p>
            </div>
          </div>

          <div className={styles.right} onClick={handleClose}>
            <h4>Close</h4>
          </div>
        </div>

        <div className={styles.stack}>
          <h4>stack</h4>
          {/* {stack?.map((logo, i) => (
            <Image
              src={renderStackLogo(logo) || ""}
              height={40}
              width={40}
              alt={`${logo} logo`}
              key={i}
            />
          ))} */}
        </div>

        <div className={styles.description}>
          <p>{description}</p>
        </div>

        <div className={styles.image}>
          <Image
            src={imageProps.src}
            loader={imageProps.loader}
            fill
            alt={`${name} landing page`}
          />
        </div>

        <div className={styles.buttons}>
          <a href={url} target="_blank" rel="noreferrer">
            <button className={styles.button}>
              {/* <BsEyeFill /> */}
            </button>
          </a>

          <a href={github} target="_blank" rel="noreferrer">
            <button className={styles.button} id={styles.github}>
              {/* <BsGithub /> */}
            </button>
          </a>
        </div>
      </div>
    </Popup>
  );
};

export default WebsitePreview;
