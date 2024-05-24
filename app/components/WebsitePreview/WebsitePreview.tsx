import React, { FC } from "react";
import Image from "next/image";

import { useNextSanityImage } from "next-sanity-image";

import styles from "./WebsitePreview.module.scss";
import { client } from "@/app/lib/sanity";

import Popup from "../Layout/Popup/Popup";
import { useModal } from "@/app/context/ModalContext";
import { GitHub } from "react-feather";
import { Eye, X } from "lucide-react";


const WebsitePreview= () => {
  const { types, isOpen, data, handleModalClose } = useModal()
  const {activeWebsite: website } = data

  if (!website) return null

  const imageProps: any = useNextSanityImage(client, website.image);
  const logoProps: any = useNextSanityImage(client, website.logo);
  
  const isModalOpen = isOpen && types?.includes('workPreview')

  const renderStackImage = (tech: string) => {
    if(tech === 'sanity'){
      return '/sanity.svg'
    }if(tech === 'mui'){
      return '/mui.svg'
    } else {
      return `/${tech}.png`
    }
  }

  return (
    <Popup toggle = {isModalOpen} handleToggle={() => handleModalClose()}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.left}>
            <div className={styles.name}>
              <h2>{website.name}</h2>
              <p>{website.type}</p>
            </div>
          </div>

          <div className={styles.right} onClick={() => handleModalClose()}>
            <X />
          </div>
        </div>

        <div className={styles.stack}>
          <h4>stack</h4>
          <div className="flex gap-1">
            {website.stack.map((tech,i) => (
              <Image src={renderStackImage(tech)} height={30} width={30} alt = {tech} style={ tech === 'next' ? { filter: 'invert(100)'} : {}} />
            ))}
          </div>
        </div>

        <div className={styles.description}>
          <p>{website.description}</p>
        </div>

        <div className={styles.image}>
          <Image
            src={imageProps?.src}
            loader={imageProps?.loader}
            fill
            alt={`${website?.name} landing page`}
          />
        </div>

        <div className={styles.buttons}>
          <a href={website.links.url} target="_blank" rel="noreferrer">
            <button className={styles.button}>
              <Eye />
            </button>
          </a>

          <a href={website.links.github} target="_blank" rel="noreferrer">
            <button className={styles.button} id={styles.github}>
              <GitHub />
            </button>
          </a>
        </div>
      </div>
    </Popup>
  );
};

export default WebsitePreview;
