"use client";

import React from "react";
import Link from "next/link";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { ISocialMedia } from "./SocialMedia";

import "./style.scss";

const SocialMedia: React.FC<ISocialMedia.Props> = ({
  facebook,
  twitter,
  instagram,
  github,
  linkedin,
}) => {
  return (
    <div className="socialMediaSection">
      {facebook && (
        <Link href={facebook} target="_blank">
          <FaFacebook color="white" size="24px" />
        </Link>
      )}

      {twitter && (
        <Link href={twitter} target="_blank">
          <FaTwitter color="white" size="24px" />
        </Link>
      )}

      {instagram && (
        <Link href={instagram} target="_blank">
          <FaInstagram color="white" size="24px" />
        </Link>
      )}

      {github && (
        <Link href={github} target="_blank">
          <FaGithub color="white" size="24px" />
        </Link>
      )}

      {linkedin && (
        <Link href={linkedin} target="_blank">
          <FaLinkedin color="white" size="24px" />
        </Link>
      )}
    </div>
  );
};

export default SocialMedia;
