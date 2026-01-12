import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const EMAIL = "chi.divinembah@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/divine-angel-mbah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app";
const TWITTER_URL = "https://x.com/code_deev?s=21";

const Contact = () => {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      alert("Email copied to clipboard");
    } catch {
      alert("Unable to copy email");
    }
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-12 flex flex-col gap-8">
          <p className="text-secondary text-[17px] max-w-md leading-relaxed">
            I’m open to opportunities, collaborations, and meaningful
            conversations. Feel free to reach out directly.
          </p>

          <div className="bg-tertiary p-6 rounded-xl">
            <div className="flex items-center gap-3">
              <span className="text-white text-lg font-medium flex gap-2">
                <FaEnvelope className="w-6 h-6" /> {EMAIL}
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={`mailto:${EMAIL}?subject=Portfolio%20Inquiry`}
                className="bg-primary py-2 px-6 rounded-lg text-white font-bold hover:opacity-90 transition"
              >
                Send email
              </a>

              <button
                onClick={copyEmail}
                className="border border-secondary py-2 px-6 rounded-lg text-white hover:border-white transition"
              >
                Copy email
              </button>
            </div>
          </div>

          <div className="h-px bg-secondary/30" />

          <div className="flex gap-8">
           <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#9aa5ff] transition flex items-center gap-2"
          >
            <FaLinkedin className="w-6 h-6" /> LinkedIn
          </a>

            <a
              href={TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9aa5ff] transition flex items-center gap-2"
            >
              <FaTwitter className="w-6 h-6" /> Twitter
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
